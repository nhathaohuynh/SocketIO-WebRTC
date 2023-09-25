require('dotenv').config()

module.exports = {
	PORT: process.env.PORT,
	MONGODB_URL: process.env.MONGOBD_URL,
	APP_SECRET: process.env.APP_SECRET,
}
