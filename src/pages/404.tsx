import React from 'react'
import { PageProps } from 'gatsby'

import Layout from 'src/components/Layout'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return (
    <Layout>
      <GatsbySeo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
