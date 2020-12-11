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
exports.OrganizationPage = void 0;
const protractor_1 = require("protractor");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
let helper = new Helper_1.Helper();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
let firstOrganizationNameInGrid = "";
let detailTABActualArray = new Array();
let detailTABExpectedArray = new Array();
class OrganizationPage {
    constructor() {
        this.newCreateButtonElement = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Create')]"));
        this.newOrganizationNameElement = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Organization Name']"));
        this.newCreatePageheaderElement = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),' Create a New Organization ')]"));
        this.newButtonElement = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'New')]"));
        this.organizationLinkElement = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Organizations')]"));
        this.continueButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.completeButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='completeDataChanges']"));
        this.approveButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='approveDataChanges']"));
        this.rejectButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='rejectDataChanges']"));
        this.recordStatus = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Approved')]"));
        this.recordStatusModified = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Modified')]"));
        this.recordStatusNew = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'New')]"));
        this.recordStatusApproved = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Approved')]"));
        this.editHeader = protractor_1.element(protractor_1.by.xpath("//h1//span[contains(text(),'Edit')='submit']"));
        this.editButton = protractor_1.element(protractor_1.by.xpath("//h1[contains(text(),'Main Information')]/img"));
        this.editDecriptionElement = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Description']"));
        this.editSaveButton = protractor_1.element(protractor_1.by.xpath("//button[@type='submit']//span"));
        this.overviewTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[1]"));
        this.createButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Create')]"));
        this.inputPlanName = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Plan Name']"));
        this.inputPlanURL = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Plan URL']"));
        this.newCreatePageHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class='cdk-drag-handle dialog-heading']"));
        this.newTABElement = protractor_1.element(protractor_1.by.xpath("//*[@id='tabActionButton']"));
        this.arrayOfTabs = protractor_1.element.all(protractor_1.by.xpath("//div[@class='mat-tab-links']/a"));
        this.firstOrganizationInGridElement = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[2]/a"));
        this.planTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[2]"));
        this.formulariesTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[3]"));
        this.coveragePolicyTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[4]"));
        this.documentTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[5]"));
        this.linkTABElement = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[6]"));
        this.organizationstatuseHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='cdk-drag']//h1"));
        this.listOfOrganizationStatusFilter = protractor_1.element.all(protractor_1.by.xpath("//ul[@class='checkboxes']/li"));
        this.organizationstatusFilter = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button/span"));
        this.organizationstatusFilter_1 = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button"));
        this.organizationStatusFiltername = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button/span"));
        this.organizationStatusOnGrid = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[6]/span"));
        this.organizatioTypeOnGrid = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[4]/span"));
        this.applyButton = protractor_1.element(protractor_1.by.xpath("//*[@type= 'submit']"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//*[@class='app-button'][1]"));
        this.firstElementOragnizationType = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']/li[1]/label/input"));
        this.organizationTypeHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='cdk-drag']//h1"));
        this.listOfOrganizationFilter = protractor_1.element.all(protractor_1.by.xpath("//ul[@class='checkboxes']/li"));
        this.organizationtypeFilter = protractor_1.element(protractor_1.by.xpath("//*[@id='organizationTypesFilter']/button"));
        this.organizationtypeFiltername = protractor_1.element(protractor_1.by.xpath("//*[@id='organizationTypesFilter']/button/span"));
        this.tableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.tableHeaderCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr[1]/th"));
        this.organizationHeaderElement = protractor_1.element(protractor_1.by.xpath("//div[@id = 'organizationGridViewContainer']//h1"));
    }
    verifyGridForDisplayDefult() {
        return __awaiter(this, void 0, void 0, function* () {
            helper.waitForTexttoAppear(this.organizationtypeFiltername, "Organization Types");
            let count = yield this.tableCount.count();
            if (count > 0) {
                return true;
            }
            else {
                return false;
            }
            return true;
        });
    }
    verifyGridForDisplayOrgnizationType() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.organizatioTypeOnGrid.getText().then(function (name) {
                if (name.trim() == "MCO".trim()) {
                    console.log("Validated");
                    return true;
                }
                else {
                    return false;
                }
            });
            return result;
        });
    }
    selectOneOfTheOrganizationTypesAndClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orgTypename = prop.GetPropertyValue("ORGANIZATION_TYPE_NAME");
                console.log("orgTypename", orgTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types (1)");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured while clicking " + e);
                return false;
            }
        });
    }
    verifyOrganizationFilterOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let headerText = yield this.organizationTypeHeader.getText();
                if (headerText.trim() == "Organization Types".trim()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured in verifyOrganizationFilterOpen " + e);
                return false;
            }
        });
    }
    ClickOnOrganizationTypeFilterFordelselect() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("click  for the list  organization type");
            helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types (1)");
            let result = yield this.organizationtypeFilter.click().then(function () {
                console.log("clicked on organization filter");
                return true;
            });
            return result;
        });
    }
    ClickOnOrganizationTypeFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("click  for the list  organization type");
            let result = yield this.organizationtypeFilter.click().then(function () {
                console.log("clicked on organization filter");
                return true;
            });
            return result;
        });
    }
    varifyOrganizationTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            let count = yield this.listOfOrganizationFilter.count();
            console.log("count", count);
            for (var i = 1; i <= count; i++) {
                let eachOrganizationTypeText = yield protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']/li[" + i + "]/label/span")).getText();
                console.log(eachOrganizationTypeText);
            }
            return true;
        });
    }
    VerifyOrganizationHeaderName() {
        return __awaiter(this, void 0, void 0, function* () {
            let headerText = yield this.organizationHeaderElement.getText();
            if (headerText == "Organizations") {
                return true;
            }
            else {
                return false;
            }
        });
    }
    verifyHeaderNames() {
        return __awaiter(this, void 0, void 0, function* () {
            var headerExpectedArray = new Array();
            var headerActualArray = new Array();
            var headerNames = prop.GetPropertyValue("ORAGNIZATION_HEADER_NAMES");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                headerExpectedArray[i] = eachHeaderNames[i];
            }
            console.log("Inside header names");
            var value = yield this.tableHeaderCount.count();
            console.log(value);
            for (var i = 1; i <= value; i++) {
                let textname = yield protractor_1.element(protractor_1.by.xpath("//table//tr[1]//th[" + i + "]" + "//div/button/a[1]")).getText();
                headerActualArray[i] = textname;
            }
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log(missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    clickonOrganizationStatusFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(5000);
                let result = this.organizationstatusFilter.click().then(function () {
                    console.log("Clicked on status filter");
                    return true;
                });
                return result;
            }
            catch (e) {
                console.log("Exception accoured--" + e);
                return false;
            }
        });
    }
    verifyListOfOragnizationStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            var headerNames = prop.GetPropertyValue("LIST_ORGANIZATION_STATUS_NAME");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                detailheaderExpectedArray[i] = eachHeaderNames[i].trim();
            }
            let count = yield this.listOfOrganizationStatusFilter.count();
            console.log("count", count);
            for (let i = 1; i <= count; i++) {
                let eachOrganizationStatusText = yield protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']/li[" + i + "]/label/span")).getText();
                detailheaderActualArray[i] = eachOrganizationStatusText.trim();
            }
            let missing = detailheaderActualArray.filter(item => detailheaderExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    verifyUserInOrganizationStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Oragnization hStatus Header check");
                let headerText = yield this.organizationstatuseHeader.getText();
                if (headerText.trim() == "Record Status".trim()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured" + e);
                return false;
            }
        });
    }
    selectOrganizationStatusAndClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orgTypename = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
                console.log("orgTypename", orgTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                        return true;
                    });
                    return result;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured" + e);
                return false;
            }
        });
    }
    verifyGirdForOrganizationStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orgStatusname = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
                console.log("orgStatusname " + orgStatusname);
                helper.waitForTexttoAppear(this.organizationstatusFilter_1, "Record Status (1)".trim());
                let result = yield this.organizationStatusOnGrid.getText().then(function (name) {
                    if (name.trim() == orgStatusname.trim()) {
                        console.log("Validated status");
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                return result;
            }
            catch (e) {
                console.log("Exception accoured" + e);
                return false;
            }
        });
    }
    ClickOnOrganizationStatusFilterFordelselect() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("click  for the list  organization status");
            helper.waitForTexttoAppear(this.organizationstatusFilter_1, "Record Status (1)");
            let result = yield this.organizationstatusFilter_1.click().then(function () {
                console.log("clicked on organization filter");
                return true;
            });
            return result;
        });
    }
    selectOneOfTheOrganizationStatussAndClickApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orgTypename = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
                console.log("orgTypename", orgTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                        return true;
                    });
                    return result;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured while clicking " + e);
                return false;
            }
        });
    }
    verifyGridForOrganizationStatusDisplayDefult() {
        return __awaiter(this, void 0, void 0, function* () {
            helper.waitForTexttoAppear(this.organizationstatusFilter, "Record Status");
            let count = yield this.tableCount.count();
            if (count > 0) {
                return true;
            }
            else {
                return false;
            }
            return true;
        });
    }
    clickOnFirstOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                firstOrganizationNameInGrid = yield this.firstOrganizationInGridElement.getText();
                let result = this.firstOrganizationInGridElement.click().then(function () {
                    return true;
                });
                return result;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyDetailPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let detailPageOrganizationName = yield protractor_1.element(protractor_1.by.xpath("//h1//..//p[2]")).getText();
                if (detailPageOrganizationName.trim() == firstOrganizationNameInGrid.trim()) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Detail Page Excaption accoured--" + e);
                return false;
            }
        });
    }
    getTabNames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var headerNames = prop.GetPropertyValue("LIST_ORGANIZATION_TAB_NAME");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    detailTABExpectedArray[i] = eachHeaderNames[i].trim();
                }
                console.log('object1: %O', detailTABExpectedArray);
                let count = yield this.arrayOfTabs.count();
                console.log("count", count);
                for (let i = 0; i < count; i++) {
                    let eachOrganizationtabText = yield this.arrayOfTabs.get(i).getText();
                    console.log(eachOrganizationtabText);
                    detailTABActualArray[i] = eachOrganizationtabText.trim();
                }
                console.log('object: %O', detailTABActualArray);
                return true;
            }
            catch (e) {
                console.log("Exception accoured During geting tabName", e);
                return false;
            }
        });
    }
    compareTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let missing = detailTABActualArray.filter(item => detailTABExpectedArray.indexOf(item) < 0);
                console.log("missing len", missing.length);
                if (missing.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured in comparing TABs" + e);
                return false;
            }
        });
    }
    selectOneOfTheOrganizationTypesAndClickApplyForDeselect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let orgTypename = prop.GetPropertyValue("ORGANIZATION_TYPE_NAME");
                console.log("orgTypename", orgTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured while clicking " + e);
                return false;
            }
        });
    }
    clickOnPlanTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("clickOnPlanTAB");
                let result = yield this.planTABElement.click().then(function () {
                    console.log("click on the the Plan TAB");
                    return true;
                });
                if (result) {
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
    verifyPlanTABDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify Plan Page Display");
                helper.waitForTexttoAppear_1(this.newTABElement, "New Plan");
                if (true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured", e);
                return false;
            }
        });
    }
    clickOnNewPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.newTABElement.click().then(function () {
                    console.log("click on new plan");
                    return true;
                });
                if (result) {
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
    verifyHeaderInCreatePage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let headerText = yield this.newCreatePageHeader.getText();
                if (headerText.trim() == text.trim()) {
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
    enterPlanDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Enter the inputPlanName");
                yield this.inputPlanName.clear();
                console.log("Enter the inputPlanName");
                let Number = helper.RandomNumber();
                let StringNumber = (yield Number).toString();
                yield this.inputPlanName.sendKeys("TestPlan" + "" + StringNumber);
                yield this.inputPlanURL.clear();
                console.log("Enter the inputPlanURL");
                yield this.inputPlanURL.sendKeys("TestPlan.com");
                console.log("Enter the DescripinputPlanURLtion2");
                yield this.createButton.click();
                return true;
            }
            catch (e) {
                console.log("Exception details", e);
                return false;
            }
        });
    }
    clickOnOverviewTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.overviewTABElement.click().then(function () {
                    return true;
                });
                if (result) {
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
    clickOnFormulariesTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("formulariesTABElement");
                let result = yield this.formulariesTABElement.click().then(function () {
                    console.log("click on the the formulariesTABElement TAB");
                    return true;
                });
                if (result) {
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
    verifyFormulariesTABDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify Plan Page Display");
                yield helper.waitForTexttoAppear_1(this.newTABElement, "New Formulary");
                if (true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured", e);
                return false;
            }
        });
    }
    clickOnCoveragePolicyTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("CoveragePolicy ");
                let result = yield this.coveragePolicyTABElement.click().then(function () {
                    console.log("click on the the CoveragePolicy TAB");
                    return true;
                });
                if (result) {
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
    verifyCoveragePolicyTABDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify CoveragePolicy  Display");
                yield helper.waitForTexttoAppear_1(this.newTABElement, "New Coverage Policy");
                if (true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured", e);
                return false;
            }
        });
    }
    clickOnDocumentsTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("CoveragePolicy ");
                let result = yield this.documentTABElement.click().then(function () {
                    console.log("click on the the CoveragePolicy TAB");
                    return true;
                });
                if (result) {
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
    verifyDocumentsTABDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify CoveragePolicy  Display");
                yield helper.waitForTexttoAppear_1(this.newTABElement, "New Document");
                if (true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured", e);
                return false;
            }
        });
    }
    clickOnLinkTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Link ");
                let result = yield this.linkTABElement.click().then(function () {
                    console.log("click on the the linkTABElement TAB");
                    return true;
                });
                if (result) {
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
    verifyLinkTABDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify CoveragePolicy  Display");
                yield helper.waitForTexttoAppear_1(this.newTABElement, "New Link");
                if (true) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured", e);
                return false;
            }
        });
    }
    clickOnEditButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Clicked on Edit button");
                let result = yield protractor_1.browser.actions().mouseMove(this.editButton).click().perform().then(function () {
                    console.log("click on the edit button");
                    return true;
                });
                if (result) {
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
    verifyEditPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verify header of the edit page");
                let headerText = yield this.editHeader.getText();
                if (headerText.trim() == "Edit an Organization".trim()) {
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
    enterDetailsInEditPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Eneter tehe dcescription11");
                let Number = yield helper.RandomNumber();
                let StringNumber = (yield Number).toString();
                console.log("Eneter tehe dcescription1111");
                protractor_1.browser.sleep(10000);
                yield this.editDecriptionElement.sendKeys("TestEdit" + "" + StringNumber);
                console.log("Eneter tehe dcescriptionedit1");
                yield this.editSaveButton.click();
                console.log("After click of save button");
                return true;
            }
            catch (e) {
                console.log("Excption accoured", e);
                return false;
            }
        });
    }
    verifyRecordStatusForModified() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield helper.waitForTexttoAppear(this.recordStatusModified, "Modified");
                let text = yield this.recordStatusModified.getText();
                if (text == "Modified") {
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
    clickOnOrganizationLink() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.organizationLinkElement.click().then(function () {
                    console.log("click on Link");
                    return true;
                });
                if (result) {
                    console.log("click sucsess fully");
                    return true;
                }
                else {
                    console.log("click is failed");
                    return false;
                }
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyUserInMainPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield helper.waitForTexttoAppear(this.organizationHeaderElement, "Organizations");
                let headerText = yield this.organizationHeaderElement.getText();
                if (headerText.trim() == "Organizations".trim()) {
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
    clickOnNewButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.newButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyUserInCreatePage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let headerText = yield this.newCreatePageheaderElement.getText();
                if (headerText.trim() == "Create a New Organization".trim()) {
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
    enterDetailsAndClickOnSave() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Eneter the deatls");
                let Number = helper.RandomNumber();
                let StringNumber = (yield Number).toString();
                yield this.newOrganizationNameElement.sendKeys("TestOrganization" + StringNumber);
                yield protractor_1.element(protractor_1.by.xpath("//*[text()='Organization Type(s)']")).click().then(() => __awaiter(this, void 0, void 0, function* () {
                    protractor_1.browser.sleep(2000);
                    yield protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Managed Care Organization')]")).click().then(() => __awaiter(this, void 0, void 0, function* () {
                    }));
                }));
                yield protractor_1.browser.actions().mouseMove(this.newOrganizationNameElement).click().perform();
                yield protractor_1.browser.actions().mouseMove(this.newCreateButtonElement).click().perform();
                console.log("clicked on description element");
                return true;
            }
            catch (e) {
                console.log("Excpetion accoured", e);
                return false;
            }
        });
    }
    verifyNewOrganizationCreated() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield helper.waitForTexttoAppear(this.recordStatusNew, "New");
                let text = yield this.recordStatusNew.getText();
                if (text == "New") {
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
    clickOnCompleteButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Complete button");
                yield helper.waitForTexttoAppear(this.completeButtonElement, "Complete");
                yield this.completeButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verifyContinueButton  button");
                let result = yield helper.waitForTexttoAppear_1(this.continueButtonElement, "Continue");
                if (result) {
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
    clickOnContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.continueButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield helper.waitForTexttoAppear_1(this.approveButtonElement, "Approve");
                if (result) {
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
    clickOnApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.approveButtonElement.click();
                yield this.continueButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyRecordStatusAfterApprove() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield helper.waitForTexttoAppear(this.recordStatusApproved, "Approved");
                let text = yield this.recordStatusApproved.getText();
                if (text == "Approved") {
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
    clicksOnHistoryTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[7]"))).click().perform();
                return true;
            }
            catch (e) {
                console.log("Excpetion accoured", e);
                return false;
            }
        });
    }
    verifyOnHistoryTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let count = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id='grid']//tbody//tr")).count();
                console.log("count of reords are ", count);
                if (Number(count) > 1) {
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
}
exports.OrganizationPage = OrganizationPage;
