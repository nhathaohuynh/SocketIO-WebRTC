const handleValidateInput = (payload, validateApdapter) => {
	let errorMessage = ''
	const { error } = validateApdapter.validate(payload, {
		abortEarly: false,
	})

	if (error) {
		errorMessage = error.details.map(
			(errorDetail) => errorDetail.message.replace(/["']/g, '')[0],
		)
	}
	return errorMessage
}

module.exports = handleValidateInput
