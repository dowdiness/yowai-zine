import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export type FooterProps = unknown

export const Footer: React.FCX<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className}`}>
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 overflow-hidden">
        <Link className="" to="/">
          <StaticImage
            src="../../../content/assets/yowai-logo.png"
            width={128}
            height={128}
            alt="yowai-logo"
            layout="fixed"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            className="w-32 h-32 text-center transition-all duration-300 ease-out hover:opacity-75 hover:-translate-y-1"
          />
        </Link>
        <p className="mt-4 sm:mt-6 text-lg italic leading-relaxed tracking-wide text-center sm:text-xl md:text-2xl text-gray-500">
          Don't kill. Protect your weakness.
        </p>
      </div>
    </footer>
  )
}

export default Footer
