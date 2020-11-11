import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexPageQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes
  const home = data.home

  return (
    <>
      <GatsbySeo title="弱いZINE" titleTemplate="%s" />
      <div className="flex flex-col items-center space-y-32">
        <Link to="/vol/0/">
          <img src={home?.image} width="364" height="514" />
        </Link>
        <p className="text-lg leading-loose tracking-widest text-center whitespace-pre-wrap md:xl-text">
          { home?.introduction }
        </p>
      </div>
      <ol style={{ listStyle: 'none' }}>
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
      </ol>
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
      introduction
    }
  }
`
