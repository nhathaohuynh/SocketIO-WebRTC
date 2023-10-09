import instance from '../../axios.config'

export const sendFriendInvitation = (payload) =>
	instance('/friend-invitation', { method: 'post', data: payload })

export const acceptFriendInvitation = (payload) =>
	instance('/friend-invitation/accept', { method: 'post', data: payload })

export const rejectFriendInvitation = (payload) =>
	instance('/friend-invitation/reject', { method: 'post', data: payload })
