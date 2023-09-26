import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem'

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
	return (
		<div className='w-full h-[28%] flex flex-col items-center overflow-y-auto overflow-x-hidden invitationScroll'>
			{INVATAIONS.map((inv) => (
				<PendingInvitationListItem
					key={crypto.randomUUID()}
					id={inv.id}
					sender={inv.sender.username}
					email={inv.sender.email}
				/>
			))}
		</div>
	)
}

export default PendingInvitationList
