import React, { useState } from 'react'
import FriendListItem from './FriendListItem'

const FRIENDS = [
	{
		id: 1,
		username: 'Mark',
		isOnline: true,
	},

	{
		id: 2,
		username: 'Anna',
		isOnline: false,
	},

	{
		id: 3,
		username: 'John',
		isOnline: false,
	},
]
const FriendList = () => {
	const [isActive, setIsActive] = useState(1)
	return (
		<div className='flex-1 w-full'>
			{FRIENDS.map((f, index) => (
				<FriendListItem
					key={crypto.randomUUID()}
					username={f.username}
					id={f.id}
					tab={index + 1}
					isOnline={f.isOnline}
					isActive={isActive === index + 1}
					setIsActive={setIsActive}
				/>
			))}
		</div>
	)
}

export default FriendList
