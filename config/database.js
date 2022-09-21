const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
module.exports = db;
