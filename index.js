'use strict'

module.exports = [
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
]

module.exports.deprecated = [
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__'
]

module.exports.nonSpec = [
  'eval',
  'unwatch',
  'watch'
]

module.exports.nodejs = module.exports.concat(module.exports.deprecated)

module.exports.all = module.exports.concat(
  module.exports.deprecated,
  module.exports.nonSpec
)
