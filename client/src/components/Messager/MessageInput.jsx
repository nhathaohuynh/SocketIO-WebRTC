import React, { useRef, useState } from 'react'
import { sendDirectMessage } from '../../RealtimeCommunication/socketIoConnection'

const MessageInput = ({ chosenChatDetails }) => {
	const refInput = useRef()
	const [message, setMessage] = useState('')

	const handleChangeMessage = (e) => {
		setMessage(e.target.value)
	}

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSendMessage()
		}
	}

	const handleSendMessage = () => {
		if (message.length > 0) {
			sendDirectMessage({
				receiverUserId: chosenChatDetails?.id,
				content: message,
			})
			setMessage('')
			refInput.current.focus()
		}
	}
	return (
		<div className='h-[60px] w-full flex items-center justify-center'>
			<input
				type='text'
				ref={refInput}
				name='message'
				placeholder='Message'
				className='text-white outline-none rounded-md text-[14px] px-3 py-[10px] bg-[rgba(255,255,255,0.1)] absolute bottom-4 w-[98%]'
				value={message}
				spellCheck='false'
				autoComplete='off'
				onChange={(e) => handleChangeMessage(e)}
				onKeyDown={(e) => handleKeyPress(e)}
			/>
		</div>
	)
}

export default MessageInput
