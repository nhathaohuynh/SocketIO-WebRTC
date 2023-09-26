const verifyTokenSocket = require('./api/middleware/authSocket')
const disconnectHandler = require('./socketHandler/disconnect.handler')
const newConnectionHandler = require('./socketHandler/new.connection.handler')
const morgan = require('morgan')

const registerSocketServer = (server) => {
	const io = require('socket.io')(server, {
		cors: {
			origin: '*',
			methods: ['GET', 'POST'],
		},
	})

	io.use((socket, next) => {
		verifyTokenSocket(socket, next)
	})
	io.on('connection', (socket) => {
		console.log('user connected')
		console.log(socket.id)

		newConnectionHandler(socket, io)

		socket.on('disconnect', () => {
			disconnectHandler(socket)
		})
	})

	// new connection handler
}

module.exports = {
	registerSocketServer,
}
