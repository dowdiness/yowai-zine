/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type PagesJson */
  readonly childrenPagesJson: Maybe<ReadonlyArray<Maybe<PagesJson>>>;
  /** Returns the first child node of type PagesJson or null if there are no children of given type on this node */
  readonly childPagesJson: Maybe<PagesJson>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly trailingSlash: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly author: Maybe<SiteSiteMetadataAuthor>;
  readonly social: Maybe<SiteSiteMetadataSocial>;
};

type SiteSiteMetadataAuthor = {
  readonly name: Maybe<Scalars['String']>;
  readonly summary: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocial = {
  readonly twitter: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly localFile: Maybe<File>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fields: Maybe<ContentfulAssetFields>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulAssetFields = {
  readonly localFile: Maybe<Scalars['String']>;
};

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly markdownarticle: Maybe<ReadonlyArray<Maybe<ContentfulMarkdownArticle>>>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  readonly playlist: Maybe<ReadonlyArray<Maybe<ContentfulPlaylist>>>;
  readonly song: Maybe<ReadonlyArray<Maybe<ContentfulSong>>>;
  readonly image: Maybe<ContentfulAsset>;
  readonly linktree: Maybe<Scalars['String']>;
  readonly bandcamp: Maybe<Scalars['String']>;
  readonly soundcloud: Maybe<Scalars['String']>;
  readonly instagram: Maybe<Scalars['String']>;
  readonly minnakikeru: Maybe<Scalars['String']>;
  readonly hatena: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulAuthorIntroductionTextNode */
  readonly childrenContentfulAuthorIntroductionTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorIntroductionTextNode>>>;
  /** Returns the first child node of type contentfulAuthorIntroductionTextNode or null if there are no children of given type on this node */
  readonly childContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAuthor_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAuthor_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulAuthorSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAuthorSysContentType>;
};

type ContentfulAuthorSysContentType = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSys>;
};

type ContentfulAuthorSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulMarkdownArticle = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly disableSideHeader: Maybe<Scalars['Boolean']>;
  readonly isVirticalWriting: Maybe<Scalars['Boolean']>;
  readonly align: Maybe<Scalars['Boolean']>;
  readonly author: Maybe<ContentfulAuthor>;
  readonly featuredImage: Maybe<ContentfulAsset>;
  readonly content: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMarkdownArticleSys>;
  readonly images: Maybe<ReadonlyArray<Maybe<ContentfulAsset>>>;
  /** Returns all children nodes filtered by type contentfulMarkdownArticleContentTextNode */
  readonly childrenContentfulMarkdownArticleContentTextNode: Maybe<ReadonlyArray<Maybe<contentfulMarkdownArticleContentTextNode>>>;
  /** Returns the first child node of type contentfulMarkdownArticleContentTextNode or null if there are no children of given type on this node */
  readonly childContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulMarkdownArticle_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMarkdownArticle_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulMarkdownArticle_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulMarkdownArticleSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulMarkdownArticleSysContentType>;
};

type ContentfulMarkdownArticleSysContentType = {
  readonly sys: Maybe<ContentfulMarkdownArticleSysContentTypeSys>;
};

type ContentfulMarkdownArticleSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPlaylist = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly artists: Maybe<ReadonlyArray<Maybe<ContentfulAuthor>>>;
  readonly songs: Maybe<ReadonlyArray<Maybe<ContentfulSong>>>;
  readonly coverart: Maybe<ContentfulAsset>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPlaylistSys>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPlaylist_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPlaylist_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPlaylist_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type ContentfulPlaylistSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPlaylistSysContentType>;
};

type ContentfulPlaylistSysContentType = {
  readonly sys: Maybe<ContentfulPlaylistSysContentTypeSys>;
};

type ContentfulPlaylistSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulSong = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly duration: Maybe<Scalars['Int']>;
  readonly artist: Maybe<ContentfulAuthor>;
  readonly sound: Maybe<ContentfulAsset>;
  readonly coverart: Maybe<ContentfulAsset>;
  readonly playlist: Maybe<ReadonlyArray<Maybe<ContentfulPlaylist>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulSongSys>;
  readonly lyrics: Maybe<ContentfulSongLyrics>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulSong_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulSong_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulSongSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulSongSysContentType>;
};

type ContentfulSongSysContentType = {
  readonly sys: Maybe<ContentfulSongSysContentTypeSys>;
};

type ContentfulSongSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulSongLyrics = {
  readonly raw: Maybe<Scalars['String']>;
};

type MdxFrontmatter = {
  readonly title: Scalars['String'];
  readonly subtitle: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly prevlink: Maybe<Scalars['String']>;
  readonly prevtitle: Maybe<Scalars['String']>;
  readonly nextlink: Maybe<Scalars['String']>;
  readonly nexttitle: Maybe<Scalars['String']>;
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type Mdx = Node & {
  readonly rawBody: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly slug: Maybe<Scalars['String']>;
  readonly body: Scalars['String'];
  readonly excerpt: Scalars['String'];
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Mdx_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type Mdx_headingsArgs = {
  depth: Maybe<HeadingsMdx>;
};


type Mdx_tableOfContentsArgs = {
  maxDepth: Maybe<Scalars['Int']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type contentfulMarkdownArticleContentTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly content: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulMarkdownArticleContentTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
};

type contentfulMarkdownArticleContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorIntroductionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly introduction: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorIntroductionTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
};

type contentfulAuthorIntroductionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type PagesJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly path: Maybe<Scalars['String']>;
  readonly introduction: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly displayTitle: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly catchphrase: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type StaticImage = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly sourceInstanceName: Maybe<Scalars['String']>;
  readonly relativePath: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly prettySize: Maybe<Scalars['String']>;
  readonly modifiedTime: Maybe<Scalars['Date']>;
  readonly accessTime: Maybe<Scalars['Date']>;
  readonly changeTime: Maybe<Scalars['Date']>;
  readonly birthTime: Maybe<Scalars['Date']>;
  readonly root: Maybe<Scalars['String']>;
  readonly dir: Maybe<Scalars['String']>;
  readonly base: Maybe<Scalars['String']>;
  readonly ext: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly absolutePath: Maybe<Scalars['String']>;
  readonly relativeDirectory: Maybe<Scalars['String']>;
  readonly dev: Maybe<Scalars['Int']>;
  readonly mode: Maybe<Scalars['Int']>;
  readonly nlink: Maybe<Scalars['Int']>;
  readonly uid: Maybe<Scalars['Int']>;
  readonly rdev: Maybe<Scalars['Int']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly ino: Maybe<Scalars['Int']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly atimeMs: Maybe<Scalars['Float']>;
  readonly mtimeMs: Maybe<Scalars['Float']>;
  readonly ctimeMs: Maybe<Scalars['Float']>;
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly atime: Maybe<Scalars['Date']>;
  readonly mtime: Maybe<Scalars['Date']>;
  readonly ctime: Maybe<Scalars['Date']>;
  readonly birthtime: Maybe<Scalars['Date']>;
};


type StaticImage_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type StaticImage_birthtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulMarkdownArticle: Maybe<ContentfulMarkdownArticle>;
  readonly allContentfulMarkdownArticle: ContentfulMarkdownArticleConnection;
  readonly contentfulPlaylist: Maybe<ContentfulPlaylist>;
  readonly allContentfulPlaylist: ContentfulPlaylistConnection;
  readonly contentfulSong: Maybe<ContentfulSong>;
  readonly allContentfulSong: ContentfulSongConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly allContentfulMarkdownArticleContentTextNode: contentfulMarkdownArticleContentTextNodeConnection;
  readonly contentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly allContentfulAuthorIntroductionTextNode: contentfulAuthorIntroductionTextNodeConnection;
  readonly pagesJson: Maybe<PagesJson>;
  readonly allPagesJson: PagesJsonConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly staticImage: Maybe<StaticImage>;
  readonly allStaticImage: StaticImageConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenPagesJson: Maybe<PagesJsonFilterListInput>;
  childPagesJson: Maybe<PagesJsonFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  trailingSlash: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  localFile: Maybe<FileFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fields: Maybe<ContentfulAssetFieldsFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
  introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  playlist: Maybe<ContentfulPlaylistFilterListInput>;
  song: Maybe<ContentfulSongFilterListInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  linktree: Maybe<StringQueryOperatorInput>;
  bandcamp: Maybe<StringQueryOperatorInput>;
  soundcloud: Maybe<StringQueryOperatorInput>;
  instagram: Maybe<StringQueryOperatorInput>;
  minnakikeru: Maybe<StringQueryOperatorInput>;
  hatena: Maybe<StringQueryOperatorInput>;
  youtube: Maybe<StringQueryOperatorInput>;
  childrenContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterListInput>;
  childContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAuthorArgs = {
  filter: Maybe<ContentfulAuthorFilterInput>;
  sort: Maybe<ContentfulAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMarkdownArticleArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  isVirticalWriting: Maybe<BooleanQueryOperatorInput>;
  align: Maybe<BooleanQueryOperatorInput>;
  author: Maybe<ContentfulAuthorFilterInput>;
  featuredImage: Maybe<ContentfulAssetFilterInput>;
  content: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMarkdownArticleSysFilterInput>;
  images: Maybe<ContentfulAssetFilterListInput>;
  childrenContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterListInput>;
  childContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulMarkdownArticleArgs = {
  filter: Maybe<ContentfulMarkdownArticleFilterInput>;
  sort: Maybe<ContentfulMarkdownArticleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPlaylistArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  artists: Maybe<ContentfulAuthorFilterListInput>;
  songs: Maybe<ContentfulSongFilterListInput>;
  coverart: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPlaylistSysFilterInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPlaylistArgs = {
  filter: Maybe<ContentfulPlaylistFilterInput>;
  sort: Maybe<ContentfulPlaylistSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulSongArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  duration: Maybe<IntQueryOperatorInput>;
  artist: Maybe<ContentfulAuthorFilterInput>;
  sound: Maybe<ContentfulAssetFilterInput>;
  coverart: Maybe<ContentfulAssetFilterInput>;
  playlist: Maybe<ContentfulPlaylistFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulSongSysFilterInput>;
  lyrics: Maybe<ContentfulSongLyricsFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulSongArgs = {
  filter: Maybe<ContentfulSongFilterInput>;
  sort: Maybe<ContentfulSongSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_mdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JSONQueryOperatorInput>;
  tableOfContents: Maybe<JSONQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulMarkdownArticleContentTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulMarkdownArticleContentTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allContentfulMarkdownArticleContentTextNodeArgs = {
  filter: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  sort: Maybe<contentfulMarkdownArticleContentTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorIntroductionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  introduction: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorIntroductionTextNodeSysFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
};


type Query_allContentfulAuthorIntroductionTextNodeArgs = {
  filter: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorIntroductionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_pagesJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  introduction: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
  displayTitle: Maybe<BooleanQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  catchphrase: Maybe<StringQueryOperatorInput>;
};


type Query_allPagesJsonArgs = {
  filter: Maybe<PagesJsonFilterInput>;
  sort: Maybe<PagesJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_staticImageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<IntQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
};


type Query_allStaticImageArgs = {
  filter: Maybe<StaticImageFilterInput>;
  sort: Maybe<StaticImageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type MdxFilterListInput = {
  readonly elemMatch: Maybe<MdxFilterInput>;
};

type MdxFilterInput = {
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly mdxAST: Maybe<JSONQueryOperatorInput>;
  readonly tableOfContents: Maybe<JSONQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<MdxWordCountFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly prevlink: Maybe<StringQueryOperatorInput>;
  readonly prevtitle: Maybe<StringQueryOperatorInput>;
  readonly nextlink: Maybe<StringQueryOperatorInput>;
  readonly nexttitle: Maybe<StringQueryOperatorInput>;
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type PagesJsonFilterListInput = {
  readonly elemMatch: Maybe<PagesJsonFilterInput>;
};

type PagesJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly introduction: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly displayTitle: Maybe<BooleanQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly catchphrase: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.subtitle'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.prevlink'
  | 'childrenMdx.frontmatter.prevtitle'
  | 'childrenMdx.frontmatter.nextlink'
  | 'childrenMdx.frontmatter.nexttitle'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.subtitle'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.prevlink'
  | 'childMdx.frontmatter.prevtitle'
  | 'childMdx.frontmatter.nextlink'
  | 'childMdx.frontmatter.nexttitle'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenPagesJson'
  | 'childrenPagesJson.id'
  | 'childrenPagesJson.parent.id'
  | 'childrenPagesJson.parent.parent.id'
  | 'childrenPagesJson.parent.parent.children'
  | 'childrenPagesJson.parent.children'
  | 'childrenPagesJson.parent.children.id'
  | 'childrenPagesJson.parent.children.children'
  | 'childrenPagesJson.parent.internal.content'
  | 'childrenPagesJson.parent.internal.contentDigest'
  | 'childrenPagesJson.parent.internal.description'
  | 'childrenPagesJson.parent.internal.fieldOwners'
  | 'childrenPagesJson.parent.internal.ignoreType'
  | 'childrenPagesJson.parent.internal.mediaType'
  | 'childrenPagesJson.parent.internal.owner'
  | 'childrenPagesJson.parent.internal.type'
  | 'childrenPagesJson.children'
  | 'childrenPagesJson.children.id'
  | 'childrenPagesJson.children.parent.id'
  | 'childrenPagesJson.children.parent.children'
  | 'childrenPagesJson.children.children'
  | 'childrenPagesJson.children.children.id'
  | 'childrenPagesJson.children.children.children'
  | 'childrenPagesJson.children.internal.content'
  | 'childrenPagesJson.children.internal.contentDigest'
  | 'childrenPagesJson.children.internal.description'
  | 'childrenPagesJson.children.internal.fieldOwners'
  | 'childrenPagesJson.children.internal.ignoreType'
  | 'childrenPagesJson.children.internal.mediaType'
  | 'childrenPagesJson.children.internal.owner'
  | 'childrenPagesJson.children.internal.type'
  | 'childrenPagesJson.internal.content'
  | 'childrenPagesJson.internal.contentDigest'
  | 'childrenPagesJson.internal.description'
  | 'childrenPagesJson.internal.fieldOwners'
  | 'childrenPagesJson.internal.ignoreType'
  | 'childrenPagesJson.internal.mediaType'
  | 'childrenPagesJson.internal.owner'
  | 'childrenPagesJson.internal.type'
  | 'childrenPagesJson.path'
  | 'childrenPagesJson.introduction'
  | 'childrenPagesJson.image'
  | 'childrenPagesJson.displayTitle'
  | 'childrenPagesJson.title'
  | 'childrenPagesJson.catchphrase'
  | 'childPagesJson.id'
  | 'childPagesJson.parent.id'
  | 'childPagesJson.parent.parent.id'
  | 'childPagesJson.parent.parent.children'
  | 'childPagesJson.parent.children'
  | 'childPagesJson.parent.children.id'
  | 'childPagesJson.parent.children.children'
  | 'childPagesJson.parent.internal.content'
  | 'childPagesJson.parent.internal.contentDigest'
  | 'childPagesJson.parent.internal.description'
  | 'childPagesJson.parent.internal.fieldOwners'
  | 'childPagesJson.parent.internal.ignoreType'
  | 'childPagesJson.parent.internal.mediaType'
  | 'childPagesJson.parent.internal.owner'
  | 'childPagesJson.parent.internal.type'
  | 'childPagesJson.children'
  | 'childPagesJson.children.id'
  | 'childPagesJson.children.parent.id'
  | 'childPagesJson.children.parent.children'
  | 'childPagesJson.children.children'
  | 'childPagesJson.children.children.id'
  | 'childPagesJson.children.children.children'
  | 'childPagesJson.children.internal.content'
  | 'childPagesJson.children.internal.contentDigest'
  | 'childPagesJson.children.internal.description'
  | 'childPagesJson.children.internal.fieldOwners'
  | 'childPagesJson.children.internal.ignoreType'
  | 'childPagesJson.children.internal.mediaType'
  | 'childPagesJson.children.internal.owner'
  | 'childPagesJson.children.internal.type'
  | 'childPagesJson.internal.content'
  | 'childPagesJson.internal.contentDigest'
  | 'childPagesJson.internal.description'
  | 'childPagesJson.internal.fieldOwners'
  | 'childPagesJson.internal.ignoreType'
  | 'childPagesJson.internal.mediaType'
  | 'childPagesJson.internal.owner'
  | 'childPagesJson.internal.type'
  | 'childPagesJson.path'
  | 'childPagesJson.introduction'
  | 'childPagesJson.image'
  | 'childPagesJson.displayTitle'
  | 'childPagesJson.title'
  | 'childPagesJson.catchphrase'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenPagesJson: Maybe<PagesJsonFilterListInput>;
  readonly childPagesJson: Maybe<PagesJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
  readonly social: Maybe<SiteSiteMetadataSocialFilterInput>;
};

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.author.name'
  | 'siteMetadata.author.summary'
  | 'siteMetadata.social.twitter'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly trailingSlash: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetFieldsFilterInput = {
  readonly localFile: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'localFile.sourceInstanceName'
  | 'localFile.absolutePath'
  | 'localFile.relativePath'
  | 'localFile.extension'
  | 'localFile.size'
  | 'localFile.prettySize'
  | 'localFile.modifiedTime'
  | 'localFile.accessTime'
  | 'localFile.changeTime'
  | 'localFile.birthTime'
  | 'localFile.root'
  | 'localFile.dir'
  | 'localFile.base'
  | 'localFile.ext'
  | 'localFile.name'
  | 'localFile.relativeDirectory'
  | 'localFile.dev'
  | 'localFile.mode'
  | 'localFile.nlink'
  | 'localFile.uid'
  | 'localFile.gid'
  | 'localFile.rdev'
  | 'localFile.ino'
  | 'localFile.atimeMs'
  | 'localFile.mtimeMs'
  | 'localFile.ctimeMs'
  | 'localFile.atime'
  | 'localFile.mtime'
  | 'localFile.ctime'
  | 'localFile.birthtime'
  | 'localFile.birthtimeMs'
  | 'localFile.blksize'
  | 'localFile.blocks'
  | 'localFile.url'
  | 'localFile.publicURL'
  | 'localFile.childrenMdx'
  | 'localFile.childrenMdx.rawBody'
  | 'localFile.childrenMdx.fileAbsolutePath'
  | 'localFile.childrenMdx.frontmatter.title'
  | 'localFile.childrenMdx.frontmatter.subtitle'
  | 'localFile.childrenMdx.frontmatter.description'
  | 'localFile.childrenMdx.frontmatter.slug'
  | 'localFile.childrenMdx.frontmatter.prevlink'
  | 'localFile.childrenMdx.frontmatter.prevtitle'
  | 'localFile.childrenMdx.frontmatter.nextlink'
  | 'localFile.childrenMdx.frontmatter.nexttitle'
  | 'localFile.childrenMdx.slug'
  | 'localFile.childrenMdx.body'
  | 'localFile.childrenMdx.excerpt'
  | 'localFile.childrenMdx.headings'
  | 'localFile.childrenMdx.headings.value'
  | 'localFile.childrenMdx.headings.depth'
  | 'localFile.childrenMdx.html'
  | 'localFile.childrenMdx.mdxAST'
  | 'localFile.childrenMdx.tableOfContents'
  | 'localFile.childrenMdx.timeToRead'
  | 'localFile.childrenMdx.wordCount.paragraphs'
  | 'localFile.childrenMdx.wordCount.sentences'
  | 'localFile.childrenMdx.wordCount.words'
  | 'localFile.childrenMdx.id'
  | 'localFile.childrenMdx.parent.id'
  | 'localFile.childrenMdx.parent.children'
  | 'localFile.childrenMdx.children'
  | 'localFile.childrenMdx.children.id'
  | 'localFile.childrenMdx.children.children'
  | 'localFile.childrenMdx.internal.content'
  | 'localFile.childrenMdx.internal.contentDigest'
  | 'localFile.childrenMdx.internal.description'
  | 'localFile.childrenMdx.internal.fieldOwners'
  | 'localFile.childrenMdx.internal.ignoreType'
  | 'localFile.childrenMdx.internal.mediaType'
  | 'localFile.childrenMdx.internal.owner'
  | 'localFile.childrenMdx.internal.type'
  | 'localFile.childMdx.rawBody'
  | 'localFile.childMdx.fileAbsolutePath'
  | 'localFile.childMdx.frontmatter.title'
  | 'localFile.childMdx.frontmatter.subtitle'
  | 'localFile.childMdx.frontmatter.description'
  | 'localFile.childMdx.frontmatter.slug'
  | 'localFile.childMdx.frontmatter.prevlink'
  | 'localFile.childMdx.frontmatter.prevtitle'
  | 'localFile.childMdx.frontmatter.nextlink'
  | 'localFile.childMdx.frontmatter.nexttitle'
  | 'localFile.childMdx.slug'
  | 'localFile.childMdx.body'
  | 'localFile.childMdx.excerpt'
  | 'localFile.childMdx.headings'
  | 'localFile.childMdx.headings.value'
  | 'localFile.childMdx.headings.depth'
  | 'localFile.childMdx.html'
  | 'localFile.childMdx.mdxAST'
  | 'localFile.childMdx.tableOfContents'
  | 'localFile.childMdx.timeToRead'
  | 'localFile.childMdx.wordCount.paragraphs'
  | 'localFile.childMdx.wordCount.sentences'
  | 'localFile.childMdx.wordCount.words'
  | 'localFile.childMdx.id'
  | 'localFile.childMdx.parent.id'
  | 'localFile.childMdx.parent.children'
  | 'localFile.childMdx.children'
  | 'localFile.childMdx.children.id'
  | 'localFile.childMdx.children.children'
  | 'localFile.childMdx.internal.content'
  | 'localFile.childMdx.internal.contentDigest'
  | 'localFile.childMdx.internal.description'
  | 'localFile.childMdx.internal.fieldOwners'
  | 'localFile.childMdx.internal.ignoreType'
  | 'localFile.childMdx.internal.mediaType'
  | 'localFile.childMdx.internal.owner'
  | 'localFile.childMdx.internal.type'
  | 'localFile.childrenImageSharp'
  | 'localFile.childrenImageSharp.fixed.base64'
  | 'localFile.childrenImageSharp.fixed.tracedSVG'
  | 'localFile.childrenImageSharp.fixed.aspectRatio'
  | 'localFile.childrenImageSharp.fixed.width'
  | 'localFile.childrenImageSharp.fixed.height'
  | 'localFile.childrenImageSharp.fixed.src'
  | 'localFile.childrenImageSharp.fixed.srcSet'
  | 'localFile.childrenImageSharp.fixed.srcWebp'
  | 'localFile.childrenImageSharp.fixed.srcSetWebp'
  | 'localFile.childrenImageSharp.fixed.originalName'
  | 'localFile.childrenImageSharp.fluid.base64'
  | 'localFile.childrenImageSharp.fluid.tracedSVG'
  | 'localFile.childrenImageSharp.fluid.aspectRatio'
  | 'localFile.childrenImageSharp.fluid.src'
  | 'localFile.childrenImageSharp.fluid.srcSet'
  | 'localFile.childrenImageSharp.fluid.srcWebp'
  | 'localFile.childrenImageSharp.fluid.srcSetWebp'
  | 'localFile.childrenImageSharp.fluid.sizes'
  | 'localFile.childrenImageSharp.fluid.originalImg'
  | 'localFile.childrenImageSharp.fluid.originalName'
  | 'localFile.childrenImageSharp.fluid.presentationWidth'
  | 'localFile.childrenImageSharp.fluid.presentationHeight'
  | 'localFile.childrenImageSharp.gatsbyImageData'
  | 'localFile.childrenImageSharp.original.width'
  | 'localFile.childrenImageSharp.original.height'
  | 'localFile.childrenImageSharp.original.src'
  | 'localFile.childrenImageSharp.resize.src'
  | 'localFile.childrenImageSharp.resize.tracedSVG'
  | 'localFile.childrenImageSharp.resize.width'
  | 'localFile.childrenImageSharp.resize.height'
  | 'localFile.childrenImageSharp.resize.aspectRatio'
  | 'localFile.childrenImageSharp.resize.originalName'
  | 'localFile.childrenImageSharp.id'
  | 'localFile.childrenImageSharp.parent.id'
  | 'localFile.childrenImageSharp.parent.children'
  | 'localFile.childrenImageSharp.children'
  | 'localFile.childrenImageSharp.children.id'
  | 'localFile.childrenImageSharp.children.children'
  | 'localFile.childrenImageSharp.internal.content'
  | 'localFile.childrenImageSharp.internal.contentDigest'
  | 'localFile.childrenImageSharp.internal.description'
  | 'localFile.childrenImageSharp.internal.fieldOwners'
  | 'localFile.childrenImageSharp.internal.ignoreType'
  | 'localFile.childrenImageSharp.internal.mediaType'
  | 'localFile.childrenImageSharp.internal.owner'
  | 'localFile.childrenImageSharp.internal.type'
  | 'localFile.childImageSharp.fixed.base64'
  | 'localFile.childImageSharp.fixed.tracedSVG'
  | 'localFile.childImageSharp.fixed.aspectRatio'
  | 'localFile.childImageSharp.fixed.width'
  | 'localFile.childImageSharp.fixed.height'
  | 'localFile.childImageSharp.fixed.src'
  | 'localFile.childImageSharp.fixed.srcSet'
  | 'localFile.childImageSharp.fixed.srcWebp'
  | 'localFile.childImageSharp.fixed.srcSetWebp'
  | 'localFile.childImageSharp.fixed.originalName'
  | 'localFile.childImageSharp.fluid.base64'
  | 'localFile.childImageSharp.fluid.tracedSVG'
  | 'localFile.childImageSharp.fluid.aspectRatio'
  | 'localFile.childImageSharp.fluid.src'
  | 'localFile.childImageSharp.fluid.srcSet'
  | 'localFile.childImageSharp.fluid.srcWebp'
  | 'localFile.childImageSharp.fluid.srcSetWebp'
  | 'localFile.childImageSharp.fluid.sizes'
  | 'localFile.childImageSharp.fluid.originalImg'
  | 'localFile.childImageSharp.fluid.originalName'
  | 'localFile.childImageSharp.fluid.presentationWidth'
  | 'localFile.childImageSharp.fluid.presentationHeight'
  | 'localFile.childImageSharp.gatsbyImageData'
  | 'localFile.childImageSharp.original.width'
  | 'localFile.childImageSharp.original.height'
  | 'localFile.childImageSharp.original.src'
  | 'localFile.childImageSharp.resize.src'
  | 'localFile.childImageSharp.resize.tracedSVG'
  | 'localFile.childImageSharp.resize.width'
  | 'localFile.childImageSharp.resize.height'
  | 'localFile.childImageSharp.resize.aspectRatio'
  | 'localFile.childImageSharp.resize.originalName'
  | 'localFile.childImageSharp.id'
  | 'localFile.childImageSharp.parent.id'
  | 'localFile.childImageSharp.parent.children'
  | 'localFile.childImageSharp.children'
  | 'localFile.childImageSharp.children.id'
  | 'localFile.childImageSharp.children.children'
  | 'localFile.childImageSharp.internal.content'
  | 'localFile.childImageSharp.internal.contentDigest'
  | 'localFile.childImageSharp.internal.description'
  | 'localFile.childImageSharp.internal.fieldOwners'
  | 'localFile.childImageSharp.internal.ignoreType'
  | 'localFile.childImageSharp.internal.mediaType'
  | 'localFile.childImageSharp.internal.owner'
  | 'localFile.childImageSharp.internal.type'
  | 'localFile.childrenPagesJson'
  | 'localFile.childrenPagesJson.id'
  | 'localFile.childrenPagesJson.parent.id'
  | 'localFile.childrenPagesJson.parent.children'
  | 'localFile.childrenPagesJson.children'
  | 'localFile.childrenPagesJson.children.id'
  | 'localFile.childrenPagesJson.children.children'
  | 'localFile.childrenPagesJson.internal.content'
  | 'localFile.childrenPagesJson.internal.contentDigest'
  | 'localFile.childrenPagesJson.internal.description'
  | 'localFile.childrenPagesJson.internal.fieldOwners'
  | 'localFile.childrenPagesJson.internal.ignoreType'
  | 'localFile.childrenPagesJson.internal.mediaType'
  | 'localFile.childrenPagesJson.internal.owner'
  | 'localFile.childrenPagesJson.internal.type'
  | 'localFile.childrenPagesJson.path'
  | 'localFile.childrenPagesJson.introduction'
  | 'localFile.childrenPagesJson.image'
  | 'localFile.childrenPagesJson.displayTitle'
  | 'localFile.childrenPagesJson.title'
  | 'localFile.childrenPagesJson.catchphrase'
  | 'localFile.childPagesJson.id'
  | 'localFile.childPagesJson.parent.id'
  | 'localFile.childPagesJson.parent.children'
  | 'localFile.childPagesJson.children'
  | 'localFile.childPagesJson.children.id'
  | 'localFile.childPagesJson.children.children'
  | 'localFile.childPagesJson.internal.content'
  | 'localFile.childPagesJson.internal.contentDigest'
  | 'localFile.childPagesJson.internal.description'
  | 'localFile.childPagesJson.internal.fieldOwners'
  | 'localFile.childPagesJson.internal.ignoreType'
  | 'localFile.childPagesJson.internal.mediaType'
  | 'localFile.childPagesJson.internal.owner'
  | 'localFile.childPagesJson.internal.type'
  | 'localFile.childPagesJson.path'
  | 'localFile.childPagesJson.introduction'
  | 'localFile.childPagesJson.image'
  | 'localFile.childPagesJson.displayTitle'
  | 'localFile.childPagesJson.title'
  | 'localFile.childPagesJson.catchphrase'
  | 'localFile.id'
  | 'localFile.parent.id'
  | 'localFile.parent.parent.id'
  | 'localFile.parent.parent.children'
  | 'localFile.parent.children'
  | 'localFile.parent.children.id'
  | 'localFile.parent.children.children'
  | 'localFile.parent.internal.content'
  | 'localFile.parent.internal.contentDigest'
  | 'localFile.parent.internal.description'
  | 'localFile.parent.internal.fieldOwners'
  | 'localFile.parent.internal.ignoreType'
  | 'localFile.parent.internal.mediaType'
  | 'localFile.parent.internal.owner'
  | 'localFile.parent.internal.type'
  | 'localFile.children'
  | 'localFile.children.id'
  | 'localFile.children.parent.id'
  | 'localFile.children.parent.children'
  | 'localFile.children.children'
  | 'localFile.children.children.id'
  | 'localFile.children.children.children'
  | 'localFile.children.internal.content'
  | 'localFile.children.internal.contentDigest'
  | 'localFile.children.internal.description'
  | 'localFile.children.internal.fieldOwners'
  | 'localFile.children.internal.ignoreType'
  | 'localFile.children.internal.mediaType'
  | 'localFile.children.internal.owner'
  | 'localFile.children.internal.type'
  | 'localFile.internal.content'
  | 'localFile.internal.contentDigest'
  | 'localFile.internal.description'
  | 'localFile.internal.fieldOwners'
  | 'localFile.internal.ignoreType'
  | 'localFile.internal.mediaType'
  | 'localFile.internal.owner'
  | 'localFile.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fields.localFile'
  | 'gatsbyImageData'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fields: Maybe<ContentfulAssetFieldsFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulMarkdownArticleFilterListInput = {
  readonly elemMatch: Maybe<ContentfulMarkdownArticleFilterInput>;
};

type ContentfulMarkdownArticleFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  readonly isVirticalWriting: Maybe<BooleanQueryOperatorInput>;
  readonly align: Maybe<BooleanQueryOperatorInput>;
  readonly author: Maybe<ContentfulAuthorFilterInput>;
  readonly featuredImage: Maybe<ContentfulAssetFilterInput>;
  readonly content: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMarkdownArticleSysFilterInput>;
  readonly images: Maybe<ContentfulAssetFilterListInput>;
  readonly childrenContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterListInput>;
  readonly childContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAuthorFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly playlist: Maybe<ContentfulPlaylistFilterListInput>;
  readonly song: Maybe<ContentfulSongFilterListInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly linktree: Maybe<StringQueryOperatorInput>;
  readonly bandcamp: Maybe<StringQueryOperatorInput>;
  readonly soundcloud: Maybe<StringQueryOperatorInput>;
  readonly instagram: Maybe<StringQueryOperatorInput>;
  readonly minnakikeru: Maybe<StringQueryOperatorInput>;
  readonly hatena: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterListInput>;
  readonly childContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulAuthorIntroductionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly introduction: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorIntroductionTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type contentfulAuthorIntroductionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

type ContentfulAuthorSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

type ContentfulAuthorSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPlaylistFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPlaylistFilterInput>;
};

type ContentfulPlaylistFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly artists: Maybe<ContentfulAuthorFilterListInput>;
  readonly songs: Maybe<ContentfulSongFilterListInput>;
  readonly coverart: Maybe<ContentfulAssetFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPlaylistSysFilterInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAuthorFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAuthorFilterInput>;
};

type ContentfulSongFilterListInput = {
  readonly elemMatch: Maybe<ContentfulSongFilterInput>;
};

type ContentfulSongFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly duration: Maybe<IntQueryOperatorInput>;
  readonly artist: Maybe<ContentfulAuthorFilterInput>;
  readonly sound: Maybe<ContentfulAssetFilterInput>;
  readonly coverart: Maybe<ContentfulAssetFilterInput>;
  readonly playlist: Maybe<ContentfulPlaylistFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulSongSysFilterInput>;
  readonly lyrics: Maybe<ContentfulSongLyricsFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulSongSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulSongSysContentTypeFilterInput>;
};

type ContentfulSongSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulSongSysContentTypeSysFilterInput>;
};

type ContentfulSongSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulSongLyricsFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type ContentfulPlaylistSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPlaylistSysContentTypeFilterInput>;
};

type ContentfulPlaylistSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPlaylistSysContentTypeSysFilterInput>;
};

type ContentfulPlaylistSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulAuthorIntroductionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
};

type contentfulMarkdownArticleContentTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulMarkdownArticleContentTextNodeSysFilterInput>;
  readonly childrenMdx: Maybe<MdxFilterListInput>;
  readonly childMdx: Maybe<MdxFilterInput>;
};

type contentfulMarkdownArticleContentTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulMarkdownArticleSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulMarkdownArticleSysContentTypeFilterInput>;
};

type ContentfulMarkdownArticleSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulMarkdownArticleSysContentTypeSysFilterInput>;
};

type ContentfulMarkdownArticleSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAssetFilterInput>;
};

type contentfulMarkdownArticleContentTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
};

type ContentfulAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
};


type ContentfulAuthorConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorEdge = {
  readonly next: Maybe<ContentfulAuthor>;
  readonly node: ContentfulAuthor;
  readonly previous: Maybe<ContentfulAuthor>;
};

type ContentfulAuthorFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'twitter'
  | 'markdownarticle'
  | 'markdownarticle.contentful_id'
  | 'markdownarticle.id'
  | 'markdownarticle.node_locale'
  | 'markdownarticle.title'
  | 'markdownarticle.slug'
  | 'markdownarticle.publishedAt'
  | 'markdownarticle.disableSideHeader'
  | 'markdownarticle.isVirticalWriting'
  | 'markdownarticle.align'
  | 'markdownarticle.author.contentful_id'
  | 'markdownarticle.author.id'
  | 'markdownarticle.author.node_locale'
  | 'markdownarticle.author.name'
  | 'markdownarticle.author.twitter'
  | 'markdownarticle.author.markdownarticle'
  | 'markdownarticle.author.markdownarticle.contentful_id'
  | 'markdownarticle.author.markdownarticle.id'
  | 'markdownarticle.author.markdownarticle.node_locale'
  | 'markdownarticle.author.markdownarticle.title'
  | 'markdownarticle.author.markdownarticle.slug'
  | 'markdownarticle.author.markdownarticle.publishedAt'
  | 'markdownarticle.author.markdownarticle.disableSideHeader'
  | 'markdownarticle.author.markdownarticle.isVirticalWriting'
  | 'markdownarticle.author.markdownarticle.align'
  | 'markdownarticle.author.markdownarticle.spaceId'
  | 'markdownarticle.author.markdownarticle.createdAt'
  | 'markdownarticle.author.markdownarticle.updatedAt'
  | 'markdownarticle.author.markdownarticle.images'
  | 'markdownarticle.author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'markdownarticle.author.markdownarticle.children'
  | 'markdownarticle.author.introduction.id'
  | 'markdownarticle.author.introduction.children'
  | 'markdownarticle.author.introduction.introduction'
  | 'markdownarticle.author.introduction.childrenMdx'
  | 'markdownarticle.author.spaceId'
  | 'markdownarticle.author.createdAt'
  | 'markdownarticle.author.updatedAt'
  | 'markdownarticle.author.sys.type'
  | 'markdownarticle.author.sys.revision'
  | 'markdownarticle.author.playlist'
  | 'markdownarticle.author.playlist.contentful_id'
  | 'markdownarticle.author.playlist.id'
  | 'markdownarticle.author.playlist.node_locale'
  | 'markdownarticle.author.playlist.title'
  | 'markdownarticle.author.playlist.slug'
  | 'markdownarticle.author.playlist.artists'
  | 'markdownarticle.author.playlist.songs'
  | 'markdownarticle.author.playlist.spaceId'
  | 'markdownarticle.author.playlist.createdAt'
  | 'markdownarticle.author.playlist.updatedAt'
  | 'markdownarticle.author.playlist.gatsbyPath'
  | 'markdownarticle.author.playlist.children'
  | 'markdownarticle.author.song'
  | 'markdownarticle.author.song.contentful_id'
  | 'markdownarticle.author.song.id'
  | 'markdownarticle.author.song.node_locale'
  | 'markdownarticle.author.song.title'
  | 'markdownarticle.author.song.duration'
  | 'markdownarticle.author.song.playlist'
  | 'markdownarticle.author.song.spaceId'
  | 'markdownarticle.author.song.createdAt'
  | 'markdownarticle.author.song.updatedAt'
  | 'markdownarticle.author.song.children'
  | 'markdownarticle.author.image.contentful_id'
  | 'markdownarticle.author.image.id'
  | 'markdownarticle.author.image.spaceId'
  | 'markdownarticle.author.image.createdAt'
  | 'markdownarticle.author.image.updatedAt'
  | 'markdownarticle.author.image.title'
  | 'markdownarticle.author.image.description'
  | 'markdownarticle.author.image.node_locale'
  | 'markdownarticle.author.image.gatsbyImageData'
  | 'markdownarticle.author.image.children'
  | 'markdownarticle.author.linktree'
  | 'markdownarticle.author.bandcamp'
  | 'markdownarticle.author.soundcloud'
  | 'markdownarticle.author.instagram'
  | 'markdownarticle.author.minnakikeru'
  | 'markdownarticle.author.hatena'
  | 'markdownarticle.author.youtube'
  | 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode'
  | 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.id'
  | 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.children'
  | 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.id'
  | 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.children'
  | 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.introduction'
  | 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'markdownarticle.author.parent.id'
  | 'markdownarticle.author.parent.children'
  | 'markdownarticle.author.children'
  | 'markdownarticle.author.children.id'
  | 'markdownarticle.author.children.children'
  | 'markdownarticle.author.internal.content'
  | 'markdownarticle.author.internal.contentDigest'
  | 'markdownarticle.author.internal.description'
  | 'markdownarticle.author.internal.fieldOwners'
  | 'markdownarticle.author.internal.ignoreType'
  | 'markdownarticle.author.internal.mediaType'
  | 'markdownarticle.author.internal.owner'
  | 'markdownarticle.author.internal.type'
  | 'markdownarticle.featuredImage.contentful_id'
  | 'markdownarticle.featuredImage.id'
  | 'markdownarticle.featuredImage.localFile.sourceInstanceName'
  | 'markdownarticle.featuredImage.localFile.absolutePath'
  | 'markdownarticle.featuredImage.localFile.relativePath'
  | 'markdownarticle.featuredImage.localFile.extension'
  | 'markdownarticle.featuredImage.localFile.size'
  | 'markdownarticle.featuredImage.localFile.prettySize'
  | 'markdownarticle.featuredImage.localFile.modifiedTime'
  | 'markdownarticle.featuredImage.localFile.accessTime'
  | 'markdownarticle.featuredImage.localFile.changeTime'
  | 'markdownarticle.featuredImage.localFile.birthTime'
  | 'markdownarticle.featuredImage.localFile.root'
  | 'markdownarticle.featuredImage.localFile.dir'
  | 'markdownarticle.featuredImage.localFile.base'
  | 'markdownarticle.featuredImage.localFile.ext'
  | 'markdownarticle.featuredImage.localFile.name'
  | 'markdownarticle.featuredImage.localFile.relativeDirectory'
  | 'markdownarticle.featuredImage.localFile.dev'
  | 'markdownarticle.featuredImage.localFile.mode'
  | 'markdownarticle.featuredImage.localFile.nlink'
  | 'markdownarticle.featuredImage.localFile.uid'
  | 'markdownarticle.featuredImage.localFile.gid'
  | 'markdownarticle.featuredImage.localFile.rdev'
  | 'markdownarticle.featuredImage.localFile.ino'
  | 'markdownarticle.featuredImage.localFile.atimeMs'
  | 'markdownarticle.featuredImage.localFile.mtimeMs'
  | 'markdownarticle.featuredImage.localFile.ctimeMs'
  | 'markdownarticle.featuredImage.localFile.atime'
  | 'markdownarticle.featuredImage.localFile.mtime'
  | 'markdownarticle.featuredImage.localFile.ctime'
  | 'markdownarticle.featuredImage.localFile.birthtime'
  | 'markdownarticle.featuredImage.localFile.birthtimeMs'
  | 'markdownarticle.featuredImage.localFile.blksize'
  | 'markdownarticle.featuredImage.localFile.blocks'
  | 'markdownarticle.featuredImage.localFile.url'
  | 'markdownarticle.featuredImage.localFile.publicURL'
  | 'markdownarticle.featuredImage.localFile.childrenMdx'
  | 'markdownarticle.featuredImage.localFile.childrenImageSharp'
  | 'markdownarticle.featuredImage.localFile.childrenPagesJson'
  | 'markdownarticle.featuredImage.localFile.id'
  | 'markdownarticle.featuredImage.localFile.children'
  | 'markdownarticle.featuredImage.spaceId'
  | 'markdownarticle.featuredImage.createdAt'
  | 'markdownarticle.featuredImage.updatedAt'
  | 'markdownarticle.featuredImage.file.url'
  | 'markdownarticle.featuredImage.file.fileName'
  | 'markdownarticle.featuredImage.file.contentType'
  | 'markdownarticle.featuredImage.title'
  | 'markdownarticle.featuredImage.description'
  | 'markdownarticle.featuredImage.node_locale'
  | 'markdownarticle.featuredImage.sys.type'
  | 'markdownarticle.featuredImage.sys.revision'
  | 'markdownarticle.featuredImage.fields.localFile'
  | 'markdownarticle.featuredImage.gatsbyImageData'
  | 'markdownarticle.featuredImage.parent.id'
  | 'markdownarticle.featuredImage.parent.children'
  | 'markdownarticle.featuredImage.children'
  | 'markdownarticle.featuredImage.children.id'
  | 'markdownarticle.featuredImage.children.children'
  | 'markdownarticle.featuredImage.internal.content'
  | 'markdownarticle.featuredImage.internal.contentDigest'
  | 'markdownarticle.featuredImage.internal.description'
  | 'markdownarticle.featuredImage.internal.fieldOwners'
  | 'markdownarticle.featuredImage.internal.ignoreType'
  | 'markdownarticle.featuredImage.internal.mediaType'
  | 'markdownarticle.featuredImage.internal.owner'
  | 'markdownarticle.featuredImage.internal.type'
  | 'markdownarticle.content.id'
  | 'markdownarticle.content.parent.id'
  | 'markdownarticle.content.parent.children'
  | 'markdownarticle.content.children'
  | 'markdownarticle.content.children.id'
  | 'markdownarticle.content.children.children'
  | 'markdownarticle.content.internal.content'
  | 'markdownarticle.content.internal.contentDigest'
  | 'markdownarticle.content.internal.description'
  | 'markdownarticle.content.internal.fieldOwners'
  | 'markdownarticle.content.internal.ignoreType'
  | 'markdownarticle.content.internal.mediaType'
  | 'markdownarticle.content.internal.owner'
  | 'markdownarticle.content.internal.type'
  | 'markdownarticle.content.content'
  | 'markdownarticle.content.sys.type'
  | 'markdownarticle.content.childrenMdx'
  | 'markdownarticle.content.childrenMdx.rawBody'
  | 'markdownarticle.content.childrenMdx.fileAbsolutePath'
  | 'markdownarticle.content.childrenMdx.slug'
  | 'markdownarticle.content.childrenMdx.body'
  | 'markdownarticle.content.childrenMdx.excerpt'
  | 'markdownarticle.content.childrenMdx.headings'
  | 'markdownarticle.content.childrenMdx.html'
  | 'markdownarticle.content.childrenMdx.mdxAST'
  | 'markdownarticle.content.childrenMdx.tableOfContents'
  | 'markdownarticle.content.childrenMdx.timeToRead'
  | 'markdownarticle.content.childrenMdx.id'
  | 'markdownarticle.content.childrenMdx.children'
  | 'markdownarticle.content.childMdx.rawBody'
  | 'markdownarticle.content.childMdx.fileAbsolutePath'
  | 'markdownarticle.content.childMdx.slug'
  | 'markdownarticle.content.childMdx.body'
  | 'markdownarticle.content.childMdx.excerpt'
  | 'markdownarticle.content.childMdx.headings'
  | 'markdownarticle.content.childMdx.html'
  | 'markdownarticle.content.childMdx.mdxAST'
  | 'markdownarticle.content.childMdx.tableOfContents'
  | 'markdownarticle.content.childMdx.timeToRead'
  | 'markdownarticle.content.childMdx.id'
  | 'markdownarticle.content.childMdx.children'
  | 'markdownarticle.spaceId'
  | 'markdownarticle.createdAt'
  | 'markdownarticle.updatedAt'
  | 'markdownarticle.sys.type'
  | 'markdownarticle.sys.revision'
  | 'markdownarticle.images'
  | 'markdownarticle.images.contentful_id'
  | 'markdownarticle.images.id'
  | 'markdownarticle.images.localFile.sourceInstanceName'
  | 'markdownarticle.images.localFile.absolutePath'
  | 'markdownarticle.images.localFile.relativePath'
  | 'markdownarticle.images.localFile.extension'
  | 'markdownarticle.images.localFile.size'
  | 'markdownarticle.images.localFile.prettySize'
  | 'markdownarticle.images.localFile.modifiedTime'
  | 'markdownarticle.images.localFile.accessTime'
  | 'markdownarticle.images.localFile.changeTime'
  | 'markdownarticle.images.localFile.birthTime'
  | 'markdownarticle.images.localFile.root'
  | 'markdownarticle.images.localFile.dir'
  | 'markdownarticle.images.localFile.base'
  | 'markdownarticle.images.localFile.ext'
  | 'markdownarticle.images.localFile.name'
  | 'markdownarticle.images.localFile.relativeDirectory'
  | 'markdownarticle.images.localFile.dev'
  | 'markdownarticle.images.localFile.mode'
  | 'markdownarticle.images.localFile.nlink'
  | 'markdownarticle.images.localFile.uid'
  | 'markdownarticle.images.localFile.gid'
  | 'markdownarticle.images.localFile.rdev'
  | 'markdownarticle.images.localFile.ino'
  | 'markdownarticle.images.localFile.atimeMs'
  | 'markdownarticle.images.localFile.mtimeMs'
  | 'markdownarticle.images.localFile.ctimeMs'
  | 'markdownarticle.images.localFile.atime'
  | 'markdownarticle.images.localFile.mtime'
  | 'markdownarticle.images.localFile.ctime'
  | 'markdownarticle.images.localFile.birthtime'
  | 'markdownarticle.images.localFile.birthtimeMs'
  | 'markdownarticle.images.localFile.blksize'
  | 'markdownarticle.images.localFile.blocks'
  | 'markdownarticle.images.localFile.url'
  | 'markdownarticle.images.localFile.publicURL'
  | 'markdownarticle.images.localFile.childrenMdx'
  | 'markdownarticle.images.localFile.childrenImageSharp'
  | 'markdownarticle.images.localFile.childrenPagesJson'
  | 'markdownarticle.images.localFile.id'
  | 'markdownarticle.images.localFile.children'
  | 'markdownarticle.images.spaceId'
  | 'markdownarticle.images.createdAt'
  | 'markdownarticle.images.updatedAt'
  | 'markdownarticle.images.file.url'
  | 'markdownarticle.images.file.fileName'
  | 'markdownarticle.images.file.contentType'
  | 'markdownarticle.images.title'
  | 'markdownarticle.images.description'
  | 'markdownarticle.images.node_locale'
  | 'markdownarticle.images.sys.type'
  | 'markdownarticle.images.sys.revision'
  | 'markdownarticle.images.fields.localFile'
  | 'markdownarticle.images.gatsbyImageData'
  | 'markdownarticle.images.parent.id'
  | 'markdownarticle.images.parent.children'
  | 'markdownarticle.images.children'
  | 'markdownarticle.images.children.id'
  | 'markdownarticle.images.children.children'
  | 'markdownarticle.images.internal.content'
  | 'markdownarticle.images.internal.contentDigest'
  | 'markdownarticle.images.internal.description'
  | 'markdownarticle.images.internal.fieldOwners'
  | 'markdownarticle.images.internal.ignoreType'
  | 'markdownarticle.images.internal.mediaType'
  | 'markdownarticle.images.internal.owner'
  | 'markdownarticle.images.internal.type'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.parent.id'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.parent.children'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children.id'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children.children'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.content'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.contentDigest'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.description'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.fieldOwners'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.ignoreType'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.mediaType'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.owner'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.type'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.sys.type'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.slug'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.body'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.html'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.id'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.rawBody'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.slug'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.body'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.excerpt'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.headings'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.html'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.mdxAST'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.timeToRead'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.id'
  | 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.children'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.id'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.parent.id'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.parent.children'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children.id'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children.children'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.content'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.contentDigest'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.description'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.fieldOwners'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.ignoreType'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.mediaType'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.owner'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.type'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.content'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.sys.type'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.slug'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.body'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.headings'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.html'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.id'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.children'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.rawBody'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.slug'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.body'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.excerpt'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.headings'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.html'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.mdxAST'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.timeToRead'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.id'
  | 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.children'
  | 'markdownarticle.parent.id'
  | 'markdownarticle.parent.parent.id'
  | 'markdownarticle.parent.parent.children'
  | 'markdownarticle.parent.children'
  | 'markdownarticle.parent.children.id'
  | 'markdownarticle.parent.children.children'
  | 'markdownarticle.parent.internal.content'
  | 'markdownarticle.parent.internal.contentDigest'
  | 'markdownarticle.parent.internal.description'
  | 'markdownarticle.parent.internal.fieldOwners'
  | 'markdownarticle.parent.internal.ignoreType'
  | 'markdownarticle.parent.internal.mediaType'
  | 'markdownarticle.parent.internal.owner'
  | 'markdownarticle.parent.internal.type'
  | 'markdownarticle.children'
  | 'markdownarticle.children.id'
  | 'markdownarticle.children.parent.id'
  | 'markdownarticle.children.parent.children'
  | 'markdownarticle.children.children'
  | 'markdownarticle.children.children.id'
  | 'markdownarticle.children.children.children'
  | 'markdownarticle.children.internal.content'
  | 'markdownarticle.children.internal.contentDigest'
  | 'markdownarticle.children.internal.description'
  | 'markdownarticle.children.internal.fieldOwners'
  | 'markdownarticle.children.internal.ignoreType'
  | 'markdownarticle.children.internal.mediaType'
  | 'markdownarticle.children.internal.owner'
  | 'markdownarticle.children.internal.type'
  | 'markdownarticle.internal.content'
  | 'markdownarticle.internal.contentDigest'
  | 'markdownarticle.internal.description'
  | 'markdownarticle.internal.fieldOwners'
  | 'markdownarticle.internal.ignoreType'
  | 'markdownarticle.internal.mediaType'
  | 'markdownarticle.internal.owner'
  | 'markdownarticle.internal.type'
  | 'introduction.id'
  | 'introduction.parent.id'
  | 'introduction.parent.parent.id'
  | 'introduction.parent.parent.children'
  | 'introduction.parent.children'
  | 'introduction.parent.children.id'
  | 'introduction.parent.children.children'
  | 'introduction.parent.internal.content'
  | 'introduction.parent.internal.contentDigest'
  | 'introduction.parent.internal.description'
  | 'introduction.parent.internal.fieldOwners'
  | 'introduction.parent.internal.ignoreType'
  | 'introduction.parent.internal.mediaType'
  | 'introduction.parent.internal.owner'
  | 'introduction.parent.internal.type'
  | 'introduction.children'
  | 'introduction.children.id'
  | 'introduction.children.parent.id'
  | 'introduction.children.parent.children'
  | 'introduction.children.children'
  | 'introduction.children.children.id'
  | 'introduction.children.children.children'
  | 'introduction.children.internal.content'
  | 'introduction.children.internal.contentDigest'
  | 'introduction.children.internal.description'
  | 'introduction.children.internal.fieldOwners'
  | 'introduction.children.internal.ignoreType'
  | 'introduction.children.internal.mediaType'
  | 'introduction.children.internal.owner'
  | 'introduction.children.internal.type'
  | 'introduction.internal.content'
  | 'introduction.internal.contentDigest'
  | 'introduction.internal.description'
  | 'introduction.internal.fieldOwners'
  | 'introduction.internal.ignoreType'
  | 'introduction.internal.mediaType'
  | 'introduction.internal.owner'
  | 'introduction.internal.type'
  | 'introduction.introduction'
  | 'introduction.sys.type'
  | 'introduction.childrenMdx'
  | 'introduction.childrenMdx.rawBody'
  | 'introduction.childrenMdx.fileAbsolutePath'
  | 'introduction.childrenMdx.frontmatter.title'
  | 'introduction.childrenMdx.frontmatter.subtitle'
  | 'introduction.childrenMdx.frontmatter.description'
  | 'introduction.childrenMdx.frontmatter.slug'
  | 'introduction.childrenMdx.frontmatter.prevlink'
  | 'introduction.childrenMdx.frontmatter.prevtitle'
  | 'introduction.childrenMdx.frontmatter.nextlink'
  | 'introduction.childrenMdx.frontmatter.nexttitle'
  | 'introduction.childrenMdx.slug'
  | 'introduction.childrenMdx.body'
  | 'introduction.childrenMdx.excerpt'
  | 'introduction.childrenMdx.headings'
  | 'introduction.childrenMdx.headings.value'
  | 'introduction.childrenMdx.headings.depth'
  | 'introduction.childrenMdx.html'
  | 'introduction.childrenMdx.mdxAST'
  | 'introduction.childrenMdx.tableOfContents'
  | 'introduction.childrenMdx.timeToRead'
  | 'introduction.childrenMdx.wordCount.paragraphs'
  | 'introduction.childrenMdx.wordCount.sentences'
  | 'introduction.childrenMdx.wordCount.words'
  | 'introduction.childrenMdx.id'
  | 'introduction.childrenMdx.parent.id'
  | 'introduction.childrenMdx.parent.children'
  | 'introduction.childrenMdx.children'
  | 'introduction.childrenMdx.children.id'
  | 'introduction.childrenMdx.children.children'
  | 'introduction.childrenMdx.internal.content'
  | 'introduction.childrenMdx.internal.contentDigest'
  | 'introduction.childrenMdx.internal.description'
  | 'introduction.childrenMdx.internal.fieldOwners'
  | 'introduction.childrenMdx.internal.ignoreType'
  | 'introduction.childrenMdx.internal.mediaType'
  | 'introduction.childrenMdx.internal.owner'
  | 'introduction.childrenMdx.internal.type'
  | 'introduction.childMdx.rawBody'
  | 'introduction.childMdx.fileAbsolutePath'
  | 'introduction.childMdx.frontmatter.title'
  | 'introduction.childMdx.frontmatter.subtitle'
  | 'introduction.childMdx.frontmatter.description'
  | 'introduction.childMdx.frontmatter.slug'
  | 'introduction.childMdx.frontmatter.prevlink'
  | 'introduction.childMdx.frontmatter.prevtitle'
  | 'introduction.childMdx.frontmatter.nextlink'
  | 'introduction.childMdx.frontmatter.nexttitle'
  | 'introduction.childMdx.slug'
  | 'introduction.childMdx.body'
  | 'introduction.childMdx.excerpt'
  | 'introduction.childMdx.headings'
  | 'introduction.childMdx.headings.value'
  | 'introduction.childMdx.headings.depth'
  | 'introduction.childMdx.html'
  | 'introduction.childMdx.mdxAST'
  | 'introduction.childMdx.tableOfContents'
  | 'introduction.childMdx.timeToRead'
  | 'introduction.childMdx.wordCount.paragraphs'
  | 'introduction.childMdx.wordCount.sentences'
  | 'introduction.childMdx.wordCount.words'
  | 'introduction.childMdx.id'
  | 'introduction.childMdx.parent.id'
  | 'introduction.childMdx.parent.children'
  | 'introduction.childMdx.children'
  | 'introduction.childMdx.children.id'
  | 'introduction.childMdx.children.children'
  | 'introduction.childMdx.internal.content'
  | 'introduction.childMdx.internal.contentDigest'
  | 'introduction.childMdx.internal.description'
  | 'introduction.childMdx.internal.fieldOwners'
  | 'introduction.childMdx.internal.ignoreType'
  | 'introduction.childMdx.internal.mediaType'
  | 'introduction.childMdx.internal.owner'
  | 'introduction.childMdx.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'playlist'
  | 'playlist.contentful_id'
  | 'playlist.id'
  | 'playlist.node_locale'
  | 'playlist.title'
  | 'playlist.slug'
  | 'playlist.artists'
  | 'playlist.artists.contentful_id'
  | 'playlist.artists.id'
  | 'playlist.artists.node_locale'
  | 'playlist.artists.name'
  | 'playlist.artists.twitter'
  | 'playlist.artists.markdownarticle'
  | 'playlist.artists.markdownarticle.contentful_id'
  | 'playlist.artists.markdownarticle.id'
  | 'playlist.artists.markdownarticle.node_locale'
  | 'playlist.artists.markdownarticle.title'
  | 'playlist.artists.markdownarticle.slug'
  | 'playlist.artists.markdownarticle.publishedAt'
  | 'playlist.artists.markdownarticle.disableSideHeader'
  | 'playlist.artists.markdownarticle.isVirticalWriting'
  | 'playlist.artists.markdownarticle.align'
  | 'playlist.artists.markdownarticle.spaceId'
  | 'playlist.artists.markdownarticle.createdAt'
  | 'playlist.artists.markdownarticle.updatedAt'
  | 'playlist.artists.markdownarticle.images'
  | 'playlist.artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'playlist.artists.markdownarticle.children'
  | 'playlist.artists.introduction.id'
  | 'playlist.artists.introduction.children'
  | 'playlist.artists.introduction.introduction'
  | 'playlist.artists.introduction.childrenMdx'
  | 'playlist.artists.spaceId'
  | 'playlist.artists.createdAt'
  | 'playlist.artists.updatedAt'
  | 'playlist.artists.sys.type'
  | 'playlist.artists.sys.revision'
  | 'playlist.artists.playlist'
  | 'playlist.artists.playlist.contentful_id'
  | 'playlist.artists.playlist.id'
  | 'playlist.artists.playlist.node_locale'
  | 'playlist.artists.playlist.title'
  | 'playlist.artists.playlist.slug'
  | 'playlist.artists.playlist.artists'
  | 'playlist.artists.playlist.songs'
  | 'playlist.artists.playlist.spaceId'
  | 'playlist.artists.playlist.createdAt'
  | 'playlist.artists.playlist.updatedAt'
  | 'playlist.artists.playlist.gatsbyPath'
  | 'playlist.artists.playlist.children'
  | 'playlist.artists.song'
  | 'playlist.artists.song.contentful_id'
  | 'playlist.artists.song.id'
  | 'playlist.artists.song.node_locale'
  | 'playlist.artists.song.title'
  | 'playlist.artists.song.duration'
  | 'playlist.artists.song.playlist'
  | 'playlist.artists.song.spaceId'
  | 'playlist.artists.song.createdAt'
  | 'playlist.artists.song.updatedAt'
  | 'playlist.artists.song.children'
  | 'playlist.artists.image.contentful_id'
  | 'playlist.artists.image.id'
  | 'playlist.artists.image.spaceId'
  | 'playlist.artists.image.createdAt'
  | 'playlist.artists.image.updatedAt'
  | 'playlist.artists.image.title'
  | 'playlist.artists.image.description'
  | 'playlist.artists.image.node_locale'
  | 'playlist.artists.image.gatsbyImageData'
  | 'playlist.artists.image.children'
  | 'playlist.artists.linktree'
  | 'playlist.artists.bandcamp'
  | 'playlist.artists.soundcloud'
  | 'playlist.artists.instagram'
  | 'playlist.artists.minnakikeru'
  | 'playlist.artists.hatena'
  | 'playlist.artists.youtube'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.id'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.children'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.id'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.children'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.introduction'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'playlist.artists.parent.id'
  | 'playlist.artists.parent.children'
  | 'playlist.artists.children'
  | 'playlist.artists.children.id'
  | 'playlist.artists.children.children'
  | 'playlist.artists.internal.content'
  | 'playlist.artists.internal.contentDigest'
  | 'playlist.artists.internal.description'
  | 'playlist.artists.internal.fieldOwners'
  | 'playlist.artists.internal.ignoreType'
  | 'playlist.artists.internal.mediaType'
  | 'playlist.artists.internal.owner'
  | 'playlist.artists.internal.type'
  | 'playlist.songs'
  | 'playlist.songs.contentful_id'
  | 'playlist.songs.id'
  | 'playlist.songs.node_locale'
  | 'playlist.songs.title'
  | 'playlist.songs.duration'
  | 'playlist.songs.artist.contentful_id'
  | 'playlist.songs.artist.id'
  | 'playlist.songs.artist.node_locale'
  | 'playlist.songs.artist.name'
  | 'playlist.songs.artist.twitter'
  | 'playlist.songs.artist.markdownarticle'
  | 'playlist.songs.artist.spaceId'
  | 'playlist.songs.artist.createdAt'
  | 'playlist.songs.artist.updatedAt'
  | 'playlist.songs.artist.playlist'
  | 'playlist.songs.artist.song'
  | 'playlist.songs.artist.linktree'
  | 'playlist.songs.artist.bandcamp'
  | 'playlist.songs.artist.soundcloud'
  | 'playlist.songs.artist.instagram'
  | 'playlist.songs.artist.minnakikeru'
  | 'playlist.songs.artist.hatena'
  | 'playlist.songs.artist.youtube'
  | 'playlist.songs.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'playlist.songs.artist.children'
  | 'playlist.songs.sound.contentful_id'
  | 'playlist.songs.sound.id'
  | 'playlist.songs.sound.spaceId'
  | 'playlist.songs.sound.createdAt'
  | 'playlist.songs.sound.updatedAt'
  | 'playlist.songs.sound.title'
  | 'playlist.songs.sound.description'
  | 'playlist.songs.sound.node_locale'
  | 'playlist.songs.sound.gatsbyImageData'
  | 'playlist.songs.sound.children'
  | 'playlist.songs.coverart.contentful_id'
  | 'playlist.songs.coverart.id'
  | 'playlist.songs.coverart.spaceId'
  | 'playlist.songs.coverart.createdAt'
  | 'playlist.songs.coverart.updatedAt'
  | 'playlist.songs.coverart.title'
  | 'playlist.songs.coverart.description'
  | 'playlist.songs.coverart.node_locale'
  | 'playlist.songs.coverart.gatsbyImageData'
  | 'playlist.songs.coverart.children'
  | 'playlist.songs.playlist'
  | 'playlist.songs.playlist.contentful_id'
  | 'playlist.songs.playlist.id'
  | 'playlist.songs.playlist.node_locale'
  | 'playlist.songs.playlist.title'
  | 'playlist.songs.playlist.slug'
  | 'playlist.songs.playlist.artists'
  | 'playlist.songs.playlist.songs'
  | 'playlist.songs.playlist.spaceId'
  | 'playlist.songs.playlist.createdAt'
  | 'playlist.songs.playlist.updatedAt'
  | 'playlist.songs.playlist.gatsbyPath'
  | 'playlist.songs.playlist.children'
  | 'playlist.songs.spaceId'
  | 'playlist.songs.createdAt'
  | 'playlist.songs.updatedAt'
  | 'playlist.songs.sys.type'
  | 'playlist.songs.sys.revision'
  | 'playlist.songs.lyrics.raw'
  | 'playlist.songs.parent.id'
  | 'playlist.songs.parent.children'
  | 'playlist.songs.children'
  | 'playlist.songs.children.id'
  | 'playlist.songs.children.children'
  | 'playlist.songs.internal.content'
  | 'playlist.songs.internal.contentDigest'
  | 'playlist.songs.internal.description'
  | 'playlist.songs.internal.fieldOwners'
  | 'playlist.songs.internal.ignoreType'
  | 'playlist.songs.internal.mediaType'
  | 'playlist.songs.internal.owner'
  | 'playlist.songs.internal.type'
  | 'playlist.coverart.contentful_id'
  | 'playlist.coverart.id'
  | 'playlist.coverart.localFile.sourceInstanceName'
  | 'playlist.coverart.localFile.absolutePath'
  | 'playlist.coverart.localFile.relativePath'
  | 'playlist.coverart.localFile.extension'
  | 'playlist.coverart.localFile.size'
  | 'playlist.coverart.localFile.prettySize'
  | 'playlist.coverart.localFile.modifiedTime'
  | 'playlist.coverart.localFile.accessTime'
  | 'playlist.coverart.localFile.changeTime'
  | 'playlist.coverart.localFile.birthTime'
  | 'playlist.coverart.localFile.root'
  | 'playlist.coverart.localFile.dir'
  | 'playlist.coverart.localFile.base'
  | 'playlist.coverart.localFile.ext'
  | 'playlist.coverart.localFile.name'
  | 'playlist.coverart.localFile.relativeDirectory'
  | 'playlist.coverart.localFile.dev'
  | 'playlist.coverart.localFile.mode'
  | 'playlist.coverart.localFile.nlink'
  | 'playlist.coverart.localFile.uid'
  | 'playlist.coverart.localFile.gid'
  | 'playlist.coverart.localFile.rdev'
  | 'playlist.coverart.localFile.ino'
  | 'playlist.coverart.localFile.atimeMs'
  | 'playlist.coverart.localFile.mtimeMs'
  | 'playlist.coverart.localFile.ctimeMs'
  | 'playlist.coverart.localFile.atime'
  | 'playlist.coverart.localFile.mtime'
  | 'playlist.coverart.localFile.ctime'
  | 'playlist.coverart.localFile.birthtime'
  | 'playlist.coverart.localFile.birthtimeMs'
  | 'playlist.coverart.localFile.blksize'
  | 'playlist.coverart.localFile.blocks'
  | 'playlist.coverart.localFile.url'
  | 'playlist.coverart.localFile.publicURL'
  | 'playlist.coverart.localFile.childrenMdx'
  | 'playlist.coverart.localFile.childrenImageSharp'
  | 'playlist.coverart.localFile.childrenPagesJson'
  | 'playlist.coverart.localFile.id'
  | 'playlist.coverart.localFile.children'
  | 'playlist.coverart.spaceId'
  | 'playlist.coverart.createdAt'
  | 'playlist.coverart.updatedAt'
  | 'playlist.coverart.file.url'
  | 'playlist.coverart.file.fileName'
  | 'playlist.coverart.file.contentType'
  | 'playlist.coverart.title'
  | 'playlist.coverart.description'
  | 'playlist.coverart.node_locale'
  | 'playlist.coverart.sys.type'
  | 'playlist.coverart.sys.revision'
  | 'playlist.coverart.fields.localFile'
  | 'playlist.coverart.gatsbyImageData'
  | 'playlist.coverart.parent.id'
  | 'playlist.coverart.parent.children'
  | 'playlist.coverart.children'
  | 'playlist.coverart.children.id'
  | 'playlist.coverart.children.children'
  | 'playlist.coverart.internal.content'
  | 'playlist.coverart.internal.contentDigest'
  | 'playlist.coverart.internal.description'
  | 'playlist.coverart.internal.fieldOwners'
  | 'playlist.coverart.internal.ignoreType'
  | 'playlist.coverart.internal.mediaType'
  | 'playlist.coverart.internal.owner'
  | 'playlist.coverart.internal.type'
  | 'playlist.spaceId'
  | 'playlist.createdAt'
  | 'playlist.updatedAt'
  | 'playlist.sys.type'
  | 'playlist.sys.revision'
  | 'playlist.gatsbyPath'
  | 'playlist.parent.id'
  | 'playlist.parent.parent.id'
  | 'playlist.parent.parent.children'
  | 'playlist.parent.children'
  | 'playlist.parent.children.id'
  | 'playlist.parent.children.children'
  | 'playlist.parent.internal.content'
  | 'playlist.parent.internal.contentDigest'
  | 'playlist.parent.internal.description'
  | 'playlist.parent.internal.fieldOwners'
  | 'playlist.parent.internal.ignoreType'
  | 'playlist.parent.internal.mediaType'
  | 'playlist.parent.internal.owner'
  | 'playlist.parent.internal.type'
  | 'playlist.children'
  | 'playlist.children.id'
  | 'playlist.children.parent.id'
  | 'playlist.children.parent.children'
  | 'playlist.children.children'
  | 'playlist.children.children.id'
  | 'playlist.children.children.children'
  | 'playlist.children.internal.content'
  | 'playlist.children.internal.contentDigest'
  | 'playlist.children.internal.description'
  | 'playlist.children.internal.fieldOwners'
  | 'playlist.children.internal.ignoreType'
  | 'playlist.children.internal.mediaType'
  | 'playlist.children.internal.owner'
  | 'playlist.children.internal.type'
  | 'playlist.internal.content'
  | 'playlist.internal.contentDigest'
  | 'playlist.internal.description'
  | 'playlist.internal.fieldOwners'
  | 'playlist.internal.ignoreType'
  | 'playlist.internal.mediaType'
  | 'playlist.internal.owner'
  | 'playlist.internal.type'
  | 'song'
  | 'song.contentful_id'
  | 'song.id'
  | 'song.node_locale'
  | 'song.title'
  | 'song.duration'
  | 'song.artist.contentful_id'
  | 'song.artist.id'
  | 'song.artist.node_locale'
  | 'song.artist.name'
  | 'song.artist.twitter'
  | 'song.artist.markdownarticle'
  | 'song.artist.markdownarticle.contentful_id'
  | 'song.artist.markdownarticle.id'
  | 'song.artist.markdownarticle.node_locale'
  | 'song.artist.markdownarticle.title'
  | 'song.artist.markdownarticle.slug'
  | 'song.artist.markdownarticle.publishedAt'
  | 'song.artist.markdownarticle.disableSideHeader'
  | 'song.artist.markdownarticle.isVirticalWriting'
  | 'song.artist.markdownarticle.align'
  | 'song.artist.markdownarticle.spaceId'
  | 'song.artist.markdownarticle.createdAt'
  | 'song.artist.markdownarticle.updatedAt'
  | 'song.artist.markdownarticle.images'
  | 'song.artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'song.artist.markdownarticle.children'
  | 'song.artist.introduction.id'
  | 'song.artist.introduction.children'
  | 'song.artist.introduction.introduction'
  | 'song.artist.introduction.childrenMdx'
  | 'song.artist.spaceId'
  | 'song.artist.createdAt'
  | 'song.artist.updatedAt'
  | 'song.artist.sys.type'
  | 'song.artist.sys.revision'
  | 'song.artist.playlist'
  | 'song.artist.playlist.contentful_id'
  | 'song.artist.playlist.id'
  | 'song.artist.playlist.node_locale'
  | 'song.artist.playlist.title'
  | 'song.artist.playlist.slug'
  | 'song.artist.playlist.artists'
  | 'song.artist.playlist.songs'
  | 'song.artist.playlist.spaceId'
  | 'song.artist.playlist.createdAt'
  | 'song.artist.playlist.updatedAt'
  | 'song.artist.playlist.gatsbyPath'
  | 'song.artist.playlist.children'
  | 'song.artist.song'
  | 'song.artist.song.contentful_id'
  | 'song.artist.song.id'
  | 'song.artist.song.node_locale'
  | 'song.artist.song.title'
  | 'song.artist.song.duration'
  | 'song.artist.song.playlist'
  | 'song.artist.song.spaceId'
  | 'song.artist.song.createdAt'
  | 'song.artist.song.updatedAt'
  | 'song.artist.song.children'
  | 'song.artist.image.contentful_id'
  | 'song.artist.image.id'
  | 'song.artist.image.spaceId'
  | 'song.artist.image.createdAt'
  | 'song.artist.image.updatedAt'
  | 'song.artist.image.title'
  | 'song.artist.image.description'
  | 'song.artist.image.node_locale'
  | 'song.artist.image.gatsbyImageData'
  | 'song.artist.image.children'
  | 'song.artist.linktree'
  | 'song.artist.bandcamp'
  | 'song.artist.soundcloud'
  | 'song.artist.instagram'
  | 'song.artist.minnakikeru'
  | 'song.artist.hatena'
  | 'song.artist.youtube'
  | 'song.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'song.artist.childrenContentfulAuthorIntroductionTextNode.id'
  | 'song.artist.childrenContentfulAuthorIntroductionTextNode.children'
  | 'song.artist.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'song.artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'song.artist.childContentfulAuthorIntroductionTextNode.id'
  | 'song.artist.childContentfulAuthorIntroductionTextNode.children'
  | 'song.artist.childContentfulAuthorIntroductionTextNode.introduction'
  | 'song.artist.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'song.artist.parent.id'
  | 'song.artist.parent.children'
  | 'song.artist.children'
  | 'song.artist.children.id'
  | 'song.artist.children.children'
  | 'song.artist.internal.content'
  | 'song.artist.internal.contentDigest'
  | 'song.artist.internal.description'
  | 'song.artist.internal.fieldOwners'
  | 'song.artist.internal.ignoreType'
  | 'song.artist.internal.mediaType'
  | 'song.artist.internal.owner'
  | 'song.artist.internal.type'
  | 'song.sound.contentful_id'
  | 'song.sound.id'
  | 'song.sound.localFile.sourceInstanceName'
  | 'song.sound.localFile.absolutePath'
  | 'song.sound.localFile.relativePath'
  | 'song.sound.localFile.extension'
  | 'song.sound.localFile.size'
  | 'song.sound.localFile.prettySize'
  | 'song.sound.localFile.modifiedTime'
  | 'song.sound.localFile.accessTime'
  | 'song.sound.localFile.changeTime'
  | 'song.sound.localFile.birthTime'
  | 'song.sound.localFile.root'
  | 'song.sound.localFile.dir'
  | 'song.sound.localFile.base'
  | 'song.sound.localFile.ext'
  | 'song.sound.localFile.name'
  | 'song.sound.localFile.relativeDirectory'
  | 'song.sound.localFile.dev'
  | 'song.sound.localFile.mode'
  | 'song.sound.localFile.nlink'
  | 'song.sound.localFile.uid'
  | 'song.sound.localFile.gid'
  | 'song.sound.localFile.rdev'
  | 'song.sound.localFile.ino'
  | 'song.sound.localFile.atimeMs'
  | 'song.sound.localFile.mtimeMs'
  | 'song.sound.localFile.ctimeMs'
  | 'song.sound.localFile.atime'
  | 'song.sound.localFile.mtime'
  | 'song.sound.localFile.ctime'
  | 'song.sound.localFile.birthtime'
  | 'song.sound.localFile.birthtimeMs'
  | 'song.sound.localFile.blksize'
  | 'song.sound.localFile.blocks'
  | 'song.sound.localFile.url'
  | 'song.sound.localFile.publicURL'
  | 'song.sound.localFile.childrenMdx'
  | 'song.sound.localFile.childrenImageSharp'
  | 'song.sound.localFile.childrenPagesJson'
  | 'song.sound.localFile.id'
  | 'song.sound.localFile.children'
  | 'song.sound.spaceId'
  | 'song.sound.createdAt'
  | 'song.sound.updatedAt'
  | 'song.sound.file.url'
  | 'song.sound.file.fileName'
  | 'song.sound.file.contentType'
  | 'song.sound.title'
  | 'song.sound.description'
  | 'song.sound.node_locale'
  | 'song.sound.sys.type'
  | 'song.sound.sys.revision'
  | 'song.sound.fields.localFile'
  | 'song.sound.gatsbyImageData'
  | 'song.sound.parent.id'
  | 'song.sound.parent.children'
  | 'song.sound.children'
  | 'song.sound.children.id'
  | 'song.sound.children.children'
  | 'song.sound.internal.content'
  | 'song.sound.internal.contentDigest'
  | 'song.sound.internal.description'
  | 'song.sound.internal.fieldOwners'
  | 'song.sound.internal.ignoreType'
  | 'song.sound.internal.mediaType'
  | 'song.sound.internal.owner'
  | 'song.sound.internal.type'
  | 'song.coverart.contentful_id'
  | 'song.coverart.id'
  | 'song.coverart.localFile.sourceInstanceName'
  | 'song.coverart.localFile.absolutePath'
  | 'song.coverart.localFile.relativePath'
  | 'song.coverart.localFile.extension'
  | 'song.coverart.localFile.size'
  | 'song.coverart.localFile.prettySize'
  | 'song.coverart.localFile.modifiedTime'
  | 'song.coverart.localFile.accessTime'
  | 'song.coverart.localFile.changeTime'
  | 'song.coverart.localFile.birthTime'
  | 'song.coverart.localFile.root'
  | 'song.coverart.localFile.dir'
  | 'song.coverart.localFile.base'
  | 'song.coverart.localFile.ext'
  | 'song.coverart.localFile.name'
  | 'song.coverart.localFile.relativeDirectory'
  | 'song.coverart.localFile.dev'
  | 'song.coverart.localFile.mode'
  | 'song.coverart.localFile.nlink'
  | 'song.coverart.localFile.uid'
  | 'song.coverart.localFile.gid'
  | 'song.coverart.localFile.rdev'
  | 'song.coverart.localFile.ino'
  | 'song.coverart.localFile.atimeMs'
  | 'song.coverart.localFile.mtimeMs'
  | 'song.coverart.localFile.ctimeMs'
  | 'song.coverart.localFile.atime'
  | 'song.coverart.localFile.mtime'
  | 'song.coverart.localFile.ctime'
  | 'song.coverart.localFile.birthtime'
  | 'song.coverart.localFile.birthtimeMs'
  | 'song.coverart.localFile.blksize'
  | 'song.coverart.localFile.blocks'
  | 'song.coverart.localFile.url'
  | 'song.coverart.localFile.publicURL'
  | 'song.coverart.localFile.childrenMdx'
  | 'song.coverart.localFile.childrenImageSharp'
  | 'song.coverart.localFile.childrenPagesJson'
  | 'song.coverart.localFile.id'
  | 'song.coverart.localFile.children'
  | 'song.coverart.spaceId'
  | 'song.coverart.createdAt'
  | 'song.coverart.updatedAt'
  | 'song.coverart.file.url'
  | 'song.coverart.file.fileName'
  | 'song.coverart.file.contentType'
  | 'song.coverart.title'
  | 'song.coverart.description'
  | 'song.coverart.node_locale'
  | 'song.coverart.sys.type'
  | 'song.coverart.sys.revision'
  | 'song.coverart.fields.localFile'
  | 'song.coverart.gatsbyImageData'
  | 'song.coverart.parent.id'
  | 'song.coverart.parent.children'
  | 'song.coverart.children'
  | 'song.coverart.children.id'
  | 'song.coverart.children.children'
  | 'song.coverart.internal.content'
  | 'song.coverart.internal.contentDigest'
  | 'song.coverart.internal.description'
  | 'song.coverart.internal.fieldOwners'
  | 'song.coverart.internal.ignoreType'
  | 'song.coverart.internal.mediaType'
  | 'song.coverart.internal.owner'
  | 'song.coverart.internal.type'
  | 'song.playlist'
  | 'song.playlist.contentful_id'
  | 'song.playlist.id'
  | 'song.playlist.node_locale'
  | 'song.playlist.title'
  | 'song.playlist.slug'
  | 'song.playlist.artists'
  | 'song.playlist.artists.contentful_id'
  | 'song.playlist.artists.id'
  | 'song.playlist.artists.node_locale'
  | 'song.playlist.artists.name'
  | 'song.playlist.artists.twitter'
  | 'song.playlist.artists.markdownarticle'
  | 'song.playlist.artists.spaceId'
  | 'song.playlist.artists.createdAt'
  | 'song.playlist.artists.updatedAt'
  | 'song.playlist.artists.playlist'
  | 'song.playlist.artists.song'
  | 'song.playlist.artists.linktree'
  | 'song.playlist.artists.bandcamp'
  | 'song.playlist.artists.soundcloud'
  | 'song.playlist.artists.instagram'
  | 'song.playlist.artists.minnakikeru'
  | 'song.playlist.artists.hatena'
  | 'song.playlist.artists.youtube'
  | 'song.playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'song.playlist.artists.children'
  | 'song.playlist.songs'
  | 'song.playlist.songs.contentful_id'
  | 'song.playlist.songs.id'
  | 'song.playlist.songs.node_locale'
  | 'song.playlist.songs.title'
  | 'song.playlist.songs.duration'
  | 'song.playlist.songs.playlist'
  | 'song.playlist.songs.spaceId'
  | 'song.playlist.songs.createdAt'
  | 'song.playlist.songs.updatedAt'
  | 'song.playlist.songs.children'
  | 'song.playlist.coverart.contentful_id'
  | 'song.playlist.coverart.id'
  | 'song.playlist.coverart.spaceId'
  | 'song.playlist.coverart.createdAt'
  | 'song.playlist.coverart.updatedAt'
  | 'song.playlist.coverart.title'
  | 'song.playlist.coverart.description'
  | 'song.playlist.coverart.node_locale'
  | 'song.playlist.coverart.gatsbyImageData'
  | 'song.playlist.coverart.children'
  | 'song.playlist.spaceId'
  | 'song.playlist.createdAt'
  | 'song.playlist.updatedAt'
  | 'song.playlist.sys.type'
  | 'song.playlist.sys.revision'
  | 'song.playlist.gatsbyPath'
  | 'song.playlist.parent.id'
  | 'song.playlist.parent.children'
  | 'song.playlist.children'
  | 'song.playlist.children.id'
  | 'song.playlist.children.children'
  | 'song.playlist.internal.content'
  | 'song.playlist.internal.contentDigest'
  | 'song.playlist.internal.description'
  | 'song.playlist.internal.fieldOwners'
  | 'song.playlist.internal.ignoreType'
  | 'song.playlist.internal.mediaType'
  | 'song.playlist.internal.owner'
  | 'song.playlist.internal.type'
  | 'song.spaceId'
  | 'song.createdAt'
  | 'song.updatedAt'
  | 'song.sys.type'
  | 'song.sys.revision'
  | 'song.lyrics.raw'
  | 'song.parent.id'
  | 'song.parent.parent.id'
  | 'song.parent.parent.children'
  | 'song.parent.children'
  | 'song.parent.children.id'
  | 'song.parent.children.children'
  | 'song.parent.internal.content'
  | 'song.parent.internal.contentDigest'
  | 'song.parent.internal.description'
  | 'song.parent.internal.fieldOwners'
  | 'song.parent.internal.ignoreType'
  | 'song.parent.internal.mediaType'
  | 'song.parent.internal.owner'
  | 'song.parent.internal.type'
  | 'song.children'
  | 'song.children.id'
  | 'song.children.parent.id'
  | 'song.children.parent.children'
  | 'song.children.children'
  | 'song.children.children.id'
  | 'song.children.children.children'
  | 'song.children.internal.content'
  | 'song.children.internal.contentDigest'
  | 'song.children.internal.description'
  | 'song.children.internal.fieldOwners'
  | 'song.children.internal.ignoreType'
  | 'song.children.internal.mediaType'
  | 'song.children.internal.owner'
  | 'song.children.internal.type'
  | 'song.internal.content'
  | 'song.internal.contentDigest'
  | 'song.internal.description'
  | 'song.internal.fieldOwners'
  | 'song.internal.ignoreType'
  | 'song.internal.mediaType'
  | 'song.internal.owner'
  | 'song.internal.type'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.localFile.sourceInstanceName'
  | 'image.localFile.absolutePath'
  | 'image.localFile.relativePath'
  | 'image.localFile.extension'
  | 'image.localFile.size'
  | 'image.localFile.prettySize'
  | 'image.localFile.modifiedTime'
  | 'image.localFile.accessTime'
  | 'image.localFile.changeTime'
  | 'image.localFile.birthTime'
  | 'image.localFile.root'
  | 'image.localFile.dir'
  | 'image.localFile.base'
  | 'image.localFile.ext'
  | 'image.localFile.name'
  | 'image.localFile.relativeDirectory'
  | 'image.localFile.dev'
  | 'image.localFile.mode'
  | 'image.localFile.nlink'
  | 'image.localFile.uid'
  | 'image.localFile.gid'
  | 'image.localFile.rdev'
  | 'image.localFile.ino'
  | 'image.localFile.atimeMs'
  | 'image.localFile.mtimeMs'
  | 'image.localFile.ctimeMs'
  | 'image.localFile.atime'
  | 'image.localFile.mtime'
  | 'image.localFile.ctime'
  | 'image.localFile.birthtime'
  | 'image.localFile.birthtimeMs'
  | 'image.localFile.blksize'
  | 'image.localFile.blocks'
  | 'image.localFile.url'
  | 'image.localFile.publicURL'
  | 'image.localFile.childrenMdx'
  | 'image.localFile.childrenMdx.rawBody'
  | 'image.localFile.childrenMdx.fileAbsolutePath'
  | 'image.localFile.childrenMdx.slug'
  | 'image.localFile.childrenMdx.body'
  | 'image.localFile.childrenMdx.excerpt'
  | 'image.localFile.childrenMdx.headings'
  | 'image.localFile.childrenMdx.html'
  | 'image.localFile.childrenMdx.mdxAST'
  | 'image.localFile.childrenMdx.tableOfContents'
  | 'image.localFile.childrenMdx.timeToRead'
  | 'image.localFile.childrenMdx.id'
  | 'image.localFile.childrenMdx.children'
  | 'image.localFile.childMdx.rawBody'
  | 'image.localFile.childMdx.fileAbsolutePath'
  | 'image.localFile.childMdx.slug'
  | 'image.localFile.childMdx.body'
  | 'image.localFile.childMdx.excerpt'
  | 'image.localFile.childMdx.headings'
  | 'image.localFile.childMdx.html'
  | 'image.localFile.childMdx.mdxAST'
  | 'image.localFile.childMdx.tableOfContents'
  | 'image.localFile.childMdx.timeToRead'
  | 'image.localFile.childMdx.id'
  | 'image.localFile.childMdx.children'
  | 'image.localFile.childrenImageSharp'
  | 'image.localFile.childrenImageSharp.gatsbyImageData'
  | 'image.localFile.childrenImageSharp.id'
  | 'image.localFile.childrenImageSharp.children'
  | 'image.localFile.childImageSharp.gatsbyImageData'
  | 'image.localFile.childImageSharp.id'
  | 'image.localFile.childImageSharp.children'
  | 'image.localFile.childrenPagesJson'
  | 'image.localFile.childrenPagesJson.id'
  | 'image.localFile.childrenPagesJson.children'
  | 'image.localFile.childrenPagesJson.path'
  | 'image.localFile.childrenPagesJson.introduction'
  | 'image.localFile.childrenPagesJson.image'
  | 'image.localFile.childrenPagesJson.displayTitle'
  | 'image.localFile.childrenPagesJson.title'
  | 'image.localFile.childrenPagesJson.catchphrase'
  | 'image.localFile.childPagesJson.id'
  | 'image.localFile.childPagesJson.children'
  | 'image.localFile.childPagesJson.path'
  | 'image.localFile.childPagesJson.introduction'
  | 'image.localFile.childPagesJson.image'
  | 'image.localFile.childPagesJson.displayTitle'
  | 'image.localFile.childPagesJson.title'
  | 'image.localFile.childPagesJson.catchphrase'
  | 'image.localFile.id'
  | 'image.localFile.parent.id'
  | 'image.localFile.parent.children'
  | 'image.localFile.children'
  | 'image.localFile.children.id'
  | 'image.localFile.children.children'
  | 'image.localFile.internal.content'
  | 'image.localFile.internal.contentDigest'
  | 'image.localFile.internal.description'
  | 'image.localFile.internal.fieldOwners'
  | 'image.localFile.internal.ignoreType'
  | 'image.localFile.internal.mediaType'
  | 'image.localFile.internal.owner'
  | 'image.localFile.internal.type'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fields.localFile'
  | 'image.gatsbyImageData'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'linktree'
  | 'bandcamp'
  | 'soundcloud'
  | 'instagram'
  | 'minnakikeru'
  | 'hatena'
  | 'youtube'
  | 'childrenContentfulAuthorIntroductionTextNode'
  | 'childrenContentfulAuthorIntroductionTextNode.id'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.id'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.parent.id'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.parent.children'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.children'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.children.id'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.children.children'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.content'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.description'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.mediaType'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.owner'
  | 'childrenContentfulAuthorIntroductionTextNode.parent.internal.type'
  | 'childrenContentfulAuthorIntroductionTextNode.children'
  | 'childrenContentfulAuthorIntroductionTextNode.children.id'
  | 'childrenContentfulAuthorIntroductionTextNode.children.parent.id'
  | 'childrenContentfulAuthorIntroductionTextNode.children.parent.children'
  | 'childrenContentfulAuthorIntroductionTextNode.children.children'
  | 'childrenContentfulAuthorIntroductionTextNode.children.children.id'
  | 'childrenContentfulAuthorIntroductionTextNode.children.children.children'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.content'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.contentDigest'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.description'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.ignoreType'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.mediaType'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.owner'
  | 'childrenContentfulAuthorIntroductionTextNode.children.internal.type'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.content'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.description'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.owner'
  | 'childrenContentfulAuthorIntroductionTextNode.internal.type'
  | 'childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'childrenContentfulAuthorIntroductionTextNode.sys.type'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.subtitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.description'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.slug'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.prevlink'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.prevtitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.nextlink'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.nexttitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings.value'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.parent.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.parent.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.content'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.description'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.type'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.subtitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.description'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.slug'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.prevlink'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.prevtitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.nextlink'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.nexttitle'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings.value'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings.depth'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.words'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.parent.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.parent.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.children.id'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.children.children'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.content'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.description'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.owner'
  | 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.type'
  | 'childContentfulAuthorIntroductionTextNode.id'
  | 'childContentfulAuthorIntroductionTextNode.parent.id'
  | 'childContentfulAuthorIntroductionTextNode.parent.parent.id'
  | 'childContentfulAuthorIntroductionTextNode.parent.parent.children'
  | 'childContentfulAuthorIntroductionTextNode.parent.children'
  | 'childContentfulAuthorIntroductionTextNode.parent.children.id'
  | 'childContentfulAuthorIntroductionTextNode.parent.children.children'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.content'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.contentDigest'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.description'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.fieldOwners'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.ignoreType'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.mediaType'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.owner'
  | 'childContentfulAuthorIntroductionTextNode.parent.internal.type'
  | 'childContentfulAuthorIntroductionTextNode.children'
  | 'childContentfulAuthorIntroductionTextNode.children.id'
  | 'childContentfulAuthorIntroductionTextNode.children.parent.id'
  | 'childContentfulAuthorIntroductionTextNode.children.parent.children'
  | 'childContentfulAuthorIntroductionTextNode.children.children'
  | 'childContentfulAuthorIntroductionTextNode.children.children.id'
  | 'childContentfulAuthorIntroductionTextNode.children.children.children'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.content'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.contentDigest'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.description'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.fieldOwners'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.ignoreType'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.mediaType'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.owner'
  | 'childContentfulAuthorIntroductionTextNode.children.internal.type'
  | 'childContentfulAuthorIntroductionTextNode.internal.content'
  | 'childContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'childContentfulAuthorIntroductionTextNode.internal.description'
  | 'childContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'childContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'childContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'childContentfulAuthorIntroductionTextNode.internal.owner'
  | 'childContentfulAuthorIntroductionTextNode.internal.type'
  | 'childContentfulAuthorIntroductionTextNode.introduction'
  | 'childContentfulAuthorIntroductionTextNode.sys.type'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.subtitle'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.description'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.slug'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.prevlink'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.prevtitle'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.nextlink'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.nexttitle'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings.value'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings.depth'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.words'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.parent.id'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.parent.children'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.children.id'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.children.children'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.content'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.description'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.owner'
  | 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.type'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.title'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.subtitle'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.description'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.slug'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.prevlink'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.prevtitle'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.nextlink'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.nexttitle'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.headings.value'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.headings.depth'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.sentences'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.words'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.parent.id'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.parent.children'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.children.id'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.children.children'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.content'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.contentDigest'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.description'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.ignoreType'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.mediaType'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.owner'
  | 'childContentfulAuthorIntroductionTextNode.childMdx.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAuthorGroupConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_maxArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_minArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_sumArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulMarkdownArticleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMarkdownArticleEdge>;
  readonly nodes: ReadonlyArray<ContentfulMarkdownArticle>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMarkdownArticleGroupConnection>;
};


