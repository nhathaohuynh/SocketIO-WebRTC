const { addNewConnectUser } = require('../server.store')
const {
	updateFriendPendingInvitations,
	updateFriends,
} = require('./updates/friend.update')

const newConnectionHandler = async (socket, io) => {
	const user = socket.user

	addNewConnectUser({
		socketId: socket.id,
		userId: user._id,
	})

	// update pending invitation
	updateFriendPendingInvitations(user._id)

	// update friends
	updateFriends(user._id)
}

module.exports = newConnectionHandler
