'use strict'

const assert = require('assert')
const ObjectPrototypeFunctions = require('./')

assert(Array.isArray(ObjectPrototypeFunctions))
assert(ObjectPrototypeFunctions.length > 0)

ObjectPrototypeFunctions.forEach(name => {
  assert.strictEqual(typeof Object[name], 'function')
})

assert(Array.isArray(ObjectPrototypeFunctions.deprecated))
assert(ObjectPrototypeFunctions.deprecated.length > 0)

ObjectPrototypeFunctions.deprecated.forEach(name => {
  assert.strictEqual(typeof Object[name], 'function')
})

assert(Array.isArray(ObjectPrototypeFunctions.nonSpec))
assert(ObjectPrototypeFunctions.nonSpec.length > 0)

assert(Array.isArray(ObjectPrototypeFunctions.all))
assert.strictEqual(ObjectPrototypeFunctions.all.length,
  ObjectPrototypeFunctions.length +
  ObjectPrototypeFunctions.deprecated.length +
  ObjectPrototypeFunctions.nonSpec.length
)
