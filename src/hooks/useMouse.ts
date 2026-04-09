import { useRef, useLayoutEffect, useEffect, MutableRefObject } from 'react'
import { gsap } from 'gsap'
import { lerp, getMousePos } from 'src/utils'
import { globalHistory } from '@reach/router'
import { emitter } from 'src/utils/emitter'

export interface Mouse {
  x: number
  y: number
  scale: number
}

export interface MouseData<T> {
  cursorRef: MutableRefObject<T>
}

const useMouse =  <T extends HTMLElement>(...addEventTriggers: boolean[]): MouseData<T> => {
  const cursorRef = useRef<T>(null!)
  const currentMouse = useRef<Mouse>({
    x: 0,
    y: 0,
    scale: 1.0,
  })
  const previousMouse = useRef<Mouse>({
    x: 0,
    y: 0,
    scale: 1.0,
  })

  const rafId = useRef<number>(0)

  const render = () => {
    if (!cursorRef.current) return

    previousMouse.current = {
      x: lerp(previousMouse.current.x, currentMouse.current.x, 0.2),
      y: lerp(previousMouse.current.y, currentMouse.current.y, 0.2),
      scale: lerp(previousMouse.current.scale, currentMouse.current.scale, 0.08)
    }

    cursorRef.current.style.transform = `translateX(${previousMouse.current.x}px) translateY(${previousMouse.current.y}px) scale(${previousMouse.current.scale})`

    rafId.current = requestAnimationFrame(() => render())
  }

  const moveHandler = (event: MouseEvent) => {
    const newMouse = getMousePos(event)
    currentMouse.current = {...currentMouse.current , ...newMouse}
  }

  const firstMoveHandler = (event: MouseEvent) => {
    const newMouse = getMousePos(event)
    currentMouse.current = {scale: 1.0, ...newMouse}
    previousMouse.current = {scale: 1.0, ...newMouse}

    gsap.to(cursorRef.current, {
      duration: 2,
      ease: 'Power3.easeOut',
      opacity: 0.75,
      force3D: false,
    })

    rafId.current = requestAnimationFrame(() => render())

    document.removeEventListener('mousemove', firstMoveHandler)
  }

  const enter = () => {
    currentMouse.current.scale = 0.4
  }

  const leave = () => {
    currentMouse.current.scale = 1.0
  }

  const hoverTargetsRef = useRef<Set<Element>>(new Set())

  const addHoverListeners = (el: Element) => {
    if (hoverTargetsRef.current.has(el)) return
    hoverTargetsRef.current.add(el)
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
  }

  const addHoverToInteractiveElements = () => {
    document.querySelectorAll('a, button, input, .gatsby-resp-image-image, .use-mouse').forEach(addHoverListeners)
  }

  useLayoutEffect(() => {
    cursorRef.current.style.opacity = '0'
  }, [])

  // addEventListener to scale up cursor for new pages
  useEffect(() => {
    const cursorHandler = (ev: { ref: React.MutableRefObject<HTMLElement> } | undefined) => {
      if (ev && ev.ref.current) {
        addHoverListeners(ev.ref.current)
      }
    }

    emitter.on('cursor-event', cursorHandler)
    emitter.on('in-view-event', cursorHandler)

    // return HistoryUnsubscribe to unsubscribe HistoryListener
    const unsubscribeHistory = globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        leave()
        const waitTransitioningFinished = () => {
          if(globalHistory.transitioning) {
            setTimeout(waitTransitioningFinished, 200)
          } else {
            addHoverToInteractiveElements()
          }
        }
        waitTransitioningFinished()
      }
    })

    return () => {
      emitter.off('cursor-event', cursorHandler)
      emitter.off('in-view-event', cursorHandler)
      unsubscribeHistory()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', firstMoveHandler)
    document.addEventListener('mousemove', moveHandler)
    addHoverToInteractiveElements()

    return () => {
      document.removeEventListener('mousemove', firstMoveHandler)
      document.removeEventListener('mousemove', moveHandler)
      cancelAnimationFrame(rafId.current)
      hoverTargetsRef.current.forEach(el => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
      hoverTargetsRef.current.clear()
    }
  }, [])

  useEffect(() => {
    if (addEventTriggers.some(Boolean)) {
      addHoverToInteractiveElements()
    }
  }, [...addEventTriggers])

  return { cursorRef }
}

export default useMouse
