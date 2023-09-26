import React from 'react'

const Tooltip = ({ text, content }) => {
	return (
		<div className=' relative group flex justify-center'>
			<span className='ml-3 font-semibold text-[14px] text-white line-clamp-1 relative'>
				{text}
			</span>
			<span className='absolute top-[-100%] left-[-90%] scale-0 transition-all rounded bg-gray-800 p-2 text-[12px] text-white group-hover:scale-100 z-10'>
				{content}
			</span>
		</div>
	)
}

export default Tooltip
