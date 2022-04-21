// Modules

// plugins
import EslintPlugin from 'eslint-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// functions
import functions from './functions.js'

// Config

const { applyHtmlPlugin } = functions

const config = {
  mode: 'development',
  devtool: 'source-map',
  output: { filename: '[name].js' },
  plugins: [
    new EslintPlugin(),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    ...applyHtmlPlugin(),
  ],
}

// Exports

export default config
