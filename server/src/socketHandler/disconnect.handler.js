const serverSotre = require('../server.store')

const disconnectHandler = (socket) => {
	serverSotre.removeConnectionUser(socket.id)
}

module.exports = disconnectHandler
