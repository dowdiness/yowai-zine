// custom fontsource
// import "fontsource-noto-serif-jp/400.css"
// import "fontsource-noto-serif-jp/500.css"
// import "fontsource-noto-serif-jp/700.css"
// import "fontsource-noto-serif-jp/900.css"
// import "fontsource-noto-sans-jp/400.css"
// import "fontsource-noto-sans-jp/500.css"
// import "fontsource-noto-sans-jp/700.css"
// import "fontsource-noto-sans-jp/900.css"
// import "fontsource-jost/400.css"
// import "fontsource-jost/500.css"
// import "fontsource-jost/700.css"
// import "fontsource-jost/900.css"

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
