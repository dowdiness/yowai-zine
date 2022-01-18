import React from 'react'

//Components
import { ArticleLink, ArticleList } from 'src/components/Article'
import loadable from '@loadable/component'

const ArticleCursor = loadable(() => import('src/components/Article/ArticleCursor'))

//Utils
import { parseISO, differenceInDays } from 'date-fns'
import { isNewArticle } from 'src/utils'

export type ArticleListsProps = {
  posts: GatsbyTypes.ContentfulMarkdownArticle[]
  hasBackLink?: boolean
}

const ArticleLists: React.FCX<ArticleListsProps> = ({ className, posts }) => {
  return (
    <div className={`${className} my-16 space-y-16`}>
      <section className="flex flex-col justify-center mx-auto space-y-32">
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
