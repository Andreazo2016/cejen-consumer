const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASDWORD,
      database: process.env.DB_DATABASE,
    },
})

module.exports = knex