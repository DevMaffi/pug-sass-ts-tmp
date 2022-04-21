// Modules

// gulp
import gulp from 'gulp'

// plugins
import pug from 'gulp-pug'
import replace from 'gulp-replace'

// entries
import entries from '../entries.js'

// Task

const { dest, src } = gulp

const html = () =>
  src(entries.src.pages)
    .pipe(pug({ pretty: true, verbose: true }))
    .pipe(replace(/@files\//g, '../files/'))
    .pipe(replace(/(@img|@svg)\//g, '../images/'))
    .pipe(dest(entries.build.pages))

// Exports

export default html
