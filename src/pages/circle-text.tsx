import React from 'react'
import { graphql, PageProps } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import useCircularText from 'src/hooks/useCircularText'
import useWindowSize from 'src/hooks/useWindowSize'

const CircleTextPage: React.FC<PageProps<GatsbyTypes.CirclePageQuery>> = ({ data }) => {
  const text = data.about

  const { width } = useWindowSize()
  const circle = text?.catchphrase
  const ratio = width > 480 ? width * 0.003 : width * 0.004
  const catchphrase = circle?.repeat(Math.ceil(ratio)).slice(0, circle?.length * ratio)

  const { circleTextRef } = useCircularText<HTMLHeadingElement>(width > 480 ? width * 0.2 : width * 0.35, catchphrase!)
  return (
    <>
      <GatsbySeo title="CircleText" />
      <section className="flex items-center justify-center w-full h-auto max-w-screen-lg mx-auto my-12 sm:h-screen sm:my-0">
        <div>
          <div className="relative mb-12 sm:float-left shape-outside sm:mb-0">
            <h3 className="mx-auto text-xxs animate-spin-slow" ref={circleTextRef} />
            <h2 className="absolute w-full h-12 font-sans text-3xl text-center transform -translate-x-1/2 -translate-y-1/2 md:text-4xl xl:text-6xl inset-1/2">げんきですか？</h2>
          </div>
          <div className="text-center sm:text-left">
            <p
              className="inline-block text-base leading-loose tracking-widest text-justify whitespace-pre-wrap sm:contents text-character h-160 column-count-2 column-gap-12 sm:text-xl sm:text-left vertical-rl sm:column-count-none sm:horizontal-tb sm:h-full"
            >
              {text?.introduction}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CircleTextPage

export const pageQuery = graphql`
  query CirclePage {
    about: pagesJson(path: {eq: "/"}) {
      image
      catchphrase
      introduction
    }
  }
`
