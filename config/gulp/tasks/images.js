// Modules

// gulp
import gulp from 'gulp'

// plugins
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin'
import newer from 'gulp-newer'
import webp from 'gulp-webp'

// entries
import entries from '../entries.js'

// Task

const { dest, src } = gulp

const images = () => {
  return src(entries.src.images)
    .pipe(newer(entries.build.images))
    .pipe(webp({ quality: 85 })) // 0 -> 100, default: 75
    .pipe(dest(entries.build.images))
    .pipe(src(entries.src.images))
    .pipe(newer(entries.build.images))
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 85, progressive: true }), // 0 -> 100
        optipng({ optimizationLevel: 3 }), // 0 -> 7, default: 3
      ])
    )
    .pipe(dest(entries.build.images))
    .pipe(src(entries.src.svg))
    .pipe(newer(entries.build.images))
    .pipe(
      imagemin([
        svgo({
          plugins: [
            { name: 'removeViewBox', active: true },
            { name: 'cleanupIDs', active: false },
          ],
        }),
      ])
    )
    .pipe(dest(entries.build.images))
}

// Exports

export default images
