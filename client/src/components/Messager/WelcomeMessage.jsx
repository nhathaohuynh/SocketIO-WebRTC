import React from 'react'
import logo from '../../assets/logo.jpg'

const WelcomeMessage = () => {
	return (
		<div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-16'>
			<div className='shrink-0'>
				<img className='h-14 w-14' src={logo} alt='chat Logo' />
			</div>
			<div>
				<div className='text-xl font-medium text-[#5865f2]'>Chat App</div>
				<p className='text-slate-500'> Welcome back! You have a new message</p>
			</div>
		</div>
	)
}

export default WelcomeMessage
