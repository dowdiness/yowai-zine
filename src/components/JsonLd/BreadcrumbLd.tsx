import React from 'react'
import  { useStaticQuery, graphql } from 'gatsby'
import { BreadcrumbJsonLd, BreadcrumbJsonLdProps } from 'gatsby-plugin-next-seo'

const BreadcrumbLd: React.FCX<BreadcrumbJsonLdProps> = ({ itemListElements }) => {
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

  const itemList =
  !itemListElements ? [
    {
      position: 1,
      name: 'トップページ',
      item: site.siteMetadata.siteUrl,
    }] :
    [
      {
        position: 1,
        name: 'トップページ',
        item: site.siteMetadata.siteUrl,
      },
    ...itemListElements.map(itemElement => {
      return {
        ...itemElement,
        item: `${site.siteMetadata.siteUrl}/${itemElement.item}`,
      }
    })
  ]

  return (
    <BreadcrumbJsonLd
      itemListElements={itemList}
    />
  )
}

export default BreadcrumbLd
