const mysql = require("mysql2")

require("dotenv").config()

const pool = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
}).promise()

console.log("SQL Connected")

module.exports = pool
