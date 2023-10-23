import React from 'react'
import OnlineIndicator from '../Friend/OnlineIndicator'

const Avatar = ({ avatar, username, large, isOnline }) => {
	return (
		<div
			className={`${
				large
					? 'w-[80px] h-[80px] text-[24px]'
					: 'w-[32px] h-[32px] text-[16px]'
			} bg-[#5865f2] flex rounded-full items-center justify-center font-semibold ml-[5px] text-white mb-2`}
		>
			{avatar ? (
				<img
					src={avatar}
					alt='avatar'
					className='w-full h-full object-contain'
				/>
			) : (
				username?.substring(0, 2)
			)}
			{isOnline ? <OnlineIndicator /> : null}
		</div>
	)
}

export default Avatar
