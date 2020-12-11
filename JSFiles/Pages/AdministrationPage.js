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
exports.AdministrationPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var helper = new Helper_1.Helper();
var prop = new PropertiesFileManager_1.PropertiesFileManager();
class AdministrationPage {
    constructor() {
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.environment = protractor_1.element(protractor_1.by.css("//div[@class='detail-grid-item'][1]/p[2]"));
        this.applicationVersion = protractor_1.element(protractor_1.by.xpath("//div[@class='detail-grid-item'][1]/p[2]"));
        this.administartionHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='admin ali-title']"));
        this.allAdministationHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
        this.agentLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][1]//a[@class='mat-line menu-link nav-link']"));
        this.channelsLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][2]//a[@class='mat-line menu-link nav-link']"));
        this.documentsLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][3]//a[@class='mat-line menu-link nav-link']"));
        this.LinksLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][4]//a[@class='mat-line menu-link nav-link']"));
        this.drugsLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][5]//a[@class='mat-line menu-link nav-link']"));
        this.appVersionLink = protractor_1.element(protractor_1.by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][6]//a[@class='mat-line menu-link nav-link']"));
    }
    verifyAppVersionpage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                console.log("In the App version Page");
                yield this.applicationVersion.getText().then(function (text) {
                    console.log("applicationVersion" + text);
                    if (text.trim() == prop.GetPropertyValue("APPVERSION").trim()) {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    clickOnAppVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.appVersionLink.click().then(function () {
                    protractor_1.browser.sleep(5000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    clickOnDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.drugsLink.click().then(function () {
                    protractor_1.browser.sleep(5000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    clickOnLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.LinksLink.click().then(function () {
                    protractor_1.browser.sleep(10000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    clickOnDocumnets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.documentsLink.click().then(function () {
                    protractor_1.browser.sleep(5000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    clickOnChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.channelsLink.click().then(function () {
                    protractor_1.browser.sleep(5000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    clickOnAgents() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.agentLink.click().then(function () {
                    protractor_1.browser.sleep(5000);
                });
            }
            catch (e) {
                return false;
            }
            return true;
        });
    }
    verifyAdministationpage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(5000);
                yield this.administartionHeader.getText().then(function (text) {
                    if (text == "Administration") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyAgentpage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                console.log("verifyAgentpage");
                protractor_1.browser.sleep(5000);
                yield this.allAdministationHeader.getText().then(function (text) {
                    protractor_1.browser.sleep(5000);
                    console.log("administartionHeader" + text);
                    if (text == "Agents") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Agents  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyChannelspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(5000);
                console.log("verifyChannelspage");
                yield this.allAdministationHeader.getText().then(function (text) {
                    protractor_1.browser.sleep(5000);
                    console.log("administartionHeader" + text);
                    if (text == "Channels") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Channels  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyDocumentspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(5000);
                console.log("verifyDocumentspage");
                yield this.allAdministationHeader.getText().then(function (text) {
                    protractor_1.browser.sleep(5000);
                    console.log("administartionHeader" + text);
                    if (text == "Documents") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Documents  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyLinkspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                console.log("verifyLinkspage");
                yield this.allAdministationHeader.getText().then(function (text) {
                    protractor_1.browser.sleep(5000);
                    console.log("administartionHeader" + text);
                    if (text == "Links") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Links  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyDrugspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                console.log("verifyDrugspage");
                yield this.allAdministationHeader.getText().then(function (text) {
                    protractor_1.browser.sleep(5000);
                    console.log("DeugsPage" + text);
                    if (text == "Drugs") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Drugs  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
}
exports.AdministrationPage = AdministrationPage;
