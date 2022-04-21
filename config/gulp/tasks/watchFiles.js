// Modules

// gulp
import gulp from 'gulp'

// entries
import entries from '../entries.js'

// tasks
import { bundle, files, fonts, html, images } from './tasks.js'

// Task

const { watch, series } = gulp

const watchFiles = () => {
  watch(entries.watch.pages, series(html, bundle))
  watch(entries.watch.styles, bundle)
  watch(entries.watch.scripts, bundle)
  watch(entries.watch.images, series(images, bundle))
  watch(entries.watch.fonts, series(fonts, bundle))
  watch(entries.watch.files, series(files, bundle))
}

// Exports

export default watchFiles
