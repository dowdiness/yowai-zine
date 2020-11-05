import { useEffect } from 'react'
import useRafState from './useRafState'
import { isClient } from './util'
import { debounce } from 'lodash'

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
      const debouncedHandler = debounce(handler, 300)
      window.addEventListener('resize', debouncedHandler)
      return () => {
        window.removeEventListener('resize', debouncedHandler)
      }
    }
  }, [])
  return state
}
export default useWindowSize
