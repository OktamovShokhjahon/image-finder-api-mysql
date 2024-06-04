// packages
const axios = require("axios")

// database
const pool = require("../database/database.js")

// amount
async function amount(q) {
	try {
		const lastAmountQuery = `SELECT amount FROM searches_number;`
		const lastAmount = await pool.query(lastAmountQuery)
		console.log(lastAmount)
		const res = lastAmount[0][0].amount
		return res
	} catch (err) {
		return err
	}
}

module.exports = {amount}