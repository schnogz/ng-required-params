module.exports = function(config) {
  var configObj = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.2/angular-mocks.js',
      'dist/ng-required-params.js',
      'src/ng-required-params.spec.js'
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type:'json', subdir: '.' }
      ]
    },
    preprocessors: {
      'src/ng-required-params.js': ['coverage']
    },
    port: 8004,
    runnerPort: 8003,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_Travis_CI: {
        base: 'Chromium',
        flags: ['--no-sandbox']
      }
    },
    captureTimeout: 10000,
    singleRun: true
  };

  if (process.env.TRAVIS) {
    configObj.browsers = ['Chrome_Travis_CI'];
  }

  config.set(configObj);
};