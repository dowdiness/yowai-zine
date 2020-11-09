import { useRef, useEffect } from 'react'
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
    window.addEventListener('mousemove', ev => (mouse = getMousePos(ev)))
    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x
      this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y

      gsap.to(this.Cursor, {
        duration: 1,
        ease: 'Power3.easeOut',
        opacity: 1,
      })

      this.onScaleMouse()

      requestAnimationFrame(() => this.render())
      window.removeEventListener('mousemove', this.onMouseMoveEv)
    }

    window.addEventListener('mousemove', this.onMouseMoveEv)
  }

  onScaleMouse() {
    this.Item.forEach(link => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(':hover')) {
        this.setSource(link)
        this.scaleAnimation(this.Cursor.children[0], 0.8)
      }
      link.addEventListener('mouseenter', () => {
        this.setSource(link)
        this.scaleAnimation(this.Cursor.children[0], 0.6)
      })
      link.addEventListener('mouseleave', () => {
        this.scaleAnimation(this.Cursor.children[0], 0)
      })
      link.children[1].addEventListener('mouseenter', () => {
        this.Cursor.classList.add('media-blend')
        this.scaleAnimation(this.Cursor.children[0], 1.4)
      })
      link.children[1].addEventListener('mouseleave', () => {
        this.Cursor.classList.remove('media-blend')
        this.scaleAnimation(this.Cursor.children[0], 0.8)
      })
    })
  }

  scaleAnimation(el: Element, amt: number) {
    gsap.to(el, {
      duration: 0.6,
      ease: 'Power3.easeOut',
      scale: amt,
    })
  }

  setSource(el: Element) {
    const src = el.getAttribute(this.HoverElementSelectors.replace(/[\[\]]/g, ''))
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

  useEffect(() => {
    const _cursor = new Cursor(cursorRef.current, hoverElementSelectors)
  })

  return { cursorRef }
}

export default useCursor