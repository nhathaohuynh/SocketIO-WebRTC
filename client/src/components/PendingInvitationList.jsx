import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem'
import { useSelector } from 'react-redux'

const INVATAIONS = [
	{
		id: 1,
		sender: {
			username: 'Mark',
			email: 'huynhnhathao0609@gmail.com',
		},
	},

	{
		id: 1,
		sender: {
			username: 'Anna',
			email: 'anna0609@gmail.com',
		},
	},

	{
		id: 1,
		sender: {
			username: 'John',
			email: 'john0609@gmail.com',
		},
	},
]

const PendingInvitationList = () => {
	const { penddingFriendsInvitations } = useSelector(
		(state) => state.friendReducer,
	)
	return (
		<div className='w-full h-[28%] flex flex-col items-center overflow-y-auto overflow-x-hidden invitationScroll'>
			{penddingFriendsInvitations?.map((inv) => (
				<PendingInvitationListItem
					key={crypto.randomUUID()}
					id={inv._id}
					sender={inv?.senderId?.username}
					email={inv?.senderId?.email}
				/>
			))}
		</div>
	)
}

export default PendingInvitationList
