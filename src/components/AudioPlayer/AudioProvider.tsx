import React, { useRef, ReactNode } from 'react'

import { createContext } from 'use-context-selector'

export const AudioContext = createContext<React.MutableRefObject<HTMLAudioElement>|null>(null!)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio('001.wav'))

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  )
}
