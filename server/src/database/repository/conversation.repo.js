const conversationModel = require('../model/conversation.model')

module.exports = {
	findConversationByParticipants: async (participants) => {
		return await conversationModel
			.findOne({
				participants: { $all: participants },
			})
			.lean()
	},

	findConversationById: async (conversationId) => {
		return await conversationModel
			.findById(conversationId)
			.populate({
				path: 'messages',
				model: 'Message',
				populate: {
					path: 'author',
					model: 'User',
					select: 'username _id',
				},
			})
			.lean()
	},

	findConverSationAndUpdate: async (conversationId, messageId) => {
		return await conversationModel.findByIdAndUpdate(conversationId, {
			$push: { messages: messageId },
		})
	},
}
