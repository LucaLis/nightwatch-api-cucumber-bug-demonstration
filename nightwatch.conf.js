const chromedriver = require('chromedriver');

module.exports = {
  silent: false,
  custom_commands_path: "./commands",
  
  globals: {
    abortOnFailure: true,
    abortOnAssertionFailure: true,
    waitForConditionPollInterval: 300,
    waitForConditionTimeout: 500,
    throwOnMultipleElementsReturned: true
  },

  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
        use_legacy_jsonwire: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: "true"
        }
      },
    },

  }
};
