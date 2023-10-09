const asyncHandler = require('express-async-handler')
const {
	findInvitationAndInformation,
} = require('../../database/repository/invitation.repo')
const {
	getActiveConnections,
	getSocketServerInstance,
} = require('../../server.store')
const {
	findUserByIdAndListFriend,
} = require('../../database/repository/user.repo')
const { BadRequest } = require('../../utils/error.response')

const updateFriendPendingInvitations = asyncHandler(async (receiverId) => {
	const pendingInvitations = await findInvitationAndInformation(receiverId)

	const receiverList = getActiveConnections(receiverId)

	const io = getSocketServerInstance()

	receiverList.forEach((receiverSocketId) => {
		io.to(receiverSocketId).emit('friends-invitations', {
			pendingInvitations:
				pendingInvitations.length > 0 ? pendingInvitations : [],
		})
	})
})

const updateFriends = asyncHandler(async (userId) => {
	const receiverList = getActiveConnections(userId)
	const io = getSocketServerInstance()
	if (!receiverList.length > 0) return

	const foundUser = await findUserByIdAndListFriend(userId)
	if (!foundUser) throw new BadRequest('Something went wrong. Please try again')

	const friendsList = foundUser.friends.map((f) => {
		return {
			id: f._id,
			email: f.email,
			username: f.username,
		}
	})

	// find active connection of specific id (online users)

	receiverList.forEach((receiverSocketId) => {
		io.to(receiverSocketId).emit('friends-list', {
			friends: friendsList.length > 0 ? friendsList : [],
		})
	})
})

module.exports = {
	updateFriendPendingInvitations,
	updateFriends,
}
