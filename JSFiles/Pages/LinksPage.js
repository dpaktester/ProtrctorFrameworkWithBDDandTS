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
exports.LinksPage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
var helper = new Helper_1.Helper();
let linkCode = " ";
class LinksPage {
    constructor() {
        this.recordStatusModified = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Modified')]"));
        this.completeStatuElement = protractor_1.element(protractor_1.by.xpath("//*[@id='completeDataChanges']"));
        this.agentSaveButton = protractor_1.element(protractor_1.by.xpath("//*[@type='submit']/span"));
        this.inputLinkName = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Name']"));
        this.editPageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='cdk-drag-handle dialog-heading ng-star-inserted']/span"));
        this.editButton = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item']/h1/img"));
        this.detailLinkCode = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item']//p[2]"));
        this.homeButton = protractor_1.element(protractor_1.by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][1]//div[2]/a/span"));
        this.menuButton = protractor_1.element(protractor_1.by.xpath("//*[name()='mat-toolbar-row']//div/button/i"));
        this.tableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.recordTypeBtn = protractor_1.element(protractor_1.by.xpath("//*[@id ='recordTypes']/button/span"));
        this.recordTypeDDeselectBtn = protractor_1.element(protractor_1.by.xpath("//*[@id= 'recordTypes']/button"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//ul[@class = 'checkboxes']//li"));
        this.applyButton = protractor_1.element(protractor_1.by.xpath("//*[@type= 'submit']"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Cancel')]"));
        this.recordListTable = protractor_1.element.all(protractor_1.by.xpath("//table//tr//td[4]"));
        this.contentListTable = protractor_1.element.all(protractor_1.by.xpath("//table//tr//td[6]"));
        this.homePageVersion = protractor_1.element(protractor_1.by.xpath("//*[name()='app-version-label']//*[@class='version-info']"));
        this.contentTypeBtn = protractor_1.element(protractor_1.by.xpath("//*[@id ='contentTypes']/button/span"));
        this.contentTypeDDeselectBtn = protractor_1.element(protractor_1.by.xpath("//*[@id= 'contentTypes']/button"));
        this.statusTypeBtn = protractor_1.element(protractor_1.by.xpath("//*[@id ='recordStatus']/button/span"));
        this.statusTypeDDeselectBtn = protractor_1.element(protractor_1.by.xpath("//*[@id= 'recordStatus']/button"));
    }
    verifyOnLinkPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
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
                console.log('object1: %O', missing);
                return false;
            }
        });
    }
    getTheColumnNames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                var headerNames = prop.GetPropertyValue("LINKS_HEADER_NAMES");
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
    clickAndSelectRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on status Type and sleect Status");
            try {
                yield this.recordTypeBtn.click().then(function () {
                    console.log(" Record status List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    verifyDisplayBasedRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display Based on reocrd type");
            let checkCount = 0;
            helper.waitForTexttoAppear(this.recordTypeDDeselectBtn, " Record Types (1)");
            let lengthValue = yield this.recordListTable.count();
            console.log("record Type Table  Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[" + i + "]//td[4]")).getText();
                if (textname.trim() == prop.GetPropertyValue("LINKS_RECORD_TYPE").trim()) {
                    checkCount = checkCount + 1;
                }
            }
            if (checkCount == lengthValue) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    deselectSelectedOptionClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("deslect the Reocord Type seleted options");
                yield this.recordTypeDDeselectBtn.click().then(function () {
                    console.log(" des select status status List");
                });
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Type Count", lengthValue);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
                helper.waitForTexttoAppear(this.recordTypeBtn, "Record Types");
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    verifyForAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display All reord Type");
            let checkCount = 0;
            let lengthValue = yield this.recordListTable.count();
            console.log("record Type Table  Count-------", lengthValue);
            console.log("record Type Table  Count", typeof lengthValue);
            if (Number(lengthValue) > 0) {
                console.log("its true");
                return true;
            }
            else {
                console.log("its false");
                return false;
            }
        });
    }
    selectRecordTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on Reocrd Type and sleect Reocrd for cancel");
            try {
                yield this.recordTypeBtn.click().then(function () {
                    console.log("Record TYpe Button List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.cancelButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    clickOnRecordTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(2000);
                console.log("verify ReordType For Cancel");
                yield this.recordTypeDDeselectBtn.click().then(function () {
                    console.log(" des ReordType For Cancel ");
                });
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    verifyRecordTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            let selectedCount = 0;
            console.log("sssss");
            let lengthValue = 0;
            lengthValue = yield this.recordListCheckBox.count();
            console.log("record Type Count for cancel ", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).isSelected();
                if (textname == true) {
                    selectedCount = selectedCount + 1;
                }
            }
            yield this.cancelButton.click().then(function () {
            });
            if (selectedCount == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickAndSelectContactType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on Contact Type and sleect Status");
            try {
                yield this.contentTypeBtn.click().then(function () {
                    console.log(" Contact status List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    verifyDisplayBasedContentType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display Based on content type");
            helper.waitForTexttoAppear(this.contentTypeDDeselectBtn, " Content Types (1)");
            let checkCount = 0;
            let lengthValue = yield this.contentListTable.count();
            console.log("content Type Table  Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[" + i + "]//td[6]")).getText();
                if (textname.trim() == prop.GetPropertyValue("LINKS_DISPLAY_TYPE").trim()) {
                    checkCount = checkCount + 1;
                }
            }
            console.log("content Type Table  Count,checkCount ", checkCount);
            if (checkCount == lengthValue) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    deselectSelectedContentOptionClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("deslect the seleted options for content");
                yield this.contentTypeDDeselectBtn.click().then(function () {
                    console.log(" des select status status List");
                });
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Type Count", lengthValue);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
                helper.waitForTexttoAppear(this.contentTypeBtn, " Content Types");
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    selectContentTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on content Type and sleect Reocrd for cancel");
            try {
                yield this.contentTypeBtn.click().then(function () {
                    console.log(" Conetnt status List");
                });
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Type Count", lengthValue);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.cancelButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    clickOnContentTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(2000);
                console.log("verify Content For Cancel");
                yield this.contentTypeDDeselectBtn.click().then(function () {
                    console.log(" des ReordType For Cancel ");
                });
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    clickAndSelectStatusType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on Status Type and sleect Status");
            try {
                yield this.statusTypeBtn.click().then(function () {
                    console.log(" status Type status List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    verifyDisplayBasedStatusType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display Based on status type");
            helper.waitForTexttoAppear(this.statusTypeDDeselectBtn, " Record Status (1)");
            let checkCount = 0;
            let lengthValue = yield this.contentListTable.count();
            console.log("status Type Table  Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[" + i + "]//td[7]")).getText();
                if (textname.trim() == prop.GetPropertyValue("LINKS_STATUS_TYPE").trim()) {
                    checkCount = checkCount + 1;
                }
            }
            if (checkCount == lengthValue) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    deselectSelectedStatusOptionClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("deslect the seleted status options");
                yield this.statusTypeDDeselectBtn.click().then(function () {
                    console.log(" des select status status List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.applyButton.click().then(function () {
                });
                helper.waitForTexttoAppear(this.statusTypeBtn, "Record Status");
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    selectStatusTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click on content Type and sleect Reocrd for cancel");
            try {
                yield this.statusTypeBtn.click().then(function () {
                    console.log("status List");
                });
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                yield this.cancelButton.click().then(function () {
                });
            }
            catch (Exception) {
                console.log("Exception accoured");
                return false;
            }
            return true;
        });
    }
    clickOnStatusTypeForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(2000);
                console.log("verify Content For Cancel");
                yield this.statusTypeDDeselectBtn.click().then(function () {
                    console.log(" des ReordType For Cancel ");
                });
                return true;
            }
            catch (Exception) {
                return false;
            }
        });
    }
    clickOnHome() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let returnResult = yield this.menuButton.click().then(function () {
                    console.log("click on menu button  from Link Page1234");
                    return true;
                });
                console.log("returnResult", returnResult);
                if (returnResult == true) {
                    console.log("returnResult12342", returnResult);
                    this.homeButton.click().then(function () {
                        console.log("click on Home button ");
                    });
                }
                return returnResult;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    verifyUserInHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = false;
                helper.waitForTexttoAppear(this.homeButton, "Home");
                yield this.homePageVersion.getText().then(function (text) {
                    console.log("text", text);
                    if ((text.trim()).includes(prop.GetPropertyValue("VERSION_INFO").trim())) {
                        console.log("version matches");
                        result = true;
                    }
                    else {
                        result = false;
                    }
                });
                return result;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    clickOnOneOfTheLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCount = yield protractor_1.element(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/td[3]")).click().then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        linkCode = yield protractor_1.element(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/td[3]")).getText();
                        console.log("Clicked on one of the Link");
                        return true;
                    });
                });
                if (tempCount) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured when its click on First Link");
                return false;
            }
        });
    }
    verifyLinkDetailPageWithCode() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("linkCode", linkCode);
                let detailsPage = yield this.detailLinkCode.getText();
                console.log("detailsPage", detailsPage);
                if (detailsPage.trim() == linkCode.trim()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured");
                return false;
            }
        });
    }
    verifyUserIndetailspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.editButton.isPresent();
                if (result) {
                    yield this.editButton.click();
                }
                return result;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyClickOnEditButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.editButton.click().then(function () {
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    verifyEditPageIsDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            let title = yield this.editPageTitle.getText();
            if (title.trim() == "Edit Link") {
                return true;
            }
            else {
                return false;
            }
        });
    }
    updateLinkname() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.inputLinkName.clear();
                console.log("Enter the inputLinkName");
                yield this.inputLinkName.sendKeys("TestEdit");
                console.log("Enter the Description2");
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    userClickOnSaveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.agentSaveButton.click();
                console.log("Enter the Description3");
                let result = yield helper.waitForTexttoAppear_1(this.completeStatuElement, "Complete");
                if (result) {
                    console.log("Record status is mordified");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured");
                return false;
            }
        });
    }
    verifyLinkIsModified() {
        return __awaiter(this, void 0, void 0, function* () {
            let reuslt = yield helper.waitForTexttoAppear_1(this.recordStatusModified, "Modified");
            if (reuslt) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.LinksPage = LinksPage;
