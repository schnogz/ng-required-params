module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'http://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular-mocks.js',
      'dist/ng-required-params.js',
      'test/ng-required-params.spec.js'
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{ type:'json', subdir: '.' }]
    },
    preprocessors: {'src/ng-required-params.js': ['coverage']},
    port: 8004,
    runnerPort: 8003,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox'],
    captureTimeout: 10000,
    singleRun: true
  })
};