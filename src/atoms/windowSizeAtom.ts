import { isClient, debounce } from 'src/utils'
import { atom } from "jotai"

export type windowSize = {
  width: number
  height: number
}

export const windowSizeAtom = atom<windowSize>({
  width: isClient ? window.innerWidth : 320,
  height: isClient ? window.innerHeight : 640,
})

windowSizeAtom.onMount = (setWindowSizeAtom) => {
  const handler = () => {
    setWindowSizeAtom({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const debouncedHandler = debounce(handler, 200)

  if (isClient) {
    handler()
    window.addEventListener('resize', debouncedHandler)
    return () => {
      window.removeEventListener('resize', debouncedHandler)
    }
  }
}

export default windowSizeAtom
