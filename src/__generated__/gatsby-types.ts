/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
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
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
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

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly previousPostId: Maybe<Scalars['String']>;
  readonly nextPostId: Maybe<Scalars['String']>;
};

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
  AVIF = 'avif'
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageLayout {
  FIXED = 'fixed',
  FULL_WIDTH = 'fullWidth',
  CONSTRAINED = 'constrained'
}

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

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


enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

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
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly localFile: Maybe<File>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
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


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
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

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

enum ContentfulImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

enum ImageResizingBehavior {
  NO_CHANGE = '',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'pad',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'crop',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  FILL = 'fill',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'thumb',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'scale'
}

enum ContentfulImageCropFocus {
  TOP = 'top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM = 'bottom',
  BOTTOM_RIGHT = 'bottom_left',
  BOTTOM_LEFT = 'bottom_right',
  RIGHT = 'right',
  LEFT = 'left',
  FACE = 'face',
  FACES = 'faces',
  CENTER = 'center'
}

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

enum GatsbyImageLayout {
  FIXED = 'fixed',
  FULL_WIDTH = 'fullWidth',
  CONSTRAINED = 'constrained'
}

enum GatsbyImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulImageWithAiTags = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly imageTags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly image: Maybe<ContentfulAsset>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulImageWithAiTagsSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulImageWithAiTags_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulImageWithAiTags_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulImageWithAiTagsSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulImageWithAiTagsSysContentType>;
};

type ContentfulImageWithAiTagsSysContentType = {
  readonly sys: Maybe<ContentfulImageWithAiTagsSysContentTypeSys>;
};

type ContentfulImageWithAiTagsSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly instagram: Maybe<Scalars['String']>;
  readonly markdownarticle: Maybe<ReadonlyArray<Maybe<ContentfulMarkdownArticle>>>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
  readonly linktree: Maybe<Scalars['String']>;
  readonly minnakikeru: Maybe<Scalars['String']>;
  readonly hatena: Maybe<Scalars['String']>;
  readonly bandcamp: Maybe<Scalars['String']>;
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

type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

