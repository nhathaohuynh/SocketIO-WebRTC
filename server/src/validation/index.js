const Joi = require('joi')

module.exports = {
	registerSchema: Joi.object({
		username: Joi.string().min(3).max(30).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(20).required(),
	}),

	loginSchema: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(20).required(),
	}),
}
