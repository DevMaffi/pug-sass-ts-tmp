// Modules

import { routes } from '../utils/utils.js'

// Entries

const { srcDir } = routes.baseDirs
const gulpDir = `${srcDir}/gulp`

const entries = {
  build: {
    pages: `${gulpDir}/pages`,
    images: `${gulpDir}/images`,
    fonts: `${gulpDir}/fonts`,
    files: `${gulpDir}/files`,
  },
  src: {
    pages: `${srcDir}/pug/pages/*.pug`,
    bundle: `${srcDir}/assets/js/index.{js,ts}`,
    images: `${srcDir}/assets/images/**/*.{gif,jpg,jpeg,png,webp}`,
    svg: `${srcDir}/assets/svg/**/*.svg`,
    fonts: `${srcDir}/assets/fonts/*.ttf`,
    files: `${srcDir}/assets/files/**/*`,
  },
  watch: {
    pages: `${srcDir}/pug/**/*.pug`,
    styles: `${srcDir}/assets/sass/**/*.{sass,scss}`,
    scripts: `${srcDir}/assets/js/**/*.{js,ts}`,
    images: `${srcDir}/assets/**/*.{gif,ico,jpg,jpeg,png,svg,webp}`,
    fonts: `${srcDir}/assets/fonts/*.ttf`,
    files: `${srcDir}/assets/files/**/*`,
  },
  gulpDir,
}

// Exports

export default entries