type MdxHeadingMdx = {
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

enum HeadingsMdx {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

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

type PagesJson = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly path: Maybe<Scalars['String']>;
  readonly catchphrase: Maybe<Scalars['String']>;
  readonly introduction: Maybe<Scalars['String']>;
  readonly image: Maybe<Scalars['String']>;
  readonly displayTitle: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly displayName: Maybe<Scalars['Boolean']>;
  readonly fileName: Maybe<Scalars['Boolean']>;
  readonly minify: Maybe<Scalars['Boolean']>;
  readonly namespace: Maybe<Scalars['String']>;
  readonly transpileTemplateLiterals: Maybe<Scalars['Boolean']>;
  readonly pure: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly enabled: Maybe<Scalars['Boolean']>;
  readonly includeInDevelopment: Maybe<Scalars['Boolean']>;
  readonly delayTimeout: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly host: Maybe<Scalars['String']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lessBabel: Maybe<Scalars['Boolean']>;
  readonly mediaTypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly root: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly titleTemplate: Maybe<Scalars['String']>;
  readonly language: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraph>;
  readonly twitter: Maybe<SitePluginPluginOptionsTwitter>;
  readonly facebook: Maybe<SitePluginPluginOptionsFacebook>;
  readonly color: Maybe<Scalars['String']>;
  readonly precachePages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly background: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsOpenGraph = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly site_name: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsOpenGraphImages>>>;
};

type SitePluginPluginOptionsOpenGraphImages = {
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly alt: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsTwitter = {
  readonly handle: Maybe<Scalars['String']>;
  readonly site: Maybe<Scalars['String']>;
  readonly cardType: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFacebook = {
  readonly appId: Maybe<Scalars['Float']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulImageWithAiTags: Maybe<ContentfulImageWithAiTags>;
  readonly allContentfulImageWithAiTags: ContentfulImageWithAiTagsConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulMarkdownArticle: Maybe<ContentfulMarkdownArticle>;
  readonly allContentfulMarkdownArticle: ContentfulMarkdownArticleConnection;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: MdxConnection;
  readonly contentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly allContentfulMarkdownArticleContentTextNode: contentfulMarkdownArticleContentTextNodeConnection;
  readonly contentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly allContentfulAuthorIntroductionTextNode: contentfulAuthorIntroductionTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly pagesJson: Maybe<PagesJson>;
  readonly allPagesJson: PagesJsonConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
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
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
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
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
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


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
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
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  localFile: Maybe<FileFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
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


type Query_contentfulImageWithAiTagsArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  imageTags: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulImageWithAiTagsSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulImageWithAiTagsArgs = {
  filter: Maybe<ContentfulImageWithAiTagsFilterInput>;
  sort: Maybe<ContentfulImageWithAiTagsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  instagram: Maybe<StringQueryOperatorInput>;
  markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
  introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  youtube: Maybe<StringQueryOperatorInput>;
  linktree: Maybe<StringQueryOperatorInput>;
  minnakikeru: Maybe<StringQueryOperatorInput>;
  hatena: Maybe<StringQueryOperatorInput>;
  bandcamp: Maybe<StringQueryOperatorInput>;
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


type Query_pagesJsonArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  catchphrase: Maybe<StringQueryOperatorInput>;
  introduction: Maybe<StringQueryOperatorInput>;
  image: Maybe<StringQueryOperatorInput>;
  displayTitle: Maybe<BooleanQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
};


type Query_allPagesJsonArgs = {
  filter: Maybe<PagesJsonFilterInput>;
  sort: Maybe<PagesJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
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

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
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

type PagesJsonFilterListInput = {
  readonly elemMatch: Maybe<PagesJsonFilterInput>;
};

type PagesJsonFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly catchphrase: Maybe<StringQueryOperatorInput>;
  readonly introduction: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<StringQueryOperatorInput>;
  readonly displayTitle: Maybe<BooleanQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
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

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  url = 'url',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp.fixed.base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp.fixed.tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp.fixed.aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp.fixed.width',
  childrenImageSharp___fixed___height = 'childrenImageSharp.fixed.height',
  childrenImageSharp___fixed___src = 'childrenImageSharp.fixed.src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp.fixed.srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp.fixed.srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp.fixed.srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp.fixed.originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp.fluid.base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp.fluid.tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp.fluid.aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp.fluid.src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp.fluid.srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp.fluid.srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp.fluid.srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp.fluid.sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp.fluid.originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp.fluid.originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp.fluid.presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp.fluid.presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp.gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp.original.width',
  childrenImageSharp___original___height = 'childrenImageSharp.original.height',
  childrenImageSharp___original___src = 'childrenImageSharp.original.src',
  childrenImageSharp___resize___src = 'childrenImageSharp.resize.src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp.resize.tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp.resize.width',
  childrenImageSharp___resize___height = 'childrenImageSharp.resize.height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp.resize.aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp.resize.originalName',
  childrenImageSharp___id = 'childrenImageSharp.id',
  childrenImageSharp___parent___id = 'childrenImageSharp.parent.id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp.parent.parent.id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp.parent.parent.children',
  childrenImageSharp___parent___children = 'childrenImageSharp.parent.children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp.parent.children.id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp.parent.children.children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp.parent.internal.content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp.parent.internal.contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp.parent.internal.description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp.parent.internal.fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp.parent.internal.ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp.parent.internal.mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp.parent.internal.owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp.parent.internal.type',
  childrenImageSharp___children = 'childrenImageSharp.children',
  childrenImageSharp___children___id = 'childrenImageSharp.children.id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp.children.parent.id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp.children.parent.children',
  childrenImageSharp___children___children = 'childrenImageSharp.children.children',
  childrenImageSharp___children___children___id = 'childrenImageSharp.children.children.id',
  childrenImageSharp___children___children___children = 'childrenImageSharp.children.children.children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp.children.internal.content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp.children.internal.contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp.children.internal.description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp.children.internal.fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp.children.internal.ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp.children.internal.mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp.children.internal.owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp.children.internal.type',
  childrenImageSharp___internal___content = 'childrenImageSharp.internal.content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp.internal.contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp.internal.description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp.internal.fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp.internal.ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp.internal.mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp.internal.owner',
  childrenImageSharp___internal___type = 'childrenImageSharp.internal.type',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  childrenPagesJson = 'childrenPagesJson',
  childrenPagesJson___id = 'childrenPagesJson.id',
  childrenPagesJson___parent___id = 'childrenPagesJson.parent.id',
  childrenPagesJson___parent___parent___id = 'childrenPagesJson.parent.parent.id',
  childrenPagesJson___parent___parent___children = 'childrenPagesJson.parent.parent.children',
  childrenPagesJson___parent___children = 'childrenPagesJson.parent.children',
  childrenPagesJson___parent___children___id = 'childrenPagesJson.parent.children.id',
  childrenPagesJson___parent___children___children = 'childrenPagesJson.parent.children.children',
  childrenPagesJson___parent___internal___content = 'childrenPagesJson.parent.internal.content',
  childrenPagesJson___parent___internal___contentDigest = 'childrenPagesJson.parent.internal.contentDigest',
  childrenPagesJson___parent___internal___description = 'childrenPagesJson.parent.internal.description',
  childrenPagesJson___parent___internal___fieldOwners = 'childrenPagesJson.parent.internal.fieldOwners',
  childrenPagesJson___parent___internal___ignoreType = 'childrenPagesJson.parent.internal.ignoreType',
  childrenPagesJson___parent___internal___mediaType = 'childrenPagesJson.parent.internal.mediaType',
  childrenPagesJson___parent___internal___owner = 'childrenPagesJson.parent.internal.owner',
  childrenPagesJson___parent___internal___type = 'childrenPagesJson.parent.internal.type',
  childrenPagesJson___children = 'childrenPagesJson.children',
  childrenPagesJson___children___id = 'childrenPagesJson.children.id',
  childrenPagesJson___children___parent___id = 'childrenPagesJson.children.parent.id',
  childrenPagesJson___children___parent___children = 'childrenPagesJson.children.parent.children',
  childrenPagesJson___children___children = 'childrenPagesJson.children.children',
  childrenPagesJson___children___children___id = 'childrenPagesJson.children.children.id',
  childrenPagesJson___children___children___children = 'childrenPagesJson.children.children.children',
  childrenPagesJson___children___internal___content = 'childrenPagesJson.children.internal.content',
  childrenPagesJson___children___internal___contentDigest = 'childrenPagesJson.children.internal.contentDigest',
  childrenPagesJson___children___internal___description = 'childrenPagesJson.children.internal.description',
  childrenPagesJson___children___internal___fieldOwners = 'childrenPagesJson.children.internal.fieldOwners',
  childrenPagesJson___children___internal___ignoreType = 'childrenPagesJson.children.internal.ignoreType',
  childrenPagesJson___children___internal___mediaType = 'childrenPagesJson.children.internal.mediaType',
  childrenPagesJson___children___internal___owner = 'childrenPagesJson.children.internal.owner',
  childrenPagesJson___children___internal___type = 'childrenPagesJson.children.internal.type',
  childrenPagesJson___internal___content = 'childrenPagesJson.internal.content',
  childrenPagesJson___internal___contentDigest = 'childrenPagesJson.internal.contentDigest',
  childrenPagesJson___internal___description = 'childrenPagesJson.internal.description',
  childrenPagesJson___internal___fieldOwners = 'childrenPagesJson.internal.fieldOwners',
  childrenPagesJson___internal___ignoreType = 'childrenPagesJson.internal.ignoreType',
  childrenPagesJson___internal___mediaType = 'childrenPagesJson.internal.mediaType',
  childrenPagesJson___internal___owner = 'childrenPagesJson.internal.owner',
  childrenPagesJson___internal___type = 'childrenPagesJson.internal.type',
  childrenPagesJson___path = 'childrenPagesJson.path',
  childrenPagesJson___catchphrase = 'childrenPagesJson.catchphrase',
  childrenPagesJson___introduction = 'childrenPagesJson.introduction',
  childrenPagesJson___image = 'childrenPagesJson.image',
  childrenPagesJson___displayTitle = 'childrenPagesJson.displayTitle',
  childrenPagesJson___title = 'childrenPagesJson.title',
  childPagesJson___id = 'childPagesJson.id',
  childPagesJson___parent___id = 'childPagesJson.parent.id',
  childPagesJson___parent___parent___id = 'childPagesJson.parent.parent.id',
  childPagesJson___parent___parent___children = 'childPagesJson.parent.parent.children',
  childPagesJson___parent___children = 'childPagesJson.parent.children',
  childPagesJson___parent___children___id = 'childPagesJson.parent.children.id',
  childPagesJson___parent___children___children = 'childPagesJson.parent.children.children',
  childPagesJson___parent___internal___content = 'childPagesJson.parent.internal.content',
  childPagesJson___parent___internal___contentDigest = 'childPagesJson.parent.internal.contentDigest',
  childPagesJson___parent___internal___description = 'childPagesJson.parent.internal.description',
  childPagesJson___parent___internal___fieldOwners = 'childPagesJson.parent.internal.fieldOwners',
  childPagesJson___parent___internal___ignoreType = 'childPagesJson.parent.internal.ignoreType',
  childPagesJson___parent___internal___mediaType = 'childPagesJson.parent.internal.mediaType',
  childPagesJson___parent___internal___owner = 'childPagesJson.parent.internal.owner',
  childPagesJson___parent___internal___type = 'childPagesJson.parent.internal.type',
  childPagesJson___children = 'childPagesJson.children',
  childPagesJson___children___id = 'childPagesJson.children.id',
  childPagesJson___children___parent___id = 'childPagesJson.children.parent.id',
  childPagesJson___children___parent___children = 'childPagesJson.children.parent.children',
  childPagesJson___children___children = 'childPagesJson.children.children',
  childPagesJson___children___children___id = 'childPagesJson.children.children.id',
  childPagesJson___children___children___children = 'childPagesJson.children.children.children',
  childPagesJson___children___internal___content = 'childPagesJson.children.internal.content',
  childPagesJson___children___internal___contentDigest = 'childPagesJson.children.internal.contentDigest',
  childPagesJson___children___internal___description = 'childPagesJson.children.internal.description',
  childPagesJson___children___internal___fieldOwners = 'childPagesJson.children.internal.fieldOwners',
  childPagesJson___children___internal___ignoreType = 'childPagesJson.children.internal.ignoreType',
  childPagesJson___children___internal___mediaType = 'childPagesJson.children.internal.mediaType',
  childPagesJson___children___internal___owner = 'childPagesJson.children.internal.owner',
  childPagesJson___children___internal___type = 'childPagesJson.children.internal.type',
  childPagesJson___internal___content = 'childPagesJson.internal.content',
  childPagesJson___internal___contentDigest = 'childPagesJson.internal.contentDigest',
  childPagesJson___internal___description = 'childPagesJson.internal.description',
  childPagesJson___internal___fieldOwners = 'childPagesJson.internal.fieldOwners',
  childPagesJson___internal___ignoreType = 'childPagesJson.internal.ignoreType',
  childPagesJson___internal___mediaType = 'childPagesJson.internal.mediaType',
  childPagesJson___internal___owner = 'childPagesJson.internal.owner',
  childPagesJson___internal___type = 'childPagesJson.internal.type',
  childPagesJson___path = 'childPagesJson.path',
  childPagesJson___catchphrase = 'childPagesJson.catchphrase',
  childPagesJson___introduction = 'childPagesJson.introduction',
  childPagesJson___image = 'childPagesJson.image',
  childPagesJson___displayTitle = 'childPagesJson.displayTitle',
  childPagesJson___title = 'childPagesJson.title',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
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

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
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
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
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

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  siteMetadata___author___name = 'siteMetadata.author.name',
  siteMetadata___author___summary = 'siteMetadata.author.summary',
  siteMetadata___social___twitter = 'siteMetadata.social.twitter',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
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

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
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

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
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

enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
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

enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file.url',
  file___details___size = 'file.details.size',
  file___details___image___width = 'file.details.image.width',
  file___details___image___height = 'file.details.image.height',
  file___fileName = 'file.fileName',
  file___contentType = 'file.contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  localFile___sourceInstanceName = 'localFile.sourceInstanceName',
  localFile___absolutePath = 'localFile.absolutePath',
  localFile___relativePath = 'localFile.relativePath',
  localFile___extension = 'localFile.extension',
  localFile___size = 'localFile.size',
  localFile___prettySize = 'localFile.prettySize',
  localFile___modifiedTime = 'localFile.modifiedTime',
  localFile___accessTime = 'localFile.accessTime',
  localFile___changeTime = 'localFile.changeTime',
  localFile___birthTime = 'localFile.birthTime',
  localFile___root = 'localFile.root',
  localFile___dir = 'localFile.dir',
  localFile___base = 'localFile.base',
  localFile___ext = 'localFile.ext',
  localFile___name = 'localFile.name',
  localFile___relativeDirectory = 'localFile.relativeDirectory',
  localFile___dev = 'localFile.dev',
  localFile___mode = 'localFile.mode',
  localFile___nlink = 'localFile.nlink',
  localFile___uid = 'localFile.uid',
  localFile___gid = 'localFile.gid',
  localFile___rdev = 'localFile.rdev',
  localFile___ino = 'localFile.ino',
  localFile___atimeMs = 'localFile.atimeMs',
  localFile___mtimeMs = 'localFile.mtimeMs',
  localFile___ctimeMs = 'localFile.ctimeMs',
  localFile___atime = 'localFile.atime',
  localFile___mtime = 'localFile.mtime',
  localFile___ctime = 'localFile.ctime',
  localFile___birthtime = 'localFile.birthtime',
  localFile___birthtimeMs = 'localFile.birthtimeMs',
  localFile___blksize = 'localFile.blksize',
  localFile___blocks = 'localFile.blocks',
  localFile___url = 'localFile.url',
  localFile___publicURL = 'localFile.publicURL',
  localFile___childrenImageSharp = 'localFile.childrenImageSharp',
  localFile___childrenImageSharp___fixed___base64 = 'localFile.childrenImageSharp.fixed.base64',
  localFile___childrenImageSharp___fixed___tracedSVG = 'localFile.childrenImageSharp.fixed.tracedSVG',
  localFile___childrenImageSharp___fixed___aspectRatio = 'localFile.childrenImageSharp.fixed.aspectRatio',
  localFile___childrenImageSharp___fixed___width = 'localFile.childrenImageSharp.fixed.width',
  localFile___childrenImageSharp___fixed___height = 'localFile.childrenImageSharp.fixed.height',
  localFile___childrenImageSharp___fixed___src = 'localFile.childrenImageSharp.fixed.src',
  localFile___childrenImageSharp___fixed___srcSet = 'localFile.childrenImageSharp.fixed.srcSet',
  localFile___childrenImageSharp___fixed___srcWebp = 'localFile.childrenImageSharp.fixed.srcWebp',
  localFile___childrenImageSharp___fixed___srcSetWebp = 'localFile.childrenImageSharp.fixed.srcSetWebp',
  localFile___childrenImageSharp___fixed___originalName = 'localFile.childrenImageSharp.fixed.originalName',
  localFile___childrenImageSharp___fluid___base64 = 'localFile.childrenImageSharp.fluid.base64',
  localFile___childrenImageSharp___fluid___tracedSVG = 'localFile.childrenImageSharp.fluid.tracedSVG',
  localFile___childrenImageSharp___fluid___aspectRatio = 'localFile.childrenImageSharp.fluid.aspectRatio',
  localFile___childrenImageSharp___fluid___src = 'localFile.childrenImageSharp.fluid.src',
  localFile___childrenImageSharp___fluid___srcSet = 'localFile.childrenImageSharp.fluid.srcSet',
  localFile___childrenImageSharp___fluid___srcWebp = 'localFile.childrenImageSharp.fluid.srcWebp',
  localFile___childrenImageSharp___fluid___srcSetWebp = 'localFile.childrenImageSharp.fluid.srcSetWebp',
  localFile___childrenImageSharp___fluid___sizes = 'localFile.childrenImageSharp.fluid.sizes',
  localFile___childrenImageSharp___fluid___originalImg = 'localFile.childrenImageSharp.fluid.originalImg',
  localFile___childrenImageSharp___fluid___originalName = 'localFile.childrenImageSharp.fluid.originalName',
  localFile___childrenImageSharp___fluid___presentationWidth = 'localFile.childrenImageSharp.fluid.presentationWidth',
  localFile___childrenImageSharp___fluid___presentationHeight = 'localFile.childrenImageSharp.fluid.presentationHeight',
  localFile___childrenImageSharp___gatsbyImageData = 'localFile.childrenImageSharp.gatsbyImageData',
  localFile___childrenImageSharp___original___width = 'localFile.childrenImageSharp.original.width',
  localFile___childrenImageSharp___original___height = 'localFile.childrenImageSharp.original.height',
  localFile___childrenImageSharp___original___src = 'localFile.childrenImageSharp.original.src',
  localFile___childrenImageSharp___resize___src = 'localFile.childrenImageSharp.resize.src',
  localFile___childrenImageSharp___resize___tracedSVG = 'localFile.childrenImageSharp.resize.tracedSVG',
  localFile___childrenImageSharp___resize___width = 'localFile.childrenImageSharp.resize.width',
  localFile___childrenImageSharp___resize___height = 'localFile.childrenImageSharp.resize.height',
  localFile___childrenImageSharp___resize___aspectRatio = 'localFile.childrenImageSharp.resize.aspectRatio',
  localFile___childrenImageSharp___resize___originalName = 'localFile.childrenImageSharp.resize.originalName',
  localFile___childrenImageSharp___id = 'localFile.childrenImageSharp.id',
  localFile___childrenImageSharp___parent___id = 'localFile.childrenImageSharp.parent.id',
  localFile___childrenImageSharp___parent___children = 'localFile.childrenImageSharp.parent.children',
  localFile___childrenImageSharp___children = 'localFile.childrenImageSharp.children',
  localFile___childrenImageSharp___children___id = 'localFile.childrenImageSharp.children.id',
  localFile___childrenImageSharp___children___children = 'localFile.childrenImageSharp.children.children',
  localFile___childrenImageSharp___internal___content = 'localFile.childrenImageSharp.internal.content',
  localFile___childrenImageSharp___internal___contentDigest = 'localFile.childrenImageSharp.internal.contentDigest',
  localFile___childrenImageSharp___internal___description = 'localFile.childrenImageSharp.internal.description',
  localFile___childrenImageSharp___internal___fieldOwners = 'localFile.childrenImageSharp.internal.fieldOwners',
  localFile___childrenImageSharp___internal___ignoreType = 'localFile.childrenImageSharp.internal.ignoreType',
  localFile___childrenImageSharp___internal___mediaType = 'localFile.childrenImageSharp.internal.mediaType',
  localFile___childrenImageSharp___internal___owner = 'localFile.childrenImageSharp.internal.owner',
  localFile___childrenImageSharp___internal___type = 'localFile.childrenImageSharp.internal.type',
  localFile___childImageSharp___fixed___base64 = 'localFile.childImageSharp.fixed.base64',
  localFile___childImageSharp___fixed___tracedSVG = 'localFile.childImageSharp.fixed.tracedSVG',
  localFile___childImageSharp___fixed___aspectRatio = 'localFile.childImageSharp.fixed.aspectRatio',
  localFile___childImageSharp___fixed___width = 'localFile.childImageSharp.fixed.width',
  localFile___childImageSharp___fixed___height = 'localFile.childImageSharp.fixed.height',
  localFile___childImageSharp___fixed___src = 'localFile.childImageSharp.fixed.src',
  localFile___childImageSharp___fixed___srcSet = 'localFile.childImageSharp.fixed.srcSet',
  localFile___childImageSharp___fixed___srcWebp = 'localFile.childImageSharp.fixed.srcWebp',
  localFile___childImageSharp___fixed___srcSetWebp = 'localFile.childImageSharp.fixed.srcSetWebp',
  localFile___childImageSharp___fixed___originalName = 'localFile.childImageSharp.fixed.originalName',
  localFile___childImageSharp___fluid___base64 = 'localFile.childImageSharp.fluid.base64',
  localFile___childImageSharp___fluid___tracedSVG = 'localFile.childImageSharp.fluid.tracedSVG',
  localFile___childImageSharp___fluid___aspectRatio = 'localFile.childImageSharp.fluid.aspectRatio',
  localFile___childImageSharp___fluid___src = 'localFile.childImageSharp.fluid.src',
  localFile___childImageSharp___fluid___srcSet = 'localFile.childImageSharp.fluid.srcSet',
  localFile___childImageSharp___fluid___srcWebp = 'localFile.childImageSharp.fluid.srcWebp',
  localFile___childImageSharp___fluid___srcSetWebp = 'localFile.childImageSharp.fluid.srcSetWebp',
  localFile___childImageSharp___fluid___sizes = 'localFile.childImageSharp.fluid.sizes',
  localFile___childImageSharp___fluid___originalImg = 'localFile.childImageSharp.fluid.originalImg',
  localFile___childImageSharp___fluid___originalName = 'localFile.childImageSharp.fluid.originalName',
  localFile___childImageSharp___fluid___presentationWidth = 'localFile.childImageSharp.fluid.presentationWidth',
  localFile___childImageSharp___fluid___presentationHeight = 'localFile.childImageSharp.fluid.presentationHeight',
  localFile___childImageSharp___gatsbyImageData = 'localFile.childImageSharp.gatsbyImageData',
  localFile___childImageSharp___original___width = 'localFile.childImageSharp.original.width',
  localFile___childImageSharp___original___height = 'localFile.childImageSharp.original.height',
  localFile___childImageSharp___original___src = 'localFile.childImageSharp.original.src',
  localFile___childImageSharp___resize___src = 'localFile.childImageSharp.resize.src',
  localFile___childImageSharp___resize___tracedSVG = 'localFile.childImageSharp.resize.tracedSVG',
  localFile___childImageSharp___resize___width = 'localFile.childImageSharp.resize.width',
  localFile___childImageSharp___resize___height = 'localFile.childImageSharp.resize.height',
  localFile___childImageSharp___resize___aspectRatio = 'localFile.childImageSharp.resize.aspectRatio',
  localFile___childImageSharp___resize___originalName = 'localFile.childImageSharp.resize.originalName',
  localFile___childImageSharp___id = 'localFile.childImageSharp.id',
  localFile___childImageSharp___parent___id = 'localFile.childImageSharp.parent.id',
  localFile___childImageSharp___parent___children = 'localFile.childImageSharp.parent.children',
  localFile___childImageSharp___children = 'localFile.childImageSharp.children',
  localFile___childImageSharp___children___id = 'localFile.childImageSharp.children.id',
  localFile___childImageSharp___children___children = 'localFile.childImageSharp.children.children',
  localFile___childImageSharp___internal___content = 'localFile.childImageSharp.internal.content',
  localFile___childImageSharp___internal___contentDigest = 'localFile.childImageSharp.internal.contentDigest',
  localFile___childImageSharp___internal___description = 'localFile.childImageSharp.internal.description',
  localFile___childImageSharp___internal___fieldOwners = 'localFile.childImageSharp.internal.fieldOwners',
  localFile___childImageSharp___internal___ignoreType = 'localFile.childImageSharp.internal.ignoreType',
  localFile___childImageSharp___internal___mediaType = 'localFile.childImageSharp.internal.mediaType',
  localFile___childImageSharp___internal___owner = 'localFile.childImageSharp.internal.owner',
  localFile___childImageSharp___internal___type = 'localFile.childImageSharp.internal.type',
  localFile___childrenPagesJson = 'localFile.childrenPagesJson',
  localFile___childrenPagesJson___id = 'localFile.childrenPagesJson.id',
  localFile___childrenPagesJson___parent___id = 'localFile.childrenPagesJson.parent.id',
  localFile___childrenPagesJson___parent___children = 'localFile.childrenPagesJson.parent.children',
  localFile___childrenPagesJson___children = 'localFile.childrenPagesJson.children',
  localFile___childrenPagesJson___children___id = 'localFile.childrenPagesJson.children.id',
  localFile___childrenPagesJson___children___children = 'localFile.childrenPagesJson.children.children',
  localFile___childrenPagesJson___internal___content = 'localFile.childrenPagesJson.internal.content',
  localFile___childrenPagesJson___internal___contentDigest = 'localFile.childrenPagesJson.internal.contentDigest',
  localFile___childrenPagesJson___internal___description = 'localFile.childrenPagesJson.internal.description',
  localFile___childrenPagesJson___internal___fieldOwners = 'localFile.childrenPagesJson.internal.fieldOwners',
  localFile___childrenPagesJson___internal___ignoreType = 'localFile.childrenPagesJson.internal.ignoreType',
  localFile___childrenPagesJson___internal___mediaType = 'localFile.childrenPagesJson.internal.mediaType',
  localFile___childrenPagesJson___internal___owner = 'localFile.childrenPagesJson.internal.owner',
  localFile___childrenPagesJson___internal___type = 'localFile.childrenPagesJson.internal.type',
  localFile___childrenPagesJson___path = 'localFile.childrenPagesJson.path',
  localFile___childrenPagesJson___catchphrase = 'localFile.childrenPagesJson.catchphrase',
  localFile___childrenPagesJson___introduction = 'localFile.childrenPagesJson.introduction',
  localFile___childrenPagesJson___image = 'localFile.childrenPagesJson.image',
  localFile___childrenPagesJson___displayTitle = 'localFile.childrenPagesJson.displayTitle',
  localFile___childrenPagesJson___title = 'localFile.childrenPagesJson.title',
  localFile___childPagesJson___id = 'localFile.childPagesJson.id',
  localFile___childPagesJson___parent___id = 'localFile.childPagesJson.parent.id',
  localFile___childPagesJson___parent___children = 'localFile.childPagesJson.parent.children',
  localFile___childPagesJson___children = 'localFile.childPagesJson.children',
  localFile___childPagesJson___children___id = 'localFile.childPagesJson.children.id',
  localFile___childPagesJson___children___children = 'localFile.childPagesJson.children.children',
  localFile___childPagesJson___internal___content = 'localFile.childPagesJson.internal.content',
  localFile___childPagesJson___internal___contentDigest = 'localFile.childPagesJson.internal.contentDigest',
  localFile___childPagesJson___internal___description = 'localFile.childPagesJson.internal.description',
  localFile___childPagesJson___internal___fieldOwners = 'localFile.childPagesJson.internal.fieldOwners',
  localFile___childPagesJson___internal___ignoreType = 'localFile.childPagesJson.internal.ignoreType',
  localFile___childPagesJson___internal___mediaType = 'localFile.childPagesJson.internal.mediaType',
  localFile___childPagesJson___internal___owner = 'localFile.childPagesJson.internal.owner',
  localFile___childPagesJson___internal___type = 'localFile.childPagesJson.internal.type',
  localFile___childPagesJson___path = 'localFile.childPagesJson.path',
  localFile___childPagesJson___catchphrase = 'localFile.childPagesJson.catchphrase',
  localFile___childPagesJson___introduction = 'localFile.childPagesJson.introduction',
  localFile___childPagesJson___image = 'localFile.childPagesJson.image',
  localFile___childPagesJson___displayTitle = 'localFile.childPagesJson.displayTitle',
  localFile___childPagesJson___title = 'localFile.childPagesJson.title',
  localFile___id = 'localFile.id',
  localFile___parent___id = 'localFile.parent.id',
  localFile___parent___parent___id = 'localFile.parent.parent.id',
  localFile___parent___parent___children = 'localFile.parent.parent.children',
  localFile___parent___children = 'localFile.parent.children',
  localFile___parent___children___id = 'localFile.parent.children.id',
  localFile___parent___children___children = 'localFile.parent.children.children',
  localFile___parent___internal___content = 'localFile.parent.internal.content',
  localFile___parent___internal___contentDigest = 'localFile.parent.internal.contentDigest',
  localFile___parent___internal___description = 'localFile.parent.internal.description',
  localFile___parent___internal___fieldOwners = 'localFile.parent.internal.fieldOwners',
  localFile___parent___internal___ignoreType = 'localFile.parent.internal.ignoreType',
  localFile___parent___internal___mediaType = 'localFile.parent.internal.mediaType',
  localFile___parent___internal___owner = 'localFile.parent.internal.owner',
  localFile___parent___internal___type = 'localFile.parent.internal.type',
  localFile___children = 'localFile.children',
  localFile___children___id = 'localFile.children.id',
  localFile___children___parent___id = 'localFile.children.parent.id',
  localFile___children___parent___children = 'localFile.children.parent.children',
  localFile___children___children = 'localFile.children.children',
  localFile___children___children___id = 'localFile.children.children.id',
  localFile___children___children___children = 'localFile.children.children.children',
  localFile___children___internal___content = 'localFile.children.internal.content',
  localFile___children___internal___contentDigest = 'localFile.children.internal.contentDigest',
  localFile___children___internal___description = 'localFile.children.internal.description',
  localFile___children___internal___fieldOwners = 'localFile.children.internal.fieldOwners',
  localFile___children___internal___ignoreType = 'localFile.children.internal.ignoreType',
  localFile___children___internal___mediaType = 'localFile.children.internal.mediaType',
  localFile___children___internal___owner = 'localFile.children.internal.owner',
  localFile___children___internal___type = 'localFile.children.internal.type',
  localFile___internal___content = 'localFile.internal.content',
  localFile___internal___contentDigest = 'localFile.internal.contentDigest',
  localFile___internal___description = 'localFile.internal.description',
  localFile___internal___fieldOwners = 'localFile.internal.fieldOwners',
  localFile___internal___ignoreType = 'localFile.internal.ignoreType',
  localFile___internal___mediaType = 'localFile.internal.mediaType',
  localFile___internal___owner = 'localFile.internal.owner',
  localFile___internal___type = 'localFile.internal.type',
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  gatsbyImageData = 'gatsbyImageData',
  resize___base64 = 'resize.base64',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___src = 'resize.src',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulImageWithAiTagsSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulImageWithAiTagsSysContentTypeFilterInput>;
};

type ContentfulImageWithAiTagsSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulImageWithAiTagsSysContentTypeSysFilterInput>;
};

type ContentfulImageWithAiTagsSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulImageWithAiTagsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulImageWithAiTagsEdge>;
  readonly nodes: ReadonlyArray<ContentfulImageWithAiTags>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulImageWithAiTagsGroupConnection>;
};


type ContentfulImageWithAiTagsConnection_distinctArgs = {
  field: ContentfulImageWithAiTagsFieldsEnum;
};


type ContentfulImageWithAiTagsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulImageWithAiTagsFieldsEnum;
};

type ContentfulImageWithAiTagsEdge = {
  readonly next: Maybe<ContentfulImageWithAiTags>;
  readonly node: ContentfulImageWithAiTags;
  readonly previous: Maybe<ContentfulImageWithAiTags>;
};

enum ContentfulImageWithAiTagsFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  imageTags = 'imageTags',
  image___contentful_id = 'image.contentful_id',
  image___id = 'image.id',
  image___spaceId = 'image.spaceId',
  image___createdAt = 'image.createdAt',
  image___updatedAt = 'image.updatedAt',
  image___file___url = 'image.file.url',
  image___file___details___size = 'image.file.details.size',
  image___file___fileName = 'image.file.fileName',
  image___file___contentType = 'image.file.contentType',
  image___title = 'image.title',
  image___description = 'image.description',
  image___node_locale = 'image.node_locale',
  image___sys___type = 'image.sys.type',
  image___sys___revision = 'image.sys.revision',
  image___localFile___sourceInstanceName = 'image.localFile.sourceInstanceName',
  image___localFile___absolutePath = 'image.localFile.absolutePath',
  image___localFile___relativePath = 'image.localFile.relativePath',
  image___localFile___extension = 'image.localFile.extension',
  image___localFile___size = 'image.localFile.size',
  image___localFile___prettySize = 'image.localFile.prettySize',
  image___localFile___modifiedTime = 'image.localFile.modifiedTime',
  image___localFile___accessTime = 'image.localFile.accessTime',
  image___localFile___changeTime = 'image.localFile.changeTime',
  image___localFile___birthTime = 'image.localFile.birthTime',
  image___localFile___root = 'image.localFile.root',
  image___localFile___dir = 'image.localFile.dir',
  image___localFile___base = 'image.localFile.base',
  image___localFile___ext = 'image.localFile.ext',
  image___localFile___name = 'image.localFile.name',
  image___localFile___relativeDirectory = 'image.localFile.relativeDirectory',
  image___localFile___dev = 'image.localFile.dev',
  image___localFile___mode = 'image.localFile.mode',
  image___localFile___nlink = 'image.localFile.nlink',
  image___localFile___uid = 'image.localFile.uid',
  image___localFile___gid = 'image.localFile.gid',
  image___localFile___rdev = 'image.localFile.rdev',
  image___localFile___ino = 'image.localFile.ino',
  image___localFile___atimeMs = 'image.localFile.atimeMs',
  image___localFile___mtimeMs = 'image.localFile.mtimeMs',
  image___localFile___ctimeMs = 'image.localFile.ctimeMs',
  image___localFile___atime = 'image.localFile.atime',
  image___localFile___mtime = 'image.localFile.mtime',
  image___localFile___ctime = 'image.localFile.ctime',
  image___localFile___birthtime = 'image.localFile.birthtime',
  image___localFile___birthtimeMs = 'image.localFile.birthtimeMs',
  image___localFile___blksize = 'image.localFile.blksize',
  image___localFile___blocks = 'image.localFile.blocks',
  image___localFile___url = 'image.localFile.url',
  image___localFile___publicURL = 'image.localFile.publicURL',
  image___localFile___childrenImageSharp = 'image.localFile.childrenImageSharp',
  image___localFile___childrenImageSharp___gatsbyImageData = 'image.localFile.childrenImageSharp.gatsbyImageData',
  image___localFile___childrenImageSharp___id = 'image.localFile.childrenImageSharp.id',
  image___localFile___childrenImageSharp___children = 'image.localFile.childrenImageSharp.children',
  image___localFile___childImageSharp___gatsbyImageData = 'image.localFile.childImageSharp.gatsbyImageData',
  image___localFile___childImageSharp___id = 'image.localFile.childImageSharp.id',
  image___localFile___childImageSharp___children = 'image.localFile.childImageSharp.children',
  image___localFile___childrenPagesJson = 'image.localFile.childrenPagesJson',
  image___localFile___childrenPagesJson___id = 'image.localFile.childrenPagesJson.id',
  image___localFile___childrenPagesJson___children = 'image.localFile.childrenPagesJson.children',
  image___localFile___childrenPagesJson___path = 'image.localFile.childrenPagesJson.path',
  image___localFile___childrenPagesJson___catchphrase = 'image.localFile.childrenPagesJson.catchphrase',
  image___localFile___childrenPagesJson___introduction = 'image.localFile.childrenPagesJson.introduction',
  image___localFile___childrenPagesJson___image = 'image.localFile.childrenPagesJson.image',
  image___localFile___childrenPagesJson___displayTitle = 'image.localFile.childrenPagesJson.displayTitle',
  image___localFile___childrenPagesJson___title = 'image.localFile.childrenPagesJson.title',
  image___localFile___childPagesJson___id = 'image.localFile.childPagesJson.id',
  image___localFile___childPagesJson___children = 'image.localFile.childPagesJson.children',
  image___localFile___childPagesJson___path = 'image.localFile.childPagesJson.path',
  image___localFile___childPagesJson___catchphrase = 'image.localFile.childPagesJson.catchphrase',
  image___localFile___childPagesJson___introduction = 'image.localFile.childPagesJson.introduction',
  image___localFile___childPagesJson___image = 'image.localFile.childPagesJson.image',
  image___localFile___childPagesJson___displayTitle = 'image.localFile.childPagesJson.displayTitle',
  image___localFile___childPagesJson___title = 'image.localFile.childPagesJson.title',
  image___localFile___id = 'image.localFile.id',
  image___localFile___parent___id = 'image.localFile.parent.id',
  image___localFile___parent___children = 'image.localFile.parent.children',
  image___localFile___children = 'image.localFile.children',
  image___localFile___children___id = 'image.localFile.children.id',
  image___localFile___children___children = 'image.localFile.children.children',
  image___localFile___internal___content = 'image.localFile.internal.content',
  image___localFile___internal___contentDigest = 'image.localFile.internal.contentDigest',
  image___localFile___internal___description = 'image.localFile.internal.description',
  image___localFile___internal___fieldOwners = 'image.localFile.internal.fieldOwners',
  image___localFile___internal___ignoreType = 'image.localFile.internal.ignoreType',
  image___localFile___internal___mediaType = 'image.localFile.internal.mediaType',
  image___localFile___internal___owner = 'image.localFile.internal.owner',
  image___localFile___internal___type = 'image.localFile.internal.type',
  image___fixed___base64 = 'image.fixed.base64',
  image___fixed___tracedSVG = 'image.fixed.tracedSVG',
  image___fixed___aspectRatio = 'image.fixed.aspectRatio',
  image___fixed___width = 'image.fixed.width',
  image___fixed___height = 'image.fixed.height',
  image___fixed___src = 'image.fixed.src',
  image___fixed___srcSet = 'image.fixed.srcSet',
  image___fixed___srcWebp = 'image.fixed.srcWebp',
  image___fixed___srcSetWebp = 'image.fixed.srcSetWebp',
  image___fluid___base64 = 'image.fluid.base64',
  image___fluid___tracedSVG = 'image.fluid.tracedSVG',
  image___fluid___aspectRatio = 'image.fluid.aspectRatio',
  image___fluid___src = 'image.fluid.src',
  image___fluid___srcSet = 'image.fluid.srcSet',
  image___fluid___srcWebp = 'image.fluid.srcWebp',
  image___fluid___srcSetWebp = 'image.fluid.srcSetWebp',
  image___fluid___sizes = 'image.fluid.sizes',
  image___gatsbyImageData = 'image.gatsbyImageData',
  image___resize___base64 = 'image.resize.base64',
  image___resize___tracedSVG = 'image.resize.tracedSVG',
  image___resize___src = 'image.resize.src',
  image___resize___width = 'image.resize.width',
  image___resize___height = 'image.resize.height',
  image___resize___aspectRatio = 'image.resize.aspectRatio',
  image___parent___id = 'image.parent.id',
  image___parent___parent___id = 'image.parent.parent.id',
  image___parent___parent___children = 'image.parent.parent.children',
  image___parent___children = 'image.parent.children',
  image___parent___children___id = 'image.parent.children.id',
  image___parent___children___children = 'image.parent.children.children',
  image___parent___internal___content = 'image.parent.internal.content',
  image___parent___internal___contentDigest = 'image.parent.internal.contentDigest',
  image___parent___internal___description = 'image.parent.internal.description',
  image___parent___internal___fieldOwners = 'image.parent.internal.fieldOwners',
  image___parent___internal___ignoreType = 'image.parent.internal.ignoreType',
  image___parent___internal___mediaType = 'image.parent.internal.mediaType',
  image___parent___internal___owner = 'image.parent.internal.owner',
  image___parent___internal___type = 'image.parent.internal.type',
  image___children = 'image.children',
  image___children___id = 'image.children.id',
  image___children___parent___id = 'image.children.parent.id',
  image___children___parent___children = 'image.children.parent.children',
  image___children___children = 'image.children.children',
  image___children___children___id = 'image.children.children.id',
  image___children___children___children = 'image.children.children.children',
  image___children___internal___content = 'image.children.internal.content',
  image___children___internal___contentDigest = 'image.children.internal.contentDigest',
  image___children___internal___description = 'image.children.internal.description',
  image___children___internal___fieldOwners = 'image.children.internal.fieldOwners',
  image___children___internal___ignoreType = 'image.children.internal.ignoreType',
  image___children___internal___mediaType = 'image.children.internal.mediaType',
  image___children___internal___owner = 'image.children.internal.owner',
  image___children___internal___type = 'image.children.internal.type',
  image___internal___content = 'image.internal.content',
  image___internal___contentDigest = 'image.internal.contentDigest',
  image___internal___description = 'image.internal.description',
  image___internal___fieldOwners = 'image.internal.fieldOwners',
  image___internal___ignoreType = 'image.internal.ignoreType',
  image___internal___mediaType = 'image.internal.mediaType',
  image___internal___owner = 'image.internal.owner',
  image___internal___type = 'image.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulImageWithAiTagsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulImageWithAiTagsEdge>;
  readonly nodes: ReadonlyArray<ContentfulImageWithAiTags>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulImageWithAiTagsFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly imageTags: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulImageWithAiTagsSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulImageWithAiTagsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulImageWithAiTagsFieldsEnum>>>;
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
  readonly instagram: Maybe<StringQueryOperatorInput>;
  readonly markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
  readonly linktree: Maybe<StringQueryOperatorInput>;
  readonly minnakikeru: Maybe<StringQueryOperatorInput>;
  readonly hatena: Maybe<StringQueryOperatorInput>;
  readonly bandcamp: Maybe<StringQueryOperatorInput>;
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
};

type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MdxWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
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
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
};


