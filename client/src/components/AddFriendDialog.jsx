import React, { useState } from 'react'
import { validateEmail } from '../validation'
import { InputField } from './index'
import { toastError, toastSuccess } from '../utils/toast'
import { sendFriendInvitation } from '../apis'

const AddFriendDialog = ({ isOpenDialog, handlerCloseDialog }) => {
	const [email, setEmail] = useState('')

	const handleSendInVitation = async (e) => {
		// send friend request to server
		e.preventDefault()
		const isEmail = validateEmail(email)
		if (!email) {
			return toastError('Email not allowed empty.')
		}
		if (!isEmail) {
			toastError('Email invalid format.')
			setEmail('')
			return
		}

		const data = {
			email,
		}

		try {
			const response = await sendFriendInvitation(data)
			console.log(response)
			if (response.code === 1) {
				handlerCloseDialog()
				setEmail('')
				toastSuccess('Invitation has been sent')
			} else {
				const message = response?.response?.data?.message
				setEmail('')
				toastError(message)
			}
		} catch (err) {
			throw err
		}
	}

	const onChangeInput = (e) => {
		setEmail(e.target.value)
	}

	return (
		<>
			{isOpenDialog ? (
				<div
					className='w-full mx-auto p-6 absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center z-10'
					onClick={() => {
						handlerCloseDialog()
					}}
				>
					<div
						className='mt-10 bg-white rounded-xl shadow-lg w-[500px] h-[300px]'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='p-4 sm:p-7'>
							<div className='text-center text-[#5865f2]'>
								<h1 className='block text-2xl font-bold uppercase'>
									Invite a Friend
								</h1>
								<small className='text-[#202225]'>
									Enter e-mail addres of friend which you would like to invite
								</small>
							</div>
							<div className='mt-5'>
								<form>
									<div className='grid gap-y-4'>
										<div className='mb-2 text-[#5865f2]'>
											<InputField
												label='Email-address'
												placeholder='Enter email address'
												name='email'
												onChangeInput={onChangeInput}
												value={email}
											/>
										</div>

										<button
											className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#5865f2] text-white hover:bg-blue-600 focus:outline-none transition-all text-sm'
											onClick={handleSendInVitation}
										>
											Invitation
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

export default AddFriendDialog
