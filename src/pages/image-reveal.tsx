import React, { useRef, useEffect } from 'react'
import { PageProps } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Girl from '../../content/assets/richard-dunn/2.jpg'
import { gsap } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import 'src/styles/reveal.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(CSSRulePlugin)
}

const ImageRevealPage: React.FC<PageProps> = ({}) => {
  const image = useRef(null)
  const wrapper = useRef(null)

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
  useEffect(() => {
    const imageReveal = CSSRulePlugin.getRule('#image::after')
    const imageBlack = CSSRulePlugin.getRule('#image::before')
    tl.to(wrapper.current, {
      duration: 0,
      css: { visibility: 'visible' },
    })
    tl.to(imageReveal, { duration: 1.4, width: '0%', ease: 'Power2.easeInOut' })
    tl.to(imageBlack, { duration: 1.4, width: '0%', ease: 'Power2.easeInOut' })
    tl.from(image.current, {
      duration: 1.4,
      scale: 1.6,
      ease: 'Power2.easeInOut',
      delay: -1.4,
    })
  })
  return (
    <>
      <GatsbySeo title="Image Reveal" />
      <section
        className="flex items-center justify-center invisible w-full h-screen mx-auto"
        ref={wrapper}
      >
        <div
          id="image"
          className="relative w-10/12 h-auto overflow-hidden image md:w-3/5"
        >
          <img
            className="object-cover w-full h-auto mx-auto"
            ref={image}
            src={Girl}
          />
        </div>
      </section>
    </>
  )
}

export default ImageRevealPage
