import { useRef, useEffect } from 'react'

export const useScrollLoop = <T extends HTMLElement>() => {
  let disableScroll = false
  let containerRef = useRef<T>(null!)
  let scrollPos = useRef<number>(0)

  const getScrollableHeight = () => {
    return (document.documentElement.scrollHeight * 0.5) - document.documentElement.clientHeight
  }

  function scrollUpdate () {
    if (!disableScroll) {
      scrollPos.current = containerRef.current.scrollTop - (containerRef.current.clientTop || 0)

      if (getScrollableHeight() + document.documentElement.clientHeight <= document.documentElement.scrollTop) {
        // Scroll to the top when you’ve reached the bottom
        document.documentElement.scrollTop = 1 // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true
      } else if (document.documentElement.scrollTop <= 0) {
        // Scroll to the bottom when you reach the top
        document.documentElement.scrollTop = getScrollableHeight() + document.documentElement.clientHeight
        disableScroll = true
      }
    }

    if (disableScroll) {
      // Disable scroll-jumping for a short time to avoid flickering
      window.setTimeout(function () {
        disableScroll = false
      }, 40)
    }
  }

  const scrollFrame = useRef<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      scrollFrame.current = requestAnimationFrame(scrollUpdate)
    }, {
      capture: false,
      passive: true,
    })

    return () => {
      cancelAnimationFrame(scrollFrame.current)
    }
  },[])
  return {
    containerRef,
  }
}
