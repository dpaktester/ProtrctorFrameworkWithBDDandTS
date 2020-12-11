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
exports.Helper = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class Helper {
    static Log() {
        var log4js = require('log4js');
        log4js.configure('./log4js.json');
        let log = log4js.getLogger("default");
        return log;
    }
    RandomNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            var newData = [];
            var size = 100;
            var baseSize = 0;
            let Number = Math.floor(Math.random() * 100000).toString().substring(0, 5);
            console.log("RandomNumber ", Number);
            return Number;
        });
    }
    PressBackButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().back();
            return true;
        });
    }
    waitForTexttoAppear(ele, textString) {
        var EC = ptor_1.protractor.ExpectedConditions;
        console.log("Text To Be Searched", textString);
        console.log("Text To Be Searched wait", textString);
        protractor_1.browser.wait(function () {
            return ele.getText().then(function (text) {
                return text.trim() === textString.trim();
            });
        }, 30000);
    }
    waitForTexttoAppear_1(ele, textString) {
        var EC = ptor_1.protractor.ExpectedConditions;
        console.log("Text To Be Searched", textString);
        console.log("Text To Be Searched wait", textString);
        let result = protractor_1.browser.wait(function () {
            return ele.getText().then(function (text) {
                return text.trim() === textString.trim();
            });
        }, 40000);
        return result;
    }
}
exports.Helper = Helper;
