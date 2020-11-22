import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { isClient } from 'src/utils'
const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }

export type ScrollArticleProps = {
    index: number
    to: string
    text?: string
    linkText: string
    useCursor: boolean
  }

const ScrollArticle: React.FCX<ScrollArticleProps> = ({ index, to, text, linkText, className, useCursor }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15% 0px',
  })

  const zoomRef = useRef<HTMLHeadingElement>(null!)

  useEffect(() => {
    // not working in ssr https://github.com/gatsbyjs/gatsby/issues/15001
    if (isClient && useCursor) {
      const inViewEvent = new CustomEvent('in-view-event', { detail: { ref: zoomRef } })
      dispatchEvent(inViewEvent)
    }
  }, [inView, zoomRef])

  if (useCursor) {
    return (
      <div
        ref={ref}
        data-skew
        className={`flex flex-col items-center mx-auto h-full space-y-16 text-center ${className}`}
      >
        {inView && (
          <motion.h2
            key={`title-${index}`}
            ref={zoomRef}
            data-cursor-src={linkText}
            initial={{
              y: 80,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition,
            }}
            className="flex flex-col items-center text-center"
          >
            {text &&
              <span className="text-3xl sm:text-4xl">
              { text}
              </span>
            }
            <Link to={to}>
              <span className="text-5xl outline sm:text-6xl">
                {linkText}
              </span>
            </Link>
          </motion.h2>
        )}
      </div>
    )
  } else {
    return (
      <div
        ref={ref}
        data-skew
        className={`flex flex-col items-center mx-auto h-full space-y-16 text-center ${className}`}
      >
        {inView && (
          <motion.h2
            key={`title-${index}`}
            ref={zoomRef}
            initial={{
              y: 80,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition,
            }}
            className="flex flex-col items-center text-center"
          >
            {text &&
              <span className="text-3xl sm:text-4xl">
              { text}
              </span>
            }
            <Link to={to}>
              <span className="text-5xl outline sm:text-6xl">
                {linkText}
              </span>
            </Link>
          </motion.h2>
        )}
      </div>
    )
  }
}

export default ScrollArticle
