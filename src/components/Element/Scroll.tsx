import React, { useRef } from 'react'
import './scroll.css'

import { m as motion } from 'framer-motion'
import { emitter, CursorPayload, CursorEvent } from 'src/utils/emitter'

const smoothScroll = (scrollTarget: string) => {
  const targetElement = document.querySelector(scrollTarget)!
  const rectTop = targetElement.getBoundingClientRect().top
  // 現在のスクロール距離
  const offsetTop = window.pageYOffset
  // スクロール位置に持たせるバッファ
  const buffer = 50
  const top = rectTop + offsetTop - buffer

  window.scrollTo({
    top,
    behavior: "smooth"
  })
}

const scrollVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    duration: 0.3,
  }
}

export type ScrollProps = {
  isScrollVisible: boolean
}

export const Scroll: React.FCX<ScrollProps> = ({ isScrollVisible }) => {
  const scrollRef = useRef<HTMLDivElement>(null!)
  return (
    <motion.div
      id="scroll"
      ref={scrollRef}
      onClick={e => smoothScroll('[data-scroll]')}
      data-skew
      initial="hidden"
      animate={isScrollVisible ? "show" : "hidden"}
      variants={scrollVariants}
      onAnimationComplete={() => {
        emitter.emit<CursorPayload>(CursorEvent, {ref: scrollRef })
      }}
    >
      <span id="line"></span>
    </motion.div>
  )
}

export default Scroll
