import React from 'react'
import { ArticleJsonLd } from 'gatsby-plugin-next-seo'

const ArticleLd = () => {
  return (
    <>
      <h1>Article JSON-LD</h1>
      <ArticleJsonLd
        url='https://example.com/article'
        headline='Article headline'
        images={[
          'https://example.com/photos/1x1/photo.jpg',
          'https://example.com/photos/4x3/photo.jpg',
          'https://example.com/photos/16x9/photo.jpg',
        ]}
        datePublished='2015-02-05T08:00:00+08:00'
        dateModified='2015-02-05T09:00:00+08:00'
        authorName='Jane Blogs'
        publisherName='Ifiok Jr.'
        publisherLogo='https://www.example.com/photos/logo.jpg'
        description='This is a mighty good description of this article.'
        overrides={{
          '@type': 'BlogPosting', // set's this as a blog post.
        }}
      />
    </>
  )
}

export default ArticleLd
