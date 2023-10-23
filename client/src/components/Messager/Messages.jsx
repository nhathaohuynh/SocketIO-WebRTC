import React from 'react'
import convertDateToHumanReadable from '../../utils/convertDateToHumanReadable'
import Message from './Message'
import MessageHeader from './MessageHeader'

const Messages = ({ chosenChatDetails, messages }) => {
	return (
		<div className='h-[calc(100% - 60px)] overflow-auto flex flex-col items-center'>
			<MessageHeader username={chosenChatDetails?.username} />
			{messages?.map((message, index) => {
				const sameAuthor =
					index > 0 &&
					messages[index]?.author._id === messages[index - 1]?.author._id

				const sameDay =
					index > 0 &&
					convertDateToHumanReadable(new Date(message?.date), 'dd/mm/yyyy') ===
						convertDateToHumanReadable(
							new Date(messages[index - 1]?.date),
							'dd/mm/yyyy',
						)
				return (
					<div className='w-full' key={crypto.randomUUID()}>
						{(!sameDay || index === 0) && (
							<DateSeparator
								date={convertDateToHumanReadable(
									new Date(message?.date),
									'dd/mm/yyyy',
								)}
							/>
						)}
						<Message
							message={message}
							sameAuthor={sameAuthor}
							sameDay={sameDay}
						/>
					</div>
				)
			})}
		</div>
	)
}

const DateSeparator = ({ date }) => {
	return (
		<div className='w-full mx-auto my-[12px] flex items-center gap-1'>
			<div className='h-[0.1px] flex-1 bg-[#585c62]'></div>
			<span className='text-[12px]  text-[#72767d]'>{date}</span>
			<div className='h-[0.1px] flex-1 bg-[#585c62]'></div>
		</div>
	)
}

export default Messages
