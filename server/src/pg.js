const initOptions = {

}

const pgp = require('pg-promise')(initOptions)
const db = pgp(process.env.POSTGRES_URL)

module.exports = db;
