// An example configuration file
import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";
const calctest = `../e2e/features`;
export let config: Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect : true,
    allScriptsTimeout: 50000,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
    
      chromeOptions: { 
      // args: ['--DNS-prefetch-disable'],
      // args: ["--start-maximized"],
      // binary : "C://Program Files (x86)//Google//Chrome//Application"
    }
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    // specs: ['../e2e/features/calculator.feature'],

    suites: {
        smoke: [`${calctest}/calculator.feature`],
        regression: [`${calctest}/*.feature`],
        },
         
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
    // require step definitions
    // tags: "@advcalc","@calc",
    format : 'json:./cucumberReport.json',
    require: [
        '../ConvertedJSFiles/e2e/stepdefs/*.js' // accepts a glob
    ],
    },

    SELENIUM_PROMISE_MANAGER: false,

    onComplete: () => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  79.0.3945.130",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
  
    }
  };
  