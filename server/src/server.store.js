const connectedUsers = new Map()

const addNewConnectUser = ({ socketId, userId }) => {
	connectedUsers.set(socketId, { userId })
	console.log(connectedUsers)
}

const removeConnectionUser = (socketId) => {
	if (connectedUsers.has(socketId)) {
		connectedUsers.delete(socketId)
		console.log(connectedUsers)
	}
}

module.exports = {
	addNewConnectUser,
	removeConnectionUser,
}
