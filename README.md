# object-prototype-functions

An array containing the names of the functions on `Object.prototype`.

[![npm](https://img.shields.io/npm/v/object-prototype-functions.svg)](https://www.npmjs.com/package/object-prototype-functions)
[![build status](https://travis-ci.org/watson/object-prototype-functions.svg?branch=master)](https://travis-ci.org/watson/object-prototype-functions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install object-prototype-functions --save
```

## Usage

```js
const ObjectPrototypeFunctions = require('object-prototype-functions')

console.log('The functions of Object.prototype are:')
console.log(ObjectPrototypeFunctions.join(', ')) // hasOwnProperty, isPrototypeOf...
```

## License

[MIT](LICENSE)