const asyncHandler = require('express-async-handler')
const friendInvitationController = require('../controller/friend.invitation.controller')
const { auth } = require('./middleware/auth')

const express = require('express')

const router = express.Router()

router.post(
	'/friend-invitation',
	auth,
	asyncHandler(friendInvitationController.friendInvitation),
)

router.post(
	'/friend-invitation/accept',
	auth,
	asyncHandler(friendInvitationController.friendAccept),
)

router.post(
	'/friend-invitation/reject',
	auth,
	asyncHandler(friendInvitationController.friendReject),
)

module.exports = router
