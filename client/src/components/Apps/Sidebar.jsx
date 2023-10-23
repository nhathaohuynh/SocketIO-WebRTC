import React from 'react'
import icons from '../../utils/icons'

const { FaUserGroup } = icons
const Sidebar = () => {
	return (
		<div className='flex flex-col items-center w-[72px] bg-[#202225]'>
			<button className='w-[48px] h-[48px] rounded-sm mt-[10px] color white bg-[#5865f2] flex justify-center items-center'>
				<FaUserGroup />
			</button>
		</div>
	)
}

export default Sidebar