type ContentfulAuthorConnection_distinctArgs = {
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

enum ContentfulAuthorFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  instagram = 'instagram',
  markdownarticle = 'markdownarticle',
  markdownarticle___contentful_id = 'markdownarticle.contentful_id',
  markdownarticle___id = 'markdownarticle.id',
  markdownarticle___node_locale = 'markdownarticle.node_locale',
  markdownarticle___title = 'markdownarticle.title',
  markdownarticle___slug = 'markdownarticle.slug',
  markdownarticle___publishedAt = 'markdownarticle.publishedAt',
  markdownarticle___disableSideHeader = 'markdownarticle.disableSideHeader',
  markdownarticle___isVirticalWriting = 'markdownarticle.isVirticalWriting',
  markdownarticle___align = 'markdownarticle.align',
  markdownarticle___author___contentful_id = 'markdownarticle.author.contentful_id',
  markdownarticle___author___id = 'markdownarticle.author.id',
  markdownarticle___author___node_locale = 'markdownarticle.author.node_locale',
  markdownarticle___author___name = 'markdownarticle.author.name',
  markdownarticle___author___instagram = 'markdownarticle.author.instagram',
  markdownarticle___author___markdownarticle = 'markdownarticle.author.markdownarticle',
  markdownarticle___author___markdownarticle___contentful_id = 'markdownarticle.author.markdownarticle.contentful_id',
  markdownarticle___author___markdownarticle___id = 'markdownarticle.author.markdownarticle.id',
  markdownarticle___author___markdownarticle___node_locale = 'markdownarticle.author.markdownarticle.node_locale',
  markdownarticle___author___markdownarticle___title = 'markdownarticle.author.markdownarticle.title',
  markdownarticle___author___markdownarticle___slug = 'markdownarticle.author.markdownarticle.slug',
  markdownarticle___author___markdownarticle___publishedAt = 'markdownarticle.author.markdownarticle.publishedAt',
  markdownarticle___author___markdownarticle___disableSideHeader = 'markdownarticle.author.markdownarticle.disableSideHeader',
  markdownarticle___author___markdownarticle___isVirticalWriting = 'markdownarticle.author.markdownarticle.isVirticalWriting',
  markdownarticle___author___markdownarticle___align = 'markdownarticle.author.markdownarticle.align',
  markdownarticle___author___markdownarticle___spaceId = 'markdownarticle.author.markdownarticle.spaceId',
  markdownarticle___author___markdownarticle___createdAt = 'markdownarticle.author.markdownarticle.createdAt',
  markdownarticle___author___markdownarticle___updatedAt = 'markdownarticle.author.markdownarticle.updatedAt',
  markdownarticle___author___markdownarticle___images = 'markdownarticle.author.markdownarticle.images',
  markdownarticle___author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode = 'markdownarticle.author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode',
  markdownarticle___author___markdownarticle___children = 'markdownarticle.author.markdownarticle.children',
  markdownarticle___author___introduction___id = 'markdownarticle.author.introduction.id',
  markdownarticle___author___introduction___children = 'markdownarticle.author.introduction.children',
  markdownarticle___author___introduction___introduction = 'markdownarticle.author.introduction.introduction',
  markdownarticle___author___introduction___childrenMdx = 'markdownarticle.author.introduction.childrenMdx',
  markdownarticle___author___spaceId = 'markdownarticle.author.spaceId',
  markdownarticle___author___createdAt = 'markdownarticle.author.createdAt',
  markdownarticle___author___updatedAt = 'markdownarticle.author.updatedAt',
  markdownarticle___author___sys___type = 'markdownarticle.author.sys.type',
  markdownarticle___author___sys___revision = 'markdownarticle.author.sys.revision',
  markdownarticle___author___twitter = 'markdownarticle.author.twitter',
  markdownarticle___author___youtube = 'markdownarticle.author.youtube',
  markdownarticle___author___linktree = 'markdownarticle.author.linktree',
  markdownarticle___author___minnakikeru = 'markdownarticle.author.minnakikeru',
  markdownarticle___author___hatena = 'markdownarticle.author.hatena',
  markdownarticle___author___bandcamp = 'markdownarticle.author.bandcamp',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___id = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.id',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___children = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.children',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___introduction = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.introduction',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___childrenMdx = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.childrenMdx',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___id = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.id',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___children = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.children',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___introduction = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.introduction',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___childrenMdx = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.childrenMdx',
  markdownarticle___author___parent___id = 'markdownarticle.author.parent.id',
  markdownarticle___author___parent___children = 'markdownarticle.author.parent.children',
  markdownarticle___author___children = 'markdownarticle.author.children',
  markdownarticle___author___children___id = 'markdownarticle.author.children.id',
  markdownarticle___author___children___children = 'markdownarticle.author.children.children',
  markdownarticle___author___internal___content = 'markdownarticle.author.internal.content',
  markdownarticle___author___internal___contentDigest = 'markdownarticle.author.internal.contentDigest',
  markdownarticle___author___internal___description = 'markdownarticle.author.internal.description',
  markdownarticle___author___internal___fieldOwners = 'markdownarticle.author.internal.fieldOwners',
  markdownarticle___author___internal___ignoreType = 'markdownarticle.author.internal.ignoreType',
  markdownarticle___author___internal___mediaType = 'markdownarticle.author.internal.mediaType',
  markdownarticle___author___internal___owner = 'markdownarticle.author.internal.owner',
  markdownarticle___author___internal___type = 'markdownarticle.author.internal.type',
  markdownarticle___featuredImage___contentful_id = 'markdownarticle.featuredImage.contentful_id',
  markdownarticle___featuredImage___id = 'markdownarticle.featuredImage.id',
  markdownarticle___featuredImage___spaceId = 'markdownarticle.featuredImage.spaceId',
  markdownarticle___featuredImage___createdAt = 'markdownarticle.featuredImage.createdAt',
  markdownarticle___featuredImage___updatedAt = 'markdownarticle.featuredImage.updatedAt',
  markdownarticle___featuredImage___file___url = 'markdownarticle.featuredImage.file.url',
  markdownarticle___featuredImage___file___fileName = 'markdownarticle.featuredImage.file.fileName',
  markdownarticle___featuredImage___file___contentType = 'markdownarticle.featuredImage.file.contentType',
  markdownarticle___featuredImage___title = 'markdownarticle.featuredImage.title',
  markdownarticle___featuredImage___description = 'markdownarticle.featuredImage.description',
  markdownarticle___featuredImage___node_locale = 'markdownarticle.featuredImage.node_locale',
  markdownarticle___featuredImage___sys___type = 'markdownarticle.featuredImage.sys.type',
  markdownarticle___featuredImage___sys___revision = 'markdownarticle.featuredImage.sys.revision',
  markdownarticle___featuredImage___localFile___sourceInstanceName = 'markdownarticle.featuredImage.localFile.sourceInstanceName',
  markdownarticle___featuredImage___localFile___absolutePath = 'markdownarticle.featuredImage.localFile.absolutePath',
  markdownarticle___featuredImage___localFile___relativePath = 'markdownarticle.featuredImage.localFile.relativePath',
  markdownarticle___featuredImage___localFile___extension = 'markdownarticle.featuredImage.localFile.extension',
  markdownarticle___featuredImage___localFile___size = 'markdownarticle.featuredImage.localFile.size',
  markdownarticle___featuredImage___localFile___prettySize = 'markdownarticle.featuredImage.localFile.prettySize',
  markdownarticle___featuredImage___localFile___modifiedTime = 'markdownarticle.featuredImage.localFile.modifiedTime',
  markdownarticle___featuredImage___localFile___accessTime = 'markdownarticle.featuredImage.localFile.accessTime',
  markdownarticle___featuredImage___localFile___changeTime = 'markdownarticle.featuredImage.localFile.changeTime',
  markdownarticle___featuredImage___localFile___birthTime = 'markdownarticle.featuredImage.localFile.birthTime',
  markdownarticle___featuredImage___localFile___root = 'markdownarticle.featuredImage.localFile.root',
  markdownarticle___featuredImage___localFile___dir = 'markdownarticle.featuredImage.localFile.dir',
  markdownarticle___featuredImage___localFile___base = 'markdownarticle.featuredImage.localFile.base',
  markdownarticle___featuredImage___localFile___ext = 'markdownarticle.featuredImage.localFile.ext',
  markdownarticle___featuredImage___localFile___name = 'markdownarticle.featuredImage.localFile.name',
  markdownarticle___featuredImage___localFile___relativeDirectory = 'markdownarticle.featuredImage.localFile.relativeDirectory',
  markdownarticle___featuredImage___localFile___dev = 'markdownarticle.featuredImage.localFile.dev',
  markdownarticle___featuredImage___localFile___mode = 'markdownarticle.featuredImage.localFile.mode',
  markdownarticle___featuredImage___localFile___nlink = 'markdownarticle.featuredImage.localFile.nlink',
  markdownarticle___featuredImage___localFile___uid = 'markdownarticle.featuredImage.localFile.uid',
  markdownarticle___featuredImage___localFile___gid = 'markdownarticle.featuredImage.localFile.gid',
  markdownarticle___featuredImage___localFile___rdev = 'markdownarticle.featuredImage.localFile.rdev',
  markdownarticle___featuredImage___localFile___ino = 'markdownarticle.featuredImage.localFile.ino',
  markdownarticle___featuredImage___localFile___atimeMs = 'markdownarticle.featuredImage.localFile.atimeMs',
  markdownarticle___featuredImage___localFile___mtimeMs = 'markdownarticle.featuredImage.localFile.mtimeMs',
  markdownarticle___featuredImage___localFile___ctimeMs = 'markdownarticle.featuredImage.localFile.ctimeMs',
  markdownarticle___featuredImage___localFile___atime = 'markdownarticle.featuredImage.localFile.atime',
  markdownarticle___featuredImage___localFile___mtime = 'markdownarticle.featuredImage.localFile.mtime',
  markdownarticle___featuredImage___localFile___ctime = 'markdownarticle.featuredImage.localFile.ctime',
  markdownarticle___featuredImage___localFile___birthtime = 'markdownarticle.featuredImage.localFile.birthtime',
  markdownarticle___featuredImage___localFile___birthtimeMs = 'markdownarticle.featuredImage.localFile.birthtimeMs',
  markdownarticle___featuredImage___localFile___blksize = 'markdownarticle.featuredImage.localFile.blksize',
  markdownarticle___featuredImage___localFile___blocks = 'markdownarticle.featuredImage.localFile.blocks',
  markdownarticle___featuredImage___localFile___url = 'markdownarticle.featuredImage.localFile.url',
  markdownarticle___featuredImage___localFile___publicURL = 'markdownarticle.featuredImage.localFile.publicURL',
  markdownarticle___featuredImage___localFile___childrenImageSharp = 'markdownarticle.featuredImage.localFile.childrenImageSharp',
  markdownarticle___featuredImage___localFile___childrenPagesJson = 'markdownarticle.featuredImage.localFile.childrenPagesJson',
  markdownarticle___featuredImage___localFile___id = 'markdownarticle.featuredImage.localFile.id',
  markdownarticle___featuredImage___localFile___children = 'markdownarticle.featuredImage.localFile.children',
  markdownarticle___featuredImage___fixed___base64 = 'markdownarticle.featuredImage.fixed.base64',
  markdownarticle___featuredImage___fixed___tracedSVG = 'markdownarticle.featuredImage.fixed.tracedSVG',
  markdownarticle___featuredImage___fixed___aspectRatio = 'markdownarticle.featuredImage.fixed.aspectRatio',
  markdownarticle___featuredImage___fixed___width = 'markdownarticle.featuredImage.fixed.width',
  markdownarticle___featuredImage___fixed___height = 'markdownarticle.featuredImage.fixed.height',
  markdownarticle___featuredImage___fixed___src = 'markdownarticle.featuredImage.fixed.src',
  markdownarticle___featuredImage___fixed___srcSet = 'markdownarticle.featuredImage.fixed.srcSet',
  markdownarticle___featuredImage___fixed___srcWebp = 'markdownarticle.featuredImage.fixed.srcWebp',
  markdownarticle___featuredImage___fixed___srcSetWebp = 'markdownarticle.featuredImage.fixed.srcSetWebp',
  markdownarticle___featuredImage___fluid___base64 = 'markdownarticle.featuredImage.fluid.base64',
  markdownarticle___featuredImage___fluid___tracedSVG = 'markdownarticle.featuredImage.fluid.tracedSVG',
  markdownarticle___featuredImage___fluid___aspectRatio = 'markdownarticle.featuredImage.fluid.aspectRatio',
  markdownarticle___featuredImage___fluid___src = 'markdownarticle.featuredImage.fluid.src',
  markdownarticle___featuredImage___fluid___srcSet = 'markdownarticle.featuredImage.fluid.srcSet',
  markdownarticle___featuredImage___fluid___srcWebp = 'markdownarticle.featuredImage.fluid.srcWebp',
  markdownarticle___featuredImage___fluid___srcSetWebp = 'markdownarticle.featuredImage.fluid.srcSetWebp',
  markdownarticle___featuredImage___fluid___sizes = 'markdownarticle.featuredImage.fluid.sizes',
  markdownarticle___featuredImage___gatsbyImageData = 'markdownarticle.featuredImage.gatsbyImageData',
  markdownarticle___featuredImage___resize___base64 = 'markdownarticle.featuredImage.resize.base64',
  markdownarticle___featuredImage___resize___tracedSVG = 'markdownarticle.featuredImage.resize.tracedSVG',
  markdownarticle___featuredImage___resize___src = 'markdownarticle.featuredImage.resize.src',
  markdownarticle___featuredImage___resize___width = 'markdownarticle.featuredImage.resize.width',
  markdownarticle___featuredImage___resize___height = 'markdownarticle.featuredImage.resize.height',
  markdownarticle___featuredImage___resize___aspectRatio = 'markdownarticle.featuredImage.resize.aspectRatio',
  markdownarticle___featuredImage___parent___id = 'markdownarticle.featuredImage.parent.id',
  markdownarticle___featuredImage___parent___children = 'markdownarticle.featuredImage.parent.children',
  markdownarticle___featuredImage___children = 'markdownarticle.featuredImage.children',
  markdownarticle___featuredImage___children___id = 'markdownarticle.featuredImage.children.id',
  markdownarticle___featuredImage___children___children = 'markdownarticle.featuredImage.children.children',
  markdownarticle___featuredImage___internal___content = 'markdownarticle.featuredImage.internal.content',
  markdownarticle___featuredImage___internal___contentDigest = 'markdownarticle.featuredImage.internal.contentDigest',
  markdownarticle___featuredImage___internal___description = 'markdownarticle.featuredImage.internal.description',
  markdownarticle___featuredImage___internal___fieldOwners = 'markdownarticle.featuredImage.internal.fieldOwners',
  markdownarticle___featuredImage___internal___ignoreType = 'markdownarticle.featuredImage.internal.ignoreType',
  markdownarticle___featuredImage___internal___mediaType = 'markdownarticle.featuredImage.internal.mediaType',
  markdownarticle___featuredImage___internal___owner = 'markdownarticle.featuredImage.internal.owner',
  markdownarticle___featuredImage___internal___type = 'markdownarticle.featuredImage.internal.type',
  markdownarticle___content___id = 'markdownarticle.content.id',
  markdownarticle___content___parent___id = 'markdownarticle.content.parent.id',
  markdownarticle___content___parent___children = 'markdownarticle.content.parent.children',
  markdownarticle___content___children = 'markdownarticle.content.children',
  markdownarticle___content___children___id = 'markdownarticle.content.children.id',
  markdownarticle___content___children___children = 'markdownarticle.content.children.children',
  markdownarticle___content___internal___content = 'markdownarticle.content.internal.content',
  markdownarticle___content___internal___contentDigest = 'markdownarticle.content.internal.contentDigest',
  markdownarticle___content___internal___description = 'markdownarticle.content.internal.description',
  markdownarticle___content___internal___fieldOwners = 'markdownarticle.content.internal.fieldOwners',
  markdownarticle___content___internal___ignoreType = 'markdownarticle.content.internal.ignoreType',
  markdownarticle___content___internal___mediaType = 'markdownarticle.content.internal.mediaType',
  markdownarticle___content___internal___owner = 'markdownarticle.content.internal.owner',
  markdownarticle___content___internal___type = 'markdownarticle.content.internal.type',
  markdownarticle___content___content = 'markdownarticle.content.content',
  markdownarticle___content___sys___type = 'markdownarticle.content.sys.type',
  markdownarticle___content___childrenMdx = 'markdownarticle.content.childrenMdx',
  markdownarticle___content___childrenMdx___rawBody = 'markdownarticle.content.childrenMdx.rawBody',
  markdownarticle___content___childrenMdx___fileAbsolutePath = 'markdownarticle.content.childrenMdx.fileAbsolutePath',
  markdownarticle___content___childrenMdx___slug = 'markdownarticle.content.childrenMdx.slug',
  markdownarticle___content___childrenMdx___body = 'markdownarticle.content.childrenMdx.body',
  markdownarticle___content___childrenMdx___excerpt = 'markdownarticle.content.childrenMdx.excerpt',
  markdownarticle___content___childrenMdx___headings = 'markdownarticle.content.childrenMdx.headings',
  markdownarticle___content___childrenMdx___html = 'markdownarticle.content.childrenMdx.html',
  markdownarticle___content___childrenMdx___mdxAST = 'markdownarticle.content.childrenMdx.mdxAST',
  markdownarticle___content___childrenMdx___tableOfContents = 'markdownarticle.content.childrenMdx.tableOfContents',
  markdownarticle___content___childrenMdx___timeToRead = 'markdownarticle.content.childrenMdx.timeToRead',
  markdownarticle___content___childrenMdx___id = 'markdownarticle.content.childrenMdx.id',
  markdownarticle___content___childrenMdx___children = 'markdownarticle.content.childrenMdx.children',
  markdownarticle___content___childMdx___rawBody = 'markdownarticle.content.childMdx.rawBody',
  markdownarticle___content___childMdx___fileAbsolutePath = 'markdownarticle.content.childMdx.fileAbsolutePath',
  markdownarticle___content___childMdx___slug = 'markdownarticle.content.childMdx.slug',
  markdownarticle___content___childMdx___body = 'markdownarticle.content.childMdx.body',
  markdownarticle___content___childMdx___excerpt = 'markdownarticle.content.childMdx.excerpt',
  markdownarticle___content___childMdx___headings = 'markdownarticle.content.childMdx.headings',
  markdownarticle___content___childMdx___html = 'markdownarticle.content.childMdx.html',
  markdownarticle___content___childMdx___mdxAST = 'markdownarticle.content.childMdx.mdxAST',
  markdownarticle___content___childMdx___tableOfContents = 'markdownarticle.content.childMdx.tableOfContents',
  markdownarticle___content___childMdx___timeToRead = 'markdownarticle.content.childMdx.timeToRead',
  markdownarticle___content___childMdx___id = 'markdownarticle.content.childMdx.id',
  markdownarticle___content___childMdx___children = 'markdownarticle.content.childMdx.children',
  markdownarticle___spaceId = 'markdownarticle.spaceId',
  markdownarticle___createdAt = 'markdownarticle.createdAt',
  markdownarticle___updatedAt = 'markdownarticle.updatedAt',
  markdownarticle___sys___type = 'markdownarticle.sys.type',
  markdownarticle___sys___revision = 'markdownarticle.sys.revision',
  markdownarticle___images = 'markdownarticle.images',
  markdownarticle___images___contentful_id = 'markdownarticle.images.contentful_id',
  markdownarticle___images___id = 'markdownarticle.images.id',
  markdownarticle___images___spaceId = 'markdownarticle.images.spaceId',
  markdownarticle___images___createdAt = 'markdownarticle.images.createdAt',
  markdownarticle___images___updatedAt = 'markdownarticle.images.updatedAt',
  markdownarticle___images___file___url = 'markdownarticle.images.file.url',
  markdownarticle___images___file___fileName = 'markdownarticle.images.file.fileName',
  markdownarticle___images___file___contentType = 'markdownarticle.images.file.contentType',
  markdownarticle___images___title = 'markdownarticle.images.title',
  markdownarticle___images___description = 'markdownarticle.images.description',
  markdownarticle___images___node_locale = 'markdownarticle.images.node_locale',
  markdownarticle___images___sys___type = 'markdownarticle.images.sys.type',
  markdownarticle___images___sys___revision = 'markdownarticle.images.sys.revision',
  markdownarticle___images___localFile___sourceInstanceName = 'markdownarticle.images.localFile.sourceInstanceName',
  markdownarticle___images___localFile___absolutePath = 'markdownarticle.images.localFile.absolutePath',
  markdownarticle___images___localFile___relativePath = 'markdownarticle.images.localFile.relativePath',
  markdownarticle___images___localFile___extension = 'markdownarticle.images.localFile.extension',
  markdownarticle___images___localFile___size = 'markdownarticle.images.localFile.size',
  markdownarticle___images___localFile___prettySize = 'markdownarticle.images.localFile.prettySize',
  markdownarticle___images___localFile___modifiedTime = 'markdownarticle.images.localFile.modifiedTime',
  markdownarticle___images___localFile___accessTime = 'markdownarticle.images.localFile.accessTime',
  markdownarticle___images___localFile___changeTime = 'markdownarticle.images.localFile.changeTime',
  markdownarticle___images___localFile___birthTime = 'markdownarticle.images.localFile.birthTime',
  markdownarticle___images___localFile___root = 'markdownarticle.images.localFile.root',
  markdownarticle___images___localFile___dir = 'markdownarticle.images.localFile.dir',
  markdownarticle___images___localFile___base = 'markdownarticle.images.localFile.base',
  markdownarticle___images___localFile___ext = 'markdownarticle.images.localFile.ext',
  markdownarticle___images___localFile___name = 'markdownarticle.images.localFile.name',
  markdownarticle___images___localFile___relativeDirectory = 'markdownarticle.images.localFile.relativeDirectory',
  markdownarticle___images___localFile___dev = 'markdownarticle.images.localFile.dev',
  markdownarticle___images___localFile___mode = 'markdownarticle.images.localFile.mode',
  markdownarticle___images___localFile___nlink = 'markdownarticle.images.localFile.nlink',
  markdownarticle___images___localFile___uid = 'markdownarticle.images.localFile.uid',
  markdownarticle___images___localFile___gid = 'markdownarticle.images.localFile.gid',
  markdownarticle___images___localFile___rdev = 'markdownarticle.images.localFile.rdev',
  markdownarticle___images___localFile___ino = 'markdownarticle.images.localFile.ino',
  markdownarticle___images___localFile___atimeMs = 'markdownarticle.images.localFile.atimeMs',
  markdownarticle___images___localFile___mtimeMs = 'markdownarticle.images.localFile.mtimeMs',
  markdownarticle___images___localFile___ctimeMs = 'markdownarticle.images.localFile.ctimeMs',
  markdownarticle___images___localFile___atime = 'markdownarticle.images.localFile.atime',
  markdownarticle___images___localFile___mtime = 'markdownarticle.images.localFile.mtime',
  markdownarticle___images___localFile___ctime = 'markdownarticle.images.localFile.ctime',
  markdownarticle___images___localFile___birthtime = 'markdownarticle.images.localFile.birthtime',
  markdownarticle___images___localFile___birthtimeMs = 'markdownarticle.images.localFile.birthtimeMs',
  markdownarticle___images___localFile___blksize = 'markdownarticle.images.localFile.blksize',
  markdownarticle___images___localFile___blocks = 'markdownarticle.images.localFile.blocks',
  markdownarticle___images___localFile___url = 'markdownarticle.images.localFile.url',
  markdownarticle___images___localFile___publicURL = 'markdownarticle.images.localFile.publicURL',
  markdownarticle___images___localFile___childrenImageSharp = 'markdownarticle.images.localFile.childrenImageSharp',
  markdownarticle___images___localFile___childrenPagesJson = 'markdownarticle.images.localFile.childrenPagesJson',
  markdownarticle___images___localFile___id = 'markdownarticle.images.localFile.id',
  markdownarticle___images___localFile___children = 'markdownarticle.images.localFile.children',
  markdownarticle___images___fixed___base64 = 'markdownarticle.images.fixed.base64',
  markdownarticle___images___fixed___tracedSVG = 'markdownarticle.images.fixed.tracedSVG',
  markdownarticle___images___fixed___aspectRatio = 'markdownarticle.images.fixed.aspectRatio',
  markdownarticle___images___fixed___width = 'markdownarticle.images.fixed.width',
  markdownarticle___images___fixed___height = 'markdownarticle.images.fixed.height',
  markdownarticle___images___fixed___src = 'markdownarticle.images.fixed.src',
  markdownarticle___images___fixed___srcSet = 'markdownarticle.images.fixed.srcSet',
  markdownarticle___images___fixed___srcWebp = 'markdownarticle.images.fixed.srcWebp',
  markdownarticle___images___fixed___srcSetWebp = 'markdownarticle.images.fixed.srcSetWebp',
  markdownarticle___images___fluid___base64 = 'markdownarticle.images.fluid.base64',
  markdownarticle___images___fluid___tracedSVG = 'markdownarticle.images.fluid.tracedSVG',
  markdownarticle___images___fluid___aspectRatio = 'markdownarticle.images.fluid.aspectRatio',
  markdownarticle___images___fluid___src = 'markdownarticle.images.fluid.src',
  markdownarticle___images___fluid___srcSet = 'markdownarticle.images.fluid.srcSet',
  markdownarticle___images___fluid___srcWebp = 'markdownarticle.images.fluid.srcWebp',
  markdownarticle___images___fluid___srcSetWebp = 'markdownarticle.images.fluid.srcSetWebp',
  markdownarticle___images___fluid___sizes = 'markdownarticle.images.fluid.sizes',
  markdownarticle___images___gatsbyImageData = 'markdownarticle.images.gatsbyImageData',
  markdownarticle___images___resize___base64 = 'markdownarticle.images.resize.base64',
  markdownarticle___images___resize___tracedSVG = 'markdownarticle.images.resize.tracedSVG',
  markdownarticle___images___resize___src = 'markdownarticle.images.resize.src',
  markdownarticle___images___resize___width = 'markdownarticle.images.resize.width',
  markdownarticle___images___resize___height = 'markdownarticle.images.resize.height',
  markdownarticle___images___resize___aspectRatio = 'markdownarticle.images.resize.aspectRatio',
  markdownarticle___images___parent___id = 'markdownarticle.images.parent.id',
  markdownarticle___images___parent___children = 'markdownarticle.images.parent.children',
  markdownarticle___images___children = 'markdownarticle.images.children',
  markdownarticle___images___children___id = 'markdownarticle.images.children.id',
  markdownarticle___images___children___children = 'markdownarticle.images.children.children',
  markdownarticle___images___internal___content = 'markdownarticle.images.internal.content',
  markdownarticle___images___internal___contentDigest = 'markdownarticle.images.internal.contentDigest',
  markdownarticle___images___internal___description = 'markdownarticle.images.internal.description',
  markdownarticle___images___internal___fieldOwners = 'markdownarticle.images.internal.fieldOwners',
  markdownarticle___images___internal___ignoreType = 'markdownarticle.images.internal.ignoreType',
  markdownarticle___images___internal___mediaType = 'markdownarticle.images.internal.mediaType',
  markdownarticle___images___internal___owner = 'markdownarticle.images.internal.owner',
  markdownarticle___images___internal___type = 'markdownarticle.images.internal.type',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___parent___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.parent.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___parent___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.parent.children',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___children___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___children___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children.children',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___content = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.content',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___contentDigest = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.contentDigest',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___description = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.description',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___fieldOwners = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.fieldOwners',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___ignoreType = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.ignoreType',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___mediaType = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.mediaType',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___owner = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.owner',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___internal___type = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.internal.type',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___content = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___sys___type = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.sys.type',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___rawBody = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___fileAbsolutePath = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___slug = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.slug',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___body = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.body',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___excerpt = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___headings = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___html = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.html',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___mdxAST = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___tableOfContents = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___timeToRead = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___rawBody = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.rawBody',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___fileAbsolutePath = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___slug = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.slug',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___body = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.body',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___excerpt = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.excerpt',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___headings = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.headings',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___html = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.html',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___mdxAST = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.mdxAST',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___tableOfContents = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___timeToRead = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.timeToRead',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMdx___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMdx.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___parent___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.parent.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___parent___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.parent.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___children___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___children___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.children.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___content = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.content',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___contentDigest = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.contentDigest',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___description = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.description',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___fieldOwners = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.fieldOwners',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___ignoreType = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.ignoreType',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___mediaType = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.mediaType',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___owner = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.owner',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___internal___type = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.internal.type',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___content = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.content',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___sys___type = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.sys.type',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___rawBody = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___fileAbsolutePath = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___slug = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.slug',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___body = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.body',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___excerpt = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___headings = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.headings',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___html = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.html',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___mdxAST = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___tableOfContents = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___timeToRead = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___rawBody = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.rawBody',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___fileAbsolutePath = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___slug = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.slug',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___body = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.body',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___excerpt = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.excerpt',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___headings = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.headings',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___html = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.html',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___mdxAST = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.mdxAST',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___tableOfContents = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___timeToRead = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.timeToRead',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMdx___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMdx.children',
  markdownarticle___parent___id = 'markdownarticle.parent.id',
  markdownarticle___parent___parent___id = 'markdownarticle.parent.parent.id',
  markdownarticle___parent___parent___children = 'markdownarticle.parent.parent.children',
  markdownarticle___parent___children = 'markdownarticle.parent.children',
  markdownarticle___parent___children___id = 'markdownarticle.parent.children.id',
  markdownarticle___parent___children___children = 'markdownarticle.parent.children.children',
  markdownarticle___parent___internal___content = 'markdownarticle.parent.internal.content',
  markdownarticle___parent___internal___contentDigest = 'markdownarticle.parent.internal.contentDigest',
  markdownarticle___parent___internal___description = 'markdownarticle.parent.internal.description',
  markdownarticle___parent___internal___fieldOwners = 'markdownarticle.parent.internal.fieldOwners',
  markdownarticle___parent___internal___ignoreType = 'markdownarticle.parent.internal.ignoreType',
  markdownarticle___parent___internal___mediaType = 'markdownarticle.parent.internal.mediaType',
  markdownarticle___parent___internal___owner = 'markdownarticle.parent.internal.owner',
  markdownarticle___parent___internal___type = 'markdownarticle.parent.internal.type',
  markdownarticle___children = 'markdownarticle.children',
  markdownarticle___children___id = 'markdownarticle.children.id',
  markdownarticle___children___parent___id = 'markdownarticle.children.parent.id',
  markdownarticle___children___parent___children = 'markdownarticle.children.parent.children',
  markdownarticle___children___children = 'markdownarticle.children.children',
  markdownarticle___children___children___id = 'markdownarticle.children.children.id',
  markdownarticle___children___children___children = 'markdownarticle.children.children.children',
  markdownarticle___children___internal___content = 'markdownarticle.children.internal.content',
  markdownarticle___children___internal___contentDigest = 'markdownarticle.children.internal.contentDigest',
  markdownarticle___children___internal___description = 'markdownarticle.children.internal.description',
  markdownarticle___children___internal___fieldOwners = 'markdownarticle.children.internal.fieldOwners',
  markdownarticle___children___internal___ignoreType = 'markdownarticle.children.internal.ignoreType',
  markdownarticle___children___internal___mediaType = 'markdownarticle.children.internal.mediaType',
  markdownarticle___children___internal___owner = 'markdownarticle.children.internal.owner',
  markdownarticle___children___internal___type = 'markdownarticle.children.internal.type',
  markdownarticle___internal___content = 'markdownarticle.internal.content',
  markdownarticle___internal___contentDigest = 'markdownarticle.internal.contentDigest',
  markdownarticle___internal___description = 'markdownarticle.internal.description',
  markdownarticle___internal___fieldOwners = 'markdownarticle.internal.fieldOwners',
  markdownarticle___internal___ignoreType = 'markdownarticle.internal.ignoreType',
  markdownarticle___internal___mediaType = 'markdownarticle.internal.mediaType',
  markdownarticle___internal___owner = 'markdownarticle.internal.owner',
  markdownarticle___internal___type = 'markdownarticle.internal.type',
  introduction___id = 'introduction.id',
  introduction___parent___id = 'introduction.parent.id',
  introduction___parent___parent___id = 'introduction.parent.parent.id',
  introduction___parent___parent___children = 'introduction.parent.parent.children',
  introduction___parent___children = 'introduction.parent.children',
  introduction___parent___children___id = 'introduction.parent.children.id',
  introduction___parent___children___children = 'introduction.parent.children.children',
  introduction___parent___internal___content = 'introduction.parent.internal.content',
  introduction___parent___internal___contentDigest = 'introduction.parent.internal.contentDigest',
  introduction___parent___internal___description = 'introduction.parent.internal.description',
  introduction___parent___internal___fieldOwners = 'introduction.parent.internal.fieldOwners',
  introduction___parent___internal___ignoreType = 'introduction.parent.internal.ignoreType',
  introduction___parent___internal___mediaType = 'introduction.parent.internal.mediaType',
  introduction___parent___internal___owner = 'introduction.parent.internal.owner',
  introduction___parent___internal___type = 'introduction.parent.internal.type',
  introduction___children = 'introduction.children',
  introduction___children___id = 'introduction.children.id',
  introduction___children___parent___id = 'introduction.children.parent.id',
  introduction___children___parent___children = 'introduction.children.parent.children',
  introduction___children___children = 'introduction.children.children',
  introduction___children___children___id = 'introduction.children.children.id',
  introduction___children___children___children = 'introduction.children.children.children',
  introduction___children___internal___content = 'introduction.children.internal.content',
  introduction___children___internal___contentDigest = 'introduction.children.internal.contentDigest',
  introduction___children___internal___description = 'introduction.children.internal.description',
  introduction___children___internal___fieldOwners = 'introduction.children.internal.fieldOwners',
  introduction___children___internal___ignoreType = 'introduction.children.internal.ignoreType',
  introduction___children___internal___mediaType = 'introduction.children.internal.mediaType',
  introduction___children___internal___owner = 'introduction.children.internal.owner',
  introduction___children___internal___type = 'introduction.children.internal.type',
  introduction___internal___content = 'introduction.internal.content',
  introduction___internal___contentDigest = 'introduction.internal.contentDigest',
  introduction___internal___description = 'introduction.internal.description',
  introduction___internal___fieldOwners = 'introduction.internal.fieldOwners',
  introduction___internal___ignoreType = 'introduction.internal.ignoreType',
  introduction___internal___mediaType = 'introduction.internal.mediaType',
  introduction___internal___owner = 'introduction.internal.owner',
  introduction___internal___type = 'introduction.internal.type',
  introduction___introduction = 'introduction.introduction',
  introduction___sys___type = 'introduction.sys.type',
  introduction___childrenMdx = 'introduction.childrenMdx',
  introduction___childrenMdx___rawBody = 'introduction.childrenMdx.rawBody',
  introduction___childrenMdx___fileAbsolutePath = 'introduction.childrenMdx.fileAbsolutePath',
  introduction___childrenMdx___frontmatter___title = 'introduction.childrenMdx.frontmatter.title',
  introduction___childrenMdx___slug = 'introduction.childrenMdx.slug',
  introduction___childrenMdx___body = 'introduction.childrenMdx.body',
  introduction___childrenMdx___excerpt = 'introduction.childrenMdx.excerpt',
  introduction___childrenMdx___headings = 'introduction.childrenMdx.headings',
  introduction___childrenMdx___headings___value = 'introduction.childrenMdx.headings.value',
  introduction___childrenMdx___headings___depth = 'introduction.childrenMdx.headings.depth',
  introduction___childrenMdx___html = 'introduction.childrenMdx.html',
  introduction___childrenMdx___mdxAST = 'introduction.childrenMdx.mdxAST',
  introduction___childrenMdx___tableOfContents = 'introduction.childrenMdx.tableOfContents',
  introduction___childrenMdx___timeToRead = 'introduction.childrenMdx.timeToRead',
  introduction___childrenMdx___wordCount___paragraphs = 'introduction.childrenMdx.wordCount.paragraphs',
  introduction___childrenMdx___wordCount___sentences = 'introduction.childrenMdx.wordCount.sentences',
  introduction___childrenMdx___wordCount___words = 'introduction.childrenMdx.wordCount.words',
  introduction___childrenMdx___id = 'introduction.childrenMdx.id',
  introduction___childrenMdx___parent___id = 'introduction.childrenMdx.parent.id',
  introduction___childrenMdx___parent___children = 'introduction.childrenMdx.parent.children',
  introduction___childrenMdx___children = 'introduction.childrenMdx.children',
  introduction___childrenMdx___children___id = 'introduction.childrenMdx.children.id',
  introduction___childrenMdx___children___children = 'introduction.childrenMdx.children.children',
  introduction___childrenMdx___internal___content = 'introduction.childrenMdx.internal.content',
  introduction___childrenMdx___internal___contentDigest = 'introduction.childrenMdx.internal.contentDigest',
  introduction___childrenMdx___internal___description = 'introduction.childrenMdx.internal.description',
  introduction___childrenMdx___internal___fieldOwners = 'introduction.childrenMdx.internal.fieldOwners',
  introduction___childrenMdx___internal___ignoreType = 'introduction.childrenMdx.internal.ignoreType',
  introduction___childrenMdx___internal___mediaType = 'introduction.childrenMdx.internal.mediaType',
  introduction___childrenMdx___internal___owner = 'introduction.childrenMdx.internal.owner',
  introduction___childrenMdx___internal___type = 'introduction.childrenMdx.internal.type',
  introduction___childMdx___rawBody = 'introduction.childMdx.rawBody',
  introduction___childMdx___fileAbsolutePath = 'introduction.childMdx.fileAbsolutePath',
  introduction___childMdx___frontmatter___title = 'introduction.childMdx.frontmatter.title',
  introduction___childMdx___slug = 'introduction.childMdx.slug',
  introduction___childMdx___body = 'introduction.childMdx.body',
  introduction___childMdx___excerpt = 'introduction.childMdx.excerpt',
  introduction___childMdx___headings = 'introduction.childMdx.headings',
  introduction___childMdx___headings___value = 'introduction.childMdx.headings.value',
  introduction___childMdx___headings___depth = 'introduction.childMdx.headings.depth',
  introduction___childMdx___html = 'introduction.childMdx.html',
  introduction___childMdx___mdxAST = 'introduction.childMdx.mdxAST',
  introduction___childMdx___tableOfContents = 'introduction.childMdx.tableOfContents',
  introduction___childMdx___timeToRead = 'introduction.childMdx.timeToRead',
  introduction___childMdx___wordCount___paragraphs = 'introduction.childMdx.wordCount.paragraphs',
  introduction___childMdx___wordCount___sentences = 'introduction.childMdx.wordCount.sentences',
  introduction___childMdx___wordCount___words = 'introduction.childMdx.wordCount.words',
  introduction___childMdx___id = 'introduction.childMdx.id',
  introduction___childMdx___parent___id = 'introduction.childMdx.parent.id',
  introduction___childMdx___parent___children = 'introduction.childMdx.parent.children',
  introduction___childMdx___children = 'introduction.childMdx.children',
  introduction___childMdx___children___id = 'introduction.childMdx.children.id',
  introduction___childMdx___children___children = 'introduction.childMdx.children.children',
  introduction___childMdx___internal___content = 'introduction.childMdx.internal.content',
  introduction___childMdx___internal___contentDigest = 'introduction.childMdx.internal.contentDigest',
  introduction___childMdx___internal___description = 'introduction.childMdx.internal.description',
  introduction___childMdx___internal___fieldOwners = 'introduction.childMdx.internal.fieldOwners',
  introduction___childMdx___internal___ignoreType = 'introduction.childMdx.internal.ignoreType',
  introduction___childMdx___internal___mediaType = 'introduction.childMdx.internal.mediaType',
  introduction___childMdx___internal___owner = 'introduction.childMdx.internal.owner',
  introduction___childMdx___internal___type = 'introduction.childMdx.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  twitter = 'twitter',
  youtube = 'youtube',
  linktree = 'linktree',
  minnakikeru = 'minnakikeru',
  hatena = 'hatena',
  bandcamp = 'bandcamp',
  childrenContentfulAuthorIntroductionTextNode = 'childrenContentfulAuthorIntroductionTextNode',
  childrenContentfulAuthorIntroductionTextNode___id = 'childrenContentfulAuthorIntroductionTextNode.id',
  childrenContentfulAuthorIntroductionTextNode___parent___id = 'childrenContentfulAuthorIntroductionTextNode.parent.id',
  childrenContentfulAuthorIntroductionTextNode___parent___parent___id = 'childrenContentfulAuthorIntroductionTextNode.parent.parent.id',
  childrenContentfulAuthorIntroductionTextNode___parent___parent___children = 'childrenContentfulAuthorIntroductionTextNode.parent.parent.children',
  childrenContentfulAuthorIntroductionTextNode___parent___children = 'childrenContentfulAuthorIntroductionTextNode.parent.children',
  childrenContentfulAuthorIntroductionTextNode___parent___children___id = 'childrenContentfulAuthorIntroductionTextNode.parent.children.id',
  childrenContentfulAuthorIntroductionTextNode___parent___children___children = 'childrenContentfulAuthorIntroductionTextNode.parent.children.children',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___content = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.content',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___description = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.description',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___parent___internal___type = 'childrenContentfulAuthorIntroductionTextNode.parent.internal.type',
  childrenContentfulAuthorIntroductionTextNode___children = 'childrenContentfulAuthorIntroductionTextNode.children',
  childrenContentfulAuthorIntroductionTextNode___children___id = 'childrenContentfulAuthorIntroductionTextNode.children.id',
  childrenContentfulAuthorIntroductionTextNode___children___parent___id = 'childrenContentfulAuthorIntroductionTextNode.children.parent.id',
  childrenContentfulAuthorIntroductionTextNode___children___parent___children = 'childrenContentfulAuthorIntroductionTextNode.children.parent.children',
  childrenContentfulAuthorIntroductionTextNode___children___children = 'childrenContentfulAuthorIntroductionTextNode.children.children',
  childrenContentfulAuthorIntroductionTextNode___children___children___id = 'childrenContentfulAuthorIntroductionTextNode.children.children.id',
  childrenContentfulAuthorIntroductionTextNode___children___children___children = 'childrenContentfulAuthorIntroductionTextNode.children.children.children',
  childrenContentfulAuthorIntroductionTextNode___children___internal___content = 'childrenContentfulAuthorIntroductionTextNode.children.internal.content',
  childrenContentfulAuthorIntroductionTextNode___children___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.children.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___children___internal___description = 'childrenContentfulAuthorIntroductionTextNode.children.internal.description',
  childrenContentfulAuthorIntroductionTextNode___children___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.children.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___children___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.children.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___children___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.children.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___children___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.children.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___children___internal___type = 'childrenContentfulAuthorIntroductionTextNode.children.internal.type',
  childrenContentfulAuthorIntroductionTextNode___internal___content = 'childrenContentfulAuthorIntroductionTextNode.internal.content',
  childrenContentfulAuthorIntroductionTextNode___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___internal___description = 'childrenContentfulAuthorIntroductionTextNode.internal.description',
  childrenContentfulAuthorIntroductionTextNode___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___internal___type = 'childrenContentfulAuthorIntroductionTextNode.internal.type',
  childrenContentfulAuthorIntroductionTextNode___introduction = 'childrenContentfulAuthorIntroductionTextNode.introduction',
  childrenContentfulAuthorIntroductionTextNode___sys___type = 'childrenContentfulAuthorIntroductionTextNode.sys.type',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___rawBody = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___fileAbsolutePath = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___frontmatter___title = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.title',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___slug = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___body = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.body',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___excerpt = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___headings = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___headings___value = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings.value',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___headings___depth = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings.depth',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___html = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.html',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___mdxAST = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___tableOfContents = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___timeToRead = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___paragraphs = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.paragraphs',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___sentences = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.sentences',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___words = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.words',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___parent___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.parent.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___parent___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.parent.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___children___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___children___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.children.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___content = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.content',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___description = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.description',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___childrenMdx___internal___type = 'childrenContentfulAuthorIntroductionTextNode.childrenMdx.internal.type',
  childrenContentfulAuthorIntroductionTextNode___childMdx___rawBody = 'childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody',
  childrenContentfulAuthorIntroductionTextNode___childMdx___fileAbsolutePath = 'childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath',
  childrenContentfulAuthorIntroductionTextNode___childMdx___frontmatter___title = 'childrenContentfulAuthorIntroductionTextNode.childMdx.frontmatter.title',
  childrenContentfulAuthorIntroductionTextNode___childMdx___slug = 'childrenContentfulAuthorIntroductionTextNode.childMdx.slug',
  childrenContentfulAuthorIntroductionTextNode___childMdx___body = 'childrenContentfulAuthorIntroductionTextNode.childMdx.body',
  childrenContentfulAuthorIntroductionTextNode___childMdx___excerpt = 'childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt',
  childrenContentfulAuthorIntroductionTextNode___childMdx___headings = 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings',
  childrenContentfulAuthorIntroductionTextNode___childMdx___headings___value = 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings.value',
  childrenContentfulAuthorIntroductionTextNode___childMdx___headings___depth = 'childrenContentfulAuthorIntroductionTextNode.childMdx.headings.depth',
  childrenContentfulAuthorIntroductionTextNode___childMdx___html = 'childrenContentfulAuthorIntroductionTextNode.childMdx.html',
  childrenContentfulAuthorIntroductionTextNode___childMdx___mdxAST = 'childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST',
  childrenContentfulAuthorIntroductionTextNode___childMdx___tableOfContents = 'childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents',
  childrenContentfulAuthorIntroductionTextNode___childMdx___timeToRead = 'childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead',
  childrenContentfulAuthorIntroductionTextNode___childMdx___wordCount___paragraphs = 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.paragraphs',
  childrenContentfulAuthorIntroductionTextNode___childMdx___wordCount___sentences = 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.sentences',
  childrenContentfulAuthorIntroductionTextNode___childMdx___wordCount___words = 'childrenContentfulAuthorIntroductionTextNode.childMdx.wordCount.words',
  childrenContentfulAuthorIntroductionTextNode___childMdx___id = 'childrenContentfulAuthorIntroductionTextNode.childMdx.id',
  childrenContentfulAuthorIntroductionTextNode___childMdx___parent___id = 'childrenContentfulAuthorIntroductionTextNode.childMdx.parent.id',
  childrenContentfulAuthorIntroductionTextNode___childMdx___parent___children = 'childrenContentfulAuthorIntroductionTextNode.childMdx.parent.children',
  childrenContentfulAuthorIntroductionTextNode___childMdx___children = 'childrenContentfulAuthorIntroductionTextNode.childMdx.children',
  childrenContentfulAuthorIntroductionTextNode___childMdx___children___id = 'childrenContentfulAuthorIntroductionTextNode.childMdx.children.id',
  childrenContentfulAuthorIntroductionTextNode___childMdx___children___children = 'childrenContentfulAuthorIntroductionTextNode.childMdx.children.children',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___content = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.content',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___description = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.description',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___childMdx___internal___type = 'childrenContentfulAuthorIntroductionTextNode.childMdx.internal.type',
  childContentfulAuthorIntroductionTextNode___id = 'childContentfulAuthorIntroductionTextNode.id',
  childContentfulAuthorIntroductionTextNode___parent___id = 'childContentfulAuthorIntroductionTextNode.parent.id',
  childContentfulAuthorIntroductionTextNode___parent___parent___id = 'childContentfulAuthorIntroductionTextNode.parent.parent.id',
  childContentfulAuthorIntroductionTextNode___parent___parent___children = 'childContentfulAuthorIntroductionTextNode.parent.parent.children',
  childContentfulAuthorIntroductionTextNode___parent___children = 'childContentfulAuthorIntroductionTextNode.parent.children',
  childContentfulAuthorIntroductionTextNode___parent___children___id = 'childContentfulAuthorIntroductionTextNode.parent.children.id',
  childContentfulAuthorIntroductionTextNode___parent___children___children = 'childContentfulAuthorIntroductionTextNode.parent.children.children',
  childContentfulAuthorIntroductionTextNode___parent___internal___content = 'childContentfulAuthorIntroductionTextNode.parent.internal.content',
  childContentfulAuthorIntroductionTextNode___parent___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.parent.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___parent___internal___description = 'childContentfulAuthorIntroductionTextNode.parent.internal.description',
  childContentfulAuthorIntroductionTextNode___parent___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.parent.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___parent___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.parent.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___parent___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.parent.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___parent___internal___owner = 'childContentfulAuthorIntroductionTextNode.parent.internal.owner',
  childContentfulAuthorIntroductionTextNode___parent___internal___type = 'childContentfulAuthorIntroductionTextNode.parent.internal.type',
  childContentfulAuthorIntroductionTextNode___children = 'childContentfulAuthorIntroductionTextNode.children',
  childContentfulAuthorIntroductionTextNode___children___id = 'childContentfulAuthorIntroductionTextNode.children.id',
  childContentfulAuthorIntroductionTextNode___children___parent___id = 'childContentfulAuthorIntroductionTextNode.children.parent.id',
  childContentfulAuthorIntroductionTextNode___children___parent___children = 'childContentfulAuthorIntroductionTextNode.children.parent.children',
  childContentfulAuthorIntroductionTextNode___children___children = 'childContentfulAuthorIntroductionTextNode.children.children',
  childContentfulAuthorIntroductionTextNode___children___children___id = 'childContentfulAuthorIntroductionTextNode.children.children.id',
  childContentfulAuthorIntroductionTextNode___children___children___children = 'childContentfulAuthorIntroductionTextNode.children.children.children',
  childContentfulAuthorIntroductionTextNode___children___internal___content = 'childContentfulAuthorIntroductionTextNode.children.internal.content',
  childContentfulAuthorIntroductionTextNode___children___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.children.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___children___internal___description = 'childContentfulAuthorIntroductionTextNode.children.internal.description',
  childContentfulAuthorIntroductionTextNode___children___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.children.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___children___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.children.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___children___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.children.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___children___internal___owner = 'childContentfulAuthorIntroductionTextNode.children.internal.owner',
  childContentfulAuthorIntroductionTextNode___children___internal___type = 'childContentfulAuthorIntroductionTextNode.children.internal.type',
  childContentfulAuthorIntroductionTextNode___internal___content = 'childContentfulAuthorIntroductionTextNode.internal.content',
  childContentfulAuthorIntroductionTextNode___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___internal___description = 'childContentfulAuthorIntroductionTextNode.internal.description',
  childContentfulAuthorIntroductionTextNode___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___internal___owner = 'childContentfulAuthorIntroductionTextNode.internal.owner',
  childContentfulAuthorIntroductionTextNode___internal___type = 'childContentfulAuthorIntroductionTextNode.internal.type',
  childContentfulAuthorIntroductionTextNode___introduction = 'childContentfulAuthorIntroductionTextNode.introduction',
  childContentfulAuthorIntroductionTextNode___sys___type = 'childContentfulAuthorIntroductionTextNode.sys.type',
  childContentfulAuthorIntroductionTextNode___childrenMdx = 'childContentfulAuthorIntroductionTextNode.childrenMdx',
  childContentfulAuthorIntroductionTextNode___childrenMdx___rawBody = 'childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody',
  childContentfulAuthorIntroductionTextNode___childrenMdx___fileAbsolutePath = 'childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath',
  childContentfulAuthorIntroductionTextNode___childrenMdx___frontmatter___title = 'childContentfulAuthorIntroductionTextNode.childrenMdx.frontmatter.title',
  childContentfulAuthorIntroductionTextNode___childrenMdx___slug = 'childContentfulAuthorIntroductionTextNode.childrenMdx.slug',
  childContentfulAuthorIntroductionTextNode___childrenMdx___body = 'childContentfulAuthorIntroductionTextNode.childrenMdx.body',
  childContentfulAuthorIntroductionTextNode___childrenMdx___excerpt = 'childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt',
  childContentfulAuthorIntroductionTextNode___childrenMdx___headings = 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings',
  childContentfulAuthorIntroductionTextNode___childrenMdx___headings___value = 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings.value',
  childContentfulAuthorIntroductionTextNode___childrenMdx___headings___depth = 'childContentfulAuthorIntroductionTextNode.childrenMdx.headings.depth',
  childContentfulAuthorIntroductionTextNode___childrenMdx___html = 'childContentfulAuthorIntroductionTextNode.childrenMdx.html',
  childContentfulAuthorIntroductionTextNode___childrenMdx___mdxAST = 'childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST',
  childContentfulAuthorIntroductionTextNode___childrenMdx___tableOfContents = 'childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents',
  childContentfulAuthorIntroductionTextNode___childrenMdx___timeToRead = 'childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead',
  childContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___paragraphs = 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.paragraphs',
  childContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___sentences = 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.sentences',
  childContentfulAuthorIntroductionTextNode___childrenMdx___wordCount___words = 'childContentfulAuthorIntroductionTextNode.childrenMdx.wordCount.words',
  childContentfulAuthorIntroductionTextNode___childrenMdx___id = 'childContentfulAuthorIntroductionTextNode.childrenMdx.id',
  childContentfulAuthorIntroductionTextNode___childrenMdx___parent___id = 'childContentfulAuthorIntroductionTextNode.childrenMdx.parent.id',
  childContentfulAuthorIntroductionTextNode___childrenMdx___parent___children = 'childContentfulAuthorIntroductionTextNode.childrenMdx.parent.children',
  childContentfulAuthorIntroductionTextNode___childrenMdx___children = 'childContentfulAuthorIntroductionTextNode.childrenMdx.children',
  childContentfulAuthorIntroductionTextNode___childrenMdx___children___id = 'childContentfulAuthorIntroductionTextNode.childrenMdx.children.id',
  childContentfulAuthorIntroductionTextNode___childrenMdx___children___children = 'childContentfulAuthorIntroductionTextNode.childrenMdx.children.children',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___content = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.content',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___description = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.description',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___owner = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.owner',
  childContentfulAuthorIntroductionTextNode___childrenMdx___internal___type = 'childContentfulAuthorIntroductionTextNode.childrenMdx.internal.type',
  childContentfulAuthorIntroductionTextNode___childMdx___rawBody = 'childContentfulAuthorIntroductionTextNode.childMdx.rawBody',
  childContentfulAuthorIntroductionTextNode___childMdx___fileAbsolutePath = 'childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath',
  childContentfulAuthorIntroductionTextNode___childMdx___frontmatter___title = 'childContentfulAuthorIntroductionTextNode.childMdx.frontmatter.title',
  childContentfulAuthorIntroductionTextNode___childMdx___slug = 'childContentfulAuthorIntroductionTextNode.childMdx.slug',
  childContentfulAuthorIntroductionTextNode___childMdx___body = 'childContentfulAuthorIntroductionTextNode.childMdx.body',
  childContentfulAuthorIntroductionTextNode___childMdx___excerpt = 'childContentfulAuthorIntroductionTextNode.childMdx.excerpt',
  childContentfulAuthorIntroductionTextNode___childMdx___headings = 'childContentfulAuthorIntroductionTextNode.childMdx.headings',
  childContentfulAuthorIntroductionTextNode___childMdx___headings___value = 'childContentfulAuthorIntroductionTextNode.childMdx.headings.value',
  childContentfulAuthorIntroductionTextNode___childMdx___headings___depth = 'childContentfulAuthorIntroductionTextNode.childMdx.headings.depth',
  childContentfulAuthorIntroductionTextNode___childMdx___html = 'childContentfulAuthorIntroductionTextNode.childMdx.html',
  childContentfulAuthorIntroductionTextNode___childMdx___mdxAST = 'childContentfulAuthorIntroductionTextNode.childMdx.mdxAST',
  childContentfulAuthorIntroductionTextNode___childMdx___tableOfContents = 'childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents',
  childContentfulAuthorIntroductionTextNode___childMdx___timeToRead = 'childContentfulAuthorIntroductionTextNode.childMdx.timeToRead',
  childContentfulAuthorIntroductionTextNode___childMdx___wordCount___paragraphs = 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.paragraphs',
  childContentfulAuthorIntroductionTextNode___childMdx___wordCount___sentences = 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.sentences',
  childContentfulAuthorIntroductionTextNode___childMdx___wordCount___words = 'childContentfulAuthorIntroductionTextNode.childMdx.wordCount.words',
  childContentfulAuthorIntroductionTextNode___childMdx___id = 'childContentfulAuthorIntroductionTextNode.childMdx.id',
  childContentfulAuthorIntroductionTextNode___childMdx___parent___id = 'childContentfulAuthorIntroductionTextNode.childMdx.parent.id',
  childContentfulAuthorIntroductionTextNode___childMdx___parent___children = 'childContentfulAuthorIntroductionTextNode.childMdx.parent.children',
  childContentfulAuthorIntroductionTextNode___childMdx___children = 'childContentfulAuthorIntroductionTextNode.childMdx.children',
  childContentfulAuthorIntroductionTextNode___childMdx___children___id = 'childContentfulAuthorIntroductionTextNode.childMdx.children.id',
  childContentfulAuthorIntroductionTextNode___childMdx___children___children = 'childContentfulAuthorIntroductionTextNode.childMdx.children.children',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___content = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.content',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___description = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.description',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___owner = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.owner',
  childContentfulAuthorIntroductionTextNode___childMdx___internal___type = 'childContentfulAuthorIntroductionTextNode.childMdx.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly group: ReadonlyArray<ContentfulMarkdownArticleGroupConnection>;
};


