# Import
{expect} = require('chai')
joe = require('joe')
arrangekeys = require('../../')

# Tests
joe.describe 'arrangekeys', (describe, it) ->

	it 'should product the expected result', ->
		input = {
			a: 1
			b: 2
			c: 3
			z: 4
		}
		expected = {
			b: 2
			c: 3
			a: 1
			z: 4
		}
		output = arrangekeys(input, 'b c a')

		expect(output).to.deep.equal(expected)
