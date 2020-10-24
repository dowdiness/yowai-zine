import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="flex flex-col min-h-screen" data-is-root-path={isRootPath}>
      <Header className="" />
      <main
        className="container flex flex-col flex-1 px-4 mx-auto sm:px-6 lg:px-8"
      >
        {children}
      </main>
      <Footer className="" />
    </div>
  )
}

export default Layout
