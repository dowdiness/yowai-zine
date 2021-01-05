/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import Layout from 'src/components/Layout'
import { RecoilRoot } from 'recoil'
import {
  MotionConfig,
  AnimationFeature,
} from "framer-motion"

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <MotionConfig features={[AnimationFeature]}>
        {element}
      </MotionConfig>
    </RecoilRoot>
  )
}

export { wrapPageElement, wrapRootElement }
