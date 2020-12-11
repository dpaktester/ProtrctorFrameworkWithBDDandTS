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
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
class LoginPage {
    constructor() {
        this.changeLogoutTitle = protractor_1.element(protractor_1.by.xpath("//div[@class='col-6']//h1//small"));
        this.logoutTitle = protractor_1.element(protractor_1.by.xpath("//div[@class='connect-page-header']/h1"));
        this.logout = protractor_1.element(protractor_1.by.xpath("//div[@class='dropdown-menu-right dropdown-menu show']/button"));
        this.acctmenu = protractor_1.element(protractor_1.by.xpath("//button[@id='accountMenu']"));
        this.loginButton = protractor_1.element(protractor_1.by.xpath("//button[@class='app-button']"));
        this.userNameTxtBox = protractor_1.element(protractor_1.by.xpath("//input[@id='Username']"));
        this.passwordTxtBoc = protractor_1.element(protractor_1.by.xpath("//input[@id='Password']"));
        this.login = protractor_1.element(protractor_1.by.xpath("//button[@value='login']"));
        this.userName = protractor_1.element(protractor_1.by.css("div[class='user-name']"));
    }
    verifyLogout() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var result = false;
                yield this.changeLogoutTitle.getText().then(function (text) {
                    if (text.trim() == "You are now logged out.".trim()) {
                        result = true;
                    }
                    else {
                        result = false;
                    }
                });
                return result;
            }
            catch (e) {
                return false;
            }
        });
    }
    clickOnAcctMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.acctmenu.click().then(function () {
                    console.log("ICliked on account menu ");
                    protractor_1.browser.sleep(5000);
                });
                yield this.logout.click().then(function () {
                    console.log("clicked loggout");
                    protractor_1.browser.sleep(5000);
                });
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyUserName() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(10000);
                var verified = false;
                yield this.userName.getText().then(function (text) {
                    var userdisplayname = prop.GetPropertyValue("USER_DISPLAYNAME");
                    if (text.trim() == userdisplayname.trim()) {
                        verified = true;
                    }
                    else {
                        verified = false;
                    }
                });
                return verified;
            }
            catch (e) {
                console.log("exception accoured");
                return false;
            }
        });
    }
    clickOnLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginButton.click().then(function () {
                console.log("click on Login button ");
                return true;
            });
            return true;
        });
    }
    entercredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("enter the credentials");
            const Cryptr = require('cryptr');
            const cryptr = new Cryptr('myTotalySecretKey');
            const decryptedString = yield cryptr.decrypt(prop.GetPropertyValue("PASSWORD"));
            console.log("after decrypt");
            yield this.userNameTxtBox.sendKeys(prop.GetPropertyValue("USERNAME")).then(function () {
            });
            yield this.login.click().then(function () {
                protractor_1.browser.sleep(5000);
            });
            yield this.passwordTxtBoc.sendKeys(decryptedString).then(function () {
                protractor_1.browser.sleep(5000);
            });
            yield this.login.click().then(function () {
            });
            return true;
        });
    }
}
exports.LoginPage = LoginPage;
