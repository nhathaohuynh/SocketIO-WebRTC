const verifyTokenSocket = require('./api/middleware/authSocket')
const { setSocketServerInstance, getOnlineUsers } = require('./server.store')
const disconnectHandler = require('./socketHandler/disconnect.handler')
const newConnectionHandler = require('./socketHandler/new.connection.handler')
const directMessageHandler = require('./socketHandler/directMessageHandler')
const directChatHistoryHandler = require('./socketHandler/directChatHistoryHandler')

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
		io.emit('online-users', { onlineUsers })
	}

	io.on('connection', (socket) => {
		console.log('user connected')

		newConnectionHandler(socket, io)
		emitOnline()

		socket.on('direct-message', (data) => {
			directMessageHandler(socket, data)
		})

		socket.on('direct-chat-history', (data) => {
			directChatHistoryHandler(socket, data)
		})

		socket.on('disconnect', () => {
			disconnectHandler(socket)
		})
	})

	setInterval(() => {
		emitOnline()
	}, 8 * 1000)

	// new connection handler
}

module.exports = {
	registerSocketServer,
}
