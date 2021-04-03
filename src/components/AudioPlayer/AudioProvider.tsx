import React, { ReactNode } from 'react'
import useAudioPlayer from './useAudioPlayer'
import { createContext } from 'use-context-selector'

export const AudioContext = createContext<React.MutableRefObject<HTMLAudioElement | null>>(null!)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const { audioRef } = useAudioPlayer()

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  )
}
