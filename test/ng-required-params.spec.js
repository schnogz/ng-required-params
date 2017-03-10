describe('ng-required-params', function () {
  var ngRequired;

  beforeEach(inject(function() {
    var $injector = angular.injector(['ng-required-params']);
    ngRequired = $injector.get('ngRequired');
  }));

  it('should export the angular module', function () {
    // assert
    expect(window.ngRequiredParams).toBeDefined();
    expect(window.ngRequiredParams.name).toEqual('ng-required-params');
  });

  it('should not through an error when a required parameter is supplied', function () {
    // arrange
    var foo = function(p = ngRequired('p')) {
      return false;
    };

    // act
    foo('test');

    // assert
    expect(true).toBeTruthy();
  });

  it('should through an error when a required parameter is not supplied', function () {
    // arrange
    var foo = function(p = ngRequired('p')) {
      return false;
    };

    // act/assert
    expect(foo).toThrowError('Missing required parameter: p')
  });
});