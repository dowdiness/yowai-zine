import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  location?: Location
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  return (
    <div className="">
      <Header className="" />
      <main className="container w-auto">{children}</main>
      <Footer className="" />
    </div>
  )
}

export default Layout
