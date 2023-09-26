import React from 'react'
import Avatar from './Avatar'

const FriendListItem = ({
	username,
	id,
	isOnline,
	isActive,
	tab,
	setIsActive,
}) => {
	return (
		<div className='w-full'>
			<button
				onClick={() => setIsActive(tab)}
				className={`${
					isActive && 'bg-[rgba(255,255,255,0.1)]'
				} w-full h-[42px] mt-[12px] flex items-center justify-start transform-none text-black p-1  rounded-sm relative`}
			>
				<Avatar username={username} isOnline={isOnline} />
				<span className='ml-3 text-[14px] font-semibold text-white line-clamp-1'>
					{username}
				</span>
			</button>
		</div>
	)
}

export default FriendListItem
