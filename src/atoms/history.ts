import { atom } from "jotai"
import { Track } from "./track"

export const historyAtom = atom<Track[]>([])

export const historyIndexAtom = atom<number>(0)

export const addHistoryAtom = atom(null, (get, set, track: Track) => {
  const history = get(historyAtom)
  history.push(track)
  set(historyAtom, history)
})
