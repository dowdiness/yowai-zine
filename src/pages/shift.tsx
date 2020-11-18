import React from 'react'
import { PageProps } from 'gatsby'

import { GatsbySeo } from 'gatsby-plugin-next-seo'

import useWindowSize from 'src/hooks/useWindowSize'
import useShiftBG from 'src/hooks/useShiftBG'

const ShiftPage: React.FC<PageProps> = ({}) => {
  const { width, height } = useWindowSize()
  const { canvasRef } = useShiftBG<HTMLDivElement>(width, height)
  return (
    <>
      <GatsbySeo title="Shift" />
      <div className="w-full h-full" ref={canvasRef}>

      </div>
    </>
  )
}

export default ShiftPage
