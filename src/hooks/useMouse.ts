import { useRef, useLayoutEffect, useEffect, MutableRefObject } from 'react'
import { gsap } from 'gsap'
import { lerp, getMousePos } from 'src/utils'
import { globalHistory } from '@reach/router'

export interface Mouse {
  x: number
  y: number
  scale: number
}

export interface MouseData<T> {
  cursorRef: MutableRefObject<T>
}

const useMouse =  <T extends HTMLElement>(transitionFinished: boolean): MouseData<T> => {
  const cursorRef = useRef<T>(null!)
  const currentMouse = useRef<Mouse>({
    x: 0,
    y: 0,
    scale: 1,
  })
  const previousMouse = useRef<Mouse>({
    x: 0,
    y: 0,
    scale: 1,
  })

  const render = () => {
    previousMouse.current = {
      x: lerp(previousMouse.current.x, currentMouse.current.x, 0.2),
      y: lerp(previousMouse.current.y, currentMouse.current.y, 0.2),
      scale: lerp(previousMouse.current.scale, currentMouse.current.scale, 0.05)
    }

    cursorRef.current.style.transform = `translateX(${previousMouse.current.x}px) translateY(${previousMouse.current.y}px) scale(${previousMouse.current.scale})`

    requestAnimationFrame(() => render())
  }

  const moveHandler = (event: MouseEvent) => {
    const newMouse = getMousePos(event)
    currentMouse.current = {...currentMouse.current , ...newMouse}
  }

  const firstMoveHandler = (event: MouseEvent) => {
    const newMouse = getMousePos(event)
    currentMouse.current = {scale: 1, ...newMouse}
    previousMouse.current = {scale: 1, ...newMouse}

    gsap.to(cursorRef.current, {
      duration: 2,
      ease: 'Power3.easeOut',
      opacity: 1,
    })

    requestAnimationFrame(() => render())

    document.removeEventListener('mousemove', firstMoveHandler)
  }

  const enter = () => {
    currentMouse.current.scale = 4.5
  }

  const leave = () => {
    currentMouse.current.scale = 1
  }

  useLayoutEffect(() => {
    cursorRef.current.style.opacity = '0'
  }, [transitionFinished])

  useEffect(() => {
    document.addEventListener('mousemove', firstMoveHandler)
    document.addEventListener('mousemove', moveHandler)

    globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        leave()
        const waitTransitioningFinished = () => {
          if(globalHistory.transitioning) {
            setTimeout(waitTransitioningFinished, 200)
          } else {
            document.querySelectorAll('a, button, .gatsby-resp-image-image').forEach(link => {
              link.addEventListener('mouseenter', enter)
              link.addEventListener('mouseleave', leave)
            })
          }
        }
        waitTransitioningFinished()
      }
    })

    if(transitionFinished) {
      document.querySelectorAll('a, button, .gatsby-resp-image-image').forEach(link => {
        link.addEventListener('mouseenter', enter)
        link.addEventListener('mouseleave', leave)
      })
    }

    return () => {
      document.removeEventListener('mousemove', moveHandler)
    }
  }, [transitionFinished])

  return { cursorRef }
}

export default useMouse
