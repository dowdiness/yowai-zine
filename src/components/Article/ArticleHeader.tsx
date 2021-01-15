import React from 'react'

export type ArticleHeaderProps = {
  title?: string
  author?: string
}

const ArticleHeader: React.FCX<ArticleHeaderProps> = ({ className, title, author }) => {
  return (
    <header className={`flex flex-col items-center space-y-6 md:space-y-8 mt-12 mb-16 ${className}`}>
      <h1 className="font-sans text-3xl text-left outline sm:text-4xl md:text-5xl lg:text-6xl" itemProp="headline">
        {title}
      </h1>
      <h2 className="font-sans text-2xl font-medium text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">
        {author}
      </h2>
    </header>
  )
}

export default ArticleHeader
