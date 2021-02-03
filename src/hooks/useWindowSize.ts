import { useEffect } from 'react'
import useRafState from './useRafState'
import { isClient } from './util'

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useRafState<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  })
  useEffect((): (() => void) | void => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      handler()
      window.addEventListener('load', handler)
      window.addEventListener('resize', handler)
      return () => {
        window.removeEventListener('load', handler)
        window.removeEventListener('resize', handler)
      }
    }
  }, [])
  return state
}
export default useWindowSize
