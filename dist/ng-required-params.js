'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory(require('angular'));
  } else {
    root.requiredParams = factory(root.angular);
  }
})(undefined, function (angular) {
  return angular.module('ng-required-params', []).factory('required', function () {

    return function (param) {
      throw new Error('Missing required parameter: ' + param);
    };
  });
});
