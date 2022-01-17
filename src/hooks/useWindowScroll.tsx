import { useEffect } from 'react'
import { isClient } from './util'
import useRafState from './useRafState'
import { throttle } from 'src/utils'
export interface State {
  x: number
  y: number
}

const useWindowScroll = (): State => {
  const [state, setState] = useRafState<State>({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  })
  useEffect(() => {
    const handler = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset,
      })
    }
    const throttledHandler = throttle(handler, 100)
    window.addEventListener('scroll', throttledHandler, {
      capture: false,
      passive: true,
    })
    return () => {
      window.removeEventListener('scroll', throttledHandler)
    }
  }, [])
  return state
}
export default useWindowScroll
