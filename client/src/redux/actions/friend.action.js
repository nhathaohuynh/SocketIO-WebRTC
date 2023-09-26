import { createAsyncThunk } from '@reduxjs/toolkit'
import { checkResponseCode, sendFriendInvitation } from '../../apis'

export const apiSendFrinedInvitation = createAsyncThunk(
	'user/invitation',
	async (data) => {
		try {
			const response = await sendFriendInvitation(data, { rejectWithValue })

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
