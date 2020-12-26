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
  const [iconSize, setIconSize] = useState(48)
  const changeIconSize = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setIconSize(64)
    } else {
      setIconSize(48)
    }
  }

  useEffect(() => {
    const mql = matchMedia("(min-width: 992px)")
    if (mql.matches) {
      setIconSize(64)
    } else {
      setIconSize(48)
    }

    mql.addEventListener("change", changeIconSize)
    return() => {
      mql.removeEventListener("change" , changeIconSize)
    }
  }, [])

  return (
    <div className={`flex flex-col items-center space-y-8 ${className}`}>
      <h3 className="font-sans text-xl font-black uppercase md:text-2xl">この記事をシェアする</h3>
      <div className={`w-1/2 flex justify-around items-center space-x-4`}>
        <div className="w-12 h-12 lg:w-18 lg:h-18">
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="w-12 h-12 lg:w-18 lg:h-18">
          <FacebookShareButton url={articleUrl} quote={articleDescription}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className="w-12 h-12 lg:w-18 lg:h-18">
          <LineShareButton url={articleUrl} title={articleTitle}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
      </div>
    </div>
  )
}

export default ArticleShareButton
