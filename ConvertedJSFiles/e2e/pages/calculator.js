"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var calculator = /** @class */ (function () {
    function calculator() {
        this.firstInput = protractor_1.element(protractor_1.by.model("first"));
        this.secondInput = protractor_1.element(protractor_1.by.model("second"));
        this.goBtn = protractor_1.element(protractor_1.by.id("gobutton"));
        // this.testRes = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        this.testRes = protractor_1.element(protractor_1.by.xpath("//table//td[3]"));
    }
    return calculator;
}());
exports.calculator = calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2UyZS9wYWdlcy9jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXdEO0FBR3hEO0lBTUk7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4Qyw4RkFBOEY7UUFDOUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksZ0NBQVUifQ==