type ContentfulMarkdownArticleConnection_distinctArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleConnection_maxArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleConnection_minArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleConnection_sumArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMarkdownArticleFieldsEnum;
};

type ContentfulMarkdownArticleEdge = {
  readonly next: Maybe<ContentfulMarkdownArticle>;
  readonly node: ContentfulMarkdownArticle;
  readonly previous: Maybe<ContentfulMarkdownArticle>;
};

type ContentfulMarkdownArticleFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'publishedAt'
  | 'disableSideHeader'
  | 'isVirticalWriting'
  | 'align'
  | 'author.contentful_id'
  | 'author.id'
  | 'author.node_locale'
  | 'author.name'
  | 'author.twitter'
  | 'author.markdownarticle'
  | 'author.markdownarticle.contentful_id'
  | 'author.markdownarticle.id'
  | 'author.markdownarticle.node_locale'
  | 'author.markdownarticle.title'
  | 'author.markdownarticle.slug'
  | 'author.markdownarticle.publishedAt'
  | 'author.markdownarticle.disableSideHeader'
  | 'author.markdownarticle.isVirticalWriting'
  | 'author.markdownarticle.align'
  | 'author.markdownarticle.author.contentful_id'
  | 'author.markdownarticle.author.id'
  | 'author.markdownarticle.author.node_locale'
  | 'author.markdownarticle.author.name'
  | 'author.markdownarticle.author.twitter'
  | 'author.markdownarticle.author.markdownarticle'
  | 'author.markdownarticle.author.spaceId'
  | 'author.markdownarticle.author.createdAt'
  | 'author.markdownarticle.author.updatedAt'
  | 'author.markdownarticle.author.playlist'
  | 'author.markdownarticle.author.song'
  | 'author.markdownarticle.author.linktree'
  | 'author.markdownarticle.author.bandcamp'
  | 'author.markdownarticle.author.soundcloud'
  | 'author.markdownarticle.author.instagram'
  | 'author.markdownarticle.author.minnakikeru'
  | 'author.markdownarticle.author.hatena'
  | 'author.markdownarticle.author.youtube'
  | 'author.markdownarticle.author.childrenContentfulAuthorIntroductionTextNode'
  | 'author.markdownarticle.author.children'
  | 'author.markdownarticle.featuredImage.contentful_id'
  | 'author.markdownarticle.featuredImage.id'
  | 'author.markdownarticle.featuredImage.spaceId'
  | 'author.markdownarticle.featuredImage.createdAt'
  | 'author.markdownarticle.featuredImage.updatedAt'
  | 'author.markdownarticle.featuredImage.title'
  | 'author.markdownarticle.featuredImage.description'
  | 'author.markdownarticle.featuredImage.node_locale'
  | 'author.markdownarticle.featuredImage.gatsbyImageData'
  | 'author.markdownarticle.featuredImage.children'
  | 'author.markdownarticle.content.id'
  | 'author.markdownarticle.content.children'
  | 'author.markdownarticle.content.content'
  | 'author.markdownarticle.content.childrenMdx'
  | 'author.markdownarticle.spaceId'
  | 'author.markdownarticle.createdAt'
  | 'author.markdownarticle.updatedAt'
  | 'author.markdownarticle.sys.type'
  | 'author.markdownarticle.sys.revision'
  | 'author.markdownarticle.images'
  | 'author.markdownarticle.images.contentful_id'
  | 'author.markdownarticle.images.id'
  | 'author.markdownarticle.images.spaceId'
  | 'author.markdownarticle.images.createdAt'
  | 'author.markdownarticle.images.updatedAt'
  | 'author.markdownarticle.images.title'
  | 'author.markdownarticle.images.description'
  | 'author.markdownarticle.images.node_locale'
  | 'author.markdownarticle.images.gatsbyImageData'
  | 'author.markdownarticle.images.children'
  | 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id'
  | 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children'
  | 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content'
  | 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.id'
  | 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.children'
  | 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.content'
  | 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'author.markdownarticle.parent.id'
  | 'author.markdownarticle.parent.children'
  | 'author.markdownarticle.children'
  | 'author.markdownarticle.children.id'
  | 'author.markdownarticle.children.children'
  | 'author.markdownarticle.internal.content'
  | 'author.markdownarticle.internal.contentDigest'
  | 'author.markdownarticle.internal.description'
  | 'author.markdownarticle.internal.fieldOwners'
  | 'author.markdownarticle.internal.ignoreType'
  | 'author.markdownarticle.internal.mediaType'
  | 'author.markdownarticle.internal.owner'
  | 'author.markdownarticle.internal.type'
  | 'author.introduction.id'
  | 'author.introduction.parent.id'
  | 'author.introduction.parent.children'
  | 'author.introduction.children'
  | 'author.introduction.children.id'
  | 'author.introduction.children.children'
  | 'author.introduction.internal.content'
  | 'author.introduction.internal.contentDigest'
  | 'author.introduction.internal.description'
  | 'author.introduction.internal.fieldOwners'
  | 'author.introduction.internal.ignoreType'
  | 'author.introduction.internal.mediaType'
  | 'author.introduction.internal.owner'
  | 'author.introduction.internal.type'
  | 'author.introduction.introduction'
  | 'author.introduction.sys.type'
  | 'author.introduction.childrenMdx'
  | 'author.introduction.childrenMdx.rawBody'
  | 'author.introduction.childrenMdx.fileAbsolutePath'
  | 'author.introduction.childrenMdx.slug'
  | 'author.introduction.childrenMdx.body'
  | 'author.introduction.childrenMdx.excerpt'
  | 'author.introduction.childrenMdx.headings'
  | 'author.introduction.childrenMdx.html'
  | 'author.introduction.childrenMdx.mdxAST'
  | 'author.introduction.childrenMdx.tableOfContents'
  | 'author.introduction.childrenMdx.timeToRead'
  | 'author.introduction.childrenMdx.id'
  | 'author.introduction.childrenMdx.children'
  | 'author.introduction.childMdx.rawBody'
  | 'author.introduction.childMdx.fileAbsolutePath'
  | 'author.introduction.childMdx.slug'
  | 'author.introduction.childMdx.body'
  | 'author.introduction.childMdx.excerpt'
  | 'author.introduction.childMdx.headings'
  | 'author.introduction.childMdx.html'
  | 'author.introduction.childMdx.mdxAST'
  | 'author.introduction.childMdx.tableOfContents'
  | 'author.introduction.childMdx.timeToRead'
  | 'author.introduction.childMdx.id'
  | 'author.introduction.childMdx.children'
  | 'author.spaceId'
  | 'author.createdAt'
  | 'author.updatedAt'
  | 'author.sys.type'
  | 'author.sys.revision'
  | 'author.playlist'
  | 'author.playlist.contentful_id'
  | 'author.playlist.id'
  | 'author.playlist.node_locale'
  | 'author.playlist.title'
  | 'author.playlist.slug'
  | 'author.playlist.artists'
  | 'author.playlist.artists.contentful_id'
  | 'author.playlist.artists.id'
  | 'author.playlist.artists.node_locale'
  | 'author.playlist.artists.name'
  | 'author.playlist.artists.twitter'
  | 'author.playlist.artists.markdownarticle'
  | 'author.playlist.artists.spaceId'
  | 'author.playlist.artists.createdAt'
  | 'author.playlist.artists.updatedAt'
  | 'author.playlist.artists.playlist'
  | 'author.playlist.artists.song'
  | 'author.playlist.artists.linktree'
  | 'author.playlist.artists.bandcamp'
  | 'author.playlist.artists.soundcloud'
  | 'author.playlist.artists.instagram'
  | 'author.playlist.artists.minnakikeru'
  | 'author.playlist.artists.hatena'
  | 'author.playlist.artists.youtube'
  | 'author.playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'author.playlist.artists.children'
  | 'author.playlist.songs'
  | 'author.playlist.songs.contentful_id'
  | 'author.playlist.songs.id'
  | 'author.playlist.songs.node_locale'
  | 'author.playlist.songs.title'
  | 'author.playlist.songs.duration'
  | 'author.playlist.songs.playlist'
  | 'author.playlist.songs.spaceId'
  | 'author.playlist.songs.createdAt'
  | 'author.playlist.songs.updatedAt'
  | 'author.playlist.songs.children'
  | 'author.playlist.coverart.contentful_id'
  | 'author.playlist.coverart.id'
  | 'author.playlist.coverart.spaceId'
  | 'author.playlist.coverart.createdAt'
  | 'author.playlist.coverart.updatedAt'
  | 'author.playlist.coverart.title'
  | 'author.playlist.coverart.description'
  | 'author.playlist.coverart.node_locale'
  | 'author.playlist.coverart.gatsbyImageData'
  | 'author.playlist.coverart.children'
  | 'author.playlist.spaceId'
  | 'author.playlist.createdAt'
  | 'author.playlist.updatedAt'
  | 'author.playlist.sys.type'
  | 'author.playlist.sys.revision'
  | 'author.playlist.gatsbyPath'
  | 'author.playlist.parent.id'
  | 'author.playlist.parent.children'
  | 'author.playlist.children'
  | 'author.playlist.children.id'
  | 'author.playlist.children.children'
  | 'author.playlist.internal.content'
  | 'author.playlist.internal.contentDigest'
  | 'author.playlist.internal.description'
  | 'author.playlist.internal.fieldOwners'
  | 'author.playlist.internal.ignoreType'
  | 'author.playlist.internal.mediaType'
  | 'author.playlist.internal.owner'
  | 'author.playlist.internal.type'
  | 'author.song'
  | 'author.song.contentful_id'
  | 'author.song.id'
  | 'author.song.node_locale'
  | 'author.song.title'
  | 'author.song.duration'
  | 'author.song.artist.contentful_id'
  | 'author.song.artist.id'
  | 'author.song.artist.node_locale'
  | 'author.song.artist.name'
  | 'author.song.artist.twitter'
  | 'author.song.artist.markdownarticle'
  | 'author.song.artist.spaceId'
  | 'author.song.artist.createdAt'
  | 'author.song.artist.updatedAt'
  | 'author.song.artist.playlist'
  | 'author.song.artist.song'
  | 'author.song.artist.linktree'
  | 'author.song.artist.bandcamp'
  | 'author.song.artist.soundcloud'
  | 'author.song.artist.instagram'
  | 'author.song.artist.minnakikeru'
  | 'author.song.artist.hatena'
  | 'author.song.artist.youtube'
  | 'author.song.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'author.song.artist.children'
  | 'author.song.sound.contentful_id'
  | 'author.song.sound.id'
  | 'author.song.sound.spaceId'
  | 'author.song.sound.createdAt'
  | 'author.song.sound.updatedAt'
  | 'author.song.sound.title'
  | 'author.song.sound.description'
  | 'author.song.sound.node_locale'
  | 'author.song.sound.gatsbyImageData'
  | 'author.song.sound.children'
  | 'author.song.coverart.contentful_id'
  | 'author.song.coverart.id'
  | 'author.song.coverart.spaceId'
  | 'author.song.coverart.createdAt'
  | 'author.song.coverart.updatedAt'
  | 'author.song.coverart.title'
  | 'author.song.coverart.description'
  | 'author.song.coverart.node_locale'
  | 'author.song.coverart.gatsbyImageData'
  | 'author.song.coverart.children'
  | 'author.song.playlist'
  | 'author.song.playlist.contentful_id'
  | 'author.song.playlist.id'
  | 'author.song.playlist.node_locale'
  | 'author.song.playlist.title'
  | 'author.song.playlist.slug'
  | 'author.song.playlist.artists'
  | 'author.song.playlist.songs'
  | 'author.song.playlist.spaceId'
  | 'author.song.playlist.createdAt'
  | 'author.song.playlist.updatedAt'
  | 'author.song.playlist.gatsbyPath'
  | 'author.song.playlist.children'
  | 'author.song.spaceId'
  | 'author.song.createdAt'
  | 'author.song.updatedAt'
  | 'author.song.sys.type'
  | 'author.song.sys.revision'
  | 'author.song.lyrics.raw'
  | 'author.song.parent.id'
  | 'author.song.parent.children'
  | 'author.song.children'
  | 'author.song.children.id'
  | 'author.song.children.children'
  | 'author.song.internal.content'
  | 'author.song.internal.contentDigest'
  | 'author.song.internal.description'
  | 'author.song.internal.fieldOwners'
  | 'author.song.internal.ignoreType'
  | 'author.song.internal.mediaType'
  | 'author.song.internal.owner'
  | 'author.song.internal.type'
  | 'author.image.contentful_id'
  | 'author.image.id'
  | 'author.image.localFile.sourceInstanceName'
  | 'author.image.localFile.absolutePath'
  | 'author.image.localFile.relativePath'
  | 'author.image.localFile.extension'
  | 'author.image.localFile.size'
  | 'author.image.localFile.prettySize'
  | 'author.image.localFile.modifiedTime'
  | 'author.image.localFile.accessTime'
  | 'author.image.localFile.changeTime'
  | 'author.image.localFile.birthTime'
  | 'author.image.localFile.root'
  | 'author.image.localFile.dir'
  | 'author.image.localFile.base'
  | 'author.image.localFile.ext'
  | 'author.image.localFile.name'
  | 'author.image.localFile.relativeDirectory'
  | 'author.image.localFile.dev'
  | 'author.image.localFile.mode'
  | 'author.image.localFile.nlink'
  | 'author.image.localFile.uid'
  | 'author.image.localFile.gid'
  | 'author.image.localFile.rdev'
  | 'author.image.localFile.ino'
  | 'author.image.localFile.atimeMs'
  | 'author.image.localFile.mtimeMs'
  | 'author.image.localFile.ctimeMs'
  | 'author.image.localFile.atime'
  | 'author.image.localFile.mtime'
  | 'author.image.localFile.ctime'
  | 'author.image.localFile.birthtime'
  | 'author.image.localFile.birthtimeMs'
  | 'author.image.localFile.blksize'
  | 'author.image.localFile.blocks'
  | 'author.image.localFile.url'
  | 'author.image.localFile.publicURL'
  | 'author.image.localFile.childrenMdx'
  | 'author.image.localFile.childrenImageSharp'
  | 'author.image.localFile.childrenPagesJson'
  | 'author.image.localFile.id'
  | 'author.image.localFile.children'
  | 'author.image.spaceId'
  | 'author.image.createdAt'
  | 'author.image.updatedAt'
  | 'author.image.file.url'
  | 'author.image.file.fileName'
  | 'author.image.file.contentType'
  | 'author.image.title'
  | 'author.image.description'
  | 'author.image.node_locale'
  | 'author.image.sys.type'
  | 'author.image.sys.revision'
  | 'author.image.fields.localFile'
  | 'author.image.gatsbyImageData'
  | 'author.image.parent.id'
  | 'author.image.parent.children'
  | 'author.image.children'
  | 'author.image.children.id'
  | 'author.image.children.children'
  | 'author.image.internal.content'
  | 'author.image.internal.contentDigest'
  | 'author.image.internal.description'
  | 'author.image.internal.fieldOwners'
  | 'author.image.internal.ignoreType'
  | 'author.image.internal.mediaType'
  | 'author.image.internal.owner'
  | 'author.image.internal.type'
  | 'author.linktree'
  | 'author.bandcamp'
  | 'author.soundcloud'
  | 'author.instagram'
  | 'author.minnakikeru'
  | 'author.hatena'
  | 'author.youtube'
  | 'author.childrenContentfulAuthorIntroductionTextNode'
  | 'author.childrenContentfulAuthorIntroductionTextNode.id'
  | 'author.childrenContentfulAuthorIntroductionTextNode.parent.id'
  | 'author.childrenContentfulAuthorIntroductionTextNode.parent.children'
  | 'author.childrenContentfulAuthorIntroductionTextNode.children'
  | 'author.childrenContentfulAuthorIntroductionTextNode.children.id'
  | 'author.childrenContentfulAuthorIntroductionTextNode.children.children'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.content'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.description'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.owner'
  | 'author.childrenContentfulAuthorIntroductionTextNode.internal.type'
  | 'author.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'author.childrenContentfulAuthorIntroductionTextNode.sys.type'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'author.childContentfulAuthorIntroductionTextNode.id'
  | 'author.childContentfulAuthorIntroductionTextNode.parent.id'
  | 'author.childContentfulAuthorIntroductionTextNode.parent.children'
  | 'author.childContentfulAuthorIntroductionTextNode.children'
  | 'author.childContentfulAuthorIntroductionTextNode.children.id'
  | 'author.childContentfulAuthorIntroductionTextNode.children.children'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.content'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.description'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.owner'
  | 'author.childContentfulAuthorIntroductionTextNode.internal.type'
  | 'author.childContentfulAuthorIntroductionTextNode.introduction'
  | 'author.childContentfulAuthorIntroductionTextNode.sys.type'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'author.childContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'featuredImage.contentful_id'
  | 'featuredImage.id'
  | 'featuredImage.localFile.sourceInstanceName'
  | 'featuredImage.localFile.absolutePath'
  | 'featuredImage.localFile.relativePath'
  | 'featuredImage.localFile.extension'
  | 'featuredImage.localFile.size'
  | 'featuredImage.localFile.prettySize'
  | 'featuredImage.localFile.modifiedTime'
  | 'featuredImage.localFile.accessTime'
  | 'featuredImage.localFile.changeTime'
  | 'featuredImage.localFile.birthTime'
  | 'featuredImage.localFile.root'
  | 'featuredImage.localFile.dir'
  | 'featuredImage.localFile.base'
  | 'featuredImage.localFile.ext'
  | 'featuredImage.localFile.name'
  | 'featuredImage.localFile.relativeDirectory'
  | 'featuredImage.localFile.dev'
  | 'featuredImage.localFile.mode'
  | 'featuredImage.localFile.nlink'
  | 'featuredImage.localFile.uid'
  | 'featuredImage.localFile.gid'
  | 'featuredImage.localFile.rdev'
  | 'featuredImage.localFile.ino'
  | 'featuredImage.localFile.atimeMs'
  | 'featuredImage.localFile.mtimeMs'
  | 'featuredImage.localFile.ctimeMs'
  | 'featuredImage.localFile.atime'
  | 'featuredImage.localFile.mtime'
  | 'featuredImage.localFile.ctime'
  | 'featuredImage.localFile.birthtime'
  | 'featuredImage.localFile.birthtimeMs'
  | 'featuredImage.localFile.blksize'
  | 'featuredImage.localFile.blocks'
  | 'featuredImage.localFile.url'
  | 'featuredImage.localFile.publicURL'
  | 'featuredImage.localFile.childrenMdx'
  | 'featuredImage.localFile.childrenMdx.rawBody'
  | 'featuredImage.localFile.childrenMdx.fileAbsolutePath'
  | 'featuredImage.localFile.childrenMdx.slug'
  | 'featuredImage.localFile.childrenMdx.body'
  | 'featuredImage.localFile.childrenMdx.excerpt'
  | 'featuredImage.localFile.childrenMdx.headings'
  | 'featuredImage.localFile.childrenMdx.html'
  | 'featuredImage.localFile.childrenMdx.mdxAST'
  | 'featuredImage.localFile.childrenMdx.tableOfContents'
  | 'featuredImage.localFile.childrenMdx.timeToRead'
  | 'featuredImage.localFile.childrenMdx.id'
  | 'featuredImage.localFile.childrenMdx.children'
  | 'featuredImage.localFile.childMdx.rawBody'
  | 'featuredImage.localFile.childMdx.fileAbsolutePath'
  | 'featuredImage.localFile.childMdx.slug'
  | 'featuredImage.localFile.childMdx.body'
  | 'featuredImage.localFile.childMdx.excerpt'
  | 'featuredImage.localFile.childMdx.headings'
  | 'featuredImage.localFile.childMdx.html'
  | 'featuredImage.localFile.childMdx.mdxAST'
  | 'featuredImage.localFile.childMdx.tableOfContents'
  | 'featuredImage.localFile.childMdx.timeToRead'
  | 'featuredImage.localFile.childMdx.id'
  | 'featuredImage.localFile.childMdx.children'
  | 'featuredImage.localFile.childrenImageSharp'
  | 'featuredImage.localFile.childrenImageSharp.gatsbyImageData'
  | 'featuredImage.localFile.childrenImageSharp.id'
  | 'featuredImage.localFile.childrenImageSharp.children'
  | 'featuredImage.localFile.childImageSharp.gatsbyImageData'
  | 'featuredImage.localFile.childImageSharp.id'
  | 'featuredImage.localFile.childImageSharp.children'
  | 'featuredImage.localFile.childrenPagesJson'
  | 'featuredImage.localFile.childrenPagesJson.id'
  | 'featuredImage.localFile.childrenPagesJson.children'
  | 'featuredImage.localFile.childrenPagesJson.path'
  | 'featuredImage.localFile.childrenPagesJson.introduction'
  | 'featuredImage.localFile.childrenPagesJson.image'
  | 'featuredImage.localFile.childrenPagesJson.displayTitle'
  | 'featuredImage.localFile.childrenPagesJson.title'
  | 'featuredImage.localFile.childrenPagesJson.catchphrase'
  | 'featuredImage.localFile.childPagesJson.id'
  | 'featuredImage.localFile.childPagesJson.children'
  | 'featuredImage.localFile.childPagesJson.path'
  | 'featuredImage.localFile.childPagesJson.introduction'
  | 'featuredImage.localFile.childPagesJson.image'
  | 'featuredImage.localFile.childPagesJson.displayTitle'
  | 'featuredImage.localFile.childPagesJson.title'
  | 'featuredImage.localFile.childPagesJson.catchphrase'
  | 'featuredImage.localFile.id'
  | 'featuredImage.localFile.parent.id'
  | 'featuredImage.localFile.parent.children'
  | 'featuredImage.localFile.children'
  | 'featuredImage.localFile.children.id'
  | 'featuredImage.localFile.children.children'
  | 'featuredImage.localFile.internal.content'
  | 'featuredImage.localFile.internal.contentDigest'
  | 'featuredImage.localFile.internal.description'
  | 'featuredImage.localFile.internal.fieldOwners'
  | 'featuredImage.localFile.internal.ignoreType'
  | 'featuredImage.localFile.internal.mediaType'
  | 'featuredImage.localFile.internal.owner'
  | 'featuredImage.localFile.internal.type'
  | 'featuredImage.spaceId'
  | 'featuredImage.createdAt'
  | 'featuredImage.updatedAt'
  | 'featuredImage.file.url'
  | 'featuredImage.file.details.size'
  | 'featuredImage.file.fileName'
  | 'featuredImage.file.contentType'
  | 'featuredImage.title'
  | 'featuredImage.description'
  | 'featuredImage.node_locale'
  | 'featuredImage.sys.type'
  | 'featuredImage.sys.revision'
  | 'featuredImage.fields.localFile'
  | 'featuredImage.gatsbyImageData'
  | 'featuredImage.parent.id'
  | 'featuredImage.parent.parent.id'
  | 'featuredImage.parent.parent.children'
  | 'featuredImage.parent.children'
  | 'featuredImage.parent.children.id'
  | 'featuredImage.parent.children.children'
  | 'featuredImage.parent.internal.content'
  | 'featuredImage.parent.internal.contentDigest'
  | 'featuredImage.parent.internal.description'
  | 'featuredImage.parent.internal.fieldOwners'
  | 'featuredImage.parent.internal.ignoreType'
  | 'featuredImage.parent.internal.mediaType'
  | 'featuredImage.parent.internal.owner'
  | 'featuredImage.parent.internal.type'
  | 'featuredImage.children'
  | 'featuredImage.children.id'
  | 'featuredImage.children.parent.id'
  | 'featuredImage.children.parent.children'
  | 'featuredImage.children.children'
  | 'featuredImage.children.children.id'
  | 'featuredImage.children.children.children'
  | 'featuredImage.children.internal.content'
  | 'featuredImage.children.internal.contentDigest'
  | 'featuredImage.children.internal.description'
  | 'featuredImage.children.internal.fieldOwners'
  | 'featuredImage.children.internal.ignoreType'
  | 'featuredImage.children.internal.mediaType'
  | 'featuredImage.children.internal.owner'
  | 'featuredImage.children.internal.type'
  | 'featuredImage.internal.content'
  | 'featuredImage.internal.contentDigest'
  | 'featuredImage.internal.description'
  | 'featuredImage.internal.fieldOwners'
  | 'featuredImage.internal.ignoreType'
  | 'featuredImage.internal.mediaType'
  | 'featuredImage.internal.owner'
  | 'featuredImage.internal.type'
  | 'content.id'
  | 'content.parent.id'
  | 'content.parent.parent.id'
  | 'content.parent.parent.children'
  | 'content.parent.children'
  | 'content.parent.children.id'
  | 'content.parent.children.children'
  | 'content.parent.internal.content'
  | 'content.parent.internal.contentDigest'
  | 'content.parent.internal.description'
  | 'content.parent.internal.fieldOwners'
  | 'content.parent.internal.ignoreType'
  | 'content.parent.internal.mediaType'
  | 'content.parent.internal.owner'
  | 'content.parent.internal.type'
  | 'content.children'
  | 'content.children.id'
  | 'content.children.parent.id'
  | 'content.children.parent.children'
  | 'content.children.children'
  | 'content.children.children.id'
  | 'content.children.children.children'
  | 'content.children.internal.content'
  | 'content.children.internal.contentDigest'
  | 'content.children.internal.description'
  | 'content.children.internal.fieldOwners'
  | 'content.children.internal.ignoreType'
  | 'content.children.internal.mediaType'
  | 'content.children.internal.owner'
  | 'content.children.internal.type'
  | 'content.internal.content'
  | 'content.internal.contentDigest'
  | 'content.internal.description'
  | 'content.internal.fieldOwners'
  | 'content.internal.ignoreType'
  | 'content.internal.mediaType'
  | 'content.internal.owner'
  | 'content.internal.type'
  | 'content.content'
  | 'content.sys.type'
  | 'content.childrenMdx'
  | 'content.childrenMdx.rawBody'
  | 'content.childrenMdx.fileAbsolutePath'
  | 'content.childrenMdx.frontmatter.title'
  | 'content.childrenMdx.frontmatter.subtitle'
  | 'content.childrenMdx.frontmatter.description'
  | 'content.childrenMdx.frontmatter.slug'
  | 'content.childrenMdx.frontmatter.prevlink'
  | 'content.childrenMdx.frontmatter.prevtitle'
  | 'content.childrenMdx.frontmatter.nextlink'
  | 'content.childrenMdx.frontmatter.nexttitle'
  | 'content.childrenMdx.slug'
  | 'content.childrenMdx.body'
  | 'content.childrenMdx.excerpt'
  | 'content.childrenMdx.headings'
  | 'content.childrenMdx.headings.value'
  | 'content.childrenMdx.headings.depth'
  | 'content.childrenMdx.html'
  | 'content.childrenMdx.mdxAST'
  | 'content.childrenMdx.tableOfContents'
  | 'content.childrenMdx.timeToRead'
  | 'content.childrenMdx.wordCount.paragraphs'
  | 'content.childrenMdx.wordCount.sentences'
  | 'content.childrenMdx.wordCount.words'
  | 'content.childrenMdx.id'
  | 'content.childrenMdx.parent.id'
  | 'content.childrenMdx.parent.children'
  | 'content.childrenMdx.children'
  | 'content.childrenMdx.children.id'
  | 'content.childrenMdx.children.children'
  | 'content.childrenMdx.internal.content'
  | 'content.childrenMdx.internal.contentDigest'
  | 'content.childrenMdx.internal.description'
  | 'content.childrenMdx.internal.fieldOwners'
  | 'content.childrenMdx.internal.ignoreType'
  | 'content.childrenMdx.internal.mediaType'
  | 'content.childrenMdx.internal.owner'
  | 'content.childrenMdx.internal.type'
  | 'content.childMdx.rawBody'
  | 'content.childMdx.fileAbsolutePath'
  | 'content.childMdx.frontmatter.title'
  | 'content.childMdx.frontmatter.subtitle'
  | 'content.childMdx.frontmatter.description'
  | 'content.childMdx.frontmatter.slug'
  | 'content.childMdx.frontmatter.prevlink'
  | 'content.childMdx.frontmatter.prevtitle'
  | 'content.childMdx.frontmatter.nextlink'
  | 'content.childMdx.frontmatter.nexttitle'
  | 'content.childMdx.slug'
  | 'content.childMdx.body'
  | 'content.childMdx.excerpt'
  | 'content.childMdx.headings'
  | 'content.childMdx.headings.value'
  | 'content.childMdx.headings.depth'
  | 'content.childMdx.html'
  | 'content.childMdx.mdxAST'
  | 'content.childMdx.tableOfContents'
  | 'content.childMdx.timeToRead'
  | 'content.childMdx.wordCount.paragraphs'
  | 'content.childMdx.wordCount.sentences'
  | 'content.childMdx.wordCount.words'
  | 'content.childMdx.id'
  | 'content.childMdx.parent.id'
  | 'content.childMdx.parent.children'
  | 'content.childMdx.children'
  | 'content.childMdx.children.id'
  | 'content.childMdx.children.children'
  | 'content.childMdx.internal.content'
  | 'content.childMdx.internal.contentDigest'
  | 'content.childMdx.internal.description'
  | 'content.childMdx.internal.fieldOwners'
  | 'content.childMdx.internal.ignoreType'
  | 'content.childMdx.internal.mediaType'
  | 'content.childMdx.internal.owner'
  | 'content.childMdx.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'images'
  | 'images.contentful_id'
  | 'images.id'
  | 'images.localFile.sourceInstanceName'
  | 'images.localFile.absolutePath'
  | 'images.localFile.relativePath'
  | 'images.localFile.extension'
  | 'images.localFile.size'
  | 'images.localFile.prettySize'
  | 'images.localFile.modifiedTime'
  | 'images.localFile.accessTime'
  | 'images.localFile.changeTime'
  | 'images.localFile.birthTime'
  | 'images.localFile.root'
  | 'images.localFile.dir'
  | 'images.localFile.base'
  | 'images.localFile.ext'
  | 'images.localFile.name'
  | 'images.localFile.relativeDirectory'
  | 'images.localFile.dev'
  | 'images.localFile.mode'
  | 'images.localFile.nlink'
  | 'images.localFile.uid'
  | 'images.localFile.gid'
  | 'images.localFile.rdev'
  | 'images.localFile.ino'
  | 'images.localFile.atimeMs'
  | 'images.localFile.mtimeMs'
  | 'images.localFile.ctimeMs'
  | 'images.localFile.atime'
  | 'images.localFile.mtime'
  | 'images.localFile.ctime'
  | 'images.localFile.birthtime'
  | 'images.localFile.birthtimeMs'
  | 'images.localFile.blksize'
  | 'images.localFile.blocks'
  | 'images.localFile.url'
  | 'images.localFile.publicURL'
  | 'images.localFile.childrenMdx'
  | 'images.localFile.childrenMdx.rawBody'
  | 'images.localFile.childrenMdx.fileAbsolutePath'
  | 'images.localFile.childrenMdx.slug'
  | 'images.localFile.childrenMdx.body'
  | 'images.localFile.childrenMdx.excerpt'
  | 'images.localFile.childrenMdx.headings'
  | 'images.localFile.childrenMdx.html'
  | 'images.localFile.childrenMdx.mdxAST'
  | 'images.localFile.childrenMdx.tableOfContents'
  | 'images.localFile.childrenMdx.timeToRead'
  | 'images.localFile.childrenMdx.id'
  | 'images.localFile.childrenMdx.children'
  | 'images.localFile.childMdx.rawBody'
  | 'images.localFile.childMdx.fileAbsolutePath'
  | 'images.localFile.childMdx.slug'
  | 'images.localFile.childMdx.body'
  | 'images.localFile.childMdx.excerpt'
  | 'images.localFile.childMdx.headings'
  | 'images.localFile.childMdx.html'
  | 'images.localFile.childMdx.mdxAST'
  | 'images.localFile.childMdx.tableOfContents'
  | 'images.localFile.childMdx.timeToRead'
  | 'images.localFile.childMdx.id'
  | 'images.localFile.childMdx.children'
  | 'images.localFile.childrenImageSharp'
  | 'images.localFile.childrenImageSharp.gatsbyImageData'
  | 'images.localFile.childrenImageSharp.id'
  | 'images.localFile.childrenImageSharp.children'
  | 'images.localFile.childImageSharp.gatsbyImageData'
  | 'images.localFile.childImageSharp.id'
  | 'images.localFile.childImageSharp.children'
  | 'images.localFile.childrenPagesJson'
  | 'images.localFile.childrenPagesJson.id'
  | 'images.localFile.childrenPagesJson.children'
  | 'images.localFile.childrenPagesJson.path'
  | 'images.localFile.childrenPagesJson.introduction'
  | 'images.localFile.childrenPagesJson.image'
  | 'images.localFile.childrenPagesJson.displayTitle'
  | 'images.localFile.childrenPagesJson.title'
  | 'images.localFile.childrenPagesJson.catchphrase'
  | 'images.localFile.childPagesJson.id'
  | 'images.localFile.childPagesJson.children'
  | 'images.localFile.childPagesJson.path'
  | 'images.localFile.childPagesJson.introduction'
  | 'images.localFile.childPagesJson.image'
  | 'images.localFile.childPagesJson.displayTitle'
  | 'images.localFile.childPagesJson.title'
  | 'images.localFile.childPagesJson.catchphrase'
  | 'images.localFile.id'
  | 'images.localFile.parent.id'
  | 'images.localFile.parent.children'
  | 'images.localFile.children'
  | 'images.localFile.children.id'
  | 'images.localFile.children.children'
  | 'images.localFile.internal.content'
  | 'images.localFile.internal.contentDigest'
  | 'images.localFile.internal.description'
  | 'images.localFile.internal.fieldOwners'
  | 'images.localFile.internal.ignoreType'
  | 'images.localFile.internal.mediaType'
  | 'images.localFile.internal.owner'
  | 'images.localFile.internal.type'
  | 'images.spaceId'
  | 'images.createdAt'
  | 'images.updatedAt'
  | 'images.file.url'
  | 'images.file.details.size'
  | 'images.file.fileName'
  | 'images.file.contentType'
  | 'images.title'
  | 'images.description'
  | 'images.node_locale'
  | 'images.sys.type'
  | 'images.sys.revision'
  | 'images.fields.localFile'
  | 'images.gatsbyImageData'
  | 'images.parent.id'
  | 'images.parent.parent.id'
  | 'images.parent.parent.children'
  | 'images.parent.children'
  | 'images.parent.children.id'
  | 'images.parent.children.children'
  | 'images.parent.internal.content'
  | 'images.parent.internal.contentDigest'
  | 'images.parent.internal.description'
  | 'images.parent.internal.fieldOwners'
  | 'images.parent.internal.ignoreType'
  | 'images.parent.internal.mediaType'
  | 'images.parent.internal.owner'
  | 'images.parent.internal.type'
  | 'images.children'
  | 'images.children.id'
  | 'images.children.parent.id'
  | 'images.children.parent.children'
  | 'images.children.children'
  | 'images.children.children.id'
  | 'images.children.children.children'
  | 'images.children.internal.content'
  | 'images.children.internal.contentDigest'
  | 'images.children.internal.description'
  | 'images.children.internal.fieldOwners'
  | 'images.children.internal.ignoreType'
  | 'images.children.internal.mediaType'
  | 'images.children.internal.owner'
  | 'images.children.internal.type'
  | 'images.internal.content'
  | 'images.internal.contentDigest'
  | 'images.internal.description'
  | 'images.internal.fieldOwners'
  | 'images.internal.ignoreType'
  | 'images.internal.mediaType'
  | 'images.internal.owner'
  | 'images.internal.type'
  | 'childrenContentfulMarkdownArticleContentTextNode'
  | 'childrenContentfulMarkdownArticleContentTextNode.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.parent.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.parent.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.children.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.children.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.contentDigest'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.ignoreType'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.mediaType'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.owner'
  | 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.type'
  | 'childrenContentfulMarkdownArticleContentTextNode.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.parent.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.parent.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.children.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.children.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.contentDigest'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.fieldOwners'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.ignoreType'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.mediaType'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.owner'
  | 'childrenContentfulMarkdownArticleContentTextNode.children.internal.type'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.contentDigest'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.fieldOwners'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.ignoreType'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.mediaType'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.owner'
  | 'childrenContentfulMarkdownArticleContentTextNode.internal.type'
  | 'childrenContentfulMarkdownArticleContentTextNode.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.sys.type'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.title'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.subtitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.slug'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.prevlink'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.prevtitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.nextlink'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.nexttitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.slug'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.body'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings.value'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings.depth'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.html'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.paragraphs'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.sentences'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.words'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.parent.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.parent.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.contentDigest'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.fieldOwners'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.ignoreType'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.mediaType'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.owner'
  | 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.type'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.rawBody'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.title'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.subtitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.slug'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.prevlink'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.prevtitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.nextlink'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.nexttitle'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.slug'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.body'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.excerpt'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings.value'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings.depth'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.html'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.mdxAST'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.timeToRead'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.paragraphs'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.sentences'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.words'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.parent.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.parent.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children.id'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children.children'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.content'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.contentDigest'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.description'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.fieldOwners'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.ignoreType'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.mediaType'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.owner'
  | 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.type'
  | 'childContentfulMarkdownArticleContentTextNode.id'
  | 'childContentfulMarkdownArticleContentTextNode.parent.id'
  | 'childContentfulMarkdownArticleContentTextNode.parent.parent.id'
  | 'childContentfulMarkdownArticleContentTextNode.parent.parent.children'
  | 'childContentfulMarkdownArticleContentTextNode.parent.children'
  | 'childContentfulMarkdownArticleContentTextNode.parent.children.id'
  | 'childContentfulMarkdownArticleContentTextNode.parent.children.children'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.content'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.contentDigest'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.description'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.fieldOwners'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.ignoreType'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.mediaType'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.owner'
  | 'childContentfulMarkdownArticleContentTextNode.parent.internal.type'
  | 'childContentfulMarkdownArticleContentTextNode.children'
  | 'childContentfulMarkdownArticleContentTextNode.children.id'
  | 'childContentfulMarkdownArticleContentTextNode.children.parent.id'
  | 'childContentfulMarkdownArticleContentTextNode.children.parent.children'
  | 'childContentfulMarkdownArticleContentTextNode.children.children'
  | 'childContentfulMarkdownArticleContentTextNode.children.children.id'
  | 'childContentfulMarkdownArticleContentTextNode.children.children.children'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.content'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.contentDigest'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.description'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.fieldOwners'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.ignoreType'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.mediaType'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.owner'
  | 'childContentfulMarkdownArticleContentTextNode.children.internal.type'
  | 'childContentfulMarkdownArticleContentTextNode.internal.content'
  | 'childContentfulMarkdownArticleContentTextNode.internal.contentDigest'
  | 'childContentfulMarkdownArticleContentTextNode.internal.description'
  | 'childContentfulMarkdownArticleContentTextNode.internal.fieldOwners'
  | 'childContentfulMarkdownArticleContentTextNode.internal.ignoreType'
  | 'childContentfulMarkdownArticleContentTextNode.internal.mediaType'
  | 'childContentfulMarkdownArticleContentTextNode.internal.owner'
  | 'childContentfulMarkdownArticleContentTextNode.internal.type'
  | 'childContentfulMarkdownArticleContentTextNode.content'
  | 'childContentfulMarkdownArticleContentTextNode.sys.type'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.title'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.subtitle'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.description'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.slug'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.prevlink'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.prevtitle'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.nextlink'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.nexttitle'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.slug'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.body'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings.value'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings.depth'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.html'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.paragraphs'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.sentences'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.words'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.id'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.parent.id'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.parent.children'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children.id'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children.children'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.content'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.contentDigest'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.description'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.fieldOwners'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.ignoreType'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.mediaType'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.owner'
  | 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.type'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.rawBody'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.title'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.subtitle'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.description'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.slug'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.prevlink'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.prevtitle'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.nextlink'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.nexttitle'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.slug'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.body'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.excerpt'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.headings'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.headings.value'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.headings.depth'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.html'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.mdxAST'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.timeToRead'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.paragraphs'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.sentences'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.words'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.id'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.parent.id'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.parent.children'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.children'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.children.id'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.children.children'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.content'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.contentDigest'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.description'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.fieldOwners'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.ignoreType'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.mediaType'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.owner'
  | 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulMarkdownArticleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMarkdownArticleEdge>;
  readonly nodes: ReadonlyArray<ContentfulMarkdownArticle>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulMarkdownArticleGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulMarkdownArticleGroupConnection_distinctArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleGroupConnection_maxArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleGroupConnection_minArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleGroupConnection_sumArgs = {
  field: ContentfulMarkdownArticleFieldsEnum;
};


type ContentfulMarkdownArticleGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulMarkdownArticleFieldsEnum;
};

type ContentfulMarkdownArticleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulMarkdownArticleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPlaylistConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPlaylistEdge>;
  readonly nodes: ReadonlyArray<ContentfulPlaylist>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPlaylistGroupConnection>;
};


type ContentfulPlaylistConnection_distinctArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistConnection_maxArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistConnection_minArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistConnection_sumArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPlaylistFieldsEnum;
};

type ContentfulPlaylistEdge = {
  readonly next: Maybe<ContentfulPlaylist>;
  readonly node: ContentfulPlaylist;
  readonly previous: Maybe<ContentfulPlaylist>;
};

type ContentfulPlaylistFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'artists'
  | 'artists.contentful_id'
  | 'artists.id'
  | 'artists.node_locale'
  | 'artists.name'
  | 'artists.twitter'
  | 'artists.markdownarticle'
  | 'artists.markdownarticle.contentful_id'
  | 'artists.markdownarticle.id'
  | 'artists.markdownarticle.node_locale'
  | 'artists.markdownarticle.title'
  | 'artists.markdownarticle.slug'
  | 'artists.markdownarticle.publishedAt'
  | 'artists.markdownarticle.disableSideHeader'
  | 'artists.markdownarticle.isVirticalWriting'
  | 'artists.markdownarticle.align'
  | 'artists.markdownarticle.author.contentful_id'
  | 'artists.markdownarticle.author.id'
  | 'artists.markdownarticle.author.node_locale'
  | 'artists.markdownarticle.author.name'
  | 'artists.markdownarticle.author.twitter'
  | 'artists.markdownarticle.author.markdownarticle'
  | 'artists.markdownarticle.author.spaceId'
  | 'artists.markdownarticle.author.createdAt'
  | 'artists.markdownarticle.author.updatedAt'
  | 'artists.markdownarticle.author.playlist'
  | 'artists.markdownarticle.author.song'
  | 'artists.markdownarticle.author.linktree'
  | 'artists.markdownarticle.author.bandcamp'
  | 'artists.markdownarticle.author.soundcloud'
  | 'artists.markdownarticle.author.instagram'
  | 'artists.markdownarticle.author.minnakikeru'
  | 'artists.markdownarticle.author.hatena'
  | 'artists.markdownarticle.author.youtube'
  | 'artists.markdownarticle.author.childrenContentfulAuthorIntroductionTextNode'
  | 'artists.markdownarticle.author.children'
  | 'artists.markdownarticle.featuredImage.contentful_id'
  | 'artists.markdownarticle.featuredImage.id'
  | 'artists.markdownarticle.featuredImage.spaceId'
  | 'artists.markdownarticle.featuredImage.createdAt'
  | 'artists.markdownarticle.featuredImage.updatedAt'
  | 'artists.markdownarticle.featuredImage.title'
  | 'artists.markdownarticle.featuredImage.description'
  | 'artists.markdownarticle.featuredImage.node_locale'
  | 'artists.markdownarticle.featuredImage.gatsbyImageData'
  | 'artists.markdownarticle.featuredImage.children'
  | 'artists.markdownarticle.content.id'
  | 'artists.markdownarticle.content.children'
  | 'artists.markdownarticle.content.content'
  | 'artists.markdownarticle.content.childrenMdx'
  | 'artists.markdownarticle.spaceId'
  | 'artists.markdownarticle.createdAt'
  | 'artists.markdownarticle.updatedAt'
  | 'artists.markdownarticle.sys.type'
  | 'artists.markdownarticle.sys.revision'
  | 'artists.markdownarticle.images'
  | 'artists.markdownarticle.images.contentful_id'
  | 'artists.markdownarticle.images.id'
  | 'artists.markdownarticle.images.spaceId'
  | 'artists.markdownarticle.images.createdAt'
  | 'artists.markdownarticle.images.updatedAt'
  | 'artists.markdownarticle.images.title'
  | 'artists.markdownarticle.images.description'
  | 'artists.markdownarticle.images.node_locale'
  | 'artists.markdownarticle.images.gatsbyImageData'
  | 'artists.markdownarticle.images.children'
  | 'artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id'
  | 'artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children'
  | 'artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content'
  | 'artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'artists.markdownarticle.childContentfulMarkdownArticleContentTextNode.id'
  | 'artists.markdownarticle.childContentfulMarkdownArticleContentTextNode.children'
  | 'artists.markdownarticle.childContentfulMarkdownArticleContentTextNode.content'
  | 'artists.markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'artists.markdownarticle.parent.id'
  | 'artists.markdownarticle.parent.children'
  | 'artists.markdownarticle.children'
  | 'artists.markdownarticle.children.id'
  | 'artists.markdownarticle.children.children'
  | 'artists.markdownarticle.internal.content'
  | 'artists.markdownarticle.internal.contentDigest'
  | 'artists.markdownarticle.internal.description'
  | 'artists.markdownarticle.internal.fieldOwners'
  | 'artists.markdownarticle.internal.ignoreType'
  | 'artists.markdownarticle.internal.mediaType'
  | 'artists.markdownarticle.internal.owner'
  | 'artists.markdownarticle.internal.type'
  | 'artists.introduction.id'
  | 'artists.introduction.parent.id'
  | 'artists.introduction.parent.children'
  | 'artists.introduction.children'
  | 'artists.introduction.children.id'
  | 'artists.introduction.children.children'
  | 'artists.introduction.internal.content'
  | 'artists.introduction.internal.contentDigest'
  | 'artists.introduction.internal.description'
  | 'artists.introduction.internal.fieldOwners'
  | 'artists.introduction.internal.ignoreType'
  | 'artists.introduction.internal.mediaType'
  | 'artists.introduction.internal.owner'
  | 'artists.introduction.internal.type'
  | 'artists.introduction.introduction'
  | 'artists.introduction.sys.type'
  | 'artists.introduction.childrenMdx'
  | 'artists.introduction.childrenMdx.rawBody'
  | 'artists.introduction.childrenMdx.fileAbsolutePath'
  | 'artists.introduction.childrenMdx.slug'
  | 'artists.introduction.childrenMdx.body'
  | 'artists.introduction.childrenMdx.excerpt'
  | 'artists.introduction.childrenMdx.headings'
  | 'artists.introduction.childrenMdx.html'
  | 'artists.introduction.childrenMdx.mdxAST'
  | 'artists.introduction.childrenMdx.tableOfContents'
  | 'artists.introduction.childrenMdx.timeToRead'
  | 'artists.introduction.childrenMdx.id'
  | 'artists.introduction.childrenMdx.children'
  | 'artists.introduction.childMdx.rawBody'
  | 'artists.introduction.childMdx.fileAbsolutePath'
  | 'artists.introduction.childMdx.slug'
  | 'artists.introduction.childMdx.body'
  | 'artists.introduction.childMdx.excerpt'
  | 'artists.introduction.childMdx.headings'
  | 'artists.introduction.childMdx.html'
  | 'artists.introduction.childMdx.mdxAST'
  | 'artists.introduction.childMdx.tableOfContents'
  | 'artists.introduction.childMdx.timeToRead'
  | 'artists.introduction.childMdx.id'
  | 'artists.introduction.childMdx.children'
  | 'artists.spaceId'
  | 'artists.createdAt'
  | 'artists.updatedAt'
  | 'artists.sys.type'
  | 'artists.sys.revision'
  | 'artists.playlist'
  | 'artists.playlist.contentful_id'
  | 'artists.playlist.id'
  | 'artists.playlist.node_locale'
  | 'artists.playlist.title'
  | 'artists.playlist.slug'
  | 'artists.playlist.artists'
  | 'artists.playlist.artists.contentful_id'
  | 'artists.playlist.artists.id'
  | 'artists.playlist.artists.node_locale'
  | 'artists.playlist.artists.name'
  | 'artists.playlist.artists.twitter'
  | 'artists.playlist.artists.markdownarticle'
  | 'artists.playlist.artists.spaceId'
  | 'artists.playlist.artists.createdAt'
  | 'artists.playlist.artists.updatedAt'
  | 'artists.playlist.artists.playlist'
  | 'artists.playlist.artists.song'
  | 'artists.playlist.artists.linktree'
  | 'artists.playlist.artists.bandcamp'
  | 'artists.playlist.artists.soundcloud'
  | 'artists.playlist.artists.instagram'
  | 'artists.playlist.artists.minnakikeru'
  | 'artists.playlist.artists.hatena'
  | 'artists.playlist.artists.youtube'
  | 'artists.playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'artists.playlist.artists.children'
  | 'artists.playlist.songs'
  | 'artists.playlist.songs.contentful_id'
  | 'artists.playlist.songs.id'
  | 'artists.playlist.songs.node_locale'
  | 'artists.playlist.songs.title'
  | 'artists.playlist.songs.duration'
  | 'artists.playlist.songs.playlist'
  | 'artists.playlist.songs.spaceId'
  | 'artists.playlist.songs.createdAt'
  | 'artists.playlist.songs.updatedAt'
  | 'artists.playlist.songs.children'
  | 'artists.playlist.coverart.contentful_id'
  | 'artists.playlist.coverart.id'
  | 'artists.playlist.coverart.spaceId'
  | 'artists.playlist.coverart.createdAt'
  | 'artists.playlist.coverart.updatedAt'
  | 'artists.playlist.coverart.title'
  | 'artists.playlist.coverart.description'
  | 'artists.playlist.coverart.node_locale'
  | 'artists.playlist.coverart.gatsbyImageData'
  | 'artists.playlist.coverart.children'
  | 'artists.playlist.spaceId'
  | 'artists.playlist.createdAt'
  | 'artists.playlist.updatedAt'
  | 'artists.playlist.sys.type'
  | 'artists.playlist.sys.revision'
  | 'artists.playlist.gatsbyPath'
  | 'artists.playlist.parent.id'
  | 'artists.playlist.parent.children'
  | 'artists.playlist.children'
  | 'artists.playlist.children.id'
  | 'artists.playlist.children.children'
  | 'artists.playlist.internal.content'
  | 'artists.playlist.internal.contentDigest'
  | 'artists.playlist.internal.description'
  | 'artists.playlist.internal.fieldOwners'
  | 'artists.playlist.internal.ignoreType'
  | 'artists.playlist.internal.mediaType'
  | 'artists.playlist.internal.owner'
  | 'artists.playlist.internal.type'
  | 'artists.song'
  | 'artists.song.contentful_id'
  | 'artists.song.id'
  | 'artists.song.node_locale'
  | 'artists.song.title'
  | 'artists.song.duration'
  | 'artists.song.artist.contentful_id'
  | 'artists.song.artist.id'
  | 'artists.song.artist.node_locale'
  | 'artists.song.artist.name'
  | 'artists.song.artist.twitter'
  | 'artists.song.artist.markdownarticle'
  | 'artists.song.artist.spaceId'
  | 'artists.song.artist.createdAt'
  | 'artists.song.artist.updatedAt'
  | 'artists.song.artist.playlist'
  | 'artists.song.artist.song'
  | 'artists.song.artist.linktree'
  | 'artists.song.artist.bandcamp'
  | 'artists.song.artist.soundcloud'
  | 'artists.song.artist.instagram'
  | 'artists.song.artist.minnakikeru'
  | 'artists.song.artist.hatena'
  | 'artists.song.artist.youtube'
  | 'artists.song.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'artists.song.artist.children'
  | 'artists.song.sound.contentful_id'
  | 'artists.song.sound.id'
  | 'artists.song.sound.spaceId'
  | 'artists.song.sound.createdAt'
  | 'artists.song.sound.updatedAt'
  | 'artists.song.sound.title'
  | 'artists.song.sound.description'
  | 'artists.song.sound.node_locale'
  | 'artists.song.sound.gatsbyImageData'
  | 'artists.song.sound.children'
  | 'artists.song.coverart.contentful_id'
  | 'artists.song.coverart.id'
  | 'artists.song.coverart.spaceId'
  | 'artists.song.coverart.createdAt'
  | 'artists.song.coverart.updatedAt'
  | 'artists.song.coverart.title'
  | 'artists.song.coverart.description'
  | 'artists.song.coverart.node_locale'
  | 'artists.song.coverart.gatsbyImageData'
  | 'artists.song.coverart.children'
  | 'artists.song.playlist'
  | 'artists.song.playlist.contentful_id'
  | 'artists.song.playlist.id'
  | 'artists.song.playlist.node_locale'
  | 'artists.song.playlist.title'
  | 'artists.song.playlist.slug'
  | 'artists.song.playlist.artists'
  | 'artists.song.playlist.songs'
  | 'artists.song.playlist.spaceId'
  | 'artists.song.playlist.createdAt'
  | 'artists.song.playlist.updatedAt'
  | 'artists.song.playlist.gatsbyPath'
  | 'artists.song.playlist.children'
  | 'artists.song.spaceId'
  | 'artists.song.createdAt'
  | 'artists.song.updatedAt'
  | 'artists.song.sys.type'
  | 'artists.song.sys.revision'
  | 'artists.song.lyrics.raw'
  | 'artists.song.parent.id'
  | 'artists.song.parent.children'
  | 'artists.song.children'
  | 'artists.song.children.id'
  | 'artists.song.children.children'
  | 'artists.song.internal.content'
  | 'artists.song.internal.contentDigest'
  | 'artists.song.internal.description'
  | 'artists.song.internal.fieldOwners'
  | 'artists.song.internal.ignoreType'
  | 'artists.song.internal.mediaType'
  | 'artists.song.internal.owner'
  | 'artists.song.internal.type'
  | 'artists.image.contentful_id'
  | 'artists.image.id'
  | 'artists.image.localFile.sourceInstanceName'
  | 'artists.image.localFile.absolutePath'
  | 'artists.image.localFile.relativePath'
  | 'artists.image.localFile.extension'
  | 'artists.image.localFile.size'
  | 'artists.image.localFile.prettySize'
  | 'artists.image.localFile.modifiedTime'
  | 'artists.image.localFile.accessTime'
  | 'artists.image.localFile.changeTime'
  | 'artists.image.localFile.birthTime'
  | 'artists.image.localFile.root'
  | 'artists.image.localFile.dir'
  | 'artists.image.localFile.base'
  | 'artists.image.localFile.ext'
  | 'artists.image.localFile.name'
  | 'artists.image.localFile.relativeDirectory'
  | 'artists.image.localFile.dev'
  | 'artists.image.localFile.mode'
  | 'artists.image.localFile.nlink'
  | 'artists.image.localFile.uid'
  | 'artists.image.localFile.gid'
  | 'artists.image.localFile.rdev'
  | 'artists.image.localFile.ino'
  | 'artists.image.localFile.atimeMs'
  | 'artists.image.localFile.mtimeMs'
  | 'artists.image.localFile.ctimeMs'
  | 'artists.image.localFile.atime'
  | 'artists.image.localFile.mtime'
  | 'artists.image.localFile.ctime'
  | 'artists.image.localFile.birthtime'
  | 'artists.image.localFile.birthtimeMs'
  | 'artists.image.localFile.blksize'
  | 'artists.image.localFile.blocks'
  | 'artists.image.localFile.url'
  | 'artists.image.localFile.publicURL'
  | 'artists.image.localFile.childrenMdx'
  | 'artists.image.localFile.childrenImageSharp'
  | 'artists.image.localFile.childrenPagesJson'
  | 'artists.image.localFile.id'
  | 'artists.image.localFile.children'
  | 'artists.image.spaceId'
  | 'artists.image.createdAt'
  | 'artists.image.updatedAt'
  | 'artists.image.file.url'
  | 'artists.image.file.fileName'
  | 'artists.image.file.contentType'
  | 'artists.image.title'
  | 'artists.image.description'
  | 'artists.image.node_locale'
  | 'artists.image.sys.type'
  | 'artists.image.sys.revision'
  | 'artists.image.fields.localFile'
  | 'artists.image.gatsbyImageData'
  | 'artists.image.parent.id'
  | 'artists.image.parent.children'
  | 'artists.image.children'
  | 'artists.image.children.id'
  | 'artists.image.children.children'
  | 'artists.image.internal.content'
  | 'artists.image.internal.contentDigest'
  | 'artists.image.internal.description'
  | 'artists.image.internal.fieldOwners'
  | 'artists.image.internal.ignoreType'
  | 'artists.image.internal.mediaType'
  | 'artists.image.internal.owner'
  | 'artists.image.internal.type'
  | 'artists.linktree'
  | 'artists.bandcamp'
  | 'artists.soundcloud'
  | 'artists.instagram'
  | 'artists.minnakikeru'
  | 'artists.hatena'
  | 'artists.youtube'
  | 'artists.childrenContentfulAuthorIntroductionTextNode'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.id'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.parent.id'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.parent.children'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.children'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.children.id'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.children.children'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.content'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.description'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.owner'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.internal.type'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.sys.type'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'artists.childrenContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'artists.childContentfulAuthorIntroductionTextNode.id'
  | 'artists.childContentfulAuthorIntroductionTextNode.parent.id'
  | 'artists.childContentfulAuthorIntroductionTextNode.parent.children'
  | 'artists.childContentfulAuthorIntroductionTextNode.children'
  | 'artists.childContentfulAuthorIntroductionTextNode.children.id'
  | 'artists.childContentfulAuthorIntroductionTextNode.children.children'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.content'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.description'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.owner'
  | 'artists.childContentfulAuthorIntroductionTextNode.internal.type'
  | 'artists.childContentfulAuthorIntroductionTextNode.introduction'
  | 'artists.childContentfulAuthorIntroductionTextNode.sys.type'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'artists.childContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'artists.childContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'artists.parent.id'
  | 'artists.parent.parent.id'
  | 'artists.parent.parent.children'
  | 'artists.parent.children'
  | 'artists.parent.children.id'
  | 'artists.parent.children.children'
  | 'artists.parent.internal.content'
  | 'artists.parent.internal.contentDigest'
  | 'artists.parent.internal.description'
  | 'artists.parent.internal.fieldOwners'
  | 'artists.parent.internal.ignoreType'
  | 'artists.parent.internal.mediaType'
  | 'artists.parent.internal.owner'
  | 'artists.parent.internal.type'
  | 'artists.children'
  | 'artists.children.id'
  | 'artists.children.parent.id'
  | 'artists.children.parent.children'
  | 'artists.children.children'
  | 'artists.children.children.id'
  | 'artists.children.children.children'
  | 'artists.children.internal.content'
  | 'artists.children.internal.contentDigest'
  | 'artists.children.internal.description'
  | 'artists.children.internal.fieldOwners'
  | 'artists.children.internal.ignoreType'
  | 'artists.children.internal.mediaType'
  | 'artists.children.internal.owner'
  | 'artists.children.internal.type'
  | 'artists.internal.content'
  | 'artists.internal.contentDigest'
  | 'artists.internal.description'
  | 'artists.internal.fieldOwners'
  | 'artists.internal.ignoreType'
  | 'artists.internal.mediaType'
  | 'artists.internal.owner'
  | 'artists.internal.type'
  | 'songs'
  | 'songs.contentful_id'
  | 'songs.id'
  | 'songs.node_locale'
  | 'songs.title'
  | 'songs.duration'
  | 'songs.artist.contentful_id'
  | 'songs.artist.id'
  | 'songs.artist.node_locale'
  | 'songs.artist.name'
  | 'songs.artist.twitter'
  | 'songs.artist.markdownarticle'
  | 'songs.artist.markdownarticle.contentful_id'
  | 'songs.artist.markdownarticle.id'
  | 'songs.artist.markdownarticle.node_locale'
  | 'songs.artist.markdownarticle.title'
  | 'songs.artist.markdownarticle.slug'
  | 'songs.artist.markdownarticle.publishedAt'
  | 'songs.artist.markdownarticle.disableSideHeader'
  | 'songs.artist.markdownarticle.isVirticalWriting'
  | 'songs.artist.markdownarticle.align'
  | 'songs.artist.markdownarticle.spaceId'
  | 'songs.artist.markdownarticle.createdAt'
  | 'songs.artist.markdownarticle.updatedAt'
  | 'songs.artist.markdownarticle.images'
  | 'songs.artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'songs.artist.markdownarticle.children'
  | 'songs.artist.introduction.id'
  | 'songs.artist.introduction.children'
  | 'songs.artist.introduction.introduction'
  | 'songs.artist.introduction.childrenMdx'
  | 'songs.artist.spaceId'
  | 'songs.artist.createdAt'
  | 'songs.artist.updatedAt'
  | 'songs.artist.sys.type'
  | 'songs.artist.sys.revision'
  | 'songs.artist.playlist'
  | 'songs.artist.playlist.contentful_id'
  | 'songs.artist.playlist.id'
  | 'songs.artist.playlist.node_locale'
  | 'songs.artist.playlist.title'
  | 'songs.artist.playlist.slug'
  | 'songs.artist.playlist.artists'
  | 'songs.artist.playlist.songs'
  | 'songs.artist.playlist.spaceId'
  | 'songs.artist.playlist.createdAt'
  | 'songs.artist.playlist.updatedAt'
  | 'songs.artist.playlist.gatsbyPath'
  | 'songs.artist.playlist.children'
  | 'songs.artist.song'
  | 'songs.artist.song.contentful_id'
  | 'songs.artist.song.id'
  | 'songs.artist.song.node_locale'
  | 'songs.artist.song.title'
  | 'songs.artist.song.duration'
  | 'songs.artist.song.playlist'
  | 'songs.artist.song.spaceId'
  | 'songs.artist.song.createdAt'
  | 'songs.artist.song.updatedAt'
  | 'songs.artist.song.children'
  | 'songs.artist.image.contentful_id'
  | 'songs.artist.image.id'
  | 'songs.artist.image.spaceId'
  | 'songs.artist.image.createdAt'
  | 'songs.artist.image.updatedAt'
  | 'songs.artist.image.title'
  | 'songs.artist.image.description'
  | 'songs.artist.image.node_locale'
  | 'songs.artist.image.gatsbyImageData'
  | 'songs.artist.image.children'
  | 'songs.artist.linktree'
  | 'songs.artist.bandcamp'
  | 'songs.artist.soundcloud'
  | 'songs.artist.instagram'
  | 'songs.artist.minnakikeru'
  | 'songs.artist.hatena'
  | 'songs.artist.youtube'
  | 'songs.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'songs.artist.childrenContentfulAuthorIntroductionTextNode.id'
  | 'songs.artist.childrenContentfulAuthorIntroductionTextNode.children'
  | 'songs.artist.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'songs.artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'songs.artist.childContentfulAuthorIntroductionTextNode.id'
  | 'songs.artist.childContentfulAuthorIntroductionTextNode.children'
  | 'songs.artist.childContentfulAuthorIntroductionTextNode.introduction'
  | 'songs.artist.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'songs.artist.parent.id'
  | 'songs.artist.parent.children'
  | 'songs.artist.children'
  | 'songs.artist.children.id'
  | 'songs.artist.children.children'
  | 'songs.artist.internal.content'
  | 'songs.artist.internal.contentDigest'
  | 'songs.artist.internal.description'
  | 'songs.artist.internal.fieldOwners'
  | 'songs.artist.internal.ignoreType'
  | 'songs.artist.internal.mediaType'
  | 'songs.artist.internal.owner'
  | 'songs.artist.internal.type'
  | 'songs.sound.contentful_id'
  | 'songs.sound.id'
  | 'songs.sound.localFile.sourceInstanceName'
  | 'songs.sound.localFile.absolutePath'
  | 'songs.sound.localFile.relativePath'
  | 'songs.sound.localFile.extension'
  | 'songs.sound.localFile.size'
  | 'songs.sound.localFile.prettySize'
  | 'songs.sound.localFile.modifiedTime'
  | 'songs.sound.localFile.accessTime'
  | 'songs.sound.localFile.changeTime'
  | 'songs.sound.localFile.birthTime'
  | 'songs.sound.localFile.root'
  | 'songs.sound.localFile.dir'
  | 'songs.sound.localFile.base'
  | 'songs.sound.localFile.ext'
  | 'songs.sound.localFile.name'
  | 'songs.sound.localFile.relativeDirectory'
  | 'songs.sound.localFile.dev'
  | 'songs.sound.localFile.mode'
  | 'songs.sound.localFile.nlink'
  | 'songs.sound.localFile.uid'
  | 'songs.sound.localFile.gid'
  | 'songs.sound.localFile.rdev'
  | 'songs.sound.localFile.ino'
  | 'songs.sound.localFile.atimeMs'
  | 'songs.sound.localFile.mtimeMs'
  | 'songs.sound.localFile.ctimeMs'
  | 'songs.sound.localFile.atime'
  | 'songs.sound.localFile.mtime'
  | 'songs.sound.localFile.ctime'
  | 'songs.sound.localFile.birthtime'
  | 'songs.sound.localFile.birthtimeMs'
  | 'songs.sound.localFile.blksize'
  | 'songs.sound.localFile.blocks'
  | 'songs.sound.localFile.url'
  | 'songs.sound.localFile.publicURL'
  | 'songs.sound.localFile.childrenMdx'
  | 'songs.sound.localFile.childrenImageSharp'
  | 'songs.sound.localFile.childrenPagesJson'
  | 'songs.sound.localFile.id'
  | 'songs.sound.localFile.children'
  | 'songs.sound.spaceId'
  | 'songs.sound.createdAt'
  | 'songs.sound.updatedAt'
  | 'songs.sound.file.url'
  | 'songs.sound.file.fileName'
  | 'songs.sound.file.contentType'
  | 'songs.sound.title'
  | 'songs.sound.description'
  | 'songs.sound.node_locale'
  | 'songs.sound.sys.type'
  | 'songs.sound.sys.revision'
  | 'songs.sound.fields.localFile'
  | 'songs.sound.gatsbyImageData'
  | 'songs.sound.parent.id'
  | 'songs.sound.parent.children'
  | 'songs.sound.children'
  | 'songs.sound.children.id'
  | 'songs.sound.children.children'
  | 'songs.sound.internal.content'
  | 'songs.sound.internal.contentDigest'
  | 'songs.sound.internal.description'
  | 'songs.sound.internal.fieldOwners'
  | 'songs.sound.internal.ignoreType'
  | 'songs.sound.internal.mediaType'
  | 'songs.sound.internal.owner'
  | 'songs.sound.internal.type'
  | 'songs.coverart.contentful_id'
  | 'songs.coverart.id'
  | 'songs.coverart.localFile.sourceInstanceName'
  | 'songs.coverart.localFile.absolutePath'
  | 'songs.coverart.localFile.relativePath'
  | 'songs.coverart.localFile.extension'
  | 'songs.coverart.localFile.size'
  | 'songs.coverart.localFile.prettySize'
  | 'songs.coverart.localFile.modifiedTime'
  | 'songs.coverart.localFile.accessTime'
  | 'songs.coverart.localFile.changeTime'
  | 'songs.coverart.localFile.birthTime'
  | 'songs.coverart.localFile.root'
  | 'songs.coverart.localFile.dir'
  | 'songs.coverart.localFile.base'
  | 'songs.coverart.localFile.ext'
  | 'songs.coverart.localFile.name'
  | 'songs.coverart.localFile.relativeDirectory'
  | 'songs.coverart.localFile.dev'
  | 'songs.coverart.localFile.mode'
  | 'songs.coverart.localFile.nlink'
  | 'songs.coverart.localFile.uid'
  | 'songs.coverart.localFile.gid'
  | 'songs.coverart.localFile.rdev'
  | 'songs.coverart.localFile.ino'
  | 'songs.coverart.localFile.atimeMs'
  | 'songs.coverart.localFile.mtimeMs'
  | 'songs.coverart.localFile.ctimeMs'
  | 'songs.coverart.localFile.atime'
  | 'songs.coverart.localFile.mtime'
  | 'songs.coverart.localFile.ctime'
  | 'songs.coverart.localFile.birthtime'
  | 'songs.coverart.localFile.birthtimeMs'
  | 'songs.coverart.localFile.blksize'
  | 'songs.coverart.localFile.blocks'
  | 'songs.coverart.localFile.url'
  | 'songs.coverart.localFile.publicURL'
  | 'songs.coverart.localFile.childrenMdx'
  | 'songs.coverart.localFile.childrenImageSharp'
  | 'songs.coverart.localFile.childrenPagesJson'
  | 'songs.coverart.localFile.id'
  | 'songs.coverart.localFile.children'
  | 'songs.coverart.spaceId'
  | 'songs.coverart.createdAt'
  | 'songs.coverart.updatedAt'
  | 'songs.coverart.file.url'
  | 'songs.coverart.file.fileName'
  | 'songs.coverart.file.contentType'
  | 'songs.coverart.title'
  | 'songs.coverart.description'
  | 'songs.coverart.node_locale'
  | 'songs.coverart.sys.type'
  | 'songs.coverart.sys.revision'
  | 'songs.coverart.fields.localFile'
  | 'songs.coverart.gatsbyImageData'
  | 'songs.coverart.parent.id'
  | 'songs.coverart.parent.children'
  | 'songs.coverart.children'
  | 'songs.coverart.children.id'
  | 'songs.coverart.children.children'
  | 'songs.coverart.internal.content'
  | 'songs.coverart.internal.contentDigest'
  | 'songs.coverart.internal.description'
  | 'songs.coverart.internal.fieldOwners'
  | 'songs.coverart.internal.ignoreType'
  | 'songs.coverart.internal.mediaType'
  | 'songs.coverart.internal.owner'
  | 'songs.coverart.internal.type'
  | 'songs.playlist'
  | 'songs.playlist.contentful_id'
  | 'songs.playlist.id'
  | 'songs.playlist.node_locale'
  | 'songs.playlist.title'
  | 'songs.playlist.slug'
  | 'songs.playlist.artists'
  | 'songs.playlist.artists.contentful_id'
  | 'songs.playlist.artists.id'
  | 'songs.playlist.artists.node_locale'
  | 'songs.playlist.artists.name'
  | 'songs.playlist.artists.twitter'
  | 'songs.playlist.artists.markdownarticle'
  | 'songs.playlist.artists.spaceId'
  | 'songs.playlist.artists.createdAt'
  | 'songs.playlist.artists.updatedAt'
  | 'songs.playlist.artists.playlist'
  | 'songs.playlist.artists.song'
  | 'songs.playlist.artists.linktree'
  | 'songs.playlist.artists.bandcamp'
  | 'songs.playlist.artists.soundcloud'
  | 'songs.playlist.artists.instagram'
  | 'songs.playlist.artists.minnakikeru'
  | 'songs.playlist.artists.hatena'
  | 'songs.playlist.artists.youtube'
  | 'songs.playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'songs.playlist.artists.children'
  | 'songs.playlist.songs'
  | 'songs.playlist.songs.contentful_id'
  | 'songs.playlist.songs.id'
  | 'songs.playlist.songs.node_locale'
  | 'songs.playlist.songs.title'
  | 'songs.playlist.songs.duration'
  | 'songs.playlist.songs.playlist'
  | 'songs.playlist.songs.spaceId'
  | 'songs.playlist.songs.createdAt'
  | 'songs.playlist.songs.updatedAt'
  | 'songs.playlist.songs.children'
  | 'songs.playlist.coverart.contentful_id'
  | 'songs.playlist.coverart.id'
  | 'songs.playlist.coverart.spaceId'
  | 'songs.playlist.coverart.createdAt'
  | 'songs.playlist.coverart.updatedAt'
  | 'songs.playlist.coverart.title'
  | 'songs.playlist.coverart.description'
  | 'songs.playlist.coverart.node_locale'
  | 'songs.playlist.coverart.gatsbyImageData'
  | 'songs.playlist.coverart.children'
  | 'songs.playlist.spaceId'
  | 'songs.playlist.createdAt'
  | 'songs.playlist.updatedAt'
  | 'songs.playlist.sys.type'
  | 'songs.playlist.sys.revision'
  | 'songs.playlist.gatsbyPath'
  | 'songs.playlist.parent.id'
  | 'songs.playlist.parent.children'
  | 'songs.playlist.children'
  | 'songs.playlist.children.id'
  | 'songs.playlist.children.children'
  | 'songs.playlist.internal.content'
  | 'songs.playlist.internal.contentDigest'
  | 'songs.playlist.internal.description'
  | 'songs.playlist.internal.fieldOwners'
  | 'songs.playlist.internal.ignoreType'
  | 'songs.playlist.internal.mediaType'
  | 'songs.playlist.internal.owner'
  | 'songs.playlist.internal.type'
  | 'songs.spaceId'
  | 'songs.createdAt'
  | 'songs.updatedAt'
  | 'songs.sys.type'
  | 'songs.sys.revision'
  | 'songs.lyrics.raw'
  | 'songs.parent.id'
  | 'songs.parent.parent.id'
  | 'songs.parent.parent.children'
  | 'songs.parent.children'
  | 'songs.parent.children.id'
  | 'songs.parent.children.children'
  | 'songs.parent.internal.content'
  | 'songs.parent.internal.contentDigest'
  | 'songs.parent.internal.description'
  | 'songs.parent.internal.fieldOwners'
  | 'songs.parent.internal.ignoreType'
  | 'songs.parent.internal.mediaType'
  | 'songs.parent.internal.owner'
  | 'songs.parent.internal.type'
  | 'songs.children'
  | 'songs.children.id'
  | 'songs.children.parent.id'
  | 'songs.children.parent.children'
  | 'songs.children.children'
  | 'songs.children.children.id'
  | 'songs.children.children.children'
  | 'songs.children.internal.content'
  | 'songs.children.internal.contentDigest'
  | 'songs.children.internal.description'
  | 'songs.children.internal.fieldOwners'
  | 'songs.children.internal.ignoreType'
  | 'songs.children.internal.mediaType'
  | 'songs.children.internal.owner'
  | 'songs.children.internal.type'
  | 'songs.internal.content'
  | 'songs.internal.contentDigest'
  | 'songs.internal.description'
  | 'songs.internal.fieldOwners'
  | 'songs.internal.ignoreType'
  | 'songs.internal.mediaType'
  | 'songs.internal.owner'
  | 'songs.internal.type'
  | 'coverart.contentful_id'
  | 'coverart.id'
  | 'coverart.localFile.sourceInstanceName'
  | 'coverart.localFile.absolutePath'
  | 'coverart.localFile.relativePath'
  | 'coverart.localFile.extension'
  | 'coverart.localFile.size'
  | 'coverart.localFile.prettySize'
  | 'coverart.localFile.modifiedTime'
  | 'coverart.localFile.accessTime'
  | 'coverart.localFile.changeTime'
  | 'coverart.localFile.birthTime'
  | 'coverart.localFile.root'
  | 'coverart.localFile.dir'
  | 'coverart.localFile.base'
  | 'coverart.localFile.ext'
  | 'coverart.localFile.name'
  | 'coverart.localFile.relativeDirectory'
  | 'coverart.localFile.dev'
  | 'coverart.localFile.mode'
  | 'coverart.localFile.nlink'
  | 'coverart.localFile.uid'
  | 'coverart.localFile.gid'
  | 'coverart.localFile.rdev'
  | 'coverart.localFile.ino'
  | 'coverart.localFile.atimeMs'
  | 'coverart.localFile.mtimeMs'
  | 'coverart.localFile.ctimeMs'
  | 'coverart.localFile.atime'
  | 'coverart.localFile.mtime'
  | 'coverart.localFile.ctime'
  | 'coverart.localFile.birthtime'
  | 'coverart.localFile.birthtimeMs'
  | 'coverart.localFile.blksize'
  | 'coverart.localFile.blocks'
  | 'coverart.localFile.url'
  | 'coverart.localFile.publicURL'
  | 'coverart.localFile.childrenMdx'
  | 'coverart.localFile.childrenMdx.rawBody'
  | 'coverart.localFile.childrenMdx.fileAbsolutePath'
  | 'coverart.localFile.childrenMdx.slug'
  | 'coverart.localFile.childrenMdx.body'
  | 'coverart.localFile.childrenMdx.excerpt'
  | 'coverart.localFile.childrenMdx.headings'
  | 'coverart.localFile.childrenMdx.html'
  | 'coverart.localFile.childrenMdx.mdxAST'
  | 'coverart.localFile.childrenMdx.tableOfContents'
  | 'coverart.localFile.childrenMdx.timeToRead'
  | 'coverart.localFile.childrenMdx.id'
  | 'coverart.localFile.childrenMdx.children'
  | 'coverart.localFile.childMdx.rawBody'
  | 'coverart.localFile.childMdx.fileAbsolutePath'
  | 'coverart.localFile.childMdx.slug'
  | 'coverart.localFile.childMdx.body'
  | 'coverart.localFile.childMdx.excerpt'
  | 'coverart.localFile.childMdx.headings'
  | 'coverart.localFile.childMdx.html'
  | 'coverart.localFile.childMdx.mdxAST'
  | 'coverart.localFile.childMdx.tableOfContents'
  | 'coverart.localFile.childMdx.timeToRead'
  | 'coverart.localFile.childMdx.id'
  | 'coverart.localFile.childMdx.children'
  | 'coverart.localFile.childrenImageSharp'
  | 'coverart.localFile.childrenImageSharp.gatsbyImageData'
  | 'coverart.localFile.childrenImageSharp.id'
  | 'coverart.localFile.childrenImageSharp.children'
  | 'coverart.localFile.childImageSharp.gatsbyImageData'
  | 'coverart.localFile.childImageSharp.id'
  | 'coverart.localFile.childImageSharp.children'
  | 'coverart.localFile.childrenPagesJson'
  | 'coverart.localFile.childrenPagesJson.id'
  | 'coverart.localFile.childrenPagesJson.children'
  | 'coverart.localFile.childrenPagesJson.path'
  | 'coverart.localFile.childrenPagesJson.introduction'
  | 'coverart.localFile.childrenPagesJson.image'
  | 'coverart.localFile.childrenPagesJson.displayTitle'
  | 'coverart.localFile.childrenPagesJson.title'
  | 'coverart.localFile.childrenPagesJson.catchphrase'
  | 'coverart.localFile.childPagesJson.id'
  | 'coverart.localFile.childPagesJson.children'
  | 'coverart.localFile.childPagesJson.path'
  | 'coverart.localFile.childPagesJson.introduction'
  | 'coverart.localFile.childPagesJson.image'
  | 'coverart.localFile.childPagesJson.displayTitle'
  | 'coverart.localFile.childPagesJson.title'
  | 'coverart.localFile.childPagesJson.catchphrase'
  | 'coverart.localFile.id'
  | 'coverart.localFile.parent.id'
  | 'coverart.localFile.parent.children'
  | 'coverart.localFile.children'
  | 'coverart.localFile.children.id'
  | 'coverart.localFile.children.children'
  | 'coverart.localFile.internal.content'
  | 'coverart.localFile.internal.contentDigest'
  | 'coverart.localFile.internal.description'
  | 'coverart.localFile.internal.fieldOwners'
  | 'coverart.localFile.internal.ignoreType'
  | 'coverart.localFile.internal.mediaType'
  | 'coverart.localFile.internal.owner'
  | 'coverart.localFile.internal.type'
  | 'coverart.spaceId'
  | 'coverart.createdAt'
  | 'coverart.updatedAt'
  | 'coverart.file.url'
  | 'coverart.file.details.size'
  | 'coverart.file.fileName'
  | 'coverart.file.contentType'
  | 'coverart.title'
  | 'coverart.description'
  | 'coverart.node_locale'
  | 'coverart.sys.type'
  | 'coverart.sys.revision'
  | 'coverart.fields.localFile'
  | 'coverart.gatsbyImageData'
  | 'coverart.parent.id'
  | 'coverart.parent.parent.id'
  | 'coverart.parent.parent.children'
  | 'coverart.parent.children'
  | 'coverart.parent.children.id'
  | 'coverart.parent.children.children'
  | 'coverart.parent.internal.content'
  | 'coverart.parent.internal.contentDigest'
  | 'coverart.parent.internal.description'
  | 'coverart.parent.internal.fieldOwners'
  | 'coverart.parent.internal.ignoreType'
  | 'coverart.parent.internal.mediaType'
  | 'coverart.parent.internal.owner'
  | 'coverart.parent.internal.type'
  | 'coverart.children'
  | 'coverart.children.id'
  | 'coverart.children.parent.id'
  | 'coverart.children.parent.children'
  | 'coverart.children.children'
  | 'coverart.children.children.id'
  | 'coverart.children.children.children'
  | 'coverart.children.internal.content'
  | 'coverart.children.internal.contentDigest'
  | 'coverart.children.internal.description'
  | 'coverart.children.internal.fieldOwners'
  | 'coverart.children.internal.ignoreType'
  | 'coverart.children.internal.mediaType'
  | 'coverart.children.internal.owner'
  | 'coverart.children.internal.type'
  | 'coverart.internal.content'
  | 'coverart.internal.contentDigest'
  | 'coverart.internal.description'
  | 'coverart.internal.fieldOwners'
  | 'coverart.internal.ignoreType'
  | 'coverart.internal.mediaType'
  | 'coverart.internal.owner'
  | 'coverart.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'gatsbyPath'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPlaylistGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPlaylistEdge>;
  readonly nodes: ReadonlyArray<ContentfulPlaylist>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPlaylistGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPlaylistGroupConnection_distinctArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistGroupConnection_maxArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistGroupConnection_minArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistGroupConnection_sumArgs = {
  field: ContentfulPlaylistFieldsEnum;
};


type ContentfulPlaylistGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPlaylistFieldsEnum;
};

type ContentfulPlaylistSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPlaylistFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulSongConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulSongEdge>;
  readonly nodes: ReadonlyArray<ContentfulSong>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulSongGroupConnection>;
};


type ContentfulSongConnection_distinctArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongConnection_maxArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongConnection_minArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongConnection_sumArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulSongFieldsEnum;
};

type ContentfulSongEdge = {
  readonly next: Maybe<ContentfulSong>;
  readonly node: ContentfulSong;
  readonly previous: Maybe<ContentfulSong>;
};

type ContentfulSongFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'duration'
  | 'artist.contentful_id'
  | 'artist.id'
  | 'artist.node_locale'
  | 'artist.name'
  | 'artist.twitter'
  | 'artist.markdownarticle'
  | 'artist.markdownarticle.contentful_id'
  | 'artist.markdownarticle.id'
  | 'artist.markdownarticle.node_locale'
  | 'artist.markdownarticle.title'
  | 'artist.markdownarticle.slug'
  | 'artist.markdownarticle.publishedAt'
  | 'artist.markdownarticle.disableSideHeader'
  | 'artist.markdownarticle.isVirticalWriting'
  | 'artist.markdownarticle.align'
  | 'artist.markdownarticle.author.contentful_id'
  | 'artist.markdownarticle.author.id'
  | 'artist.markdownarticle.author.node_locale'
  | 'artist.markdownarticle.author.name'
  | 'artist.markdownarticle.author.twitter'
  | 'artist.markdownarticle.author.markdownarticle'
  | 'artist.markdownarticle.author.spaceId'
  | 'artist.markdownarticle.author.createdAt'
  | 'artist.markdownarticle.author.updatedAt'
  | 'artist.markdownarticle.author.playlist'
  | 'artist.markdownarticle.author.song'
  | 'artist.markdownarticle.author.linktree'
  | 'artist.markdownarticle.author.bandcamp'
  | 'artist.markdownarticle.author.soundcloud'
  | 'artist.markdownarticle.author.instagram'
  | 'artist.markdownarticle.author.minnakikeru'
  | 'artist.markdownarticle.author.hatena'
  | 'artist.markdownarticle.author.youtube'
  | 'artist.markdownarticle.author.childrenContentfulAuthorIntroductionTextNode'
  | 'artist.markdownarticle.author.children'
  | 'artist.markdownarticle.featuredImage.contentful_id'
  | 'artist.markdownarticle.featuredImage.id'
  | 'artist.markdownarticle.featuredImage.spaceId'
  | 'artist.markdownarticle.featuredImage.createdAt'
  | 'artist.markdownarticle.featuredImage.updatedAt'
  | 'artist.markdownarticle.featuredImage.title'
  | 'artist.markdownarticle.featuredImage.description'
  | 'artist.markdownarticle.featuredImage.node_locale'
  | 'artist.markdownarticle.featuredImage.gatsbyImageData'
  | 'artist.markdownarticle.featuredImage.children'
  | 'artist.markdownarticle.content.id'
  | 'artist.markdownarticle.content.children'
  | 'artist.markdownarticle.content.content'
  | 'artist.markdownarticle.content.childrenMdx'
  | 'artist.markdownarticle.spaceId'
  | 'artist.markdownarticle.createdAt'
  | 'artist.markdownarticle.updatedAt'
  | 'artist.markdownarticle.sys.type'
  | 'artist.markdownarticle.sys.revision'
  | 'artist.markdownarticle.images'
  | 'artist.markdownarticle.images.contentful_id'
  | 'artist.markdownarticle.images.id'
  | 'artist.markdownarticle.images.spaceId'
  | 'artist.markdownarticle.images.createdAt'
  | 'artist.markdownarticle.images.updatedAt'
  | 'artist.markdownarticle.images.title'
  | 'artist.markdownarticle.images.description'
  | 'artist.markdownarticle.images.node_locale'
  | 'artist.markdownarticle.images.gatsbyImageData'
  | 'artist.markdownarticle.images.children'
  | 'artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id'
  | 'artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children'
  | 'artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content'
  | 'artist.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'artist.markdownarticle.childContentfulMarkdownArticleContentTextNode.id'
  | 'artist.markdownarticle.childContentfulMarkdownArticleContentTextNode.children'
  | 'artist.markdownarticle.childContentfulMarkdownArticleContentTextNode.content'
  | 'artist.markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx'
  | 'artist.markdownarticle.parent.id'
  | 'artist.markdownarticle.parent.children'
  | 'artist.markdownarticle.children'
  | 'artist.markdownarticle.children.id'
  | 'artist.markdownarticle.children.children'
  | 'artist.markdownarticle.internal.content'
  | 'artist.markdownarticle.internal.contentDigest'
  | 'artist.markdownarticle.internal.description'
  | 'artist.markdownarticle.internal.fieldOwners'
  | 'artist.markdownarticle.internal.ignoreType'
  | 'artist.markdownarticle.internal.mediaType'
  | 'artist.markdownarticle.internal.owner'
  | 'artist.markdownarticle.internal.type'
  | 'artist.introduction.id'
  | 'artist.introduction.parent.id'
  | 'artist.introduction.parent.children'
  | 'artist.introduction.children'
  | 'artist.introduction.children.id'
  | 'artist.introduction.children.children'
  | 'artist.introduction.internal.content'
  | 'artist.introduction.internal.contentDigest'
  | 'artist.introduction.internal.description'
  | 'artist.introduction.internal.fieldOwners'
  | 'artist.introduction.internal.ignoreType'
  | 'artist.introduction.internal.mediaType'
  | 'artist.introduction.internal.owner'
  | 'artist.introduction.internal.type'
  | 'artist.introduction.introduction'
  | 'artist.introduction.sys.type'
  | 'artist.introduction.childrenMdx'
  | 'artist.introduction.childrenMdx.rawBody'
  | 'artist.introduction.childrenMdx.fileAbsolutePath'
  | 'artist.introduction.childrenMdx.slug'
  | 'artist.introduction.childrenMdx.body'
  | 'artist.introduction.childrenMdx.excerpt'
  | 'artist.introduction.childrenMdx.headings'
  | 'artist.introduction.childrenMdx.html'
  | 'artist.introduction.childrenMdx.mdxAST'
  | 'artist.introduction.childrenMdx.tableOfContents'
  | 'artist.introduction.childrenMdx.timeToRead'
  | 'artist.introduction.childrenMdx.id'
  | 'artist.introduction.childrenMdx.children'
  | 'artist.introduction.childMdx.rawBody'
  | 'artist.introduction.childMdx.fileAbsolutePath'
  | 'artist.introduction.childMdx.slug'
  | 'artist.introduction.childMdx.body'
  | 'artist.introduction.childMdx.excerpt'
  | 'artist.introduction.childMdx.headings'
  | 'artist.introduction.childMdx.html'
  | 'artist.introduction.childMdx.mdxAST'
  | 'artist.introduction.childMdx.tableOfContents'
  | 'artist.introduction.childMdx.timeToRead'
  | 'artist.introduction.childMdx.id'
  | 'artist.introduction.childMdx.children'
  | 'artist.spaceId'
  | 'artist.createdAt'
  | 'artist.updatedAt'
  | 'artist.sys.type'
  | 'artist.sys.revision'
  | 'artist.playlist'
  | 'artist.playlist.contentful_id'
  | 'artist.playlist.id'
  | 'artist.playlist.node_locale'
  | 'artist.playlist.title'
  | 'artist.playlist.slug'
  | 'artist.playlist.artists'
  | 'artist.playlist.artists.contentful_id'
  | 'artist.playlist.artists.id'
  | 'artist.playlist.artists.node_locale'
  | 'artist.playlist.artists.name'
  | 'artist.playlist.artists.twitter'
  | 'artist.playlist.artists.markdownarticle'
  | 'artist.playlist.artists.spaceId'
  | 'artist.playlist.artists.createdAt'
  | 'artist.playlist.artists.updatedAt'
  | 'artist.playlist.artists.playlist'
  | 'artist.playlist.artists.song'
  | 'artist.playlist.artists.linktree'
  | 'artist.playlist.artists.bandcamp'
  | 'artist.playlist.artists.soundcloud'
  | 'artist.playlist.artists.instagram'
  | 'artist.playlist.artists.minnakikeru'
  | 'artist.playlist.artists.hatena'
  | 'artist.playlist.artists.youtube'
  | 'artist.playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'artist.playlist.artists.children'
  | 'artist.playlist.songs'
  | 'artist.playlist.songs.contentful_id'
  | 'artist.playlist.songs.id'
  | 'artist.playlist.songs.node_locale'
  | 'artist.playlist.songs.title'
  | 'artist.playlist.songs.duration'
  | 'artist.playlist.songs.playlist'
  | 'artist.playlist.songs.spaceId'
  | 'artist.playlist.songs.createdAt'
  | 'artist.playlist.songs.updatedAt'
  | 'artist.playlist.songs.children'
  | 'artist.playlist.coverart.contentful_id'
  | 'artist.playlist.coverart.id'
  | 'artist.playlist.coverart.spaceId'
  | 'artist.playlist.coverart.createdAt'
  | 'artist.playlist.coverart.updatedAt'
  | 'artist.playlist.coverart.title'
  | 'artist.playlist.coverart.description'
  | 'artist.playlist.coverart.node_locale'
  | 'artist.playlist.coverart.gatsbyImageData'
  | 'artist.playlist.coverart.children'
  | 'artist.playlist.spaceId'
  | 'artist.playlist.createdAt'
  | 'artist.playlist.updatedAt'
  | 'artist.playlist.sys.type'
  | 'artist.playlist.sys.revision'
  | 'artist.playlist.gatsbyPath'
  | 'artist.playlist.parent.id'
  | 'artist.playlist.parent.children'
  | 'artist.playlist.children'
  | 'artist.playlist.children.id'
  | 'artist.playlist.children.children'
  | 'artist.playlist.internal.content'
  | 'artist.playlist.internal.contentDigest'
  | 'artist.playlist.internal.description'
  | 'artist.playlist.internal.fieldOwners'
  | 'artist.playlist.internal.ignoreType'
  | 'artist.playlist.internal.mediaType'
  | 'artist.playlist.internal.owner'
  | 'artist.playlist.internal.type'
  | 'artist.song'
  | 'artist.song.contentful_id'
  | 'artist.song.id'
  | 'artist.song.node_locale'
  | 'artist.song.title'
  | 'artist.song.duration'
  | 'artist.song.artist.contentful_id'
  | 'artist.song.artist.id'
  | 'artist.song.artist.node_locale'
  | 'artist.song.artist.name'
  | 'artist.song.artist.twitter'
  | 'artist.song.artist.markdownarticle'
  | 'artist.song.artist.spaceId'
  | 'artist.song.artist.createdAt'
  | 'artist.song.artist.updatedAt'
  | 'artist.song.artist.playlist'
  | 'artist.song.artist.song'
  | 'artist.song.artist.linktree'
  | 'artist.song.artist.bandcamp'
  | 'artist.song.artist.soundcloud'
  | 'artist.song.artist.instagram'
  | 'artist.song.artist.minnakikeru'
  | 'artist.song.artist.hatena'
  | 'artist.song.artist.youtube'
  | 'artist.song.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'artist.song.artist.children'
  | 'artist.song.sound.contentful_id'
  | 'artist.song.sound.id'
  | 'artist.song.sound.spaceId'
  | 'artist.song.sound.createdAt'
  | 'artist.song.sound.updatedAt'
  | 'artist.song.sound.title'
  | 'artist.song.sound.description'
  | 'artist.song.sound.node_locale'
  | 'artist.song.sound.gatsbyImageData'
  | 'artist.song.sound.children'
  | 'artist.song.coverart.contentful_id'
  | 'artist.song.coverart.id'
  | 'artist.song.coverart.spaceId'
  | 'artist.song.coverart.createdAt'
  | 'artist.song.coverart.updatedAt'
  | 'artist.song.coverart.title'
  | 'artist.song.coverart.description'
  | 'artist.song.coverart.node_locale'
  | 'artist.song.coverart.gatsbyImageData'
  | 'artist.song.coverart.children'
  | 'artist.song.playlist'
  | 'artist.song.playlist.contentful_id'
  | 'artist.song.playlist.id'
  | 'artist.song.playlist.node_locale'
  | 'artist.song.playlist.title'
  | 'artist.song.playlist.slug'
  | 'artist.song.playlist.artists'
  | 'artist.song.playlist.songs'
  | 'artist.song.playlist.spaceId'
  | 'artist.song.playlist.createdAt'
  | 'artist.song.playlist.updatedAt'
  | 'artist.song.playlist.gatsbyPath'
  | 'artist.song.playlist.children'
  | 'artist.song.spaceId'
  | 'artist.song.createdAt'
  | 'artist.song.updatedAt'
  | 'artist.song.sys.type'
  | 'artist.song.sys.revision'
  | 'artist.song.lyrics.raw'
  | 'artist.song.parent.id'
  | 'artist.song.parent.children'
  | 'artist.song.children'
  | 'artist.song.children.id'
  | 'artist.song.children.children'
  | 'artist.song.internal.content'
  | 'artist.song.internal.contentDigest'
  | 'artist.song.internal.description'
  | 'artist.song.internal.fieldOwners'
  | 'artist.song.internal.ignoreType'
  | 'artist.song.internal.mediaType'
  | 'artist.song.internal.owner'
  | 'artist.song.internal.type'
  | 'artist.image.contentful_id'
  | 'artist.image.id'
  | 'artist.image.localFile.sourceInstanceName'
  | 'artist.image.localFile.absolutePath'
  | 'artist.image.localFile.relativePath'
  | 'artist.image.localFile.extension'
  | 'artist.image.localFile.size'
  | 'artist.image.localFile.prettySize'
  | 'artist.image.localFile.modifiedTime'
  | 'artist.image.localFile.accessTime'
  | 'artist.image.localFile.changeTime'
  | 'artist.image.localFile.birthTime'
  | 'artist.image.localFile.root'
  | 'artist.image.localFile.dir'
  | 'artist.image.localFile.base'
  | 'artist.image.localFile.ext'
  | 'artist.image.localFile.name'
  | 'artist.image.localFile.relativeDirectory'
  | 'artist.image.localFile.dev'
  | 'artist.image.localFile.mode'
  | 'artist.image.localFile.nlink'
  | 'artist.image.localFile.uid'
  | 'artist.image.localFile.gid'
  | 'artist.image.localFile.rdev'
  | 'artist.image.localFile.ino'
  | 'artist.image.localFile.atimeMs'
  | 'artist.image.localFile.mtimeMs'
  | 'artist.image.localFile.ctimeMs'
  | 'artist.image.localFile.atime'
  | 'artist.image.localFile.mtime'
  | 'artist.image.localFile.ctime'
  | 'artist.image.localFile.birthtime'
  | 'artist.image.localFile.birthtimeMs'
  | 'artist.image.localFile.blksize'
  | 'artist.image.localFile.blocks'
  | 'artist.image.localFile.url'
  | 'artist.image.localFile.publicURL'
  | 'artist.image.localFile.childrenMdx'
  | 'artist.image.localFile.childrenImageSharp'
  | 'artist.image.localFile.childrenPagesJson'
  | 'artist.image.localFile.id'
  | 'artist.image.localFile.children'
  | 'artist.image.spaceId'
  | 'artist.image.createdAt'
  | 'artist.image.updatedAt'
  | 'artist.image.file.url'
  | 'artist.image.file.fileName'
  | 'artist.image.file.contentType'
  | 'artist.image.title'
  | 'artist.image.description'
  | 'artist.image.node_locale'
  | 'artist.image.sys.type'
  | 'artist.image.sys.revision'
  | 'artist.image.fields.localFile'
  | 'artist.image.gatsbyImageData'
  | 'artist.image.parent.id'
  | 'artist.image.parent.children'
  | 'artist.image.children'
  | 'artist.image.children.id'
  | 'artist.image.children.children'
  | 'artist.image.internal.content'
  | 'artist.image.internal.contentDigest'
  | 'artist.image.internal.description'
  | 'artist.image.internal.fieldOwners'
  | 'artist.image.internal.ignoreType'
  | 'artist.image.internal.mediaType'
  | 'artist.image.internal.owner'
  | 'artist.image.internal.type'
  | 'artist.linktree'
  | 'artist.bandcamp'
  | 'artist.soundcloud'
  | 'artist.instagram'
  | 'artist.minnakikeru'
  | 'artist.hatena'
  | 'artist.youtube'
  | 'artist.childrenContentfulAuthorIntroductionTextNode'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.id'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.parent.id'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.parent.children'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.children'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.children.id'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.children.children'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.content'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.description'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.owner'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.internal.type'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.sys.type'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'artist.childrenContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'artist.childContentfulAuthorIntroductionTextNode.id'
  | 'artist.childContentfulAuthorIntroductionTextNode.parent.id'
  | 'artist.childContentfulAuthorIntroductionTextNode.parent.children'
  | 'artist.childContentfulAuthorIntroductionTextNode.children'
  | 'artist.childContentfulAuthorIntroductionTextNode.children.id'
  | 'artist.childContentfulAuthorIntroductionTextNode.children.children'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.content'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.contentDigest'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.description'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.fieldOwners'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.ignoreType'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.mediaType'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.owner'
  | 'artist.childContentfulAuthorIntroductionTextNode.internal.type'
  | 'artist.childContentfulAuthorIntroductionTextNode.introduction'
  | 'artist.childContentfulAuthorIntroductionTextNode.sys.type'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.slug'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.body'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.headings'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.html'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.id'
  | 'artist.childContentfulAuthorIntroductionTextNode.childrenMdx.children'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.rawBody'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.slug'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.body'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.excerpt'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.headings'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.html'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.mdxAST'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.timeToRead'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.id'
  | 'artist.childContentfulAuthorIntroductionTextNode.childMdx.children'
  | 'artist.parent.id'
  | 'artist.parent.parent.id'
  | 'artist.parent.parent.children'
  | 'artist.parent.children'
  | 'artist.parent.children.id'
  | 'artist.parent.children.children'
  | 'artist.parent.internal.content'
  | 'artist.parent.internal.contentDigest'
  | 'artist.parent.internal.description'
  | 'artist.parent.internal.fieldOwners'
  | 'artist.parent.internal.ignoreType'
  | 'artist.parent.internal.mediaType'
  | 'artist.parent.internal.owner'
  | 'artist.parent.internal.type'
  | 'artist.children'
  | 'artist.children.id'
  | 'artist.children.parent.id'
  | 'artist.children.parent.children'
  | 'artist.children.children'
  | 'artist.children.children.id'
  | 'artist.children.children.children'
  | 'artist.children.internal.content'
  | 'artist.children.internal.contentDigest'
  | 'artist.children.internal.description'
  | 'artist.children.internal.fieldOwners'
  | 'artist.children.internal.ignoreType'
  | 'artist.children.internal.mediaType'
  | 'artist.children.internal.owner'
  | 'artist.children.internal.type'
  | 'artist.internal.content'
  | 'artist.internal.contentDigest'
  | 'artist.internal.description'
  | 'artist.internal.fieldOwners'
  | 'artist.internal.ignoreType'
  | 'artist.internal.mediaType'
  | 'artist.internal.owner'
  | 'artist.internal.type'
  | 'sound.contentful_id'
  | 'sound.id'
  | 'sound.localFile.sourceInstanceName'
  | 'sound.localFile.absolutePath'
  | 'sound.localFile.relativePath'
  | 'sound.localFile.extension'
  | 'sound.localFile.size'
  | 'sound.localFile.prettySize'
  | 'sound.localFile.modifiedTime'
  | 'sound.localFile.accessTime'
  | 'sound.localFile.changeTime'
  | 'sound.localFile.birthTime'
  | 'sound.localFile.root'
  | 'sound.localFile.dir'
  | 'sound.localFile.base'
  | 'sound.localFile.ext'
  | 'sound.localFile.name'
  | 'sound.localFile.relativeDirectory'
  | 'sound.localFile.dev'
  | 'sound.localFile.mode'
  | 'sound.localFile.nlink'
  | 'sound.localFile.uid'
  | 'sound.localFile.gid'
  | 'sound.localFile.rdev'
  | 'sound.localFile.ino'
  | 'sound.localFile.atimeMs'
  | 'sound.localFile.mtimeMs'
  | 'sound.localFile.ctimeMs'
  | 'sound.localFile.atime'
  | 'sound.localFile.mtime'
  | 'sound.localFile.ctime'
  | 'sound.localFile.birthtime'
  | 'sound.localFile.birthtimeMs'
  | 'sound.localFile.blksize'
  | 'sound.localFile.blocks'
  | 'sound.localFile.url'
  | 'sound.localFile.publicURL'
  | 'sound.localFile.childrenMdx'
  | 'sound.localFile.childrenMdx.rawBody'
  | 'sound.localFile.childrenMdx.fileAbsolutePath'
  | 'sound.localFile.childrenMdx.slug'
  | 'sound.localFile.childrenMdx.body'
  | 'sound.localFile.childrenMdx.excerpt'
  | 'sound.localFile.childrenMdx.headings'
  | 'sound.localFile.childrenMdx.html'
  | 'sound.localFile.childrenMdx.mdxAST'
  | 'sound.localFile.childrenMdx.tableOfContents'
  | 'sound.localFile.childrenMdx.timeToRead'
  | 'sound.localFile.childrenMdx.id'
  | 'sound.localFile.childrenMdx.children'
  | 'sound.localFile.childMdx.rawBody'
  | 'sound.localFile.childMdx.fileAbsolutePath'
  | 'sound.localFile.childMdx.slug'
  | 'sound.localFile.childMdx.body'
  | 'sound.localFile.childMdx.excerpt'
  | 'sound.localFile.childMdx.headings'
  | 'sound.localFile.childMdx.html'
  | 'sound.localFile.childMdx.mdxAST'
  | 'sound.localFile.childMdx.tableOfContents'
  | 'sound.localFile.childMdx.timeToRead'
  | 'sound.localFile.childMdx.id'
  | 'sound.localFile.childMdx.children'
  | 'sound.localFile.childrenImageSharp'
  | 'sound.localFile.childrenImageSharp.gatsbyImageData'
  | 'sound.localFile.childrenImageSharp.id'
  | 'sound.localFile.childrenImageSharp.children'
  | 'sound.localFile.childImageSharp.gatsbyImageData'
  | 'sound.localFile.childImageSharp.id'
  | 'sound.localFile.childImageSharp.children'
  | 'sound.localFile.childrenPagesJson'
  | 'sound.localFile.childrenPagesJson.id'
  | 'sound.localFile.childrenPagesJson.children'
  | 'sound.localFile.childrenPagesJson.path'
  | 'sound.localFile.childrenPagesJson.introduction'
  | 'sound.localFile.childrenPagesJson.image'
  | 'sound.localFile.childrenPagesJson.displayTitle'
  | 'sound.localFile.childrenPagesJson.title'
  | 'sound.localFile.childrenPagesJson.catchphrase'
  | 'sound.localFile.childPagesJson.id'
  | 'sound.localFile.childPagesJson.children'
  | 'sound.localFile.childPagesJson.path'
  | 'sound.localFile.childPagesJson.introduction'
  | 'sound.localFile.childPagesJson.image'
  | 'sound.localFile.childPagesJson.displayTitle'
  | 'sound.localFile.childPagesJson.title'
  | 'sound.localFile.childPagesJson.catchphrase'
  | 'sound.localFile.id'
  | 'sound.localFile.parent.id'
  | 'sound.localFile.parent.children'
  | 'sound.localFile.children'
  | 'sound.localFile.children.id'
  | 'sound.localFile.children.children'
  | 'sound.localFile.internal.content'
  | 'sound.localFile.internal.contentDigest'
  | 'sound.localFile.internal.description'
  | 'sound.localFile.internal.fieldOwners'
  | 'sound.localFile.internal.ignoreType'
  | 'sound.localFile.internal.mediaType'
  | 'sound.localFile.internal.owner'
  | 'sound.localFile.internal.type'
  | 'sound.spaceId'
  | 'sound.createdAt'
  | 'sound.updatedAt'
  | 'sound.file.url'
  | 'sound.file.details.size'
  | 'sound.file.fileName'
  | 'sound.file.contentType'
  | 'sound.title'
  | 'sound.description'
  | 'sound.node_locale'
  | 'sound.sys.type'
  | 'sound.sys.revision'
  | 'sound.fields.localFile'
  | 'sound.gatsbyImageData'
  | 'sound.parent.id'
  | 'sound.parent.parent.id'
  | 'sound.parent.parent.children'
  | 'sound.parent.children'
  | 'sound.parent.children.id'
  | 'sound.parent.children.children'
  | 'sound.parent.internal.content'
  | 'sound.parent.internal.contentDigest'
  | 'sound.parent.internal.description'
  | 'sound.parent.internal.fieldOwners'
  | 'sound.parent.internal.ignoreType'
  | 'sound.parent.internal.mediaType'
  | 'sound.parent.internal.owner'
  | 'sound.parent.internal.type'
  | 'sound.children'
  | 'sound.children.id'
  | 'sound.children.parent.id'
  | 'sound.children.parent.children'
  | 'sound.children.children'
  | 'sound.children.children.id'
  | 'sound.children.children.children'
  | 'sound.children.internal.content'
  | 'sound.children.internal.contentDigest'
  | 'sound.children.internal.description'
  | 'sound.children.internal.fieldOwners'
  | 'sound.children.internal.ignoreType'
  | 'sound.children.internal.mediaType'
  | 'sound.children.internal.owner'
  | 'sound.children.internal.type'
  | 'sound.internal.content'
  | 'sound.internal.contentDigest'
  | 'sound.internal.description'
  | 'sound.internal.fieldOwners'
  | 'sound.internal.ignoreType'
  | 'sound.internal.mediaType'
  | 'sound.internal.owner'
  | 'sound.internal.type'
  | 'coverart.contentful_id'
  | 'coverart.id'
  | 'coverart.localFile.sourceInstanceName'
  | 'coverart.localFile.absolutePath'
  | 'coverart.localFile.relativePath'
  | 'coverart.localFile.extension'
  | 'coverart.localFile.size'
  | 'coverart.localFile.prettySize'
  | 'coverart.localFile.modifiedTime'
  | 'coverart.localFile.accessTime'
  | 'coverart.localFile.changeTime'
  | 'coverart.localFile.birthTime'
  | 'coverart.localFile.root'
  | 'coverart.localFile.dir'
  | 'coverart.localFile.base'
  | 'coverart.localFile.ext'
  | 'coverart.localFile.name'
  | 'coverart.localFile.relativeDirectory'
  | 'coverart.localFile.dev'
  | 'coverart.localFile.mode'
  | 'coverart.localFile.nlink'
  | 'coverart.localFile.uid'
  | 'coverart.localFile.gid'
  | 'coverart.localFile.rdev'
  | 'coverart.localFile.ino'
  | 'coverart.localFile.atimeMs'
  | 'coverart.localFile.mtimeMs'
  | 'coverart.localFile.ctimeMs'
  | 'coverart.localFile.atime'
  | 'coverart.localFile.mtime'
  | 'coverart.localFile.ctime'
  | 'coverart.localFile.birthtime'
  | 'coverart.localFile.birthtimeMs'
  | 'coverart.localFile.blksize'
  | 'coverart.localFile.blocks'
  | 'coverart.localFile.url'
  | 'coverart.localFile.publicURL'
  | 'coverart.localFile.childrenMdx'
  | 'coverart.localFile.childrenMdx.rawBody'
  | 'coverart.localFile.childrenMdx.fileAbsolutePath'
  | 'coverart.localFile.childrenMdx.slug'
  | 'coverart.localFile.childrenMdx.body'
  | 'coverart.localFile.childrenMdx.excerpt'
  | 'coverart.localFile.childrenMdx.headings'
  | 'coverart.localFile.childrenMdx.html'
  | 'coverart.localFile.childrenMdx.mdxAST'
  | 'coverart.localFile.childrenMdx.tableOfContents'
  | 'coverart.localFile.childrenMdx.timeToRead'
  | 'coverart.localFile.childrenMdx.id'
  | 'coverart.localFile.childrenMdx.children'
  | 'coverart.localFile.childMdx.rawBody'
  | 'coverart.localFile.childMdx.fileAbsolutePath'
  | 'coverart.localFile.childMdx.slug'
  | 'coverart.localFile.childMdx.body'
  | 'coverart.localFile.childMdx.excerpt'
  | 'coverart.localFile.childMdx.headings'
  | 'coverart.localFile.childMdx.html'
  | 'coverart.localFile.childMdx.mdxAST'
  | 'coverart.localFile.childMdx.tableOfContents'
  | 'coverart.localFile.childMdx.timeToRead'
  | 'coverart.localFile.childMdx.id'
  | 'coverart.localFile.childMdx.children'
  | 'coverart.localFile.childrenImageSharp'
  | 'coverart.localFile.childrenImageSharp.gatsbyImageData'
  | 'coverart.localFile.childrenImageSharp.id'
  | 'coverart.localFile.childrenImageSharp.children'
  | 'coverart.localFile.childImageSharp.gatsbyImageData'
  | 'coverart.localFile.childImageSharp.id'
  | 'coverart.localFile.childImageSharp.children'
  | 'coverart.localFile.childrenPagesJson'
  | 'coverart.localFile.childrenPagesJson.id'
  | 'coverart.localFile.childrenPagesJson.children'
  | 'coverart.localFile.childrenPagesJson.path'
  | 'coverart.localFile.childrenPagesJson.introduction'
  | 'coverart.localFile.childrenPagesJson.image'
  | 'coverart.localFile.childrenPagesJson.displayTitle'
  | 'coverart.localFile.childrenPagesJson.title'
  | 'coverart.localFile.childrenPagesJson.catchphrase'
  | 'coverart.localFile.childPagesJson.id'
  | 'coverart.localFile.childPagesJson.children'
  | 'coverart.localFile.childPagesJson.path'
  | 'coverart.localFile.childPagesJson.introduction'
  | 'coverart.localFile.childPagesJson.image'
  | 'coverart.localFile.childPagesJson.displayTitle'
  | 'coverart.localFile.childPagesJson.title'
  | 'coverart.localFile.childPagesJson.catchphrase'
  | 'coverart.localFile.id'
  | 'coverart.localFile.parent.id'
  | 'coverart.localFile.parent.children'
  | 'coverart.localFile.children'
  | 'coverart.localFile.children.id'
  | 'coverart.localFile.children.children'
  | 'coverart.localFile.internal.content'
  | 'coverart.localFile.internal.contentDigest'
  | 'coverart.localFile.internal.description'
  | 'coverart.localFile.internal.fieldOwners'
  | 'coverart.localFile.internal.ignoreType'
  | 'coverart.localFile.internal.mediaType'
  | 'coverart.localFile.internal.owner'
  | 'coverart.localFile.internal.type'
  | 'coverart.spaceId'
  | 'coverart.createdAt'
  | 'coverart.updatedAt'
  | 'coverart.file.url'
  | 'coverart.file.details.size'
  | 'coverart.file.fileName'
  | 'coverart.file.contentType'
  | 'coverart.title'
  | 'coverart.description'
  | 'coverart.node_locale'
  | 'coverart.sys.type'
  | 'coverart.sys.revision'
  | 'coverart.fields.localFile'
  | 'coverart.gatsbyImageData'
  | 'coverart.parent.id'
  | 'coverart.parent.parent.id'
  | 'coverart.parent.parent.children'
  | 'coverart.parent.children'
  | 'coverart.parent.children.id'
  | 'coverart.parent.children.children'
  | 'coverart.parent.internal.content'
  | 'coverart.parent.internal.contentDigest'
  | 'coverart.parent.internal.description'
  | 'coverart.parent.internal.fieldOwners'
  | 'coverart.parent.internal.ignoreType'
  | 'coverart.parent.internal.mediaType'
  | 'coverart.parent.internal.owner'
  | 'coverart.parent.internal.type'
  | 'coverart.children'
  | 'coverart.children.id'
  | 'coverart.children.parent.id'
  | 'coverart.children.parent.children'
  | 'coverart.children.children'
  | 'coverart.children.children.id'
  | 'coverart.children.children.children'
  | 'coverart.children.internal.content'
  | 'coverart.children.internal.contentDigest'
  | 'coverart.children.internal.description'
  | 'coverart.children.internal.fieldOwners'
  | 'coverart.children.internal.ignoreType'
  | 'coverart.children.internal.mediaType'
  | 'coverart.children.internal.owner'
  | 'coverart.children.internal.type'
  | 'coverart.internal.content'
  | 'coverart.internal.contentDigest'
  | 'coverart.internal.description'
  | 'coverart.internal.fieldOwners'
  | 'coverart.internal.ignoreType'
  | 'coverart.internal.mediaType'
  | 'coverart.internal.owner'
  | 'coverart.internal.type'
  | 'playlist'
  | 'playlist.contentful_id'
  | 'playlist.id'
  | 'playlist.node_locale'
  | 'playlist.title'
  | 'playlist.slug'
  | 'playlist.artists'
  | 'playlist.artists.contentful_id'
  | 'playlist.artists.id'
  | 'playlist.artists.node_locale'
  | 'playlist.artists.name'
  | 'playlist.artists.twitter'
  | 'playlist.artists.markdownarticle'
  | 'playlist.artists.markdownarticle.contentful_id'
  | 'playlist.artists.markdownarticle.id'
  | 'playlist.artists.markdownarticle.node_locale'
  | 'playlist.artists.markdownarticle.title'
  | 'playlist.artists.markdownarticle.slug'
  | 'playlist.artists.markdownarticle.publishedAt'
  | 'playlist.artists.markdownarticle.disableSideHeader'
  | 'playlist.artists.markdownarticle.isVirticalWriting'
  | 'playlist.artists.markdownarticle.align'
  | 'playlist.artists.markdownarticle.spaceId'
  | 'playlist.artists.markdownarticle.createdAt'
  | 'playlist.artists.markdownarticle.updatedAt'
  | 'playlist.artists.markdownarticle.images'
  | 'playlist.artists.markdownarticle.childrenContentfulMarkdownArticleContentTextNode'
  | 'playlist.artists.markdownarticle.children'
  | 'playlist.artists.introduction.id'
  | 'playlist.artists.introduction.children'
  | 'playlist.artists.introduction.introduction'
  | 'playlist.artists.introduction.childrenMdx'
  | 'playlist.artists.spaceId'
  | 'playlist.artists.createdAt'
  | 'playlist.artists.updatedAt'
  | 'playlist.artists.sys.type'
  | 'playlist.artists.sys.revision'
  | 'playlist.artists.playlist'
  | 'playlist.artists.playlist.contentful_id'
  | 'playlist.artists.playlist.id'
  | 'playlist.artists.playlist.node_locale'
  | 'playlist.artists.playlist.title'
  | 'playlist.artists.playlist.slug'
  | 'playlist.artists.playlist.artists'
  | 'playlist.artists.playlist.songs'
  | 'playlist.artists.playlist.spaceId'
  | 'playlist.artists.playlist.createdAt'
  | 'playlist.artists.playlist.updatedAt'
  | 'playlist.artists.playlist.gatsbyPath'
  | 'playlist.artists.playlist.children'
  | 'playlist.artists.song'
  | 'playlist.artists.song.contentful_id'
  | 'playlist.artists.song.id'
  | 'playlist.artists.song.node_locale'
  | 'playlist.artists.song.title'
  | 'playlist.artists.song.duration'
  | 'playlist.artists.song.playlist'
  | 'playlist.artists.song.spaceId'
  | 'playlist.artists.song.createdAt'
  | 'playlist.artists.song.updatedAt'
  | 'playlist.artists.song.children'
  | 'playlist.artists.image.contentful_id'
  | 'playlist.artists.image.id'
  | 'playlist.artists.image.spaceId'
  | 'playlist.artists.image.createdAt'
  | 'playlist.artists.image.updatedAt'
  | 'playlist.artists.image.title'
  | 'playlist.artists.image.description'
  | 'playlist.artists.image.node_locale'
  | 'playlist.artists.image.gatsbyImageData'
  | 'playlist.artists.image.children'
  | 'playlist.artists.linktree'
  | 'playlist.artists.bandcamp'
  | 'playlist.artists.soundcloud'
  | 'playlist.artists.instagram'
  | 'playlist.artists.minnakikeru'
  | 'playlist.artists.hatena'
  | 'playlist.artists.youtube'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.id'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.children'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.introduction'
  | 'playlist.artists.childrenContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.id'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.children'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.introduction'
  | 'playlist.artists.childContentfulAuthorIntroductionTextNode.childrenMdx'
  | 'playlist.artists.parent.id'
  | 'playlist.artists.parent.children'
  | 'playlist.artists.children'
  | 'playlist.artists.children.id'
  | 'playlist.artists.children.children'
  | 'playlist.artists.internal.content'
  | 'playlist.artists.internal.contentDigest'
  | 'playlist.artists.internal.description'
  | 'playlist.artists.internal.fieldOwners'
  | 'playlist.artists.internal.ignoreType'
  | 'playlist.artists.internal.mediaType'
  | 'playlist.artists.internal.owner'
  | 'playlist.artists.internal.type'
  | 'playlist.songs'
  | 'playlist.songs.contentful_id'
  | 'playlist.songs.id'
  | 'playlist.songs.node_locale'
  | 'playlist.songs.title'
  | 'playlist.songs.duration'
  | 'playlist.songs.artist.contentful_id'
  | 'playlist.songs.artist.id'
  | 'playlist.songs.artist.node_locale'
  | 'playlist.songs.artist.name'
  | 'playlist.songs.artist.twitter'
  | 'playlist.songs.artist.markdownarticle'
  | 'playlist.songs.artist.spaceId'
  | 'playlist.songs.artist.createdAt'
  | 'playlist.songs.artist.updatedAt'
  | 'playlist.songs.artist.playlist'
  | 'playlist.songs.artist.song'
  | 'playlist.songs.artist.linktree'
  | 'playlist.songs.artist.bandcamp'
  | 'playlist.songs.artist.soundcloud'
  | 'playlist.songs.artist.instagram'
  | 'playlist.songs.artist.minnakikeru'
  | 'playlist.songs.artist.hatena'
  | 'playlist.songs.artist.youtube'
  | 'playlist.songs.artist.childrenContentfulAuthorIntroductionTextNode'
  | 'playlist.songs.artist.children'
  | 'playlist.songs.sound.contentful_id'
  | 'playlist.songs.sound.id'
  | 'playlist.songs.sound.spaceId'
  | 'playlist.songs.sound.createdAt'
  | 'playlist.songs.sound.updatedAt'
  | 'playlist.songs.sound.title'
  | 'playlist.songs.sound.description'
  | 'playlist.songs.sound.node_locale'
  | 'playlist.songs.sound.gatsbyImageData'
  | 'playlist.songs.sound.children'
  | 'playlist.songs.coverart.contentful_id'
  | 'playlist.songs.coverart.id'
  | 'playlist.songs.coverart.spaceId'
  | 'playlist.songs.coverart.createdAt'
  | 'playlist.songs.coverart.updatedAt'
  | 'playlist.songs.coverart.title'
  | 'playlist.songs.coverart.description'
  | 'playlist.songs.coverart.node_locale'
  | 'playlist.songs.coverart.gatsbyImageData'
  | 'playlist.songs.coverart.children'
  | 'playlist.songs.playlist'
  | 'playlist.songs.playlist.contentful_id'
  | 'playlist.songs.playlist.id'
  | 'playlist.songs.playlist.node_locale'
  | 'playlist.songs.playlist.title'
  | 'playlist.songs.playlist.slug'
  | 'playlist.songs.playlist.artists'
  | 'playlist.songs.playlist.songs'
  | 'playlist.songs.playlist.spaceId'
  | 'playlist.songs.playlist.createdAt'
  | 'playlist.songs.playlist.updatedAt'
  | 'playlist.songs.playlist.gatsbyPath'
  | 'playlist.songs.playlist.children'
  | 'playlist.songs.spaceId'
  | 'playlist.songs.createdAt'
  | 'playlist.songs.updatedAt'
  | 'playlist.songs.sys.type'
  | 'playlist.songs.sys.revision'
  | 'playlist.songs.lyrics.raw'
  | 'playlist.songs.parent.id'
  | 'playlist.songs.parent.children'
  | 'playlist.songs.children'
  | 'playlist.songs.children.id'
  | 'playlist.songs.children.children'
  | 'playlist.songs.internal.content'
  | 'playlist.songs.internal.contentDigest'
  | 'playlist.songs.internal.description'
  | 'playlist.songs.internal.fieldOwners'
  | 'playlist.songs.internal.ignoreType'
  | 'playlist.songs.internal.mediaType'
  | 'playlist.songs.internal.owner'
  | 'playlist.songs.internal.type'
  | 'playlist.coverart.contentful_id'
  | 'playlist.coverart.id'
  | 'playlist.coverart.localFile.sourceInstanceName'
  | 'playlist.coverart.localFile.absolutePath'
  | 'playlist.coverart.localFile.relativePath'
  | 'playlist.coverart.localFile.extension'
  | 'playlist.coverart.localFile.size'
  | 'playlist.coverart.localFile.prettySize'
  | 'playlist.coverart.localFile.modifiedTime'
  | 'playlist.coverart.localFile.accessTime'
  | 'playlist.coverart.localFile.changeTime'
  | 'playlist.coverart.localFile.birthTime'
  | 'playlist.coverart.localFile.root'
  | 'playlist.coverart.localFile.dir'
  | 'playlist.coverart.localFile.base'
  | 'playlist.coverart.localFile.ext'
  | 'playlist.coverart.localFile.name'
  | 'playlist.coverart.localFile.relativeDirectory'
  | 'playlist.coverart.localFile.dev'
  | 'playlist.coverart.localFile.mode'
  | 'playlist.coverart.localFile.nlink'
  | 'playlist.coverart.localFile.uid'
  | 'playlist.coverart.localFile.gid'
  | 'playlist.coverart.localFile.rdev'
  | 'playlist.coverart.localFile.ino'
  | 'playlist.coverart.localFile.atimeMs'
  | 'playlist.coverart.localFile.mtimeMs'
  | 'playlist.coverart.localFile.ctimeMs'
  | 'playlist.coverart.localFile.atime'
  | 'playlist.coverart.localFile.mtime'
  | 'playlist.coverart.localFile.ctime'
  | 'playlist.coverart.localFile.birthtime'
  | 'playlist.coverart.localFile.birthtimeMs'
  | 'playlist.coverart.localFile.blksize'
  | 'playlist.coverart.localFile.blocks'
  | 'playlist.coverart.localFile.url'
  | 'playlist.coverart.localFile.publicURL'
  | 'playlist.coverart.localFile.childrenMdx'
  | 'playlist.coverart.localFile.childrenImageSharp'
  | 'playlist.coverart.localFile.childrenPagesJson'
  | 'playlist.coverart.localFile.id'
  | 'playlist.coverart.localFile.children'
  | 'playlist.coverart.spaceId'
  | 'playlist.coverart.createdAt'
  | 'playlist.coverart.updatedAt'
  | 'playlist.coverart.file.url'
  | 'playlist.coverart.file.fileName'
  | 'playlist.coverart.file.contentType'
  | 'playlist.coverart.title'
  | 'playlist.coverart.description'
  | 'playlist.coverart.node_locale'
  | 'playlist.coverart.sys.type'
  | 'playlist.coverart.sys.revision'
  | 'playlist.coverart.fields.localFile'
  | 'playlist.coverart.gatsbyImageData'
  | 'playlist.coverart.parent.id'
  | 'playlist.coverart.parent.children'
  | 'playlist.coverart.children'
  | 'playlist.coverart.children.id'
  | 'playlist.coverart.children.children'
  | 'playlist.coverart.internal.content'
  | 'playlist.coverart.internal.contentDigest'
  | 'playlist.coverart.internal.description'
  | 'playlist.coverart.internal.fieldOwners'
  | 'playlist.coverart.internal.ignoreType'
  | 'playlist.coverart.internal.mediaType'
  | 'playlist.coverart.internal.owner'
  | 'playlist.coverart.internal.type'
  | 'playlist.spaceId'
  | 'playlist.createdAt'
  | 'playlist.updatedAt'
  | 'playlist.sys.type'
  | 'playlist.sys.revision'
  | 'playlist.gatsbyPath'
  | 'playlist.parent.id'
  | 'playlist.parent.parent.id'
  | 'playlist.parent.parent.children'
  | 'playlist.parent.children'
  | 'playlist.parent.children.id'
  | 'playlist.parent.children.children'
  | 'playlist.parent.internal.content'
  | 'playlist.parent.internal.contentDigest'
  | 'playlist.parent.internal.description'
  | 'playlist.parent.internal.fieldOwners'
  | 'playlist.parent.internal.ignoreType'
  | 'playlist.parent.internal.mediaType'
  | 'playlist.parent.internal.owner'
  | 'playlist.parent.internal.type'
  | 'playlist.children'
  | 'playlist.children.id'
  | 'playlist.children.parent.id'
  | 'playlist.children.parent.children'
  | 'playlist.children.children'
  | 'playlist.children.children.id'
  | 'playlist.children.children.children'
  | 'playlist.children.internal.content'
  | 'playlist.children.internal.contentDigest'
  | 'playlist.children.internal.description'
  | 'playlist.children.internal.fieldOwners'
  | 'playlist.children.internal.ignoreType'
  | 'playlist.children.internal.mediaType'
  | 'playlist.children.internal.owner'
  | 'playlist.children.internal.type'
  | 'playlist.internal.content'
  | 'playlist.internal.contentDigest'
  | 'playlist.internal.description'
  | 'playlist.internal.fieldOwners'
  | 'playlist.internal.ignoreType'
  | 'playlist.internal.mediaType'
  | 'playlist.internal.owner'
  | 'playlist.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'lyrics.raw'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulSongGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulSongEdge>;
  readonly nodes: ReadonlyArray<ContentfulSong>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulSongGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulSongGroupConnection_distinctArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongGroupConnection_maxArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongGroupConnection_minArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongGroupConnection_sumArgs = {
  field: ContentfulSongFieldsEnum;
};


type ContentfulSongGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulSongFieldsEnum;
};

type ContentfulSongSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulSongFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter.title'
  | 'frontmatter.subtitle'
  | 'frontmatter.description'
  | 'frontmatter.slug'
  | 'frontmatter.prevlink'
  | 'frontmatter.prevtitle'
  | 'frontmatter.nextlink'
  | 'frontmatter.nexttitle'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings.value'
  | 'headings.depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MdxGroupConnection_distinctArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_maxArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_minArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_sumArgs = {
  field: MdxFieldsEnum;
};


type MdxGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMarkdownArticleContentTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMarkdownArticleContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMarkdownArticleContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMarkdownArticleContentTextNodeGroupConnection>;
};


type contentfulMarkdownArticleContentTextNodeConnection_distinctArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeConnection_maxArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeConnection_minArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeConnection_sumArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};

type contentfulMarkdownArticleContentTextNodeEdge = {
  readonly next: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly node: contentfulMarkdownArticleContentTextNode;
  readonly previous: Maybe<contentfulMarkdownArticleContentTextNode>;
};

type contentfulMarkdownArticleContentTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'content'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.subtitle'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.prevlink'
  | 'childrenMdx.frontmatter.prevtitle'
  | 'childrenMdx.frontmatter.nextlink'
  | 'childrenMdx.frontmatter.nexttitle'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.subtitle'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.prevlink'
  | 'childMdx.frontmatter.prevtitle'
  | 'childMdx.frontmatter.nextlink'
  | 'childMdx.frontmatter.nexttitle'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type';

type contentfulMarkdownArticleContentTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMarkdownArticleContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMarkdownArticleContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulMarkdownArticleContentTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulMarkdownArticleContentTextNodeGroupConnection_distinctArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeGroupConnection_maxArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeGroupConnection_minArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeGroupConnection_sumArgs = {
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};


type contentfulMarkdownArticleContentTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulMarkdownArticleContentTextNodeFieldsEnum;
};

type contentfulMarkdownArticleContentTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulMarkdownArticleContentTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorIntroductionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorIntroductionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorIntroductionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorIntroductionTextNodeGroupConnection>;
};


type contentfulAuthorIntroductionTextNodeConnection_distinctArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeConnection_maxArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeConnection_minArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeConnection_sumArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};

type contentfulAuthorIntroductionTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly node: contentfulAuthorIntroductionTextNode;
  readonly previous: Maybe<contentfulAuthorIntroductionTextNode>;
};

type contentfulAuthorIntroductionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'introduction'
  | 'sys.type'
  | 'childrenMdx'
  | 'childrenMdx.rawBody'
  | 'childrenMdx.fileAbsolutePath'
  | 'childrenMdx.frontmatter.title'
  | 'childrenMdx.frontmatter.subtitle'
  | 'childrenMdx.frontmatter.description'
  | 'childrenMdx.frontmatter.slug'
  | 'childrenMdx.frontmatter.prevlink'
  | 'childrenMdx.frontmatter.prevtitle'
  | 'childrenMdx.frontmatter.nextlink'
  | 'childrenMdx.frontmatter.nexttitle'
  | 'childrenMdx.slug'
  | 'childrenMdx.body'
  | 'childrenMdx.excerpt'
  | 'childrenMdx.headings'
  | 'childrenMdx.headings.value'
  | 'childrenMdx.headings.depth'
  | 'childrenMdx.html'
  | 'childrenMdx.mdxAST'
  | 'childrenMdx.tableOfContents'
  | 'childrenMdx.timeToRead'
  | 'childrenMdx.wordCount.paragraphs'
  | 'childrenMdx.wordCount.sentences'
  | 'childrenMdx.wordCount.words'
  | 'childrenMdx.id'
  | 'childrenMdx.parent.id'
  | 'childrenMdx.parent.parent.id'
  | 'childrenMdx.parent.parent.children'
  | 'childrenMdx.parent.children'
  | 'childrenMdx.parent.children.id'
  | 'childrenMdx.parent.children.children'
  | 'childrenMdx.parent.internal.content'
  | 'childrenMdx.parent.internal.contentDigest'
  | 'childrenMdx.parent.internal.description'
  | 'childrenMdx.parent.internal.fieldOwners'
  | 'childrenMdx.parent.internal.ignoreType'
  | 'childrenMdx.parent.internal.mediaType'
  | 'childrenMdx.parent.internal.owner'
  | 'childrenMdx.parent.internal.type'
  | 'childrenMdx.children'
  | 'childrenMdx.children.id'
  | 'childrenMdx.children.parent.id'
  | 'childrenMdx.children.parent.children'
  | 'childrenMdx.children.children'
  | 'childrenMdx.children.children.id'
  | 'childrenMdx.children.children.children'
  | 'childrenMdx.children.internal.content'
  | 'childrenMdx.children.internal.contentDigest'
  | 'childrenMdx.children.internal.description'
  | 'childrenMdx.children.internal.fieldOwners'
  | 'childrenMdx.children.internal.ignoreType'
  | 'childrenMdx.children.internal.mediaType'
  | 'childrenMdx.children.internal.owner'
  | 'childrenMdx.children.internal.type'
  | 'childrenMdx.internal.content'
  | 'childrenMdx.internal.contentDigest'
  | 'childrenMdx.internal.description'
  | 'childrenMdx.internal.fieldOwners'
  | 'childrenMdx.internal.ignoreType'
  | 'childrenMdx.internal.mediaType'
  | 'childrenMdx.internal.owner'
  | 'childrenMdx.internal.type'
  | 'childMdx.rawBody'
  | 'childMdx.fileAbsolutePath'
  | 'childMdx.frontmatter.title'
  | 'childMdx.frontmatter.subtitle'
  | 'childMdx.frontmatter.description'
  | 'childMdx.frontmatter.slug'
  | 'childMdx.frontmatter.prevlink'
  | 'childMdx.frontmatter.prevtitle'
  | 'childMdx.frontmatter.nextlink'
  | 'childMdx.frontmatter.nexttitle'
  | 'childMdx.slug'
  | 'childMdx.body'
  | 'childMdx.excerpt'
  | 'childMdx.headings'
  | 'childMdx.headings.value'
  | 'childMdx.headings.depth'
  | 'childMdx.html'
  | 'childMdx.mdxAST'
  | 'childMdx.tableOfContents'
  | 'childMdx.timeToRead'
  | 'childMdx.wordCount.paragraphs'
  | 'childMdx.wordCount.sentences'
  | 'childMdx.wordCount.words'
  | 'childMdx.id'
  | 'childMdx.parent.id'
  | 'childMdx.parent.parent.id'
  | 'childMdx.parent.parent.children'
  | 'childMdx.parent.children'
  | 'childMdx.parent.children.id'
  | 'childMdx.parent.children.children'
  | 'childMdx.parent.internal.content'
  | 'childMdx.parent.internal.contentDigest'
  | 'childMdx.parent.internal.description'
  | 'childMdx.parent.internal.fieldOwners'
  | 'childMdx.parent.internal.ignoreType'
  | 'childMdx.parent.internal.mediaType'
  | 'childMdx.parent.internal.owner'
  | 'childMdx.parent.internal.type'
  | 'childMdx.children'
  | 'childMdx.children.id'
  | 'childMdx.children.parent.id'
  | 'childMdx.children.parent.children'
  | 'childMdx.children.children'
  | 'childMdx.children.children.id'
  | 'childMdx.children.children.children'
  | 'childMdx.children.internal.content'
  | 'childMdx.children.internal.contentDigest'
  | 'childMdx.children.internal.description'
  | 'childMdx.children.internal.fieldOwners'
  | 'childMdx.children.internal.ignoreType'
  | 'childMdx.children.internal.mediaType'
  | 'childMdx.children.internal.owner'
  | 'childMdx.children.internal.type'
  | 'childMdx.internal.content'
  | 'childMdx.internal.contentDigest'
  | 'childMdx.internal.description'
  | 'childMdx.internal.fieldOwners'
  | 'childMdx.internal.ignoreType'
  | 'childMdx.internal.mediaType'
  | 'childMdx.internal.owner'
  | 'childMdx.internal.type';

type contentfulAuthorIntroductionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorIntroductionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorIntroductionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulAuthorIntroductionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulAuthorIntroductionTextNodeGroupConnection_distinctArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeGroupConnection_maxArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeGroupConnection_minArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeGroupConnection_sumArgs = {
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};


type contentfulAuthorIntroductionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorIntroductionTextNodeFieldsEnum;
};

type contentfulAuthorIntroductionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorIntroductionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PagesJsonEdge>;
  readonly nodes: ReadonlyArray<PagesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PagesJsonGroupConnection>;
};


type PagesJsonConnection_distinctArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonConnection_maxArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonConnection_minArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonConnection_sumArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PagesJsonFieldsEnum;
};

type PagesJsonEdge = {
  readonly next: Maybe<PagesJson>;
  readonly node: PagesJson;
  readonly previous: Maybe<PagesJson>;
};

type PagesJsonFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'path'
  | 'introduction'
  | 'image'
  | 'displayTitle'
  | 'title'
  | 'catchphrase';

type PagesJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PagesJsonEdge>;
  readonly nodes: ReadonlyArray<PagesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PagesJsonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PagesJsonGroupConnection_distinctArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonGroupConnection_maxArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonGroupConnection_minArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonGroupConnection_sumArgs = {
  field: PagesJsonFieldsEnum;
};


type PagesJsonGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PagesJsonFieldsEnum;
};

type PagesJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PagesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StaticImageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<StaticImageGroupConnection>;
};


type StaticImageConnection_distinctArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageConnection_maxArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageConnection_minArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageConnection_sumArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

type StaticImageEdge = {
  readonly next: Maybe<StaticImage>;
  readonly node: StaticImage;
  readonly previous: Maybe<StaticImage>;
};

type StaticImageFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'sourceInstanceName'
  | 'relativePath'
  | 'extension'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'absolutePath'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'rdev'
  | 'blksize'
  | 'ino'
  | 'size'
  | 'blocks'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'birthtimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime';

type StaticImageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<StaticImageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type StaticImageGroupConnection_distinctArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageGroupConnection_maxArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageGroupConnection_minArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageGroupConnection_sumArgs = {
  field: StaticImageFieldsEnum;
};


type StaticImageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

type StaticImageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<IntQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
};

type StaticImageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StaticImageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type ArticlesPageQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesPageQuery = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> }, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly home: Maybe<Pick<PagesJson, 'image' | 'catchphrase' | 'introduction'>>, readonly genki: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> }, readonly playlists: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPlaylist, 'id' | 'title' | 'slug'>
        & { albumPath: ContentfulPlaylist['gatsbyPath'] }
        & { readonly artists: Maybe<ReadonlyArray<Maybe<Pick<ContentfulAuthor, 'name'>>>>, readonly coverart: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> }
      ) }> } };

type PlaylistQueryVariables = Exact<{
  id: Maybe<Scalars['String']>;
}>;


type PlaylistQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly contentfulPlaylist: Maybe<(
    Pick<ContentfulPlaylist, 'id' | 'title' | 'slug'>
    & { readonly coverart: Maybe<{ readonly localFile: Maybe<Pick<File, 'publicURL'>> }>, readonly songs: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulSong, 'title' | 'duration'>
      & { readonly coverart: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>>, readonly sound: Maybe<{ readonly localFile: Maybe<Pick<File, 'publicURL'>> }>, readonly artist: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )>>>, readonly artists: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulAuthor, 'name'>
      & { readonly introduction: Maybe<Pick<contentfulAuthorIntroductionTextNode, 'introduction'>> }
    )>>> }
  )> };

type PlaylistIndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type PlaylistIndexPageQuery = { readonly playlists: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPlaylist, 'id' | 'title' | 'slug'>
        & { albumPath: ContentfulPlaylist['gatsbyPath'] }
        & { readonly artists: Maybe<ReadonlyArray<Maybe<Pick<ContentfulAuthor, 'name'>>>>, readonly coverart: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> }
      ) }> } };

type HorizontalArticleBySlugQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: Maybe<Scalars['String']>;
  nextPostId: Maybe<Scalars['String']>;
}>;


type HorizontalArticleBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly post: Maybe<(
    Pick<ContentfulMarkdownArticle, 'slug' | 'title' | 'disableSideHeader' | 'isVirticalWriting' | 'align' | 'updatedAt' | 'publishedAt'>
    & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body' | 'excerpt'>> }>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>>>, readonly featuredImage: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>, readonly author: Maybe<(
      Pick<ContentfulAuthor, 'name' | 'bandcamp' | 'instagram' | 'minnakikeru' | 'hatena' | 'linktree' | 'twitter' | 'youtube'>
      & { readonly introduction: Maybe<Pick<contentfulAuthorIntroductionTextNode, 'introduction'>> }
    )> }
  )>, readonly previous: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>> };

type VerticalArticleBySlugQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: Maybe<Scalars['String']>;
  nextPostId: Maybe<Scalars['String']>;
}>;


type VerticalArticleBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly contentfulMarkdownArticle: Maybe<(
    Pick<ContentfulMarkdownArticle, 'slug' | 'title' | 'disableSideHeader' | 'isVirticalWriting' | 'align' | 'updatedAt' | 'publishedAt'>
    & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body' | 'excerpt'>> }>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>>>, readonly featuredImage: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>, readonly author: Maybe<(
      Pick<ContentfulAuthor, 'name' | 'bandcamp' | 'instagram' | 'minnakikeru' | 'hatena' | 'linktree' | 'twitter' | 'youtube'>
      & { readonly introduction: Maybe<Pick<contentfulAuthorIntroductionTextNode, 'introduction'>> }
    )> }
  )>, readonly previous: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

}