// packages
const axios = require("axios")

// database
const pool = require("../database/database.js")

// search
async function search(q) {
	try {
		const url = `https://pixabay.com/api/?key=${process.env.api_key}&q=${q}`
		const res = await axios.get(url)
		const data = res.data
		const lastAmountQuery = `SELECT amount FROM searches_number;`
		const lastAmount = await pool.query(lastAmountQuery)
		const query = `UPDATE searches_number SET amount=${lastAmount[0][0].amount+1} WHERE amount=${lastAmount[0][0].amount};`
		await pool.query(query)
		return data
	} catch (err) {
		return err
	}
}

module.exports = {search}