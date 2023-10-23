import React from 'react'
import convertDateToHumanReadable from '../../utils/convertDateToHumanReadable'
import Avatar from '../Apps/Avatar'

const Message = ({ message, sameDay, sameAuthor }) => {
	if (sameAuthor && sameDay) {
		return (
			<div className='text-[#DCDDDE] w-full'>
				<p className='ml-[52px]'>{message?.content}</p>
			</div>
		)
	}
	return (
		<div className='w-full mt-[12px] flex'>
			<Avatar username={message?.author?.username}></Avatar>
			<div className='flex flex-col ml-[16px]'>
				<span className='text-[16px] text-[#3ce070] font-[500] '>
					{message?.author?.username}{' '}
					<span className='text-[12px]  text-[#72767d]'>
						{convertDateToHumanReadable(
							new Date(message?.date),
							'dd-mm-yyyy hh:m',
						)}
					</span>
				</span>
				<p className='text-[#DCDDDE]'>{message?.content}</p>
			</div>
		</div>
	)
}

export default Message
