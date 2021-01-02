import React from 'react'
import  { useStaticQuery, graphql } from 'gatsby'
import { LogoJsonLd } from 'gatsby-plugin-next-seo'

const LogoLd = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )

  return (
    <LogoJsonLd
      logo={`${site.siteMetadata.siteUrl}/yowai-logo.png`}
      url={site.siteMetadata.siteUrl}
    />
  )
}

export default LogoLd
