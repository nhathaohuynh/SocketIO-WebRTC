import React, { useState } from 'react'
import FriendListItem from './FriendListItem'
import { useSelector } from 'react-redux'

const FriendList = () => {
	const { friends } = useSelector((state) => state.friendReducer)
	const [isActive, setIsActive] = useState(1)
	return (
		<div className='flex-1 w-full'>
			{friends?.map((f, index) => (
				<FriendListItem
					key={crypto.randomUUID()}
					username={f?.username}
					id={f?._id}
					tab={index + 1}
					isOnline={f?.isOnline}
					isActive={isActive === index + 1}
					setIsActive={setIsActive}
				/>
			))}
		</div>
	)
}

export default FriendList
