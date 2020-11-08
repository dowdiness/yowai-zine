import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import Div100vh from 'react-div-100vh'

import { motion, AnimatePresence } from 'framer-motion'

type LayoutProps = {
  location?: Location
}

const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  const [finishLoading, setFinishLoading] = useState(true)
  const data = useStaticQuery<GatsbyTypes.LogoQueryQuery>(
    graphql`
      query LogoQuery {
        allFile(filter: { name: { eq: "yowai-logo" } }) {
          nodes {
            id
            name
            publicURL
          }
        }
      }
    `
  )

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
    }, 2400)
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {finishLoading ? (
        <Div100vh>
          <motion.section
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="fixed flex flex-col items-center justify-center w-screen h-screen text-5xl"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              src={data.allFile.nodes[0].publicURL}
              alt={data.allFile.nodes[0].name}
              className="w-64 h-64 mb-4 -mt-24"
            />
            <div className="flex flex-col items-center mb-6 space-y-2 font-sans">
              <h3 className="text-4xl italic font-extrabold text-yowai">
                Don't kill.
              </h3>
              <h3 className="text-4xl italic font-extrabold text-yowai">
                Protect your
              </h3>
              <h3 className="text-4xl italic font-extrabold text-yowai">
                weakness.
              </h3>
            </div>
            <h1 className="flex justify-center text-6xl italic font-black text-white neumorphism">
              弱いzine
            </h1>
          </motion.section>
        </Div100vh>
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <Header className="z-40" />
          <main className="container w-auto mt-32">{children}</main>
          <Footer className="z-40" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Layout
