module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular-mocks.js',
      'src/ng-required-params.js',
      'src/ng-required-params.spec.js'
    ],
    exclude: [],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/ng-required-params.js': ['coverage']
    },
    coverageReporter: {
      type: 'lcov',
      dir : 'coverage/'
    },
    port: 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    captureTimeout: 10000,
    singleRun: true
  });
};