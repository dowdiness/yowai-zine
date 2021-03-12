import { atom } from "jotai"
import { useStaticQuery, graphql} from 'gatsby'
import { IGatsbyImageData, getImage } from "gatsby-plugin-image"

export type Track = {
  title: string
  artist: string
  audioSrc: string
  cover: string
}

// const data = useStaticQuery<GatsbyTypes.AudioQuery>(graphql`
// query Audio {
//   allContentfulSong {
//     nodes {
//       coverart {
//         gatsbyImageData
//       }
//       artist {
//         name
//       }
//       sound {
//         id
//         localFile {
//           publicURL
//         }
//       }
//       title
//     }
//   }
// }
// `)

// const songs = data.allContentfulSong.nodes

export const tracksAtom = atom<Track[]>([])

export type action = {
  type: 'init' | 'reset'
}

export const trackSetupedAtom = atom<Track[],action>(
  (get) => get(tracksAtom),
  (get, set, action) => {
    if (action.type === 'init') {

      // const normarizedSongs = songs.map((song) => {
      //   const coverArt = getImage(song.coverart?.gatsbyImageData!)
      //   return {
      //     title: song.title!,
      //     artist: song.artist?.name!,
      //     audioSrc: song.sound?.localFile?.publicURL!,
      //     cover: coverArt!,
      //   }
      // })

      const pichi = {
        title: 'あーなにを見ていればいいのか',
        artist: 'ピチピチニートまんじゅう',
        audioSrc: '/static/5b3dcaf46ed11182b50780fec3effcf8/___________________________.mp3',
        cover: "/static/1a16fc5dfdd2ddd2cdde7484adbb6d90/pichipichi.jpg",
      }
      // set(tracksAtom, normarizedSongs)
      set(tracksAtom, [pichi])
    } else if (action.type === 'reset') {
      set(tracksAtom, (c) => [])
    }
  }
)

trackSetupedAtom.onMount = (setAtom) => {
  setAtom({ type: 'init' })
}
