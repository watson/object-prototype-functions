'use strict'

const assert = require('assert')
const strings = require('./')

assert(Array.isArray(strings))
assert(strings.length > 0)

strings.forEach(str => {
  assert.strictEqual(typeof Object[str], 'function')
})
