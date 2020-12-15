import { useRef } from 'react'
import useIsomorphicLayoutEffect from 'src/hooks/useIsomorphicLayoutEffect'
import { gsap } from 'gsap'
import { lerp, getMousePos, getSiblings } from 'src/utils'

let mouse = { x: 0, y: 0 }

class Cursor {
  Cursor: HTMLElement
  Item: NodeListOf<Element>
  HoverElementSelectors: string
  cursorConfigs: {
    x: { previous: number; current: number; amt: number }
    y: { previous: number; current: number; amt: number }
  }
  onMouseMoveEv: (this: Window, ev: MouseEvent) => void

  constructor(el: HTMLElement, hoverElementSelectors: string) {
    this.Cursor = el
    this.Cursor.style.opacity = '0'
    this.HoverElementSelectors = hoverElementSelectors
    this.Item = document.querySelectorAll(this.HoverElementSelectors)
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    }

    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x
      this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y

      gsap.to(this.Cursor, {
        duration: 1,
        ease: 'Power3.easeOut',
        opacity: 1,
      })

      requestAnimationFrame(() => this.render())
      window.removeEventListener('mousemove', this.onMouseMoveEv)
    }
    window.addEventListener('mousemove', ev => (mouse = getMousePos(ev)))
    window.addEventListener('mousemove', this.onMouseMoveEv)
    // @ts-ignore
    window.addEventListener('in-view-event', ev => this.onScaleMouse(ev.detail.ref))
  }

  onScaleMouse(ref: React.MutableRefObject<HTMLHeadingElement>) {
    // If I am hovering on the item for on page load I want to scale the cursor media
    if (ref.current) {
      if (ref.current.matches(':hover')) {
        this.setSource(ref.current)
        this.scaleAnimation(this.Cursor.children[0], 0.4)
      }
      ref.current.addEventListener('mouseenter', () => {
        this.setSource(ref.current)
        this.scaleAnimation(this.Cursor.children[0], 0.4)
      })
      ref.current.addEventListener('mouseleave', () => {
        this.scaleAnimation(this.Cursor.children[0], 0)
      })
      ref.current.children[1].addEventListener('mouseenter', () => {
        this.Cursor.classList.add('media-blend')
        this.scaleAnimation(this.Cursor.children[0], 1)
      })
      ref.current.children[1].addEventListener('mouseleave', () => {
        this.Cursor.classList.remove('media-blend')
        this.scaleAnimation(this.Cursor.children[0], 0.4)
      })
    }
  }

  scaleAnimation(el: Element, amt: number) {
    gsap.to(el, {
      duration: 1.2,
      ease: 'Power3.easeOut',
      scale: amt,
    })
  }

  setSource(el: Element) {
    const src = el.getAttribute(
      this.HoverElementSelectors.replace(/[\[\]]/g, '')
    )
    const source = document.querySelector(`#${src}`)
    if (!source) {
      console.warn('There is no source')
      return
    }
    const siblings = getSiblings(source)
    if (source.id === src) {
      gsap.set(source, { zIndex: 50, opacity: 1 })
      siblings.forEach(i => {
        gsap.set(i, { zIndex: 1, opacity: 0 })
      })
    }
  }

  render() {
    this.cursorConfigs.x.current = mouse.x
    this.cursorConfigs.y.current = mouse.y

    // lerp
    this.cursorConfigs.x.previous = lerp(
      this.cursorConfigs.x.previous,
      this.cursorConfigs.x.current,
      this.cursorConfigs.x.amt
    )

    this.cursorConfigs.y.previous = lerp(
      this.cursorConfigs.y.previous,
      this.cursorConfigs.y.current,
      this.cursorConfigs.y.amt
    )

    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`

    requestAnimationFrame(() => this.render())
  }
}

const useCursor = <T extends HTMLElement>(hoverElementSelectors: string) => {
  const cursorRef = useRef<T>(null!)

  useIsomorphicLayoutEffect(() => {
    const _cursor = new Cursor(cursorRef.current, hoverElementSelectors)
  }, [])

  return { cursorRef }
}

export default useCursor
