// Modules

// gulp
import gulp from 'gulp'

// webpack
import webpack from 'webpack'
import webpackConfig from '../../../webpack.config.js'

// plugins
import browserSync from 'browser-sync'
import webpackStream from 'webpack-stream'

// base utils
import { routes } from '../../utils/utils.js'

// entries
import entries from '../entries.js'

// Task

const { dest, src } = gulp
const { distDir } = routes.baseDirs

const bundle = () =>
  src(entries.src.bundle)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(distDir))
    .pipe(browserSync.stream())

// Exports

export default bundle
