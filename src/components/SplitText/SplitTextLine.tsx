import React, { useMemo, useState, useEffect } from "react"
import { m as motion } from 'framer-motion'
import { isWhiteSpace } from 'src/utils'

export type SplitTextLineProps = {
  id?: string
  text: string
  easing?: number[]
  duration?: number
  delayOrder: number
}

export const SplitTextLine: React.FCX<SplitTextLineProps> = ({
  id,
  className,
  text,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  duration = 0.004,
  delayOrder, // order of appearance
}) => {

  const chars = text.split("")

  const [delay, setDelay] = useState(0.025);

  const delayOffset = 0.2;

  useEffect(() => {
    if (delayOrder) {
      setDelay(delayOrder * delayOffset)
    }
  }, [delayOrder, delayOffset])

  const transition = useMemo(
    () => ({
      duration,
      delay,
      ease: easing
    }),
    [duration, delay, easing]
  )

  const staggerTransition = {
    duration,
    ease: easing
  }

  const variants = {
    hidden: { opacity: 0, transition },
    show: {
      y: 0,
      opacity: 1,
      transition: staggerTransition
    }
  };

  return (
    <span
      aria-label={text}
      id={id}
      className={className}
    >
      {chars.map((char, i) => {
        return (
          <motion.span
            key={i}
            aria-hidden="true"
            variants={variants}
          >
            {char + (isWhiteSpace(char) ? "\u00A0" : "")}
          </motion.span>
        )
      })}
    </span>
  )
}
