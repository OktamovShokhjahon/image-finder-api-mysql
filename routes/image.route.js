// packages
const { Router } = require("express")

// router
const router = Router()

// controllers
const {search} = require("../controllers/image.controller.js")

// search image
router.get("/search", async (req, res) => {
	const { q } = req.query

	if (!q) {
		res.send("Search name needed")
		return 
	}

	const response = await search(q)
	res.send(response)
}) 

module.exports = router