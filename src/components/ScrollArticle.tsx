import React, { useRef, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { isClient } from 'src/utils'
const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }

export type ScrollArticleProps<
  DataType = object,
  > = {
    index: number
    frontmatter: GatsbyTypes.Maybe<DataType>
  }

const ScrollArticle: React.FCX<ScrollArticleProps<Pick<GatsbyTypes.Frontmatter, 'title' | 'author' | 'vol'>>> = ({ frontmatter, index, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15% 0px',
  })

  const zoomRef = useRef<HTMLHeadingElement>(null!)

  useEffect(() => {
    // not working in ssr https://github.com/gatsbyjs/gatsby/issues/15001
    if (isClient) {
      const inViewEvent = new CustomEvent('in-view-event', { detail: { ref: zoomRef } })
      dispatchEvent(inViewEvent)
    }
  }, [inView, zoomRef])

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
          data-cursor-src={frontmatter?.title}
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
          <span className="text-3xl sm:text-4xl">
            {frontmatter?.author}
          </span>
          <span className="text-5xl outline sm:text-6xl">
            {frontmatter?.title}
          </span>
        </motion.h2>
      )}
    </div>
  )
}

export default ScrollArticle
