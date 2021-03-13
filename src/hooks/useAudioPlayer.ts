import { useState, useEffect, useRef } from "react"
import { Track } from 'src/atoms/audioPlayer'

function useAudioPlayer(tracks: Track[]) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null!)
  const intervalRef = useRef<number>(0)
  const isReady = useRef(false)

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000)
  }

  const onScrub = (value: string) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = parseInt(value, 10)
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  let duration = 0
  let currentPercentage = "0%"

  useEffect(() => {
  audioRef.current = new Audio(tracks[trackIndex].audioSrc)
  // Destructure for conciseness
  duration = audioRef.current.duration

  currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%"
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause()

    audioRef.current = new Audio(tracks[trackIndex].audioSrc)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [trackIndex])

  return {
    trackIndex,
    trackStyling,
    duration,
    isPlaying,
    trackProgress,
    setIsPlaying,
    onScrub,
    onScrubEnd,
    toPrevTrack,
    toNextTrack,
  }
}

export default useAudioPlayer
