import React from 'react'

export type SectionHeaderProps = {
  title?: string
  author?: string | JSX.Element[]
}

const SectionHeader: React.FCX<SectionHeaderProps> = ({ className, title, author }) => {
  return (
    <header data-skew className={`flex flex-col items-center space-y-6 md:space-y-8 mt-12 mb-16 ${className}`}>
      <h1 className="font-sans text-4xl outline-text sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      <h2 className="font-sans text-3xl font-medium text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
        {author}
      </h2>
    </header>
  )
}

export default SectionHeader
