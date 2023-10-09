const connectedUsers = new Map()
let io = null

const setSocketServerInstance = (ioInstance) => (io = ioInstance)

const getSocketServerInstance = () => io

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

const getActiveConnections = (userId) => {
	const activeConnections = []
	connectedUsers.forEach(function (value, key) {
		if (value.userId == userId) {
			activeConnections.push(key)
		}
	})
	return activeConnections
}

const getOnlineUsers = () => {
	const onlineUsers = []

	connectedUsers.forEach(function (value, key) {
		if (value.userId == userId) {
			onlineUsers.push(key)
		}
	})

	return onlineUsers
}

module.exports = {
	addNewConnectUser,
	removeConnectionUser,
	getActiveConnections,
	getSocketServerInstance,
	setSocketServerInstance,
	getOnlineUsers,
}
