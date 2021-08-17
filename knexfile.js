// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/ecommerce.db3'
    },
    seeds:{
      directory:'./seeds'
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = ON", done)
        }
    },
    useNullAsDefault: true
  },


  production: {
    client: 'pg',
    connection: {
      connectionString:process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false}
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './migrations'
    }
  }

};
