import { isClient } from 'src/utils'
import { debounce } from 'lodash'
import { atom } from "jotai"

export type windowSize = {
  width: number
  height: number
}

export const windowSizeAtom = atom<windowSize>({
  width: isClient ? window.innerWidth : 320,
  height: isClient ? window.innerHeight : 320,
})

windowSizeAtom.onMount = (setWindowSizeAtom) => {
  const handler = () => {
    setWindowSizeAtom({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  const debouncedHandler = debounce(handler, 200)

  const mount = () => {
    if (isClient) {
      handler()
      window.addEventListener('resize', debouncedHandler)
      return () => {
        window.removeEventListener('resize', debouncedHandler)
      }
    } else {
      setTimeout(mount, 100)
    }
  }

  mount()
}

export default windowSizeAtom
