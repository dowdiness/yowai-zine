import { isObject } from './isObject'

export interface DebouncedFunc<T extends (...args: any[]) => any> {
  /**
   * Call the original function, but applying the debounce rules.
   *
   * If the debounced function can be run immediately, this calls it and returns its return
   * value.
   *
   * Otherwise, it returns the return value of the last invokation, or undefined if the debounced
   * function was not invoked yet.
   */
  (...args: Parameters<T>): ReturnType<T> | undefined

  /**
   * Throw away any pending invokation of the debounced function.
   */
  cancel(): void

  /**
   * If there is a pending invokation of the debounced function, invoke it immediately and return
   * its return value.
   *
   * Otherwise, return the value from the last invokation, or undefined if the debounced function
   * was never invoked.
   */
  flush(): ReturnType<T> | undefined
}

interface DebounceOptions {
  leading?: boolean
  maxWait?: number
  trailing?: boolean
}

type TimeoutId = ReturnType<typeof setTimeout>

export default function debounce<T extends (...args: any) => any>(
  func: T,
  wait?: number,
  options?: DebounceOptions
): DebouncedFunc<T> {
  type Result = ReturnType<T> | undefined

  let lastArgs: any
  let lastThis: any
  let result: Result
  let lastCallTime: number | undefined
  let timerId: TimeoutId | undefined
  let lastInvokeTime = 0

  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
  const useRAF =
    wait === undefined &&
    typeof window !== 'undefined' &&
    typeof window.requestAnimationFrame === 'function'

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

  const waitValue = Number(wait) || 0

  let leading = false
  let trailing = true
  let maxWait: number | null = null
  if (isObject(options)) {
    leading = !!options.leading
    maxWait =
      'maxWait' in options
        ? Math.max(Number(options.maxWait) || 0, waitValue)
        : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  function invokeFunc(time: number): Result {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function startTimer(pendingFunc: () => Result, wait: number): TimeoutId {
    if (useRAF && typeof timerId === 'number') {
      window.cancelAnimationFrame(timerId)
      return window.requestAnimationFrame(pendingFunc) as any
    }
    return setTimeout(pendingFunc, wait)
  }

  function cancelTimer(id: TimeoutId): void {
    if (useRAF && typeof id === 'number') {
      window.cancelAnimationFrame(id)
    }
    clearTimeout(id)
  }

  function leadingEdge(time: number): Result {
    // Reset any `maxWait` timer.
    lastInvokeTime = time
    // Start the timer for the trailing edge.
    timerId = startTimer(timerExpired, waitValue)
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result
  }

  function remainingWait(time: number): number {
    if (lastCallTime === undefined) return 0

    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = waitValue - timeSinceLastCall

    return maxWait !== null
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting
  }

  function shouldInvoke(time: number): boolean {
    if (lastCallTime === undefined) return true

    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (
      timeSinceLastCall >= waitValue ||
      timeSinceLastCall < 0 ||
      (maxWait !== null && timeSinceLastInvoke >= maxWait)
    )
  }

  function timerExpired(): Result {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }

    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time))

    return
  }

  function trailingEdge(time: number): Result {
    timerId = undefined

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel(): void {
    if (timerId !== undefined) {
      cancelTimer(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush(): Result {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

  function pending(): boolean {
    return timerId !== undefined
  }

  function debounced(this: any, ...args: any[]): Result {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxWait !== null) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, waitValue)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, waitValue)
    }
    return result
  }

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending

  return debounced
}
