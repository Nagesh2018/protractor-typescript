"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
        binary: "C://Program Files (x86)//Google//Chrome//Application"
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testspec.js'],
    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 25000,
        showColors: true,
    },
    SELENIUM_PROMISE_MANAGER: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHVyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyx3QkFBd0I7SUFDeEIsaUJBQWlCLEVBQUUsS0FBSztJQUV4Qix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxhQUFhLEVBQUU7UUFDYixJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNoQyxNQUFNLEVBQUcsc0RBQXNEO0tBQ2hFO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBRXRCLFNBQVMsRUFBRSxTQUFTO0lBRXBCLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0lBQ0Qsd0JBQXdCLEVBQUUsS0FBSztDQUVoQyxDQUFDIn0=