const express = require('express')
const cors = require('cors')
const { notFound } = require('./api/middleware/not-found')
const { errorHandler } = require('./api/middleware/error-handler')
const accessApi = require('./api/access.api')
const friendInvitation = require('./api/friend.invitation.api')
const morgan = require('morgan')

module.exports = async (app) => {
	app.use(express.urlencoded({ extended: true, limit: '1mb' }))
	app.use(express.json({ limit: '1mb' }))
	app.use(cors())
	app.use(morgan('dev'))

	// api
	app.use('/socketOI-webRTC/api/v1', accessApi)
	app.use('/socketOI-webRTC/api/v1', friendInvitation)
	// not found
	app.use(notFound)
	// error handling
	app.use(errorHandler)
}
