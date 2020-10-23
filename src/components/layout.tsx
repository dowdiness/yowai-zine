import { Link } from "gatsby"

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-5xl">
        <Link to="/">弱いZINE</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        弱いZINE
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
