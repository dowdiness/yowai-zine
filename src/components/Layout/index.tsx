import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="" data-is-root-path={isRootPath}>
      <Header className="" />
      <main
        className="container"
      >
        {children}
      </main>
      <Footer className="" />
    </div>
  )
}

export default Layout
