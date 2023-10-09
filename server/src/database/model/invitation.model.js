const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Invitation'
const COLLECTION_NAME = 'Invitations'

const invitationSchema = new Schema(
	{
		senderId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		receiverId: {
			type: Schema.Types.ObjectId,
			ref: 'User  ',
		},
	},
	{
		timestamps: true,
		collection: COLLECTION_NAME,
	},
)
module.exports = model(DOCUMENT_NAME, invitationSchema)
