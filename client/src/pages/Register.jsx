import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Loading } from '../components'
import InputField from '../components/Input/InputField'
import { registerAction } from '../redux/actions/auth.action'
import { clearError } from '../redux/slices/auth.slice'
import path from '../utils/path'
import { toastError, toastSuccess } from '../utils/toast'
import { validateRegisterForm } from '../validation'

const Register = () => {
	const { loading, error, isLogin, user } = useSelector(
		(state) => state.authReducer,
	)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const initInputs = {
		username: '',
		email: '',
		password: '',
		comfirmPassword: '',
	}

	const [inputs, setInputs] = useState(initInputs)

	const [isFormValid, setIsFormValid] = useState(false)

	const onChangeInput = (e) => {
		if (!isFormValid) setIsFormValid(true)
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmitForm = (e) => {
		e.preventDefault()

		const errors = Object.entries(validateRegisterForm(inputs))

		if (errors.length > 0) {
			const arrayErrors = errors.map((error) => error[1])
			setIsFormValid(false)
			return toastError(arrayErrors[0])
		}
		const data = {
			username: inputs.username,
			email: inputs.email,
			password: inputs.password,
		}

		dispatch(registerAction(data))
		setInputs(initInputs)
	}

	useEffect(() => {
		if (error) {
			setIsFormValid(false)
			toastError(error)
			dispatch(clearError())
		}
		if (isLogin && user) {
			toastSuccess('Login successfully')
			navigate(`/${path.HOME}`)
		}
	}, [error, isLogin])
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='w-full min-h-screen bg-gray-100 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
					<div className='w-full sm:max-w-md p-5 mx-auto'>
						<h2 className='mb-12 text-center text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-transparent bg-clip-text '>
							Welcome Back!
						</h2>
						<form>
							<div className='mb-2'>
								<InputField
									label='Username'
									name='username'
									onChangeInput={onChangeInput}
									value={inputs.username}
								/>
							</div>
							<div className='mb-2'>
								<InputField
									label='Email-Address'
									name='email'
									onChangeInput={onChangeInput}
									value={inputs.email}
								/>
							</div>
							<div className='mb-2'>
								<InputField
									label='Password'
									name='password'
									type='password'
									onChangeInput={onChangeInput}
									value={inputs.password}
								/>
							</div>
							<div className='mb-2'>
								<InputField
									label='Comfirm Password'
									name='comfirmPassword'
									type='password'
									onChangeInput={onChangeInput}
									value={inputs.comfirmPassword}
								/>
							</div>
							<div className='mt-6'>
								<Button
									text='Sign up'
									onClickButton={onSubmitForm}
									isDisable={!isFormValid}
								/>
							</div>
							<div className='mt-6 text-center'>
								<Link
									to='/login'
									className='hover:underline hover:text-blue-500'
								>
									Sign in for an account
								</Link>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

export default Register
