import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
//Hooks
import useTategaki from 'src/hooks/useTategaki'
import { useForm, usePlugin } from 'tinacms'

const BlogPostTemplate: React.FC<PageProps<
  GatsbyTypes.BlogPostBySlugQuery
>> = ({ data }) => {
  const { previous, next } = data
  const { tategakiRef } = useTategaki()

  const formConfig = {
    id: data.markdownRemark?.id,
    label: "Blog Post",
    initialValues: data.markdownRemark,
    onSubmit: (values: { frontmatter: { title: string } }) => {
      alert(`Submitting ${values.frontmatter.title}`)
    },
    fields: [
      {
        name: "frontmatter.title",
        label: "Title",
        component: "text",
      },
      {
        name: "frontmatter.profile",
        label: "Profile",
        component: "textarea",
      },
    ],
  }

  const [post, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <>
      <GatsbySeo
        title={post?.frontmatter?.title || ``}
        description={post?.excerpt || post?.frontmatter?.profile || ``}
      />
      <div className="">
        <article
          className="mx-auto my-16 space-y-16 text-center"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="flex flex-col items-center font-sans text-justify">
            <h1 className="mb-4 text-2xl font-extrabold" itemProp="headline">
              {post?.frontmatter?.title}
            </h1>
            <p className="text-xl italic font-medium">
              {post?.frontmatter?.author}
            </p>
          </header>
          <section
            ref={tategakiRef}
            dangerouslySetInnerHTML={{ __html: post?.html || `記事無し` }}
            itemProp="articleBody"
            className="w-full max-w-full font-serif text-lg text-justify md:text-xl multicolumn text-character vertical-rl"
          />
          <footer className="font-serif text-lg text-justify whitespace-pre-line md:text-xl">
            {post?.frontmatter?.profile}
          </footer>
        </article>
      </div>
      <nav className="mb-12">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={
                  `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` ||
                  `/`
                }
                rel="prev"
              >
                ← {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/vol/${next.frontmatter?.vol}${next.fields?.slug}` || `/`}
                rel="next"
              >
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        profile
        # date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        vol
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        vol
      }
    }
  }
`
