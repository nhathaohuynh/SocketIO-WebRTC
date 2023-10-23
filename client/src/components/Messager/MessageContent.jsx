import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getDirectChatHistory } from '../../RealtimeCommunication/socketIoConnection'
import MessageInput from './MessageInput'
import Messages from './Messages'

const MessageContent = ({ chosenChatDetails }) => {
	const { messages } = useSelector((state) => state.chatReducer)
	useEffect(() => {
		// TODO
		// fetching  chat history from specific user id
		getDirectChatHistory({
			receiverUserId: chosenChatDetails?.id,
		})
	}, [chosenChatDetails])
	return (
		<div className='flex flex-grow-1 flex-col'>
			<Messages chosenChatDetails={chosenChatDetails} messages={messages} />
			<MessageInput chosenChatDetails={chosenChatDetails} />
		</div>
	)
}

export default MessageContent
