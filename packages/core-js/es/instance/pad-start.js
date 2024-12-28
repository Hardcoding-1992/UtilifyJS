'use strict';
var isPrototypeOf = require('../../internals/object-is-prototype-of');
var method = require('../string/virtual/pad-start');

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.padStart;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.padStart) ? method : own;
};
