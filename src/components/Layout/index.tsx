import React, { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import Footer from './Footer'
import Div100vh from 'react-div-100vh'

import { motion, AnimatePresence, useViewportScroll, useTransform } from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"
import useMouse from 'src/hooks/useMouse'

type LayoutProps = {
  location?: Location
}

const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location?.pathname === rootPath
  const [transitionStarted, setTransitionStarted] = useState(false)
  const [transitionFinished, setTransitionFinished] = useState(false)
  const mouse = useMouse<HTMLDivElement>()
  const { scrollYProgress } = useViewportScroll()
  const multipleScaleY = useTransform(scrollYProgress, value => value * 2)

  useEffect(() => {
    if (!transitionStarted) {
      setTimeout(() => {
        setTransitionStarted(true)
      }, 2400)
    }
  }, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {!transitionStarted ? (
          <Div100vh>
            <motion.section
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className="fixed flex flex-col items-center justify-center w-screen h-screen text-5xl"
            >
              <StaticImage
                width={256}
                height={256}
                src="yowai-logo.png"
                alt="yowai-logo"
                className="w-64 h-64 mb-4 -mt-24"
              />
              <div className="flex flex-col items-center mb-6 space-y-2 font-sans">
                <h3 className="text-4xl italic font-extrabold text-yowai">
                  Don't kill.
              </h3>
                <h3 className="text-4xl italic font-extrabold text-yowai">
                  Protect your
              </h3>
                <h3 className="text-4xl italic font-extrabold text-yowai">
                  weakness.
              </h3>
              </div>
              <h1 className="flex justify-center text-6xl italic font-black text-white neumorphism">
                弱いzine
            </h1>
            </motion.section>
          </Div100vh>
        ) : (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onAnimationComplete={useCallback(() => setTransitionFinished(true), [])}
              className="container"
            >
              <Header className="container fixed inset-x-0 top-0 z-40" location={location} />
              <main>{children}</main>
              <Footer className="z-40 py-16" />
              <motion.div
                className="fixed top-0 right-0 z-50 w-3 h-screen bg-blue-600"
                style={{ scaleY: multipleScaleY, translateY: '-50%' }}
              />
            </motion.div>
          )}
      </AnimatePresence>
      <div
        ref={mouse.cursorRef}
        id="cursor"
        className={`fixed top-0 left-0 z-20 pointer-events-none ${transitionFinished ? 'visible' : 'invisible'}`}
      />
    </>
  )
}

export default Layout
