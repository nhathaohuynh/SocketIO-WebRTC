'use strict'

const {
	findConversationById,
} = require('../../database/repository/conversation.repo')

const serverStore = require('../../server.store')

const updateChatHistory = async (
	conversationId,
	toSpecifiedSocketId = null,
) => {
	const conversation = await findConversationById(conversationId)

	if (conversation) {
		const io = serverStore.getSocketServerInstance()

		if (toSpecifiedSocketId) {
			// initial update  of chat history
			return io.to(toSpecifiedSocketId).emit('direct-chat-history', {
				messages: conversation.messages,
				participants: conversation.participants,
			})
		}

		// check if users of this conversation are online
		// if yes emit to them update of message

		conversation.participants.forEach((userId) => {
			const activeConnection = serverStore.getActiveConnections(
				userId.toString(),
			)

			activeConnection.forEach((socketId) => {
				io.to(socketId).emit('direct-chat-history', {
					messages: conversation.messages,
					participants: conversation.participants,
				})
			})
		})
	}
}

module.exports = {
	updateChatHistory,
}
