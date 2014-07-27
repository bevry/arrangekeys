module.exports = (data, keys) ->
	# Expand
	if typeof keys is 'string' then keys = keys.split(/\s+/)

	# Create our result object
	result = {}

	# Add the specified keys in the specified order
	keys.forEach (key) ->
		if typeof data[key] isnt 'undefined'
			result[key] = data[key]

	# Add the leftovers
	Object.keys(data).forEach (key) ->
		unless key in keys
			result[key] = data[key]

	# Return the result
	return result
