var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: 'root',
  password: 'root',
  database: 'que_veo'
});

connection.connect();
module.exports = connection;
