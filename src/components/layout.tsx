import { Link } from "gatsby"
import Image from "src/components/Image"

type LayoutProps = {
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link className="flex flex-col items-center" to="/">
        <Image
          filename="yowai-logo.png"
          alt="yowai-logo"
          className="w-64 h-64 mb-16"
        />
        <div className="flex flex-col items-center mb-6 space-y-3">
          <h3 className="text-4xl italic font-extrabold text-yowai">Don't kill.</h3>
          <h3 className="text-4xl italic font-extrabold text-yowai">Protect your</h3>
          <h3 className="text-4xl italic font-extrabold text-yowai">weakness.</h3>
        </div>
        <h1
          className="flex justify-center text-6xl italic font-black text-white"
          style={{textShadow:  '-4px -4px 8px rgba(255,255,255,0.5), 4px 4px 8px rgba(0,0,0,0.08)'}}
        >
          弱いzine
        </h1>
      </Link>
    )
  } else {
    header = (
      <Link className="flex flex-col items-center" to="/">
        <Image
          filename="yowai-logo.png"
          alt="yowai-logo"
          className="w-64 h-64 mb-16"
        />
        <div className="flex flex-col items-center mb-6 space-y-3">
          <h3 className="text-4xl italic font-extrabold text-yowai">Don't kill.</h3>
          <h3 className="text-4xl italic font-extrabold text-yowai">Protect your</h3>
          <h3 className="text-4xl italic font-extrabold text-yowai">weakness.</h3>
        </div>
        <h1
          className="flex justify-center text-6xl italic font-black text-white"
          style={{textShadow:  '-4px -4px 8px rgba(255,255,255,0.5), 4px 4px 8px rgba(0,0,0,0.08)'}}
        >
          弱いzine
        </h1>
      </Link>
    )
  }

  return (
    <div className="" data-is-root-path={isRootPath}>
      <header className="w-screen mb-4 h-140">{header}</header>
      <main className="p-8">{children}</main>
      <footer className="p-8">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
