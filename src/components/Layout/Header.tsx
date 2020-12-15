import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

// hooks
import useWindowScroll from 'src/hooks/useWindowScroll'
import usePrevious from 'src/hooks/usePrevious'

export type HeaderProps = {
  location: Location
}
export const Header: React.FCX<HeaderProps> = ({ className, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath
  const { y } = useWindowScroll()
  const previousY = usePrevious(y)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if(previousY) !isRootPath && y < previousY ? setInView(true) : setInView(false)
  }, [y, isRootPath])

  return (
    <header
      className={`h-16 flex items-center justify-center transform transition-transform duration-150 ${inView ? '' : '-translate-y-16' } ${className}`}
    >
      <Link to="/">
        <h1 className="flex justify-center text-4xl italic font-black text-white neumorphism">
          弱いzine
        </h1>
      </Link>
    </header>
  )
}

export default Header
