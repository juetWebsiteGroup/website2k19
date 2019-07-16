require("dotenv").config();
const mysql = require("mysql2");

const config = {
  host: process.env.DB_HOST_SQL,
  user: process.env.DB_USER_SQL,
  password: process.env.DB_PASSWORD_SQL,
  database: process.env.DB_DATABASE_SQL,
  port: process.env.DB_PORT_SQL
};

const con = mysql.createPool({ ...config, waitForConnections: true });

module.exports = con;
