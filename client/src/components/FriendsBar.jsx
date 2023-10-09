import React, { useState } from 'react'
import FriendTitle from './FriendTitle'
import FriendList from './FriendList'
import PendingInvitationList from './PendingInvitationList'
import { AddFriendDialog } from '.'

const FriendsBar = () => {
	const [isOpenDialog, setIsOpenDialog] = useState(false)
	const addFriendButton = () => {
		setIsOpenDialog(true)
	}

	const handlerCloseDialog = () => {
		setIsOpenDialog(false)
	}
	return (
		<div className='w-[224px] flex flex-col items-center bg-[#2F3136] p-2'>
			<button
				className='mt-[10px] mx-auto w-full bg-[#3ba55d] py-2 rounded-sm cursor-pointer'
				onClick={addFriendButton}
			>
				Add Friend
			</button>
			<FriendTitle title='Private Messages' />
			<FriendList />
			<FriendTitle title='Invitations' />
			<PendingInvitationList />
			<AddFriendDialog
				isOpenDialog={isOpenDialog}
				handlerCloseDialog={handlerCloseDialog}
			/>
		</div>
	)
}

export default FriendsBar
