'use strict'

// Import
const { deepEqual } = require('assert-helpers')
const kava = require('kava')
const arrangekeys = require('../')

// Tests
kava.describe('arrangekeys', function(describe, it) {
	it('should product the expected result', function() {
		const input = {
			z: 1,
			a: 2,
			b: 3,
			c: 4
		}
		const expected = {
			b: 3,
			c: 4,
			z: 1,
			a: 2
		}
		const output = arrangekeys(input, 'b c')
		deepEqual(output, expected, 'output was as expected')
	})

	it('should product the expected result with sorting', function() {
		const input = {
			z: 1,
			a: 2,
			b: 3,
			c: 4
		}
		const expected = {
			b: 3,
			c: 4,
			a: 2,
			z: 1
		}
		const output = arrangekeys(input, 'b c', true)
		deepEqual(output, expected, 'output was as expected')
	})

	it('should product the expected result with only sorting', function() {
		const input = {
			z: 1,
			a: 2,
			b: 3,
			c: 4
		}
		const expected = {
			a: 2,
			b: 3,
			c: 4,
			z: 1
		}
		const output = arrangekeys(input)
		deepEqual(output, expected, 'output was as expected')
	})
})
