import React from 'react'
import  { useStaticQuery, graphql } from 'gatsby'
import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

type BreadcrumbProps = {
  itemListElements?: {
    position: number,
    name: string,
    item: string,
  }[]
}

const BreadcrumbLd: React.FCX<BreadcrumbProps> = ({ itemListElements }) => {
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
