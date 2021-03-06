/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import Layout from 'src/components/Layout'
import {
  MotionConfig,
  AnimationFeature,
} from "framer-motion"
import { Provider } from "jotai"
import { MDXEmbedProvider } from 'mdx-embed';
import { MDXProvider } from "@mdx-js/react"

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider>
      <MDXEmbedProvider>
        <Provider>
          <MotionConfig features={[AnimationFeature]}>
            {element}
          </MotionConfig>
        </Provider>
      </MDXEmbedProvider>
    </MDXProvider>
  )
}

export { wrapPageElement, wrapRootElement }
