import React from 'react'
// 1. Import `useRemarkForm` & `usePlugin`
import { useRemarkForm } from 'gatsby-tinacms-remark'
import { usePlugin } from 'tinacms'
import { graphql, PageProps } from 'gatsby'

const Tina: React.FC<PageProps<GatsbyTypes.TinaQuery>> = (props) => {
  // 2. Create the Form
  const [markdownRemark, form] = useRemarkForm(props.data.markdownRemark)

  // 3. Register the form as a plugin
  usePlugin(form!)

  return (
    <>
      <h1>{JSON.stringify(markdownRemark.frontmatter, null, 2)}</h1>
    </>
  )
}

export default Tina

// 4. Add ...TinaRemark fragment to query
export const tinaQuery = graphql`
  query Tina {
    markdownRemark(fields: { slug: { eq: "/test/" } }) {
      ...TinaRemark
      frontmatter {
        title
        author
      }
    }
  }
`
