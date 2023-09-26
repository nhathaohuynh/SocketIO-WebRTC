import React, { useEffect } from 'react'
import { AppBar, FridensBar, Message, Sidebar } from '../components'
import { useSelector } from 'react-redux'
import { logout } from '../utils/logout'
import { connectSocketServer } from '../realtimeCommunication/socketIoConnection'

const Dashboard = () => {
	const { user, isLogin, token } = useSelector((state) => state.authReducer)
	useEffect(() => {
		if (!isLogin && !user) {
			logout()
		} else {
			connectSocketServer(token)
		}
	}, [user, isLogin])
	return (
		<div className='w-full h-screen flex text-white'>
			<Sidebar></Sidebar>
			<FridensBar></FridensBar>
			<Message></Message>
			<AppBar></AppBar>
		</div>
	)
}

export default Dashboard
