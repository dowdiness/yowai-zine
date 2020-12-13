import React from 'react'

export type ArticleSideHeaderProps = {
  title?: string
  author?: string
}

const ArticleSideHeader: React.FCX<ArticleSideHeaderProps> = ({ className, title, author }) => {
  return (
    <header className={`w-full flex items-center space-y-4 vertical-rl ${className}`}>
      <h1 className="text-xl font-extrabold text-center text-gray-900 font-selif sm:text-2xl md:text-3xl" itemProp="headline">
        {title}
      </h1>
      <h2 className="font-sans text-lg italic font-medium text-center text-gray-800 sm:text-xl md:text-2xl">
        {author}
      </h2>
    </header>
  )
}

export default ArticleSideHeader
