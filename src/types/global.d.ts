declare const __PATH_PREFIX__: string

import * as React from 'react'
declare module 'react' {
  type FCX<P = {}> = FunctionComponent<P & { className?: string }>
}
