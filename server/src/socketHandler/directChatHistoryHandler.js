const asyncHandler = require('express-async-handler')
const { updateChatHistory } = require('./updates/chat')
const {
	findConversationByParticipants,
} = require('../database/repository/conversation.repo')

const directChatHistoryHandler = asyncHandler(async (socket, data) => {
	const { _id: userId } = socket.user
	const { receiverUserId } = data

	const participants = [userId, receiverUserId]
	const conversation = await findConversationByParticipants(participants)

	if (conversation) updateChatHistory(conversation._id.toString(), socket.id)
})

module.exports = directChatHistoryHandler
