/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
// import { Provider } from '~/store/global'
import Layout from 'src/components/Layout'

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

export { wrapPageElement }
