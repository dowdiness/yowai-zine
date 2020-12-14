import React, { useState, useEffect } from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from "react-share"

export type ArticleShareButtonProps = {
  articleTitle: string
  articleUrl: string
  articleDescription: string
}

const ArticleShareButton: React.FCX<ArticleShareButtonProps> = ({ className, articleTitle, articleUrl, articleDescription }) => {
  const [iconSize, setIconSize] = useState(24)
  const mql = matchMedia("(min-width: 992px)")
  const changeIconSize = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setIconSize(48)
    } else {
      setIconSize(24)
    }
  }

  useEffect(() => {
    if (mql.matches) {
      setIconSize(48)
    } else {
      setIconSize(24)
    }

    mql.addEventListener("change", changeIconSize)
    return() => {
      mql.removeEventListener("change" , changeIconSize)
    }
  }, [])

  return (
    <div className={`flex flex-col items-center w-12 lg:w-24 space-y-4 ${className}`}>
      <div className="w-6 h-6 lg:w-12 lg:h-12">
        <TwitterShareButton url={articleUrl} title={articleTitle}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </div>
      <div className="w-6 h-6 lg:w-12 lg:h-12">
        <FacebookShareButton url={articleUrl} quote={articleDescription}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
      </div>
      <div className="w-6 h-6 lg:w-12 lg:h-12">
        <LineShareButton url={articleUrl} title={articleTitle}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </div>
      <h3 className="font-sans uppercase vertical-rl font-extralight lg:text-lg">PLEASE SHARE!!!</h3>
    </div>
  )
}

export default ArticleShareButton
