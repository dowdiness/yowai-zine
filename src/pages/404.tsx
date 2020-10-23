import { PageProps } from "gatsby"

import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <GatsbySeo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
