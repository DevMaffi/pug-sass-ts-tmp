// Modules

// node utils
import fs from 'fs'

// routes
import routes from './routes.js'

// Entries

const { baseDirs, pages } = routes

const getRelPath = page => {
  let relPath = `./assets/js/${page}`

  ;['js', 'mjs', 'ts', 'mts'].forEach(ext => {
    if (fs.existsSync(`${baseDirs.srcDir}/assets/js/${page}.${ext}`))
      relPath += `.${ext}`
  })

  return relPath
}

const entries = pages.reduce((entries, page) => {
  entries[page] = ['@babel/polyfill', getRelPath(page)]
  return entries
}, {})

// Exports

export default entries
