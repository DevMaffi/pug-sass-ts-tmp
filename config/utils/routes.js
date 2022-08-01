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
  .readdirSync(`${baseDirs.srcDir}/pug/pages`)
  .map(page => page.match(regEx)?.[0])
  .filter(page => page) // exclude undefined

// Exports

export default { baseDirs, pages }
