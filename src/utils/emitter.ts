import mitt from 'mitt'
import React from 'react'

export type InViewPayload = { ref: React.MutableRefObject<HTMLElement> }
export type CursorPayload = { ref: React.MutableRefObject<HTMLElement> }

export const InViewEvent = Symbol('in-view-event')
export const CursorEvent = Symbol('cursor-event')
export const LoadingFinishedEvent = Symbol('loading-finished-event')

export const emitter = mitt()
