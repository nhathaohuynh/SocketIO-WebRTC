import instance from '../../axios.config'

export const sendFriendInvitation = (payload) =>
	instance('/friend-invitation/invite', { method: 'post', data: payload })
