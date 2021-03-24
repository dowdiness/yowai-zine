import React, { ReactNode } from 'react'
import useAudioPlayer from 'src/hooks/useAudioPlayer'
import { createContext } from 'use-context-selector'

export const AudioContext = createContext<React.MutableRefObject<HTMLAudioElement>>(null!)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const { audioRef } = useAudioPlayer()

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  )
}
