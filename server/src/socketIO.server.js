const verifyTokenSocket = require('./api/middleware/authSocket')
const { setSocketServerInstance, getOnlineUsers } = require('./server.store')
const disconnectHandler = require('./socketHandler/disconnect.handler')
const newConnectionHandler = require('./socketHandler/new.connection.handler')

const registerSocketServer = (server) => {
	const io = require('socket.io')(server, {
		cors: {
			origin: '*',
			methods: ['GET', 'POST'],
		},
	})

	setSocketServerInstance(io)

	io.use((socket, next) => {
		verifyTokenSocket(socket, next)
	})

	const emitOnline = () => {
		const onlineUsers = getOnlineUsers()
		
	}

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
