'use strict'

const { Schema, model } = require('mongoose')
const DOCUMENT_NAME = 'Message'
const COLLECTION_NAME = 'Messages'

const messageSchema = new Schema(
	{
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		content: { type: String },
		date: { type: Date },
		type: { type: String },
	},
	{
		timestamps: true,
		collection: COLLECTION_NAME,
	},
)

module.exports = model(DOCUMENT_NAME, messageSchema)
