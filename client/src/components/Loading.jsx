import React from 'react'

const Loading = () => {
	return (
		<div className='flex gap-2 absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] justify-center items-center'>
			<div className='w-5 h-5 rounded-full animate-pulse bg-blue-600' />
			<div className='w-5 h-5 rounded-full animate-pulse bg-blue-600' />
			<div className='w-5 h-5 rounded-full animate-pulse bg-blue-600' />
		</div>
	)
}

export default Loading