type ContentfulMarkdownArticleConnection_distinctArgs = {
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

enum ContentfulMarkdownArticleFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  publishedAt = 'publishedAt',
  disableSideHeader = 'disableSideHeader',
  isVirticalWriting = 'isVirticalWriting',
  align = 'align',
  author___contentful_id = 'author.contentful_id',
  author___id = 'author.id',
  author___node_locale = 'author.node_locale',
  author___name = 'author.name',
  author___instagram = 'author.instagram',
  author___markdownarticle = 'author.markdownarticle',
  author___markdownarticle___contentful_id = 'author.markdownarticle.contentful_id',
  author___markdownarticle___id = 'author.markdownarticle.id',
  author___markdownarticle___node_locale = 'author.markdownarticle.node_locale',
  author___markdownarticle___title = 'author.markdownarticle.title',
  author___markdownarticle___slug = 'author.markdownarticle.slug',
  author___markdownarticle___publishedAt = 'author.markdownarticle.publishedAt',
  author___markdownarticle___disableSideHeader = 'author.markdownarticle.disableSideHeader',
  author___markdownarticle___isVirticalWriting = 'author.markdownarticle.isVirticalWriting',
  author___markdownarticle___align = 'author.markdownarticle.align',
  author___markdownarticle___author___contentful_id = 'author.markdownarticle.author.contentful_id',
  author___markdownarticle___author___id = 'author.markdownarticle.author.id',
  author___markdownarticle___author___node_locale = 'author.markdownarticle.author.node_locale',
  author___markdownarticle___author___name = 'author.markdownarticle.author.name',
  author___markdownarticle___author___instagram = 'author.markdownarticle.author.instagram',
  author___markdownarticle___author___markdownarticle = 'author.markdownarticle.author.markdownarticle',
  author___markdownarticle___author___spaceId = 'author.markdownarticle.author.spaceId',
  author___markdownarticle___author___createdAt = 'author.markdownarticle.author.createdAt',
  author___markdownarticle___author___updatedAt = 'author.markdownarticle.author.updatedAt',
  author___markdownarticle___author___twitter = 'author.markdownarticle.author.twitter',
  author___markdownarticle___author___youtube = 'author.markdownarticle.author.youtube',
  author___markdownarticle___author___linktree = 'author.markdownarticle.author.linktree',
  author___markdownarticle___author___minnakikeru = 'author.markdownarticle.author.minnakikeru',
  author___markdownarticle___author___hatena = 'author.markdownarticle.author.hatena',
  author___markdownarticle___author___bandcamp = 'author.markdownarticle.author.bandcamp',
  author___markdownarticle___author___childrenContentfulAuthorIntroductionTextNode = 'author.markdownarticle.author.childrenContentfulAuthorIntroductionTextNode',
  author___markdownarticle___author___children = 'author.markdownarticle.author.children',
  author___markdownarticle___featuredImage___contentful_id = 'author.markdownarticle.featuredImage.contentful_id',
  author___markdownarticle___featuredImage___id = 'author.markdownarticle.featuredImage.id',
  author___markdownarticle___featuredImage___spaceId = 'author.markdownarticle.featuredImage.spaceId',
  author___markdownarticle___featuredImage___createdAt = 'author.markdownarticle.featuredImage.createdAt',
  author___markdownarticle___featuredImage___updatedAt = 'author.markdownarticle.featuredImage.updatedAt',
  author___markdownarticle___featuredImage___title = 'author.markdownarticle.featuredImage.title',
  author___markdownarticle___featuredImage___description = 'author.markdownarticle.featuredImage.description',
  author___markdownarticle___featuredImage___node_locale = 'author.markdownarticle.featuredImage.node_locale',
  author___markdownarticle___featuredImage___gatsbyImageData = 'author.markdownarticle.featuredImage.gatsbyImageData',
  author___markdownarticle___featuredImage___children = 'author.markdownarticle.featuredImage.children',
  author___markdownarticle___content___id = 'author.markdownarticle.content.id',
  author___markdownarticle___content___children = 'author.markdownarticle.content.children',
  author___markdownarticle___content___content = 'author.markdownarticle.content.content',
  author___markdownarticle___content___childrenMdx = 'author.markdownarticle.content.childrenMdx',
  author___markdownarticle___spaceId = 'author.markdownarticle.spaceId',
  author___markdownarticle___createdAt = 'author.markdownarticle.createdAt',
  author___markdownarticle___updatedAt = 'author.markdownarticle.updatedAt',
  author___markdownarticle___sys___type = 'author.markdownarticle.sys.type',
  author___markdownarticle___sys___revision = 'author.markdownarticle.sys.revision',
  author___markdownarticle___images = 'author.markdownarticle.images',
  author___markdownarticle___images___contentful_id = 'author.markdownarticle.images.contentful_id',
  author___markdownarticle___images___id = 'author.markdownarticle.images.id',
  author___markdownarticle___images___spaceId = 'author.markdownarticle.images.spaceId',
  author___markdownarticle___images___createdAt = 'author.markdownarticle.images.createdAt',
  author___markdownarticle___images___updatedAt = 'author.markdownarticle.images.updatedAt',
  author___markdownarticle___images___title = 'author.markdownarticle.images.title',
  author___markdownarticle___images___description = 'author.markdownarticle.images.description',
  author___markdownarticle___images___node_locale = 'author.markdownarticle.images.node_locale',
  author___markdownarticle___images___gatsbyImageData = 'author.markdownarticle.images.gatsbyImageData',
  author___markdownarticle___images___children = 'author.markdownarticle.images.children',
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode',
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode___id = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.id',
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode___children = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.children',
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode___content = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.content',
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMdx = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMdx',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___id = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.id',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___children = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.children',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___content = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.content',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMdx = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMdx',
  author___markdownarticle___parent___id = 'author.markdownarticle.parent.id',
  author___markdownarticle___parent___children = 'author.markdownarticle.parent.children',
  author___markdownarticle___children = 'author.markdownarticle.children',
  author___markdownarticle___children___id = 'author.markdownarticle.children.id',
  author___markdownarticle___children___children = 'author.markdownarticle.children.children',
  author___markdownarticle___internal___content = 'author.markdownarticle.internal.content',
  author___markdownarticle___internal___contentDigest = 'author.markdownarticle.internal.contentDigest',
  author___markdownarticle___internal___description = 'author.markdownarticle.internal.description',
  author___markdownarticle___internal___fieldOwners = 'author.markdownarticle.internal.fieldOwners',
  author___markdownarticle___internal___ignoreType = 'author.markdownarticle.internal.ignoreType',
  author___markdownarticle___internal___mediaType = 'author.markdownarticle.internal.mediaType',
  author___markdownarticle___internal___owner = 'author.markdownarticle.internal.owner',
  author___markdownarticle___internal___type = 'author.markdownarticle.internal.type',
  author___introduction___id = 'author.introduction.id',
  author___introduction___parent___id = 'author.introduction.parent.id',
  author___introduction___parent___children = 'author.introduction.parent.children',
  author___introduction___children = 'author.introduction.children',
  author___introduction___children___id = 'author.introduction.children.id',
  author___introduction___children___children = 'author.introduction.children.children',
  author___introduction___internal___content = 'author.introduction.internal.content',
  author___introduction___internal___contentDigest = 'author.introduction.internal.contentDigest',
  author___introduction___internal___description = 'author.introduction.internal.description',
  author___introduction___internal___fieldOwners = 'author.introduction.internal.fieldOwners',
  author___introduction___internal___ignoreType = 'author.introduction.internal.ignoreType',
  author___introduction___internal___mediaType = 'author.introduction.internal.mediaType',
  author___introduction___internal___owner = 'author.introduction.internal.owner',
  author___introduction___internal___type = 'author.introduction.internal.type',
  author___introduction___introduction = 'author.introduction.introduction',
  author___introduction___sys___type = 'author.introduction.sys.type',
  author___introduction___childrenMdx = 'author.introduction.childrenMdx',
  author___introduction___childrenMdx___rawBody = 'author.introduction.childrenMdx.rawBody',
  author___introduction___childrenMdx___fileAbsolutePath = 'author.introduction.childrenMdx.fileAbsolutePath',
  author___introduction___childrenMdx___slug = 'author.introduction.childrenMdx.slug',
  author___introduction___childrenMdx___body = 'author.introduction.childrenMdx.body',
  author___introduction___childrenMdx___excerpt = 'author.introduction.childrenMdx.excerpt',
  author___introduction___childrenMdx___headings = 'author.introduction.childrenMdx.headings',
  author___introduction___childrenMdx___html = 'author.introduction.childrenMdx.html',
  author___introduction___childrenMdx___mdxAST = 'author.introduction.childrenMdx.mdxAST',
  author___introduction___childrenMdx___tableOfContents = 'author.introduction.childrenMdx.tableOfContents',
  author___introduction___childrenMdx___timeToRead = 'author.introduction.childrenMdx.timeToRead',
  author___introduction___childrenMdx___id = 'author.introduction.childrenMdx.id',
  author___introduction___childrenMdx___children = 'author.introduction.childrenMdx.children',
  author___introduction___childMdx___rawBody = 'author.introduction.childMdx.rawBody',
  author___introduction___childMdx___fileAbsolutePath = 'author.introduction.childMdx.fileAbsolutePath',
  author___introduction___childMdx___slug = 'author.introduction.childMdx.slug',
  author___introduction___childMdx___body = 'author.introduction.childMdx.body',
  author___introduction___childMdx___excerpt = 'author.introduction.childMdx.excerpt',
  author___introduction___childMdx___headings = 'author.introduction.childMdx.headings',
  author___introduction___childMdx___html = 'author.introduction.childMdx.html',
  author___introduction___childMdx___mdxAST = 'author.introduction.childMdx.mdxAST',
  author___introduction___childMdx___tableOfContents = 'author.introduction.childMdx.tableOfContents',
  author___introduction___childMdx___timeToRead = 'author.introduction.childMdx.timeToRead',
  author___introduction___childMdx___id = 'author.introduction.childMdx.id',
  author___introduction___childMdx___children = 'author.introduction.childMdx.children',
  author___spaceId = 'author.spaceId',
  author___createdAt = 'author.createdAt',
  author___updatedAt = 'author.updatedAt',
  author___sys___type = 'author.sys.type',
  author___sys___revision = 'author.sys.revision',
  author___twitter = 'author.twitter',
  author___youtube = 'author.youtube',
  author___linktree = 'author.linktree',
  author___minnakikeru = 'author.minnakikeru',
  author___hatena = 'author.hatena',
  author___bandcamp = 'author.bandcamp',
  author___childrenContentfulAuthorIntroductionTextNode = 'author.childrenContentfulAuthorIntroductionTextNode',
  author___childrenContentfulAuthorIntroductionTextNode___id = 'author.childrenContentfulAuthorIntroductionTextNode.id',
  author___childrenContentfulAuthorIntroductionTextNode___parent___id = 'author.childrenContentfulAuthorIntroductionTextNode.parent.id',
  author___childrenContentfulAuthorIntroductionTextNode___parent___children = 'author.childrenContentfulAuthorIntroductionTextNode.parent.children',
  author___childrenContentfulAuthorIntroductionTextNode___children = 'author.childrenContentfulAuthorIntroductionTextNode.children',
  author___childrenContentfulAuthorIntroductionTextNode___children___id = 'author.childrenContentfulAuthorIntroductionTextNode.children.id',
  author___childrenContentfulAuthorIntroductionTextNode___children___children = 'author.childrenContentfulAuthorIntroductionTextNode.children.children',
  author___childrenContentfulAuthorIntroductionTextNode___internal___content = 'author.childrenContentfulAuthorIntroductionTextNode.internal.content',
  author___childrenContentfulAuthorIntroductionTextNode___internal___contentDigest = 'author.childrenContentfulAuthorIntroductionTextNode.internal.contentDigest',
  author___childrenContentfulAuthorIntroductionTextNode___internal___description = 'author.childrenContentfulAuthorIntroductionTextNode.internal.description',
  author___childrenContentfulAuthorIntroductionTextNode___internal___fieldOwners = 'author.childrenContentfulAuthorIntroductionTextNode.internal.fieldOwners',
  author___childrenContentfulAuthorIntroductionTextNode___internal___ignoreType = 'author.childrenContentfulAuthorIntroductionTextNode.internal.ignoreType',
  author___childrenContentfulAuthorIntroductionTextNode___internal___mediaType = 'author.childrenContentfulAuthorIntroductionTextNode.internal.mediaType',
  author___childrenContentfulAuthorIntroductionTextNode___internal___owner = 'author.childrenContentfulAuthorIntroductionTextNode.internal.owner',
  author___childrenContentfulAuthorIntroductionTextNode___internal___type = 'author.childrenContentfulAuthorIntroductionTextNode.internal.type',
  author___childrenContentfulAuthorIntroductionTextNode___introduction = 'author.childrenContentfulAuthorIntroductionTextNode.introduction',
  author___childrenContentfulAuthorIntroductionTextNode___sys___type = 'author.childrenContentfulAuthorIntroductionTextNode.sys.type',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___rawBody = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.rawBody',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___fileAbsolutePath = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___slug = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.slug',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___body = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.body',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___excerpt = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.excerpt',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___headings = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.headings',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___html = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.html',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___mdxAST = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___tableOfContents = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___timeToRead = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___id = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.id',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMdx___children = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMdx.children',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___rawBody = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.rawBody',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___fileAbsolutePath = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___slug = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.slug',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___body = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.body',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___excerpt = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.excerpt',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___headings = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.headings',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___html = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.html',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___mdxAST = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.mdxAST',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___tableOfContents = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.tableOfContents',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___timeToRead = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.timeToRead',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___id = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.id',
  author___childrenContentfulAuthorIntroductionTextNode___childMdx___children = 'author.childrenContentfulAuthorIntroductionTextNode.childMdx.children',
  author___childContentfulAuthorIntroductionTextNode___id = 'author.childContentfulAuthorIntroductionTextNode.id',
  author___childContentfulAuthorIntroductionTextNode___parent___id = 'author.childContentfulAuthorIntroductionTextNode.parent.id',
  author___childContentfulAuthorIntroductionTextNode___parent___children = 'author.childContentfulAuthorIntroductionTextNode.parent.children',
  author___childContentfulAuthorIntroductionTextNode___children = 'author.childContentfulAuthorIntroductionTextNode.children',
  author___childContentfulAuthorIntroductionTextNode___children___id = 'author.childContentfulAuthorIntroductionTextNode.children.id',
  author___childContentfulAuthorIntroductionTextNode___children___children = 'author.childContentfulAuthorIntroductionTextNode.children.children',
  author___childContentfulAuthorIntroductionTextNode___internal___content = 'author.childContentfulAuthorIntroductionTextNode.internal.content',
  author___childContentfulAuthorIntroductionTextNode___internal___contentDigest = 'author.childContentfulAuthorIntroductionTextNode.internal.contentDigest',
  author___childContentfulAuthorIntroductionTextNode___internal___description = 'author.childContentfulAuthorIntroductionTextNode.internal.description',
  author___childContentfulAuthorIntroductionTextNode___internal___fieldOwners = 'author.childContentfulAuthorIntroductionTextNode.internal.fieldOwners',
  author___childContentfulAuthorIntroductionTextNode___internal___ignoreType = 'author.childContentfulAuthorIntroductionTextNode.internal.ignoreType',
  author___childContentfulAuthorIntroductionTextNode___internal___mediaType = 'author.childContentfulAuthorIntroductionTextNode.internal.mediaType',
  author___childContentfulAuthorIntroductionTextNode___internal___owner = 'author.childContentfulAuthorIntroductionTextNode.internal.owner',
  author___childContentfulAuthorIntroductionTextNode___internal___type = 'author.childContentfulAuthorIntroductionTextNode.internal.type',
  author___childContentfulAuthorIntroductionTextNode___introduction = 'author.childContentfulAuthorIntroductionTextNode.introduction',
  author___childContentfulAuthorIntroductionTextNode___sys___type = 'author.childContentfulAuthorIntroductionTextNode.sys.type',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___rawBody = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.rawBody',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___fileAbsolutePath = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.fileAbsolutePath',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___slug = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.slug',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___body = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.body',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___excerpt = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.excerpt',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___headings = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.headings',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___html = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.html',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___mdxAST = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.mdxAST',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___tableOfContents = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.tableOfContents',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___timeToRead = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.timeToRead',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___id = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.id',
  author___childContentfulAuthorIntroductionTextNode___childrenMdx___children = 'author.childContentfulAuthorIntroductionTextNode.childrenMdx.children',
  author___childContentfulAuthorIntroductionTextNode___childMdx___rawBody = 'author.childContentfulAuthorIntroductionTextNode.childMdx.rawBody',
  author___childContentfulAuthorIntroductionTextNode___childMdx___fileAbsolutePath = 'author.childContentfulAuthorIntroductionTextNode.childMdx.fileAbsolutePath',
  author___childContentfulAuthorIntroductionTextNode___childMdx___slug = 'author.childContentfulAuthorIntroductionTextNode.childMdx.slug',
  author___childContentfulAuthorIntroductionTextNode___childMdx___body = 'author.childContentfulAuthorIntroductionTextNode.childMdx.body',
  author___childContentfulAuthorIntroductionTextNode___childMdx___excerpt = 'author.childContentfulAuthorIntroductionTextNode.childMdx.excerpt',
  author___childContentfulAuthorIntroductionTextNode___childMdx___headings = 'author.childContentfulAuthorIntroductionTextNode.childMdx.headings',
  author___childContentfulAuthorIntroductionTextNode___childMdx___html = 'author.childContentfulAuthorIntroductionTextNode.childMdx.html',
  author___childContentfulAuthorIntroductionTextNode___childMdx___mdxAST = 'author.childContentfulAuthorIntroductionTextNode.childMdx.mdxAST',
  author___childContentfulAuthorIntroductionTextNode___childMdx___tableOfContents = 'author.childContentfulAuthorIntroductionTextNode.childMdx.tableOfContents',
  author___childContentfulAuthorIntroductionTextNode___childMdx___timeToRead = 'author.childContentfulAuthorIntroductionTextNode.childMdx.timeToRead',
  author___childContentfulAuthorIntroductionTextNode___childMdx___id = 'author.childContentfulAuthorIntroductionTextNode.childMdx.id',
  author___childContentfulAuthorIntroductionTextNode___childMdx___children = 'author.childContentfulAuthorIntroductionTextNode.childMdx.children',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  featuredImage___contentful_id = 'featuredImage.contentful_id',
  featuredImage___id = 'featuredImage.id',
  featuredImage___spaceId = 'featuredImage.spaceId',
  featuredImage___createdAt = 'featuredImage.createdAt',
  featuredImage___updatedAt = 'featuredImage.updatedAt',
  featuredImage___file___url = 'featuredImage.file.url',
  featuredImage___file___details___size = 'featuredImage.file.details.size',
  featuredImage___file___fileName = 'featuredImage.file.fileName',
  featuredImage___file___contentType = 'featuredImage.file.contentType',
  featuredImage___title = 'featuredImage.title',
  featuredImage___description = 'featuredImage.description',
  featuredImage___node_locale = 'featuredImage.node_locale',
  featuredImage___sys___type = 'featuredImage.sys.type',
  featuredImage___sys___revision = 'featuredImage.sys.revision',
  featuredImage___localFile___sourceInstanceName = 'featuredImage.localFile.sourceInstanceName',
  featuredImage___localFile___absolutePath = 'featuredImage.localFile.absolutePath',
  featuredImage___localFile___relativePath = 'featuredImage.localFile.relativePath',
  featuredImage___localFile___extension = 'featuredImage.localFile.extension',
  featuredImage___localFile___size = 'featuredImage.localFile.size',
  featuredImage___localFile___prettySize = 'featuredImage.localFile.prettySize',
  featuredImage___localFile___modifiedTime = 'featuredImage.localFile.modifiedTime',
  featuredImage___localFile___accessTime = 'featuredImage.localFile.accessTime',
  featuredImage___localFile___changeTime = 'featuredImage.localFile.changeTime',
  featuredImage___localFile___birthTime = 'featuredImage.localFile.birthTime',
  featuredImage___localFile___root = 'featuredImage.localFile.root',
  featuredImage___localFile___dir = 'featuredImage.localFile.dir',
  featuredImage___localFile___base = 'featuredImage.localFile.base',
  featuredImage___localFile___ext = 'featuredImage.localFile.ext',
  featuredImage___localFile___name = 'featuredImage.localFile.name',
  featuredImage___localFile___relativeDirectory = 'featuredImage.localFile.relativeDirectory',
  featuredImage___localFile___dev = 'featuredImage.localFile.dev',
  featuredImage___localFile___mode = 'featuredImage.localFile.mode',
  featuredImage___localFile___nlink = 'featuredImage.localFile.nlink',
  featuredImage___localFile___uid = 'featuredImage.localFile.uid',
  featuredImage___localFile___gid = 'featuredImage.localFile.gid',
  featuredImage___localFile___rdev = 'featuredImage.localFile.rdev',
  featuredImage___localFile___ino = 'featuredImage.localFile.ino',
  featuredImage___localFile___atimeMs = 'featuredImage.localFile.atimeMs',
  featuredImage___localFile___mtimeMs = 'featuredImage.localFile.mtimeMs',
  featuredImage___localFile___ctimeMs = 'featuredImage.localFile.ctimeMs',
  featuredImage___localFile___atime = 'featuredImage.localFile.atime',
  featuredImage___localFile___mtime = 'featuredImage.localFile.mtime',
  featuredImage___localFile___ctime = 'featuredImage.localFile.ctime',
  featuredImage___localFile___birthtime = 'featuredImage.localFile.birthtime',
  featuredImage___localFile___birthtimeMs = 'featuredImage.localFile.birthtimeMs',
  featuredImage___localFile___blksize = 'featuredImage.localFile.blksize',
  featuredImage___localFile___blocks = 'featuredImage.localFile.blocks',
  featuredImage___localFile___url = 'featuredImage.localFile.url',
  featuredImage___localFile___publicURL = 'featuredImage.localFile.publicURL',
  featuredImage___localFile___childrenImageSharp = 'featuredImage.localFile.childrenImageSharp',
  featuredImage___localFile___childrenImageSharp___gatsbyImageData = 'featuredImage.localFile.childrenImageSharp.gatsbyImageData',
  featuredImage___localFile___childrenImageSharp___id = 'featuredImage.localFile.childrenImageSharp.id',
  featuredImage___localFile___childrenImageSharp___children = 'featuredImage.localFile.childrenImageSharp.children',
  featuredImage___localFile___childImageSharp___gatsbyImageData = 'featuredImage.localFile.childImageSharp.gatsbyImageData',
  featuredImage___localFile___childImageSharp___id = 'featuredImage.localFile.childImageSharp.id',
  featuredImage___localFile___childImageSharp___children = 'featuredImage.localFile.childImageSharp.children',
  featuredImage___localFile___childrenPagesJson = 'featuredImage.localFile.childrenPagesJson',
  featuredImage___localFile___childrenPagesJson___id = 'featuredImage.localFile.childrenPagesJson.id',
  featuredImage___localFile___childrenPagesJson___children = 'featuredImage.localFile.childrenPagesJson.children',
  featuredImage___localFile___childrenPagesJson___path = 'featuredImage.localFile.childrenPagesJson.path',
  featuredImage___localFile___childrenPagesJson___catchphrase = 'featuredImage.localFile.childrenPagesJson.catchphrase',
  featuredImage___localFile___childrenPagesJson___introduction = 'featuredImage.localFile.childrenPagesJson.introduction',
  featuredImage___localFile___childrenPagesJson___image = 'featuredImage.localFile.childrenPagesJson.image',
  featuredImage___localFile___childrenPagesJson___displayTitle = 'featuredImage.localFile.childrenPagesJson.displayTitle',
  featuredImage___localFile___childrenPagesJson___title = 'featuredImage.localFile.childrenPagesJson.title',
  featuredImage___localFile___childPagesJson___id = 'featuredImage.localFile.childPagesJson.id',
  featuredImage___localFile___childPagesJson___children = 'featuredImage.localFile.childPagesJson.children',
  featuredImage___localFile___childPagesJson___path = 'featuredImage.localFile.childPagesJson.path',
  featuredImage___localFile___childPagesJson___catchphrase = 'featuredImage.localFile.childPagesJson.catchphrase',
  featuredImage___localFile___childPagesJson___introduction = 'featuredImage.localFile.childPagesJson.introduction',
  featuredImage___localFile___childPagesJson___image = 'featuredImage.localFile.childPagesJson.image',
  featuredImage___localFile___childPagesJson___displayTitle = 'featuredImage.localFile.childPagesJson.displayTitle',
  featuredImage___localFile___childPagesJson___title = 'featuredImage.localFile.childPagesJson.title',
  featuredImage___localFile___id = 'featuredImage.localFile.id',
  featuredImage___localFile___parent___id = 'featuredImage.localFile.parent.id',
  featuredImage___localFile___parent___children = 'featuredImage.localFile.parent.children',
  featuredImage___localFile___children = 'featuredImage.localFile.children',
  featuredImage___localFile___children___id = 'featuredImage.localFile.children.id',
  featuredImage___localFile___children___children = 'featuredImage.localFile.children.children',
  featuredImage___localFile___internal___content = 'featuredImage.localFile.internal.content',
  featuredImage___localFile___internal___contentDigest = 'featuredImage.localFile.internal.contentDigest',
  featuredImage___localFile___internal___description = 'featuredImage.localFile.internal.description',
  featuredImage___localFile___internal___fieldOwners = 'featuredImage.localFile.internal.fieldOwners',
  featuredImage___localFile___internal___ignoreType = 'featuredImage.localFile.internal.ignoreType',
  featuredImage___localFile___internal___mediaType = 'featuredImage.localFile.internal.mediaType',
  featuredImage___localFile___internal___owner = 'featuredImage.localFile.internal.owner',
  featuredImage___localFile___internal___type = 'featuredImage.localFile.internal.type',
  featuredImage___fixed___base64 = 'featuredImage.fixed.base64',
  featuredImage___fixed___tracedSVG = 'featuredImage.fixed.tracedSVG',
  featuredImage___fixed___aspectRatio = 'featuredImage.fixed.aspectRatio',
  featuredImage___fixed___width = 'featuredImage.fixed.width',
  featuredImage___fixed___height = 'featuredImage.fixed.height',
  featuredImage___fixed___src = 'featuredImage.fixed.src',
  featuredImage___fixed___srcSet = 'featuredImage.fixed.srcSet',
  featuredImage___fixed___srcWebp = 'featuredImage.fixed.srcWebp',
  featuredImage___fixed___srcSetWebp = 'featuredImage.fixed.srcSetWebp',
  featuredImage___fluid___base64 = 'featuredImage.fluid.base64',
  featuredImage___fluid___tracedSVG = 'featuredImage.fluid.tracedSVG',
  featuredImage___fluid___aspectRatio = 'featuredImage.fluid.aspectRatio',
  featuredImage___fluid___src = 'featuredImage.fluid.src',
  featuredImage___fluid___srcSet = 'featuredImage.fluid.srcSet',
  featuredImage___fluid___srcWebp = 'featuredImage.fluid.srcWebp',
  featuredImage___fluid___srcSetWebp = 'featuredImage.fluid.srcSetWebp',
  featuredImage___fluid___sizes = 'featuredImage.fluid.sizes',
  featuredImage___gatsbyImageData = 'featuredImage.gatsbyImageData',
  featuredImage___resize___base64 = 'featuredImage.resize.base64',
  featuredImage___resize___tracedSVG = 'featuredImage.resize.tracedSVG',
  featuredImage___resize___src = 'featuredImage.resize.src',
  featuredImage___resize___width = 'featuredImage.resize.width',
  featuredImage___resize___height = 'featuredImage.resize.height',
  featuredImage___resize___aspectRatio = 'featuredImage.resize.aspectRatio',
  featuredImage___parent___id = 'featuredImage.parent.id',
  featuredImage___parent___parent___id = 'featuredImage.parent.parent.id',
  featuredImage___parent___parent___children = 'featuredImage.parent.parent.children',
  featuredImage___parent___children = 'featuredImage.parent.children',
  featuredImage___parent___children___id = 'featuredImage.parent.children.id',
  featuredImage___parent___children___children = 'featuredImage.parent.children.children',
  featuredImage___parent___internal___content = 'featuredImage.parent.internal.content',
  featuredImage___parent___internal___contentDigest = 'featuredImage.parent.internal.contentDigest',
  featuredImage___parent___internal___description = 'featuredImage.parent.internal.description',
  featuredImage___parent___internal___fieldOwners = 'featuredImage.parent.internal.fieldOwners',
  featuredImage___parent___internal___ignoreType = 'featuredImage.parent.internal.ignoreType',
  featuredImage___parent___internal___mediaType = 'featuredImage.parent.internal.mediaType',
  featuredImage___parent___internal___owner = 'featuredImage.parent.internal.owner',
  featuredImage___parent___internal___type = 'featuredImage.parent.internal.type',
  featuredImage___children = 'featuredImage.children',
  featuredImage___children___id = 'featuredImage.children.id',
  featuredImage___children___parent___id = 'featuredImage.children.parent.id',
  featuredImage___children___parent___children = 'featuredImage.children.parent.children',
  featuredImage___children___children = 'featuredImage.children.children',
  featuredImage___children___children___id = 'featuredImage.children.children.id',
  featuredImage___children___children___children = 'featuredImage.children.children.children',
  featuredImage___children___internal___content = 'featuredImage.children.internal.content',
  featuredImage___children___internal___contentDigest = 'featuredImage.children.internal.contentDigest',
  featuredImage___children___internal___description = 'featuredImage.children.internal.description',
  featuredImage___children___internal___fieldOwners = 'featuredImage.children.internal.fieldOwners',
  featuredImage___children___internal___ignoreType = 'featuredImage.children.internal.ignoreType',
  featuredImage___children___internal___mediaType = 'featuredImage.children.internal.mediaType',
  featuredImage___children___internal___owner = 'featuredImage.children.internal.owner',
  featuredImage___children___internal___type = 'featuredImage.children.internal.type',
  featuredImage___internal___content = 'featuredImage.internal.content',
  featuredImage___internal___contentDigest = 'featuredImage.internal.contentDigest',
  featuredImage___internal___description = 'featuredImage.internal.description',
  featuredImage___internal___fieldOwners = 'featuredImage.internal.fieldOwners',
  featuredImage___internal___ignoreType = 'featuredImage.internal.ignoreType',
  featuredImage___internal___mediaType = 'featuredImage.internal.mediaType',
  featuredImage___internal___owner = 'featuredImage.internal.owner',
  featuredImage___internal___type = 'featuredImage.internal.type',
  content___id = 'content.id',
  content___parent___id = 'content.parent.id',
  content___parent___parent___id = 'content.parent.parent.id',
  content___parent___parent___children = 'content.parent.parent.children',
  content___parent___children = 'content.parent.children',
  content___parent___children___id = 'content.parent.children.id',
  content___parent___children___children = 'content.parent.children.children',
  content___parent___internal___content = 'content.parent.internal.content',
  content___parent___internal___contentDigest = 'content.parent.internal.contentDigest',
  content___parent___internal___description = 'content.parent.internal.description',
  content___parent___internal___fieldOwners = 'content.parent.internal.fieldOwners',
  content___parent___internal___ignoreType = 'content.parent.internal.ignoreType',
  content___parent___internal___mediaType = 'content.parent.internal.mediaType',
  content___parent___internal___owner = 'content.parent.internal.owner',
  content___parent___internal___type = 'content.parent.internal.type',
  content___children = 'content.children',
  content___children___id = 'content.children.id',
  content___children___parent___id = 'content.children.parent.id',
  content___children___parent___children = 'content.children.parent.children',
  content___children___children = 'content.children.children',
  content___children___children___id = 'content.children.children.id',
  content___children___children___children = 'content.children.children.children',
  content___children___internal___content = 'content.children.internal.content',
  content___children___internal___contentDigest = 'content.children.internal.contentDigest',
  content___children___internal___description = 'content.children.internal.description',
  content___children___internal___fieldOwners = 'content.children.internal.fieldOwners',
  content___children___internal___ignoreType = 'content.children.internal.ignoreType',
  content___children___internal___mediaType = 'content.children.internal.mediaType',
  content___children___internal___owner = 'content.children.internal.owner',
  content___children___internal___type = 'content.children.internal.type',
  content___internal___content = 'content.internal.content',
  content___internal___contentDigest = 'content.internal.contentDigest',
  content___internal___description = 'content.internal.description',
  content___internal___fieldOwners = 'content.internal.fieldOwners',
  content___internal___ignoreType = 'content.internal.ignoreType',
  content___internal___mediaType = 'content.internal.mediaType',
  content___internal___owner = 'content.internal.owner',
  content___internal___type = 'content.internal.type',
  content___content = 'content.content',
  content___sys___type = 'content.sys.type',
  content___childrenMdx = 'content.childrenMdx',
  content___childrenMdx___rawBody = 'content.childrenMdx.rawBody',
  content___childrenMdx___fileAbsolutePath = 'content.childrenMdx.fileAbsolutePath',
  content___childrenMdx___frontmatter___title = 'content.childrenMdx.frontmatter.title',
  content___childrenMdx___slug = 'content.childrenMdx.slug',
  content___childrenMdx___body = 'content.childrenMdx.body',
  content___childrenMdx___excerpt = 'content.childrenMdx.excerpt',
  content___childrenMdx___headings = 'content.childrenMdx.headings',
  content___childrenMdx___headings___value = 'content.childrenMdx.headings.value',
  content___childrenMdx___headings___depth = 'content.childrenMdx.headings.depth',
  content___childrenMdx___html = 'content.childrenMdx.html',
  content___childrenMdx___mdxAST = 'content.childrenMdx.mdxAST',
  content___childrenMdx___tableOfContents = 'content.childrenMdx.tableOfContents',
  content___childrenMdx___timeToRead = 'content.childrenMdx.timeToRead',
  content___childrenMdx___wordCount___paragraphs = 'content.childrenMdx.wordCount.paragraphs',
  content___childrenMdx___wordCount___sentences = 'content.childrenMdx.wordCount.sentences',
  content___childrenMdx___wordCount___words = 'content.childrenMdx.wordCount.words',
  content___childrenMdx___id = 'content.childrenMdx.id',
  content___childrenMdx___parent___id = 'content.childrenMdx.parent.id',
  content___childrenMdx___parent___children = 'content.childrenMdx.parent.children',
  content___childrenMdx___children = 'content.childrenMdx.children',
  content___childrenMdx___children___id = 'content.childrenMdx.children.id',
  content___childrenMdx___children___children = 'content.childrenMdx.children.children',
  content___childrenMdx___internal___content = 'content.childrenMdx.internal.content',
  content___childrenMdx___internal___contentDigest = 'content.childrenMdx.internal.contentDigest',
  content___childrenMdx___internal___description = 'content.childrenMdx.internal.description',
  content___childrenMdx___internal___fieldOwners = 'content.childrenMdx.internal.fieldOwners',
  content___childrenMdx___internal___ignoreType = 'content.childrenMdx.internal.ignoreType',
  content___childrenMdx___internal___mediaType = 'content.childrenMdx.internal.mediaType',
  content___childrenMdx___internal___owner = 'content.childrenMdx.internal.owner',
  content___childrenMdx___internal___type = 'content.childrenMdx.internal.type',
  content___childMdx___rawBody = 'content.childMdx.rawBody',
  content___childMdx___fileAbsolutePath = 'content.childMdx.fileAbsolutePath',
  content___childMdx___frontmatter___title = 'content.childMdx.frontmatter.title',
  content___childMdx___slug = 'content.childMdx.slug',
  content___childMdx___body = 'content.childMdx.body',
  content___childMdx___excerpt = 'content.childMdx.excerpt',
  content___childMdx___headings = 'content.childMdx.headings',
  content___childMdx___headings___value = 'content.childMdx.headings.value',
  content___childMdx___headings___depth = 'content.childMdx.headings.depth',
  content___childMdx___html = 'content.childMdx.html',
  content___childMdx___mdxAST = 'content.childMdx.mdxAST',
  content___childMdx___tableOfContents = 'content.childMdx.tableOfContents',
  content___childMdx___timeToRead = 'content.childMdx.timeToRead',
  content___childMdx___wordCount___paragraphs = 'content.childMdx.wordCount.paragraphs',
  content___childMdx___wordCount___sentences = 'content.childMdx.wordCount.sentences',
  content___childMdx___wordCount___words = 'content.childMdx.wordCount.words',
  content___childMdx___id = 'content.childMdx.id',
  content___childMdx___parent___id = 'content.childMdx.parent.id',
  content___childMdx___parent___children = 'content.childMdx.parent.children',
  content___childMdx___children = 'content.childMdx.children',
  content___childMdx___children___id = 'content.childMdx.children.id',
  content___childMdx___children___children = 'content.childMdx.children.children',
  content___childMdx___internal___content = 'content.childMdx.internal.content',
  content___childMdx___internal___contentDigest = 'content.childMdx.internal.contentDigest',
  content___childMdx___internal___description = 'content.childMdx.internal.description',
  content___childMdx___internal___fieldOwners = 'content.childMdx.internal.fieldOwners',
  content___childMdx___internal___ignoreType = 'content.childMdx.internal.ignoreType',
  content___childMdx___internal___mediaType = 'content.childMdx.internal.mediaType',
  content___childMdx___internal___owner = 'content.childMdx.internal.owner',
  content___childMdx___internal___type = 'content.childMdx.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  images = 'images',
  images___contentful_id = 'images.contentful_id',
  images___id = 'images.id',
  images___spaceId = 'images.spaceId',
  images___createdAt = 'images.createdAt',
  images___updatedAt = 'images.updatedAt',
  images___file___url = 'images.file.url',
  images___file___details___size = 'images.file.details.size',
  images___file___fileName = 'images.file.fileName',
  images___file___contentType = 'images.file.contentType',
  images___title = 'images.title',
  images___description = 'images.description',
  images___node_locale = 'images.node_locale',
  images___sys___type = 'images.sys.type',
  images___sys___revision = 'images.sys.revision',
  images___localFile___sourceInstanceName = 'images.localFile.sourceInstanceName',
  images___localFile___absolutePath = 'images.localFile.absolutePath',
  images___localFile___relativePath = 'images.localFile.relativePath',
  images___localFile___extension = 'images.localFile.extension',
  images___localFile___size = 'images.localFile.size',
  images___localFile___prettySize = 'images.localFile.prettySize',
  images___localFile___modifiedTime = 'images.localFile.modifiedTime',
  images___localFile___accessTime = 'images.localFile.accessTime',
  images___localFile___changeTime = 'images.localFile.changeTime',
  images___localFile___birthTime = 'images.localFile.birthTime',
  images___localFile___root = 'images.localFile.root',
  images___localFile___dir = 'images.localFile.dir',
  images___localFile___base = 'images.localFile.base',
  images___localFile___ext = 'images.localFile.ext',
  images___localFile___name = 'images.localFile.name',
  images___localFile___relativeDirectory = 'images.localFile.relativeDirectory',
  images___localFile___dev = 'images.localFile.dev',
  images___localFile___mode = 'images.localFile.mode',
  images___localFile___nlink = 'images.localFile.nlink',
  images___localFile___uid = 'images.localFile.uid',
  images___localFile___gid = 'images.localFile.gid',
  images___localFile___rdev = 'images.localFile.rdev',
  images___localFile___ino = 'images.localFile.ino',
  images___localFile___atimeMs = 'images.localFile.atimeMs',
  images___localFile___mtimeMs = 'images.localFile.mtimeMs',
  images___localFile___ctimeMs = 'images.localFile.ctimeMs',
  images___localFile___atime = 'images.localFile.atime',
  images___localFile___mtime = 'images.localFile.mtime',
  images___localFile___ctime = 'images.localFile.ctime',
  images___localFile___birthtime = 'images.localFile.birthtime',
  images___localFile___birthtimeMs = 'images.localFile.birthtimeMs',
  images___localFile___blksize = 'images.localFile.blksize',
  images___localFile___blocks = 'images.localFile.blocks',
  images___localFile___url = 'images.localFile.url',
  images___localFile___publicURL = 'images.localFile.publicURL',
  images___localFile___childrenImageSharp = 'images.localFile.childrenImageSharp',
  images___localFile___childrenImageSharp___gatsbyImageData = 'images.localFile.childrenImageSharp.gatsbyImageData',
  images___localFile___childrenImageSharp___id = 'images.localFile.childrenImageSharp.id',
  images___localFile___childrenImageSharp___children = 'images.localFile.childrenImageSharp.children',
  images___localFile___childImageSharp___gatsbyImageData = 'images.localFile.childImageSharp.gatsbyImageData',
  images___localFile___childImageSharp___id = 'images.localFile.childImageSharp.id',
  images___localFile___childImageSharp___children = 'images.localFile.childImageSharp.children',
  images___localFile___childrenPagesJson = 'images.localFile.childrenPagesJson',
  images___localFile___childrenPagesJson___id = 'images.localFile.childrenPagesJson.id',
  images___localFile___childrenPagesJson___children = 'images.localFile.childrenPagesJson.children',
  images___localFile___childrenPagesJson___path = 'images.localFile.childrenPagesJson.path',
  images___localFile___childrenPagesJson___catchphrase = 'images.localFile.childrenPagesJson.catchphrase',
  images___localFile___childrenPagesJson___introduction = 'images.localFile.childrenPagesJson.introduction',
  images___localFile___childrenPagesJson___image = 'images.localFile.childrenPagesJson.image',
  images___localFile___childrenPagesJson___displayTitle = 'images.localFile.childrenPagesJson.displayTitle',
  images___localFile___childrenPagesJson___title = 'images.localFile.childrenPagesJson.title',
  images___localFile___childPagesJson___id = 'images.localFile.childPagesJson.id',
  images___localFile___childPagesJson___children = 'images.localFile.childPagesJson.children',
  images___localFile___childPagesJson___path = 'images.localFile.childPagesJson.path',
  images___localFile___childPagesJson___catchphrase = 'images.localFile.childPagesJson.catchphrase',
  images___localFile___childPagesJson___introduction = 'images.localFile.childPagesJson.introduction',
  images___localFile___childPagesJson___image = 'images.localFile.childPagesJson.image',
  images___localFile___childPagesJson___displayTitle = 'images.localFile.childPagesJson.displayTitle',
  images___localFile___childPagesJson___title = 'images.localFile.childPagesJson.title',
  images___localFile___id = 'images.localFile.id',
  images___localFile___parent___id = 'images.localFile.parent.id',
  images___localFile___parent___children = 'images.localFile.parent.children',
  images___localFile___children = 'images.localFile.children',
  images___localFile___children___id = 'images.localFile.children.id',
  images___localFile___children___children = 'images.localFile.children.children',
  images___localFile___internal___content = 'images.localFile.internal.content',
  images___localFile___internal___contentDigest = 'images.localFile.internal.contentDigest',
  images___localFile___internal___description = 'images.localFile.internal.description',
  images___localFile___internal___fieldOwners = 'images.localFile.internal.fieldOwners',
  images___localFile___internal___ignoreType = 'images.localFile.internal.ignoreType',
  images___localFile___internal___mediaType = 'images.localFile.internal.mediaType',
  images___localFile___internal___owner = 'images.localFile.internal.owner',
  images___localFile___internal___type = 'images.localFile.internal.type',
  images___fixed___base64 = 'images.fixed.base64',
  images___fixed___tracedSVG = 'images.fixed.tracedSVG',
  images___fixed___aspectRatio = 'images.fixed.aspectRatio',
  images___fixed___width = 'images.fixed.width',
  images___fixed___height = 'images.fixed.height',
  images___fixed___src = 'images.fixed.src',
  images___fixed___srcSet = 'images.fixed.srcSet',
  images___fixed___srcWebp = 'images.fixed.srcWebp',
  images___fixed___srcSetWebp = 'images.fixed.srcSetWebp',
  images___fluid___base64 = 'images.fluid.base64',
  images___fluid___tracedSVG = 'images.fluid.tracedSVG',
  images___fluid___aspectRatio = 'images.fluid.aspectRatio',
  images___fluid___src = 'images.fluid.src',
  images___fluid___srcSet = 'images.fluid.srcSet',
  images___fluid___srcWebp = 'images.fluid.srcWebp',
  images___fluid___srcSetWebp = 'images.fluid.srcSetWebp',
  images___fluid___sizes = 'images.fluid.sizes',
  images___gatsbyImageData = 'images.gatsbyImageData',
  images___resize___base64 = 'images.resize.base64',
  images___resize___tracedSVG = 'images.resize.tracedSVG',
  images___resize___src = 'images.resize.src',
  images___resize___width = 'images.resize.width',
  images___resize___height = 'images.resize.height',
  images___resize___aspectRatio = 'images.resize.aspectRatio',
  images___parent___id = 'images.parent.id',
  images___parent___parent___id = 'images.parent.parent.id',
  images___parent___parent___children = 'images.parent.parent.children',
  images___parent___children = 'images.parent.children',
  images___parent___children___id = 'images.parent.children.id',
  images___parent___children___children = 'images.parent.children.children',
  images___parent___internal___content = 'images.parent.internal.content',
  images___parent___internal___contentDigest = 'images.parent.internal.contentDigest',
  images___parent___internal___description = 'images.parent.internal.description',
  images___parent___internal___fieldOwners = 'images.parent.internal.fieldOwners',
  images___parent___internal___ignoreType = 'images.parent.internal.ignoreType',
  images___parent___internal___mediaType = 'images.parent.internal.mediaType',
  images___parent___internal___owner = 'images.parent.internal.owner',
  images___parent___internal___type = 'images.parent.internal.type',
  images___children = 'images.children',
  images___children___id = 'images.children.id',
  images___children___parent___id = 'images.children.parent.id',
  images___children___parent___children = 'images.children.parent.children',
  images___children___children = 'images.children.children',
  images___children___children___id = 'images.children.children.id',
  images___children___children___children = 'images.children.children.children',
  images___children___internal___content = 'images.children.internal.content',
  images___children___internal___contentDigest = 'images.children.internal.contentDigest',
  images___children___internal___description = 'images.children.internal.description',
  images___children___internal___fieldOwners = 'images.children.internal.fieldOwners',
  images___children___internal___ignoreType = 'images.children.internal.ignoreType',
  images___children___internal___mediaType = 'images.children.internal.mediaType',
  images___children___internal___owner = 'images.children.internal.owner',
  images___children___internal___type = 'images.children.internal.type',
  images___internal___content = 'images.internal.content',
  images___internal___contentDigest = 'images.internal.contentDigest',
  images___internal___description = 'images.internal.description',
  images___internal___fieldOwners = 'images.internal.fieldOwners',
  images___internal___ignoreType = 'images.internal.ignoreType',
  images___internal___mediaType = 'images.internal.mediaType',
  images___internal___owner = 'images.internal.owner',
  images___internal___type = 'images.internal.type',
  childrenContentfulMarkdownArticleContentTextNode = 'childrenContentfulMarkdownArticleContentTextNode',
  childrenContentfulMarkdownArticleContentTextNode___id = 'childrenContentfulMarkdownArticleContentTextNode.id',
  childrenContentfulMarkdownArticleContentTextNode___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___parent___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.parent.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___parent___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.parent.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___parent___children___id = 'childrenContentfulMarkdownArticleContentTextNode.parent.children.id',
  childrenContentfulMarkdownArticleContentTextNode___parent___children___children = 'childrenContentfulMarkdownArticleContentTextNode.parent.children.children',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___parent___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.parent.internal.type',
  childrenContentfulMarkdownArticleContentTextNode___children = 'childrenContentfulMarkdownArticleContentTextNode.children',
  childrenContentfulMarkdownArticleContentTextNode___children___id = 'childrenContentfulMarkdownArticleContentTextNode.children.id',
  childrenContentfulMarkdownArticleContentTextNode___children___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.children.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___children___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.children.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___children___children = 'childrenContentfulMarkdownArticleContentTextNode.children.children',
  childrenContentfulMarkdownArticleContentTextNode___children___children___id = 'childrenContentfulMarkdownArticleContentTextNode.children.children.id',
  childrenContentfulMarkdownArticleContentTextNode___children___children___children = 'childrenContentfulMarkdownArticleContentTextNode.children.children.children',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___children___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.children.internal.type',
  childrenContentfulMarkdownArticleContentTextNode___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.internal.type',
  childrenContentfulMarkdownArticleContentTextNode___content = 'childrenContentfulMarkdownArticleContentTextNode.content',
  childrenContentfulMarkdownArticleContentTextNode___sys___type = 'childrenContentfulMarkdownArticleContentTextNode.sys.type',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___rawBody = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___fileAbsolutePath = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___frontmatter___title = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.title',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___slug = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.slug',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___body = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.body',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___excerpt = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___headings = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___headings___value = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings.value',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___headings___depth = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.headings.depth',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___html = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.html',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___mdxAST = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___tableOfContents = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___timeToRead = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___paragraphs = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.paragraphs',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___sentences = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.sentences',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___words = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.words',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___children___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___children___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.children.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___childrenMdx___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.childrenMdx.internal.type',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___rawBody = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.rawBody',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___fileAbsolutePath = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___frontmatter___title = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.title',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___slug = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.slug',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___body = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.body',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___excerpt = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.excerpt',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___headings = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___headings___value = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings.value',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___headings___depth = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.headings.depth',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___html = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.html',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___mdxAST = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.mdxAST',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___tableOfContents = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___timeToRead = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.timeToRead',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___wordCount___paragraphs = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.paragraphs',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___wordCount___sentences = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.sentences',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___wordCount___words = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.wordCount.words',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___id = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.id',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___children = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___children___id = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children.id',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___children___children = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.children.children',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___childMdx___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.childMdx.internal.type',
  childContentfulMarkdownArticleContentTextNode___id = 'childContentfulMarkdownArticleContentTextNode.id',
  childContentfulMarkdownArticleContentTextNode___parent___id = 'childContentfulMarkdownArticleContentTextNode.parent.id',
  childContentfulMarkdownArticleContentTextNode___parent___parent___id = 'childContentfulMarkdownArticleContentTextNode.parent.parent.id',
  childContentfulMarkdownArticleContentTextNode___parent___parent___children = 'childContentfulMarkdownArticleContentTextNode.parent.parent.children',
  childContentfulMarkdownArticleContentTextNode___parent___children = 'childContentfulMarkdownArticleContentTextNode.parent.children',
  childContentfulMarkdownArticleContentTextNode___parent___children___id = 'childContentfulMarkdownArticleContentTextNode.parent.children.id',
  childContentfulMarkdownArticleContentTextNode___parent___children___children = 'childContentfulMarkdownArticleContentTextNode.parent.children.children',
  childContentfulMarkdownArticleContentTextNode___parent___internal___content = 'childContentfulMarkdownArticleContentTextNode.parent.internal.content',
  childContentfulMarkdownArticleContentTextNode___parent___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.parent.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___parent___internal___description = 'childContentfulMarkdownArticleContentTextNode.parent.internal.description',
  childContentfulMarkdownArticleContentTextNode___parent___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.parent.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___parent___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.parent.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___parent___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.parent.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___parent___internal___owner = 'childContentfulMarkdownArticleContentTextNode.parent.internal.owner',
  childContentfulMarkdownArticleContentTextNode___parent___internal___type = 'childContentfulMarkdownArticleContentTextNode.parent.internal.type',
  childContentfulMarkdownArticleContentTextNode___children = 'childContentfulMarkdownArticleContentTextNode.children',
  childContentfulMarkdownArticleContentTextNode___children___id = 'childContentfulMarkdownArticleContentTextNode.children.id',
  childContentfulMarkdownArticleContentTextNode___children___parent___id = 'childContentfulMarkdownArticleContentTextNode.children.parent.id',
  childContentfulMarkdownArticleContentTextNode___children___parent___children = 'childContentfulMarkdownArticleContentTextNode.children.parent.children',
  childContentfulMarkdownArticleContentTextNode___children___children = 'childContentfulMarkdownArticleContentTextNode.children.children',
  childContentfulMarkdownArticleContentTextNode___children___children___id = 'childContentfulMarkdownArticleContentTextNode.children.children.id',
  childContentfulMarkdownArticleContentTextNode___children___children___children = 'childContentfulMarkdownArticleContentTextNode.children.children.children',
  childContentfulMarkdownArticleContentTextNode___children___internal___content = 'childContentfulMarkdownArticleContentTextNode.children.internal.content',
  childContentfulMarkdownArticleContentTextNode___children___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.children.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___children___internal___description = 'childContentfulMarkdownArticleContentTextNode.children.internal.description',
  childContentfulMarkdownArticleContentTextNode___children___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.children.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___children___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.children.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___children___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.children.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___children___internal___owner = 'childContentfulMarkdownArticleContentTextNode.children.internal.owner',
  childContentfulMarkdownArticleContentTextNode___children___internal___type = 'childContentfulMarkdownArticleContentTextNode.children.internal.type',
  childContentfulMarkdownArticleContentTextNode___internal___content = 'childContentfulMarkdownArticleContentTextNode.internal.content',
  childContentfulMarkdownArticleContentTextNode___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___internal___description = 'childContentfulMarkdownArticleContentTextNode.internal.description',
  childContentfulMarkdownArticleContentTextNode___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___internal___owner = 'childContentfulMarkdownArticleContentTextNode.internal.owner',
  childContentfulMarkdownArticleContentTextNode___internal___type = 'childContentfulMarkdownArticleContentTextNode.internal.type',
  childContentfulMarkdownArticleContentTextNode___content = 'childContentfulMarkdownArticleContentTextNode.content',
  childContentfulMarkdownArticleContentTextNode___sys___type = 'childContentfulMarkdownArticleContentTextNode.sys.type',
  childContentfulMarkdownArticleContentTextNode___childrenMdx = 'childContentfulMarkdownArticleContentTextNode.childrenMdx',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___rawBody = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.rawBody',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___fileAbsolutePath = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.fileAbsolutePath',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___frontmatter___title = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.frontmatter.title',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___slug = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.slug',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___body = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.body',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___excerpt = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.excerpt',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___headings = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___headings___value = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings.value',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___headings___depth = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.headings.depth',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___html = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.html',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___mdxAST = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.mdxAST',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___tableOfContents = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.tableOfContents',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___timeToRead = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.timeToRead',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___paragraphs = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.paragraphs',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___sentences = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.sentences',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___wordCount___words = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.wordCount.words',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___id = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.id',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___parent___id = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.parent.id',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___parent___children = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.parent.children',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___children = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___children___id = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children.id',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___children___children = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.children.children',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___content = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.content',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___description = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.description',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___owner = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.owner',
  childContentfulMarkdownArticleContentTextNode___childrenMdx___internal___type = 'childContentfulMarkdownArticleContentTextNode.childrenMdx.internal.type',
  childContentfulMarkdownArticleContentTextNode___childMdx___rawBody = 'childContentfulMarkdownArticleContentTextNode.childMdx.rawBody',
  childContentfulMarkdownArticleContentTextNode___childMdx___fileAbsolutePath = 'childContentfulMarkdownArticleContentTextNode.childMdx.fileAbsolutePath',
  childContentfulMarkdownArticleContentTextNode___childMdx___frontmatter___title = 'childContentfulMarkdownArticleContentTextNode.childMdx.frontmatter.title',
  childContentfulMarkdownArticleContentTextNode___childMdx___slug = 'childContentfulMarkdownArticleContentTextNode.childMdx.slug',
  childContentfulMarkdownArticleContentTextNode___childMdx___body = 'childContentfulMarkdownArticleContentTextNode.childMdx.body',
  childContentfulMarkdownArticleContentTextNode___childMdx___excerpt = 'childContentfulMarkdownArticleContentTextNode.childMdx.excerpt',
  childContentfulMarkdownArticleContentTextNode___childMdx___headings = 'childContentfulMarkdownArticleContentTextNode.childMdx.headings',
  childContentfulMarkdownArticleContentTextNode___childMdx___headings___value = 'childContentfulMarkdownArticleContentTextNode.childMdx.headings.value',
  childContentfulMarkdownArticleContentTextNode___childMdx___headings___depth = 'childContentfulMarkdownArticleContentTextNode.childMdx.headings.depth',
  childContentfulMarkdownArticleContentTextNode___childMdx___html = 'childContentfulMarkdownArticleContentTextNode.childMdx.html',
  childContentfulMarkdownArticleContentTextNode___childMdx___mdxAST = 'childContentfulMarkdownArticleContentTextNode.childMdx.mdxAST',
  childContentfulMarkdownArticleContentTextNode___childMdx___tableOfContents = 'childContentfulMarkdownArticleContentTextNode.childMdx.tableOfContents',
  childContentfulMarkdownArticleContentTextNode___childMdx___timeToRead = 'childContentfulMarkdownArticleContentTextNode.childMdx.timeToRead',
  childContentfulMarkdownArticleContentTextNode___childMdx___wordCount___paragraphs = 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.paragraphs',
  childContentfulMarkdownArticleContentTextNode___childMdx___wordCount___sentences = 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.sentences',
  childContentfulMarkdownArticleContentTextNode___childMdx___wordCount___words = 'childContentfulMarkdownArticleContentTextNode.childMdx.wordCount.words',
  childContentfulMarkdownArticleContentTextNode___childMdx___id = 'childContentfulMarkdownArticleContentTextNode.childMdx.id',
  childContentfulMarkdownArticleContentTextNode___childMdx___parent___id = 'childContentfulMarkdownArticleContentTextNode.childMdx.parent.id',
  childContentfulMarkdownArticleContentTextNode___childMdx___parent___children = 'childContentfulMarkdownArticleContentTextNode.childMdx.parent.children',
  childContentfulMarkdownArticleContentTextNode___childMdx___children = 'childContentfulMarkdownArticleContentTextNode.childMdx.children',
  childContentfulMarkdownArticleContentTextNode___childMdx___children___id = 'childContentfulMarkdownArticleContentTextNode.childMdx.children.id',
  childContentfulMarkdownArticleContentTextNode___childMdx___children___children = 'childContentfulMarkdownArticleContentTextNode.childMdx.children.children',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___content = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.content',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___description = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.description',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___owner = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.owner',
  childContentfulMarkdownArticleContentTextNode___childMdx___internal___type = 'childContentfulMarkdownArticleContentTextNode.childMdx.internal.type',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulMarkdownArticleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulMarkdownArticleEdge>;
  readonly nodes: ReadonlyArray<ContentfulMarkdownArticle>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulMarkdownArticleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulMarkdownArticleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MdxConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};


