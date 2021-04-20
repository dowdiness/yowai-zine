import React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

//Hooks
// import useSkew from 'src/hooks/useSkew'

//Components
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { LogoLd, BreadcrumbLd } from "src/components/JsonLd"
import { ArticleLink } from 'src/components/Article'
import AudioLists from 'src/components/AudioPlayer/AudioLists'
import SectionHeader from 'src/components/Element/SectionHeader'

const PlaylistPage: React.FC<PageProps<GatsbyTypes.PlaylistIndexPageQuery>> = ({ data }) => {
  //@ts-ignore
  const playlists = data.playlists.edges

  return (
    <div className="max-w-3xl py-16 mx-auto">
      <GatsbySeo
        title="プレイリスト"
        openGraph={{
          title: "プレイリスト | 弱いZINE",
        }}
      />
      <LogoLd />
      <BreadcrumbLd
        itemListElements={[
          {
            position: 2,
            name: 'プレイリスト',
            item: `playlist`,
          },
        ]}
      />
      <ArticleLink
        to={`/`}
        title='トップページに戻る'
        className="mt-12 text-left"
      />
      <SectionHeader title="Playlist" author="プレイリスト" />
      <AudioLists
        playlists={playlists}
      />
    </div>
  )
}

export default PlaylistPage

export const pageQuery = graphql`
  query PlaylistIndexPage {
    playlists: allContentfulPlaylist(sort: {order: DESC, fields: updatedAt}) {
      edges {
        node {
          id
          title
          slug
          artists {
            name
          }
          coverart {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
          albumPath: gatsbyPath(filePath: "/playlist/{ContentfulPlaylist.slug}")
        }
      }
    }
  }
`
