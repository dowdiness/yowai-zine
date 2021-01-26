import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ArticleJsonLd, ArticleJsonLdProps } from 'gatsby-plugin-next-seo'

const ArticleLd: React.FC<Omit<ArticleJsonLdProps, "publisherName" | "publisherLogo">> = ({
    url,
    headline,
    keywords,
    images,
    datePublished,
    dateModified,
    authorName,
    description,
  }) => {
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

  if (images) {
    images = images.map(publicURL => `${site.siteMetadata.siteUrl}${publicURL}`)
  } else {
    images = [`${site.siteMetadata.siteUrl}/yowai-ogp.png`]
  }

  return (
    <>
      <ArticleJsonLd
        url={`${site.siteMetadata.siteUrl}/articles${url}`}
        headline={headline}
        keywords={keywords || undefined}
        images={images}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName={authorName}
        publisherName='ｏｓａｍｕｏｓａｎａｉ'
        publisherLogo={`${site.siteMetadata.siteUrl}/yowai-logo.png`}
        description={description}
      />
    </>
  )
}

export default ArticleLd
