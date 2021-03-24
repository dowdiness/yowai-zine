import React, { useRef, useEffect, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { createContext } from 'use-context-selector'

export const AudioContext = createContext<React.MutableRefObject<HTMLAudioElement>|null>(null!)

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const { audio } = useStaticQuery(
    graphql`
      query {
        audio: allFile(filter: {id: {eq: "e8d9270b-16a0-5bdb-b214-c2aff1bb7160"}}) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  let audioRef: React.MutableRefObject<HTMLAudioElement> | null = null
  useEffect(() => {
    audioRef = useRef<HTMLAudioElement>(new Audio(audio.edges[0].node.publicURL))
  }, [])

  return (
    <AudioContext.Provider value={audioRef}>
      {children}
    </AudioContext.Provider>
  )
}
