// packages
const { Router } = require("express")

// router
const router = Router()

// controllers
const {amount} = require("../controllers/amount.controller.js")

// get amount
router.get("/", async (req, res) => {
	const response = await amount()
	res.status(200).send({
		ok: true,
		request_number: response
	})
}) 

module.exports = router