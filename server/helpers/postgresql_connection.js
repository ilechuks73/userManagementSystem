const { Pool } = require('pg');
const dotenv = require('dotenv')

dotenv.config((path = "./../.env"))
const pool = new Pool({ 
  user: process.env.POSTGRESQL_USERNAME,
  host: process.env.POSTGRESQL_HOSTNAME,
  database: process.env.POSTGRESQL_DATABASE_NAME,
  password: process.env.POSTGRESQL_PASSWORD,
});

module.exports = pool