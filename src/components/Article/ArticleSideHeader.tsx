import React from 'react'

export type ArticleSideHeaderProps = {
  title?: string
  author?: string
}

const ArticleSideHeader: React.FCX<ArticleSideHeaderProps> = ({ className, title, author }) => {
  return (
    <header className={`w-full flex items-center space-y-4 vertical-rl ${className}`}>
      <h1 className="font-sans text-xl font-extrabold text-center text-gray-900 sm:text-2xl md:text-3xl" itemProp="headline">
        {title}
      </h1>
      <h2 className="font-sans text-lg font-medium text-center text-gray-800 sm:text-xl md:text-2xl">
        {author}
      </h2>
    </header>
  )
}

export default ArticleSideHeader
