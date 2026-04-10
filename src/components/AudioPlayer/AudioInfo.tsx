import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

type AudioInfoProps =
  {
    className: string
    image: IGatsbyImageData
    title: string
    artist: string
  }

const AudioInfo = ({
  className,
  image,
  title,
  artist
}: AudioInfoProps) => (
  <div className={`${className} flex items-center justify-start`}>
    <GatsbyImage
      loading="eager"
      className="w-12 h-12 sm:w-20 sm:h-20 shrink-0 cursor-none"
      image={image}
      alt={title}
    />
    <div className="flex flex-col items-start flex-1 min-w-0 ml-2">
      <h2 className="mb-1 font-sans text-sm font-bold leading-tight text-black sm:text-base line-clamp-2">{title}</h2>
      <h3 className="font-sans text-xs text-gray-600 sm:text-sm line-clamp-1">{artist}</h3>
    </div>
  </div>
)

export default AudioInfo
