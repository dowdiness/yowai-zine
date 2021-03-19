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
      className="w-24 h-24 rounded-sm md:w-16 md:h-16 cursor-none hover:animate-huruhuru"
      image={image}
      alt={title}
    />
    <div className="flex flex-col items-start ml-2">
      <h2 className="font-sans text-base font-bold text-black">{title}</h2>
      <h3 className="font-sans text-sm text-gray-600">{artist}</h3>
    </div>
  </div>
)

export default AudioInfo
