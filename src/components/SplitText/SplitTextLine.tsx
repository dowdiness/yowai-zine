import React, { useMemo, useState, useEffect } from "react"
import { m as motion } from 'framer-motion'
import { isWhiteSpace, convertRemToPx } from 'src/utils'
import { useAtom } from "jotai"
import { windowSizeAtom } from "src/store"

export type SplitTextLineProps = {
  text: string
  offset: number
  easing?: number[]
  duration?: number
  delayOrder: number
}

export const SplitTextLine: React.FCX<SplitTextLineProps> = ({
  className,
  text,
  offset,
  easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
  duration = 0.004,
  delayOrder, // order of appearance
}) => {
  const [{ width },] = useAtom(windowSizeAtom)

  const chars = text.split("")
  const length = text.length + offset

  const [delay, setDelay] = useState(0.025);
  const fontSize =
    width === null
      ? undefined
      : width >= 1280
        ? 1280 / length
        : width >= 992
          ? (width - convertRemToPx(6)) / length
          : width >= 768
            ? (width - convertRemToPx(5)) / length
            : width / length

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
      className={className}
      style={{ fontSize: fontSize ? `${fontSize}px` : undefined }}
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
