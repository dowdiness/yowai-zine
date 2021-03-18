import React from 'react'

//Components
import { ArticleLink, ArticleList } from 'src/components/Article'
import loadable from '@loadable/component'

const ArticleCursor = loadable(() => import('src/components/Article/ArticleCursor'))

//Utils
import { parseISO, differenceInDays } from 'date-fns'
import { isNewArticle } from 'src/utils'
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

export type ArticleListsProps = {
  posts: GatsbyTypes.ContentfulMarkdownArticle[]
  image: IGatsbyImageData
  hasBackLink?: boolean
}

const ArticleLists: React.FCX<ArticleListsProps> = ({ className, posts, image, hasBackLink }) => {
  return (
    <div className={`${className} py-16 space-y-16`}>
      {hasBackLink &&
      <ArticleLink
        to={`/`}
        title='トップページに戻る'
        className="mt-12 text-left"
      />}
      <section className="flex flex-col justify-center mx-auto space-y-32">
        <div data-skew className="flex justify-center mx-auto -mb-12">
          <GatsbyImage
            image={image}
            loading="eager"
            alt="Zine"
            className="object-scale-down h-32 hover:animate-huruhuru w-72 sm:w-96 sm:h-40 md:w-120 md:h-56 lg:w-160 lg:h-72 xl:w-240 xl:h-96"
          />
        </div>
        <div className="flex flex-col justify-center mx-auto space-y-28">
          {posts.map((post, index) => (
            <ArticleList
              index={index}
              to={`/articles/${post.slug}/`}
              text={post.author?.name}
              linkText={post.title!}
              useCursor={true}
              isNew={isNewArticle(differenceInDays(parseISO(post.publishedAt!), Date.now()))}
            />
          ))}
        </div>
      </section>
      <ArticleCursor
        cursorSrc='[data-cursor-src]'
        posts={posts}
      />
    </div>
  )
}

export default ArticleLists
