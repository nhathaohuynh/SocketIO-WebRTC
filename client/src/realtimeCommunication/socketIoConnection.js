import io from 'socket.io-client'
import {
	setPendingFriendInvitation,
	setFriend,
} from '../redux/slices/friend.slice'
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

	socket.on('friends-list', (data) => {
		const { friends } = data

		console.log(friends)
		dispatch(setFriend(friends))
	})
}
