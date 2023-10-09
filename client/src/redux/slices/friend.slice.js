import { createSlice } from '@reduxjs/toolkit'

const friendSlice = createSlice({
	name: 'friend',

	initialState: {
		friends: [],
		penddingFriendsInvitations: [],
		onlineUsers: [],
	},

	reducers: {
		setPendingFriendInvitation: (state, action) => {
			state.penddingFriendsInvitations = action.payload
		},

		setFriend: (state, action) => {
			state.friends = action.payload
		},

		setOnlineUser: (state, action) => {
			state.onlineUsers = action.payload
		},
	},
})

export const { setFriend, setOnlineUser, setPendingFriendInvitation } =
	friendSlice.actions

export default friendSlice.reducer
