const express = require('express')
const { PORT } = require('./config')
const expressApp = require('./express-app')
const { connectDB } = require('./database')

const startServer = async () => {
	const app = express()

	// connect to db
	await connectDB()
	// set up middlewares
	await expressApp(app)

	// run server
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`)
	})
	// close app when it error
	app.on('error', (err) => {
		console.log(err)
		process.exit()
	})
}

startServer()
