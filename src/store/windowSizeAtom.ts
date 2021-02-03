import { isClient } from 'src/utils'
import { debounce } from 'lodash'
import { atom } from "jotai"

export type windowSize = {
  width: number
  height: number
}

export const windowSizeAtom = atom<windowSize>({
  width: isClient ? window.innerWidth : 0,
  height: isClient ? window.innerHeight : 0,
})

windowSizeAtom.onMount = (setWindowSizeAtom) => {
  if (isClient) {
    const handler = () => {
      setWindowSizeAtom({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handler()
    const debouncedHandler = debounce(handler, 200)
    window.addEventListener('load', handler)
    window.addEventListener('resize', debouncedHandler)
    return () => {
      window.addEventListener('load', handler)
      window.removeEventListener('resize', debouncedHandler)
    }
  }
}

export default windowSizeAtom
