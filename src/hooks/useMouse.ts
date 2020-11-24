import { useRef, useLayoutEffect, useEffect, MutableRefObject } from 'react'
import { gsap } from 'gsap'
import { lerp, getMousePos } from 'src/utils'

export interface Mouse {
  x: number
  y: number
}

export interface MouseData<T> {
  cursorRef: MutableRefObject<T>
}

const useMouse =  <T extends HTMLElement>(): MouseData<T> => {
  const cursorRef = useRef<T>(null!)
  const currentMouse = useRef<Mouse>({
    x: 0,
    y: 0,
  })
  const previousMouse = useRef<Mouse>({
    x: 0,
    y: 0,
  })

  const render = () => {
    previousMouse.current = {
      x: lerp(previousMouse.current.x, currentMouse.current.x, 0.2),
      y: lerp(previousMouse.current.y, currentMouse.current.y, 0.2)
    }

    cursorRef.current.style.transform = `translateX(${previousMouse.current.x}px) translateY(${previousMouse.current.y}px)`

    requestAnimationFrame(() => render())
  }

  const moveHandler = (event: MouseEvent) => {
    currentMouse.current = getMousePos(event)
  }

  const firstMoveHandler = (event: MouseEvent) => {
    currentMouse.current = getMousePos(event)
    previousMouse.current = getMousePos(event)

    gsap.to(cursorRef.current, {
      duration: 2,
      ease: 'Power3.easeOut',
      opacity: 1,
    })

    requestAnimationFrame(() => render())

    document.removeEventListener('mousemove', firstMoveHandler)
  }

  useLayoutEffect(() => {
    cursorRef.current.style.opacity = '0'
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', firstMoveHandler)
    document.addEventListener('mousemove', moveHandler)

    return () => {
      document.removeEventListener('mousemove', moveHandler)
    }
  }, [])

  return { cursorRef }
}

export default useMouse
