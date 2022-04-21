// Modules

// gulp
import gulp from 'gulp'

// plugins
import newer from 'gulp-newer'

// entries
import entries from '../entries.js'

// Task

const { dest, src } = gulp

const files = () =>
  src(entries.src.files)
    .pipe(newer(entries.build.files))
    .pipe(dest(entries.build.files))

// Exports

export default files
