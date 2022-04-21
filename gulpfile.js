// Modules

// gulp
import gulp from 'gulp'

// tasks
import {
  bundle,
  clean,
  files,
  fonts,
  html,
  images,
  serve,
  watchFiles,
} from './config/gulp/tasks/tasks.js'

// General functions

const { parallel, series, task } = gulp

const assetsManage = () => series(parallel(images, fonts, files, html), bundle)

const build = series(clean, assetsManage())
task('build', build)

const pack = series(assetsManage())
task('pack', pack)

const watch = series(assetsManage(), parallel(serve, watchFiles))
task('default', watch)
