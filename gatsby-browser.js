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
import { MDXEmbedProvider } from 'mdx-embed';

import onClientEntry from 'src/gatsby/browser/onClientEntry'
import onInitialClientRender from 'src/gatsby/browser/onInitialClientRender'
import onRouteUpdate from 'src/gatsby/browser/onRouteUpdate'
import shouldUpdateScroll from 'src/gatsby/browser/shouldUpdateScroll'

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

const components = {
  blockquote: (props) => <blockquote className="text-center">{props.children}</blockquote>
}

const wrapRootElement = ({ element }) => {
  return (
    <MDXEmbedProvider components={components}>
      <Provider>
        <MotionConfig features={[AnimationFeature]}>
          {element}
        </MotionConfig>
      </Provider>
    </MDXEmbedProvider>
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
