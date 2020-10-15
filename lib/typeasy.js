'use strict'

module.exports = function typeasy(data) {
	const startIndex = 8
	const endIndex = -1
	const res = Object.prototype.toString.call(data).slice(startIndex, endIndex)
	return res.toLowerCase()
}
