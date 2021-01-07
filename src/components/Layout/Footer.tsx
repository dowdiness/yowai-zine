import React from 'react'
import { Link } from 'gatsby'

// @ts-ignore
import logo from "../../../content/assets/yowai-logo.png"

export type FooterProps = unknown

export const Footer: React.FCX<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className}`}>
      <div className="flex flex-col items-center space-y-8 overflow-hidden">
        <Link className="" to="/">
          <img
            src={logo}
            width="128"
            height="128"
            alt="yowai-logo"
            className="w-32 h-32 text-center transition-opacity duration-300 ease-out hover:opacity-50"
          />
        </Link>
        <h1 className="mt-8 text-base italic leading-6 text-center text-gray-600">
          Don't kill. Protect your weakness.
        </h1>
      </div>
    </footer>
  )
}

export default Footer
