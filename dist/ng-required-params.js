'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory(require('angular'));
  } else {
    root.requiredParams = factory(root.angular);
  }
})(undefined, function (angular) {
  return angular.module('ng-required-params', []).factory('param', function () {

    var throwIfMissing = function throwIfMissing(p) {
      throw new Error('Missing parameter: ' + p);
    };

    return {
      required: throwIfMissing
    };
  });
});
