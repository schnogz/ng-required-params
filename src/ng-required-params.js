(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('angular'));
  } else {
    root.ngRequiredParams = factory(root.angular);
  }
}(window, function (angular) {
  return angular.module('ng-required-params', [])
    .factory('ngRequired', function () {
      return param => {
        throw new Error(`Missing required parameter: ${param}`);
      };
    })
}));