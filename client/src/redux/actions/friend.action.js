import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	checkResponseCode,
	sendFriendInvitation,
	acceptFriendInvitation,
	rejectFriendInvitation,
} from '../../apis'

export const apiSendFrinedInvitation = createAsyncThunk(
	'user/invitation',
	async (data, { rejectWithValue }) => {
		try {
			const response = await sendFriendInvitation(data)

			if (response.code === 1) {
			} else {
				checkResponseCode(response.response)
				return rejectWithValue(response?.response?.data?.message)
			}
		} catch (err) {
			throw err
		}
	},
)

export const apiAcceptFrinedInvitation = createAsyncThunk(
	'invitation/accept',
	async (data, { rejectWithValue }) => {
		try {
			const response = await acceptFriendInvitation(data)

			if (response.code === 1) {
			} else {
				checkResponseCode(response.response)
				return rejectWithValue(response?.response?.data?.message)
			}
		} catch (err) {
			throw err
		}
	},
)

export const apiRejectFrinedInvitation = createAsyncThunk(
	'invitation/reject ',
	async (data, { rejectWithValue }) => {
		try {
			const response = await rejectFriendInvitation(data)

			if (response.code === 1) {
			} else {
				checkResponseCode(response.response)
				return rejectWithValue(response?.response?.data?.message)
			}
		} catch (err) {
			throw err
		}
	},
)
