'use strict'

/**
 * Returns a copy of a JavaScript object with the keys arranged in a specified order.
 * @param {object} data The unarranged source object.
 * @param {string[]|string|false} [keys] The keys that we wish to arrange at the top. Can be a an array of keys. A string of keys seperated by a space character. Or false, to just sort the keys of the object.
 * @param {boolean} [sort=false] If true, the remaining keys are sorted.
 * @returns {object} The arranged object.
 */
function arrangekeys(data, keys = false, sort = false) {
	// Prepare
	const result = {}

	// Expand
	if (!keys) {
		sort = true
	} else {
		if (typeof keys === 'string') {
			keys = keys.split(/\s+/)
		}

		// Add the specified keys in the specified order
		for (const key of keys) {
			if (typeof data[key] !== 'undefined') {
				result[key] = data[key]
			}
		}
	}

	// Add the leftovers
	const dataKeys = sort ? Object.keys(data).sort() : Object.keys(data)
	for (const key of dataKeys) {
		result[key] = data[key] // no need for !(key in keys) as we assume the JS engine handles that for us
	}

	// Return the result
	return result
}

// Export
module.exports = arrangekeys
