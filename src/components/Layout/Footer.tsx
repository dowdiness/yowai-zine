import React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image"

export type FooterProps = unknown

export const Footer: React.FCX<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className}`}>
      <div className="flex flex-col items-center space-y-8 overflow-hidden">
        <Link className="cursor-pointer" to="/">
          <StaticImage
            width={128}
            height={128}
            src="yowai-logo.png"
            alt="yowai-logo"
            placeholder="none"
            className="w-32 h-32 text-center transition-opacity duration-300 ease-out hover:opacity-50"
          />
        </Link>
        {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
        </nav> */}
        <h4 className="mt-8 text-base italic leading-6 text-center text-gray-600">
          Don't kill. Protect your weakness.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
