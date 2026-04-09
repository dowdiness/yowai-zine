import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { AudioProvider } from 'src/components/AudioPlayer/AudioProvider'

import { m as motion, useViewportScroll, useTransform, LazyMotion } from 'framer-motion'

import AudioPlayer from 'src/components/AudioPlayer/AudioPlayer'
import Mouse from 'src/components/Layout/Mouse'
import Skew from 'src/components/Layout/Skew'

const loadFeatures = () => import('./domAnimation').then(res => res.default)

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const { scrollYProgress } = useViewportScroll()
  const multipleScaleY = useTransform(scrollYProgress, value => value * 2)

  return (
    <LazyMotion strict features={loadFeatures}>
      <div
        className="container"
      >
        {/* <Header className="container fixed inset-x-0 top-0 z-40" location={location} /> */}
        <AudioProvider>
          <main>{children}</main>
          <AudioPlayer />
        </AudioProvider>
        <Footer className="py-16" />
        <motion.div
          className="fixed top-0 right-0 z-10 w-2 h-screen bg-blue-600"
          style={{ scaleY: multipleScaleY, translateY: '-50%', isolation: 'isolate' }}
        />
      </div>
      <Mouse />
      <Skew />
    </LazyMotion>
  )
}

export default Layout
