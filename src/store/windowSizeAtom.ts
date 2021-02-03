import { isClient } from 'src/utils'
import { debounce } from 'lodash'
import { atom } from "jotai"

export type windowSize = {
  width: number | null
  height: number | null
}

export const windowSizeAtom = atom<windowSize>({
  width: isClient ? window.innerWidth : null,
  height: isClient ? window.innerHeight : null,
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
