import React from 'react'

//Hooks
import { useScrollLoop } from 'src/hooks/useScrollLoop'

//Components
import { Children, cloneElement } from 'react'

export type ArticleListProps = unknown

export const ArticleList: React.FCX<ArticleListProps> = ({ children, className }) => {
  let { containerRef } = useScrollLoop<HTMLUListElement>()

  let childrenWithKeys = Children.toArray(children)
  const clonedChildren = childrenWithKeys.map(child =>
    React.isValidElement(child)
    ? cloneElement(child, { 'data-is-cloned': true })
    : null
  )

  return (
    <ul ref={containerRef} className={`${className} flex flex-col justify-center mx-auto space-y-28`}>
      {children}
      {clonedChildren}
    </ul>
  )
}

export default ArticleList
