import { browser, element,by } from "protractor"
import { calculator } from "./e2e/pages/calculator";
import { angularHome } from "./e2e/pages/angularHome";


describe("Chain Locators Demo", ()=>{
    it("Open Angular js Site", async ()=> {
        let calc = new calculator();
        await browser.get("https://juliemr.github.io/protractor-demo");
        await calc.firstInput.sendKeys("2");
        await calc.secondInput.sendKeys("3");
        await calc.goBtn.click();
        await calc.testRes.getText().then(text => {
            console.log("Res is " + text) ;
        })

    })

    it("Open Angular Home Page", async ()=> {
        let angPage = new angularHome();
        await browser.get("https://angularjs.org");
        await angPage.angularLink.click();
        await angPage.searchBox.sendKeys("Hello");
    })
})