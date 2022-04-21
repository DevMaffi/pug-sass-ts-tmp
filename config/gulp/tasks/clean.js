// Modules

// plugins
import del from 'del'

// entries
import entries from '../entries.js'

// Task

const clean = () => del(entries.gulpDir)

// Exports

export default clean
