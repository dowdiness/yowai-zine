import { atom } from "jotai"
import { atomWithReset } from 'jotai/utils'
import { IGatsbyImageData } from "gatsby-plugin-image"

export type Track = {
  audioSrc: string
  title: string
  artist: string
  album: string
  cover: IGatsbyImageData
  artworks: Artwork[]
}

export type Artwork = {
  src: string
  sizes: string
  type: string
}

export type PlayBackRate =
  0.5 |
  0.8 |
  1   |
  1.2 |
  1.5 |
  1.8 |
  2   |
  2.5 |
  3


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

export const playbackRateAtom = atom<PlayBackRate>(1)
