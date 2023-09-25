const { Schema, model } = require('mongoose')
const { BadRequest } = require('../../utils/error.response')
const bcrypt = require('bcrypt')

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

const userSchema = new Schema(
	{
		username: {
			type: String,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
			index: true,
		},
		password: {
			type: String,
		},
	},
	{
		timestamps: true,
		collection: COLLECTION_NAME,
	},
)

userSchema.pre('save', async function (next) {
	const user = this

	//if password already hash call next
	if (!user.isModified('password')) {
		return next()
	}

	try {
		const salt = await bcrypt.genSalt(12)
		const hashPassword = await bcrypt.hash(user.password, salt)

		user.password = hashPassword
		next()
	} catch (err) {
		throw err
	}
})

userSchema.methods.comparePassword = async function (canidatePassword) {
	try {
		const isMatch = await bcrypt.compare(canidatePassword, this.password)
		return isMatch
	} catch (err) {
		throw err
	}
}

module.exports = model(DOCUMENT_NAME, userSchema)
