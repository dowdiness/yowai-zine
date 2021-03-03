/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
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
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ContentfulResolutions>;
  readonly fluid: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ContentfulSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
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


type ContentfulAsset_resolutionsArgs = {
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


type ContentfulAsset_sizesArgs = {
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
  layout?: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
  backgroundColor: Maybe<Scalars['String']>;
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
  localFile___childrenMarkdownRemark = 'localFile.childrenMarkdownRemark',
  localFile___childrenMarkdownRemark___id = 'localFile.childrenMarkdownRemark.id',
  localFile___childrenMarkdownRemark___frontmatter___title = 'localFile.childrenMarkdownRemark.frontmatter.title',
  localFile___childrenMarkdownRemark___frontmatter___author = 'localFile.childrenMarkdownRemark.frontmatter.author',
  localFile___childrenMarkdownRemark___frontmatter___profile = 'localFile.childrenMarkdownRemark.frontmatter.profile',
  localFile___childrenMarkdownRemark___frontmatter___createdAt = 'localFile.childrenMarkdownRemark.frontmatter.createdAt',
  localFile___childrenMarkdownRemark___frontmatter___updatedAt = 'localFile.childrenMarkdownRemark.frontmatter.updatedAt',
  localFile___childrenMarkdownRemark___frontmatter___publishedAt = 'localFile.childrenMarkdownRemark.frontmatter.publishedAt',
  localFile___childrenMarkdownRemark___frontmatter___vol = 'localFile.childrenMarkdownRemark.frontmatter.vol',
  localFile___childrenMarkdownRemark___frontmatter___images = 'localFile.childrenMarkdownRemark.frontmatter.images',
  localFile___childrenMarkdownRemark___frontmatter___writing = 'localFile.childrenMarkdownRemark.frontmatter.writing',
  localFile___childrenMarkdownRemark___frontmatter___linktree = 'localFile.childrenMarkdownRemark.frontmatter.linktree',
  localFile___childrenMarkdownRemark___frontmatter___disableSideHeader = 'localFile.childrenMarkdownRemark.frontmatter.disableSideHeader',
  localFile___childrenMarkdownRemark___frontmatter___instagram = 'localFile.childrenMarkdownRemark.frontmatter.instagram',
  localFile___childrenMarkdownRemark___frontmatter___twitter = 'localFile.childrenMarkdownRemark.frontmatter.twitter',
  localFile___childrenMarkdownRemark___frontmatter___align = 'localFile.childrenMarkdownRemark.frontmatter.align',
  localFile___childrenMarkdownRemark___frontmatter___keywords = 'localFile.childrenMarkdownRemark.frontmatter.keywords',
  localFile___childrenMarkdownRemark___frontmatter___minnakikeru = 'localFile.childrenMarkdownRemark.frontmatter.minnakikeru',
  localFile___childrenMarkdownRemark___frontmatter___bandcamp = 'localFile.childrenMarkdownRemark.frontmatter.bandcamp',
  localFile___childrenMarkdownRemark___frontmatter___hatena = 'localFile.childrenMarkdownRemark.frontmatter.hatena',
  localFile___childrenMarkdownRemark___frontmatter___youtube = 'localFile.childrenMarkdownRemark.frontmatter.youtube',
  localFile___childrenMarkdownRemark___frontmatter___draft = 'localFile.childrenMarkdownRemark.frontmatter.draft',
  localFile___childrenMarkdownRemark___excerpt = 'localFile.childrenMarkdownRemark.excerpt',
  localFile___childrenMarkdownRemark___rawMarkdownBody = 'localFile.childrenMarkdownRemark.rawMarkdownBody',
  localFile___childrenMarkdownRemark___fileAbsolutePath = 'localFile.childrenMarkdownRemark.fileAbsolutePath',
  localFile___childrenMarkdownRemark___fields___draft = 'localFile.childrenMarkdownRemark.fields.draft',
  localFile___childrenMarkdownRemark___html = 'localFile.childrenMarkdownRemark.html',
  localFile___childrenMarkdownRemark___htmlAst = 'localFile.childrenMarkdownRemark.htmlAst',
  localFile___childrenMarkdownRemark___excerptAst = 'localFile.childrenMarkdownRemark.excerptAst',
  localFile___childrenMarkdownRemark___headings = 'localFile.childrenMarkdownRemark.headings',
  localFile___childrenMarkdownRemark___headings___id = 'localFile.childrenMarkdownRemark.headings.id',
  localFile___childrenMarkdownRemark___headings___value = 'localFile.childrenMarkdownRemark.headings.value',
  localFile___childrenMarkdownRemark___headings___depth = 'localFile.childrenMarkdownRemark.headings.depth',
  localFile___childrenMarkdownRemark___timeToRead = 'localFile.childrenMarkdownRemark.timeToRead',
  localFile___childrenMarkdownRemark___tableOfContents = 'localFile.childrenMarkdownRemark.tableOfContents',
  localFile___childrenMarkdownRemark___wordCount___paragraphs = 'localFile.childrenMarkdownRemark.wordCount.paragraphs',
  localFile___childrenMarkdownRemark___wordCount___sentences = 'localFile.childrenMarkdownRemark.wordCount.sentences',
  localFile___childrenMarkdownRemark___wordCount___words = 'localFile.childrenMarkdownRemark.wordCount.words',
  localFile___childrenMarkdownRemark___parent___id = 'localFile.childrenMarkdownRemark.parent.id',
  localFile___childrenMarkdownRemark___parent___children = 'localFile.childrenMarkdownRemark.parent.children',
  localFile___childrenMarkdownRemark___children = 'localFile.childrenMarkdownRemark.children',
  localFile___childrenMarkdownRemark___children___id = 'localFile.childrenMarkdownRemark.children.id',
  localFile___childrenMarkdownRemark___children___children = 'localFile.childrenMarkdownRemark.children.children',
  localFile___childrenMarkdownRemark___internal___content = 'localFile.childrenMarkdownRemark.internal.content',
  localFile___childrenMarkdownRemark___internal___contentDigest = 'localFile.childrenMarkdownRemark.internal.contentDigest',
  localFile___childrenMarkdownRemark___internal___description = 'localFile.childrenMarkdownRemark.internal.description',
  localFile___childrenMarkdownRemark___internal___fieldOwners = 'localFile.childrenMarkdownRemark.internal.fieldOwners',
  localFile___childrenMarkdownRemark___internal___ignoreType = 'localFile.childrenMarkdownRemark.internal.ignoreType',
  localFile___childrenMarkdownRemark___internal___mediaType = 'localFile.childrenMarkdownRemark.internal.mediaType',
  localFile___childrenMarkdownRemark___internal___owner = 'localFile.childrenMarkdownRemark.internal.owner',
  localFile___childrenMarkdownRemark___internal___type = 'localFile.childrenMarkdownRemark.internal.type',
  localFile___childMarkdownRemark___id = 'localFile.childMarkdownRemark.id',
  localFile___childMarkdownRemark___frontmatter___title = 'localFile.childMarkdownRemark.frontmatter.title',
  localFile___childMarkdownRemark___frontmatter___author = 'localFile.childMarkdownRemark.frontmatter.author',
  localFile___childMarkdownRemark___frontmatter___profile = 'localFile.childMarkdownRemark.frontmatter.profile',
  localFile___childMarkdownRemark___frontmatter___createdAt = 'localFile.childMarkdownRemark.frontmatter.createdAt',
  localFile___childMarkdownRemark___frontmatter___updatedAt = 'localFile.childMarkdownRemark.frontmatter.updatedAt',
  localFile___childMarkdownRemark___frontmatter___publishedAt = 'localFile.childMarkdownRemark.frontmatter.publishedAt',
  localFile___childMarkdownRemark___frontmatter___vol = 'localFile.childMarkdownRemark.frontmatter.vol',
  localFile___childMarkdownRemark___frontmatter___images = 'localFile.childMarkdownRemark.frontmatter.images',
  localFile___childMarkdownRemark___frontmatter___writing = 'localFile.childMarkdownRemark.frontmatter.writing',
  localFile___childMarkdownRemark___frontmatter___linktree = 'localFile.childMarkdownRemark.frontmatter.linktree',
  localFile___childMarkdownRemark___frontmatter___disableSideHeader = 'localFile.childMarkdownRemark.frontmatter.disableSideHeader',
  localFile___childMarkdownRemark___frontmatter___instagram = 'localFile.childMarkdownRemark.frontmatter.instagram',
  localFile___childMarkdownRemark___frontmatter___twitter = 'localFile.childMarkdownRemark.frontmatter.twitter',
  localFile___childMarkdownRemark___frontmatter___align = 'localFile.childMarkdownRemark.frontmatter.align',
  localFile___childMarkdownRemark___frontmatter___keywords = 'localFile.childMarkdownRemark.frontmatter.keywords',
  localFile___childMarkdownRemark___frontmatter___minnakikeru = 'localFile.childMarkdownRemark.frontmatter.minnakikeru',
  localFile___childMarkdownRemark___frontmatter___bandcamp = 'localFile.childMarkdownRemark.frontmatter.bandcamp',
  localFile___childMarkdownRemark___frontmatter___hatena = 'localFile.childMarkdownRemark.frontmatter.hatena',
  localFile___childMarkdownRemark___frontmatter___youtube = 'localFile.childMarkdownRemark.frontmatter.youtube',
  localFile___childMarkdownRemark___frontmatter___draft = 'localFile.childMarkdownRemark.frontmatter.draft',
  localFile___childMarkdownRemark___excerpt = 'localFile.childMarkdownRemark.excerpt',
  localFile___childMarkdownRemark___rawMarkdownBody = 'localFile.childMarkdownRemark.rawMarkdownBody',
  localFile___childMarkdownRemark___fileAbsolutePath = 'localFile.childMarkdownRemark.fileAbsolutePath',
  localFile___childMarkdownRemark___fields___draft = 'localFile.childMarkdownRemark.fields.draft',
  localFile___childMarkdownRemark___html = 'localFile.childMarkdownRemark.html',
  localFile___childMarkdownRemark___htmlAst = 'localFile.childMarkdownRemark.htmlAst',
  localFile___childMarkdownRemark___excerptAst = 'localFile.childMarkdownRemark.excerptAst',
  localFile___childMarkdownRemark___headings = 'localFile.childMarkdownRemark.headings',
  localFile___childMarkdownRemark___headings___id = 'localFile.childMarkdownRemark.headings.id',
  localFile___childMarkdownRemark___headings___value = 'localFile.childMarkdownRemark.headings.value',
  localFile___childMarkdownRemark___headings___depth = 'localFile.childMarkdownRemark.headings.depth',
  localFile___childMarkdownRemark___timeToRead = 'localFile.childMarkdownRemark.timeToRead',
  localFile___childMarkdownRemark___tableOfContents = 'localFile.childMarkdownRemark.tableOfContents',
  localFile___childMarkdownRemark___wordCount___paragraphs = 'localFile.childMarkdownRemark.wordCount.paragraphs',
  localFile___childMarkdownRemark___wordCount___sentences = 'localFile.childMarkdownRemark.wordCount.sentences',
  localFile___childMarkdownRemark___wordCount___words = 'localFile.childMarkdownRemark.wordCount.words',
  localFile___childMarkdownRemark___parent___id = 'localFile.childMarkdownRemark.parent.id',
  localFile___childMarkdownRemark___parent___children = 'localFile.childMarkdownRemark.parent.children',
  localFile___childMarkdownRemark___children = 'localFile.childMarkdownRemark.children',
  localFile___childMarkdownRemark___children___id = 'localFile.childMarkdownRemark.children.id',
  localFile___childMarkdownRemark___children___children = 'localFile.childMarkdownRemark.children.children',
  localFile___childMarkdownRemark___internal___content = 'localFile.childMarkdownRemark.internal.content',
  localFile___childMarkdownRemark___internal___contentDigest = 'localFile.childMarkdownRemark.internal.contentDigest',
  localFile___childMarkdownRemark___internal___description = 'localFile.childMarkdownRemark.internal.description',
  localFile___childMarkdownRemark___internal___fieldOwners = 'localFile.childMarkdownRemark.internal.fieldOwners',
  localFile___childMarkdownRemark___internal___ignoreType = 'localFile.childMarkdownRemark.internal.ignoreType',
  localFile___childMarkdownRemark___internal___mediaType = 'localFile.childMarkdownRemark.internal.mediaType',
  localFile___childMarkdownRemark___internal___owner = 'localFile.childMarkdownRemark.internal.owner',
  localFile___childMarkdownRemark___internal___type = 'localFile.childMarkdownRemark.internal.type',
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
  localFile___childrenImageSharp___resolutions___base64 = 'localFile.childrenImageSharp.resolutions.base64',
  localFile___childrenImageSharp___resolutions___tracedSVG = 'localFile.childrenImageSharp.resolutions.tracedSVG',
  localFile___childrenImageSharp___resolutions___aspectRatio = 'localFile.childrenImageSharp.resolutions.aspectRatio',
  localFile___childrenImageSharp___resolutions___width = 'localFile.childrenImageSharp.resolutions.width',
  localFile___childrenImageSharp___resolutions___height = 'localFile.childrenImageSharp.resolutions.height',
  localFile___childrenImageSharp___resolutions___src = 'localFile.childrenImageSharp.resolutions.src',
  localFile___childrenImageSharp___resolutions___srcSet = 'localFile.childrenImageSharp.resolutions.srcSet',
  localFile___childrenImageSharp___resolutions___srcWebp = 'localFile.childrenImageSharp.resolutions.srcWebp',
  localFile___childrenImageSharp___resolutions___srcSetWebp = 'localFile.childrenImageSharp.resolutions.srcSetWebp',
  localFile___childrenImageSharp___resolutions___originalName = 'localFile.childrenImageSharp.resolutions.originalName',
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
  localFile___childrenImageSharp___sizes___base64 = 'localFile.childrenImageSharp.sizes.base64',
  localFile___childrenImageSharp___sizes___tracedSVG = 'localFile.childrenImageSharp.sizes.tracedSVG',
  localFile___childrenImageSharp___sizes___aspectRatio = 'localFile.childrenImageSharp.sizes.aspectRatio',
  localFile___childrenImageSharp___sizes___src = 'localFile.childrenImageSharp.sizes.src',
  localFile___childrenImageSharp___sizes___srcSet = 'localFile.childrenImageSharp.sizes.srcSet',
  localFile___childrenImageSharp___sizes___srcWebp = 'localFile.childrenImageSharp.sizes.srcWebp',
  localFile___childrenImageSharp___sizes___srcSetWebp = 'localFile.childrenImageSharp.sizes.srcSetWebp',
  localFile___childrenImageSharp___sizes___sizes = 'localFile.childrenImageSharp.sizes.sizes',
  localFile___childrenImageSharp___sizes___originalImg = 'localFile.childrenImageSharp.sizes.originalImg',
  localFile___childrenImageSharp___sizes___originalName = 'localFile.childrenImageSharp.sizes.originalName',
  localFile___childrenImageSharp___sizes___presentationWidth = 'localFile.childrenImageSharp.sizes.presentationWidth',
  localFile___childrenImageSharp___sizes___presentationHeight = 'localFile.childrenImageSharp.sizes.presentationHeight',
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
  localFile___childImageSharp___resolutions___base64 = 'localFile.childImageSharp.resolutions.base64',
  localFile___childImageSharp___resolutions___tracedSVG = 'localFile.childImageSharp.resolutions.tracedSVG',
  localFile___childImageSharp___resolutions___aspectRatio = 'localFile.childImageSharp.resolutions.aspectRatio',
  localFile___childImageSharp___resolutions___width = 'localFile.childImageSharp.resolutions.width',
  localFile___childImageSharp___resolutions___height = 'localFile.childImageSharp.resolutions.height',
  localFile___childImageSharp___resolutions___src = 'localFile.childImageSharp.resolutions.src',
  localFile___childImageSharp___resolutions___srcSet = 'localFile.childImageSharp.resolutions.srcSet',
  localFile___childImageSharp___resolutions___srcWebp = 'localFile.childImageSharp.resolutions.srcWebp',
  localFile___childImageSharp___resolutions___srcSetWebp = 'localFile.childImageSharp.resolutions.srcSetWebp',
  localFile___childImageSharp___resolutions___originalName = 'localFile.childImageSharp.resolutions.originalName',
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
  localFile___childImageSharp___sizes___base64 = 'localFile.childImageSharp.sizes.base64',
  localFile___childImageSharp___sizes___tracedSVG = 'localFile.childImageSharp.sizes.tracedSVG',
  localFile___childImageSharp___sizes___aspectRatio = 'localFile.childImageSharp.sizes.aspectRatio',
  localFile___childImageSharp___sizes___src = 'localFile.childImageSharp.sizes.src',
  localFile___childImageSharp___sizes___srcSet = 'localFile.childImageSharp.sizes.srcSet',
  localFile___childImageSharp___sizes___srcWebp = 'localFile.childImageSharp.sizes.srcWebp',
  localFile___childImageSharp___sizes___srcSetWebp = 'localFile.childImageSharp.sizes.srcSetWebp',
  localFile___childImageSharp___sizes___sizes = 'localFile.childImageSharp.sizes.sizes',
  localFile___childImageSharp___sizes___originalImg = 'localFile.childImageSharp.sizes.originalImg',
  localFile___childImageSharp___sizes___originalName = 'localFile.childImageSharp.sizes.originalName',
  localFile___childImageSharp___sizes___presentationWidth = 'localFile.childImageSharp.sizes.presentationWidth',
  localFile___childImageSharp___sizes___presentationHeight = 'localFile.childImageSharp.sizes.presentationHeight',
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
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
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

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
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
  readonly resolutions: Maybe<ContentfulResolutionsFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly sizes: Maybe<ContentfulSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAssetFilterInput>;
};

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly instagram: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  readonly linktree: Maybe<Scalars['String']>;
  readonly minnakikeru: Maybe<Scalars['String']>;
  readonly markdownarticle: Maybe<ReadonlyArray<Maybe<ContentfulMarkdownArticle>>>;
  readonly hatena: Maybe<Scalars['String']>;
  readonly bandcamp: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulAuthorIntroductionTextNode */
  readonly childrenContentfulAuthorIntroductionTextNode: Maybe<ReadonlyArray<Maybe<contentfulAuthorIntroductionTextNode>>>;
  /**
   * Returns the first child node of type contentfulAuthorIntroductionTextNode or
   * null if there are no children of given type on this node
   */
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
  twitter = 'twitter',
  instagram = 'instagram',
  youtube = 'youtube',
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
  introduction___childrenMarkdownRemark = 'introduction.childrenMarkdownRemark',
  introduction___childrenMarkdownRemark___id = 'introduction.childrenMarkdownRemark.id',
  introduction___childrenMarkdownRemark___frontmatter___title = 'introduction.childrenMarkdownRemark.frontmatter.title',
  introduction___childrenMarkdownRemark___frontmatter___author = 'introduction.childrenMarkdownRemark.frontmatter.author',
  introduction___childrenMarkdownRemark___frontmatter___profile = 'introduction.childrenMarkdownRemark.frontmatter.profile',
  introduction___childrenMarkdownRemark___frontmatter___createdAt = 'introduction.childrenMarkdownRemark.frontmatter.createdAt',
  introduction___childrenMarkdownRemark___frontmatter___updatedAt = 'introduction.childrenMarkdownRemark.frontmatter.updatedAt',
  introduction___childrenMarkdownRemark___frontmatter___publishedAt = 'introduction.childrenMarkdownRemark.frontmatter.publishedAt',
  introduction___childrenMarkdownRemark___frontmatter___vol = 'introduction.childrenMarkdownRemark.frontmatter.vol',
  introduction___childrenMarkdownRemark___frontmatter___images = 'introduction.childrenMarkdownRemark.frontmatter.images',
  introduction___childrenMarkdownRemark___frontmatter___writing = 'introduction.childrenMarkdownRemark.frontmatter.writing',
  introduction___childrenMarkdownRemark___frontmatter___linktree = 'introduction.childrenMarkdownRemark.frontmatter.linktree',
  introduction___childrenMarkdownRemark___frontmatter___disableSideHeader = 'introduction.childrenMarkdownRemark.frontmatter.disableSideHeader',
  introduction___childrenMarkdownRemark___frontmatter___instagram = 'introduction.childrenMarkdownRemark.frontmatter.instagram',
  introduction___childrenMarkdownRemark___frontmatter___twitter = 'introduction.childrenMarkdownRemark.frontmatter.twitter',
  introduction___childrenMarkdownRemark___frontmatter___align = 'introduction.childrenMarkdownRemark.frontmatter.align',
  introduction___childrenMarkdownRemark___frontmatter___keywords = 'introduction.childrenMarkdownRemark.frontmatter.keywords',
  introduction___childrenMarkdownRemark___frontmatter___minnakikeru = 'introduction.childrenMarkdownRemark.frontmatter.minnakikeru',
  introduction___childrenMarkdownRemark___frontmatter___bandcamp = 'introduction.childrenMarkdownRemark.frontmatter.bandcamp',
  introduction___childrenMarkdownRemark___frontmatter___hatena = 'introduction.childrenMarkdownRemark.frontmatter.hatena',
  introduction___childrenMarkdownRemark___frontmatter___youtube = 'introduction.childrenMarkdownRemark.frontmatter.youtube',
  introduction___childrenMarkdownRemark___frontmatter___draft = 'introduction.childrenMarkdownRemark.frontmatter.draft',
  introduction___childrenMarkdownRemark___excerpt = 'introduction.childrenMarkdownRemark.excerpt',
  introduction___childrenMarkdownRemark___rawMarkdownBody = 'introduction.childrenMarkdownRemark.rawMarkdownBody',
  introduction___childrenMarkdownRemark___fileAbsolutePath = 'introduction.childrenMarkdownRemark.fileAbsolutePath',
  introduction___childrenMarkdownRemark___fields___draft = 'introduction.childrenMarkdownRemark.fields.draft',
  introduction___childrenMarkdownRemark___html = 'introduction.childrenMarkdownRemark.html',
  introduction___childrenMarkdownRemark___htmlAst = 'introduction.childrenMarkdownRemark.htmlAst',
  introduction___childrenMarkdownRemark___excerptAst = 'introduction.childrenMarkdownRemark.excerptAst',
  introduction___childrenMarkdownRemark___headings = 'introduction.childrenMarkdownRemark.headings',
  introduction___childrenMarkdownRemark___headings___id = 'introduction.childrenMarkdownRemark.headings.id',
  introduction___childrenMarkdownRemark___headings___value = 'introduction.childrenMarkdownRemark.headings.value',
  introduction___childrenMarkdownRemark___headings___depth = 'introduction.childrenMarkdownRemark.headings.depth',
  introduction___childrenMarkdownRemark___timeToRead = 'introduction.childrenMarkdownRemark.timeToRead',
  introduction___childrenMarkdownRemark___tableOfContents = 'introduction.childrenMarkdownRemark.tableOfContents',
  introduction___childrenMarkdownRemark___wordCount___paragraphs = 'introduction.childrenMarkdownRemark.wordCount.paragraphs',
  introduction___childrenMarkdownRemark___wordCount___sentences = 'introduction.childrenMarkdownRemark.wordCount.sentences',
  introduction___childrenMarkdownRemark___wordCount___words = 'introduction.childrenMarkdownRemark.wordCount.words',
  introduction___childrenMarkdownRemark___parent___id = 'introduction.childrenMarkdownRemark.parent.id',
  introduction___childrenMarkdownRemark___parent___children = 'introduction.childrenMarkdownRemark.parent.children',
  introduction___childrenMarkdownRemark___children = 'introduction.childrenMarkdownRemark.children',
  introduction___childrenMarkdownRemark___children___id = 'introduction.childrenMarkdownRemark.children.id',
  introduction___childrenMarkdownRemark___children___children = 'introduction.childrenMarkdownRemark.children.children',
  introduction___childrenMarkdownRemark___internal___content = 'introduction.childrenMarkdownRemark.internal.content',
  introduction___childrenMarkdownRemark___internal___contentDigest = 'introduction.childrenMarkdownRemark.internal.contentDigest',
  introduction___childrenMarkdownRemark___internal___description = 'introduction.childrenMarkdownRemark.internal.description',
  introduction___childrenMarkdownRemark___internal___fieldOwners = 'introduction.childrenMarkdownRemark.internal.fieldOwners',
  introduction___childrenMarkdownRemark___internal___ignoreType = 'introduction.childrenMarkdownRemark.internal.ignoreType',
  introduction___childrenMarkdownRemark___internal___mediaType = 'introduction.childrenMarkdownRemark.internal.mediaType',
  introduction___childrenMarkdownRemark___internal___owner = 'introduction.childrenMarkdownRemark.internal.owner',
  introduction___childrenMarkdownRemark___internal___type = 'introduction.childrenMarkdownRemark.internal.type',
  introduction___childMarkdownRemark___id = 'introduction.childMarkdownRemark.id',
  introduction___childMarkdownRemark___frontmatter___title = 'introduction.childMarkdownRemark.frontmatter.title',
  introduction___childMarkdownRemark___frontmatter___author = 'introduction.childMarkdownRemark.frontmatter.author',
  introduction___childMarkdownRemark___frontmatter___profile = 'introduction.childMarkdownRemark.frontmatter.profile',
  introduction___childMarkdownRemark___frontmatter___createdAt = 'introduction.childMarkdownRemark.frontmatter.createdAt',
  introduction___childMarkdownRemark___frontmatter___updatedAt = 'introduction.childMarkdownRemark.frontmatter.updatedAt',
  introduction___childMarkdownRemark___frontmatter___publishedAt = 'introduction.childMarkdownRemark.frontmatter.publishedAt',
  introduction___childMarkdownRemark___frontmatter___vol = 'introduction.childMarkdownRemark.frontmatter.vol',
  introduction___childMarkdownRemark___frontmatter___images = 'introduction.childMarkdownRemark.frontmatter.images',
  introduction___childMarkdownRemark___frontmatter___writing = 'introduction.childMarkdownRemark.frontmatter.writing',
  introduction___childMarkdownRemark___frontmatter___linktree = 'introduction.childMarkdownRemark.frontmatter.linktree',
  introduction___childMarkdownRemark___frontmatter___disableSideHeader = 'introduction.childMarkdownRemark.frontmatter.disableSideHeader',
  introduction___childMarkdownRemark___frontmatter___instagram = 'introduction.childMarkdownRemark.frontmatter.instagram',
  introduction___childMarkdownRemark___frontmatter___twitter = 'introduction.childMarkdownRemark.frontmatter.twitter',
  introduction___childMarkdownRemark___frontmatter___align = 'introduction.childMarkdownRemark.frontmatter.align',
  introduction___childMarkdownRemark___frontmatter___keywords = 'introduction.childMarkdownRemark.frontmatter.keywords',
  introduction___childMarkdownRemark___frontmatter___minnakikeru = 'introduction.childMarkdownRemark.frontmatter.minnakikeru',
  introduction___childMarkdownRemark___frontmatter___bandcamp = 'introduction.childMarkdownRemark.frontmatter.bandcamp',
  introduction___childMarkdownRemark___frontmatter___hatena = 'introduction.childMarkdownRemark.frontmatter.hatena',
  introduction___childMarkdownRemark___frontmatter___youtube = 'introduction.childMarkdownRemark.frontmatter.youtube',
  introduction___childMarkdownRemark___frontmatter___draft = 'introduction.childMarkdownRemark.frontmatter.draft',
  introduction___childMarkdownRemark___excerpt = 'introduction.childMarkdownRemark.excerpt',
  introduction___childMarkdownRemark___rawMarkdownBody = 'introduction.childMarkdownRemark.rawMarkdownBody',
  introduction___childMarkdownRemark___fileAbsolutePath = 'introduction.childMarkdownRemark.fileAbsolutePath',
  introduction___childMarkdownRemark___fields___draft = 'introduction.childMarkdownRemark.fields.draft',
  introduction___childMarkdownRemark___html = 'introduction.childMarkdownRemark.html',
  introduction___childMarkdownRemark___htmlAst = 'introduction.childMarkdownRemark.htmlAst',
  introduction___childMarkdownRemark___excerptAst = 'introduction.childMarkdownRemark.excerptAst',
  introduction___childMarkdownRemark___headings = 'introduction.childMarkdownRemark.headings',
  introduction___childMarkdownRemark___headings___id = 'introduction.childMarkdownRemark.headings.id',
  introduction___childMarkdownRemark___headings___value = 'introduction.childMarkdownRemark.headings.value',
  introduction___childMarkdownRemark___headings___depth = 'introduction.childMarkdownRemark.headings.depth',
  introduction___childMarkdownRemark___timeToRead = 'introduction.childMarkdownRemark.timeToRead',
  introduction___childMarkdownRemark___tableOfContents = 'introduction.childMarkdownRemark.tableOfContents',
  introduction___childMarkdownRemark___wordCount___paragraphs = 'introduction.childMarkdownRemark.wordCount.paragraphs',
  introduction___childMarkdownRemark___wordCount___sentences = 'introduction.childMarkdownRemark.wordCount.sentences',
  introduction___childMarkdownRemark___wordCount___words = 'introduction.childMarkdownRemark.wordCount.words',
  introduction___childMarkdownRemark___parent___id = 'introduction.childMarkdownRemark.parent.id',
  introduction___childMarkdownRemark___parent___children = 'introduction.childMarkdownRemark.parent.children',
  introduction___childMarkdownRemark___children = 'introduction.childMarkdownRemark.children',
  introduction___childMarkdownRemark___children___id = 'introduction.childMarkdownRemark.children.id',
  introduction___childMarkdownRemark___children___children = 'introduction.childMarkdownRemark.children.children',
  introduction___childMarkdownRemark___internal___content = 'introduction.childMarkdownRemark.internal.content',
  introduction___childMarkdownRemark___internal___contentDigest = 'introduction.childMarkdownRemark.internal.contentDigest',
  introduction___childMarkdownRemark___internal___description = 'introduction.childMarkdownRemark.internal.description',
  introduction___childMarkdownRemark___internal___fieldOwners = 'introduction.childMarkdownRemark.internal.fieldOwners',
  introduction___childMarkdownRemark___internal___ignoreType = 'introduction.childMarkdownRemark.internal.ignoreType',
  introduction___childMarkdownRemark___internal___mediaType = 'introduction.childMarkdownRemark.internal.mediaType',
  introduction___childMarkdownRemark___internal___owner = 'introduction.childMarkdownRemark.internal.owner',
  introduction___childMarkdownRemark___internal___type = 'introduction.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  linktree = 'linktree',
  minnakikeru = 'minnakikeru',
  markdownarticle = 'markdownarticle',
  markdownarticle___contentful_id = 'markdownarticle.contentful_id',
  markdownarticle___id = 'markdownarticle.id',
  markdownarticle___node_locale = 'markdownarticle.node_locale',
  markdownarticle___title = 'markdownarticle.title',
  markdownarticle___slug = 'markdownarticle.slug',
  markdownarticle___publishedAt = 'markdownarticle.publishedAt',
  markdownarticle___disableSideHeader = 'markdownarticle.disableSideHeader',
  markdownarticle___isVirticalWriting = 'markdownarticle.isVirticalWriting',
  markdownarticle___author___contentful_id = 'markdownarticle.author.contentful_id',
  markdownarticle___author___id = 'markdownarticle.author.id',
  markdownarticle___author___node_locale = 'markdownarticle.author.node_locale',
  markdownarticle___author___name = 'markdownarticle.author.name',
  markdownarticle___author___twitter = 'markdownarticle.author.twitter',
  markdownarticle___author___instagram = 'markdownarticle.author.instagram',
  markdownarticle___author___youtube = 'markdownarticle.author.youtube',
  markdownarticle___author___introduction___id = 'markdownarticle.author.introduction.id',
  markdownarticle___author___introduction___children = 'markdownarticle.author.introduction.children',
  markdownarticle___author___introduction___introduction = 'markdownarticle.author.introduction.introduction',
  markdownarticle___author___introduction___childrenMarkdownRemark = 'markdownarticle.author.introduction.childrenMarkdownRemark',
  markdownarticle___author___spaceId = 'markdownarticle.author.spaceId',
  markdownarticle___author___createdAt = 'markdownarticle.author.createdAt',
  markdownarticle___author___updatedAt = 'markdownarticle.author.updatedAt',
  markdownarticle___author___sys___type = 'markdownarticle.author.sys.type',
  markdownarticle___author___sys___revision = 'markdownarticle.author.sys.revision',
  markdownarticle___author___linktree = 'markdownarticle.author.linktree',
  markdownarticle___author___minnakikeru = 'markdownarticle.author.minnakikeru',
  markdownarticle___author___markdownarticle = 'markdownarticle.author.markdownarticle',
  markdownarticle___author___markdownarticle___contentful_id = 'markdownarticle.author.markdownarticle.contentful_id',
  markdownarticle___author___markdownarticle___id = 'markdownarticle.author.markdownarticle.id',
  markdownarticle___author___markdownarticle___node_locale = 'markdownarticle.author.markdownarticle.node_locale',
  markdownarticle___author___markdownarticle___title = 'markdownarticle.author.markdownarticle.title',
  markdownarticle___author___markdownarticle___slug = 'markdownarticle.author.markdownarticle.slug',
  markdownarticle___author___markdownarticle___publishedAt = 'markdownarticle.author.markdownarticle.publishedAt',
  markdownarticle___author___markdownarticle___disableSideHeader = 'markdownarticle.author.markdownarticle.disableSideHeader',
  markdownarticle___author___markdownarticle___isVirticalWriting = 'markdownarticle.author.markdownarticle.isVirticalWriting',
  markdownarticle___author___markdownarticle___spaceId = 'markdownarticle.author.markdownarticle.spaceId',
  markdownarticle___author___markdownarticle___createdAt = 'markdownarticle.author.markdownarticle.createdAt',
  markdownarticle___author___markdownarticle___updatedAt = 'markdownarticle.author.markdownarticle.updatedAt',
  markdownarticle___author___markdownarticle___align = 'markdownarticle.author.markdownarticle.align',
  markdownarticle___author___markdownarticle___images = 'markdownarticle.author.markdownarticle.images',
  markdownarticle___author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode = 'markdownarticle.author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode',
  markdownarticle___author___markdownarticle___children = 'markdownarticle.author.markdownarticle.children',
  markdownarticle___author___hatena = 'markdownarticle.author.hatena',
  markdownarticle___author___bandcamp = 'markdownarticle.author.bandcamp',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___id = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.id',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___children = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.children',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___introduction = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.introduction',
  markdownarticle___author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'markdownarticle.author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___id = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.id',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___children = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.children',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___introduction = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.introduction',
  markdownarticle___author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'markdownarticle.author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
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
  markdownarticle___content___childrenMarkdownRemark = 'markdownarticle.content.childrenMarkdownRemark',
  markdownarticle___content___childrenMarkdownRemark___id = 'markdownarticle.content.childrenMarkdownRemark.id',
  markdownarticle___content___childrenMarkdownRemark___excerpt = 'markdownarticle.content.childrenMarkdownRemark.excerpt',
  markdownarticle___content___childrenMarkdownRemark___rawMarkdownBody = 'markdownarticle.content.childrenMarkdownRemark.rawMarkdownBody',
  markdownarticle___content___childrenMarkdownRemark___fileAbsolutePath = 'markdownarticle.content.childrenMarkdownRemark.fileAbsolutePath',
  markdownarticle___content___childrenMarkdownRemark___html = 'markdownarticle.content.childrenMarkdownRemark.html',
  markdownarticle___content___childrenMarkdownRemark___htmlAst = 'markdownarticle.content.childrenMarkdownRemark.htmlAst',
  markdownarticle___content___childrenMarkdownRemark___excerptAst = 'markdownarticle.content.childrenMarkdownRemark.excerptAst',
  markdownarticle___content___childrenMarkdownRemark___headings = 'markdownarticle.content.childrenMarkdownRemark.headings',
  markdownarticle___content___childrenMarkdownRemark___timeToRead = 'markdownarticle.content.childrenMarkdownRemark.timeToRead',
  markdownarticle___content___childrenMarkdownRemark___tableOfContents = 'markdownarticle.content.childrenMarkdownRemark.tableOfContents',
  markdownarticle___content___childrenMarkdownRemark___children = 'markdownarticle.content.childrenMarkdownRemark.children',
  markdownarticle___content___childMarkdownRemark___id = 'markdownarticle.content.childMarkdownRemark.id',
  markdownarticle___content___childMarkdownRemark___excerpt = 'markdownarticle.content.childMarkdownRemark.excerpt',
  markdownarticle___content___childMarkdownRemark___rawMarkdownBody = 'markdownarticle.content.childMarkdownRemark.rawMarkdownBody',
  markdownarticle___content___childMarkdownRemark___fileAbsolutePath = 'markdownarticle.content.childMarkdownRemark.fileAbsolutePath',
  markdownarticle___content___childMarkdownRemark___html = 'markdownarticle.content.childMarkdownRemark.html',
  markdownarticle___content___childMarkdownRemark___htmlAst = 'markdownarticle.content.childMarkdownRemark.htmlAst',
  markdownarticle___content___childMarkdownRemark___excerptAst = 'markdownarticle.content.childMarkdownRemark.excerptAst',
  markdownarticle___content___childMarkdownRemark___headings = 'markdownarticle.content.childMarkdownRemark.headings',
  markdownarticle___content___childMarkdownRemark___timeToRead = 'markdownarticle.content.childMarkdownRemark.timeToRead',
  markdownarticle___content___childMarkdownRemark___tableOfContents = 'markdownarticle.content.childMarkdownRemark.tableOfContents',
  markdownarticle___content___childMarkdownRemark___children = 'markdownarticle.content.childMarkdownRemark.children',
  markdownarticle___spaceId = 'markdownarticle.spaceId',
  markdownarticle___createdAt = 'markdownarticle.createdAt',
  markdownarticle___updatedAt = 'markdownarticle.updatedAt',
  markdownarticle___sys___type = 'markdownarticle.sys.type',
  markdownarticle___sys___revision = 'markdownarticle.sys.revision',
  markdownarticle___align = 'markdownarticle.align',
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
  markdownarticle___featuredImage___localFile___childrenMarkdownRemark = 'markdownarticle.featuredImage.localFile.childrenMarkdownRemark',
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
  markdownarticle___featuredImage___resolutions___base64 = 'markdownarticle.featuredImage.resolutions.base64',
  markdownarticle___featuredImage___resolutions___tracedSVG = 'markdownarticle.featuredImage.resolutions.tracedSVG',
  markdownarticle___featuredImage___resolutions___aspectRatio = 'markdownarticle.featuredImage.resolutions.aspectRatio',
  markdownarticle___featuredImage___resolutions___width = 'markdownarticle.featuredImage.resolutions.width',
  markdownarticle___featuredImage___resolutions___height = 'markdownarticle.featuredImage.resolutions.height',
  markdownarticle___featuredImage___resolutions___src = 'markdownarticle.featuredImage.resolutions.src',
  markdownarticle___featuredImage___resolutions___srcSet = 'markdownarticle.featuredImage.resolutions.srcSet',
  markdownarticle___featuredImage___resolutions___srcWebp = 'markdownarticle.featuredImage.resolutions.srcWebp',
  markdownarticle___featuredImage___resolutions___srcSetWebp = 'markdownarticle.featuredImage.resolutions.srcSetWebp',
  markdownarticle___featuredImage___fluid___base64 = 'markdownarticle.featuredImage.fluid.base64',
  markdownarticle___featuredImage___fluid___tracedSVG = 'markdownarticle.featuredImage.fluid.tracedSVG',
  markdownarticle___featuredImage___fluid___aspectRatio = 'markdownarticle.featuredImage.fluid.aspectRatio',
  markdownarticle___featuredImage___fluid___src = 'markdownarticle.featuredImage.fluid.src',
  markdownarticle___featuredImage___fluid___srcSet = 'markdownarticle.featuredImage.fluid.srcSet',
  markdownarticle___featuredImage___fluid___srcWebp = 'markdownarticle.featuredImage.fluid.srcWebp',
  markdownarticle___featuredImage___fluid___srcSetWebp = 'markdownarticle.featuredImage.fluid.srcSetWebp',
  markdownarticle___featuredImage___fluid___sizes = 'markdownarticle.featuredImage.fluid.sizes',
  markdownarticle___featuredImage___sizes___base64 = 'markdownarticle.featuredImage.sizes.base64',
  markdownarticle___featuredImage___sizes___tracedSVG = 'markdownarticle.featuredImage.sizes.tracedSVG',
  markdownarticle___featuredImage___sizes___aspectRatio = 'markdownarticle.featuredImage.sizes.aspectRatio',
  markdownarticle___featuredImage___sizes___src = 'markdownarticle.featuredImage.sizes.src',
  markdownarticle___featuredImage___sizes___srcSet = 'markdownarticle.featuredImage.sizes.srcSet',
  markdownarticle___featuredImage___sizes___srcWebp = 'markdownarticle.featuredImage.sizes.srcWebp',
  markdownarticle___featuredImage___sizes___srcSetWebp = 'markdownarticle.featuredImage.sizes.srcSetWebp',
  markdownarticle___featuredImage___sizes___sizes = 'markdownarticle.featuredImage.sizes.sizes',
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
  markdownarticle___images___localFile___childrenMarkdownRemark = 'markdownarticle.images.localFile.childrenMarkdownRemark',
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
  markdownarticle___images___resolutions___base64 = 'markdownarticle.images.resolutions.base64',
  markdownarticle___images___resolutions___tracedSVG = 'markdownarticle.images.resolutions.tracedSVG',
  markdownarticle___images___resolutions___aspectRatio = 'markdownarticle.images.resolutions.aspectRatio',
  markdownarticle___images___resolutions___width = 'markdownarticle.images.resolutions.width',
  markdownarticle___images___resolutions___height = 'markdownarticle.images.resolutions.height',
  markdownarticle___images___resolutions___src = 'markdownarticle.images.resolutions.src',
  markdownarticle___images___resolutions___srcSet = 'markdownarticle.images.resolutions.srcSet',
  markdownarticle___images___resolutions___srcWebp = 'markdownarticle.images.resolutions.srcWebp',
  markdownarticle___images___resolutions___srcSetWebp = 'markdownarticle.images.resolutions.srcSetWebp',
  markdownarticle___images___fluid___base64 = 'markdownarticle.images.fluid.base64',
  markdownarticle___images___fluid___tracedSVG = 'markdownarticle.images.fluid.tracedSVG',
  markdownarticle___images___fluid___aspectRatio = 'markdownarticle.images.fluid.aspectRatio',
  markdownarticle___images___fluid___src = 'markdownarticle.images.fluid.src',
  markdownarticle___images___fluid___srcSet = 'markdownarticle.images.fluid.srcSet',
  markdownarticle___images___fluid___srcWebp = 'markdownarticle.images.fluid.srcWebp',
  markdownarticle___images___fluid___srcSetWebp = 'markdownarticle.images.fluid.srcSetWebp',
  markdownarticle___images___fluid___sizes = 'markdownarticle.images.fluid.sizes',
  markdownarticle___images___sizes___base64 = 'markdownarticle.images.sizes.base64',
  markdownarticle___images___sizes___tracedSVG = 'markdownarticle.images.sizes.tracedSVG',
  markdownarticle___images___sizes___aspectRatio = 'markdownarticle.images.sizes.aspectRatio',
  markdownarticle___images___sizes___src = 'markdownarticle.images.sizes.src',
  markdownarticle___images___sizes___srcSet = 'markdownarticle.images.sizes.srcSet',
  markdownarticle___images___sizes___srcWebp = 'markdownarticle.images.sizes.srcWebp',
  markdownarticle___images___sizes___srcSetWebp = 'markdownarticle.images.sizes.srcSetWebp',
  markdownarticle___images___sizes___sizes = 'markdownarticle.images.sizes.sizes',
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
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerpt = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerpt',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___rawMarkdownBody = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.rawMarkdownBody',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fileAbsolutePath = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fileAbsolutePath',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___html = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.html',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___htmlAst = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.htmlAst',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerptAst = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerptAst',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___timeToRead = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.timeToRead',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___tableOfContents = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.tableOfContents',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___id = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.id',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerpt = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerpt',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___rawMarkdownBody = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.rawMarkdownBody',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fileAbsolutePath = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fileAbsolutePath',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___html = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.html',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___htmlAst = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.htmlAst',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerptAst = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerptAst',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___timeToRead = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.timeToRead',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___tableOfContents = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.tableOfContents',
  markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children = 'markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children',
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
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerpt = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerpt',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___rawMarkdownBody = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.rawMarkdownBody',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fileAbsolutePath = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fileAbsolutePath',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___html = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.html',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___htmlAst = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.htmlAst',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerptAst = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerptAst',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___timeToRead = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.timeToRead',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___tableOfContents = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.tableOfContents',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___id = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.id',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerpt = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerpt',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___rawMarkdownBody = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.rawMarkdownBody',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fileAbsolutePath = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fileAbsolutePath',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___html = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.html',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___htmlAst = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.htmlAst',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerptAst = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerptAst',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___timeToRead = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.timeToRead',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___tableOfContents = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.tableOfContents',
  markdownarticle___childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children = 'markdownarticle.childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children',
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
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___author = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.author',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___profile = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.profile',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___createdAt = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.createdAt',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___updatedAt = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.updatedAt',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___publishedAt = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.publishedAt',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___vol = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.vol',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___images = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.images',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___writing = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.writing',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___linktree = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.linktree',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___disableSideHeader = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.disableSideHeader',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___instagram = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.instagram',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___twitter = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.twitter',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___align = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.align',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___keywords = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.keywords',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___minnakikeru = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.minnakikeru',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___bandcamp = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.bandcamp',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___hatena = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.hatena',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___youtube = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.youtube',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___draft = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.draft',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fileAbsolutePath = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fileAbsolutePath',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fields___draft = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fields.draft',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___html = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.html',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___id = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.id',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___author = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.author',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___profile = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.profile',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___createdAt = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.createdAt',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___updatedAt = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.updatedAt',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___publishedAt = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.publishedAt',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___vol = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.vol',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___images = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.images',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___writing = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.writing',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___linktree = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.linktree',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___disableSideHeader = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.disableSideHeader',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___instagram = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.instagram',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___twitter = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.twitter',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___align = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.align',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___keywords = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.keywords',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___minnakikeru = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.minnakikeru',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___bandcamp = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.bandcamp',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___hatena = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.hatena',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___youtube = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.youtube',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___draft = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.draft',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerpt = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerpt',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___fileAbsolutePath = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.fileAbsolutePath',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___fields___draft = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.fields.draft',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___html = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.html',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___id = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.id',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___value = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.value',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___parent___id = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.parent.id',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___parent___children = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.parent.children',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___children = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.children',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___children___id = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.children.id',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___children___children = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.children.children',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___content = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.content',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___description = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.description',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___type = 'childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.type',
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
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___id = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.id',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___author = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.author',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___profile = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.profile',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___createdAt = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.createdAt',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___updatedAt = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.updatedAt',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___publishedAt = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.publishedAt',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___vol = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.vol',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___images = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.images',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___writing = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.writing',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___linktree = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.linktree',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___disableSideHeader = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.disableSideHeader',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___instagram = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.instagram',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___twitter = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.twitter',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___align = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.align',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___keywords = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.keywords',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___minnakikeru = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.minnakikeru',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___bandcamp = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.bandcamp',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___hatena = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.hatena',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___youtube = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.youtube',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___frontmatter___draft = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.frontmatter.draft',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerpt = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerpt',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fileAbsolutePath = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fileAbsolutePath',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fields___draft = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fields.draft',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___html = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.html',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___id = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.id',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___value = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.value',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___parent___id = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.parent.id',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___parent___children = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.parent.children',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children___id = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children.id',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children___children = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children.children',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___content = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.content',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___description = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.description',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___internal___type = 'childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.internal.type',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___id = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.id',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___author = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.author',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___profile = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.profile',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___createdAt = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.createdAt',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___updatedAt = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.updatedAt',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___publishedAt = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.publishedAt',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___vol = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.vol',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___images = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.images',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___writing = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.writing',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___linktree = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.linktree',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___disableSideHeader = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.disableSideHeader',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___instagram = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.instagram',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___twitter = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.twitter',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___align = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.align',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___keywords = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.keywords',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___minnakikeru = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.minnakikeru',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___bandcamp = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.bandcamp',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___hatena = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.hatena',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___youtube = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.youtube',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___frontmatter___draft = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.frontmatter.draft',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerpt = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerpt',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___fileAbsolutePath = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.fileAbsolutePath',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___fields___draft = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.fields.draft',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___html = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.html',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___htmlAst = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.htmlAst',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerptAst = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerptAst',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___id = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.id',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___value = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.value',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings___depth = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings.depth',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___timeToRead = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.timeToRead',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___tableOfContents = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.tableOfContents',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___wordCount___words = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.wordCount.words',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___parent___id = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.parent.id',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___parent___children = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.parent.children',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___children = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.children',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___children___id = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.children.id',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___children___children = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.children.children',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___content = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.content',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___description = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.description',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___owner = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.owner',
  childContentfulAuthorIntroductionTextNode___childMarkdownRemark___internal___type = 'childContentfulAuthorIntroductionTextNode.childMarkdownRemark.internal.type',
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

type ContentfulAuthorFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly instagram: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
  readonly introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly linktree: Maybe<StringQueryOperatorInput>;
  readonly minnakikeru: Maybe<StringQueryOperatorInput>;
  readonly markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
  readonly hatena: Maybe<StringQueryOperatorInput>;
  readonly bandcamp: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterListInput>;
  readonly childContentfulAuthorIntroductionTextNode: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulAuthorIntroductionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly introduction: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorIntroductionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
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
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___frontmatter___author = 'childrenMarkdownRemark.frontmatter.author',
  childrenMarkdownRemark___frontmatter___profile = 'childrenMarkdownRemark.frontmatter.profile',
  childrenMarkdownRemark___frontmatter___createdAt = 'childrenMarkdownRemark.frontmatter.createdAt',
  childrenMarkdownRemark___frontmatter___updatedAt = 'childrenMarkdownRemark.frontmatter.updatedAt',
  childrenMarkdownRemark___frontmatter___publishedAt = 'childrenMarkdownRemark.frontmatter.publishedAt',
  childrenMarkdownRemark___frontmatter___vol = 'childrenMarkdownRemark.frontmatter.vol',
  childrenMarkdownRemark___frontmatter___images = 'childrenMarkdownRemark.frontmatter.images',
  childrenMarkdownRemark___frontmatter___images___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.images.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___images___absolutePath = 'childrenMarkdownRemark.frontmatter.images.absolutePath',
  childrenMarkdownRemark___frontmatter___images___relativePath = 'childrenMarkdownRemark.frontmatter.images.relativePath',
  childrenMarkdownRemark___frontmatter___images___extension = 'childrenMarkdownRemark.frontmatter.images.extension',
  childrenMarkdownRemark___frontmatter___images___size = 'childrenMarkdownRemark.frontmatter.images.size',
  childrenMarkdownRemark___frontmatter___images___prettySize = 'childrenMarkdownRemark.frontmatter.images.prettySize',
  childrenMarkdownRemark___frontmatter___images___modifiedTime = 'childrenMarkdownRemark.frontmatter.images.modifiedTime',
  childrenMarkdownRemark___frontmatter___images___accessTime = 'childrenMarkdownRemark.frontmatter.images.accessTime',
  childrenMarkdownRemark___frontmatter___images___changeTime = 'childrenMarkdownRemark.frontmatter.images.changeTime',
  childrenMarkdownRemark___frontmatter___images___birthTime = 'childrenMarkdownRemark.frontmatter.images.birthTime',
  childrenMarkdownRemark___frontmatter___images___root = 'childrenMarkdownRemark.frontmatter.images.root',
  childrenMarkdownRemark___frontmatter___images___dir = 'childrenMarkdownRemark.frontmatter.images.dir',
  childrenMarkdownRemark___frontmatter___images___base = 'childrenMarkdownRemark.frontmatter.images.base',
  childrenMarkdownRemark___frontmatter___images___ext = 'childrenMarkdownRemark.frontmatter.images.ext',
  childrenMarkdownRemark___frontmatter___images___name = 'childrenMarkdownRemark.frontmatter.images.name',
  childrenMarkdownRemark___frontmatter___images___relativeDirectory = 'childrenMarkdownRemark.frontmatter.images.relativeDirectory',
  childrenMarkdownRemark___frontmatter___images___dev = 'childrenMarkdownRemark.frontmatter.images.dev',
  childrenMarkdownRemark___frontmatter___images___mode = 'childrenMarkdownRemark.frontmatter.images.mode',
  childrenMarkdownRemark___frontmatter___images___nlink = 'childrenMarkdownRemark.frontmatter.images.nlink',
  childrenMarkdownRemark___frontmatter___images___uid = 'childrenMarkdownRemark.frontmatter.images.uid',
  childrenMarkdownRemark___frontmatter___images___gid = 'childrenMarkdownRemark.frontmatter.images.gid',
  childrenMarkdownRemark___frontmatter___images___rdev = 'childrenMarkdownRemark.frontmatter.images.rdev',
  childrenMarkdownRemark___frontmatter___images___ino = 'childrenMarkdownRemark.frontmatter.images.ino',
  childrenMarkdownRemark___frontmatter___images___atimeMs = 'childrenMarkdownRemark.frontmatter.images.atimeMs',
  childrenMarkdownRemark___frontmatter___images___mtimeMs = 'childrenMarkdownRemark.frontmatter.images.mtimeMs',
  childrenMarkdownRemark___frontmatter___images___ctimeMs = 'childrenMarkdownRemark.frontmatter.images.ctimeMs',
  childrenMarkdownRemark___frontmatter___images___atime = 'childrenMarkdownRemark.frontmatter.images.atime',
  childrenMarkdownRemark___frontmatter___images___mtime = 'childrenMarkdownRemark.frontmatter.images.mtime',
  childrenMarkdownRemark___frontmatter___images___ctime = 'childrenMarkdownRemark.frontmatter.images.ctime',
  childrenMarkdownRemark___frontmatter___images___birthtime = 'childrenMarkdownRemark.frontmatter.images.birthtime',
  childrenMarkdownRemark___frontmatter___images___birthtimeMs = 'childrenMarkdownRemark.frontmatter.images.birthtimeMs',
  childrenMarkdownRemark___frontmatter___images___blksize = 'childrenMarkdownRemark.frontmatter.images.blksize',
  childrenMarkdownRemark___frontmatter___images___blocks = 'childrenMarkdownRemark.frontmatter.images.blocks',
  childrenMarkdownRemark___frontmatter___images___url = 'childrenMarkdownRemark.frontmatter.images.url',
  childrenMarkdownRemark___frontmatter___images___publicURL = 'childrenMarkdownRemark.frontmatter.images.publicURL',
  childrenMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___images___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.images.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___images___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.images.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___images___id = 'childrenMarkdownRemark.frontmatter.images.id',
  childrenMarkdownRemark___frontmatter___images___children = 'childrenMarkdownRemark.frontmatter.images.children',
  childrenMarkdownRemark___frontmatter___writing = 'childrenMarkdownRemark.frontmatter.writing',
  childrenMarkdownRemark___frontmatter___linktree = 'childrenMarkdownRemark.frontmatter.linktree',
  childrenMarkdownRemark___frontmatter___disableSideHeader = 'childrenMarkdownRemark.frontmatter.disableSideHeader',
  childrenMarkdownRemark___frontmatter___instagram = 'childrenMarkdownRemark.frontmatter.instagram',
  childrenMarkdownRemark___frontmatter___twitter = 'childrenMarkdownRemark.frontmatter.twitter',
  childrenMarkdownRemark___frontmatter___align = 'childrenMarkdownRemark.frontmatter.align',
  childrenMarkdownRemark___frontmatter___keywords = 'childrenMarkdownRemark.frontmatter.keywords',
  childrenMarkdownRemark___frontmatter___minnakikeru = 'childrenMarkdownRemark.frontmatter.minnakikeru',
  childrenMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childrenMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childrenMarkdownRemark___frontmatter___featuredImage___relativePath = 'childrenMarkdownRemark.frontmatter.featuredImage.relativePath',
  childrenMarkdownRemark___frontmatter___featuredImage___extension = 'childrenMarkdownRemark.frontmatter.featuredImage.extension',
  childrenMarkdownRemark___frontmatter___featuredImage___size = 'childrenMarkdownRemark.frontmatter.featuredImage.size',
  childrenMarkdownRemark___frontmatter___featuredImage___prettySize = 'childrenMarkdownRemark.frontmatter.featuredImage.prettySize',
  childrenMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childrenMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childrenMarkdownRemark___frontmatter___featuredImage___accessTime = 'childrenMarkdownRemark.frontmatter.featuredImage.accessTime',
  childrenMarkdownRemark___frontmatter___featuredImage___changeTime = 'childrenMarkdownRemark.frontmatter.featuredImage.changeTime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthTime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthTime',
  childrenMarkdownRemark___frontmatter___featuredImage___root = 'childrenMarkdownRemark.frontmatter.featuredImage.root',
  childrenMarkdownRemark___frontmatter___featuredImage___dir = 'childrenMarkdownRemark.frontmatter.featuredImage.dir',
  childrenMarkdownRemark___frontmatter___featuredImage___base = 'childrenMarkdownRemark.frontmatter.featuredImage.base',
  childrenMarkdownRemark___frontmatter___featuredImage___ext = 'childrenMarkdownRemark.frontmatter.featuredImage.ext',
  childrenMarkdownRemark___frontmatter___featuredImage___name = 'childrenMarkdownRemark.frontmatter.featuredImage.name',
  childrenMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childrenMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childrenMarkdownRemark___frontmatter___featuredImage___dev = 'childrenMarkdownRemark.frontmatter.featuredImage.dev',
  childrenMarkdownRemark___frontmatter___featuredImage___mode = 'childrenMarkdownRemark.frontmatter.featuredImage.mode',
  childrenMarkdownRemark___frontmatter___featuredImage___nlink = 'childrenMarkdownRemark.frontmatter.featuredImage.nlink',
  childrenMarkdownRemark___frontmatter___featuredImage___uid = 'childrenMarkdownRemark.frontmatter.featuredImage.uid',
  childrenMarkdownRemark___frontmatter___featuredImage___gid = 'childrenMarkdownRemark.frontmatter.featuredImage.gid',
  childrenMarkdownRemark___frontmatter___featuredImage___rdev = 'childrenMarkdownRemark.frontmatter.featuredImage.rdev',
  childrenMarkdownRemark___frontmatter___featuredImage___ino = 'childrenMarkdownRemark.frontmatter.featuredImage.ino',
  childrenMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___atime = 'childrenMarkdownRemark.frontmatter.featuredImage.atime',
  childrenMarkdownRemark___frontmatter___featuredImage___mtime = 'childrenMarkdownRemark.frontmatter.featuredImage.mtime',
  childrenMarkdownRemark___frontmatter___featuredImage___ctime = 'childrenMarkdownRemark.frontmatter.featuredImage.ctime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___blksize = 'childrenMarkdownRemark.frontmatter.featuredImage.blksize',
  childrenMarkdownRemark___frontmatter___featuredImage___blocks = 'childrenMarkdownRemark.frontmatter.featuredImage.blocks',
  childrenMarkdownRemark___frontmatter___featuredImage___url = 'childrenMarkdownRemark.frontmatter.featuredImage.url',
  childrenMarkdownRemark___frontmatter___featuredImage___publicURL = 'childrenMarkdownRemark.frontmatter.featuredImage.publicURL',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___featuredImage___id = 'childrenMarkdownRemark.frontmatter.featuredImage.id',
  childrenMarkdownRemark___frontmatter___featuredImage___children = 'childrenMarkdownRemark.frontmatter.featuredImage.children',
  childrenMarkdownRemark___frontmatter___bandcamp = 'childrenMarkdownRemark.frontmatter.bandcamp',
  childrenMarkdownRemark___frontmatter___hatena = 'childrenMarkdownRemark.frontmatter.hatena',
  childrenMarkdownRemark___frontmatter___youtube = 'childrenMarkdownRemark.frontmatter.youtube',
  childrenMarkdownRemark___frontmatter___draft = 'childrenMarkdownRemark.frontmatter.draft',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___fileAbsolutePath = 'childrenMarkdownRemark.fileAbsolutePath',
  childrenMarkdownRemark___fields___draft = 'childrenMarkdownRemark.fields.draft',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___author = 'childMarkdownRemark.frontmatter.author',
  childMarkdownRemark___frontmatter___profile = 'childMarkdownRemark.frontmatter.profile',
  childMarkdownRemark___frontmatter___createdAt = 'childMarkdownRemark.frontmatter.createdAt',
  childMarkdownRemark___frontmatter___updatedAt = 'childMarkdownRemark.frontmatter.updatedAt',
  childMarkdownRemark___frontmatter___publishedAt = 'childMarkdownRemark.frontmatter.publishedAt',
  childMarkdownRemark___frontmatter___vol = 'childMarkdownRemark.frontmatter.vol',
  childMarkdownRemark___frontmatter___images = 'childMarkdownRemark.frontmatter.images',
  childMarkdownRemark___frontmatter___images___sourceInstanceName = 'childMarkdownRemark.frontmatter.images.sourceInstanceName',
  childMarkdownRemark___frontmatter___images___absolutePath = 'childMarkdownRemark.frontmatter.images.absolutePath',
  childMarkdownRemark___frontmatter___images___relativePath = 'childMarkdownRemark.frontmatter.images.relativePath',
  childMarkdownRemark___frontmatter___images___extension = 'childMarkdownRemark.frontmatter.images.extension',
  childMarkdownRemark___frontmatter___images___size = 'childMarkdownRemark.frontmatter.images.size',
  childMarkdownRemark___frontmatter___images___prettySize = 'childMarkdownRemark.frontmatter.images.prettySize',
  childMarkdownRemark___frontmatter___images___modifiedTime = 'childMarkdownRemark.frontmatter.images.modifiedTime',
  childMarkdownRemark___frontmatter___images___accessTime = 'childMarkdownRemark.frontmatter.images.accessTime',
  childMarkdownRemark___frontmatter___images___changeTime = 'childMarkdownRemark.frontmatter.images.changeTime',
  childMarkdownRemark___frontmatter___images___birthTime = 'childMarkdownRemark.frontmatter.images.birthTime',
  childMarkdownRemark___frontmatter___images___root = 'childMarkdownRemark.frontmatter.images.root',
  childMarkdownRemark___frontmatter___images___dir = 'childMarkdownRemark.frontmatter.images.dir',
  childMarkdownRemark___frontmatter___images___base = 'childMarkdownRemark.frontmatter.images.base',
  childMarkdownRemark___frontmatter___images___ext = 'childMarkdownRemark.frontmatter.images.ext',
  childMarkdownRemark___frontmatter___images___name = 'childMarkdownRemark.frontmatter.images.name',
  childMarkdownRemark___frontmatter___images___relativeDirectory = 'childMarkdownRemark.frontmatter.images.relativeDirectory',
  childMarkdownRemark___frontmatter___images___dev = 'childMarkdownRemark.frontmatter.images.dev',
  childMarkdownRemark___frontmatter___images___mode = 'childMarkdownRemark.frontmatter.images.mode',
  childMarkdownRemark___frontmatter___images___nlink = 'childMarkdownRemark.frontmatter.images.nlink',
  childMarkdownRemark___frontmatter___images___uid = 'childMarkdownRemark.frontmatter.images.uid',
  childMarkdownRemark___frontmatter___images___gid = 'childMarkdownRemark.frontmatter.images.gid',
  childMarkdownRemark___frontmatter___images___rdev = 'childMarkdownRemark.frontmatter.images.rdev',
  childMarkdownRemark___frontmatter___images___ino = 'childMarkdownRemark.frontmatter.images.ino',
  childMarkdownRemark___frontmatter___images___atimeMs = 'childMarkdownRemark.frontmatter.images.atimeMs',
  childMarkdownRemark___frontmatter___images___mtimeMs = 'childMarkdownRemark.frontmatter.images.mtimeMs',
  childMarkdownRemark___frontmatter___images___ctimeMs = 'childMarkdownRemark.frontmatter.images.ctimeMs',
  childMarkdownRemark___frontmatter___images___atime = 'childMarkdownRemark.frontmatter.images.atime',
  childMarkdownRemark___frontmatter___images___mtime = 'childMarkdownRemark.frontmatter.images.mtime',
  childMarkdownRemark___frontmatter___images___ctime = 'childMarkdownRemark.frontmatter.images.ctime',
  childMarkdownRemark___frontmatter___images___birthtime = 'childMarkdownRemark.frontmatter.images.birthtime',
  childMarkdownRemark___frontmatter___images___birthtimeMs = 'childMarkdownRemark.frontmatter.images.birthtimeMs',
  childMarkdownRemark___frontmatter___images___blksize = 'childMarkdownRemark.frontmatter.images.blksize',
  childMarkdownRemark___frontmatter___images___blocks = 'childMarkdownRemark.frontmatter.images.blocks',
  childMarkdownRemark___frontmatter___images___url = 'childMarkdownRemark.frontmatter.images.url',
  childMarkdownRemark___frontmatter___images___publicURL = 'childMarkdownRemark.frontmatter.images.publicURL',
  childMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___images___childrenImageSharp = 'childMarkdownRemark.frontmatter.images.childrenImageSharp',
  childMarkdownRemark___frontmatter___images___childrenPagesJson = 'childMarkdownRemark.frontmatter.images.childrenPagesJson',
  childMarkdownRemark___frontmatter___images___id = 'childMarkdownRemark.frontmatter.images.id',
  childMarkdownRemark___frontmatter___images___children = 'childMarkdownRemark.frontmatter.images.children',
  childMarkdownRemark___frontmatter___writing = 'childMarkdownRemark.frontmatter.writing',
  childMarkdownRemark___frontmatter___linktree = 'childMarkdownRemark.frontmatter.linktree',
  childMarkdownRemark___frontmatter___disableSideHeader = 'childMarkdownRemark.frontmatter.disableSideHeader',
  childMarkdownRemark___frontmatter___instagram = 'childMarkdownRemark.frontmatter.instagram',
  childMarkdownRemark___frontmatter___twitter = 'childMarkdownRemark.frontmatter.twitter',
  childMarkdownRemark___frontmatter___align = 'childMarkdownRemark.frontmatter.align',
  childMarkdownRemark___frontmatter___keywords = 'childMarkdownRemark.frontmatter.keywords',
  childMarkdownRemark___frontmatter___minnakikeru = 'childMarkdownRemark.frontmatter.minnakikeru',
  childMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childMarkdownRemark___frontmatter___featuredImage___relativePath = 'childMarkdownRemark.frontmatter.featuredImage.relativePath',
  childMarkdownRemark___frontmatter___featuredImage___extension = 'childMarkdownRemark.frontmatter.featuredImage.extension',
  childMarkdownRemark___frontmatter___featuredImage___size = 'childMarkdownRemark.frontmatter.featuredImage.size',
  childMarkdownRemark___frontmatter___featuredImage___prettySize = 'childMarkdownRemark.frontmatter.featuredImage.prettySize',
  childMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childMarkdownRemark___frontmatter___featuredImage___accessTime = 'childMarkdownRemark.frontmatter.featuredImage.accessTime',
  childMarkdownRemark___frontmatter___featuredImage___changeTime = 'childMarkdownRemark.frontmatter.featuredImage.changeTime',
  childMarkdownRemark___frontmatter___featuredImage___birthTime = 'childMarkdownRemark.frontmatter.featuredImage.birthTime',
  childMarkdownRemark___frontmatter___featuredImage___root = 'childMarkdownRemark.frontmatter.featuredImage.root',
  childMarkdownRemark___frontmatter___featuredImage___dir = 'childMarkdownRemark.frontmatter.featuredImage.dir',
  childMarkdownRemark___frontmatter___featuredImage___base = 'childMarkdownRemark.frontmatter.featuredImage.base',
  childMarkdownRemark___frontmatter___featuredImage___ext = 'childMarkdownRemark.frontmatter.featuredImage.ext',
  childMarkdownRemark___frontmatter___featuredImage___name = 'childMarkdownRemark.frontmatter.featuredImage.name',
  childMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childMarkdownRemark___frontmatter___featuredImage___dev = 'childMarkdownRemark.frontmatter.featuredImage.dev',
  childMarkdownRemark___frontmatter___featuredImage___mode = 'childMarkdownRemark.frontmatter.featuredImage.mode',
  childMarkdownRemark___frontmatter___featuredImage___nlink = 'childMarkdownRemark.frontmatter.featuredImage.nlink',
  childMarkdownRemark___frontmatter___featuredImage___uid = 'childMarkdownRemark.frontmatter.featuredImage.uid',
  childMarkdownRemark___frontmatter___featuredImage___gid = 'childMarkdownRemark.frontmatter.featuredImage.gid',
  childMarkdownRemark___frontmatter___featuredImage___rdev = 'childMarkdownRemark.frontmatter.featuredImage.rdev',
  childMarkdownRemark___frontmatter___featuredImage___ino = 'childMarkdownRemark.frontmatter.featuredImage.ino',
  childMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childMarkdownRemark___frontmatter___featuredImage___atime = 'childMarkdownRemark.frontmatter.featuredImage.atime',
  childMarkdownRemark___frontmatter___featuredImage___mtime = 'childMarkdownRemark.frontmatter.featuredImage.mtime',
  childMarkdownRemark___frontmatter___featuredImage___ctime = 'childMarkdownRemark.frontmatter.featuredImage.ctime',
  childMarkdownRemark___frontmatter___featuredImage___birthtime = 'childMarkdownRemark.frontmatter.featuredImage.birthtime',
  childMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___blksize = 'childMarkdownRemark.frontmatter.featuredImage.blksize',
  childMarkdownRemark___frontmatter___featuredImage___blocks = 'childMarkdownRemark.frontmatter.featuredImage.blocks',
  childMarkdownRemark___frontmatter___featuredImage___url = 'childMarkdownRemark.frontmatter.featuredImage.url',
  childMarkdownRemark___frontmatter___featuredImage___publicURL = 'childMarkdownRemark.frontmatter.featuredImage.publicURL',
  childMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childMarkdownRemark___frontmatter___featuredImage___id = 'childMarkdownRemark.frontmatter.featuredImage.id',
  childMarkdownRemark___frontmatter___featuredImage___children = 'childMarkdownRemark.frontmatter.featuredImage.children',
  childMarkdownRemark___frontmatter___bandcamp = 'childMarkdownRemark.frontmatter.bandcamp',
  childMarkdownRemark___frontmatter___hatena = 'childMarkdownRemark.frontmatter.hatena',
  childMarkdownRemark___frontmatter___youtube = 'childMarkdownRemark.frontmatter.youtube',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark.frontmatter.draft',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___fields___draft = 'childMarkdownRemark.fields.draft',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulAuthorIntroductionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly introduction: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorIntroductionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorIntroductionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
};

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

type contentfulAuthorIntroductionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorIntroductionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAuthorSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAuthorSysContentType>;
};

type ContentfulAuthorSysContentType = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSys>;
};

type ContentfulAuthorSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

type ContentfulAuthorSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulAuthorSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
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

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContributions = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<ContentfulContributionsBody>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly disableSideHeader: Maybe<Scalars['Boolean']>;
  readonly isVirticalWriting: Maybe<Scalars['Boolean']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulContributionsSys>;
  readonly slug: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulContributions_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulContributions_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulContributions_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulContributionsBody = {
  readonly raw: Maybe<Scalars['String']>;
  readonly references: Maybe<ReadonlyArray<Maybe<ContentfulAsset>>>;
};

type ContentfulContributionsBodyFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
  readonly references: Maybe<ContentfulAssetFilterListInput>;
};

type ContentfulContributionsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContributionsEdge>;
  readonly nodes: ReadonlyArray<ContentfulContributions>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContributionsGroupConnection>;
};


type ContentfulContributionsConnection_distinctArgs = {
  field: ContentfulContributionsFieldsEnum;
};


type ContentfulContributionsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContributionsFieldsEnum;
};

type ContentfulContributionsEdge = {
  readonly next: Maybe<ContentfulContributions>;
  readonly node: ContentfulContributions;
  readonly previous: Maybe<ContentfulContributions>;
};

