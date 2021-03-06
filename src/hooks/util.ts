/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isDeepEqualReact from 'fast-deep-equal/react'

export const isClient = typeof window === 'object'

export const isFirefox = isClient && navigator.userAgent.includes('Firefox')

export const on = (obj: any, ...args: any[]) => obj.addEventListener(...args)

export const off = (obj: any, ...args: any[]) =>
  obj.removeEventListener(...args)

export type FnReturningPromise = (...args: any[]) => Promise<any>

export type PromiseType<P extends Promise<any>> = P extends Promise<infer T>
  ? T
  : never

export const isDeepEqual: (a: any, b: any) => boolean = isDeepEqualReact
