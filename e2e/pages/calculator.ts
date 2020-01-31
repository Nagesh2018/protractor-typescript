import { ElementFinder, element, by } from "protractor";


export class calculator {
    firstInput : ElementFinder;
    secondInput : ElementFinder;
    goBtn : ElementFinder;
    testRes: ElementFinder;
    
    constructor(){
        this.firstInput = element(by.model("first"));
        this.secondInput = element(by.model("second"));
        this.goBtn = element(by.id("gobutton"));
        // this.testRes = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        this.testRes = element(by.xpath("//table//td[3]"));
    }
}