import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import useCircularText from 'src/hooks/useCircularText'
import useWindowSize from 'src/hooks/useWindowSize'

import Div100vh from 'react-div-100vh'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const home = data.home
  const genkiData = getImage(data.genki)
  const zineDate = getImage(data.zine)
  const { width } = useWindowSize()
  const circle = home?.catchphrase
  const ratio =
    (width > 992)
      ? 3
      : (width > 768 && width <= 991)
        ? 2.5
        : (width > 480)
          ? width * 0.004
          : width * 0.004
  const radius =
    (width > 992)
      ? 240
      : (width > 768 && width <= 991)
        ? width * 0.2
        : (width > 480)
          ? width * 0.3
          : width * 0.35

  const catchphrase = circle?.repeat(Math.ceil(ratio)).slice(0, circle?.length * ratio)

  const { circleTextRef } = useCircularText<HTMLHeadingElement>(radius, catchphrase!)

  const text = `小さいチームで
    弱いzineという名前の
    web zine(インターネットで読む雑誌)
    を制作しています。

    コロナ以降、
    様々な職業や活動が
    以前とは違うやり方を
    模索せざるを得なくなり、
    苦しんでいる人たちも
    多くなりました。

    そんな中でも
    活動を継続している
    方達の言葉や作品を集めて
    zineとして展示することにより、
    有益な情報の共有が
    なされることを
    望んでいます。

    みんなが抱えている
    弱さとは一体なんなのか。
    ぼくには楽しいことが
    生まれるたまごの
    ように思えます。

    不特定多数にではなく、
    対話としてのzineで
    ありますように。
  `

  return (
    <>
      <GatsbySeo title="弱いZINE" titleTemplate="%s" />
      <div className="-mx-8 space-y-32">
        <section>
          <Div100vh className="flex items-center justify-center">
            <h1 className="flex flex-col items-center space-y-8 font-sans text-center">
              <span className="text-xl font-bold sm:text-4xl md:text-5xl">ここは君のタイムラインの外側</span>
              <span className="text-lg font-semibold sm:text-xl md:text-2xl">Here is the outside of your timeline.</span>
            </h1>
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Div100vh>
        </section>
        <section className="flex flex-col items-center justify-center md:flex-row md:justify-around md:items-start">
          <div className="mb-12 md:mb-0 md:mr-12 md:sticky top-24">
            <div className="relative">
              <h3 className="mx-auto overflow-hidden text-xxs animate-spin-slow" ref={circleTextRef} />
              <div className="absolute inline-block w-full transform -translate-x-1/2 -translate-y-1/2 h-1/3 inset-1/2">
                <GatsbyImage image={genkiData} alt="Genki" />
              </div>
            </div>
          </div>
          <p
            className="tracking-widest text-left whitespace-pre-line sm:text-left leading-loosest text-character sm:text-lg md:text-xl"
          >
            {text}
          </p>
        </section>
        <section className="container w-auto">
          <Div100vh className="flex flex-col items-center justify-center space-y-24">
            <Link className="overflow-hidden" to="/vol/0/">
              <h2 className="font-sans text-5xl font-bold">
                <GatsbyImage
                  image={zineDate}
                  alt="Zine"
                  className="object-scale-down h-32 w-72 sm:w-96 sm:h-40 md:w-120 md:h-56 lg:w-160 lg:h-72 xl:w-240 xl:h-96"
                />
              </h2>
            </Link>
          </Div100vh>
        </section>
      </div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    home: pagesJson(path: {eq: "/"}) {
      image
      catchphrase
      introduction
    }
    genki: file(relativePath: { eq: "genki.png" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 768, layout: FLUID, placeholder: TRACED_SVG)
      }
    }
    zine: file(relativePath: { eq: "yowaizine.png" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 768, layout: FLUID, placeholder: TRACED_SVG)
      }
    }
  }
`
