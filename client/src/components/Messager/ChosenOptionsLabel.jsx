import React from 'react'

const ChosenOptionsLabel = ({ chosenChatDetails }) => {
	return (
		<div>
			<p className='text-[16px] font-semibold'>{chosenChatDetails?.username}</p>
		</div>
	)
}

export default ChosenOptionsLabel
