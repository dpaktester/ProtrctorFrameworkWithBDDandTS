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
exports.AgentsPage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let agentName;
let helper = new Helper_1.Helper();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
class AgentsPage {
    constructor() {
        this.recordStatusElement = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']//button"));
        this.agentTypeListTable = protractor_1.element.all(protractor_1.by.xpath("//table//tr//td[4]"));
        this.applyButton = protractor_1.element(protractor_1.by.xpath("//*[@type= 'submit']"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//*[@class='app-button'][2]"));
        this.newPageHeaderElement = protractor_1.element(protractor_1.by.xpath("//h1[@class='cdk-drag-handle dialog-heading']"));
        this.newButton = protractor_1.element(protractor_1.by.xpath("//*[@class='app-add-button']"));
        this.fromDetailToMainGrigAgentLnk = protractor_1.element(protractor_1.by.xpath("//a[@href='/administration/agents']"));
        this.firstRowOfHistoryTAB = protractor_1.element(protractor_1.by.xpath("//table[@id = 'grid']//tbody//tr[1]/td[1]/span"));
        this.agentHeaderElement = protractor_1.element(protractor_1.By.xpath("//*[name()='app-agents']/div/div[1]/div[1]/app-global-grid-header/div/h1"));
        this.tableCount = protractor_1.element.all(protractor_1.By.xpath("//table[@id = 'grid']//tr"));
        this.firstAgentNameElement = protractor_1.element(protractor_1.By.xpath("//table//tr[1]//td[2]"));
        this.detailPageFirstElement = protractor_1.element(protractor_1.By.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted'][1]"));
        this.mainInforamtionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.deatilOverviewTAB = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-list']//*[@class='mat-tab-links']/a[1]"));
        this.detailCount = protractor_1.element.all(protractor_1.by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
        this.linkTABElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.historyTABElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.OverviewTABElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[1]"));
        this.linkTabFirstHeader = protractor_1.element(protractor_1.by.xpath("//table[@id = 'grid']//tr/th[1]/div/button/a"));
        this.editAgentElement = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/h1/img"));
        this.editAgentHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='cdk-drag agent modal-container ng-star-inserted']/h1/span"));
        this.agentNameLabelElement = protractor_1.element(protractor_1.by.xpath("//*[@id='name']//../span/label/span[1]"));
        this.agentDescriptionLabelElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-input-1']//../span/label/span"));
        this.newagentDescriptionLabelElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Description']//../span/label/span"));
        this.agenetAgentTypeLabelElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-form-field-label-7']/span[1]"));
        this.newagenetAgentTypeLabelElelemnt = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span"));
        this.agenetURLRootLabelElelemnt = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-input-2']//../span/label/span[1]"));
        this.newagenetURLRootLabelElelemnt = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-url-input/mat-form-field/div/div[1]/div/span/label/span[1]"));
        this.agentSaveButton = protractor_1.element(protractor_1.by.xpath("//*[@type='submit']/span"));
        this.completeStatuElement = protractor_1.element(protractor_1.by.xpath("//*[@id='completeDataChanges']"));
        this.inputDecriptionElelemt = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Description']"));
        this.continueButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.approveButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='approveDataChanges']"));
        this.rejectButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='rejectDataChanges']"));
        this.recordStatus = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Approved')]"));
        this.recordStatusModified = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Modified')]"));
        this.recordStatusNew = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'New')]"));
        this.inputAgentName = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Agent Name']"));
        this.inputAgentType = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.inputAgentTypeElement = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.inputURLRootName = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-url-input/mat-form-field/div/div[1]/div/input"));
        this.addagentName = protractor_1.element(protractor_1.by.xpath("//*[@id='addAgentForm']/form/div/app-form-submit-button/button"));
        this.agentTypeFilterElement = protractor_1.element(protractor_1.by.xpath("//*[@id='agentTypeFilter']/button"));
        this.agentTypeFilterHeaderElement = protractor_1.element(protractor_1.by.xpath("//*[@class='cdk-drag-handle dialog-heading headerLabel']"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
    }
    VerifyUserInAgentPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.agentHeaderElement.getText().then(function (text) {
                if (text === "Agents") {
                    return true;
                }
                else {
                    return false;
                }
            });
            return result;
        });
    }
    getTheColumnNamesForAgnets() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Get number of columns ");
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                console.log(value);
                var headerNames = prop.GetPropertyValue("AGENT_HEADERNAMES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.tableCount.all(protractor_1.By.tagName("th"));
                for (var i = 1; i <= value; i++) {
                    let textname = yield protractor_1.element(protractor_1.By.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
                    headerActualArray[i] = textname.trim();
                }
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    compareHeaderNamesForAgents() {
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
    clickOnOneOfAgent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let present = yield this.firstAgentNameElement.isPresent();
                if (present) {
                    agentName = yield this.firstAgentNameElement.getText();
                    console.log("First Element is clicked agentName" + agentName);
                    yield this.firstAgentNameElement.click().then(function () {
                        console.log("First Element is clicked");
                    });
                    return true;
                }
                else {
                    console.log("First element is not present");
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured" + e);
                return false;
            }
        });
    }
    VerfiyDetailPageWithHeaderName() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("VerfiyDetailPageWithHeaderName");
                let waitForelemnet = helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
                if (waitForelemnet) {
                    console.log("Found Mian Information");
                    return true;
                }
                else {
                    console.log("Not Found Mian Information");
                    return false;
                }
                return true;
            }
            catch (e) {
                console.log("Exception occoured while checking detail page header");
                return false;
            }
        });
    }
    verifyDetailPageHeaderCount() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
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
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    ClickOnLinkTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.linkTABElelemnt.isPresent()) {
                yield this.linkTABElelemnt.click();
                return true;
            }
            else {
                return false;
            }
        });
    }
    verifyLinkdetailsTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                helper.waitForTexttoAppear(this.linkTabFirstHeader, "ID");
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                console.log("value", value);
                if (Number(value) > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                return false;
            }
        });
    }
    clickOnOverviewTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.OverviewTABElelemnt.isPresent()) {
                yield this.OverviewTABElelemnt.click();
                return true;
            }
            else {
                return false;
            }
        });
    }
    ClickOnEditButton() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Clicking on edit button for agent");
            let result = yield this.editAgentElement.click();
            let waitForElement = helper.waitForTexttoAppear_1(this.editAgentHeader, "Edit Agent");
            if (waitForElement) {
                console.log("Edit Agent title found");
                return true;
            }
            else {
                console.log("Edit Agent title not found");
                return false;
            }
        });
    }
    checkDataHeadingInEditAgentPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Now checking heading in the Edit agent page");
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                console.log("Now checking heading in the Edit agent page 123");
                let txtagentNameLabelElement = yield this.agentNameLabelElement.getText();
                console.log("frist header name", txtagentNameLabelElement);
                console.log("Now checking heading in the Edit agent page 1234");
                let txtagentDescriptionLabelElelemnt = yield this.agentDescriptionLabelElelemnt.getText();
                console.log(txtagentDescriptionLabelElelemnt);
                console.log("Now checking heading in the Edit agent page 12345");
                let txtagenetAgentTypeLabelElelemnt = yield this.agenetAgentTypeLabelElelemnt.getText();
                console.log(txtagenetAgentTypeLabelElelemnt);
                let txtagenetURLRootLabelElelemnt = yield this.agenetURLRootLabelElelemnt.getText();
                console.log(txtagenetURLRootLabelElelemnt);
                actuallabelArray.push(txtagentNameLabelElement);
                actuallabelArray.push(txtagentDescriptionLabelElelemnt);
                actuallabelArray.push(txtagenetAgentTypeLabelElelemnt);
                actuallabelArray.push(txtagenetURLRootLabelElelemnt);
                var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    expectedlabelArray[i] = eachHeaderNames[i].trim();
                }
                let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    editDecritptionInAgent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(5000);
                console.log("Enter the Description");
                yield this.inputDecriptionElelemt.clear();
                console.log("Enter the Description1");
                yield this.inputDecriptionElelemt.sendKeys("TestEdit");
                console.log("Enter the Description2");
                yield this.agentSaveButton.click();
                console.log("Enter the Description3");
                return true;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    verifyCompleteButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = helper.waitForTexttoAppear_1(this.completeStatuElement, "Complete");
            if (result) {
                console.log("Record status is mordified");
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickOnCompleteButton() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click On complete button");
            let resultContinueButton = yield this.completeStatuElement.click().then(function () {
                console.log("Click On complete button clicked");
                return true;
            });
            console.log("Click On Continue button");
            if (resultContinueButton) {
                console.log("Going Click On Continue button");
                let result = this.continueButtonElement.click().then(function () {
                    console.log("Click On Continue button clicked");
                    return true;
                });
                return result;
            }
            else {
                return resultContinueButton;
            }
        });
    }
    verifyApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let reuslt = helper.waitForTexttoAppear_1(this.approveButtonElement, "Approve");
            if (reuslt) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickOnApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let clickresult = this.approveButtonElement.click().then(function () {
                return true;
            });
            console.log("Click On Continue button");
            if (clickresult) {
                console.log("Going Click On Continue button");
                let result = this.continueButtonElement.click().then(function () {
                    console.log("Click On Continue button clicked");
                    return true;
                });
                return result;
            }
            else {
                return clickresult;
            }
        });
    }
    verifyRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            let reuslt = helper.waitForTexttoAppear_1(this.recordStatus, "Approved");
            if (reuslt) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickOnRejectButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let clickresult = this.rejectButtonElement.click().then(function () {
                return true;
            });
            console.log("Click On Reject button");
            if (clickresult) {
                console.log("Going Click On  button");
                let result = this.continueButtonElement.click().then(function () {
                    console.log("Click On Continue button clicked");
                    return true;
                });
                return result;
            }
            else {
                return clickresult;
            }
        });
    }
    verifyRecordStatusForModified() {
        return __awaiter(this, void 0, void 0, function* () {
            let reuslt = helper.waitForTexttoAppear_1(this.recordStatusModified, "Modified");
            if (reuslt) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickOnHistoryTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = this.historyTABElelemnt.click().then(function () {
                console.log("Clicked On hIstory TAB");
                return true;
            });
            return result;
        });
    }
    verifyHistoryTABDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = this.firstRowOfHistoryTAB.getText().then(function (txt) {
                console.log("txt", txt);
                if (txt.includes("Approved")) {
                    return false;
                }
                else {
                    return true;
                }
            });
            return true;
        });
    }
    moveToAgentMainGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = this.fromDetailToMainGrigAgentLnk.click().then(function () {
                console.log("Clicked to move the agent main grid");
                return true;
            });
            if (result) {
                let reuslt1 = helper.waitForTexttoAppear_1(this.agentHeaderElement, "Agents");
                console.log("Lohin to main grid");
                let result = yield this.agentHeaderElement.getText().then(function (text) {
                    if (text.trim() === "Agents".trim()) {
                        console.log("Lohin to main grid");
                        return true;
                    }
                    else {
                        console.log("Failed Lohin to main grid Failed");
                        return false;
                    }
                });
            }
            else {
                return false;
            }
            return true;
        });
    }
    clickOnNewButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.newButton.click();
            let newAgentHeader = this.newPageHeaderElement.getText().then(function (txt) {
                if (txt.trim() == " New Agent ".trim()) {
                    return true;
                }
                else {
                    return false;
                }
            });
            return newAgentHeader;
        });
    }
    verifyNewAgentPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Now checking heading in the Edit agent page");
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                console.log("Now checking heading in the Edit agent page 123");
                let txtagentNameLabelElement = yield this.agentNameLabelElement.getText();
                console.log(txtagentNameLabelElement);
                let txtagentDescriptionLabelElelemnt = yield this.agentDescriptionLabelElelemnt.getText();
                console.log(txtagentDescriptionLabelElelemnt);
                let txtagenetAgentTypeLabelElelemnt = yield this.agenetAgentTypeLabelElelemnt.getText();
                console.log(txtagenetAgentTypeLabelElelemnt);
                let txtagenetURLRootLabelElelemnt = yield this.agenetURLRootLabelElelemnt.getText();
                console.log(txtagenetURLRootLabelElelemnt);
                actuallabelArray.push(txtagentNameLabelElement);
                actuallabelArray.push(txtagentDescriptionLabelElelemnt);
                actuallabelArray.push(txtagenetAgentTypeLabelElelemnt);
                actuallabelArray.push(txtagenetURLRootLabelElelemnt);
                var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    expectedlabelArray[i] = eachHeaderNames[i].trim();
                }
                let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("exception", e);
                return false;
            }
        });
    }
    enetrsAgentDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let Number = helper.RandomNumber();
                let StringNumber = (yield Number).toString();
                let temp1 = yield this.inputAgentName.sendKeys("TestAgent" + StringNumber);
                console.log("enetr the agent Name");
                let temp0 = yield this.inputAgentType.click();
                console.log("enetr the agent Name");
                let temp2 = yield this.inputAgentTypeElement.click();
                console.log("enetr the inputAgentTypeElement Name");
                let temp3 = yield this.inputURLRootName.sendKeys("URL.com");
                console.log("enetr the inputURLRootName Name");
                let temp4 = yield this.addagentName.click();
                return true;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    VerifyAgentIsSaved() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let reuslt = helper.waitForTexttoAppear_1(this.recordStatusNew, "New");
                if (reuslt) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Excaption accoured", e);
                return false;
            }
        });
    }
    clickOnAgentType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isClicked = yield this.agentTypeFilterElement.click().then(function () {
                    console.log("Agnet type filter is clicked");
                    console.log("Agnet type filter is clicked12345");
                    return true;
                });
                return isClicked;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    verifyAgentTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Agent Type Count", lengthValue);
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    actuallabelArray[i] = textname;
                }
                var headerNames = prop.GetPropertyValue("AGENT_TYPES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    expectedlabelArray[i] = eachHeaderNames[i].trim();
                }
                let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured", e);
            }
        });
    }
    verifyAgentTypeFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Agnet the header verified");
                console.log("Verify header of the record status");
                helper.waitForTexttoAppear(this.agentTypeFilterHeaderElement, "Agent Types");
                let headerText = yield this.agentTypeFilterHeaderElement.getText();
                if (headerText.trim() == "Agent Types") {
                    return true;
                }
                else {
                    return false;
                }
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    selectOnOfAgentTypeOption() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Agent Type Count---", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    if (textname.trim() == prop.GetPropertyValue("AGENT_TYPE_FILTER_OPTION").trim()) {
                        let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).click();
                    }
                }
                return true;
            }
            catch (e) {
                console.log("Exception accoured in the agent type filter");
                return false;
            }
        });
    }
    clickOnApplyButton() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = this.applyButton.click().then(function () {
                return true;
            });
            return result;
        });
    }
    verifyGridWithSelectedAgentType() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display Based on reocrd type");
            let checkCount = 0;
            helper.waitForTexttoAppear(this.agentTypeFilterElement, " Agent Types (1)");
            let lengthValue = yield this.agentTypeListTable.count();
            console.log("Agent Type Table  Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[" + i + "]//td[4]")).getText();
                if (textname.trim() == prop.GetPropertyValue("AGENT_TYPE_FILTER_OPTION").trim()) {
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
    deselectTheSelectedAgentTypeOption() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("De select the selected option");
            let lengthValue = yield this.recordListCheckBox.count();
            console.log("record Type Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).isSelected();
                if (textname == true) {
                    yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]" + "//label/input")).click();
                }
            }
            yield this.applyButton.click().then(function () {
            });
            helper.waitForTexttoAppear(this.agentTypeFilterElement, "Agent Types");
            return true;
        });
    }
    verifyForAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display All reord Type");
            let checkCount = 0;
            let lengthValue = yield this.agentTypeListTable.count();
            console.log("agent Type Table  Count-------", lengthValue);
            console.log("agent Type Table  Count", typeof lengthValue);
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
    selectOneAgentTypeAndClickCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            let isClicked = yield protractor_1.element(protractor_1.by.xpath("//*[@id='agentTypeFilter']/button/span")).click().then(function () {
                console.log("Agnet type filter is clicked");
                console.log("Agnet type filter is clicked12345");
                return true;
            });
            yield this.cancelButton.click();
            return true;
        });
    }
    clickOnRecordStatusFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let clicked = this.recordStatusElement.click().then(function () {
                    console.log("reocrd status clicked");
                    return true;
                });
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyAllStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Agent Status Count", lengthValue);
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    actuallabelArray[i] = textname.trim();
                }
                var headerNames = prop.GetPropertyValue("AGENT_RECORD_STATUS");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    expectedlabelArray[i] = eachHeaderNames[i].trim();
                }
                let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyAgentStatusFilterHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Verify header of the record status");
                helper.waitForTexttoAppear(this.agentTypeFilterHeaderElement, "Record Status");
                let headerText = yield this.agentTypeFilterHeaderElement.getText();
                if (headerText.trim() == "Record Status") {
                    return true;
                }
                else {
                    return false;
                }
                return true;
            }
            catch (e) {
                console.log("Exception accoured in Header", e);
            }
        });
    }
    selectAgentStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Agent status Count---", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    if (textname.trim() == prop.GetPropertyValue("AGENT_STAUS_FILTER_OPTION").trim()) {
                        let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).click();
                    }
                }
                return true;
            }
            catch (e) {
                console.log("Exception accoured in the agent type filter");
                return false;
            }
        });
    }
    verifyAgentStatusOnGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Checking display Based on reocrd status");
            let checkCount = 0;
            helper.waitForTexttoAppear(this.recordStatusElement, "Record Status (1)");
            let lengthValue = yield this.agentTypeListTable.count();
            console.log("Agent Status Table  Count", lengthValue);
            for (let i = 1; i <= lengthValue; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[" + i + "]//td[6]")).getText();
                if (textname.trim() == prop.GetPropertyValue("AGENT_STAUS_FILTER_OPTION").trim()) {
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
}
exports.AgentsPage = AgentsPage;
