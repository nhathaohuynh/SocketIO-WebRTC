const { addNewConnectUser } = require('../server.store')

const newConnectionHandler = async (socket, io) => {
	const user = socket.user

	addNewConnectUser({
		socketId: socket.id,
		userId: user._id,
	})
}

module.exports = newConnectionHandler
