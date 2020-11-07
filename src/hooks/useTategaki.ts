import { useRef, useEffect, MutableRefObject } from 'react'
import { isFirefox } from './util'
import { debounce } from 'lodash'

export interface Tategaki {
  tategakiRef: MutableRefObject<HTMLElement>
}

const useTategaki = (): Tategaki => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tategakiRef = useRef<HTMLElement>(null!)

  const adjustSize = () => {
    // bug fix
    if (isFirefox) {
      tategakiRef.current.style.height = 'auto'

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!tategakiRef) {
            return
          }

          tategakiRef.current.style.height = ''
          tategakiRef.current.style.paddingBottom = ''
          const fullHeight = tategakiRef.current.scrollHeight
          const defaultHeight = Number(
            getComputedStyle(tategakiRef.current).height.replace('px', '')
          )
          tategakiRef.current.style.paddingBottom = `${
            fullHeight - defaultHeight
          }px`
        })
      })
      return
    }

    tategakiRef.current.style.paddingBottom = ''
    const fullHeight = tategakiRef.current.scrollHeight
    const defaultHeight = Number(
      getComputedStyle(tategakiRef.current).height.replace('px', '')
    )
    tategakiRef.current.style.paddingBottom = `${fullHeight - defaultHeight}px`
  }

  const debouncedAdjustSize = debounce(adjustSize, 100)

  useEffect(() => {
    adjustSize()
    window.addEventListener('load', adjustSize)
    window.addEventListener('resize', debouncedAdjustSize)
    return () => {
      debouncedAdjustSize.cancel()
      window.removeEventListener('load', adjustSize)
      window.removeEventListener('resize', debouncedAdjustSize)
    }
  }, [tategakiRef])

  return { tategakiRef }
}

export default useTategaki
