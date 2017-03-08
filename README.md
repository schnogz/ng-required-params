# ng-required-params
A tiny angular module that enforces required parameters on function calls by utilizing ES6 default parameters.

## Install

Install using `npm` or `bower`:

```bash
$ npm install ng-required-params --save
```
```bash
$ bower install ng-required-params --save
```

`ng-required-params` has no dependencies other than an ES6 codebase and [Angular](https://angularjs.org/) itself.

## Usage
Simply require `ng-required-params` as a dependency for your app or any angular module.

```javascript
angular.module('MyApp', ['ng-required-params'])
  .controller('MyController', ['$scope', 'ngRequired', function ($scope, ngRequired) {
      $scope.incrementCounter = (counter = ngRequired`counter`) => {
      	return counter++;
      };
      
      $scope.incrementCounter(); // ==> Error: Missing parameter: counter
  }]);
```
Since required parameters are fundamental and may be often used, it makes sense to make the call to the service as short 
and easy-to-type as possible.  Therefore it is recommended to use template literal syntax `foo´string´` for calling 
`ngRequired` instead of the normal round brackets syntax `foo('string')`. You may also want to import the module as
`ngReg` or `req` instead of `ngRequired` to save more keystrokes.

### Use with a module loader

If you are using a module loader, you can import the module name when requiring it in angular. 
This works with any AMD/UMD/CommonJS module loader.

```javascript
import ngRequiredParamsModule from 'ng-required-params';

angular.module('myModule', [ngRequiredParamsModule.name]);
```