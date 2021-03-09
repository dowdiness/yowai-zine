import React from 'react'
import { graphql, PageProps } from 'gatsby'

//Hooks
import useSkew from 'src/hooks/useSkew'
import useCircularText from 'src/hooks/useCircularText'
import { useAtom } from "jotai"
import { windowSize, windowSizeAtom } from "src/store"

//Components
import { ArticleLists } from 'src/components/Article'
import { SplitTextWrap } from 'src/components/SplitText/SplitTextWrap'
import Div100vh from 'react-div-100vh'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd } from "src/components/JsonLd"

const IndexPage: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const home = data.home
  const posts = data.posts.nodes
  // @ts-ignore
  const genkiData = getImage(data.genki)
  // @ts-ignore
  const zineDate = getImage(data.zine)
  const [{ width },] = useAtom<windowSize>(windowSizeAtom)
  const circle = home?.catchphrase
  const ratio =
    (width > 992)
      ? 3
      : (width >= 768 && width <= 991)
        ? 2.5
        : (width > 480)
          ? width * 0.004
          : width * 0.004
  const radius =
    (width > 992)
      ? 240
      : (width >= 768 && width <= 991)
        ? width * 0.2
        : (width > 480)
          ? width * 0.3
          : width * 0.35

  const catchphrase = circle?.repeat(Math.ceil(ratio)).slice(0, circle?.length * ratio)

  const { circleTextRef } = useCircularText<HTMLHeadingElement>(radius, catchphrase!)
  useSkew('[data-skew]')

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
      <LogoLd />
      <div className="space-y-32">
        <section className="w-screen m-screen md:mx-auto md:w-full">
          <Div100vh className="flex items-center justify-center">
            <SplitTextWrap
              jp="ここは君のタイムラインの外側。"
              en="Here is the outside of your timeline."
            />
          </Div100vh>
        </section>
        <section data-scroll className="flex flex-col items-center justify-center md:flex-row md:justify-around md:items-start">
          <div className="mb-12 md:mb-0 md:mr-12 md:sticky top-24">
            <div className="relative">
              <h2 className="mx-auto overflow-hidden text-xxs animate-spin-slow" ref={circleTextRef} />
              <div className="absolute inline-block w-full transform -translate-x-1/2 -translate-y-1/2 h-1/3 inset-1/2">
                <GatsbyImage
                  loading="eager"
                  className="cursor-none hover:animate-huruhuru"
                  image={genkiData!}
                  alt="Genki"
                />
              </div>
            </div>
          </div>
          <p
            data-skew
            className="tracking-widest text-left whitespace-pre-line sm:text-left leading-loosest text-character sm:text-lg md:text-xl"
          >
            {text}
          </p>
        </section>
        {/* 記事 */}
        <ArticleLists
          //@ts-ignore
          posts={posts}
          image={zineDate!}
        />
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
        gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    zine: file(relativePath: { eq: "yowaizine.png" }) {
      childImageSharp {
        gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    posts: allContentfulMarkdownArticle(sort: {fields: publishedAt, order: DESC}) {
      nodes {
        id
        title
        slug
        publishedAt
        content {
          childMdx {
            # need to truncate for non-laten characters
            excerpt(truncate: true)
          }
        }
        author {
          name
        }
      }
    }
  }
`
