"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
class HomePage {
    constructor() {
        this.homePageTitle = protractor_1.element(protractor_1.by.xpath("//*[name()='mat-toolbar-row']/span"));
        this.menuButton = protractor_1.element(protractor_1.by.xpath("//*[name()='mat-toolbar-row']//div/button/i"));
        this.listOfMenuElement = protractor_1.element.all(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item']"));
        this.OrganizationLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][2]//div[2]/a/span"));
        this.PlanLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][3]//div[2]/a/span"));
        this.ProductsLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][4]//div[2]/a/span"));
        this.FormulariesLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][4]//div[2]/a/span"));
        this.CoveragePoliciesLink = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][5]//div[2]/a/span"));
        this.AdminstationLink = protractor_1.element(protractor_1.by.xpath("//*[@id='appLeftNavigation']/mat-nav-list/mat-list-item[6]/div/div[2]/a/span"));
    }
    verifyTitleHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            var homePageTitleName = yield this.homePageTitle.getText();
            if (homePageTitleName == "Phoenix Data Manager") {
                console.log("Title of Home Page is found" + homePageTitleName);
                return true;
            }
            else {
                console.log("Title of home page is not found");
                return false;
            }
        });
    }
    launchApplication() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.manage().window().maximize().then(function () {
                protractor_1.browser.get('https://phoenix-test.businessonetech.net/')
                    .then(() => (console.log('Test')));
            });
        });
    }
    checkAvailabiltyOfMenuItems() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.listOfMenuElement.getWebElements().then(function (webElements) {
                if (webElements.length == 7) {
                    console.log("Number of meny items is " + webElements.length.toString);
                    return true;
                }
                else {
                    return false;
                }
            });
            return true;
        });
    }
    ClickOnOragnasization() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var Menu = this.ClickOnMenu();
                yield this.OrganizationLink.getText().then(function (text) {
                    console.log("Menu Name is " + text);
                    if (text == "Organizations") {
                        console.log("found name== " + text);
                    }
                });
                yield this.OrganizationLink.click().then(function () {
                    console.log("clicked on oraganization ");
                    protractor_1.browser.sleep(10000);
                });
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("click on menu button methos");
            protractor_1.browser.sleep(5000);
            yield this.menuButton.click().then(function () {
                console.log("after click on menu button ");
                protractor_1.browser.sleep(5000);
                return true;
            });
            return true;
        });
    }
    ClickOnPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("ClickOnPlan");
            protractor_1.browser.sleep(10000);
            yield this.PlanLink.getText().then(function (text) {
                console.log("Menu Name is " + text);
                if (text == "Plans") {
                    console.log("found name== " + text);
                }
            });
            yield this.PlanLink.click().then(function () {
                console.log("cleckiked on PlanLink ");
                protractor_1.browser.sleep(10000);
            });
            return true;
        });
    }
    ClickOnProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("ClickOnProducts");
                protractor_1.browser.sleep(10000);
                yield this.ProductsLink.getText().then(function (text) {
                    console.log("Menu Name is " + text);
                    if (text == "Products") {
                        console.log("found name== " + text);
                        protractor_1.browser.sleep(10000);
                    }
                });
                yield this.ProductsLink.click().then(function () {
                    console.log("cleckiked on ProductsLink ");
                });
                return true;
            }
            catch (e) {
                console.log("Exception" + e);
                return false;
            }
        });
    }
    ClickOnFormularies() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(5000);
            yield this.FormulariesLink.getText().then(function (text) {
                console.log("Menu Name is " + text);
                if (text == "Formularies") {
                    console.log("found name== " + text);
                }
            });
            yield this.FormulariesLink.click().then(function () {
                console.log("cleckiked on ForulariesLink ");
                protractor_1.browser.sleep(10000);
            });
            return true;
        });
    }
    ClickOnCoveragePolicies() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(5000);
            yield this.CoveragePoliciesLink.getText().then(function (text) {
                console.log("Menu Name is " + text);
                if (text == "Coverage Policies") {
                    console.log("found name== " + text);
                }
            });
            yield this.CoveragePoliciesLink.click().then(function () {
                console.log("cleckiked on CoveragePoliciesLink ");
                protractor_1.browser.sleep(10000);
            });
            return true;
        });
    }
    ClickOnAdminstration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AdminstationLink.getText().then(function (text) {
                console.log("Menu Name is " + text);
                if (text == "Administration") {
                    console.log("found name== " + text);
                    return true;
                }
            });
            yield this.AdminstationLink.click().then(function () {
                console.log("cleckiked on Administration ");
                protractor_1.browser.sleep(10000);
            });
            return true;
        });
    }
}
exports.HomePage = HomePage;
