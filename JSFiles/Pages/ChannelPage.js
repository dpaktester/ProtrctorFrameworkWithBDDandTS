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
exports.ChannelPage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
class ChannelPage {
    constructor() {
        this.channelLink = protractor_1.element(protractor_1.by.xpath("//a[@href='/administration/channels']"));
        this.channelHeaderElement = protractor_1.element(protractor_1.by.xpath("//div[@id = 'channelGridViewContainer']//h1[@class='grid-header']"));
        this.tableCount = protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr"));
        this.placeHolderElement = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Search']"));
        this.recordListTable = protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr//td[2]"));
        this.detailCount = protractor_1.element.all(protractor_1.by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
    }
    verifyChannelHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = false;
                let isPresent = yield this.channelHeaderElement.isPresent();
                if (isPresent) {
                    let txtHeader = yield this.channelHeaderElement.getText();
                    if (txtHeader.trim() == 'Channels') {
                        result = true;
                    }
                }
                return result;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    compareHeaderNames() {
        return __awaiter(this, void 0, void 0, function* () {
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    getTheColumnNames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var value = yield this.tableCount.all(protractor_1.by.tagName("th")).count();
                console.log(value);
                var headerNames = prop.GetPropertyValue("CHANNEL_HEADER_NAMES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.tableCount.all(protractor_1.by.tagName("th"));
                for (var i = 1; i <= value; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
                    headerActualArray[i] = textname.trim();
                }
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    enetrTextInSearchBox() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            console.log("in search Box");
            let isPresent = yield this.placeHolderElement.isPresent();
            console.log("in search Box1", isPresent);
            if (isPresent) {
                yield this.placeHolderElement.sendKeys(prop.GetPropertyValue("SEARCH_IN_CHANNEL"));
                result = true;
            }
            return result;
        });
    }
    verifySearchText() {
        return __awaiter(this, void 0, void 0, function* () {
            let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[1]//td[2]")).getText();
            console.log("textname", textname);
            if (textname.trim().toLocaleLowerCase() == prop.GetPropertyValue("SEARCH_IN_CHANNEL").trim().toLocaleLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickOnChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.element(protractor_1.by.xpath("//table//tr[1]//td[2]//a")).click().then(function () {
                    console.log("Click On channel");
                    protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                });
                return true;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    verifyDetailPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var headerNames = prop.GetPropertyValue("CHANNEL_HEADER_NAMES_IN_DETAIL");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    detailheaderExpectedArray[i] = eachHeaderNames[i].trim();
                }
                let size = yield this.detailCount.count();
                console.log("size of headers in details view", size);
                for (let i = 1; i <= size; i++) {
                    let headerName = yield protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted'][" + i + "]")).getText();
                    detailheaderActualArray[i] = headerName.trim();
                }
                let missing = detailheaderActualArray.filter(item => detailheaderExpectedArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    yield this.channelLink.click().then(function () {
                        protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                    });
                    return true;
                }
                else {
                    yield this.channelLink.click().then(function () {
                        protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                    });
                    return false;
                }
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
}
exports.ChannelPage = ChannelPage;
