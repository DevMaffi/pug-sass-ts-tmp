// Modules

// plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

// base utils
import { entries } from '../utils/utils.js'

// functions
import functions from './functions.js'

// Config

const { getPath, cssLoaders, babelPresets, getRegExObj } = functions

const path = getPath()

const regEx = getRegExObj()

const config = {
  context: path.srcDir,
  target: 'web',
  entry: entries,
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    alias: {
      '@': `${path.srcDir}`,
      '@classes': `${path.srcDir}/assets/js/model/classes`,
      '@common': `${path.srcDir}/assets/js/modules/common`,
      '@files': `${path.srcDir}/assets/files`,
      '@i18n': `${path.srcDir}/assets/js/i18n`,
      '@img': `${path.srcDir}/assets/images`,
      '@interfaces': `${path.srcDir}/assets/js/model/interfaces`,
      '@model': `${path.srcDir}/assets/js/model`,
      '@modules': `${path.srcDir}/assets/js/modules`,
      '@sass': `${path.srcDir}/assets/sass`,
      '@services': `${path.srcDir}/assets/js/services`,
      '@svg': `${path.srcDir}/assets/svg`,
      '@utils': `${path.srcDir}/assets/js/utils`,
    },
    extensions: ['.js', '.json', '.ts'],
  },
  output: { path: path.distDir },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: regEx.html,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
      {
        test: regEx.css,
        use: cssLoaders(),
      },
      {
        test: regEx.sass,
        use: cssLoaders('sass-loader'),
      },
      {
        test: regEx.js,
        resolve: { fullySpecified: false },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babelPresets(),
          },
        },
      },
      {
        test: regEx.ts,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babelPresets('@babel/preset-typescript'),
            plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
          },
        },
      },
      {
        test: regEx.images,
        type: 'asset/resource',
      },
      {
        test: regEx.sounds,
        type: 'asset/resource',
      },
    ],
  },
}

// Exports

export default config
