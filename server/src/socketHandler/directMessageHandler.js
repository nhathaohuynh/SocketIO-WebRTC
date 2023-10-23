const conversationModel = require('../database/model/conversation.model')
const messageModel = require('../database/model/message.model')
const asyncHandler = require('express-async-handler')
const {
	findConversationByParticipants,
	findConverSationAndUpdate,
} = require('../database/repository/conversation.repo')
const { updateChatHistory } = require('./updates/chat')

const TYPE = {
	DIRECT: 'DIRECT',
	GROUP: 'GROUP',
}

const directMessageHandler = asyncHandler(async (socket, data) => {
	const { _id: userId } = socket.user
	const { receiverUserId, content } = data

	const message = await messageModel.create({
		content: content,
		author: userId,
		date: new Date(),
		type: TYPE.DIRECT,
	})
	const participants = [userId, receiverUserId]
	let conversation = await findConversationByParticipants(participants)
	const messageId = message._id

	if (conversation) {
		// if exist push to array messages
		await findConverSationAndUpdate(conversation._id, messageId)
	} else {
		// create new  conversation if it not exist
		conversation = await conversationModel.create({
			participants,
			messages: [messageId],
		})
	}
	updateChatHistory(conversation._id)
})

module.exports = directMessageHandler
