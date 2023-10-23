const convertDateToHumanReadable = (date, format) => {
	const map = {
		mm: date.getMonth() + 1,
		dd: date.getDate(),
		yyyy: date.getFullYear(),
		hh: date.getHours(),
		m: date.getMinutes(),
	}

	return format.replace(/mm|dd|yyyy|hh|m/gi, (matched) => map[matched])
}

export default convertDateToHumanReadable
