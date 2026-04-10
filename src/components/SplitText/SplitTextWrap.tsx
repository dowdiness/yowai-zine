import React, { useEffect, useState } from "react"
import { m as motion } from 'framer-motion'
import { emitter } from 'src/utils/emitter'

import { SplitTextLine } from './SplitTextLine'
import Scroll from 'src/components/Element/Scroll'
import './split-text.css'

type SplitTextProps = {
  jp: string
  en: string
}

const variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      // delay: delayOrder ? delayOrder * offset : delay,
      delay: 0,
      staggerChildren: 0.09
    }
  }
}

export const SplitTextWrap: React.FC<SplitTextProps> = ({ jp, en, ...rest }) => {
  const [isStarted, setIsStarted] = useState(() => typeof localStorage !== 'undefined' && !!localStorage.getItem('previousPath'))
  const [isScrollVisible, setIsScrollVisible] = useState(false)

  useEffect(() => {
    if (isStarted) return

    const start = () => setIsStarted(true)
    emitter.on('loading-finished-event', start)
    return () => {
      emitter.off('loading-finished-event', start)
    }
  }, [isStarted])

  return (
    <>
      <motion.h1
        data-skew
        initial="hidden"
        animate={isStarted ? "show" : "hidden"}
        variants={variants}
        className="flex flex-col items-center space-y-6 font-sans text-center"
        onAnimationComplete={() => {
          if (isStarted) {
            setIsScrollVisible(true)
          }
        }}
      >
        <SplitTextLine
          id="split-text-jp"
          className="font-black"
          text={jp}
          delayOrder={1}
        />
        <SplitTextLine
          id="split-text-en"
          className="font-medium"
          text={en}
          delayOrder={2}
        />
      </motion.h1>
      <Scroll isScrollVisible={isScrollVisible} />
    </>)
}
