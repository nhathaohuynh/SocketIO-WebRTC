import React, { useEffect, useState } from 'react'
import { AppBar, FridensBar, Message, Sidebar } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../utils/logout'
import { connectSocketServer } from '../realtimeCommunication/socketIoConnection'

const Dashboard = () => {
	const { user, isLogin, token } = useSelector((state) => state.authReducer)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!isLogin && !user) {
			logout()
		} else {
			connectSocketServer(token, dispatch)
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
