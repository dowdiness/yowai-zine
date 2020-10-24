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
      <Header />
      <main
        className="container flex flex-col flex-1 px-6 mx-auto sm:px-8 md:px-10 lg:px-12"
      >
        {children}
      </main>
      <Footer className="px-6 sm:px-8 md:px-10 lg:px-12" />
    </div>
  )
}

export default Layout
