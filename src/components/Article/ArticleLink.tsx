import React from 'react'
import { Link } from 'gatsby'

export type ArticleLinkProps = {
  title: string
  to: string
  isRight?: boolean
  rel?: string
}

const ArticleLink: React.FCX<ArticleLinkProps> = ({ className, title, to, isRight, rel }) => {
  if (isRight) {
    return (
      <Link
        to={to}
        rel={rel}
        className={`animated-arrow ${className}`}
      >
        <span className='the-arrow -left'>
          <span className='shaft'></span>
        </span>
        <span className='main'>
          <span className='text'>
            {title}
          </span>
          <span className='the-arrow -right'>
            <span className='shaft'></span>
          </span>
        </span>
      </Link>
    )
  } else {
    return (
      <Link
        to={to}
        rel={rel}
        className={`left-animated-arrow ${className}`}
      >
        <span className='left-arrow-content'>
          <span className='left-arrow -left'>
            <span className='shaft'></span>
          </span>
          <span className='text'>
            { title }
          </span>
        </span>
        <span className='left-arrow -right'>
          <span className='shaft'></span>
        </span>
      </Link>
    )
  }
}

export default ArticleLink
