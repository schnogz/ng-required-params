(function (window, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('angular'));
  } else {
    window.ngRequiredParams = factory(window.angular);
  }
}(window, (angular) => {
  return angular.module('ng-required-params', [])
    .factory('ngRequired', () => {
      return (param) => {
        throw new Error(`Missing required parameter: ${param}`);
      };
    });
}));
