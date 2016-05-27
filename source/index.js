// Define
function arrangekeys (data, keys, sort = false) {
	// Prepare
	const result = {}

	// Expand
	if ( !keys ) {
		sort = true
	}
	else {
		if ( typeof keys === 'string' ) {
			keys = keys.split(/\s+/)
		}

		// Add the specified keys in the specified order
		for ( const key of keys ) {
			if ( typeof data[key] !== 'undefined' ) {
				result[key] = data[key]
			}
		}
	}

	// Add the leftovers
	const dataKeys = sort ? Object.keys(data).sort() : Object.keys(data)
	for ( const key of dataKeys ) {
		result[key] = data[key]  // no need for !(key in keys) as we assume the JS engine handles that for us
	}

	// Return the result
	return result
}

// Export
module.exports = arrangekeys
