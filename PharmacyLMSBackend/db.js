const {Pool} = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  // If you are using a remote database, replace 'localhost' with your database host
  // and ensure that the port is correct.
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;