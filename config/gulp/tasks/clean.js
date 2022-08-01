// Modules

// plugins
import { deleteAsync } from 'del'

// entries
import entries from '../entries.js'

// Task

const clean = () =>
  deleteAsync([`${entries.gulpDir}/**`, `!${entries.gulpDir}`])

// Exports

export default clean
