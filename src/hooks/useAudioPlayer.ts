import { useEffect, useRef } from "react"
import { useAtom } from "jotai"
import { useResetAtom } from 'jotai/utils'
import {
  tracksAtom,
  prevTrackAtom,
  nextTrackAtom,
  durationAtom,
  trackProgressAtom,
  isPlayingAtom,
  playbackRateAtom
} from 'src/atoms/track'

function useAudioPlayer() {
  const [tracks] = useAtom(tracksAtom)
  const resetTracks = useResetAtom(tracksAtom)
  const [, toPrevTrack] = useAtom(prevTrackAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [duration, setDuration] = useAtom(durationAtom)
  const [trackProgress, setTrackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)
  const [playbackRate, setplaybackRate] = useAtom(playbackRateAtom)

  const audioRef = useRef<HTMLAudioElement|null>(null)
  const isReady = useRef(false)

  const setMediaMetadata = () => {
    if (navigator.mediaSession && tracks[0]) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: tracks[0].title,
        artist: tracks[0].artist,
        album: tracks[0].album,
        artwork: tracks[0].artworks
      })
    }
  }

  const setActionHandler = () => {
    if (navigator.mediaSession && tracks[0]) {
      navigator.mediaSession.setActionHandler('play', () => {
        setIsPlaying(true)
        navigator.mediaSession!.playbackState = 'playing'
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        setIsPlaying(false)
        navigator.mediaSession!.playbackState = 'paused'
      })
      navigator.mediaSession.setActionHandler('stop', () => {
        setIsPlaying(false)
        resetTracks()
        navigator.mediaSession!.playbackState = 'none'
        if (navigator.mediaSession && 'setPositionState' in navigator.mediaSession) {
          navigator.mediaSession.setPositionState!(undefined)
        }
      })

      const defaultSkipTime = 15

      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        const skipTime = details.seekOffset || defaultSkipTime
        if (audioRef.current) {
          audioRef.current.currentTime = Math.max(audioRef.current.currentTime - skipTime, 0)
          setTrackProgress(audioRef.current.currentTime)
        }
      })
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        const skipTime = details.seekOffset || defaultSkipTime
        if (audioRef.current) {
          audioRef.current.currentTime = Math.min(audioRef.current.currentTime + skipTime, audioRef.current.duration)
          setTrackProgress(audioRef.current.currentTime)
        }
      })
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.fastSeek && 'fastSeek' in audioRef?.current!) {
          // Only use fast seek if supported.
          audioRef?.current?.fastSeek(details.seekTime)
          setTrackProgress(audioRef?.current?.currentTime!)
          return
        } else if (audioRef.current) {
          audioRef.current.currentTime = details.seekTime
          setTrackProgress(audioRef.current.currentTime)
        }
      })
      navigator.mediaSession.setActionHandler('previoustrack', () => toPrevTrack(audioRef.current))
      navigator.mediaSession.setActionHandler('nexttrack', () => toNextTrack())
      // navigator.mediaSession.setActionHandler('skipad', function() { /* Code excerpted. */ })
    }
  }

  const onScrub = (value: string) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(value, 10)
      setTrackProgress(audioRef.current.currentTime)
    }
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  // updatePositionState https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setPositionState
  useEffect(() => {
    if (navigator.mediaSession && 'setPositionState' in navigator.mediaSession) {
      // 再生が終わった時にpositionがdurationを越えることがありエラーになる。
      if (duration > trackProgress) {
        navigator.mediaSession.setPositionState!({
          duration: duration,
          playbackRate: playbackRate,
          position: trackProgress,
        })
      }
    }
  }, [duration, playbackRate, trackProgress])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current?.pause()

    if (tracks[0] && isReady.current) {
      // remove previous audio eventlisners
      if(audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', (_event) => {
          if (audioRef.current?.ended) {
            toNextTrack()
          } else if (audioRef.current) {
            setTrackProgress(audioRef.current.currentTime)
          }
        })
        audioRef.current.removeEventListener('loadedmetadata', (_event) => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
          }
        })
      }
      audioRef.current = new Audio(tracks[0].audioSrc)
      setTrackProgress(audioRef.current.currentTime)
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata
      setMediaMetadata()
      setActionHandler()
      audioRef.current.play()
      setIsPlaying(true)
      audioRef.current.addEventListener('timeupdate', (_event) => {
        if (audioRef.current?.ended) {
          toNextTrack()
        } else if (audioRef.current) {
          setTrackProgress(audioRef.current.currentTime)
        }
      })
      audioRef.current.addEventListener('loadedmetadata', (_event) => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
        }
      })
    } else if (!isReady.current){
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [tracks])

  return {
    audioRef,
    onScrub,
    onScrubEnd,
  }
}

export default useAudioPlayer
