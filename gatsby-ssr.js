/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import Layout from 'src/components/Layout'
import { Provider } from "jotai"
import { MDXProvider } from "@mdx-js/react"
import { YouTube } from 'mdx-embed'

const components = {
  YouTube,
}

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      <Provider>
        {element}
      </Provider>
    </MDXProvider>
  )
}

export { wrapPageElement, wrapRootElement }
