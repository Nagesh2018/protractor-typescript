"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = __importStar(require("cucumber-html-reporter"));
var calctest = "../e2e/features";
exports.config = {
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
        smoke: [calctest + "/calculator.feature"],
        regression: [calctest + "/*.feature"],
    },
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        // require step definitions
        // tags: "@advcalc","@calc",
        format: 'json:./cucumberReport.json',
        require: [
            '../ConvertedJSFiles/e2e/stepdefs/*.js' // accepts a glob
        ],
    },
    SELENIUM_PROMISE_MANAGER: false,
    onComplete: function () {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSwrREFBbUQ7QUFDbkQsSUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUM7QUFDeEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzVDLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msd0JBQXdCO0lBQ3hCLGlCQUFpQixFQUFFLEtBQUs7SUFFeEIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBRXJCLGFBQWEsRUFBRTtRQUNmLG9DQUFvQztRQUNwQywrQkFBK0I7UUFDL0Isa0VBQWtFO1NBQ25FO0tBQ0E7SUFDRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxpREFBaUQ7SUFFakQsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUksUUFBUSx3QkFBcUIsQ0FBQztRQUN6QyxVQUFVLEVBQUUsQ0FBSSxRQUFRLGVBQVksQ0FBQztLQUNwQztJQUVMLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxZQUFZLEVBQUU7UUFDZCwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLE1BQU0sRUFBRyw0QkFBNEI7UUFDckMsT0FBTyxFQUFFO1lBQ0wsdUNBQXVDLENBQUMsaUJBQWlCO1NBQzVEO0tBQ0E7SUFFRCx3QkFBd0IsRUFBRSxLQUFLO0lBRS9CLFVBQVUsRUFBRTtRQUNWLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUzQixDQUFDO0NBQ0YsQ0FBQyJ9