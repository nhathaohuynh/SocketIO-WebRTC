import React from 'react'
import ChosenOptionsLabel from '../Messager/ChosenOptionsLabel'
import Dropdown from './Dropdown'

const AppBar = ({ chosenChatDetails }) => {
	return (
		<div className='absolute right-0 top-0 h-[48px] broder border-black shadow-md bg-[#36393f] w-[calc(100%-296px)] flex justify-between items-center px-[15px]'>
			<div className='flex justify-between w-full'>
				<ChosenOptionsLabel chosenChatDetails={chosenChatDetails} />
				<Dropdown />
			</div>
		</div>
	)
}

export default AppBar
