import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Dashboard, Home, Login, Register } from './pages'
import path from './utils/path'
function App() {
	return (
		<div>
			<Routes>
				<Route element={<Home />} path={path.PUBLIC}>
					<Route element={<Dashboard />} path={path.HOME} />
				</Route>
				<Route element={<Login />} path={path.LOGIN} />
				<Route element={<Register />} path={path.REGISTER} />
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<ToastContainer />
		</div>
	)
}

export default App
