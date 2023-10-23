import React from 'react'
import MessageContent from './MessageContent'
import WelcomeMessage from './WelcomeMessage'

const Messager = ({ chosenChatDetails }) => {
	return (
		<div className='flex-1 bg-[#36393F] mt-[48px] p-[15px] relative'>
			{chosenChatDetails ? (
				<MessageContent chosenChatDetails={chosenChatDetails}></MessageContent>
			) : (
				<WelcomeMessage />
			)}
		</div>
	)
}

export default Messager
