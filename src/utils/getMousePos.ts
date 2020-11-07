export const isClient = typeof window === 'object'

// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
  let posx = 0
  let posy = 0
  if (e.clientX || e.clientY) {
    posx = e.clientX
    posy = e.clientY
  }
  return { x: posx, y: posy }
}

export default getMousePos
