import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connectSocketServer } from '../RealtimeCommunication/socketIoConnection'
import { AppBar, FridensBar, Messager, Sidebar } from '../components'
import { logout } from '../utils/logout'

const Dashboard = () => {
	const { user, isLogin, token } = useSelector((state) => state.authReducer)
	const { chosenChatDetails } = useSelector((state) => state.chatReducer)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!isLogin || !user) {
			logout()
		} else {
			connectSocketServer(token, dispatch)
		}
	}, [user, isLogin])

	return (
		<div className='w-full h-screen flex text-white'>
			<Sidebar></Sidebar>
			<FridensBar></FridensBar>
			<Messager chosenChatDetails={chosenChatDetails}></Messager>
			<AppBar chosenChatDetails={chosenChatDetails}></AppBar>
		</div>
	)
}

export default Dashboard
