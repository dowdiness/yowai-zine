import React, { useState, useEffect } from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from "react-share"
import { BiShareAlt } from 'react-icons/bi'

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

  const shareData: Required<ShareData> = {
    title: articleTitle,
    text: articleDescription,
    url: articleUrl,
  }

  const share = async () => {
    await navigator.share(shareData).catch(error => {
      console.error(error.message)
    })
  }

  return (
    <div className={`flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-16 xl:space-y-20 ${className}`}>
      <h3 className="font-sans text-xl font-black uppercase sm:text-2xl md:text-3xl xl:text-4xl">この記事をシェアする</h3>
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
        {typeof navigator === 'object' && navigator.share && (
          <div className="w-12 h-12 lg:w-18 lg:h-18">
            <button aria-label="share" className="react-share__ShareButton">
              <BiShareAlt onClick={share} size={iconSize} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleShareButton
