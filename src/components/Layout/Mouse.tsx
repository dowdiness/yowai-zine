import React from 'react'
import useMouse from 'src/hooks/useMouse'

const Mouse = () => {
  const mouse = useMouse<HTMLDivElement>(true)
  return (
    <div
      ref={mouse.cursorRef}
      id="cursor"
      className={`fixed top-0 left-0 z-20 pointer-events-none hidden sm:block`}
    />
  )
}

export default Mouse
