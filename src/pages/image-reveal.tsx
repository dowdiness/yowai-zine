import React, { useRef, useEffect } from 'react'
import { PageProps } from 'gatsby'

import Layout from 'src/components/Layout'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Girl from '../../content/assets/richard-dunn/1.jpeg'
import { gsap } from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import 'src/styles/reveal.css'

const ImageRevealPage: React.FC<PageProps> = ({}) => {
  const image = useRef(null)
  const container = useRef(null)
  const imageReveal = CSSRulePlugin.getRule('.img-container:after')
  const imageBlack = CSSRulePlugin.getRule('.img-container:before')

  const tl = gsap.timeline({ repeat: -1, yoyo: true })
  useEffect(() => {
    console.log(tl, container.current)
    tl.to(container.current, {
      duration: 0,
      delay: 1,
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
    <Layout>
      <GatsbySeo title="404: Not Found" />
      <section className="main">
        <div className="container" ref={container}>
          <div className="img-container">
            <img ref={image} src={Girl} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ImageRevealPage
