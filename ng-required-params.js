(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['angular'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('angular'));
  } else {
    root.requiredParams = factory(root.angular);
  }
}(this, function (angular) {
  return angular.module('ng-required-params', [])
    .factory('param', function () {

      const throwIfMissing = p => {
        throw new Error(`Missing parameter: ${p}`)
      };

      return {
        required: throwIfMissing
      };
    })
}));