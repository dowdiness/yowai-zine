import React from 'react'
import { ArticleLink } from 'src/components/Article'

export type ArticleNavProps = {
  previousLink?: string
  previousTitle?: string
  nextLink?: string
  nextTitle?: string
}

const ArticleNav: React.FCX<ArticleNavProps> = ({ className, previousLink, previousTitle, nextLink, nextTitle }) => {
  return (
    <nav className={`text-gray-700 ${className}`}>
      <ul
        className="flex flex-col items-center justify-between space-y-8 list-none md:space-y-0 md:flex-row"
      >
        <li key="prev-link" className="w-full">
          {previousLink && previousTitle && (
            <ArticleLink
              to={previousLink}
              rel="prev"
              title={previousTitle}
            />
          )}
        </li>
        <li key="next-link" className="w-full text-right">
          {nextLink && nextTitle && (
            <ArticleLink
              to={nextLink}
              rel="next"
              title={nextTitle}
              isRight={true}
            />
          )}
        </li>
      </ul>
    </nav>
  )
}

export default ArticleNav
