const userModel = require('../model/user.model')

module.exports = {
	checkUserByEmail: async (email) => {
		return await userModel.exists({ email })
	},

	findUserByEmail: async (email) => {
		return await userModel.findOne({ email: email.toLowerCase() }).lean()
	},

	findUserById: async (id) => {
		return await userModel.findById(id).select('-password').lean()
	},

	findUserAndUpdateFriend: async (id, friendId) => {
		await userModel.findByIdAndUpdate(
			id,
			{
				$push: { friends: friendId },
			},
			{
				new: true,
				upsert: true,
			},
		)
	},

	findUserByIdAndListFriend: async (id) => {
		return await userModel
			.findById(id)
			.populate('friends', '_id username email')
	},
}