type MdxConnection_distinctArgs = {
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

enum MdxFieldsEnum {
  rawBody = 'rawBody',
  fileAbsolutePath = 'fileAbsolutePath',
  frontmatter___title = 'frontmatter.title',
  slug = 'slug',
  body = 'body',
  excerpt = 'excerpt',
  headings = 'headings',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  html = 'html',
  mdxAST = 'mdxAST',
  tableOfContents = 'tableOfContents',
  timeToRead = 'timeToRead',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MdxGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulMarkdownArticleContentTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMarkdownArticleContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMarkdownArticleContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulMarkdownArticleContentTextNodeGroupConnection>;
};


type contentfulMarkdownArticleContentTextNodeConnection_distinctArgs = {
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

enum contentfulMarkdownArticleContentTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  content = 'content',
  sys___type = 'sys.type',
  childrenMdx = 'childrenMdx',
  childrenMdx___rawBody = 'childrenMdx.rawBody',
  childrenMdx___fileAbsolutePath = 'childrenMdx.fileAbsolutePath',
  childrenMdx___frontmatter___title = 'childrenMdx.frontmatter.title',
  childrenMdx___slug = 'childrenMdx.slug',
  childrenMdx___body = 'childrenMdx.body',
  childrenMdx___excerpt = 'childrenMdx.excerpt',
  childrenMdx___headings = 'childrenMdx.headings',
  childrenMdx___headings___value = 'childrenMdx.headings.value',
  childrenMdx___headings___depth = 'childrenMdx.headings.depth',
  childrenMdx___html = 'childrenMdx.html',
  childrenMdx___mdxAST = 'childrenMdx.mdxAST',
  childrenMdx___tableOfContents = 'childrenMdx.tableOfContents',
  childrenMdx___timeToRead = 'childrenMdx.timeToRead',
  childrenMdx___wordCount___paragraphs = 'childrenMdx.wordCount.paragraphs',
  childrenMdx___wordCount___sentences = 'childrenMdx.wordCount.sentences',
  childrenMdx___wordCount___words = 'childrenMdx.wordCount.words',
  childrenMdx___id = 'childrenMdx.id',
  childrenMdx___parent___id = 'childrenMdx.parent.id',
  childrenMdx___parent___parent___id = 'childrenMdx.parent.parent.id',
  childrenMdx___parent___parent___children = 'childrenMdx.parent.parent.children',
  childrenMdx___parent___children = 'childrenMdx.parent.children',
  childrenMdx___parent___children___id = 'childrenMdx.parent.children.id',
  childrenMdx___parent___children___children = 'childrenMdx.parent.children.children',
  childrenMdx___parent___internal___content = 'childrenMdx.parent.internal.content',
  childrenMdx___parent___internal___contentDigest = 'childrenMdx.parent.internal.contentDigest',
  childrenMdx___parent___internal___description = 'childrenMdx.parent.internal.description',
  childrenMdx___parent___internal___fieldOwners = 'childrenMdx.parent.internal.fieldOwners',
  childrenMdx___parent___internal___ignoreType = 'childrenMdx.parent.internal.ignoreType',
  childrenMdx___parent___internal___mediaType = 'childrenMdx.parent.internal.mediaType',
  childrenMdx___parent___internal___owner = 'childrenMdx.parent.internal.owner',
  childrenMdx___parent___internal___type = 'childrenMdx.parent.internal.type',
  childrenMdx___children = 'childrenMdx.children',
  childrenMdx___children___id = 'childrenMdx.children.id',
  childrenMdx___children___parent___id = 'childrenMdx.children.parent.id',
  childrenMdx___children___parent___children = 'childrenMdx.children.parent.children',
  childrenMdx___children___children = 'childrenMdx.children.children',
  childrenMdx___children___children___id = 'childrenMdx.children.children.id',
  childrenMdx___children___children___children = 'childrenMdx.children.children.children',
  childrenMdx___children___internal___content = 'childrenMdx.children.internal.content',
  childrenMdx___children___internal___contentDigest = 'childrenMdx.children.internal.contentDigest',
  childrenMdx___children___internal___description = 'childrenMdx.children.internal.description',
  childrenMdx___children___internal___fieldOwners = 'childrenMdx.children.internal.fieldOwners',
  childrenMdx___children___internal___ignoreType = 'childrenMdx.children.internal.ignoreType',
  childrenMdx___children___internal___mediaType = 'childrenMdx.children.internal.mediaType',
  childrenMdx___children___internal___owner = 'childrenMdx.children.internal.owner',
  childrenMdx___children___internal___type = 'childrenMdx.children.internal.type',
  childrenMdx___internal___content = 'childrenMdx.internal.content',
  childrenMdx___internal___contentDigest = 'childrenMdx.internal.contentDigest',
  childrenMdx___internal___description = 'childrenMdx.internal.description',
  childrenMdx___internal___fieldOwners = 'childrenMdx.internal.fieldOwners',
  childrenMdx___internal___ignoreType = 'childrenMdx.internal.ignoreType',
  childrenMdx___internal___mediaType = 'childrenMdx.internal.mediaType',
  childrenMdx___internal___owner = 'childrenMdx.internal.owner',
  childrenMdx___internal___type = 'childrenMdx.internal.type',
  childMdx___rawBody = 'childMdx.rawBody',
  childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx.frontmatter.title',
  childMdx___slug = 'childMdx.slug',
  childMdx___body = 'childMdx.body',
  childMdx___excerpt = 'childMdx.excerpt',
  childMdx___headings = 'childMdx.headings',
  childMdx___headings___value = 'childMdx.headings.value',
  childMdx___headings___depth = 'childMdx.headings.depth',
  childMdx___html = 'childMdx.html',
  childMdx___mdxAST = 'childMdx.mdxAST',
  childMdx___tableOfContents = 'childMdx.tableOfContents',
  childMdx___timeToRead = 'childMdx.timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
  childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
  childMdx___wordCount___words = 'childMdx.wordCount.words',
  childMdx___id = 'childMdx.id',
  childMdx___parent___id = 'childMdx.parent.id',
  childMdx___parent___parent___id = 'childMdx.parent.parent.id',
  childMdx___parent___parent___children = 'childMdx.parent.parent.children',
  childMdx___parent___children = 'childMdx.parent.children',
  childMdx___parent___children___id = 'childMdx.parent.children.id',
  childMdx___parent___children___children = 'childMdx.parent.children.children',
  childMdx___parent___internal___content = 'childMdx.parent.internal.content',
  childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
  childMdx___parent___internal___description = 'childMdx.parent.internal.description',
  childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
  childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
  childMdx___parent___internal___type = 'childMdx.parent.internal.type',
  childMdx___children = 'childMdx.children',
  childMdx___children___id = 'childMdx.children.id',
  childMdx___children___parent___id = 'childMdx.children.parent.id',
  childMdx___children___parent___children = 'childMdx.children.parent.children',
  childMdx___children___children = 'childMdx.children.children',
  childMdx___children___children___id = 'childMdx.children.children.id',
  childMdx___children___children___children = 'childMdx.children.children.children',
  childMdx___children___internal___content = 'childMdx.children.internal.content',
  childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
  childMdx___children___internal___description = 'childMdx.children.internal.description',
  childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
  childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
  childMdx___children___internal___owner = 'childMdx.children.internal.owner',
  childMdx___children___internal___type = 'childMdx.children.internal.type',
  childMdx___internal___content = 'childMdx.internal.content',
  childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
  childMdx___internal___description = 'childMdx.internal.description',
  childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
  childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
  childMdx___internal___mediaType = 'childMdx.internal.mediaType',
  childMdx___internal___owner = 'childMdx.internal.owner',
  childMdx___internal___type = 'childMdx.internal.type'
}

type contentfulMarkdownArticleContentTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulMarkdownArticleContentTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulMarkdownArticleContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly group: ReadonlyArray<contentfulAuthorIntroductionTextNodeGroupConnection>;
};


