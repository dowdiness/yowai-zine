import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { m as motion, useViewportScroll, useTransform } from 'framer-motion'
import useMouse from 'src/hooks/useMouse'

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const mouse = useMouse<HTMLDivElement>(true)
  const { scrollYProgress } = useViewportScroll()
  const multipleScaleY = useTransform(scrollYProgress, value => value * 2)

  return (
    <>
      <div
        className="container"
      >
        {/* <Header className="container fixed inset-x-0 top-0 z-40" location={location} /> */}
        <main>{children}</main>
        {/* <Footer className="z-40 py-16" /> */}
        {/* <motion.div
          className="fixed top-0 right-0 z-50 w-2 h-screen bg-blue-600"
          style={{ scaleY: multipleScaleY, translateY: '-50%' }}
        /> */}
      </div>
      <div
        ref={mouse.cursorRef}
        id="cursor"
        className={`fixed top-0 left-0 z-20 pointer-events-none hidden sm:block`}
      />
    </>
  )
}

export default Layout
