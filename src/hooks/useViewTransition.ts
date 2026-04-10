import { useState, useEffect, useRef, ReactNode } from 'react'
import { flushSync } from 'react-dom'

const useViewTransition = (children: ReactNode, pathname: string) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (prevPath.current === pathname) {
      setDisplayChildren(children)
      return
    }
    prevPath.current = pathname

    if (typeof document !== 'undefined' && document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setDisplayChildren(children)
        })
      })
    } else {
      setDisplayChildren(children)
    }
  }, [pathname, children])

  return displayChildren
}

export default useViewTransition
