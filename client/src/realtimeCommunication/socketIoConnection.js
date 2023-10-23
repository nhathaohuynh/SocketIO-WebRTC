import io from 'socket.io-client'
import {
	setFriend,
	setOnlineUser,
	setPendingFriendInvitation,
} from '../redux/slices/friend.slice'
import updateChatHistoryIfActive from '../utils/updateChatHistoryIfActive'
let socket = null
export const connectSocketServer = (token, dispatch) => {
	socket = io('http://localhost:8000', {
		auth: {
			token,
		},
	})

	socket?.on('connect', () => {
		console.log('successfully connected with socket.io server')
		console.log(socket.id)
	})

	socket?.on('friends-invitations', (data) => {
		const { pendingInvitations } = data
		dispatch(setPendingFriendInvitation(pendingInvitations))
	})

	socket?.on('friends-list', (data) => {
		const { friends } = data
		dispatch(setFriend(friends))
	})

	socket?.on('online-users', (data) => {
		const { onlineUsers } = data
		dispatch(setOnlineUser(onlineUsers))
	})

	socket?.on('direct-chat-history', (data) => {
		updateChatHistoryIfActive(data)
	})
}

export const sendDirectMessage = (data) => {
	socket?.emit('direct-message', data)
}

export const getDirectChatHistory = (data) => {
	socket?.emit('direct-chat-history', data)
}
