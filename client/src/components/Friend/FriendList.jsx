import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChosenChatDetails } from '../../redux/slices/chat.slice'
import FriendListItem from './FriendListItem'

const FriendList = () => {
	const { friends, onlineUsers } = useSelector((state) => state.friendReducer)
	const [isActive, setIsActive] = useState(0)

	const dispatch = useDispatch()
	const handleChoosenActiveConversation = (tab, id, username) => {
		setIsActive(tab)
		const chatDetails = {
			id,
			username,
		}

		const chatType = 'DIRECT'
		dispatch(
			setChosenChatDetails({
				chatDetails,
				chatType,
			}),
		)
	}
	return (
		<div className='flex-1 w-full'>
			{friends?.map((f, index) => (
				<FriendListItem
					key={crypto.randomUUID()}
					username={f?.username}
					id={f?.id}
					tab={index + 1}
					isOnline={onlineUsers?.some((user) => user?.userId === f?.id)}
					isActive={isActive === index + 1}
					handleChoosenActiveConversation={handleChoosenActiveConversation}
				/>
			))}
		</div>
	)
}

export default FriendList
