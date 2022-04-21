// Modules

import fs from 'fs'

// Base dirs

const baseDirs = {
  distDir: './build',
  confDir: './config',
  srcDir: './src',
}

// Pages

const regEx = /^[a-z]+(?=(.pug$))/

const pages = fs
  .readdirSync(`${baseDirs.srcDir}/pug/views`)
  .filter(page => page.match(regEx)) // exclude undefined
  .map(page => page.match(regEx)[0])

// Exports

export default { baseDirs, pages }
