// Modules

// plugins
import { merge } from 'webpack-merge'

// configs
import commonConfig from './config/webpack/webpack.common.js'
import devConfig from './config/webpack/webpack.dev.js'
import prodConfig from './config/webpack/webpack.prod.js'

// base utils
import { env } from './config/utils/utils.js'

// Config

const config = env.isDev ? devConfig : prodConfig

// Exports

export default merge(commonConfig, config)
