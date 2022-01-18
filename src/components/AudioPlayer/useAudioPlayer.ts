import { useEffect, useRef } from "react"
import { useAtom } from "jotai"
import { useResetAtom } from 'jotai/utils'
import {
  Track,
  tracksAtom,
  prevTrackAtom,
  nextTrackAtom,
  durationAtom,
  trackProgressAtom,
  isPlayingAtom,
  isPlayedAtom,
  isNotClickedAtom,
  playbackRateAtom,
  volumeAtom,
  isMuteAtom,
  skipTimeAtom,
  currentTimeAtom,
  isLoadingAtom,
} from 'src/atoms/track'

function useAudioPlayer() {
  const [tracks] = useAtom(tracksAtom)
  const resetTracks = useResetAtom(tracksAtom)
  const [, toPrevTrack] = useAtom(prevTrackAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [duration, setDuration] = useAtom(durationAtom)
  const [trackProgress, setTrackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)
  const [isPlayed, setIsPlayed] = useAtom(isPlayedAtom)
  const [isNotClicked, setIsNotClicked] = useAtom(isNotClickedAtom)
  const [playbackRate] = useAtom(playbackRateAtom)
  const [volume] = useAtom(volumeAtom)
  const [isMute] = useAtom(isMuteAtom)
  const [skipTime, setSkipTime] = useAtom(skipTimeAtom)
  const [currentTime] = useAtom(currentTimeAtom)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

  const audioRef = useRef<HTMLAudioElement>(null!)
  const isReady = useRef(false)

  const setMediaMetadata = (audioTracks: Track[]) => {
    if (navigator.mediaSession && audioTracks[0]) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: audioTracks[0].title,
        artist: audioTracks[0].artist,
        album: audioTracks[0].album,
        artwork: [{ src: '' }]
      })
    }
    updatePositionState()
  }

  const updatePositionState = () => {
    if (navigator.mediaSession && 'setPositionState' in navigator.mediaSession) {
      // 再生が終わった時にpositionがdurationを越えることがありエラーになる。
      if (duration > trackProgress && audioRef?.current) {
        navigator.mediaSession.setPositionState!({
          duration: audioRef.current.duration,
          playbackRate: audioRef.current.playbackRate,
          position: audioRef.current.currentTime,
        })
      }
    }
  }

  const setActionHandler = () => {
    if (navigator.mediaSession && tracks[0]) {
      navigator.mediaSession.setActionHandler('play', async () => {
        await audioRef?.current?.play()
        setIsPlaying(true)
        navigator.mediaSession!.playbackState = 'playing'
      })
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef?.current?.pause()
        setIsPlaying(false)
        navigator.mediaSession!.playbackState = 'paused'
      })
      navigator.mediaSession.setActionHandler('stop', () => {
        audioRef?.current?.pause()
        setIsPlaying(false)
        resetTracks()
        navigator.mediaSession!.playbackState = 'none'
        if (navigator.mediaSession && 'setPositionState' in navigator.mediaSession) {
          navigator.mediaSession.setPositionState!(null!)
        }
      })

      const defaultSkipTime = 10

      navigator.mediaSession.setActionHandler('seekbackward', (details) => {
        const skipTime = details.seekOffset || defaultSkipTime
        if (audioRef?.current) {
          audioRef.current.currentTime = Math.max(audioRef.current.currentTime - skipTime, 0)
          setTrackProgress(audioRef.current.currentTime)
          updatePositionState()
        }
      })
      navigator.mediaSession.setActionHandler('seekforward', (details) => {
        const skipTime = details.seekOffset || defaultSkipTime
        if (audioRef?.current) {
          audioRef.current.currentTime = Math.min(audioRef.current.currentTime + skipTime, audioRef.current.duration)
          setTrackProgress(audioRef.current.currentTime)
          updatePositionState()
        }
      })
      navigator.mediaSession.setActionHandler('seekto', (details) => {
        if (details.fastSeek && 'fastSeek' in audioRef?.current!) {
          // Only use fast seek if supported.
          audioRef?.current?.fastSeek(details.seekTime)
          setTrackProgress(audioRef?.current?.currentTime!)
          return
        } else if (audioRef?.current) {
          audioRef.current.currentTime = details.seekTime
          setTrackProgress(audioRef.current.currentTime)
          updatePositionState()
        }
      })
      navigator.mediaSession.setActionHandler('previoustrack', () => toPrevTrack(audioRef.current))
      navigator.mediaSession.setActionHandler('nexttrack', () => toNextTrack())
    }
  }

  useEffect(() => {
    audioRef.current = new Audio('/001.wav')
    return (() => {
      // prevent memory leak
      audioRef.current?.pause()
    })
  }, [])

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
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMute
    }
  }, [isMute])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
      setTrackProgress(audioRef.current.currentTime)
    }
  }, [currentTime])

  useEffect(() => {
    if (audioRef.current) {
      // seekforward
      if (skipTime > 0) {
        audioRef.current.currentTime = Math.min(audioRef.current.currentTime + skipTime, audioRef.current.duration)
        //seekbackward
      } else if (skipTime < 0) {
        audioRef.current.currentTime = Math.max(audioRef.current.currentTime + skipTime, 0)
      } else {
        return
      }
      setTrackProgress(audioRef.current.currentTime)
      updatePositionState()
      setSkipTime(0)
    }
  }, [skipTime])

  useEffect(() => {
    if(isReady.current && audioRef.current) {
      if (isPlaying && !isPlayed) {
        audioRef.current.play().then(_ => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
          }
          setActionHandler()
        }).catch((error) => console.error(error))
      } else if (isPlayed) {
        setDuration(audioRef.current.duration)
        setTrackProgress(audioRef.current.currentTime)
        setMediaMetadata(tracks)
        setActionHandler()
        setIsPlaying(true)
        setIsNotClicked(false)
        setIsPlayed(false)
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    if (tracks[0] && isReady.current && isNotClicked && audioRef.current) {
      audioRef.current.pause()
      setIsLoading(true)
      audioRef.current.src = tracks[0].audioSrc
      audioRef.current.load()
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaMetadata
      audioRef.current?.play().then(_ => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration)
          setTrackProgress(audioRef.current.currentTime)
          setMediaMetadata(tracks)
          setActionHandler()
          setIsLoading(false)
          setIsPlaying(true)
          setIsNotClicked(false)
        }
      }).catch((error) => console.error(error))
    } else if (!isReady.current){
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [tracks])

  useEffect(() => {
    if (isReady.current) {
      // remove previous audio eventlisners
      audioRef.current?.removeEventListener('timeupdate', (_event) => {
        if (audioRef.current?.ended) {
          toNextTrack()
        } else if (audioRef.current) {
          setTrackProgress(audioRef.current.currentTime)
        }
      })
      audioRef.current?.addEventListener('timeupdate', (_event) => {
        if (audioRef.current?.ended) {
          toNextTrack()
        } else if (audioRef.current) {
          setTrackProgress(audioRef.current.currentTime)
        }
      })
    }
  }, [audioRef.current])

  return {
    audioRef,
  }
}

export default useAudioPlayer
