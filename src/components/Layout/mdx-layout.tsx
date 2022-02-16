import React from 'react'
import { graphql, PageProps } from 'gatsby'
//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd, ArticleLd } from "src/components/JsonLd"

import {
  ArticleLink,
  ArticleNav,
} from 'src/components/Article'
import SectionHeader from 'src/components/Element/SectionHeader'
//Hooks

type PageContextProps = {
  frontmatter: {
    title: string,
    subtitle: string,
    description: string,
    slug: string,
    nextlink?: string,
    nexttitle?: string,
    prevlink?: string,
    prevtitle?: string
  }
}

const HorizontalArticleTemplate: React.FC<PageProps<object, PageContextProps>> = ({ pageContext, children }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <GatsbySeo
        title={pageContext.frontmatter.title}
        description={pageContext.frontmatter.title}
        openGraph={{
          title: `${pageContext.frontmatter.title} | 弱いZINE`,
          description: pageContext.frontmatter.description,
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: pageContext.frontmatter.title,
            item: pageContext.frontmatter.slug,
          },
        ]}
      />
      <article
        className="py-16"
      >
        <ArticleLink
          to='/'
          title='目次に戻る'
          className="mt-12 text-left"
        />
        <SectionHeader title={pageContext.frontmatter.title} author={pageContext.frontmatter.subtitle} />
        <div className={`justify-center py-6 sm:py-8 md:py-10 flex neumorphism-normal rounded-2xl`}>
          <section
            className={`text-left font-serif prose whitespace-pre-line main-article-width sm:prose-lg md:prose-xl text-character tracking-widest`}
          >
            { children }
          </section>
        </div>
      </article>
      <ArticleNav
        previousLink={pageContext.frontmatter.prevlink ? `/${pageContext.frontmatter.prevlink}` : undefined}
        previousTitle={pageContext.frontmatter.prevtitle ? pageContext.frontmatter.prevtitle : undefined}
        nextLink={pageContext.frontmatter.nextlink ? `/${pageContext.frontmatter.nextlink}` : undefined}
        nextTitle={pageContext.frontmatter.nexttitle ? pageContext.frontmatter.nexttitle : undefined}
        className="mb-12"
      />
    </div>
  )
}

export default HorizontalArticleTemplate
