const { Schema, model } = require('mongoose')
const DOCUMENT_NAME = 'Conversation'
const COLLECTION_NAME = 'Conversations'

const conversationSchema = new Schema(
	{
		participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
		messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
	},
	{
		collection: COLLECTION_NAME,
		timestamps: true,
	},
)
module.exports = model(DOCUMENT_NAME, conversationSchema)
