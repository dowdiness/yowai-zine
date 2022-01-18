import React from 'react'
import { PageProps, Link } from 'gatsby'
import Div100vh from 'react-div-100vh'
import 'src/styles/button.css'

const NotFoundPage: React.FC<PageProps> = ({}) => {
  return (
    <Div100vh className="fixed inset-0 z-50 flex flex-col items-center justify-center w-screen space-y-24 cursor-auto bg-neumorphism">
      <h1 className="text-4xl cursor-auto sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl outline-text">404: Not Found</h1>
      <h2 className="text-lg cursor-auto sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">ここには何もありません。<br className="md:hidden" />トップページに戻るには</h2>
      <Link
        to='/'
        className="font-sans text-3xl font-black tracking-widest cursor-pointer sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl back-home"
      >
        ここ
      </Link>
      <h3 className="text-lg cursor-auto sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">をクリック</h3>
    </Div100vh>
  )
}

export default NotFoundPage
