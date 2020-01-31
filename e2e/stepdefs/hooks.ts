import { Before, After, Status } from "cucumber";
import { browser } from "protractor";
import { async } from "q";

Before({ tags: "@advcalc" }, function () {
    browser.manage().window().maximize();
    console.log("Testing Started @advcalc");
});

Before({ tags: "@calc" }, function () {
    console.log("Testing Started @calc");
});

After({ tags: "@calc" }, function () {
console.log("Testing Complete");
});

After(async function(scenario) {
if (scenario.result.status===Status.FAILED){
 const screenshot = await browser.takeScreenshot();
 this.attach(screenshot,"image/png");
}
});
    