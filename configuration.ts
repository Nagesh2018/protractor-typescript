// An example configuration file
import {Config} from 'protractor';

export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect : true,
    allScriptsTimeout: 30000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    chromeOptions: { 
      args: ['--DNS-prefetch-disable'],
      binary : "C://Program Files (x86)//Google//Chrome//Application"
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testspec.js'],
  
    framework: 'jasmine',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 25000,
      showColors: true, // Use colors in the command line report.
    },
    SELENIUM_PROMISE_MANAGER: false,

  };
  