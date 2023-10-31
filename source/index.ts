/** An indexable object */
type IndexedObject = { [key: string]: any }

/**
 * Returns a copy of a JavaScript object with the keys arranged in a specified order.
 * @param subject The unarranged source object.
 * @param keys The keys that we wish to arrange at the top. Can be a an array of keys. A string of keys seperated by a space character. Or false, to just sort the keys of the object.
 * @param sort If true, the remaining keys are sorted.
 * @returns The arranged object.
 */
export default function arrangeKeys<T extends IndexedObject>(
	subject: T,
	keys?: string[] | string | false,
	sort?: boolean,
): T {
	// Prepare
	const result: IndexedObject = {}

	// Expand
	if (!keys) {
		sort = true
	} else {
		if (typeof keys === 'string') {
			keys = keys.split(/\s+/)
		}

		// Add the specified keys in the specified order
		for (const key of keys) {
			if (typeof subject[key] !== 'undefined') {
				result[key] = subject[key]
			}
		}
	}

	// Add the leftovers
	const dataKeys = sort ? Object.keys(subject).sort() : Object.keys(subject)
	for (const key of dataKeys) {
		result[key] = subject[key] // no need for !(key in keys) as we assume the JS engine handles that for us
	}

	// Return the result
	return result as T
}
