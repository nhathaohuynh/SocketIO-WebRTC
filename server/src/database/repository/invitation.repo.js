const invitationModel = require('../model/invitation.model')

const findInvitation = async ({ senderId, receiverId }) =>
	await invitationModel.findOne({ senderId, receiverId })

const findUserAlreadyFriend = async ({ senderId, userReceiver }) => {
	console.log(userReceiver)
	return userReceiver.friends.some((friendId) => friendId === senderId)
}

const findInvitationAndInformation = async (receiverId) => {
	return await invitationModel
		.find({
			receiverId,
		})
		.populate('senderId', '_id email username')
}

const checkInvitationById = async (id) => {
	return await invitationModel.exists({ _id: id })
}

const deleteInvitationById = async (id) => {
	return await invitationModel.findByIdAndDelete(id)
}

const findInvitationById = async (id) => {
	return await invitationModel.findById(id).lean()
}

module.exports = {
	findInvitation,
	findUserAlreadyFriend,
	findInvitationAndInformation,
	checkInvitationById,
	deleteInvitationById,
	findInvitationById,
}
