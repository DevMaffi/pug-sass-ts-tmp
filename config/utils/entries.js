// Modules

// node modules
import fs from 'fs'

// routes
import routes from './routes.js'

// Entries

const { baseDirs, pages } = routes

const getEntryPath = page => {
  let relPath = `./assets/js/${page}`

  ;['js', 'mjs', 'ts', 'mts'].forEach(ext => {
    if (fs.existsSync(`${baseDirs.srcDir}/assets/js/${page}.${ext}`))
      relPath += `.${ext}`
  })

  return relPath
}

const entries = pages.reduce((entries, page) => {
  entries[page] = ['@babel/polyfill', getEntryPath(page)]
  return entries
}, {})

// Exports

export default entries
