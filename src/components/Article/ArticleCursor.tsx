import React from 'react'

//Hooks
import useCursor from 'src/hooks/useCursor'

export type ArticleCurosrProps = {
  cursorSrc: string
  posts: GatsbyTypes.ContentfulMarkdownArticle[]
}

const ArticleCurosr: React.FC<ArticleCurosrProps> = ({ cursorSrc, posts }) => {
  const { cursorRef } = useCursor<HTMLDivElement>(cursorSrc)

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-20 pointer-events-none"
    >
      <div className="relative block w-64 h-64 -mt-32 -ml-32 overflow-hidden scale-0 rounded-full transform-gpu">
        {posts.map((post, index) => (
          <p
            key={index}
            id={post.title}
            className="absolute inset-0 w-64 h-64 text-3xl"
          >
            {post.content?.childMarkdownRemark?.excerpt}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ArticleCurosr
