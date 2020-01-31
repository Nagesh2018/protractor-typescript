import { Given, Then, When } from "cucumber";
import { calculator } from "../pages/calculator";
import { browser } from "protractor";
import {assert } from "chai";
let calc = new calculator();

Given('I have navigated to the {string} site', async (siteName)=> {
    var toUrl:string;
    if(siteName=="calculator"){
         toUrl = "https://juliemr.github.io/protractor-demo";
    }
    else {
        toUrl = "https://juliemr.github.io/protractor-demo";
    }
    await browser.get(toUrl);
});

When('I add two numbers {string} and {string}', async (string1, string2) => {
    await calc.firstInput.sendKeys(string1);
    await calc.secondInput.sendKeys(string2);
    await calc.goBtn.click();
});


Then('the displayed output should be {string}', async (string) => {
    await calc.testRes.getText().then(text => {
        console.log("Value is "+ text);
        assert.equal(text, string, 'Values Do not match');

    })
});
