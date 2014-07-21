
/**
 * Module dependencies.
 */
var angular = require('angular');

/**
 * Expose placeholder.
 */
var placeholder = module.exports = angular.module('placeholder', []);

/**
 * Directives.
 */
placeholder.directive('placeholder', require('./directive'));

