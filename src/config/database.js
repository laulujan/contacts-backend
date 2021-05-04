const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Connect to data base:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('connect', () => {
  console.log('data base connected');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};