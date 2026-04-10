import React, { useRef, useEffect, useCallback } from 'react'
import Footer from './Footer'
import { AudioProvider } from 'src/components/AudioPlayer/AudioProvider'

import { m as motion, useScroll, LazyMotion } from 'framer-motion'

import AudioPlayer from 'src/components/AudioPlayer/AudioPlayer'
import Mouse from 'src/components/Layout/Mouse'
import Skew from 'src/components/Layout/Skew'
import useViewTransition from 'src/hooks/useViewTransition'

const loadFeatures = () => import('./domAnimation').then(res => res.default)

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const { scrollYProgress } = useScroll()
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const displayChildren = useViewTransition(children, location.pathname)

  const scrollToY = useCallback((clientY: number, smooth = false) => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: ratio * maxScroll, behavior: smooth ? 'smooth' : 'auto' })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      scrollToY(e.clientY)
    }

    const onMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      scrollToY(e.clientY, true)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    track.addEventListener('mousedown', onMouseDown)

    return () => {
      track.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [scrollToY])

  return (
    <LazyMotion strict features={loadFeatures}>
      <div
        className="container use-cursor-none"
      >
        <AudioProvider>
          <main style={{ viewTransitionName: 'page-content' }}>{displayChildren}</main>
          <AudioPlayer />
        </AudioProvider>
        <Footer className="py-16" />
        <div
          ref={trackRef}
          className="fixed top-0 right-0 z-10 w-6 h-screen"
          style={{ touchAction: 'none', cursor: 'pointer' }}
        >
          <motion.div
            className="absolute top-0 right-0 w-2 bg-blue-600 origin-top"
            style={{ height: '100%', scaleY: scrollYProgress, isolation: 'isolate' }}
          />
        </div>
      </div>
      <Mouse />
      <Skew />
    </LazyMotion>
  )
}

export default Layout
