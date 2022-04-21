// Modules

// gulp
import gulp from 'gulp'

// plugins
import newer from 'gulp-newer'
import ttf2woff from 'gulp-ttf2woff'
import ttf2woff2 from 'gulp-ttf2woff2'

// entries
import entries from '../entries.js'

// Task

const { dest, src } = gulp

const fonts = () =>
  src(entries.src.fonts)
    .pipe(newer(entries.build.fonts))
    .pipe(ttf2woff())
    .pipe(dest(entries.build.fonts))
    .pipe(src(entries.src.fonts))
    .pipe(newer(entries.build.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(entries.build.fonts))

// Exports

export default fonts
