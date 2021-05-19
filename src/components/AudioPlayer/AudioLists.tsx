import React from "react"
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type AudioListsProps = {
  playlists: {
    node: GatsbyTypes.ContentfulPlaylist & { albumPath: string | undefined }
  }[]
}

const AudioLists: React.FCX<AudioListsProps> = ({
  playlists,
}) => (
  <section className={`my-16 max-w-3xl mx-auto`}>
    <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 xl:grid-cols-3 md:gap-x-8 lg:gap-x-12">
      {playlists?.map(({ node }, index) => {
        // @ts-ignore
        const cover = getImage(node.coverart)
        return (
          <li data-skew key={`playlist-${node.title}-${index}`} className="w-full">
            <Link to={node.albumPath!}>
              <GatsbyImage
                image={cover!}
                loading="eager"
                alt="Zine"
                className="object-scale-down w-full mb-4 -z-10 hover:animate-huruhuru"
              />
              <div className="z-30">
                <h2 className="text-lg font-bold md:text-2xl">{node.title}</h2>
                <h3 className="text-base text-gray-700 md:text-xl">
                  {node?.artists?.map((artist, index) => {
                    return (
                      index === 0 ? <span>{artist?.name}</span> : <span>, {artist?.name}</span>
                    )
                  })}
                </h3>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  </section>
)

export default AudioLists
