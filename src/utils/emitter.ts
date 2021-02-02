import mitt from 'mitt'
import React from 'react'

export type InViewPayload = { ref: React.MutableRefObject<HTMLHeadingElement> }
export const InViewEvent = Symbol('in-view-event')

export const emitter = mitt()
