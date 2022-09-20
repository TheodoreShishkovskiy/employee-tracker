const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  user: 'root',
  database: 'employees'
});

module.exports = connection;