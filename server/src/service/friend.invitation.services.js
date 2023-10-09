const { Conflict, BadRequest } = require('../utils/error.response')
const {
	findUserByEmail,
	findUserAndUpdateFriend,
} = require('../database/repository/user.repo')
const {
	findInvitation,
	findUserAlreadyFriend,
	deleteInvitationById,
	checkInvitationById,
	findInvitationById,
} = require('../database/repository/invitation.repo')
const invitationModel = require('../database/model/invitation.model')
const {
	updateFriendPendingInvitations,
	updateFriends,
} = require('../socketHandler/updates/friend.update')

class FriendInvitationService {
	async friendInvitation({ user: userSender, email }) {
		if (userSender.email.toLowerCase() === email.toLowerCase()) {
			throw new Conflict('You cannot become friend with yourself')
		}

		const userReceiver = await findUserByEmail(email)

		if (!userReceiver)
			throw new BadRequest(`Friend of ${email} has not been found`)

		const foundInvitation = await findInvitation({
			serderId: userSender._id,
			receiverId: userReceiver._id,
		})

		if (foundInvitation) throw new Conflict('Invitation has been already sent')

		const userAlreadyFriend = await findUserAlreadyFriend({
			senderId: userSender._id,
			userReceiver: userReceiver,
		})

		if (userAlreadyFriend)
			throw new Conflict('Friend already add. Please friends list')

		await invitationModel.create({
			senderId: userSender._id,
			receiverId: userReceiver._id,
		})

		updateFriendPendingInvitations(userReceiver._id.toString())
		return {}
	}

	async friendAccept({ id, userId }) {
		const foundInvitation = await findInvitationById(id)
		if (!foundInvitation)
			throw new BadRequest('Something went wrong. Please try again!')

		// update friends for user

		const { senderId, receiverId } = foundInvitation

		// update friend of sender
		await findUserAndUpdateFriend(senderId, receiverId)
		// update friend of receiver
		await findUserAndUpdateFriend(receiverId, senderId)

		// update list of friends if the users are online

		// update friend invitation
		await deleteInvitationById(id)
		updateFriendPendingInvitations(userId.toString())
		updateFriends(userId.toString())
		updateFriends(senderId.toString())
		return {}
	}

	async friendReject({ id, userId }) {
		const invitationExist = await checkInvitationById(id)
		if (!invitationExist)
			throw new BadRequest('Something went wrong. Please try again!')

		// update friend invitation
		await deleteInvitationById(id)
		updateFriendPendingInvitations(userId.toString())

		return {}
	}
}

module.exports = new FriendInvitationService()