enum ContentfulContributionsFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  body___raw = 'body.raw',
  body___references = 'body.references',
  body___references___contentful_id = 'body.references.contentful_id',
  body___references___id = 'body.references.id',
  body___references___spaceId = 'body.references.spaceId',
  body___references___createdAt = 'body.references.createdAt',
  body___references___updatedAt = 'body.references.updatedAt',
  body___references___file___url = 'body.references.file.url',
  body___references___file___fileName = 'body.references.file.fileName',
  body___references___file___contentType = 'body.references.file.contentType',
  body___references___title = 'body.references.title',
  body___references___description = 'body.references.description',
  body___references___node_locale = 'body.references.node_locale',
  body___references___sys___type = 'body.references.sys.type',
  body___references___sys___revision = 'body.references.sys.revision',
  body___references___localFile___sourceInstanceName = 'body.references.localFile.sourceInstanceName',
  body___references___localFile___absolutePath = 'body.references.localFile.absolutePath',
  body___references___localFile___relativePath = 'body.references.localFile.relativePath',
  body___references___localFile___extension = 'body.references.localFile.extension',
  body___references___localFile___size = 'body.references.localFile.size',
  body___references___localFile___prettySize = 'body.references.localFile.prettySize',
  body___references___localFile___modifiedTime = 'body.references.localFile.modifiedTime',
  body___references___localFile___accessTime = 'body.references.localFile.accessTime',
  body___references___localFile___changeTime = 'body.references.localFile.changeTime',
  body___references___localFile___birthTime = 'body.references.localFile.birthTime',
  body___references___localFile___root = 'body.references.localFile.root',
  body___references___localFile___dir = 'body.references.localFile.dir',
  body___references___localFile___base = 'body.references.localFile.base',
  body___references___localFile___ext = 'body.references.localFile.ext',
  body___references___localFile___name = 'body.references.localFile.name',
  body___references___localFile___relativeDirectory = 'body.references.localFile.relativeDirectory',
  body___references___localFile___dev = 'body.references.localFile.dev',
  body___references___localFile___mode = 'body.references.localFile.mode',
  body___references___localFile___nlink = 'body.references.localFile.nlink',
  body___references___localFile___uid = 'body.references.localFile.uid',
  body___references___localFile___gid = 'body.references.localFile.gid',
  body___references___localFile___rdev = 'body.references.localFile.rdev',
  body___references___localFile___ino = 'body.references.localFile.ino',
  body___references___localFile___atimeMs = 'body.references.localFile.atimeMs',
  body___references___localFile___mtimeMs = 'body.references.localFile.mtimeMs',
  body___references___localFile___ctimeMs = 'body.references.localFile.ctimeMs',
  body___references___localFile___atime = 'body.references.localFile.atime',
  body___references___localFile___mtime = 'body.references.localFile.mtime',
  body___references___localFile___ctime = 'body.references.localFile.ctime',
  body___references___localFile___birthtime = 'body.references.localFile.birthtime',
  body___references___localFile___birthtimeMs = 'body.references.localFile.birthtimeMs',
  body___references___localFile___blksize = 'body.references.localFile.blksize',
  body___references___localFile___blocks = 'body.references.localFile.blocks',
  body___references___localFile___url = 'body.references.localFile.url',
  body___references___localFile___publicURL = 'body.references.localFile.publicURL',
  body___references___localFile___childrenMarkdownRemark = 'body.references.localFile.childrenMarkdownRemark',
  body___references___localFile___childrenImageSharp = 'body.references.localFile.childrenImageSharp',
  body___references___localFile___childrenPagesJson = 'body.references.localFile.childrenPagesJson',
  body___references___localFile___id = 'body.references.localFile.id',
  body___references___localFile___children = 'body.references.localFile.children',
  body___references___fixed___base64 = 'body.references.fixed.base64',
  body___references___fixed___tracedSVG = 'body.references.fixed.tracedSVG',
  body___references___fixed___aspectRatio = 'body.references.fixed.aspectRatio',
  body___references___fixed___width = 'body.references.fixed.width',
  body___references___fixed___height = 'body.references.fixed.height',
  body___references___fixed___src = 'body.references.fixed.src',
  body___references___fixed___srcSet = 'body.references.fixed.srcSet',
  body___references___fixed___srcWebp = 'body.references.fixed.srcWebp',
  body___references___fixed___srcSetWebp = 'body.references.fixed.srcSetWebp',
  body___references___resolutions___base64 = 'body.references.resolutions.base64',
  body___references___resolutions___tracedSVG = 'body.references.resolutions.tracedSVG',
  body___references___resolutions___aspectRatio = 'body.references.resolutions.aspectRatio',
  body___references___resolutions___width = 'body.references.resolutions.width',
  body___references___resolutions___height = 'body.references.resolutions.height',
  body___references___resolutions___src = 'body.references.resolutions.src',
  body___references___resolutions___srcSet = 'body.references.resolutions.srcSet',
  body___references___resolutions___srcWebp = 'body.references.resolutions.srcWebp',
  body___references___resolutions___srcSetWebp = 'body.references.resolutions.srcSetWebp',
  body___references___fluid___base64 = 'body.references.fluid.base64',
  body___references___fluid___tracedSVG = 'body.references.fluid.tracedSVG',
  body___references___fluid___aspectRatio = 'body.references.fluid.aspectRatio',
  body___references___fluid___src = 'body.references.fluid.src',
  body___references___fluid___srcSet = 'body.references.fluid.srcSet',
  body___references___fluid___srcWebp = 'body.references.fluid.srcWebp',
  body___references___fluid___srcSetWebp = 'body.references.fluid.srcSetWebp',
  body___references___fluid___sizes = 'body.references.fluid.sizes',
  body___references___sizes___base64 = 'body.references.sizes.base64',
  body___references___sizes___tracedSVG = 'body.references.sizes.tracedSVG',
  body___references___sizes___aspectRatio = 'body.references.sizes.aspectRatio',
  body___references___sizes___src = 'body.references.sizes.src',
  body___references___sizes___srcSet = 'body.references.sizes.srcSet',
  body___references___sizes___srcWebp = 'body.references.sizes.srcWebp',
  body___references___sizes___srcSetWebp = 'body.references.sizes.srcSetWebp',
  body___references___sizes___sizes = 'body.references.sizes.sizes',
  body___references___gatsbyImageData = 'body.references.gatsbyImageData',
  body___references___resize___base64 = 'body.references.resize.base64',
  body___references___resize___tracedSVG = 'body.references.resize.tracedSVG',
  body___references___resize___src = 'body.references.resize.src',
  body___references___resize___width = 'body.references.resize.width',
  body___references___resize___height = 'body.references.resize.height',
  body___references___resize___aspectRatio = 'body.references.resize.aspectRatio',
  body___references___parent___id = 'body.references.parent.id',
  body___references___parent___children = 'body.references.parent.children',
  body___references___children = 'body.references.children',
  body___references___children___id = 'body.references.children.id',
  body___references___children___children = 'body.references.children.children',
  body___references___internal___content = 'body.references.internal.content',
  body___references___internal___contentDigest = 'body.references.internal.contentDigest',
  body___references___internal___description = 'body.references.internal.description',
  body___references___internal___fieldOwners = 'body.references.internal.fieldOwners',
  body___references___internal___ignoreType = 'body.references.internal.ignoreType',
  body___references___internal___mediaType = 'body.references.internal.mediaType',
  body___references___internal___owner = 'body.references.internal.owner',
  body___references___internal___type = 'body.references.internal.type',
  publishedAt = 'publishedAt',
  disableSideHeader = 'disableSideHeader',
  isVirticalWriting = 'isVirticalWriting',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  slug = 'slug',
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

type ContentfulContributionsFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly body: Maybe<ContentfulContributionsBodyFilterInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  readonly isVirticalWriting: Maybe<BooleanQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContributionsSysFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulContributionsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContributionsEdge>;
  readonly nodes: ReadonlyArray<ContentfulContributions>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContributionsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContributionsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContributionsSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulContributionsSysContentType>;
};

type ContentfulContributionsSysContentType = {
  readonly sys: Maybe<ContentfulContributionsSysContentTypeSys>;
};

type ContentfulContributionsSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulContributionsSysContentTypeSysFilterInput>;
};

type ContentfulContributionsSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulContributionsSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulContributionsSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulContributionsSysContentTypeFilterInput>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
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
  node_locale = 'node_locale'
}

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum ContentfulImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

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
  image___localFile___childrenMarkdownRemark = 'image.localFile.childrenMarkdownRemark',
  image___localFile___childrenMarkdownRemark___id = 'image.localFile.childrenMarkdownRemark.id',
  image___localFile___childrenMarkdownRemark___excerpt = 'image.localFile.childrenMarkdownRemark.excerpt',
  image___localFile___childrenMarkdownRemark___rawMarkdownBody = 'image.localFile.childrenMarkdownRemark.rawMarkdownBody',
  image___localFile___childrenMarkdownRemark___fileAbsolutePath = 'image.localFile.childrenMarkdownRemark.fileAbsolutePath',
  image___localFile___childrenMarkdownRemark___html = 'image.localFile.childrenMarkdownRemark.html',
  image___localFile___childrenMarkdownRemark___htmlAst = 'image.localFile.childrenMarkdownRemark.htmlAst',
  image___localFile___childrenMarkdownRemark___excerptAst = 'image.localFile.childrenMarkdownRemark.excerptAst',
  image___localFile___childrenMarkdownRemark___headings = 'image.localFile.childrenMarkdownRemark.headings',
  image___localFile___childrenMarkdownRemark___timeToRead = 'image.localFile.childrenMarkdownRemark.timeToRead',
  image___localFile___childrenMarkdownRemark___tableOfContents = 'image.localFile.childrenMarkdownRemark.tableOfContents',
  image___localFile___childrenMarkdownRemark___children = 'image.localFile.childrenMarkdownRemark.children',
  image___localFile___childMarkdownRemark___id = 'image.localFile.childMarkdownRemark.id',
  image___localFile___childMarkdownRemark___excerpt = 'image.localFile.childMarkdownRemark.excerpt',
  image___localFile___childMarkdownRemark___rawMarkdownBody = 'image.localFile.childMarkdownRemark.rawMarkdownBody',
  image___localFile___childMarkdownRemark___fileAbsolutePath = 'image.localFile.childMarkdownRemark.fileAbsolutePath',
  image___localFile___childMarkdownRemark___html = 'image.localFile.childMarkdownRemark.html',
  image___localFile___childMarkdownRemark___htmlAst = 'image.localFile.childMarkdownRemark.htmlAst',
  image___localFile___childMarkdownRemark___excerptAst = 'image.localFile.childMarkdownRemark.excerptAst',
  image___localFile___childMarkdownRemark___headings = 'image.localFile.childMarkdownRemark.headings',
  image___localFile___childMarkdownRemark___timeToRead = 'image.localFile.childMarkdownRemark.timeToRead',
  image___localFile___childMarkdownRemark___tableOfContents = 'image.localFile.childMarkdownRemark.tableOfContents',
  image___localFile___childMarkdownRemark___children = 'image.localFile.childMarkdownRemark.children',
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
  image___resolutions___base64 = 'image.resolutions.base64',
  image___resolutions___tracedSVG = 'image.resolutions.tracedSVG',
  image___resolutions___aspectRatio = 'image.resolutions.aspectRatio',
  image___resolutions___width = 'image.resolutions.width',
  image___resolutions___height = 'image.resolutions.height',
  image___resolutions___src = 'image.resolutions.src',
  image___resolutions___srcSet = 'image.resolutions.srcSet',
  image___resolutions___srcWebp = 'image.resolutions.srcWebp',
  image___resolutions___srcSetWebp = 'image.resolutions.srcSetWebp',
  image___fluid___base64 = 'image.fluid.base64',
  image___fluid___tracedSVG = 'image.fluid.tracedSVG',
  image___fluid___aspectRatio = 'image.fluid.aspectRatio',
  image___fluid___src = 'image.fluid.src',
  image___fluid___srcSet = 'image.fluid.srcSet',
  image___fluid___srcWebp = 'image.fluid.srcWebp',
  image___fluid___srcSetWebp = 'image.fluid.srcSetWebp',
  image___fluid___sizes = 'image.fluid.sizes',
  image___sizes___base64 = 'image.sizes.base64',
  image___sizes___tracedSVG = 'image.sizes.tracedSVG',
  image___sizes___aspectRatio = 'image.sizes.aspectRatio',
  image___sizes___src = 'image.sizes.src',
  image___sizes___srcSet = 'image.sizes.srcSet',
  image___sizes___srcWebp = 'image.sizes.srcWebp',
  image___sizes___srcSetWebp = 'image.sizes.srcSetWebp',
  image___sizes___sizes = 'image.sizes.sizes',
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

type ContentfulImageWithAiTagsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulImageWithAiTagsEdge>;
  readonly nodes: ReadonlyArray<ContentfulImageWithAiTags>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulImageWithAiTagsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulImageWithAiTagsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulImageWithAiTagsSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulImageWithAiTagsSysContentType>;
};

type ContentfulImageWithAiTagsSysContentType = {
  readonly sys: Maybe<ContentfulImageWithAiTagsSysContentTypeSys>;
};

type ContentfulImageWithAiTagsSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulImageWithAiTagsSysContentTypeSysFilterInput>;
};

type ContentfulImageWithAiTagsSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulImageWithAiTagsSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulImageWithAiTagsSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulImageWithAiTagsSysContentTypeFilterInput>;
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
  readonly author: Maybe<ContentfulAuthor>;
  readonly content: Maybe<contentfulMarkdownArticleContentTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulMarkdownArticleSys>;
  readonly align: Maybe<Scalars['Boolean']>;
  readonly featuredImage: Maybe<ContentfulAsset>;
  readonly images: Maybe<ReadonlyArray<Maybe<ContentfulAsset>>>;
  /** Returns all children nodes filtered by type contentfulMarkdownArticleContentTextNode */
  readonly childrenContentfulMarkdownArticleContentTextNode: Maybe<ReadonlyArray<Maybe<contentfulMarkdownArticleContentTextNode>>>;
  /**
   * Returns the first child node of type contentfulMarkdownArticleContentTextNode
   * or null if there are no children of given type on this node
   */
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

type contentfulMarkdownArticleContentTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly content: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulMarkdownArticleContentTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
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
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___frontmatter___author = 'childrenMarkdownRemark.frontmatter.author',
  childrenMarkdownRemark___frontmatter___profile = 'childrenMarkdownRemark.frontmatter.profile',
  childrenMarkdownRemark___frontmatter___createdAt = 'childrenMarkdownRemark.frontmatter.createdAt',
  childrenMarkdownRemark___frontmatter___updatedAt = 'childrenMarkdownRemark.frontmatter.updatedAt',
  childrenMarkdownRemark___frontmatter___publishedAt = 'childrenMarkdownRemark.frontmatter.publishedAt',
  childrenMarkdownRemark___frontmatter___vol = 'childrenMarkdownRemark.frontmatter.vol',
  childrenMarkdownRemark___frontmatter___images = 'childrenMarkdownRemark.frontmatter.images',
  childrenMarkdownRemark___frontmatter___images___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.images.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___images___absolutePath = 'childrenMarkdownRemark.frontmatter.images.absolutePath',
  childrenMarkdownRemark___frontmatter___images___relativePath = 'childrenMarkdownRemark.frontmatter.images.relativePath',
  childrenMarkdownRemark___frontmatter___images___extension = 'childrenMarkdownRemark.frontmatter.images.extension',
  childrenMarkdownRemark___frontmatter___images___size = 'childrenMarkdownRemark.frontmatter.images.size',
  childrenMarkdownRemark___frontmatter___images___prettySize = 'childrenMarkdownRemark.frontmatter.images.prettySize',
  childrenMarkdownRemark___frontmatter___images___modifiedTime = 'childrenMarkdownRemark.frontmatter.images.modifiedTime',
  childrenMarkdownRemark___frontmatter___images___accessTime = 'childrenMarkdownRemark.frontmatter.images.accessTime',
  childrenMarkdownRemark___frontmatter___images___changeTime = 'childrenMarkdownRemark.frontmatter.images.changeTime',
  childrenMarkdownRemark___frontmatter___images___birthTime = 'childrenMarkdownRemark.frontmatter.images.birthTime',
  childrenMarkdownRemark___frontmatter___images___root = 'childrenMarkdownRemark.frontmatter.images.root',
  childrenMarkdownRemark___frontmatter___images___dir = 'childrenMarkdownRemark.frontmatter.images.dir',
  childrenMarkdownRemark___frontmatter___images___base = 'childrenMarkdownRemark.frontmatter.images.base',
  childrenMarkdownRemark___frontmatter___images___ext = 'childrenMarkdownRemark.frontmatter.images.ext',
  childrenMarkdownRemark___frontmatter___images___name = 'childrenMarkdownRemark.frontmatter.images.name',
  childrenMarkdownRemark___frontmatter___images___relativeDirectory = 'childrenMarkdownRemark.frontmatter.images.relativeDirectory',
  childrenMarkdownRemark___frontmatter___images___dev = 'childrenMarkdownRemark.frontmatter.images.dev',
  childrenMarkdownRemark___frontmatter___images___mode = 'childrenMarkdownRemark.frontmatter.images.mode',
  childrenMarkdownRemark___frontmatter___images___nlink = 'childrenMarkdownRemark.frontmatter.images.nlink',
  childrenMarkdownRemark___frontmatter___images___uid = 'childrenMarkdownRemark.frontmatter.images.uid',
  childrenMarkdownRemark___frontmatter___images___gid = 'childrenMarkdownRemark.frontmatter.images.gid',
  childrenMarkdownRemark___frontmatter___images___rdev = 'childrenMarkdownRemark.frontmatter.images.rdev',
  childrenMarkdownRemark___frontmatter___images___ino = 'childrenMarkdownRemark.frontmatter.images.ino',
  childrenMarkdownRemark___frontmatter___images___atimeMs = 'childrenMarkdownRemark.frontmatter.images.atimeMs',
  childrenMarkdownRemark___frontmatter___images___mtimeMs = 'childrenMarkdownRemark.frontmatter.images.mtimeMs',
  childrenMarkdownRemark___frontmatter___images___ctimeMs = 'childrenMarkdownRemark.frontmatter.images.ctimeMs',
  childrenMarkdownRemark___frontmatter___images___atime = 'childrenMarkdownRemark.frontmatter.images.atime',
  childrenMarkdownRemark___frontmatter___images___mtime = 'childrenMarkdownRemark.frontmatter.images.mtime',
  childrenMarkdownRemark___frontmatter___images___ctime = 'childrenMarkdownRemark.frontmatter.images.ctime',
  childrenMarkdownRemark___frontmatter___images___birthtime = 'childrenMarkdownRemark.frontmatter.images.birthtime',
  childrenMarkdownRemark___frontmatter___images___birthtimeMs = 'childrenMarkdownRemark.frontmatter.images.birthtimeMs',
  childrenMarkdownRemark___frontmatter___images___blksize = 'childrenMarkdownRemark.frontmatter.images.blksize',
  childrenMarkdownRemark___frontmatter___images___blocks = 'childrenMarkdownRemark.frontmatter.images.blocks',
  childrenMarkdownRemark___frontmatter___images___url = 'childrenMarkdownRemark.frontmatter.images.url',
  childrenMarkdownRemark___frontmatter___images___publicURL = 'childrenMarkdownRemark.frontmatter.images.publicURL',
  childrenMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___images___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.images.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___images___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.images.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___images___id = 'childrenMarkdownRemark.frontmatter.images.id',
  childrenMarkdownRemark___frontmatter___images___children = 'childrenMarkdownRemark.frontmatter.images.children',
  childrenMarkdownRemark___frontmatter___writing = 'childrenMarkdownRemark.frontmatter.writing',
  childrenMarkdownRemark___frontmatter___linktree = 'childrenMarkdownRemark.frontmatter.linktree',
  childrenMarkdownRemark___frontmatter___disableSideHeader = 'childrenMarkdownRemark.frontmatter.disableSideHeader',
  childrenMarkdownRemark___frontmatter___instagram = 'childrenMarkdownRemark.frontmatter.instagram',
  childrenMarkdownRemark___frontmatter___twitter = 'childrenMarkdownRemark.frontmatter.twitter',
  childrenMarkdownRemark___frontmatter___align = 'childrenMarkdownRemark.frontmatter.align',
  childrenMarkdownRemark___frontmatter___keywords = 'childrenMarkdownRemark.frontmatter.keywords',
  childrenMarkdownRemark___frontmatter___minnakikeru = 'childrenMarkdownRemark.frontmatter.minnakikeru',
  childrenMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childrenMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childrenMarkdownRemark___frontmatter___featuredImage___relativePath = 'childrenMarkdownRemark.frontmatter.featuredImage.relativePath',
  childrenMarkdownRemark___frontmatter___featuredImage___extension = 'childrenMarkdownRemark.frontmatter.featuredImage.extension',
  childrenMarkdownRemark___frontmatter___featuredImage___size = 'childrenMarkdownRemark.frontmatter.featuredImage.size',
  childrenMarkdownRemark___frontmatter___featuredImage___prettySize = 'childrenMarkdownRemark.frontmatter.featuredImage.prettySize',
  childrenMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childrenMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childrenMarkdownRemark___frontmatter___featuredImage___accessTime = 'childrenMarkdownRemark.frontmatter.featuredImage.accessTime',
  childrenMarkdownRemark___frontmatter___featuredImage___changeTime = 'childrenMarkdownRemark.frontmatter.featuredImage.changeTime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthTime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthTime',
  childrenMarkdownRemark___frontmatter___featuredImage___root = 'childrenMarkdownRemark.frontmatter.featuredImage.root',
  childrenMarkdownRemark___frontmatter___featuredImage___dir = 'childrenMarkdownRemark.frontmatter.featuredImage.dir',
  childrenMarkdownRemark___frontmatter___featuredImage___base = 'childrenMarkdownRemark.frontmatter.featuredImage.base',
  childrenMarkdownRemark___frontmatter___featuredImage___ext = 'childrenMarkdownRemark.frontmatter.featuredImage.ext',
  childrenMarkdownRemark___frontmatter___featuredImage___name = 'childrenMarkdownRemark.frontmatter.featuredImage.name',
  childrenMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childrenMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childrenMarkdownRemark___frontmatter___featuredImage___dev = 'childrenMarkdownRemark.frontmatter.featuredImage.dev',
  childrenMarkdownRemark___frontmatter___featuredImage___mode = 'childrenMarkdownRemark.frontmatter.featuredImage.mode',
  childrenMarkdownRemark___frontmatter___featuredImage___nlink = 'childrenMarkdownRemark.frontmatter.featuredImage.nlink',
  childrenMarkdownRemark___frontmatter___featuredImage___uid = 'childrenMarkdownRemark.frontmatter.featuredImage.uid',
  childrenMarkdownRemark___frontmatter___featuredImage___gid = 'childrenMarkdownRemark.frontmatter.featuredImage.gid',
  childrenMarkdownRemark___frontmatter___featuredImage___rdev = 'childrenMarkdownRemark.frontmatter.featuredImage.rdev',
  childrenMarkdownRemark___frontmatter___featuredImage___ino = 'childrenMarkdownRemark.frontmatter.featuredImage.ino',
  childrenMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___atime = 'childrenMarkdownRemark.frontmatter.featuredImage.atime',
  childrenMarkdownRemark___frontmatter___featuredImage___mtime = 'childrenMarkdownRemark.frontmatter.featuredImage.mtime',
  childrenMarkdownRemark___frontmatter___featuredImage___ctime = 'childrenMarkdownRemark.frontmatter.featuredImage.ctime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___blksize = 'childrenMarkdownRemark.frontmatter.featuredImage.blksize',
  childrenMarkdownRemark___frontmatter___featuredImage___blocks = 'childrenMarkdownRemark.frontmatter.featuredImage.blocks',
  childrenMarkdownRemark___frontmatter___featuredImage___url = 'childrenMarkdownRemark.frontmatter.featuredImage.url',
  childrenMarkdownRemark___frontmatter___featuredImage___publicURL = 'childrenMarkdownRemark.frontmatter.featuredImage.publicURL',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___featuredImage___id = 'childrenMarkdownRemark.frontmatter.featuredImage.id',
  childrenMarkdownRemark___frontmatter___featuredImage___children = 'childrenMarkdownRemark.frontmatter.featuredImage.children',
  childrenMarkdownRemark___frontmatter___bandcamp = 'childrenMarkdownRemark.frontmatter.bandcamp',
  childrenMarkdownRemark___frontmatter___hatena = 'childrenMarkdownRemark.frontmatter.hatena',
  childrenMarkdownRemark___frontmatter___youtube = 'childrenMarkdownRemark.frontmatter.youtube',
  childrenMarkdownRemark___frontmatter___draft = 'childrenMarkdownRemark.frontmatter.draft',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___fileAbsolutePath = 'childrenMarkdownRemark.fileAbsolutePath',
  childrenMarkdownRemark___fields___draft = 'childrenMarkdownRemark.fields.draft',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___author = 'childMarkdownRemark.frontmatter.author',
  childMarkdownRemark___frontmatter___profile = 'childMarkdownRemark.frontmatter.profile',
  childMarkdownRemark___frontmatter___createdAt = 'childMarkdownRemark.frontmatter.createdAt',
  childMarkdownRemark___frontmatter___updatedAt = 'childMarkdownRemark.frontmatter.updatedAt',
  childMarkdownRemark___frontmatter___publishedAt = 'childMarkdownRemark.frontmatter.publishedAt',
  childMarkdownRemark___frontmatter___vol = 'childMarkdownRemark.frontmatter.vol',
  childMarkdownRemark___frontmatter___images = 'childMarkdownRemark.frontmatter.images',
  childMarkdownRemark___frontmatter___images___sourceInstanceName = 'childMarkdownRemark.frontmatter.images.sourceInstanceName',
  childMarkdownRemark___frontmatter___images___absolutePath = 'childMarkdownRemark.frontmatter.images.absolutePath',
  childMarkdownRemark___frontmatter___images___relativePath = 'childMarkdownRemark.frontmatter.images.relativePath',
  childMarkdownRemark___frontmatter___images___extension = 'childMarkdownRemark.frontmatter.images.extension',
  childMarkdownRemark___frontmatter___images___size = 'childMarkdownRemark.frontmatter.images.size',
  childMarkdownRemark___frontmatter___images___prettySize = 'childMarkdownRemark.frontmatter.images.prettySize',
  childMarkdownRemark___frontmatter___images___modifiedTime = 'childMarkdownRemark.frontmatter.images.modifiedTime',
  childMarkdownRemark___frontmatter___images___accessTime = 'childMarkdownRemark.frontmatter.images.accessTime',
  childMarkdownRemark___frontmatter___images___changeTime = 'childMarkdownRemark.frontmatter.images.changeTime',
  childMarkdownRemark___frontmatter___images___birthTime = 'childMarkdownRemark.frontmatter.images.birthTime',
  childMarkdownRemark___frontmatter___images___root = 'childMarkdownRemark.frontmatter.images.root',
  childMarkdownRemark___frontmatter___images___dir = 'childMarkdownRemark.frontmatter.images.dir',
  childMarkdownRemark___frontmatter___images___base = 'childMarkdownRemark.frontmatter.images.base',
  childMarkdownRemark___frontmatter___images___ext = 'childMarkdownRemark.frontmatter.images.ext',
  childMarkdownRemark___frontmatter___images___name = 'childMarkdownRemark.frontmatter.images.name',
  childMarkdownRemark___frontmatter___images___relativeDirectory = 'childMarkdownRemark.frontmatter.images.relativeDirectory',
  childMarkdownRemark___frontmatter___images___dev = 'childMarkdownRemark.frontmatter.images.dev',
  childMarkdownRemark___frontmatter___images___mode = 'childMarkdownRemark.frontmatter.images.mode',
  childMarkdownRemark___frontmatter___images___nlink = 'childMarkdownRemark.frontmatter.images.nlink',
  childMarkdownRemark___frontmatter___images___uid = 'childMarkdownRemark.frontmatter.images.uid',
  childMarkdownRemark___frontmatter___images___gid = 'childMarkdownRemark.frontmatter.images.gid',
  childMarkdownRemark___frontmatter___images___rdev = 'childMarkdownRemark.frontmatter.images.rdev',
  childMarkdownRemark___frontmatter___images___ino = 'childMarkdownRemark.frontmatter.images.ino',
  childMarkdownRemark___frontmatter___images___atimeMs = 'childMarkdownRemark.frontmatter.images.atimeMs',
  childMarkdownRemark___frontmatter___images___mtimeMs = 'childMarkdownRemark.frontmatter.images.mtimeMs',
  childMarkdownRemark___frontmatter___images___ctimeMs = 'childMarkdownRemark.frontmatter.images.ctimeMs',
  childMarkdownRemark___frontmatter___images___atime = 'childMarkdownRemark.frontmatter.images.atime',
  childMarkdownRemark___frontmatter___images___mtime = 'childMarkdownRemark.frontmatter.images.mtime',
  childMarkdownRemark___frontmatter___images___ctime = 'childMarkdownRemark.frontmatter.images.ctime',
  childMarkdownRemark___frontmatter___images___birthtime = 'childMarkdownRemark.frontmatter.images.birthtime',
  childMarkdownRemark___frontmatter___images___birthtimeMs = 'childMarkdownRemark.frontmatter.images.birthtimeMs',
  childMarkdownRemark___frontmatter___images___blksize = 'childMarkdownRemark.frontmatter.images.blksize',
  childMarkdownRemark___frontmatter___images___blocks = 'childMarkdownRemark.frontmatter.images.blocks',
  childMarkdownRemark___frontmatter___images___url = 'childMarkdownRemark.frontmatter.images.url',
  childMarkdownRemark___frontmatter___images___publicURL = 'childMarkdownRemark.frontmatter.images.publicURL',
  childMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___images___childrenImageSharp = 'childMarkdownRemark.frontmatter.images.childrenImageSharp',
  childMarkdownRemark___frontmatter___images___childrenPagesJson = 'childMarkdownRemark.frontmatter.images.childrenPagesJson',
  childMarkdownRemark___frontmatter___images___id = 'childMarkdownRemark.frontmatter.images.id',
  childMarkdownRemark___frontmatter___images___children = 'childMarkdownRemark.frontmatter.images.children',
  childMarkdownRemark___frontmatter___writing = 'childMarkdownRemark.frontmatter.writing',
  childMarkdownRemark___frontmatter___linktree = 'childMarkdownRemark.frontmatter.linktree',
  childMarkdownRemark___frontmatter___disableSideHeader = 'childMarkdownRemark.frontmatter.disableSideHeader',
  childMarkdownRemark___frontmatter___instagram = 'childMarkdownRemark.frontmatter.instagram',
  childMarkdownRemark___frontmatter___twitter = 'childMarkdownRemark.frontmatter.twitter',
  childMarkdownRemark___frontmatter___align = 'childMarkdownRemark.frontmatter.align',
  childMarkdownRemark___frontmatter___keywords = 'childMarkdownRemark.frontmatter.keywords',
  childMarkdownRemark___frontmatter___minnakikeru = 'childMarkdownRemark.frontmatter.minnakikeru',
  childMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childMarkdownRemark___frontmatter___featuredImage___relativePath = 'childMarkdownRemark.frontmatter.featuredImage.relativePath',
  childMarkdownRemark___frontmatter___featuredImage___extension = 'childMarkdownRemark.frontmatter.featuredImage.extension',
  childMarkdownRemark___frontmatter___featuredImage___size = 'childMarkdownRemark.frontmatter.featuredImage.size',
  childMarkdownRemark___frontmatter___featuredImage___prettySize = 'childMarkdownRemark.frontmatter.featuredImage.prettySize',
  childMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childMarkdownRemark___frontmatter___featuredImage___accessTime = 'childMarkdownRemark.frontmatter.featuredImage.accessTime',
  childMarkdownRemark___frontmatter___featuredImage___changeTime = 'childMarkdownRemark.frontmatter.featuredImage.changeTime',
  childMarkdownRemark___frontmatter___featuredImage___birthTime = 'childMarkdownRemark.frontmatter.featuredImage.birthTime',
  childMarkdownRemark___frontmatter___featuredImage___root = 'childMarkdownRemark.frontmatter.featuredImage.root',
  childMarkdownRemark___frontmatter___featuredImage___dir = 'childMarkdownRemark.frontmatter.featuredImage.dir',
  childMarkdownRemark___frontmatter___featuredImage___base = 'childMarkdownRemark.frontmatter.featuredImage.base',
  childMarkdownRemark___frontmatter___featuredImage___ext = 'childMarkdownRemark.frontmatter.featuredImage.ext',
  childMarkdownRemark___frontmatter___featuredImage___name = 'childMarkdownRemark.frontmatter.featuredImage.name',
  childMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childMarkdownRemark___frontmatter___featuredImage___dev = 'childMarkdownRemark.frontmatter.featuredImage.dev',
  childMarkdownRemark___frontmatter___featuredImage___mode = 'childMarkdownRemark.frontmatter.featuredImage.mode',
  childMarkdownRemark___frontmatter___featuredImage___nlink = 'childMarkdownRemark.frontmatter.featuredImage.nlink',
  childMarkdownRemark___frontmatter___featuredImage___uid = 'childMarkdownRemark.frontmatter.featuredImage.uid',
  childMarkdownRemark___frontmatter___featuredImage___gid = 'childMarkdownRemark.frontmatter.featuredImage.gid',
  childMarkdownRemark___frontmatter___featuredImage___rdev = 'childMarkdownRemark.frontmatter.featuredImage.rdev',
  childMarkdownRemark___frontmatter___featuredImage___ino = 'childMarkdownRemark.frontmatter.featuredImage.ino',
  childMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childMarkdownRemark___frontmatter___featuredImage___atime = 'childMarkdownRemark.frontmatter.featuredImage.atime',
  childMarkdownRemark___frontmatter___featuredImage___mtime = 'childMarkdownRemark.frontmatter.featuredImage.mtime',
  childMarkdownRemark___frontmatter___featuredImage___ctime = 'childMarkdownRemark.frontmatter.featuredImage.ctime',
  childMarkdownRemark___frontmatter___featuredImage___birthtime = 'childMarkdownRemark.frontmatter.featuredImage.birthtime',
  childMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___blksize = 'childMarkdownRemark.frontmatter.featuredImage.blksize',
  childMarkdownRemark___frontmatter___featuredImage___blocks = 'childMarkdownRemark.frontmatter.featuredImage.blocks',
  childMarkdownRemark___frontmatter___featuredImage___url = 'childMarkdownRemark.frontmatter.featuredImage.url',
  childMarkdownRemark___frontmatter___featuredImage___publicURL = 'childMarkdownRemark.frontmatter.featuredImage.publicURL',
  childMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childMarkdownRemark___frontmatter___featuredImage___id = 'childMarkdownRemark.frontmatter.featuredImage.id',
  childMarkdownRemark___frontmatter___featuredImage___children = 'childMarkdownRemark.frontmatter.featuredImage.children',
  childMarkdownRemark___frontmatter___bandcamp = 'childMarkdownRemark.frontmatter.bandcamp',
  childMarkdownRemark___frontmatter___hatena = 'childMarkdownRemark.frontmatter.hatena',
  childMarkdownRemark___frontmatter___youtube = 'childMarkdownRemark.frontmatter.youtube',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark.frontmatter.draft',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___fields___draft = 'childMarkdownRemark.fields.draft',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulMarkdownArticleContentTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulMarkdownArticleContentTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulMarkdownArticleContentTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
};

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

type contentfulMarkdownArticleContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulMarkdownArticleContentTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
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
  author___contentful_id = 'author.contentful_id',
  author___id = 'author.id',
  author___node_locale = 'author.node_locale',
  author___name = 'author.name',
  author___twitter = 'author.twitter',
  author___instagram = 'author.instagram',
  author___youtube = 'author.youtube',
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
  author___introduction___childrenMarkdownRemark = 'author.introduction.childrenMarkdownRemark',
  author___introduction___childrenMarkdownRemark___id = 'author.introduction.childrenMarkdownRemark.id',
  author___introduction___childrenMarkdownRemark___excerpt = 'author.introduction.childrenMarkdownRemark.excerpt',
  author___introduction___childrenMarkdownRemark___rawMarkdownBody = 'author.introduction.childrenMarkdownRemark.rawMarkdownBody',
  author___introduction___childrenMarkdownRemark___fileAbsolutePath = 'author.introduction.childrenMarkdownRemark.fileAbsolutePath',
  author___introduction___childrenMarkdownRemark___html = 'author.introduction.childrenMarkdownRemark.html',
  author___introduction___childrenMarkdownRemark___htmlAst = 'author.introduction.childrenMarkdownRemark.htmlAst',
  author___introduction___childrenMarkdownRemark___excerptAst = 'author.introduction.childrenMarkdownRemark.excerptAst',
  author___introduction___childrenMarkdownRemark___headings = 'author.introduction.childrenMarkdownRemark.headings',
  author___introduction___childrenMarkdownRemark___timeToRead = 'author.introduction.childrenMarkdownRemark.timeToRead',
  author___introduction___childrenMarkdownRemark___tableOfContents = 'author.introduction.childrenMarkdownRemark.tableOfContents',
  author___introduction___childrenMarkdownRemark___children = 'author.introduction.childrenMarkdownRemark.children',
  author___introduction___childMarkdownRemark___id = 'author.introduction.childMarkdownRemark.id',
  author___introduction___childMarkdownRemark___excerpt = 'author.introduction.childMarkdownRemark.excerpt',
  author___introduction___childMarkdownRemark___rawMarkdownBody = 'author.introduction.childMarkdownRemark.rawMarkdownBody',
  author___introduction___childMarkdownRemark___fileAbsolutePath = 'author.introduction.childMarkdownRemark.fileAbsolutePath',
  author___introduction___childMarkdownRemark___html = 'author.introduction.childMarkdownRemark.html',
  author___introduction___childMarkdownRemark___htmlAst = 'author.introduction.childMarkdownRemark.htmlAst',
  author___introduction___childMarkdownRemark___excerptAst = 'author.introduction.childMarkdownRemark.excerptAst',
  author___introduction___childMarkdownRemark___headings = 'author.introduction.childMarkdownRemark.headings',
  author___introduction___childMarkdownRemark___timeToRead = 'author.introduction.childMarkdownRemark.timeToRead',
  author___introduction___childMarkdownRemark___tableOfContents = 'author.introduction.childMarkdownRemark.tableOfContents',
  author___introduction___childMarkdownRemark___children = 'author.introduction.childMarkdownRemark.children',
  author___spaceId = 'author.spaceId',
  author___createdAt = 'author.createdAt',
  author___updatedAt = 'author.updatedAt',
  author___sys___type = 'author.sys.type',
  author___sys___revision = 'author.sys.revision',
  author___linktree = 'author.linktree',
  author___minnakikeru = 'author.minnakikeru',
  author___markdownarticle = 'author.markdownarticle',
  author___markdownarticle___contentful_id = 'author.markdownarticle.contentful_id',
  author___markdownarticle___id = 'author.markdownarticle.id',
  author___markdownarticle___node_locale = 'author.markdownarticle.node_locale',
  author___markdownarticle___title = 'author.markdownarticle.title',
  author___markdownarticle___slug = 'author.markdownarticle.slug',
  author___markdownarticle___publishedAt = 'author.markdownarticle.publishedAt',
  author___markdownarticle___disableSideHeader = 'author.markdownarticle.disableSideHeader',
  author___markdownarticle___isVirticalWriting = 'author.markdownarticle.isVirticalWriting',
  author___markdownarticle___author___contentful_id = 'author.markdownarticle.author.contentful_id',
  author___markdownarticle___author___id = 'author.markdownarticle.author.id',
  author___markdownarticle___author___node_locale = 'author.markdownarticle.author.node_locale',
  author___markdownarticle___author___name = 'author.markdownarticle.author.name',
  author___markdownarticle___author___twitter = 'author.markdownarticle.author.twitter',
  author___markdownarticle___author___instagram = 'author.markdownarticle.author.instagram',
  author___markdownarticle___author___youtube = 'author.markdownarticle.author.youtube',
  author___markdownarticle___author___spaceId = 'author.markdownarticle.author.spaceId',
  author___markdownarticle___author___createdAt = 'author.markdownarticle.author.createdAt',
  author___markdownarticle___author___updatedAt = 'author.markdownarticle.author.updatedAt',
  author___markdownarticle___author___linktree = 'author.markdownarticle.author.linktree',
  author___markdownarticle___author___minnakikeru = 'author.markdownarticle.author.minnakikeru',
  author___markdownarticle___author___markdownarticle = 'author.markdownarticle.author.markdownarticle',
  author___markdownarticle___author___hatena = 'author.markdownarticle.author.hatena',
  author___markdownarticle___author___bandcamp = 'author.markdownarticle.author.bandcamp',
  author___markdownarticle___author___childrenContentfulAuthorIntroductionTextNode = 'author.markdownarticle.author.childrenContentfulAuthorIntroductionTextNode',
  author___markdownarticle___author___children = 'author.markdownarticle.author.children',
  author___markdownarticle___content___id = 'author.markdownarticle.content.id',
  author___markdownarticle___content___children = 'author.markdownarticle.content.children',
  author___markdownarticle___content___content = 'author.markdownarticle.content.content',
  author___markdownarticle___content___childrenMarkdownRemark = 'author.markdownarticle.content.childrenMarkdownRemark',
  author___markdownarticle___spaceId = 'author.markdownarticle.spaceId',
  author___markdownarticle___createdAt = 'author.markdownarticle.createdAt',
  author___markdownarticle___updatedAt = 'author.markdownarticle.updatedAt',
  author___markdownarticle___sys___type = 'author.markdownarticle.sys.type',
  author___markdownarticle___sys___revision = 'author.markdownarticle.sys.revision',
  author___markdownarticle___align = 'author.markdownarticle.align',
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
  author___markdownarticle___childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'author.markdownarticle.childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___id = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.id',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___children = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.children',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___content = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.content',
  author___markdownarticle___childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'author.markdownarticle.childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
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
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___id = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.id',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerpt = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerpt',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fileAbsolutePath = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fileAbsolutePath',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___html = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.html',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___htmlAst = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.htmlAst',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerptAst = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerptAst',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___timeToRead = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.timeToRead',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___tableOfContents = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.tableOfContents',
  author___childrenContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children = 'author.childrenContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___id = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.id',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerpt = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerpt',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___rawMarkdownBody = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.rawMarkdownBody',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___fileAbsolutePath = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.fileAbsolutePath',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___html = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.html',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___htmlAst = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.htmlAst',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerptAst = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerptAst',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___timeToRead = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.timeToRead',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___tableOfContents = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.tableOfContents',
  author___childrenContentfulAuthorIntroductionTextNode___childMarkdownRemark___children = 'author.childrenContentfulAuthorIntroductionTextNode.childMarkdownRemark.children',
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
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___id = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.id',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerpt = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerpt',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___rawMarkdownBody = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.rawMarkdownBody',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___fileAbsolutePath = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.fileAbsolutePath',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___html = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.html',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___htmlAst = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.htmlAst',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___excerptAst = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.excerptAst',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___headings = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.headings',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___timeToRead = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.timeToRead',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___tableOfContents = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.tableOfContents',
  author___childContentfulAuthorIntroductionTextNode___childrenMarkdownRemark___children = 'author.childContentfulAuthorIntroductionTextNode.childrenMarkdownRemark.children',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___id = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.id',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerpt = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerpt',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___rawMarkdownBody = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.rawMarkdownBody',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___fileAbsolutePath = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.fileAbsolutePath',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___html = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.html',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___htmlAst = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.htmlAst',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___excerptAst = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.excerptAst',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___headings = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.headings',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___timeToRead = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.timeToRead',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___tableOfContents = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.tableOfContents',
  author___childContentfulAuthorIntroductionTextNode___childMarkdownRemark___children = 'author.childContentfulAuthorIntroductionTextNode.childMarkdownRemark.children',
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
  content___childrenMarkdownRemark = 'content.childrenMarkdownRemark',
  content___childrenMarkdownRemark___id = 'content.childrenMarkdownRemark.id',
  content___childrenMarkdownRemark___frontmatter___title = 'content.childrenMarkdownRemark.frontmatter.title',
  content___childrenMarkdownRemark___frontmatter___author = 'content.childrenMarkdownRemark.frontmatter.author',
  content___childrenMarkdownRemark___frontmatter___profile = 'content.childrenMarkdownRemark.frontmatter.profile',
  content___childrenMarkdownRemark___frontmatter___createdAt = 'content.childrenMarkdownRemark.frontmatter.createdAt',
  content___childrenMarkdownRemark___frontmatter___updatedAt = 'content.childrenMarkdownRemark.frontmatter.updatedAt',
  content___childrenMarkdownRemark___frontmatter___publishedAt = 'content.childrenMarkdownRemark.frontmatter.publishedAt',
  content___childrenMarkdownRemark___frontmatter___vol = 'content.childrenMarkdownRemark.frontmatter.vol',
  content___childrenMarkdownRemark___frontmatter___images = 'content.childrenMarkdownRemark.frontmatter.images',
  content___childrenMarkdownRemark___frontmatter___writing = 'content.childrenMarkdownRemark.frontmatter.writing',
  content___childrenMarkdownRemark___frontmatter___linktree = 'content.childrenMarkdownRemark.frontmatter.linktree',
  content___childrenMarkdownRemark___frontmatter___disableSideHeader = 'content.childrenMarkdownRemark.frontmatter.disableSideHeader',
  content___childrenMarkdownRemark___frontmatter___instagram = 'content.childrenMarkdownRemark.frontmatter.instagram',
  content___childrenMarkdownRemark___frontmatter___twitter = 'content.childrenMarkdownRemark.frontmatter.twitter',
  content___childrenMarkdownRemark___frontmatter___align = 'content.childrenMarkdownRemark.frontmatter.align',
  content___childrenMarkdownRemark___frontmatter___keywords = 'content.childrenMarkdownRemark.frontmatter.keywords',
  content___childrenMarkdownRemark___frontmatter___minnakikeru = 'content.childrenMarkdownRemark.frontmatter.minnakikeru',
  content___childrenMarkdownRemark___frontmatter___bandcamp = 'content.childrenMarkdownRemark.frontmatter.bandcamp',
  content___childrenMarkdownRemark___frontmatter___hatena = 'content.childrenMarkdownRemark.frontmatter.hatena',
  content___childrenMarkdownRemark___frontmatter___youtube = 'content.childrenMarkdownRemark.frontmatter.youtube',
  content___childrenMarkdownRemark___frontmatter___draft = 'content.childrenMarkdownRemark.frontmatter.draft',
  content___childrenMarkdownRemark___excerpt = 'content.childrenMarkdownRemark.excerpt',
  content___childrenMarkdownRemark___rawMarkdownBody = 'content.childrenMarkdownRemark.rawMarkdownBody',
  content___childrenMarkdownRemark___fileAbsolutePath = 'content.childrenMarkdownRemark.fileAbsolutePath',
  content___childrenMarkdownRemark___fields___draft = 'content.childrenMarkdownRemark.fields.draft',
  content___childrenMarkdownRemark___html = 'content.childrenMarkdownRemark.html',
  content___childrenMarkdownRemark___htmlAst = 'content.childrenMarkdownRemark.htmlAst',
  content___childrenMarkdownRemark___excerptAst = 'content.childrenMarkdownRemark.excerptAst',
  content___childrenMarkdownRemark___headings = 'content.childrenMarkdownRemark.headings',
  content___childrenMarkdownRemark___headings___id = 'content.childrenMarkdownRemark.headings.id',
  content___childrenMarkdownRemark___headings___value = 'content.childrenMarkdownRemark.headings.value',
  content___childrenMarkdownRemark___headings___depth = 'content.childrenMarkdownRemark.headings.depth',
  content___childrenMarkdownRemark___timeToRead = 'content.childrenMarkdownRemark.timeToRead',
  content___childrenMarkdownRemark___tableOfContents = 'content.childrenMarkdownRemark.tableOfContents',
  content___childrenMarkdownRemark___wordCount___paragraphs = 'content.childrenMarkdownRemark.wordCount.paragraphs',
  content___childrenMarkdownRemark___wordCount___sentences = 'content.childrenMarkdownRemark.wordCount.sentences',
  content___childrenMarkdownRemark___wordCount___words = 'content.childrenMarkdownRemark.wordCount.words',
  content___childrenMarkdownRemark___parent___id = 'content.childrenMarkdownRemark.parent.id',
  content___childrenMarkdownRemark___parent___children = 'content.childrenMarkdownRemark.parent.children',
  content___childrenMarkdownRemark___children = 'content.childrenMarkdownRemark.children',
  content___childrenMarkdownRemark___children___id = 'content.childrenMarkdownRemark.children.id',
  content___childrenMarkdownRemark___children___children = 'content.childrenMarkdownRemark.children.children',
  content___childrenMarkdownRemark___internal___content = 'content.childrenMarkdownRemark.internal.content',
  content___childrenMarkdownRemark___internal___contentDigest = 'content.childrenMarkdownRemark.internal.contentDigest',
  content___childrenMarkdownRemark___internal___description = 'content.childrenMarkdownRemark.internal.description',
  content___childrenMarkdownRemark___internal___fieldOwners = 'content.childrenMarkdownRemark.internal.fieldOwners',
  content___childrenMarkdownRemark___internal___ignoreType = 'content.childrenMarkdownRemark.internal.ignoreType',
  content___childrenMarkdownRemark___internal___mediaType = 'content.childrenMarkdownRemark.internal.mediaType',
  content___childrenMarkdownRemark___internal___owner = 'content.childrenMarkdownRemark.internal.owner',
  content___childrenMarkdownRemark___internal___type = 'content.childrenMarkdownRemark.internal.type',
  content___childMarkdownRemark___id = 'content.childMarkdownRemark.id',
  content___childMarkdownRemark___frontmatter___title = 'content.childMarkdownRemark.frontmatter.title',
  content___childMarkdownRemark___frontmatter___author = 'content.childMarkdownRemark.frontmatter.author',
  content___childMarkdownRemark___frontmatter___profile = 'content.childMarkdownRemark.frontmatter.profile',
  content___childMarkdownRemark___frontmatter___createdAt = 'content.childMarkdownRemark.frontmatter.createdAt',
  content___childMarkdownRemark___frontmatter___updatedAt = 'content.childMarkdownRemark.frontmatter.updatedAt',
  content___childMarkdownRemark___frontmatter___publishedAt = 'content.childMarkdownRemark.frontmatter.publishedAt',
  content___childMarkdownRemark___frontmatter___vol = 'content.childMarkdownRemark.frontmatter.vol',
  content___childMarkdownRemark___frontmatter___images = 'content.childMarkdownRemark.frontmatter.images',
  content___childMarkdownRemark___frontmatter___writing = 'content.childMarkdownRemark.frontmatter.writing',
  content___childMarkdownRemark___frontmatter___linktree = 'content.childMarkdownRemark.frontmatter.linktree',
  content___childMarkdownRemark___frontmatter___disableSideHeader = 'content.childMarkdownRemark.frontmatter.disableSideHeader',
  content___childMarkdownRemark___frontmatter___instagram = 'content.childMarkdownRemark.frontmatter.instagram',
  content___childMarkdownRemark___frontmatter___twitter = 'content.childMarkdownRemark.frontmatter.twitter',
  content___childMarkdownRemark___frontmatter___align = 'content.childMarkdownRemark.frontmatter.align',
  content___childMarkdownRemark___frontmatter___keywords = 'content.childMarkdownRemark.frontmatter.keywords',
  content___childMarkdownRemark___frontmatter___minnakikeru = 'content.childMarkdownRemark.frontmatter.minnakikeru',
  content___childMarkdownRemark___frontmatter___bandcamp = 'content.childMarkdownRemark.frontmatter.bandcamp',
  content___childMarkdownRemark___frontmatter___hatena = 'content.childMarkdownRemark.frontmatter.hatena',
  content___childMarkdownRemark___frontmatter___youtube = 'content.childMarkdownRemark.frontmatter.youtube',
  content___childMarkdownRemark___frontmatter___draft = 'content.childMarkdownRemark.frontmatter.draft',
  content___childMarkdownRemark___excerpt = 'content.childMarkdownRemark.excerpt',
  content___childMarkdownRemark___rawMarkdownBody = 'content.childMarkdownRemark.rawMarkdownBody',
  content___childMarkdownRemark___fileAbsolutePath = 'content.childMarkdownRemark.fileAbsolutePath',
  content___childMarkdownRemark___fields___draft = 'content.childMarkdownRemark.fields.draft',
  content___childMarkdownRemark___html = 'content.childMarkdownRemark.html',
  content___childMarkdownRemark___htmlAst = 'content.childMarkdownRemark.htmlAst',
  content___childMarkdownRemark___excerptAst = 'content.childMarkdownRemark.excerptAst',
  content___childMarkdownRemark___headings = 'content.childMarkdownRemark.headings',
  content___childMarkdownRemark___headings___id = 'content.childMarkdownRemark.headings.id',
  content___childMarkdownRemark___headings___value = 'content.childMarkdownRemark.headings.value',
  content___childMarkdownRemark___headings___depth = 'content.childMarkdownRemark.headings.depth',
  content___childMarkdownRemark___timeToRead = 'content.childMarkdownRemark.timeToRead',
  content___childMarkdownRemark___tableOfContents = 'content.childMarkdownRemark.tableOfContents',
  content___childMarkdownRemark___wordCount___paragraphs = 'content.childMarkdownRemark.wordCount.paragraphs',
  content___childMarkdownRemark___wordCount___sentences = 'content.childMarkdownRemark.wordCount.sentences',
  content___childMarkdownRemark___wordCount___words = 'content.childMarkdownRemark.wordCount.words',
  content___childMarkdownRemark___parent___id = 'content.childMarkdownRemark.parent.id',
  content___childMarkdownRemark___parent___children = 'content.childMarkdownRemark.parent.children',
  content___childMarkdownRemark___children = 'content.childMarkdownRemark.children',
  content___childMarkdownRemark___children___id = 'content.childMarkdownRemark.children.id',
  content___childMarkdownRemark___children___children = 'content.childMarkdownRemark.children.children',
  content___childMarkdownRemark___internal___content = 'content.childMarkdownRemark.internal.content',
  content___childMarkdownRemark___internal___contentDigest = 'content.childMarkdownRemark.internal.contentDigest',
  content___childMarkdownRemark___internal___description = 'content.childMarkdownRemark.internal.description',
  content___childMarkdownRemark___internal___fieldOwners = 'content.childMarkdownRemark.internal.fieldOwners',
  content___childMarkdownRemark___internal___ignoreType = 'content.childMarkdownRemark.internal.ignoreType',
  content___childMarkdownRemark___internal___mediaType = 'content.childMarkdownRemark.internal.mediaType',
  content___childMarkdownRemark___internal___owner = 'content.childMarkdownRemark.internal.owner',
  content___childMarkdownRemark___internal___type = 'content.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  align = 'align',
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
  featuredImage___localFile___childrenMarkdownRemark = 'featuredImage.localFile.childrenMarkdownRemark',
  featuredImage___localFile___childrenMarkdownRemark___id = 'featuredImage.localFile.childrenMarkdownRemark.id',
  featuredImage___localFile___childrenMarkdownRemark___excerpt = 'featuredImage.localFile.childrenMarkdownRemark.excerpt',
  featuredImage___localFile___childrenMarkdownRemark___rawMarkdownBody = 'featuredImage.localFile.childrenMarkdownRemark.rawMarkdownBody',
  featuredImage___localFile___childrenMarkdownRemark___fileAbsolutePath = 'featuredImage.localFile.childrenMarkdownRemark.fileAbsolutePath',
  featuredImage___localFile___childrenMarkdownRemark___html = 'featuredImage.localFile.childrenMarkdownRemark.html',
  featuredImage___localFile___childrenMarkdownRemark___htmlAst = 'featuredImage.localFile.childrenMarkdownRemark.htmlAst',
  featuredImage___localFile___childrenMarkdownRemark___excerptAst = 'featuredImage.localFile.childrenMarkdownRemark.excerptAst',
  featuredImage___localFile___childrenMarkdownRemark___headings = 'featuredImage.localFile.childrenMarkdownRemark.headings',
  featuredImage___localFile___childrenMarkdownRemark___timeToRead = 'featuredImage.localFile.childrenMarkdownRemark.timeToRead',
  featuredImage___localFile___childrenMarkdownRemark___tableOfContents = 'featuredImage.localFile.childrenMarkdownRemark.tableOfContents',
  featuredImage___localFile___childrenMarkdownRemark___children = 'featuredImage.localFile.childrenMarkdownRemark.children',
  featuredImage___localFile___childMarkdownRemark___id = 'featuredImage.localFile.childMarkdownRemark.id',
  featuredImage___localFile___childMarkdownRemark___excerpt = 'featuredImage.localFile.childMarkdownRemark.excerpt',
  featuredImage___localFile___childMarkdownRemark___rawMarkdownBody = 'featuredImage.localFile.childMarkdownRemark.rawMarkdownBody',
  featuredImage___localFile___childMarkdownRemark___fileAbsolutePath = 'featuredImage.localFile.childMarkdownRemark.fileAbsolutePath',
  featuredImage___localFile___childMarkdownRemark___html = 'featuredImage.localFile.childMarkdownRemark.html',
  featuredImage___localFile___childMarkdownRemark___htmlAst = 'featuredImage.localFile.childMarkdownRemark.htmlAst',
  featuredImage___localFile___childMarkdownRemark___excerptAst = 'featuredImage.localFile.childMarkdownRemark.excerptAst',
  featuredImage___localFile___childMarkdownRemark___headings = 'featuredImage.localFile.childMarkdownRemark.headings',
  featuredImage___localFile___childMarkdownRemark___timeToRead = 'featuredImage.localFile.childMarkdownRemark.timeToRead',
  featuredImage___localFile___childMarkdownRemark___tableOfContents = 'featuredImage.localFile.childMarkdownRemark.tableOfContents',
  featuredImage___localFile___childMarkdownRemark___children = 'featuredImage.localFile.childMarkdownRemark.children',
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
  featuredImage___resolutions___base64 = 'featuredImage.resolutions.base64',
  featuredImage___resolutions___tracedSVG = 'featuredImage.resolutions.tracedSVG',
  featuredImage___resolutions___aspectRatio = 'featuredImage.resolutions.aspectRatio',
  featuredImage___resolutions___width = 'featuredImage.resolutions.width',
  featuredImage___resolutions___height = 'featuredImage.resolutions.height',
  featuredImage___resolutions___src = 'featuredImage.resolutions.src',
  featuredImage___resolutions___srcSet = 'featuredImage.resolutions.srcSet',
  featuredImage___resolutions___srcWebp = 'featuredImage.resolutions.srcWebp',
  featuredImage___resolutions___srcSetWebp = 'featuredImage.resolutions.srcSetWebp',
  featuredImage___fluid___base64 = 'featuredImage.fluid.base64',
  featuredImage___fluid___tracedSVG = 'featuredImage.fluid.tracedSVG',
  featuredImage___fluid___aspectRatio = 'featuredImage.fluid.aspectRatio',
  featuredImage___fluid___src = 'featuredImage.fluid.src',
  featuredImage___fluid___srcSet = 'featuredImage.fluid.srcSet',
  featuredImage___fluid___srcWebp = 'featuredImage.fluid.srcWebp',
  featuredImage___fluid___srcSetWebp = 'featuredImage.fluid.srcSetWebp',
  featuredImage___fluid___sizes = 'featuredImage.fluid.sizes',
  featuredImage___sizes___base64 = 'featuredImage.sizes.base64',
  featuredImage___sizes___tracedSVG = 'featuredImage.sizes.tracedSVG',
  featuredImage___sizes___aspectRatio = 'featuredImage.sizes.aspectRatio',
  featuredImage___sizes___src = 'featuredImage.sizes.src',
  featuredImage___sizes___srcSet = 'featuredImage.sizes.srcSet',
  featuredImage___sizes___srcWebp = 'featuredImage.sizes.srcWebp',
  featuredImage___sizes___srcSetWebp = 'featuredImage.sizes.srcSetWebp',
  featuredImage___sizes___sizes = 'featuredImage.sizes.sizes',
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
  images___localFile___childrenMarkdownRemark = 'images.localFile.childrenMarkdownRemark',
  images___localFile___childrenMarkdownRemark___id = 'images.localFile.childrenMarkdownRemark.id',
  images___localFile___childrenMarkdownRemark___excerpt = 'images.localFile.childrenMarkdownRemark.excerpt',
  images___localFile___childrenMarkdownRemark___rawMarkdownBody = 'images.localFile.childrenMarkdownRemark.rawMarkdownBody',
  images___localFile___childrenMarkdownRemark___fileAbsolutePath = 'images.localFile.childrenMarkdownRemark.fileAbsolutePath',
  images___localFile___childrenMarkdownRemark___html = 'images.localFile.childrenMarkdownRemark.html',
  images___localFile___childrenMarkdownRemark___htmlAst = 'images.localFile.childrenMarkdownRemark.htmlAst',
  images___localFile___childrenMarkdownRemark___excerptAst = 'images.localFile.childrenMarkdownRemark.excerptAst',
  images___localFile___childrenMarkdownRemark___headings = 'images.localFile.childrenMarkdownRemark.headings',
  images___localFile___childrenMarkdownRemark___timeToRead = 'images.localFile.childrenMarkdownRemark.timeToRead',
  images___localFile___childrenMarkdownRemark___tableOfContents = 'images.localFile.childrenMarkdownRemark.tableOfContents',
  images___localFile___childrenMarkdownRemark___children = 'images.localFile.childrenMarkdownRemark.children',
  images___localFile___childMarkdownRemark___id = 'images.localFile.childMarkdownRemark.id',
  images___localFile___childMarkdownRemark___excerpt = 'images.localFile.childMarkdownRemark.excerpt',
  images___localFile___childMarkdownRemark___rawMarkdownBody = 'images.localFile.childMarkdownRemark.rawMarkdownBody',
  images___localFile___childMarkdownRemark___fileAbsolutePath = 'images.localFile.childMarkdownRemark.fileAbsolutePath',
  images___localFile___childMarkdownRemark___html = 'images.localFile.childMarkdownRemark.html',
  images___localFile___childMarkdownRemark___htmlAst = 'images.localFile.childMarkdownRemark.htmlAst',
  images___localFile___childMarkdownRemark___excerptAst = 'images.localFile.childMarkdownRemark.excerptAst',
  images___localFile___childMarkdownRemark___headings = 'images.localFile.childMarkdownRemark.headings',
  images___localFile___childMarkdownRemark___timeToRead = 'images.localFile.childMarkdownRemark.timeToRead',
  images___localFile___childMarkdownRemark___tableOfContents = 'images.localFile.childMarkdownRemark.tableOfContents',
  images___localFile___childMarkdownRemark___children = 'images.localFile.childMarkdownRemark.children',
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
  images___resolutions___base64 = 'images.resolutions.base64',
  images___resolutions___tracedSVG = 'images.resolutions.tracedSVG',
  images___resolutions___aspectRatio = 'images.resolutions.aspectRatio',
  images___resolutions___width = 'images.resolutions.width',
  images___resolutions___height = 'images.resolutions.height',
  images___resolutions___src = 'images.resolutions.src',
  images___resolutions___srcSet = 'images.resolutions.srcSet',
  images___resolutions___srcWebp = 'images.resolutions.srcWebp',
  images___resolutions___srcSetWebp = 'images.resolutions.srcSetWebp',
  images___fluid___base64 = 'images.fluid.base64',
  images___fluid___tracedSVG = 'images.fluid.tracedSVG',
  images___fluid___aspectRatio = 'images.fluid.aspectRatio',
  images___fluid___src = 'images.fluid.src',
  images___fluid___srcSet = 'images.fluid.srcSet',
  images___fluid___srcWebp = 'images.fluid.srcWebp',
  images___fluid___srcSetWebp = 'images.fluid.srcSetWebp',
  images___fluid___sizes = 'images.fluid.sizes',
  images___sizes___base64 = 'images.sizes.base64',
  images___sizes___tracedSVG = 'images.sizes.tracedSVG',
  images___sizes___aspectRatio = 'images.sizes.aspectRatio',
  images___sizes___src = 'images.sizes.src',
  images___sizes___srcSet = 'images.sizes.srcSet',
  images___sizes___srcWebp = 'images.sizes.srcWebp',
  images___sizes___srcSetWebp = 'images.sizes.srcSetWebp',
  images___sizes___sizes = 'images.sizes.sizes',
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
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___title = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.title',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___author = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.author',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___profile = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.profile',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___createdAt = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.createdAt',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___updatedAt = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.updatedAt',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___publishedAt = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.publishedAt',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___vol = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.vol',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___images = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.images',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___writing = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.writing',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___linktree = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.linktree',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___disableSideHeader = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.disableSideHeader',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___instagram = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.instagram',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___twitter = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.twitter',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___align = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.align',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___keywords = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.keywords',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___minnakikeru = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.minnakikeru',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___bandcamp = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.bandcamp',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___hatena = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.hatena',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___youtube = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.youtube',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___draft = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.draft',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerpt = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerpt',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fileAbsolutePath = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fileAbsolutePath',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fields___draft = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fields.draft',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___html = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.html',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___htmlAst = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.htmlAst',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerptAst = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerptAst',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___value = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.value',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___depth = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.depth',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___timeToRead = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.timeToRead',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___tableOfContents = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.tableOfContents',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___sentences = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.sentences',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___words = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.words',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children___id = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children.id',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children___children = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children.children',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.type',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___id = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.id',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___title = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.title',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___author = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.author',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___profile = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.profile',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___createdAt = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.createdAt',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___updatedAt = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.updatedAt',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___publishedAt = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.publishedAt',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___vol = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.vol',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___images = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.images',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___writing = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.writing',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___linktree = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.linktree',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___disableSideHeader = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.disableSideHeader',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___instagram = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.instagram',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___twitter = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.twitter',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___align = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.align',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___keywords = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.keywords',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___minnakikeru = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.minnakikeru',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___bandcamp = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.bandcamp',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___hatena = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.hatena',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___youtube = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.youtube',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___draft = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.draft',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerpt = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerpt',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___rawMarkdownBody = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.rawMarkdownBody',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fileAbsolutePath = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fileAbsolutePath',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fields___draft = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fields.draft',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___html = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.html',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___htmlAst = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.htmlAst',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerptAst = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerptAst',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___id = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.id',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___value = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.value',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___depth = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.depth',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___timeToRead = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.timeToRead',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___tableOfContents = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.tableOfContents',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___paragraphs = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.paragraphs',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___sentences = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.sentences',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___words = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.words',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___parent___id = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.parent.id',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___parent___children = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.parent.children',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children___id = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children.id',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children___children = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children.children',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___content = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.content',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___contentDigest = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.contentDigest',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___description = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.description',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___fieldOwners = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.fieldOwners',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___ignoreType = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.ignoreType',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___mediaType = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.mediaType',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___owner = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.owner',
  childrenContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___type = 'childrenContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.type',
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
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___id = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.id',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___title = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.title',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___author = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.author',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___profile = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.profile',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___createdAt = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.createdAt',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___updatedAt = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.updatedAt',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___publishedAt = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.publishedAt',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___vol = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.vol',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___images = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.images',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___writing = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.writing',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___linktree = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.linktree',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___disableSideHeader = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.disableSideHeader',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___instagram = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.instagram',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___twitter = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.twitter',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___align = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.align',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___keywords = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.keywords',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___minnakikeru = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.minnakikeru',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___bandcamp = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.bandcamp',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___hatena = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.hatena',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___youtube = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.youtube',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___frontmatter___draft = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.frontmatter.draft',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerpt = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerpt',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___rawMarkdownBody = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.rawMarkdownBody',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fileAbsolutePath = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fileAbsolutePath',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___fields___draft = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.fields.draft',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___html = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.html',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___htmlAst = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.htmlAst',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___excerptAst = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.excerptAst',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___id = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.id',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___value = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.value',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___headings___depth = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.headings.depth',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___timeToRead = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.timeToRead',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___tableOfContents = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.tableOfContents',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___paragraphs = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.paragraphs',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___sentences = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.sentences',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___wordCount___words = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.wordCount.words',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___parent___id = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.parent.id',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___parent___children = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.parent.children',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children___id = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children.id',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___children___children = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.children.children',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___content = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.content',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___description = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.description',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___owner = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.owner',
  childContentfulMarkdownArticleContentTextNode___childrenMarkdownRemark___internal___type = 'childContentfulMarkdownArticleContentTextNode.childrenMarkdownRemark.internal.type',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___id = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.id',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___author = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.author',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___profile = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.profile',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___createdAt = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.createdAt',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___updatedAt = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.updatedAt',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___publishedAt = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.publishedAt',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___vol = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.vol',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___images = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.images',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___writing = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.writing',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___linktree = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.linktree',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___disableSideHeader = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.disableSideHeader',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___instagram = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.instagram',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___twitter = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.twitter',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___align = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.align',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___keywords = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.keywords',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___minnakikeru = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.minnakikeru',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___bandcamp = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.bandcamp',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___hatena = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.hatena',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___youtube = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.youtube',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___frontmatter___draft = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.frontmatter.draft',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerpt = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerpt',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fileAbsolutePath = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fileAbsolutePath',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___fields___draft = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.fields.draft',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___html = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.html',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___htmlAst = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.htmlAst',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___excerptAst = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.excerptAst',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___id = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.id',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___value = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.value',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___headings___depth = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.headings.depth',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___timeToRead = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.timeToRead',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___tableOfContents = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.tableOfContents',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___wordCount___words = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.wordCount.words',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___parent___id = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.parent.id',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___parent___children = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.parent.children',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children___id = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children.id',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___children___children = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.children.children',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___content = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.content',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___description = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.description',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___owner = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.owner',
  childContentfulMarkdownArticleContentTextNode___childMarkdownRemark___internal___type = 'childContentfulMarkdownArticleContentTextNode.childMarkdownRemark.internal.type',
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

type ContentfulMarkdownArticleFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  readonly isVirticalWriting: Maybe<BooleanQueryOperatorInput>;
  readonly author: Maybe<ContentfulAuthorFilterInput>;
  readonly content: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulMarkdownArticleSysFilterInput>;
  readonly align: Maybe<BooleanQueryOperatorInput>;
  readonly featuredImage: Maybe<ContentfulAssetFilterInput>;
  readonly images: Maybe<ContentfulAssetFilterListInput>;
  readonly childrenContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterListInput>;
  readonly childContentfulMarkdownArticleContentTextNode: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulMarkdownArticleFilterListInput = {
  readonly elemMatch: Maybe<ContentfulMarkdownArticleFilterInput>;
};

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

type ContentfulMarkdownArticleSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulMarkdownArticleSysContentType>;
};

type ContentfulMarkdownArticleSysContentType = {
  readonly sys: Maybe<ContentfulMarkdownArticleSysContentTypeSys>;
};

type ContentfulMarkdownArticleSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulMarkdownArticleSysContentTypeSysFilterInput>;
};

type ContentfulMarkdownArticleSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulMarkdownArticleSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulMarkdownArticleSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulMarkdownArticleSysContentTypeFilterInput>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulResolutions = {
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

type ContentfulResolutionsFilterInput = {
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

type ContentfulSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
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

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
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
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
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
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark.id',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark.frontmatter.title',
  childrenMarkdownRemark___frontmatter___author = 'childrenMarkdownRemark.frontmatter.author',
  childrenMarkdownRemark___frontmatter___profile = 'childrenMarkdownRemark.frontmatter.profile',
  childrenMarkdownRemark___frontmatter___createdAt = 'childrenMarkdownRemark.frontmatter.createdAt',
  childrenMarkdownRemark___frontmatter___updatedAt = 'childrenMarkdownRemark.frontmatter.updatedAt',
  childrenMarkdownRemark___frontmatter___publishedAt = 'childrenMarkdownRemark.frontmatter.publishedAt',
  childrenMarkdownRemark___frontmatter___vol = 'childrenMarkdownRemark.frontmatter.vol',
  childrenMarkdownRemark___frontmatter___images = 'childrenMarkdownRemark.frontmatter.images',
  childrenMarkdownRemark___frontmatter___images___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.images.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___images___absolutePath = 'childrenMarkdownRemark.frontmatter.images.absolutePath',
  childrenMarkdownRemark___frontmatter___images___relativePath = 'childrenMarkdownRemark.frontmatter.images.relativePath',
  childrenMarkdownRemark___frontmatter___images___extension = 'childrenMarkdownRemark.frontmatter.images.extension',
  childrenMarkdownRemark___frontmatter___images___size = 'childrenMarkdownRemark.frontmatter.images.size',
  childrenMarkdownRemark___frontmatter___images___prettySize = 'childrenMarkdownRemark.frontmatter.images.prettySize',
  childrenMarkdownRemark___frontmatter___images___modifiedTime = 'childrenMarkdownRemark.frontmatter.images.modifiedTime',
  childrenMarkdownRemark___frontmatter___images___accessTime = 'childrenMarkdownRemark.frontmatter.images.accessTime',
  childrenMarkdownRemark___frontmatter___images___changeTime = 'childrenMarkdownRemark.frontmatter.images.changeTime',
  childrenMarkdownRemark___frontmatter___images___birthTime = 'childrenMarkdownRemark.frontmatter.images.birthTime',
  childrenMarkdownRemark___frontmatter___images___root = 'childrenMarkdownRemark.frontmatter.images.root',
  childrenMarkdownRemark___frontmatter___images___dir = 'childrenMarkdownRemark.frontmatter.images.dir',
  childrenMarkdownRemark___frontmatter___images___base = 'childrenMarkdownRemark.frontmatter.images.base',
  childrenMarkdownRemark___frontmatter___images___ext = 'childrenMarkdownRemark.frontmatter.images.ext',
  childrenMarkdownRemark___frontmatter___images___name = 'childrenMarkdownRemark.frontmatter.images.name',
  childrenMarkdownRemark___frontmatter___images___relativeDirectory = 'childrenMarkdownRemark.frontmatter.images.relativeDirectory',
  childrenMarkdownRemark___frontmatter___images___dev = 'childrenMarkdownRemark.frontmatter.images.dev',
  childrenMarkdownRemark___frontmatter___images___mode = 'childrenMarkdownRemark.frontmatter.images.mode',
  childrenMarkdownRemark___frontmatter___images___nlink = 'childrenMarkdownRemark.frontmatter.images.nlink',
  childrenMarkdownRemark___frontmatter___images___uid = 'childrenMarkdownRemark.frontmatter.images.uid',
  childrenMarkdownRemark___frontmatter___images___gid = 'childrenMarkdownRemark.frontmatter.images.gid',
  childrenMarkdownRemark___frontmatter___images___rdev = 'childrenMarkdownRemark.frontmatter.images.rdev',
  childrenMarkdownRemark___frontmatter___images___ino = 'childrenMarkdownRemark.frontmatter.images.ino',
  childrenMarkdownRemark___frontmatter___images___atimeMs = 'childrenMarkdownRemark.frontmatter.images.atimeMs',
  childrenMarkdownRemark___frontmatter___images___mtimeMs = 'childrenMarkdownRemark.frontmatter.images.mtimeMs',
  childrenMarkdownRemark___frontmatter___images___ctimeMs = 'childrenMarkdownRemark.frontmatter.images.ctimeMs',
  childrenMarkdownRemark___frontmatter___images___atime = 'childrenMarkdownRemark.frontmatter.images.atime',
  childrenMarkdownRemark___frontmatter___images___mtime = 'childrenMarkdownRemark.frontmatter.images.mtime',
  childrenMarkdownRemark___frontmatter___images___ctime = 'childrenMarkdownRemark.frontmatter.images.ctime',
  childrenMarkdownRemark___frontmatter___images___birthtime = 'childrenMarkdownRemark.frontmatter.images.birthtime',
  childrenMarkdownRemark___frontmatter___images___birthtimeMs = 'childrenMarkdownRemark.frontmatter.images.birthtimeMs',
  childrenMarkdownRemark___frontmatter___images___blksize = 'childrenMarkdownRemark.frontmatter.images.blksize',
  childrenMarkdownRemark___frontmatter___images___blocks = 'childrenMarkdownRemark.frontmatter.images.blocks',
  childrenMarkdownRemark___frontmatter___images___url = 'childrenMarkdownRemark.frontmatter.images.url',
  childrenMarkdownRemark___frontmatter___images___publicURL = 'childrenMarkdownRemark.frontmatter.images.publicURL',
  childrenMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___images___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.images.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___images___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.images.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___images___id = 'childrenMarkdownRemark.frontmatter.images.id',
  childrenMarkdownRemark___frontmatter___images___children = 'childrenMarkdownRemark.frontmatter.images.children',
  childrenMarkdownRemark___frontmatter___writing = 'childrenMarkdownRemark.frontmatter.writing',
  childrenMarkdownRemark___frontmatter___linktree = 'childrenMarkdownRemark.frontmatter.linktree',
  childrenMarkdownRemark___frontmatter___disableSideHeader = 'childrenMarkdownRemark.frontmatter.disableSideHeader',
  childrenMarkdownRemark___frontmatter___instagram = 'childrenMarkdownRemark.frontmatter.instagram',
  childrenMarkdownRemark___frontmatter___twitter = 'childrenMarkdownRemark.frontmatter.twitter',
  childrenMarkdownRemark___frontmatter___align = 'childrenMarkdownRemark.frontmatter.align',
  childrenMarkdownRemark___frontmatter___keywords = 'childrenMarkdownRemark.frontmatter.keywords',
  childrenMarkdownRemark___frontmatter___minnakikeru = 'childrenMarkdownRemark.frontmatter.minnakikeru',
  childrenMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childrenMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childrenMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childrenMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childrenMarkdownRemark___frontmatter___featuredImage___relativePath = 'childrenMarkdownRemark.frontmatter.featuredImage.relativePath',
  childrenMarkdownRemark___frontmatter___featuredImage___extension = 'childrenMarkdownRemark.frontmatter.featuredImage.extension',
  childrenMarkdownRemark___frontmatter___featuredImage___size = 'childrenMarkdownRemark.frontmatter.featuredImage.size',
  childrenMarkdownRemark___frontmatter___featuredImage___prettySize = 'childrenMarkdownRemark.frontmatter.featuredImage.prettySize',
  childrenMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childrenMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childrenMarkdownRemark___frontmatter___featuredImage___accessTime = 'childrenMarkdownRemark.frontmatter.featuredImage.accessTime',
  childrenMarkdownRemark___frontmatter___featuredImage___changeTime = 'childrenMarkdownRemark.frontmatter.featuredImage.changeTime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthTime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthTime',
  childrenMarkdownRemark___frontmatter___featuredImage___root = 'childrenMarkdownRemark.frontmatter.featuredImage.root',
  childrenMarkdownRemark___frontmatter___featuredImage___dir = 'childrenMarkdownRemark.frontmatter.featuredImage.dir',
  childrenMarkdownRemark___frontmatter___featuredImage___base = 'childrenMarkdownRemark.frontmatter.featuredImage.base',
  childrenMarkdownRemark___frontmatter___featuredImage___ext = 'childrenMarkdownRemark.frontmatter.featuredImage.ext',
  childrenMarkdownRemark___frontmatter___featuredImage___name = 'childrenMarkdownRemark.frontmatter.featuredImage.name',
  childrenMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childrenMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childrenMarkdownRemark___frontmatter___featuredImage___dev = 'childrenMarkdownRemark.frontmatter.featuredImage.dev',
  childrenMarkdownRemark___frontmatter___featuredImage___mode = 'childrenMarkdownRemark.frontmatter.featuredImage.mode',
  childrenMarkdownRemark___frontmatter___featuredImage___nlink = 'childrenMarkdownRemark.frontmatter.featuredImage.nlink',
  childrenMarkdownRemark___frontmatter___featuredImage___uid = 'childrenMarkdownRemark.frontmatter.featuredImage.uid',
  childrenMarkdownRemark___frontmatter___featuredImage___gid = 'childrenMarkdownRemark.frontmatter.featuredImage.gid',
  childrenMarkdownRemark___frontmatter___featuredImage___rdev = 'childrenMarkdownRemark.frontmatter.featuredImage.rdev',
  childrenMarkdownRemark___frontmatter___featuredImage___ino = 'childrenMarkdownRemark.frontmatter.featuredImage.ino',
  childrenMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___atime = 'childrenMarkdownRemark.frontmatter.featuredImage.atime',
  childrenMarkdownRemark___frontmatter___featuredImage___mtime = 'childrenMarkdownRemark.frontmatter.featuredImage.mtime',
  childrenMarkdownRemark___frontmatter___featuredImage___ctime = 'childrenMarkdownRemark.frontmatter.featuredImage.ctime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtime = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtime',
  childrenMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childrenMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childrenMarkdownRemark___frontmatter___featuredImage___blksize = 'childrenMarkdownRemark.frontmatter.featuredImage.blksize',
  childrenMarkdownRemark___frontmatter___featuredImage___blocks = 'childrenMarkdownRemark.frontmatter.featuredImage.blocks',
  childrenMarkdownRemark___frontmatter___featuredImage___url = 'childrenMarkdownRemark.frontmatter.featuredImage.url',
  childrenMarkdownRemark___frontmatter___featuredImage___publicURL = 'childrenMarkdownRemark.frontmatter.featuredImage.publicURL',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childrenMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childrenMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childrenMarkdownRemark___frontmatter___featuredImage___id = 'childrenMarkdownRemark.frontmatter.featuredImage.id',
  childrenMarkdownRemark___frontmatter___featuredImage___children = 'childrenMarkdownRemark.frontmatter.featuredImage.children',
  childrenMarkdownRemark___frontmatter___bandcamp = 'childrenMarkdownRemark.frontmatter.bandcamp',
  childrenMarkdownRemark___frontmatter___hatena = 'childrenMarkdownRemark.frontmatter.hatena',
  childrenMarkdownRemark___frontmatter___youtube = 'childrenMarkdownRemark.frontmatter.youtube',
  childrenMarkdownRemark___frontmatter___draft = 'childrenMarkdownRemark.frontmatter.draft',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark.excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark.rawMarkdownBody',
  childrenMarkdownRemark___fileAbsolutePath = 'childrenMarkdownRemark.fileAbsolutePath',
  childrenMarkdownRemark___fields___draft = 'childrenMarkdownRemark.fields.draft',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark.html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark.htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark.excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark.headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark.headings.id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark.headings.value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark.headings.depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark.timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark.tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark.wordCount.paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark.wordCount.sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark.wordCount.words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark.parent.id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark.parent.parent.id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark.parent.parent.children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark.parent.children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark.parent.children.id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark.parent.children.children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark.parent.internal.content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark.parent.internal.contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark.parent.internal.description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark.parent.internal.fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark.parent.internal.ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark.parent.internal.mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark.parent.internal.owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark.parent.internal.type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark.children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark.children.id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark.children.parent.id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark.children.parent.children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark.children.children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark.children.children.id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark.children.children.children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark.children.internal.content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark.children.internal.contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark.children.internal.description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark.children.internal.fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark.children.internal.ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark.children.internal.mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark.children.internal.owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark.children.internal.type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark.internal.content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark.internal.contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark.internal.description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark.internal.fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark.internal.ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark.internal.mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark.internal.owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark.internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___author = 'childMarkdownRemark.frontmatter.author',
  childMarkdownRemark___frontmatter___profile = 'childMarkdownRemark.frontmatter.profile',
  childMarkdownRemark___frontmatter___createdAt = 'childMarkdownRemark.frontmatter.createdAt',
  childMarkdownRemark___frontmatter___updatedAt = 'childMarkdownRemark.frontmatter.updatedAt',
  childMarkdownRemark___frontmatter___publishedAt = 'childMarkdownRemark.frontmatter.publishedAt',
  childMarkdownRemark___frontmatter___vol = 'childMarkdownRemark.frontmatter.vol',
  childMarkdownRemark___frontmatter___images = 'childMarkdownRemark.frontmatter.images',
  childMarkdownRemark___frontmatter___images___sourceInstanceName = 'childMarkdownRemark.frontmatter.images.sourceInstanceName',
  childMarkdownRemark___frontmatter___images___absolutePath = 'childMarkdownRemark.frontmatter.images.absolutePath',
  childMarkdownRemark___frontmatter___images___relativePath = 'childMarkdownRemark.frontmatter.images.relativePath',
  childMarkdownRemark___frontmatter___images___extension = 'childMarkdownRemark.frontmatter.images.extension',
  childMarkdownRemark___frontmatter___images___size = 'childMarkdownRemark.frontmatter.images.size',
  childMarkdownRemark___frontmatter___images___prettySize = 'childMarkdownRemark.frontmatter.images.prettySize',
  childMarkdownRemark___frontmatter___images___modifiedTime = 'childMarkdownRemark.frontmatter.images.modifiedTime',
  childMarkdownRemark___frontmatter___images___accessTime = 'childMarkdownRemark.frontmatter.images.accessTime',
  childMarkdownRemark___frontmatter___images___changeTime = 'childMarkdownRemark.frontmatter.images.changeTime',
  childMarkdownRemark___frontmatter___images___birthTime = 'childMarkdownRemark.frontmatter.images.birthTime',
  childMarkdownRemark___frontmatter___images___root = 'childMarkdownRemark.frontmatter.images.root',
  childMarkdownRemark___frontmatter___images___dir = 'childMarkdownRemark.frontmatter.images.dir',
  childMarkdownRemark___frontmatter___images___base = 'childMarkdownRemark.frontmatter.images.base',
  childMarkdownRemark___frontmatter___images___ext = 'childMarkdownRemark.frontmatter.images.ext',
  childMarkdownRemark___frontmatter___images___name = 'childMarkdownRemark.frontmatter.images.name',
  childMarkdownRemark___frontmatter___images___relativeDirectory = 'childMarkdownRemark.frontmatter.images.relativeDirectory',
  childMarkdownRemark___frontmatter___images___dev = 'childMarkdownRemark.frontmatter.images.dev',
  childMarkdownRemark___frontmatter___images___mode = 'childMarkdownRemark.frontmatter.images.mode',
  childMarkdownRemark___frontmatter___images___nlink = 'childMarkdownRemark.frontmatter.images.nlink',
  childMarkdownRemark___frontmatter___images___uid = 'childMarkdownRemark.frontmatter.images.uid',
  childMarkdownRemark___frontmatter___images___gid = 'childMarkdownRemark.frontmatter.images.gid',
  childMarkdownRemark___frontmatter___images___rdev = 'childMarkdownRemark.frontmatter.images.rdev',
  childMarkdownRemark___frontmatter___images___ino = 'childMarkdownRemark.frontmatter.images.ino',
  childMarkdownRemark___frontmatter___images___atimeMs = 'childMarkdownRemark.frontmatter.images.atimeMs',
  childMarkdownRemark___frontmatter___images___mtimeMs = 'childMarkdownRemark.frontmatter.images.mtimeMs',
  childMarkdownRemark___frontmatter___images___ctimeMs = 'childMarkdownRemark.frontmatter.images.ctimeMs',
  childMarkdownRemark___frontmatter___images___atime = 'childMarkdownRemark.frontmatter.images.atime',
  childMarkdownRemark___frontmatter___images___mtime = 'childMarkdownRemark.frontmatter.images.mtime',
  childMarkdownRemark___frontmatter___images___ctime = 'childMarkdownRemark.frontmatter.images.ctime',
  childMarkdownRemark___frontmatter___images___birthtime = 'childMarkdownRemark.frontmatter.images.birthtime',
  childMarkdownRemark___frontmatter___images___birthtimeMs = 'childMarkdownRemark.frontmatter.images.birthtimeMs',
  childMarkdownRemark___frontmatter___images___blksize = 'childMarkdownRemark.frontmatter.images.blksize',
  childMarkdownRemark___frontmatter___images___blocks = 'childMarkdownRemark.frontmatter.images.blocks',
  childMarkdownRemark___frontmatter___images___url = 'childMarkdownRemark.frontmatter.images.url',
  childMarkdownRemark___frontmatter___images___publicURL = 'childMarkdownRemark.frontmatter.images.publicURL',
  childMarkdownRemark___frontmatter___images___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.images.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___images___childrenImageSharp = 'childMarkdownRemark.frontmatter.images.childrenImageSharp',
  childMarkdownRemark___frontmatter___images___childrenPagesJson = 'childMarkdownRemark.frontmatter.images.childrenPagesJson',
  childMarkdownRemark___frontmatter___images___id = 'childMarkdownRemark.frontmatter.images.id',
  childMarkdownRemark___frontmatter___images___children = 'childMarkdownRemark.frontmatter.images.children',
  childMarkdownRemark___frontmatter___writing = 'childMarkdownRemark.frontmatter.writing',
  childMarkdownRemark___frontmatter___linktree = 'childMarkdownRemark.frontmatter.linktree',
  childMarkdownRemark___frontmatter___disableSideHeader = 'childMarkdownRemark.frontmatter.disableSideHeader',
  childMarkdownRemark___frontmatter___instagram = 'childMarkdownRemark.frontmatter.instagram',
  childMarkdownRemark___frontmatter___twitter = 'childMarkdownRemark.frontmatter.twitter',
  childMarkdownRemark___frontmatter___align = 'childMarkdownRemark.frontmatter.align',
  childMarkdownRemark___frontmatter___keywords = 'childMarkdownRemark.frontmatter.keywords',
  childMarkdownRemark___frontmatter___minnakikeru = 'childMarkdownRemark.frontmatter.minnakikeru',
  childMarkdownRemark___frontmatter___featuredImage___sourceInstanceName = 'childMarkdownRemark.frontmatter.featuredImage.sourceInstanceName',
  childMarkdownRemark___frontmatter___featuredImage___absolutePath = 'childMarkdownRemark.frontmatter.featuredImage.absolutePath',
  childMarkdownRemark___frontmatter___featuredImage___relativePath = 'childMarkdownRemark.frontmatter.featuredImage.relativePath',
  childMarkdownRemark___frontmatter___featuredImage___extension = 'childMarkdownRemark.frontmatter.featuredImage.extension',
  childMarkdownRemark___frontmatter___featuredImage___size = 'childMarkdownRemark.frontmatter.featuredImage.size',
  childMarkdownRemark___frontmatter___featuredImage___prettySize = 'childMarkdownRemark.frontmatter.featuredImage.prettySize',
  childMarkdownRemark___frontmatter___featuredImage___modifiedTime = 'childMarkdownRemark.frontmatter.featuredImage.modifiedTime',
  childMarkdownRemark___frontmatter___featuredImage___accessTime = 'childMarkdownRemark.frontmatter.featuredImage.accessTime',
  childMarkdownRemark___frontmatter___featuredImage___changeTime = 'childMarkdownRemark.frontmatter.featuredImage.changeTime',
  childMarkdownRemark___frontmatter___featuredImage___birthTime = 'childMarkdownRemark.frontmatter.featuredImage.birthTime',
  childMarkdownRemark___frontmatter___featuredImage___root = 'childMarkdownRemark.frontmatter.featuredImage.root',
  childMarkdownRemark___frontmatter___featuredImage___dir = 'childMarkdownRemark.frontmatter.featuredImage.dir',
  childMarkdownRemark___frontmatter___featuredImage___base = 'childMarkdownRemark.frontmatter.featuredImage.base',
  childMarkdownRemark___frontmatter___featuredImage___ext = 'childMarkdownRemark.frontmatter.featuredImage.ext',
  childMarkdownRemark___frontmatter___featuredImage___name = 'childMarkdownRemark.frontmatter.featuredImage.name',
  childMarkdownRemark___frontmatter___featuredImage___relativeDirectory = 'childMarkdownRemark.frontmatter.featuredImage.relativeDirectory',
  childMarkdownRemark___frontmatter___featuredImage___dev = 'childMarkdownRemark.frontmatter.featuredImage.dev',
  childMarkdownRemark___frontmatter___featuredImage___mode = 'childMarkdownRemark.frontmatter.featuredImage.mode',
  childMarkdownRemark___frontmatter___featuredImage___nlink = 'childMarkdownRemark.frontmatter.featuredImage.nlink',
  childMarkdownRemark___frontmatter___featuredImage___uid = 'childMarkdownRemark.frontmatter.featuredImage.uid',
  childMarkdownRemark___frontmatter___featuredImage___gid = 'childMarkdownRemark.frontmatter.featuredImage.gid',
  childMarkdownRemark___frontmatter___featuredImage___rdev = 'childMarkdownRemark.frontmatter.featuredImage.rdev',
  childMarkdownRemark___frontmatter___featuredImage___ino = 'childMarkdownRemark.frontmatter.featuredImage.ino',
  childMarkdownRemark___frontmatter___featuredImage___atimeMs = 'childMarkdownRemark.frontmatter.featuredImage.atimeMs',
  childMarkdownRemark___frontmatter___featuredImage___mtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.mtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___ctimeMs = 'childMarkdownRemark.frontmatter.featuredImage.ctimeMs',
  childMarkdownRemark___frontmatter___featuredImage___atime = 'childMarkdownRemark.frontmatter.featuredImage.atime',
  childMarkdownRemark___frontmatter___featuredImage___mtime = 'childMarkdownRemark.frontmatter.featuredImage.mtime',
  childMarkdownRemark___frontmatter___featuredImage___ctime = 'childMarkdownRemark.frontmatter.featuredImage.ctime',
  childMarkdownRemark___frontmatter___featuredImage___birthtime = 'childMarkdownRemark.frontmatter.featuredImage.birthtime',
  childMarkdownRemark___frontmatter___featuredImage___birthtimeMs = 'childMarkdownRemark.frontmatter.featuredImage.birthtimeMs',
  childMarkdownRemark___frontmatter___featuredImage___blksize = 'childMarkdownRemark.frontmatter.featuredImage.blksize',
  childMarkdownRemark___frontmatter___featuredImage___blocks = 'childMarkdownRemark.frontmatter.featuredImage.blocks',
  childMarkdownRemark___frontmatter___featuredImage___url = 'childMarkdownRemark.frontmatter.featuredImage.url',
  childMarkdownRemark___frontmatter___featuredImage___publicURL = 'childMarkdownRemark.frontmatter.featuredImage.publicURL',
  childMarkdownRemark___frontmatter___featuredImage___childrenMarkdownRemark = 'childMarkdownRemark.frontmatter.featuredImage.childrenMarkdownRemark',
  childMarkdownRemark___frontmatter___featuredImage___childrenImageSharp = 'childMarkdownRemark.frontmatter.featuredImage.childrenImageSharp',
  childMarkdownRemark___frontmatter___featuredImage___childrenPagesJson = 'childMarkdownRemark.frontmatter.featuredImage.childrenPagesJson',
  childMarkdownRemark___frontmatter___featuredImage___id = 'childMarkdownRemark.frontmatter.featuredImage.id',
  childMarkdownRemark___frontmatter___featuredImage___children = 'childMarkdownRemark.frontmatter.featuredImage.children',
  childMarkdownRemark___frontmatter___bandcamp = 'childMarkdownRemark.frontmatter.bandcamp',
  childMarkdownRemark___frontmatter___hatena = 'childMarkdownRemark.frontmatter.hatena',
  childMarkdownRemark___frontmatter___youtube = 'childMarkdownRemark.frontmatter.youtube',
  childMarkdownRemark___frontmatter___draft = 'childMarkdownRemark.frontmatter.draft',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___fields___draft = 'childMarkdownRemark.fields.draft',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type',
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
  childrenImageSharp___resolutions___base64 = 'childrenImageSharp.resolutions.base64',
  childrenImageSharp___resolutions___tracedSVG = 'childrenImageSharp.resolutions.tracedSVG',
  childrenImageSharp___resolutions___aspectRatio = 'childrenImageSharp.resolutions.aspectRatio',
  childrenImageSharp___resolutions___width = 'childrenImageSharp.resolutions.width',
  childrenImageSharp___resolutions___height = 'childrenImageSharp.resolutions.height',
  childrenImageSharp___resolutions___src = 'childrenImageSharp.resolutions.src',
  childrenImageSharp___resolutions___srcSet = 'childrenImageSharp.resolutions.srcSet',
  childrenImageSharp___resolutions___srcWebp = 'childrenImageSharp.resolutions.srcWebp',
  childrenImageSharp___resolutions___srcSetWebp = 'childrenImageSharp.resolutions.srcSetWebp',
  childrenImageSharp___resolutions___originalName = 'childrenImageSharp.resolutions.originalName',
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
  childrenImageSharp___sizes___base64 = 'childrenImageSharp.sizes.base64',
  childrenImageSharp___sizes___tracedSVG = 'childrenImageSharp.sizes.tracedSVG',
  childrenImageSharp___sizes___aspectRatio = 'childrenImageSharp.sizes.aspectRatio',
  childrenImageSharp___sizes___src = 'childrenImageSharp.sizes.src',
  childrenImageSharp___sizes___srcSet = 'childrenImageSharp.sizes.srcSet',
  childrenImageSharp___sizes___srcWebp = 'childrenImageSharp.sizes.srcWebp',
  childrenImageSharp___sizes___srcSetWebp = 'childrenImageSharp.sizes.srcSetWebp',
  childrenImageSharp___sizes___sizes = 'childrenImageSharp.sizes.sizes',
  childrenImageSharp___sizes___originalImg = 'childrenImageSharp.sizes.originalImg',
  childrenImageSharp___sizes___originalName = 'childrenImageSharp.sizes.originalName',
  childrenImageSharp___sizes___presentationWidth = 'childrenImageSharp.sizes.presentationWidth',
  childrenImageSharp___sizes___presentationHeight = 'childrenImageSharp.sizes.presentationHeight',
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
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
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
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
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
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenPagesJson: Maybe<PagesJsonFilterListInput>;
  readonly childPagesJson: Maybe<PagesJsonFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileFilterListInput = {
  readonly elemMatch: Maybe<FileFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

enum GatsbyImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
  AVIF = 'avif'
}

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

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
  AVIF = 'avif'
}

enum ImageLayout {
  FIXED = 'fixed',
  FULL_WIDTH = 'fullWidth',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

enum ImageResizingBehavior {
  NO_CHANGE = '',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'pad',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'crop',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'fill',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'thumb',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'scale'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
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


type ImageSharp_resolutionsArgs = {
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


type ImageSharp_sizesArgs = {
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
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
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
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
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
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
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

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
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

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
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

type ImageSharpResolutionsFilterInput = {
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

type ImageSharpSizes = {
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

type ImageSharpSizesFilterInput = {
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

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFields = {
  readonly draft: Maybe<Scalars['Boolean']>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  frontmatter___author = 'frontmatter.author',
  frontmatter___profile = 'frontmatter.profile',
  frontmatter___createdAt = 'frontmatter.createdAt',
  frontmatter___updatedAt = 'frontmatter.updatedAt',
  frontmatter___publishedAt = 'frontmatter.publishedAt',
  frontmatter___vol = 'frontmatter.vol',
  frontmatter___images = 'frontmatter.images',
  frontmatter___images___sourceInstanceName = 'frontmatter.images.sourceInstanceName',
  frontmatter___images___absolutePath = 'frontmatter.images.absolutePath',
  frontmatter___images___relativePath = 'frontmatter.images.relativePath',
  frontmatter___images___extension = 'frontmatter.images.extension',
  frontmatter___images___size = 'frontmatter.images.size',
  frontmatter___images___prettySize = 'frontmatter.images.prettySize',
  frontmatter___images___modifiedTime = 'frontmatter.images.modifiedTime',
  frontmatter___images___accessTime = 'frontmatter.images.accessTime',
  frontmatter___images___changeTime = 'frontmatter.images.changeTime',
  frontmatter___images___birthTime = 'frontmatter.images.birthTime',
  frontmatter___images___root = 'frontmatter.images.root',
  frontmatter___images___dir = 'frontmatter.images.dir',
  frontmatter___images___base = 'frontmatter.images.base',
  frontmatter___images___ext = 'frontmatter.images.ext',
  frontmatter___images___name = 'frontmatter.images.name',
  frontmatter___images___relativeDirectory = 'frontmatter.images.relativeDirectory',
  frontmatter___images___dev = 'frontmatter.images.dev',
  frontmatter___images___mode = 'frontmatter.images.mode',
  frontmatter___images___nlink = 'frontmatter.images.nlink',
  frontmatter___images___uid = 'frontmatter.images.uid',
  frontmatter___images___gid = 'frontmatter.images.gid',
  frontmatter___images___rdev = 'frontmatter.images.rdev',
  frontmatter___images___ino = 'frontmatter.images.ino',
  frontmatter___images___atimeMs = 'frontmatter.images.atimeMs',
  frontmatter___images___mtimeMs = 'frontmatter.images.mtimeMs',
  frontmatter___images___ctimeMs = 'frontmatter.images.ctimeMs',
  frontmatter___images___atime = 'frontmatter.images.atime',
  frontmatter___images___mtime = 'frontmatter.images.mtime',
  frontmatter___images___ctime = 'frontmatter.images.ctime',
  frontmatter___images___birthtime = 'frontmatter.images.birthtime',
  frontmatter___images___birthtimeMs = 'frontmatter.images.birthtimeMs',
  frontmatter___images___blksize = 'frontmatter.images.blksize',
  frontmatter___images___blocks = 'frontmatter.images.blocks',
  frontmatter___images___url = 'frontmatter.images.url',
  frontmatter___images___publicURL = 'frontmatter.images.publicURL',
  frontmatter___images___childrenMarkdownRemark = 'frontmatter.images.childrenMarkdownRemark',
  frontmatter___images___childrenMarkdownRemark___id = 'frontmatter.images.childrenMarkdownRemark.id',
  frontmatter___images___childrenMarkdownRemark___excerpt = 'frontmatter.images.childrenMarkdownRemark.excerpt',
  frontmatter___images___childrenMarkdownRemark___rawMarkdownBody = 'frontmatter.images.childrenMarkdownRemark.rawMarkdownBody',
  frontmatter___images___childrenMarkdownRemark___fileAbsolutePath = 'frontmatter.images.childrenMarkdownRemark.fileAbsolutePath',
  frontmatter___images___childrenMarkdownRemark___html = 'frontmatter.images.childrenMarkdownRemark.html',
  frontmatter___images___childrenMarkdownRemark___htmlAst = 'frontmatter.images.childrenMarkdownRemark.htmlAst',
  frontmatter___images___childrenMarkdownRemark___excerptAst = 'frontmatter.images.childrenMarkdownRemark.excerptAst',
  frontmatter___images___childrenMarkdownRemark___headings = 'frontmatter.images.childrenMarkdownRemark.headings',
  frontmatter___images___childrenMarkdownRemark___timeToRead = 'frontmatter.images.childrenMarkdownRemark.timeToRead',
  frontmatter___images___childrenMarkdownRemark___tableOfContents = 'frontmatter.images.childrenMarkdownRemark.tableOfContents',
  frontmatter___images___childrenMarkdownRemark___children = 'frontmatter.images.childrenMarkdownRemark.children',
  frontmatter___images___childMarkdownRemark___id = 'frontmatter.images.childMarkdownRemark.id',
  frontmatter___images___childMarkdownRemark___excerpt = 'frontmatter.images.childMarkdownRemark.excerpt',
  frontmatter___images___childMarkdownRemark___rawMarkdownBody = 'frontmatter.images.childMarkdownRemark.rawMarkdownBody',
  frontmatter___images___childMarkdownRemark___fileAbsolutePath = 'frontmatter.images.childMarkdownRemark.fileAbsolutePath',
  frontmatter___images___childMarkdownRemark___html = 'frontmatter.images.childMarkdownRemark.html',
  frontmatter___images___childMarkdownRemark___htmlAst = 'frontmatter.images.childMarkdownRemark.htmlAst',
  frontmatter___images___childMarkdownRemark___excerptAst = 'frontmatter.images.childMarkdownRemark.excerptAst',
  frontmatter___images___childMarkdownRemark___headings = 'frontmatter.images.childMarkdownRemark.headings',
  frontmatter___images___childMarkdownRemark___timeToRead = 'frontmatter.images.childMarkdownRemark.timeToRead',
  frontmatter___images___childMarkdownRemark___tableOfContents = 'frontmatter.images.childMarkdownRemark.tableOfContents',
  frontmatter___images___childMarkdownRemark___children = 'frontmatter.images.childMarkdownRemark.children',
  frontmatter___images___childrenImageSharp = 'frontmatter.images.childrenImageSharp',
  frontmatter___images___childrenImageSharp___gatsbyImageData = 'frontmatter.images.childrenImageSharp.gatsbyImageData',
  frontmatter___images___childrenImageSharp___id = 'frontmatter.images.childrenImageSharp.id',
  frontmatter___images___childrenImageSharp___children = 'frontmatter.images.childrenImageSharp.children',
  frontmatter___images___childImageSharp___gatsbyImageData = 'frontmatter.images.childImageSharp.gatsbyImageData',
  frontmatter___images___childImageSharp___id = 'frontmatter.images.childImageSharp.id',
  frontmatter___images___childImageSharp___children = 'frontmatter.images.childImageSharp.children',
  frontmatter___images___childrenPagesJson = 'frontmatter.images.childrenPagesJson',
  frontmatter___images___childrenPagesJson___id = 'frontmatter.images.childrenPagesJson.id',
  frontmatter___images___childrenPagesJson___children = 'frontmatter.images.childrenPagesJson.children',
  frontmatter___images___childrenPagesJson___path = 'frontmatter.images.childrenPagesJson.path',
  frontmatter___images___childrenPagesJson___catchphrase = 'frontmatter.images.childrenPagesJson.catchphrase',
  frontmatter___images___childrenPagesJson___introduction = 'frontmatter.images.childrenPagesJson.introduction',
  frontmatter___images___childrenPagesJson___image = 'frontmatter.images.childrenPagesJson.image',
  frontmatter___images___childrenPagesJson___displayTitle = 'frontmatter.images.childrenPagesJson.displayTitle',
  frontmatter___images___childrenPagesJson___title = 'frontmatter.images.childrenPagesJson.title',
  frontmatter___images___childPagesJson___id = 'frontmatter.images.childPagesJson.id',
  frontmatter___images___childPagesJson___children = 'frontmatter.images.childPagesJson.children',
  frontmatter___images___childPagesJson___path = 'frontmatter.images.childPagesJson.path',
  frontmatter___images___childPagesJson___catchphrase = 'frontmatter.images.childPagesJson.catchphrase',
  frontmatter___images___childPagesJson___introduction = 'frontmatter.images.childPagesJson.introduction',
  frontmatter___images___childPagesJson___image = 'frontmatter.images.childPagesJson.image',
  frontmatter___images___childPagesJson___displayTitle = 'frontmatter.images.childPagesJson.displayTitle',
  frontmatter___images___childPagesJson___title = 'frontmatter.images.childPagesJson.title',
  frontmatter___images___id = 'frontmatter.images.id',
  frontmatter___images___parent___id = 'frontmatter.images.parent.id',
  frontmatter___images___parent___children = 'frontmatter.images.parent.children',
  frontmatter___images___children = 'frontmatter.images.children',
  frontmatter___images___children___id = 'frontmatter.images.children.id',
  frontmatter___images___children___children = 'frontmatter.images.children.children',
  frontmatter___images___internal___content = 'frontmatter.images.internal.content',
  frontmatter___images___internal___contentDigest = 'frontmatter.images.internal.contentDigest',
  frontmatter___images___internal___description = 'frontmatter.images.internal.description',
  frontmatter___images___internal___fieldOwners = 'frontmatter.images.internal.fieldOwners',
  frontmatter___images___internal___ignoreType = 'frontmatter.images.internal.ignoreType',
  frontmatter___images___internal___mediaType = 'frontmatter.images.internal.mediaType',
  frontmatter___images___internal___owner = 'frontmatter.images.internal.owner',
  frontmatter___images___internal___type = 'frontmatter.images.internal.type',
  frontmatter___writing = 'frontmatter.writing',
  frontmatter___linktree = 'frontmatter.linktree',
  frontmatter___disableSideHeader = 'frontmatter.disableSideHeader',
  frontmatter___instagram = 'frontmatter.instagram',
  frontmatter___twitter = 'frontmatter.twitter',
  frontmatter___align = 'frontmatter.align',
  frontmatter___keywords = 'frontmatter.keywords',
  frontmatter___minnakikeru = 'frontmatter.minnakikeru',
  frontmatter___featuredImage___sourceInstanceName = 'frontmatter.featuredImage.sourceInstanceName',
  frontmatter___featuredImage___absolutePath = 'frontmatter.featuredImage.absolutePath',
  frontmatter___featuredImage___relativePath = 'frontmatter.featuredImage.relativePath',
  frontmatter___featuredImage___extension = 'frontmatter.featuredImage.extension',
  frontmatter___featuredImage___size = 'frontmatter.featuredImage.size',
  frontmatter___featuredImage___prettySize = 'frontmatter.featuredImage.prettySize',
  frontmatter___featuredImage___modifiedTime = 'frontmatter.featuredImage.modifiedTime',
  frontmatter___featuredImage___accessTime = 'frontmatter.featuredImage.accessTime',
  frontmatter___featuredImage___changeTime = 'frontmatter.featuredImage.changeTime',
  frontmatter___featuredImage___birthTime = 'frontmatter.featuredImage.birthTime',
  frontmatter___featuredImage___root = 'frontmatter.featuredImage.root',
  frontmatter___featuredImage___dir = 'frontmatter.featuredImage.dir',
  frontmatter___featuredImage___base = 'frontmatter.featuredImage.base',
  frontmatter___featuredImage___ext = 'frontmatter.featuredImage.ext',
  frontmatter___featuredImage___name = 'frontmatter.featuredImage.name',
  frontmatter___featuredImage___relativeDirectory = 'frontmatter.featuredImage.relativeDirectory',
  frontmatter___featuredImage___dev = 'frontmatter.featuredImage.dev',
  frontmatter___featuredImage___mode = 'frontmatter.featuredImage.mode',
  frontmatter___featuredImage___nlink = 'frontmatter.featuredImage.nlink',
  frontmatter___featuredImage___uid = 'frontmatter.featuredImage.uid',
  frontmatter___featuredImage___gid = 'frontmatter.featuredImage.gid',
  frontmatter___featuredImage___rdev = 'frontmatter.featuredImage.rdev',
  frontmatter___featuredImage___ino = 'frontmatter.featuredImage.ino',
  frontmatter___featuredImage___atimeMs = 'frontmatter.featuredImage.atimeMs',
  frontmatter___featuredImage___mtimeMs = 'frontmatter.featuredImage.mtimeMs',
  frontmatter___featuredImage___ctimeMs = 'frontmatter.featuredImage.ctimeMs',
  frontmatter___featuredImage___atime = 'frontmatter.featuredImage.atime',
  frontmatter___featuredImage___mtime = 'frontmatter.featuredImage.mtime',
  frontmatter___featuredImage___ctime = 'frontmatter.featuredImage.ctime',
  frontmatter___featuredImage___birthtime = 'frontmatter.featuredImage.birthtime',
  frontmatter___featuredImage___birthtimeMs = 'frontmatter.featuredImage.birthtimeMs',
  frontmatter___featuredImage___blksize = 'frontmatter.featuredImage.blksize',
  frontmatter___featuredImage___blocks = 'frontmatter.featuredImage.blocks',
  frontmatter___featuredImage___url = 'frontmatter.featuredImage.url',
  frontmatter___featuredImage___publicURL = 'frontmatter.featuredImage.publicURL',
  frontmatter___featuredImage___childrenMarkdownRemark = 'frontmatter.featuredImage.childrenMarkdownRemark',
  frontmatter___featuredImage___childrenMarkdownRemark___id = 'frontmatter.featuredImage.childrenMarkdownRemark.id',
  frontmatter___featuredImage___childrenMarkdownRemark___excerpt = 'frontmatter.featuredImage.childrenMarkdownRemark.excerpt',
  frontmatter___featuredImage___childrenMarkdownRemark___rawMarkdownBody = 'frontmatter.featuredImage.childrenMarkdownRemark.rawMarkdownBody',
  frontmatter___featuredImage___childrenMarkdownRemark___fileAbsolutePath = 'frontmatter.featuredImage.childrenMarkdownRemark.fileAbsolutePath',
  frontmatter___featuredImage___childrenMarkdownRemark___html = 'frontmatter.featuredImage.childrenMarkdownRemark.html',
  frontmatter___featuredImage___childrenMarkdownRemark___htmlAst = 'frontmatter.featuredImage.childrenMarkdownRemark.htmlAst',
  frontmatter___featuredImage___childrenMarkdownRemark___excerptAst = 'frontmatter.featuredImage.childrenMarkdownRemark.excerptAst',
  frontmatter___featuredImage___childrenMarkdownRemark___headings = 'frontmatter.featuredImage.childrenMarkdownRemark.headings',
  frontmatter___featuredImage___childrenMarkdownRemark___timeToRead = 'frontmatter.featuredImage.childrenMarkdownRemark.timeToRead',
  frontmatter___featuredImage___childrenMarkdownRemark___tableOfContents = 'frontmatter.featuredImage.childrenMarkdownRemark.tableOfContents',
  frontmatter___featuredImage___childrenMarkdownRemark___children = 'frontmatter.featuredImage.childrenMarkdownRemark.children',
  frontmatter___featuredImage___childMarkdownRemark___id = 'frontmatter.featuredImage.childMarkdownRemark.id',
  frontmatter___featuredImage___childMarkdownRemark___excerpt = 'frontmatter.featuredImage.childMarkdownRemark.excerpt',
  frontmatter___featuredImage___childMarkdownRemark___rawMarkdownBody = 'frontmatter.featuredImage.childMarkdownRemark.rawMarkdownBody',
  frontmatter___featuredImage___childMarkdownRemark___fileAbsolutePath = 'frontmatter.featuredImage.childMarkdownRemark.fileAbsolutePath',
  frontmatter___featuredImage___childMarkdownRemark___html = 'frontmatter.featuredImage.childMarkdownRemark.html',
  frontmatter___featuredImage___childMarkdownRemark___htmlAst = 'frontmatter.featuredImage.childMarkdownRemark.htmlAst',
  frontmatter___featuredImage___childMarkdownRemark___excerptAst = 'frontmatter.featuredImage.childMarkdownRemark.excerptAst',
  frontmatter___featuredImage___childMarkdownRemark___headings = 'frontmatter.featuredImage.childMarkdownRemark.headings',
  frontmatter___featuredImage___childMarkdownRemark___timeToRead = 'frontmatter.featuredImage.childMarkdownRemark.timeToRead',
  frontmatter___featuredImage___childMarkdownRemark___tableOfContents = 'frontmatter.featuredImage.childMarkdownRemark.tableOfContents',
  frontmatter___featuredImage___childMarkdownRemark___children = 'frontmatter.featuredImage.childMarkdownRemark.children',
  frontmatter___featuredImage___childrenImageSharp = 'frontmatter.featuredImage.childrenImageSharp',
  frontmatter___featuredImage___childrenImageSharp___gatsbyImageData = 'frontmatter.featuredImage.childrenImageSharp.gatsbyImageData',
  frontmatter___featuredImage___childrenImageSharp___id = 'frontmatter.featuredImage.childrenImageSharp.id',
  frontmatter___featuredImage___childrenImageSharp___children = 'frontmatter.featuredImage.childrenImageSharp.children',
  frontmatter___featuredImage___childImageSharp___gatsbyImageData = 'frontmatter.featuredImage.childImageSharp.gatsbyImageData',
  frontmatter___featuredImage___childImageSharp___id = 'frontmatter.featuredImage.childImageSharp.id',
  frontmatter___featuredImage___childImageSharp___children = 'frontmatter.featuredImage.childImageSharp.children',
  frontmatter___featuredImage___childrenPagesJson = 'frontmatter.featuredImage.childrenPagesJson',
  frontmatter___featuredImage___childrenPagesJson___id = 'frontmatter.featuredImage.childrenPagesJson.id',
  frontmatter___featuredImage___childrenPagesJson___children = 'frontmatter.featuredImage.childrenPagesJson.children',
  frontmatter___featuredImage___childrenPagesJson___path = 'frontmatter.featuredImage.childrenPagesJson.path',
  frontmatter___featuredImage___childrenPagesJson___catchphrase = 'frontmatter.featuredImage.childrenPagesJson.catchphrase',
  frontmatter___featuredImage___childrenPagesJson___introduction = 'frontmatter.featuredImage.childrenPagesJson.introduction',
  frontmatter___featuredImage___childrenPagesJson___image = 'frontmatter.featuredImage.childrenPagesJson.image',
  frontmatter___featuredImage___childrenPagesJson___displayTitle = 'frontmatter.featuredImage.childrenPagesJson.displayTitle',
  frontmatter___featuredImage___childrenPagesJson___title = 'frontmatter.featuredImage.childrenPagesJson.title',
  frontmatter___featuredImage___childPagesJson___id = 'frontmatter.featuredImage.childPagesJson.id',
  frontmatter___featuredImage___childPagesJson___children = 'frontmatter.featuredImage.childPagesJson.children',
  frontmatter___featuredImage___childPagesJson___path = 'frontmatter.featuredImage.childPagesJson.path',
  frontmatter___featuredImage___childPagesJson___catchphrase = 'frontmatter.featuredImage.childPagesJson.catchphrase',
  frontmatter___featuredImage___childPagesJson___introduction = 'frontmatter.featuredImage.childPagesJson.introduction',
  frontmatter___featuredImage___childPagesJson___image = 'frontmatter.featuredImage.childPagesJson.image',
  frontmatter___featuredImage___childPagesJson___displayTitle = 'frontmatter.featuredImage.childPagesJson.displayTitle',
  frontmatter___featuredImage___childPagesJson___title = 'frontmatter.featuredImage.childPagesJson.title',
  frontmatter___featuredImage___id = 'frontmatter.featuredImage.id',
  frontmatter___featuredImage___parent___id = 'frontmatter.featuredImage.parent.id',
  frontmatter___featuredImage___parent___children = 'frontmatter.featuredImage.parent.children',
  frontmatter___featuredImage___children = 'frontmatter.featuredImage.children',
  frontmatter___featuredImage___children___id = 'frontmatter.featuredImage.children.id',
  frontmatter___featuredImage___children___children = 'frontmatter.featuredImage.children.children',
  frontmatter___featuredImage___internal___content = 'frontmatter.featuredImage.internal.content',
  frontmatter___featuredImage___internal___contentDigest = 'frontmatter.featuredImage.internal.contentDigest',
  frontmatter___featuredImage___internal___description = 'frontmatter.featuredImage.internal.description',
  frontmatter___featuredImage___internal___fieldOwners = 'frontmatter.featuredImage.internal.fieldOwners',
  frontmatter___featuredImage___internal___ignoreType = 'frontmatter.featuredImage.internal.ignoreType',
  frontmatter___featuredImage___internal___mediaType = 'frontmatter.featuredImage.internal.mediaType',
  frontmatter___featuredImage___internal___owner = 'frontmatter.featuredImage.internal.owner',
  frontmatter___featuredImage___internal___type = 'frontmatter.featuredImage.internal.type',
  frontmatter___bandcamp = 'frontmatter.bandcamp',
  frontmatter___hatena = 'frontmatter.hatena',
  frontmatter___youtube = 'frontmatter.youtube',
  frontmatter___draft = 'frontmatter.draft',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___draft = 'fields.draft',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings.id',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
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

type MarkdownRemarkFieldsFilterInput = {
  readonly draft: Maybe<BooleanQueryOperatorInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly profile: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly vol: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<File>>>;
  readonly writing: Maybe<Scalars['String']>;
  readonly linktree: Maybe<Scalars['String']>;
  readonly disableSideHeader: Maybe<Scalars['Boolean']>;
  readonly instagram: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly align: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly minnakikeru: Maybe<Scalars['String']>;
  readonly featuredImage: Maybe<File>;
  readonly bandcamp: Maybe<Scalars['String']>;
  readonly hatena: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
  readonly draft: Maybe<Scalars['Boolean']>;
};


type MarkdownRemarkFrontmatter_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly profile: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly vol: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<FileFilterListInput>;
  readonly writing: Maybe<StringQueryOperatorInput>;
  readonly linktree: Maybe<StringQueryOperatorInput>;
  readonly disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  readonly instagram: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly align: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly minnakikeru: Maybe<StringQueryOperatorInput>;
  readonly featuredImage: Maybe<FileFilterInput>;
  readonly bandcamp: Maybe<StringQueryOperatorInput>;
  readonly hatena: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
  readonly draft: Maybe<BooleanQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
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

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
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

type PagesJsonFilterListInput = {
  readonly elemMatch: Maybe<PagesJsonFilterInput>;
};

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

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

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

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulContributions: Maybe<ContentfulContributions>;
  readonly allContentfulContributions: ContentfulContributionsConnection;
  readonly contentfulImageWithAiTags: Maybe<ContentfulImageWithAiTags>;
  readonly allContentfulImageWithAiTags: ContentfulImageWithAiTagsConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulMarkdownArticle: Maybe<ContentfulMarkdownArticle>;
  readonly allContentfulMarkdownArticle: ContentfulMarkdownArticleConnection;
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
  readonly staticImage: Maybe<StaticImage>;
  readonly allStaticImage: StaticImageConnection;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
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
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
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
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
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
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
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


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
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
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
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


type Query_contentfulContributionsArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  body: Maybe<ContentfulContributionsBodyFilterInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  disableSideHeader: Maybe<BooleanQueryOperatorInput>;
  isVirticalWriting: Maybe<BooleanQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulContributionsSysFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulContributionsArgs = {
  filter: Maybe<ContentfulContributionsFilterInput>;
  sort: Maybe<ContentfulContributionsSortInput>;
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
  twitter: Maybe<StringQueryOperatorInput>;
  instagram: Maybe<StringQueryOperatorInput>;
  youtube: Maybe<StringQueryOperatorInput>;
  introduction: Maybe<contentfulAuthorIntroductionTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  linktree: Maybe<StringQueryOperatorInput>;
  minnakikeru: Maybe<StringQueryOperatorInput>;
  markdownarticle: Maybe<ContentfulMarkdownArticleFilterListInput>;
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
  author: Maybe<ContentfulAuthorFilterInput>;
  content: Maybe<contentfulMarkdownArticleContentTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulMarkdownArticleSysFilterInput>;
  align: Maybe<BooleanQueryOperatorInput>;
  featuredImage: Maybe<ContentfulAssetFilterInput>;
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


type Query_contentfulMarkdownArticleContentTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  content: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulMarkdownArticleContentTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
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
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
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

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
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

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  port = 'port',
  host = 'host',
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

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
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

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly previousPostId: Maybe<Scalars['String']>;
  readonly nextPostId: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly previousPostId: Maybe<StringQueryOperatorInput>;
  readonly nextPostId: Maybe<StringQueryOperatorInput>;
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
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___id = 'context.id',
  context___previousPostId = 'context.previousPostId',
  context___nextPostId = 'context.nextPostId',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
  pluginCreator___pluginOptions___displayName = 'pluginCreator.pluginOptions.displayName',
  pluginCreator___pluginOptions___fileName = 'pluginCreator.pluginOptions.fileName',
  pluginCreator___pluginOptions___minify = 'pluginCreator.pluginOptions.minify',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator.pluginOptions.transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator.pluginOptions.pure',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___includeInDevelopment = 'pluginCreator.pluginOptions.includeInDevelopment',
  pluginCreator___pluginOptions___delayTimeout = 'pluginCreator.pluginOptions.delayTimeout',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator.pluginOptions.spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator.pluginOptions.accessToken',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator.pluginOptions.downloadLocal',
  pluginCreator___pluginOptions___host = 'pluginCreator.pluginOptions.host',
  pluginCreator___pluginOptions___environment = 'pluginCreator.pluginOptions.environment',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator.pluginOptions.forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator.pluginOptions.pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator.pluginOptions.assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator.pluginOptions.useNameForId',
  pluginCreator___pluginOptions___preload = 'pluginCreator.pluginOptions.preload',
  pluginCreator___pluginOptions___loop = 'pluginCreator.pluginOptions.loop',
  pluginCreator___pluginOptions___controls = 'pluginCreator.pluginOptions.controls',
  pluginCreator___pluginOptions___muted = 'pluginCreator.pluginOptions.muted',
  pluginCreator___pluginOptions___autoplay = 'pluginCreator.pluginOptions.autoplay',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator.pluginOptions.linkImagesToOriginal',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator.pluginOptions.backgroundColor',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator.pluginOptions.withWebp',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator.pluginOptions.showCaptions',
  pluginCreator___pluginOptions___wrapperStyle = 'pluginCreator.pluginOptions.wrapperStyle',
  pluginCreator___pluginOptions___background = 'pluginCreator.pluginOptions.background',
  pluginCreator___pluginOptions___timezone = 'pluginCreator.pluginOptions.timezone',
  pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator.pluginOptions.crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___titleTemplate = 'pluginCreator.pluginOptions.titleTemplate',
  pluginCreator___pluginOptions___language = 'pluginCreator.pluginOptions.language',
  pluginCreator___pluginOptions___description = 'pluginCreator.pluginOptions.description',
  pluginCreator___pluginOptions___openGraph___title = 'pluginCreator.pluginOptions.openGraph.title',
  pluginCreator___pluginOptions___openGraph___description = 'pluginCreator.pluginOptions.openGraph.description',
  pluginCreator___pluginOptions___openGraph___type = 'pluginCreator.pluginOptions.openGraph.type',
  pluginCreator___pluginOptions___openGraph___locale = 'pluginCreator.pluginOptions.openGraph.locale',
  pluginCreator___pluginOptions___openGraph___url = 'pluginCreator.pluginOptions.openGraph.url',
  pluginCreator___pluginOptions___openGraph___site_name = 'pluginCreator.pluginOptions.openGraph.site_name',
  pluginCreator___pluginOptions___openGraph___images = 'pluginCreator.pluginOptions.openGraph.images',
  pluginCreator___pluginOptions___twitter___handle = 'pluginCreator.pluginOptions.twitter.handle',
  pluginCreator___pluginOptions___twitter___site = 'pluginCreator.pluginOptions.twitter.site',
  pluginCreator___pluginOptions___twitter___cardType = 'pluginCreator.pluginOptions.twitter.cardType',
  pluginCreator___pluginOptions___facebook___appId = 'pluginCreator.pluginOptions.facebook.appId',
  pluginCreator___pluginOptions___color = 'pluginCreator.pluginOptions.color',
  pluginCreator___pluginOptions___precachePages = 'pluginCreator.pluginOptions.precachePages',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
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

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  pluginOptions___plugins___pluginOptions___preload = 'pluginOptions.plugins.pluginOptions.preload',
  pluginOptions___plugins___pluginOptions___loop = 'pluginOptions.plugins.pluginOptions.loop',
  pluginOptions___plugins___pluginOptions___controls = 'pluginOptions.plugins.pluginOptions.controls',
  pluginOptions___plugins___pluginOptions___muted = 'pluginOptions.plugins.pluginOptions.muted',
  pluginOptions___plugins___pluginOptions___autoplay = 'pluginOptions.plugins.pluginOptions.autoplay',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal',
  pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions.plugins.pluginOptions.backgroundColor',
  pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions.plugins.pluginOptions.withWebp',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions.plugins.pluginOptions.showCaptions',
  pluginOptions___plugins___pluginOptions___wrapperStyle = 'pluginOptions.plugins.pluginOptions.wrapperStyle',
  pluginOptions___plugins___pluginOptions___background = 'pluginOptions.plugins.pluginOptions.background',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___displayName = 'pluginOptions.displayName',
  pluginOptions___fileName = 'pluginOptions.fileName',
  pluginOptions___minify = 'pluginOptions.minify',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions.transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions.pure',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___includeInDevelopment = 'pluginOptions.includeInDevelopment',
  pluginOptions___delayTimeout = 'pluginOptions.delayTimeout',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___spaceId = 'pluginOptions.spaceId',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___downloadLocal = 'pluginOptions.downloadLocal',
  pluginOptions___host = 'pluginOptions.host',
  pluginOptions___environment = 'pluginOptions.environment',
  pluginOptions___forceFullSync = 'pluginOptions.forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions.pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions.assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions.useNameForId',
  pluginOptions___preload = 'pluginOptions.preload',
  pluginOptions___loop = 'pluginOptions.loop',
  pluginOptions___controls = 'pluginOptions.controls',
  pluginOptions___muted = 'pluginOptions.muted',
  pluginOptions___autoplay = 'pluginOptions.autoplay',
  pluginOptions___maxWidth = 'pluginOptions.maxWidth',
  pluginOptions___linkImagesToOriginal = 'pluginOptions.linkImagesToOriginal',
  pluginOptions___backgroundColor = 'pluginOptions.backgroundColor',
  pluginOptions___withWebp = 'pluginOptions.withWebp',
  pluginOptions___showCaptions = 'pluginOptions.showCaptions',
  pluginOptions___wrapperStyle = 'pluginOptions.wrapperStyle',
  pluginOptions___background = 'pluginOptions.background',
  pluginOptions___timezone = 'pluginOptions.timezone',
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

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
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

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly displayName: Maybe<Scalars['Boolean']>;
  readonly fileName: Maybe<Scalars['Boolean']>;
  readonly minify: Maybe<Scalars['Boolean']>;
  readonly transpileTemplateLiterals: Maybe<Scalars['Boolean']>;
  readonly pure: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly includeInDevelopment: Maybe<Scalars['Boolean']>;
  readonly delayTimeout: Maybe<Scalars['Int']>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly preload: Maybe<Scalars['String']>;
  readonly loop: Maybe<Scalars['Boolean']>;
  readonly controls: Maybe<Scalars['Boolean']>;
  readonly muted: Maybe<Scalars['Boolean']>;
  readonly autoplay: Maybe<Scalars['Boolean']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly timezone: Maybe<Scalars['String']>;
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

type SitePluginPluginOptionsFacebook = {
  readonly appId: Maybe<Scalars['Float']>;
};

type SitePluginPluginOptionsFacebookFilterInput = {
  readonly appId: Maybe<FloatQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly displayName: Maybe<BooleanQueryOperatorInput>;
  readonly fileName: Maybe<BooleanQueryOperatorInput>;
  readonly minify: Maybe<BooleanQueryOperatorInput>;
  readonly transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
  readonly pure: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly includeInDevelopment: Maybe<BooleanQueryOperatorInput>;
  readonly delayTimeout: Maybe<IntQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly preload: Maybe<StringQueryOperatorInput>;
  readonly loop: Maybe<BooleanQueryOperatorInput>;
  readonly controls: Maybe<BooleanQueryOperatorInput>;
  readonly muted: Maybe<BooleanQueryOperatorInput>;
  readonly autoplay: Maybe<BooleanQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly timezone: Maybe<StringQueryOperatorInput>;
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

type SitePluginPluginOptionsOpenGraph = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly site_name: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsOpenGraphImages>>>;
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

type SitePluginPluginOptionsOpenGraphImages = {
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly alt: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsOpenGraphImagesFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly alt: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsOpenGraphImagesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsOpenGraphImagesFilterInput>;
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

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly preload: Maybe<Scalars['String']>;
  readonly loop: Maybe<Scalars['Boolean']>;
  readonly controls: Maybe<Scalars['Boolean']>;
  readonly muted: Maybe<Scalars['Boolean']>;
  readonly autoplay: Maybe<Scalars['Boolean']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly preload: Maybe<StringQueryOperatorInput>;
  readonly loop: Maybe<BooleanQueryOperatorInput>;
  readonly controls: Maybe<BooleanQueryOperatorInput>;
  readonly muted: Maybe<BooleanQueryOperatorInput>;
  readonly autoplay: Maybe<BooleanQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsTwitter = {
  readonly handle: Maybe<Scalars['String']>;
  readonly site: Maybe<Scalars['String']>;
  readonly cardType: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsTwitterFilterInput = {
  readonly handle: Maybe<StringQueryOperatorInput>;
  readonly site: Maybe<StringQueryOperatorInput>;
  readonly cardType: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly summary: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
  readonly social: Maybe<SiteSiteMetadataSocialFilterInput>;
};

type SiteSiteMetadataSocial = {
  readonly twitter: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

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

type StaticImageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StaticImageGroupConnection>;
};


type StaticImageConnection_distinctArgs = {
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

enum StaticImageFieldsEnum {
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
  sourceInstanceName = 'sourceInstanceName',
  relativePath = 'relativePath',
  extension = 'extension',
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
  absolutePath = 'absolutePath',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  size = 'size',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime'
}

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

type StaticImageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StaticImageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StaticImageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type VerticalArticleBySlugQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: Maybe<Scalars['String']>;
  nextPostId: Maybe<Scalars['String']>;
}>;


type VerticalArticleBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly contentfulMarkdownArticle: Maybe<(
    Pick<ContentfulMarkdownArticle, 'slug' | 'title' | 'disableSideHeader' | 'isVirticalWriting' | 'align' | 'updatedAt' | 'publishedAt'>
    & { readonly content: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>> }>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>>>, readonly featuredImage: Maybe<(
      Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>, readonly author: Maybe<(
      Pick<ContentfulAuthor, 'name' | 'bandcamp' | 'instagram' | 'minnakikeru' | 'hatena' | 'linktree' | 'twitter' | 'youtube'>
      & { readonly introduction: Maybe<Pick<contentfulAuthorIntroductionTextNode, 'introduction'>> }
    )> }
  )>, readonly previous: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>> };

type HorizontalArticleBySlugQueryVariables = Exact<{
  id: Scalars['String'];
  previousPostId: Maybe<Scalars['String']>;
  nextPostId: Maybe<Scalars['String']>;
}>;


type HorizontalArticleBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }>, readonly post: Maybe<(
    Pick<ContentfulMarkdownArticle, 'slug' | 'title' | 'disableSideHeader' | 'isVirticalWriting' | 'align' | 'updatedAt' | 'publishedAt'>
    & { readonly content: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>> }>, readonly images: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>>>, readonly featuredImage: Maybe<(
      Pick<ContentfulAsset, 'title' | 'gatsbyImageData'>
      & { readonly localFile: Maybe<Pick<File, 'publicURL'>> }
    )>, readonly author: Maybe<(
      Pick<ContentfulAuthor, 'name' | 'bandcamp' | 'instagram' | 'minnakikeru' | 'hatena' | 'linktree' | 'twitter' | 'youtube'>
      & { readonly introduction: Maybe<Pick<contentfulAuthorIntroductionTextNode, 'introduction'>> }
    )> }
  )>, readonly previous: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulMarkdownArticle, 'slug' | 'title'>> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type ArticlesPageQueryVariables = Exact<{ [key: string]: never; }>;


type ArticlesPageQuery = { readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> }, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly home: Maybe<Pick<PagesJson, 'image' | 'catchphrase' | 'introduction'>>, readonly genki: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly zine: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly posts: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulMarkdownArticle, 'id' | 'title' | 'slug' | 'publishedAt'>
      & { readonly content: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt'>> }>, readonly author: Maybe<Pick<ContentfulAuthor, 'name'>> }
    )> } };

type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdArticleLdTsx1271460761QueryVariables = Exact<{ [key: string]: never; }>;


type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdArticleLdTsx1271460761Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdLogoLdTsx1271460761QueryVariables = Exact<{ [key: string]: never; }>;


type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdLogoLdTsx1271460761Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdBreadcrumbLdTsx1271460761QueryVariables = Exact<{ [key: string]: never; }>;


type usersKojighqgithubComdowdinessyowaiZinesrccomponentsJsonLdBreadcrumbLdTsx1271460761Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'siteUrl'>> }> };

}