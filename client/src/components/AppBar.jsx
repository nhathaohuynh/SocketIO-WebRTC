import React from 'react'
import Dropdown from './Dropdown'

const AppBar = () => {
	return (
		<div className='absolute right-0 top-0 h-[48px] broder border-black shadow-md bg-[#36393f] w-[calc(100%-296px)] flex justify-between items-center px-[15px]'>
			<div>
				<Dropdown />
			</div>
		</div>
	)
}

export default AppBar
