import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'
import useCircularText from 'src/hooks/useCircularText'
import useWindowSize from 'src/hooks/useWindowSize'

import Div100vh from 'react-div-100vh'

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  // const posts = data.allMarkdownRemark.nodes
  const home = data.home
  const { width } = useWindowSize()
  const circle = home?.catchphrase
  const ratio = width > 550 ? width * 0.003 : width * 0.004
  const catchphrase = circle?.repeat(Math.ceil(ratio)).slice(0, circle?.length * ratio)

  const { circleTextRef } = useCircularText<HTMLHeadingElement>(width > 550 ? width * 0.2 : width * 0.35, catchphrase!)

  return (
    <>
      <GatsbySeo title="弱いZINE" titleTemplate="%s" />
      <section className="-mt-32">
        <Div100vh className="flex items-center justify-center">
          <h1 className="flex flex-col items-center space-y-8 font-sans text-center">
            <span className="text-2xl font-bold sm:text-4xl md:text-5xl">ここは君のタイムラインの外側</span>
            <span className="text-lg font-semibold sm:text-xl md:text-2xl">Here is the outside of your timeline.</span>
          </h1>
        </Div100vh>
      </section>
      <section className="flex items-center justify-center w-auto h-auto my-24 sm:my-0 sm:h-screen">
        <div>
          <div className="relative mb-12 sm:float-left shape-outside sm:mb-0">
            <h3 className="mx-auto overflow-hidden text-xxs animate-spin-slow" ref={circleTextRef} />
            <h2 className="absolute w-full h-12 font-sans text-3xl text-center transform -translate-x-1/2 -translate-y-1/2 md:text-4xl xl:text-6xl inset-1/2">げんきですか？</h2>
          </div>
          <div className="text-center sm:text-left">
            <p
              className="inline-block text-lg leading-relaxed tracking-widest text-justify whitespace-pre-wrap sm:contents text-character h-160 column-count-2 column-gap-12 vertical-rl sm:text-xl sm:text-left sm:column-count-none sm:horizontal-tb sm:h-full md:leading-loosest"
            >
              {home?.introduction}
            </p>
          </div>
        </div>
      </section>
      <section className="container w-auto">
        <Div100vh className="flex flex-col items-center justify-center space-y-24">
          <h2 className="font-sans text-5xl font-bold">zineを読む</h2>
          <Link className="overflow-hidden" to="/vol/0/">
            <img className="transition-all duration-300 transform hover:scale-125 hover:blur" src={home?.image} width="300" height="450" />
          </Link>
        </Div100vh>
      </section>
      {/* <ol style={{ listStyle: 'none' }}>
        {posts.map(post => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article
                className="mx-auto mt-12 prose-sm prose sm:prose lg:prose-lg xl:prose-xl"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link
                      to={
                        `/vol/${post.frontmatter?.vol}${post.fields?.slug}` ||
                        '/'
                      }
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>Vol {post.frontmatter?.vol} </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        post.frontmatter?.description ??
                        post.excerpt ??
                        '見つかりません',
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          vol
          description
        }
      }
    }
    home: pagesJson(path: {eq: "/"}) {
      image
      catchphrase
      introduction
    }
  }
`
