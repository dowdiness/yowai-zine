import React from 'react'

export type ArticleHeaderProps = {
  title?: string
  author?: string
}

const ArticleHeader: React.FCX<ArticleHeaderProps> = ({ className, title, author }) => {
  return (
    <header className={`flex flex-col items-center space-y-12 my-24 ${className}`}>
      <h1 className="text-3xl font-extrabold text-left text-gray-900 font-selif sm:text-4xl md:text-5xl lg:text-6xl" itemProp="headline">
        {title}
      </h1>
      <h2 className="font-sans text-2xl italic font-medium text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">
        {author}
      </h2>
    </header>
  )
}

export default ArticleHeader
