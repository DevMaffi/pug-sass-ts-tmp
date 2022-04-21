const isDev = process.env.NODE_ENV === 'dev'
const isProd = process.env.NODE_ENV === 'prod'
const isWp = process.env.NODE_ENV === 'wp'

export default { isDev, isProd, isWp }
