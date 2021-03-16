import { useState, useEffect, useRef } from "react"
import { useAtom } from "jotai"
import { Track, tracksAtom, nextTrackAtom, durationAtom, trackProgressAtom, isPlayingAtom } from 'src/atoms/track'

function useAudioPlayer() {
  const [tracks] = useAtom(tracksAtom)
  const [, toNextTrack] = useAtom(nextTrackAtom)
  const [, setDuration] = useAtom(durationAtom)
  const [, setTrackProgress] = useAtom(trackProgressAtom)
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom)

  const audioRef = useRef<HTMLAudioElement|null>(null)
  const isReady = useRef(false)

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
            console.log(audioRef.current.duration)
            setDuration(audioRef.current.duration)
          }
        })
      }
      audioRef.current = new Audio(tracks[0].audioSrc)
      setTrackProgress(audioRef.current.currentTime)
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