type contentfulAuthorIntroductionTextNodeConnection_distinctArgs = {
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

enum contentfulAuthorIntroductionTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  introduction = 'introduction',
  sys___type = 'sys.type',
  childrenMdx = 'childrenMdx',
  childrenMdx___rawBody = 'childrenMdx.rawBody',
  childrenMdx___fileAbsolutePath = 'childrenMdx.fileAbsolutePath',
  childrenMdx___frontmatter___title = 'childrenMdx.frontmatter.title',
  childrenMdx___slug = 'childrenMdx.slug',
  childrenMdx___body = 'childrenMdx.body',
  childrenMdx___excerpt = 'childrenMdx.excerpt',
  childrenMdx___headings = 'childrenMdx.headings',
  childrenMdx___headings___value = 'childrenMdx.headings.value',
  childrenMdx___headings___depth = 'childrenMdx.headings.depth',
  childrenMdx___html = 'childrenMdx.html',
  childrenMdx___mdxAST = 'childrenMdx.mdxAST',
  childrenMdx___tableOfContents = 'childrenMdx.tableOfContents',
  childrenMdx___timeToRead = 'childrenMdx.timeToRead',
  childrenMdx___wordCount___paragraphs = 'childrenMdx.wordCount.paragraphs',
  childrenMdx___wordCount___sentences = 'childrenMdx.wordCount.sentences',
  childrenMdx___wordCount___words = 'childrenMdx.wordCount.words',
  childrenMdx___id = 'childrenMdx.id',
  childrenMdx___parent___id = 'childrenMdx.parent.id',
  childrenMdx___parent___parent___id = 'childrenMdx.parent.parent.id',
  childrenMdx___parent___parent___children = 'childrenMdx.parent.parent.children',
  childrenMdx___parent___children = 'childrenMdx.parent.children',
  childrenMdx___parent___children___id = 'childrenMdx.parent.children.id',
  childrenMdx___parent___children___children = 'childrenMdx.parent.children.children',
  childrenMdx___parent___internal___content = 'childrenMdx.parent.internal.content',
  childrenMdx___parent___internal___contentDigest = 'childrenMdx.parent.internal.contentDigest',
  childrenMdx___parent___internal___description = 'childrenMdx.parent.internal.description',
  childrenMdx___parent___internal___fieldOwners = 'childrenMdx.parent.internal.fieldOwners',
  childrenMdx___parent___internal___ignoreType = 'childrenMdx.parent.internal.ignoreType',
  childrenMdx___parent___internal___mediaType = 'childrenMdx.parent.internal.mediaType',
  childrenMdx___parent___internal___owner = 'childrenMdx.parent.internal.owner',
  childrenMdx___parent___internal___type = 'childrenMdx.parent.internal.type',
  childrenMdx___children = 'childrenMdx.children',
  childrenMdx___children___id = 'childrenMdx.children.id',
  childrenMdx___children___parent___id = 'childrenMdx.children.parent.id',
  childrenMdx___children___parent___children = 'childrenMdx.children.parent.children',
  childrenMdx___children___children = 'childrenMdx.children.children',
  childrenMdx___children___children___id = 'childrenMdx.children.children.id',
  childrenMdx___children___children___children = 'childrenMdx.children.children.children',
  childrenMdx___children___internal___content = 'childrenMdx.children.internal.content',
  childrenMdx___children___internal___contentDigest = 'childrenMdx.children.internal.contentDigest',
  childrenMdx___children___internal___description = 'childrenMdx.children.internal.description',
  childrenMdx___children___internal___fieldOwners = 'childrenMdx.children.internal.fieldOwners',
  childrenMdx___children___internal___ignoreType = 'childrenMdx.children.internal.ignoreType',
  childrenMdx___children___internal___mediaType = 'childrenMdx.children.internal.mediaType',
  childrenMdx___children___internal___owner = 'childrenMdx.children.internal.owner',
  childrenMdx___children___internal___type = 'childrenMdx.children.internal.type',
  childrenMdx___internal___content = 'childrenMdx.internal.content',
  childrenMdx___internal___contentDigest = 'childrenMdx.internal.contentDigest',
  childrenMdx___internal___description = 'childrenMdx.internal.description',
  childrenMdx___internal___fieldOwners = 'childrenMdx.internal.fieldOwners',
  childrenMdx___internal___ignoreType = 'childrenMdx.internal.ignoreType',
  childrenMdx___internal___mediaType = 'childrenMdx.internal.mediaType',
  childrenMdx___internal___owner = 'childrenMdx.internal.owner',
  childrenMdx___internal___type = 'childrenMdx.internal.type',
  childMdx___rawBody = 'childMdx.rawBody',
  childMdx___fileAbsolutePath = 'childMdx.fileAbsolutePath',
  childMdx___frontmatter___title = 'childMdx.frontmatter.title',
  childMdx___slug = 'childMdx.slug',
  childMdx___body = 'childMdx.body',
  childMdx___excerpt = 'childMdx.excerpt',
  childMdx___headings = 'childMdx.headings',
  childMdx___headings___value = 'childMdx.headings.value',
  childMdx___headings___depth = 'childMdx.headings.depth',
  childMdx___html = 'childMdx.html',
  childMdx___mdxAST = 'childMdx.mdxAST',
  childMdx___tableOfContents = 'childMdx.tableOfContents',
  childMdx___timeToRead = 'childMdx.timeToRead',
  childMdx___wordCount___paragraphs = 'childMdx.wordCount.paragraphs',
  childMdx___wordCount___sentences = 'childMdx.wordCount.sentences',
  childMdx___wordCount___words = 'childMdx.wordCount.words',
  childMdx___id = 'childMdx.id',
  childMdx___parent___id = 'childMdx.parent.id',
  childMdx___parent___parent___id = 'childMdx.parent.parent.id',
  childMdx___parent___parent___children = 'childMdx.parent.parent.children',
  childMdx___parent___children = 'childMdx.parent.children',
  childMdx___parent___children___id = 'childMdx.parent.children.id',
  childMdx___parent___children___children = 'childMdx.parent.children.children',
  childMdx___parent___internal___content = 'childMdx.parent.internal.content',
  childMdx___parent___internal___contentDigest = 'childMdx.parent.internal.contentDigest',
  childMdx___parent___internal___description = 'childMdx.parent.internal.description',
  childMdx___parent___internal___fieldOwners = 'childMdx.parent.internal.fieldOwners',
  childMdx___parent___internal___ignoreType = 'childMdx.parent.internal.ignoreType',
  childMdx___parent___internal___mediaType = 'childMdx.parent.internal.mediaType',
  childMdx___parent___internal___owner = 'childMdx.parent.internal.owner',
  childMdx___parent___internal___type = 'childMdx.parent.internal.type',
  childMdx___children = 'childMdx.children',
  childMdx___children___id = 'childMdx.children.id',
  childMdx___children___parent___id = 'childMdx.children.parent.id',
  childMdx___children___parent___children = 'childMdx.children.parent.children',
  childMdx___children___children = 'childMdx.children.children',
  childMdx___children___children___id = 'childMdx.children.children.id',
  childMdx___children___children___children = 'childMdx.children.children.children',
  childMdx___children___internal___content = 'childMdx.children.internal.content',
  childMdx___children___internal___contentDigest = 'childMdx.children.internal.contentDigest',
  childMdx___children___internal___description = 'childMdx.children.internal.description',
  childMdx___children___internal___fieldOwners = 'childMdx.children.internal.fieldOwners',
  childMdx___children___internal___ignoreType = 'childMdx.children.internal.ignoreType',
  childMdx___children___internal___mediaType = 'childMdx.children.internal.mediaType',
  childMdx___children___internal___owner = 'childMdx.children.internal.owner',
  childMdx___children___internal___type = 'childMdx.children.internal.type',
  childMdx___internal___content = 'childMdx.internal.content',
  childMdx___internal___contentDigest = 'childMdx.internal.contentDigest',
  childMdx___internal___description = 'childMdx.internal.description',
  childMdx___internal___fieldOwners = 'childMdx.internal.fieldOwners',
  childMdx___internal___ignoreType = 'childMdx.internal.ignoreType',
  childMdx___internal___mediaType = 'childMdx.internal.mediaType',
  childMdx___internal___owner = 'childMdx.internal.owner',
  childMdx___internal___type = 'childMdx.internal.type'
}

type contentfulAuthorIntroductionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorIntroductionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorIntroductionTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulAuthorIntroductionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorIntroductionTextNodeFieldsEnum>>>;
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
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
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

enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys.type'
}

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type PagesJsonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PagesJsonEdge>;
  readonly nodes: ReadonlyArray<PagesJson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PagesJsonGroupConnection>;
};


type PagesJsonConnection_distinctArgs = {
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

enum PagesJsonFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  path = 'path',
  catchphrase = 'catchphrase',
  introduction = 'introduction',
  image = 'image',
  displayTitle = 'displayTitle',
  title = 'title'
}

type PagesJsonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PagesJsonEdge>;
  readonly nodes: ReadonlyArray<PagesJson>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PagesJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PagesJsonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
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

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly displayName: Maybe<BooleanQueryOperatorInput>;
  readonly fileName: Maybe<BooleanQueryOperatorInput>;
  readonly minify: Maybe<BooleanQueryOperatorInput>;
  readonly namespace: Maybe<StringQueryOperatorInput>;
  readonly transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
  readonly pure: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly enabled: Maybe<BooleanQueryOperatorInput>;
  readonly includeInDevelopment: Maybe<BooleanQueryOperatorInput>;
  readonly delayTimeout: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly lessBabel: Maybe<BooleanQueryOperatorInput>;
  readonly mediaTypes: Maybe<StringQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly titleTemplate: Maybe<StringQueryOperatorInput>;
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraphFilterInput>;
  readonly twitter: Maybe<SitePluginPluginOptionsTwitterFilterInput>;
  readonly facebook: Maybe<SitePluginPluginOptionsFacebookFilterInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly precachePages: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly background: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsOpenGraphFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly site_name: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<SitePluginPluginOptionsOpenGraphImagesFilterListInput>;
};

