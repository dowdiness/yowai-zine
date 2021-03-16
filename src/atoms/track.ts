import { atom } from "jotai"
import { atomWithReset } from 'jotai/utils'
import { IGatsbyImageData } from "gatsby-plugin-image"

export type Track = {
  title: string
  artist: string
  audioSrc: string
  cover: IGatsbyImageData
}

export const tracksAtom = atomWithReset<Track[]>([])

export const updateTracksAtom = atom(
  null,
  (_get, set, newTracks: Track[]) => {
    set(tracksAtom, newTracks)
  }
)

export const addTrackAtom = atom(
  null,
  (get, set, newTracks: readonly Track[]) => {
    const tracks = get(tracksAtom)
    set(tracksAtom, [...tracks, ...newTracks])
  }
)

export const prevTrackAtom = atom(
  null,
  (_get, _set, audio: HTMLAudioElement|null) => {
    if (audio) {
      audio.currentTime = 0
    }
  }
)

export const nextTrackAtom = atom(
  null,
  (get, set) => {
    const tracks = get(tracksAtom)
    if (tracks.length > 1) {
      tracks.shift()
      set(tracksAtom, [...tracks])
    } else {
      set(tracksAtom, [])
    }
  }
)

export const durationAtom = atom<number>(0)

export const trackProgressAtom = atom<number>(0)

export const volumeAtom = atom<number>(0)

export const isPlayingAtom = atom<boolean>(false)
