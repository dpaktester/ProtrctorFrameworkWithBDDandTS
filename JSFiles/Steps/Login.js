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
const cucumber_1 = require("cucumber");
const chai_1 = require("chai");
const LoginPage_1 = require("../Pages/LoginPage");
let loginPage = new LoginPage_1.LoginPage();
cucumber_1.Given('user is logged in to the Application', function () {
    chai_1.assert.equal(true, true);
});
cucumber_1.When('user clicks on the Account Name Dropdown and clicks Logout', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield loginPage.clickOnAcctMenu();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should be able to log out from the Phoenix Application.', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield loginPage.verifyLogout();
        chai_1.assert.equal(result, true);
    });
});
