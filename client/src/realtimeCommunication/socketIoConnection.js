import io from 'socket.io-client'
let socket = null
export const connectSocketServer = (token) => {
	socket = io('http://localhost:8000', {
		auth: {
			token,
		},
	})

	socket.on('connect', () => {
		console.log('successfully connected with socket.io server')
		console.log(socket.id)
	})
}
