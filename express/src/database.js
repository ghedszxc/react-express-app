const mysql = require("mysql2/promise"); // Use 'promise' for async/await

console.log("!!!!", process.env.HOST, process.env.USER, process.env.DB_NAME);
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
