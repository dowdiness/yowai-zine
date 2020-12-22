import React from 'react'
import { ArticleLink } from 'src/components/Article'

export type ArticleNavProps = {
  previous: any
  next: any
}

const ArticleNav: React.FCX<ArticleNavProps> = ({ className, previous, next }) => {
  return (
    <nav className={`text-gray-700 ${className}`}>
      <ul
        className="flex flex-col items-center justify-between space-y-8 list-none md:space-y-0 md:flex-row"
      >
        <li className="w-full">
          {previous && (
            <ArticleLink
              to={
                `/vol/${previous.frontmatter?.vol}${previous.fields?.slug}` ||
                `/`
              }
              rel="prev"
              title={previous.frontmatter?.title!}
            />
          )}
        </li>
        <li className="w-full text-right">
          {next && (
            <ArticleLink
              to={
                `/vol/${next.frontmatter?.vol}${next.fields?.slug}` ||
                `/`
              }
              rel="next"
              title={next.frontmatter?.title!}
              isRight={true}
            />
          )}
        </li>
      </ul>
    </nav>
  )
}

export default ArticleNav
