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

  const render = () => {
    previousMouse.current = {
      x: lerp(previousMouse.current.x, currentMouse.current.x, 0.2),
      y: lerp(previousMouse.current.y, currentMouse.current.y, 0.2),
      scale: lerp(previousMouse.current.scale, currentMouse.current.scale, 0.08)
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
    currentMouse.current = {scale: 1.0, ...newMouse}
    previousMouse.current = {scale: 1.0, ...newMouse}

    gsap.to(cursorRef.current, {
      duration: 2,
      ease: 'Power3.easeOut',
      opacity: 0.75,
      force3D: false,
    })

    requestAnimationFrame(() => render())

    document.removeEventListener('mousemove', firstMoveHandler)
  }

  const enter = () => {
    currentMouse.current.scale = 0.4
  }

  const leave = () => {
    currentMouse.current.scale = 1.0
  }

  useLayoutEffect(() => {
    cursorRef.current.style.opacity = '0'
  }, [])

  // addEventListener to scale up cursor for new pages
  useEffect(() => {
    emitter.on('cursor-event', (ev) => {
      if (ev && ev.ref.current) {
        ev.ref.current.addEventListener('mouseenter', enter)
        ev.ref.current.addEventListener('mouseleave', leave)
      }
    })

    emitter.on('in-view-event', (ev) => {
      if (ev && ev.ref.current) {
        ev.ref.current.addEventListener('mouseenter', enter)
        ev.ref.current.addEventListener('mouseleave', leave)
      }
    })

    // return HistoryUnsubscribe to unsubscribe HistoryListener
    return globalHistory.listen(({ action, location }) => {
      if (action === 'PUSH') {
        leave()
        const waitTransitioningFinished = () => {
          if(globalHistory.transitioning) {
            setTimeout(waitTransitioningFinished, 200)
          } else {
            document.querySelectorAll('a, button, input, input, .gatsby-resp-image-image, .use-mouse').forEach(link => {
              link.addEventListener('mouseenter', enter)
              link.addEventListener('mouseleave', leave)
            })
          }
        }
        waitTransitioningFinished()
      }
    })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', firstMoveHandler)
    document.addEventListener('mousemove', moveHandler)
    document.querySelectorAll('a, button, input, .gatsby-resp-image-image, .use-mouse').forEach(link => {
      link.addEventListener('mouseenter', enter)
      link.addEventListener('mouseleave', leave)
    })

    return () => {
      document.removeEventListener('mousemove', moveHandler)
    }
  }, [])

  useEffect(() => {
    for (var i = 0; i < addEventTriggers.length; i++) {
      if (addEventTriggers[i]) {
        document.querySelectorAll('a, button, input, .gatsby-resp-image-image, .use-mouse').forEach(link => {
          link.addEventListener('mouseenter', enter)
          link.addEventListener('mouseleave', leave)
        })
      }
    }
  }, [...addEventTriggers])

  return { cursorRef }
}

export default useMouse
