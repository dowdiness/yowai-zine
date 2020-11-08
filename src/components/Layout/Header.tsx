import React from 'react'
import { Link } from 'gatsby'

// hooks
import useWindowScroll from 'src/hooks/useWindowScroll'

export type HeaderProps = unknown
export const Header: React.FCX<HeaderProps> = ({ className }) => {
  // const { y } = useWindowScroll()

  return (
    <header
      className={`fixed top-0 flex items-center justify-center w-full h-16 ${className}`}
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
