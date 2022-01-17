import { useRef, useEffect, MutableRefObject } from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'
import { isFirefox } from './util'
import { debounce } from 'src/utils'

export interface Tategaki {
  tategakiRef: MutableRefObject<HTMLElement>
}

const useTategaki = (): Tategaki => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tategakiRef = useRef<HTMLElement>(null!)

  const adjustSize = (el: HTMLElement) => {
    // bug fix
    if (isFirefox) {
      el.style.height = 'auto'

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!el) {
            return
          }

          el.style.height = ''
          el.style.paddingBottom = ''
          const fullHeight = el.scrollHeight
          const defaultHeight = Number(
            getComputedStyle(el).height.replace('px', '')
          )
          el.style.paddingBottom = `${
            fullHeight - defaultHeight
          }px`
        })
      })
      return
    }

    el.style.paddingBottom = ''
    const fullHeight = el.scrollHeight
    const defaultHeight = Number(
      getComputedStyle(el).height.replace('px', '')
    )
    el.style.paddingBottom = `${fullHeight - defaultHeight}px`
  }


  useIsomorphicLayoutEffect(() => {
    adjustSize(tategakiRef.current)
    const adjustSizeCallback = () => adjustSize(tategakiRef.current)
    const debouncedAdjustSize = debounce(adjustSizeCallback, 100)
    window.addEventListener("load", debouncedAdjustSize)
    window.addEventListener('resize', debouncedAdjustSize)
    return () => {
      debouncedAdjustSize.cancel()
      window.removeEventListener("load", debouncedAdjustSize)
      window.removeEventListener('resize', debouncedAdjustSize)
    }
  }, [tategakiRef.current])

  return { tategakiRef }
}

export default useTategaki
