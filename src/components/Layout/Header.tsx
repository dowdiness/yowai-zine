import { Link } from "gatsby"
import Image from "src/components/Image"

// hooks
import useWindowScroll from "src/hooks/useWindowScroll"

export type HeaderProps = {}
export const Header: React.FCX<HeaderProps> = ({className}) => {
  const { y } = useWindowScroll()

  return (
    <>
      <section className="w-full mb-4 h-140">
        <Link className="flex flex-col items-center" to="/">
          <Image
            filename="yowai-logo.png"
            alt="yowai-logo"
            className="w-64 h-64 mb-16"
          />
          <div className="flex flex-col items-center mb-6 space-y-3">
            <h3 className="text-4xl italic font-extrabold text-yowai">
              Don't kill.
          </h3>
            <h3 className="text-4xl italic font-extrabold text-yowai">
              Protect your
          </h3>
            <h3 className="text-4xl italic font-extrabold text-yowai">
              weakness.
          </h3>
          </div>
          <h1
            className="flex justify-center text-6xl italic font-black text-white"
            style={{
              textShadow:
                "-4px -4px 8px rgba(255,255,255,0.5), 4px 4px 8px rgba(0,0,0,0.08)",
            }}
          >
            弱いzine
        </h1>
        </Link>
      </section>
      <header
        className={`fixed top-0 flex items-center justify-center w-full h-16 transition duration-300 ease-in-out transform bg-white shadow-sm ${y > 580 ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}`}
      >
        <div className={className}>
          <h1
            className="flex justify-center text-4xl italic font-black text-white"
            style={{
              textShadow:
                "-4px -4px 8px #161616, 4px 4px 8px rgba(0,0,0,0.08)",
            }}
          >
            弱いzine
          </h1>
        </div>
      </header>
    </>
  )
}

export default Header
