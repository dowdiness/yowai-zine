import React, { useMemo, useState, useEffect } from "react"
import { m as motion } from 'framer-motion'
import { isWhiteSpace, convertRemToPx } from 'src/utils'

const calcFontSize = (len: number, width: number) => {
  return width >= 1280
  ? 1280 / len
  : width >= 992
    ? (width - convertRemToPx(6)) / len
    : width >= 768
      ? (width - convertRemToPx(5)) / len
      : width / len
}

export type SplitTextLineProps = {
  text: string
  offset: number
  width: number
  easing?: number[]
  duration?: number
  delayOrder: number
}

export const SplitTextLine: React.FCX<SplitTextLineProps> = ({
  className,
  text,
  offset,
  width,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  duration = 0.004,
  delayOrder, // order of appearance
}) => {
  const chars = text.split("")
  const length = text.length + offset

  const [delay, setDelay] = useState(0.025);

  const delayOffset = 0.2;

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * delayOffset);
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
      className={className}
      style={{ fontSize: `${calcFontSize(length, width)}px`}}
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
