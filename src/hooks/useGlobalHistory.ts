import { useEffect } from 'react'
import { globalHistory } from '@reach/router'

const useGlobalHistory = (fn: Function): void => {
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        fn()
      }
    })
  }, [])
}

export default useGlobalHistory
