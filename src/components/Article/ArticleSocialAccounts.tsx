import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { TiSocialInstagram, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

export type ArticleSocialAccountsProps = {
  linktree: string
  hatena: string
  bandcamp: string
  minnakikeru: string
  instagram: string
  youtube: string
  twitter: string
}

export const ArticleSocialAccounts: React.FCX<Partial<ArticleSocialAccountsProps>> = ({
  className,
  linktree,
  hatena,
  bandcamp,
  minnakikeru,
  instagram,
  youtube,
  twitter,

}) => {

  return (
    <div className={`${className}`}>
      {linktree && (
        <a aria-label="linktree" href={`https://linktr.ee/${linktree}`} target="_blank" rel="noreferrer noopener">
          <StaticImage
            width={48}
            height={48}
            src='../../../content/assets/linktree.jpg'
            alt="linktree"
            className="rounded-full"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </a>
      )}
      {hatena && (
        <a className="flex items-center justify-center w-12 h-12" aria-label="hatena" href={`https://${hatena}.hatenablog.com`} target="_blank" rel="noreferrer noopener">
          <StaticImage
            width={64}
            height={64}
            src='../../../content/assets/hatenablog-logo.svg'
            alt="hatena"
            className="w-16 h-16 rounded-full "
            layout="fixed"
            placeholder="tracedSVG"
          />
        </a>
      )}
      {bandcamp && (
        <a aria-label="bandcamp" href={bandcamp} target="_blank" rel="noreferrer noopener">
          <StaticImage
            width={42}
            height={42}
            src='../../../content/assets/bandcamp.png'
            alt="bandcamp"
            className="w-10 h-10 blend-multiply"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </a>
      )}
      {minnakikeru && (
        <a aria-label="minnakikeru" href={minnakikeru} target="_blank" rel="noreferrer noopener">
          <StaticImage
            width={48}
            height={48}
            src='../../../content/assets/minnakikeru.png'
            alt="minnakikeru"
            className="w-full h-full blend-multiply"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </a>
      )}
      {instagram && (
        <a aria-label="instagram" href={instagram} target="_blank" rel="noreferrer noopener">
          <TiSocialInstagram className="w-12 h-12" />
        </a>
      )}
      {youtube && (
        <a aria-label="youtube" href={youtube} target="_blank" rel="noreferrer noopener">
          <TiSocialYoutube className="w-12 h-12" />
        </a>
      )}
      {twitter && (
        <a aria-label="twitter" href={twitter} target="_blank" rel="noreferrer noopener">
          <TiSocialTwitter className="w-12 h-12" />
        </a>
      )}
    </div>
  )
}

export default ArticleSocialAccounts
