// Modules

// path
import * as nodePath from 'path'

// plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// base utils
import { routes } from '../utils/utils.js'

// Functions

const {
  baseDirs: { distDir, confDir, srcDir },
} = routes

const getPath = () => ({
  distDir: nodePath.resolve(distDir),
  confDir: nodePath.resolve(confDir),
  srcDir: nodePath.resolve(srcDir),
})

const { pages } = routes

const applyHtmlPlugin = ({ minify = false, ext = 'html' } = {}) =>
  pages.map(
    page =>
      new HtmlWebpackPlugin({
        chunks: [page],
        filename: `${page}.${ext}`,
        minify,
        template: `./gulp/pages/${page}.html`,
      })
  )

const cssLoaders = extra => {
  let loaders = [MiniCssExtractPlugin.loader, 'css-loader']

  if (extra) loaders = [...loaders, extra]

  return loaders
}

const babelPresets = extra => {
  let presets = ['@babel/preset-env']

  if (extra) presets = [...presets, extra]

  return presets
}

const getRegExObj = () => ({
  html: /\.html$/i,
  css: /\.css$/i,
  sass: /\.s[ac]ss$/i,
  js: /\.m?js$/i,
  ts: /\.m?ts$/i,
  fonts: /\.woff2?$/i,
  images: /\.(gif|ico|jpe?g|png|svg|webp)$/i,
  sounds: /\.(ogg|mp3|wav|mpe?g)$/i,
})

const assetModuleFilename = pathData => {
  const regEx = getRegExObj()

  const isFont = regEx.fonts.test(pathData.filename)
  const isImage = regEx.images.test(pathData.filename)
  const isSound = regEx.sounds.test(pathData.filename)

  const root = 'assets'
  const filename = '[name][ext]'

  if (isFont) return `${root}/fonts/${filename}`

  if (isImage) return `${root}/images/${filename}`

  if (isSound) return `${root}/sounds/${filename}`

  return `${root}/files/${filename}`
}

// Exports

export default {
  getPath,
  applyHtmlPlugin,
  cssLoaders,
  babelPresets,
  getRegExObj,
  assetModuleFilename,
}
