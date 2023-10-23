import React from 'react'
import Avatar from '../Apps/Avatar'

const MessageHeader = ({ username = '' }) => {
	return (
		<div className='w-full'>
			<Avatar large username={username} />
			<span className='text-gray-200 text-[14px]'>
				This is beginning of your conversation with {username}
			</span>
		</div>
	)
}

export default MessageHeader
