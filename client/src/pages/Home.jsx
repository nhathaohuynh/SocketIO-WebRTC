import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
	return (
		<div className='select-none'>
			<Outlet />
		</div>
	)
}

export default Home
