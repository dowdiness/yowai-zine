// custom fontsource
import "fontsource-noto-serif-jp"
import "fontsource-noto-sans-jp"
import "fontsource-roboto-mono"

// custom CSS styles
import "./src/styles/style.css"

import * as React from 'react'
import Layout from 'src/components/Layout'

const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>{element}</Layout>
  )
}

export { wrapPageElement }
