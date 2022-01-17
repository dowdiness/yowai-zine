import React, { ReactNode, createContext, useEffect, useRef } from 'react'
import useAudioPlayer from './useAudioPlayer'
import { useAtom } from "jotai"
import { isLoadingAtom } from 'src/atoms/track'
import NProgress from "accessible-nprogress"

export const AudioContext = createContext<React.MutableRefObject<HTMLAudioElement|null>>(null!)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading] = useAtom(isLoadingAtom)
  const { audioRef } = useAudioPlayer()
  const isReadyRef = useRef(false)

  useEffect(() => {
    if (isReadyRef.current === true) {
      if (isLoading === true) {
        NProgress.start()
      } else {
        NProgress.done()
      }
    } else {
      isReadyRef.current = true
    }
    return (() => {
      NProgress.done()
    })
  }, [isLoading])

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  )
}
