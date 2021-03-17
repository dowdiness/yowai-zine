// custom fontsource
import "fontsource-noto-serif-jp"
import "fontsource-noto-sans-jp"
import "fontsource-jost"

// custom CSS styles
// Separate up tailwindcss files for fast recompile https://github.com/brianlovin/brian-lovin-next/pull/1193
import "src/styles/tailwind.css"
import "src/styles/style.css"
import "src/styles/tailwind-utils.css"

import * as React from 'react'
import Layout from 'src/components/Layout'
import {
  MotionConfig,
  AnimationFeature,
} from "framer-motion"
import { Provider } from "jotai"
import { MDXProvider } from "@mdx-js/react"
import { YouTube } from 'mdx-embed'

const components = {
  YouTube,
}

import onClientEntry from 'src/gatsby/browser/onClientEntry'
import onInitialClientRender from 'src/gatsby/browser/onInitialClientRender'
import onRouteUpdate from 'src/gatsby/browser/onRouteUpdate'
import shouldUpdateScroll from 'src/gatsby/browser/shouldUpdateScroll'

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <Provider>
        <MotionConfig features={[AnimationFeature]}>
          {element}
        </MotionConfig>
      </Provider>
    </MDXProvider>
  )
}

export {
  onClientEntry,
  onInitialClientRender,
  onRouteUpdate,
  shouldUpdateScroll,
  wrapPageElement,
  wrapRootElement
}
