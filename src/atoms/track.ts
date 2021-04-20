import { atom } from "jotai"
import { atomWithReset } from 'jotai/utils'
import { IGatsbyImageData } from "gatsby-plugin-image"
import { isAudioMiniPlayerOpenAtom, isAudioModalOpenAtom } from './ui'
import { historyAtom } from './history'

export type Track = {
  audioSrc: string
  title: string
  artist: string
  album: string
  slug: string
  duration: number
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
    set(historyAtom, [])
    if (newTracks.length) {
      set(isAudioMiniPlayerOpenAtom, true)
    } else {
      set(isAudioMiniPlayerOpenAtom, false)
    }
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
  (get, set, audio: HTMLAudioElement|null) => {
    const history = get(historyAtom)
    const prevTrack = history.pop()
    if (prevTrack) {
      set(isNotClickedAtom, true)
      const tracks = get(tracksAtom)
      set(tracksAtom, [prevTrack, ...tracks])
    } else if (audio) {
      audio.currentTime = 0
    }
  }
)

export const nextTrackAtom = atom(
  null,
  (get, set) => {
    const tracks = get(tracksAtom)
    const history = get(historyAtom)
    const prevTrack = tracks.shift()
    if (prevTrack) {
      set(historyAtom, [...history, prevTrack])
    }
    if (tracks.length > 0) {
      set(isNotClickedAtom, true)
      set(tracksAtom, [...tracks])
    } else {
      set(isPlayingAtom, false)
      set(isAudioModalOpenAtom, false)
      set(isAudioMiniPlayerOpenAtom, false)
      setTimeout(() => {
        set(tracksAtom, [])
      }, 1000)
    }
  }
)

export const durationAtom = atom<number>(0)

export const trackProgressAtom = atom<number>(0)

export const volumeAtom = atom<number>(1)

export const isPlayingAtom = atom<boolean>(false)

export const isPlayedAtom = atom<boolean>(false)

export const isLoadingAtom = atom<boolean>(false)

export const isNotClickedAtom = atom<boolean>(false)

export const isMuteAtom = atom<boolean>(false)

export const playbackRateAtom = atom<PlayBackRate>(1)

export const skipTimeAtom = atom<number>(0)

export const currentTimeAtom = atom<number>(0)
