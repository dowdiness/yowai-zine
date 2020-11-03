import { PageProps } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return (
    <>
      <GatsbySeo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage
