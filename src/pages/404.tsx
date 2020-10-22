import { ErrorPageQuery } from 'src/../graphql-types'
import * as React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

type ErrorPageProps = {
  data: ErrorPageQuery
  location: Location
}

const NotFoundPage: React.FC<ErrorPageProps> = ({ data, location }) => {
  return (
    <Layout location={location}>
      <GatsbySeo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query ErrorPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
