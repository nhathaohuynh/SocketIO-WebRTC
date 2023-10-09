const friendInvitationServices = require('../service/friend.invitation.services')
const { BadRequest } = require('../utils/error.response')
const handleValidateInput = require('../utils/handleValidate')
const { OkResponse } = require('../utils/success.response')
const { validateEmailShema, validateId } = require('../validation')

class FriendInvitationController {
	async friendInvitation(req, res) {
		const error = handleValidateInput(req.body, validateEmailShema)

		if (error) {
			throw new BadRequest(error)
		}

		const body = {
			user: req.user,
			email: req.body.email,
		}

		return new OkResponse({
			message: 'Invitation send successful',
			metaData: await friendInvitationServices.friendInvitation(body),
		}).send(res)
	}

	async friendAccept(req, res) {
		const error = handleValidateInput(req.body, validateId)

		if (error) {
			throw new BadRequest(error)
		}

		const body = {
			id: req.body.id,
			userId: req.user._id,
		}

		return new OkResponse({
			metaData: await friendInvitationServices.friendAccept(body),
		}).send(res)
	}

	async friendReject(req, res) {
		const error = handleValidateInput(req.body, validateId)

		if (error) {
			throw new BadRequest(error)
		}

		const body = {
			id: req.body.id,
			userId: req.user._id,
		}

		return new OkResponse({
			metaData: await friendInvitationServices.friendReject(body),
		}).send(res)
	}
}

module.exports = new FriendInvitationController()
