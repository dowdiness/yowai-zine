
const catchy = require('catchy-image')

module.exports = async ({ markdownNode }, pluginOptions) => {

  // gatsby-config.jsの設定情報とマークダウンのメタデータを画像生成ライブラリの引数に渡す
  const result = await catchy.generate({
    ...pluginOptions,
    output: {
      ...pluginOptions.output,
      directory: `./public/vol/0${markdownNode.fields.slug}`,
      fileName: pluginOptions.output.fileName,
    },
    meta: {
      author: markdownNode.frontmatter.author,
      title: markdownNode.frontmatter.title
    }
  })

  console.info(`gatsby-remark-og-image: Successful generated: ${result}`)
}