type SitePluginPluginOptionsOpenGraphImagesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsOpenGraphImagesFilterInput>;
};

type SitePluginPluginOptionsOpenGraphImagesFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly alt: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsTwitterFilterInput = {
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly site: Maybe<StringQueryOperatorInput>;
  readonly cardType: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFacebookFilterInput = {
  readonly appId: Maybe<FloatQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
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

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions.plugins',
  pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
  pluginOptions___plugins___id = 'pluginOptions.plugins.id',
  pluginOptions___plugins___name = 'pluginOptions.plugins.name',
  pluginOptions___plugins___version = 'pluginOptions.plugins.version',
  pluginOptions___plugins___pluginOptions___background = 'pluginOptions.plugins.pluginOptions.background',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___displayName = 'pluginOptions.displayName',
  pluginOptions___fileName = 'pluginOptions.fileName',
  pluginOptions___minify = 'pluginOptions.minify',
  pluginOptions___namespace = 'pluginOptions.namespace',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions.transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions.pure',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___environment = 'pluginOptions.environment',
  pluginOptions___enabled = 'pluginOptions.enabled',
  pluginOptions___includeInDevelopment = 'pluginOptions.includeInDevelopment',
  pluginOptions___delayTimeout = 'pluginOptions.delayTimeout',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___spaceId = 'pluginOptions.spaceId',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___downloadLocal = 'pluginOptions.downloadLocal',
  pluginOptions___host = 'pluginOptions.host',
  pluginOptions___forceFullSync = 'pluginOptions.forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions.pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions.assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions.useNameForId',
  pluginOptions___extensions = 'pluginOptions.extensions',
  pluginOptions___lessBabel = 'pluginOptions.lessBabel',
  pluginOptions___mediaTypes = 'pluginOptions.mediaTypes',
  pluginOptions___root = 'pluginOptions.root',
  pluginOptions___background = 'pluginOptions.background',
  pluginOptions___output = 'pluginOptions.output',
  pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions.crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___titleTemplate = 'pluginOptions.titleTemplate',
  pluginOptions___language = 'pluginOptions.language',
  pluginOptions___description = 'pluginOptions.description',
  pluginOptions___openGraph___title = 'pluginOptions.openGraph.title',
  pluginOptions___openGraph___description = 'pluginOptions.openGraph.description',
  pluginOptions___openGraph___type = 'pluginOptions.openGraph.type',
  pluginOptions___openGraph___locale = 'pluginOptions.openGraph.locale',
  pluginOptions___openGraph___url = 'pluginOptions.openGraph.url',
  pluginOptions___openGraph___site_name = 'pluginOptions.openGraph.site_name',
  pluginOptions___openGraph___images = 'pluginOptions.openGraph.images',
  pluginOptions___openGraph___images___url = 'pluginOptions.openGraph.images.url',
  pluginOptions___openGraph___images___width = 'pluginOptions.openGraph.images.width',
  pluginOptions___openGraph___images___height = 'pluginOptions.openGraph.images.height',
  pluginOptions___openGraph___images___alt = 'pluginOptions.openGraph.images.alt',
  pluginOptions___twitter___handle = 'pluginOptions.twitter.handle',
  pluginOptions___twitter___site = 'pluginOptions.twitter.site',
  pluginOptions___twitter___cardType = 'pluginOptions.twitter.cardType',
  pluginOptions___facebook___appId = 'pluginOptions.facebook.appId',
  pluginOptions___color = 'pluginOptions.color',
  pluginOptions___precachePages = 'pluginOptions.precachePages',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly home: Maybe<Pick<PagesJson, 'image' | 'catchphrase' | 'introduction'>>, readonly genki: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> } };

type ArticlesPageQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesPageQuery = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> }, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

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

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

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

}