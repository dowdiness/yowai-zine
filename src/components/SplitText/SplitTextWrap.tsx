import React, { useEffect, useState } from "react"
import { m as motion } from 'framer-motion'
import { emitter, LoadingFinishedEvent } from 'src/utils/emitter'

import { SplitTextLine } from './SplitTextLine'
import Scroll from 'src/components/Element/Scroll'

type SplitTextProps = {
  jp: string
  en: string
  width: number
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

export const SplitTextWrap: React.FC<SplitTextProps> = ({ jp, en,　width, ...rest }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [isScrollVisible, setIsScrollVisible] = useState(false)


  useEffect(() => {
    emitter.on(LoadingFinishedEvent, () => {
      setIsScrollVisible(false)
      setIsStarted(true)
    })
    return (
      emitter.off('LoadingFinishedEvent', () => {
        setIsScrollVisible(false)
        setIsStarted(true)
      })
    )
  }, [])

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
          className="font-black"
          text={jp}
          offset={1.4}
          width={width}
          delayOrder={1}
        />
        <SplitTextLine
          className="font-medium"
          text={en} offset={-13}
          width={width}
          delayOrder={2}
        />
      </motion.h1>
      <Scroll isScrollVisible={isScrollVisible} />
    </>)
}
