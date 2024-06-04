// packages
require("dotenv").config()
const express = require("express")

// app
const app = express()

// routes
const ImageRoute = require("./routes/image.route.js")
const AmountRoute = require("./routes/amount.route.js")

// config
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// middleware
app.use("/api/image", ImageRoute)
app.use("/api/amount", AmountRoute)

// start
const start = () => {
	try {
		const PORT = process.env.PORT || 4100
		app.listen(PORT, console.log(`App has been started: http://localhost:${PORT}`))
	} catch (err) {
		console.log(err)
	}
}

start()
