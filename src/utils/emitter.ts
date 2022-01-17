import mitt, { Emitter } from 'mitt'
import React from 'react'

export type MittEvents = {
  'in-view-event': { ref: React.MutableRefObject<HTMLElement> },
  'cursor-event': { ref: React.MutableRefObject<HTMLElement> },
  'loading-finished-event'?: never,
}

export const emitter: Emitter<MittEvents> = mitt<MittEvents>()
