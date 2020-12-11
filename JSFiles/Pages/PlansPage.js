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
exports.PlansPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var help = new Helper_1.Helper();
let NameToBeEntered = "";
let parentID;
let headerActualArray = new Array();
let headerExpectedArray = new Array();
var helper = new Helper_1.Helper();
let SecondPlanName = "";
var prop = new PropertiesFileManager_1.PropertiesFileManager();
class PlansPage {
    constructor() {
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.PlansHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
        this.SearchPannel = protractor_1.element(protractor_1.by.className("search form-control"));
        this.SearchedText = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Search']"));
        this.RecordStatusBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button"));
        this.Header = protractor_1.element(protractor_1.by.className("cdk-drag-handle dialog-heading"));
        this.CancelButton = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[2]"));
        this.NewRecordStatusBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='ng-star-inserted']/label/input[contains(@value, '1')]"));
        this.ApplyButton = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[1]"));
        this.NewRecordStatustext = protractor_1.element(protractor_1.by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[6]/span"));
        this.FirstPlanInPlans = protractor_1.element(protractor_1.by.xpath("//table//tr[1]/td[2]/a"));
        this.mainInforamtionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item']/h1[contains(text(),'Main Information')]"));
        this.DocumentsLinkInPlans = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.LinksLinkInsidePlans = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.HistoryLinkInsidePlans = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[4]"));
        this.DetailsPageHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='breadPoint']"));
        this.PlansLinkInsideDetailsPage = protractor_1.element(protractor_1.by.xpath("//*[@class='policy-heading']//a"));
    }
    verifyPlanspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                console.log("Inside Plan Page");
                yield this.PlansHeader.getText().then(function (text) {
                    console.log("Header Name in Page" + text);
                    if (text.trim() == "Plans") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the plans page" + count);
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
    getTheColumnNamesForPlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var headerNames = prop.GetPropertyValue("PLANS_HEADER_NAMES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.TableCount.all(protractor_1.By.tagName("th"));
                for (var i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
                    headerActualArray[i] = textname.trim();
                }
                return true;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterTextIntoSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.SearchPannel.isPresent()) {
                    yield this.SearchPannel.sendKeys("Aetna").then(function (text) {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no search Box");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyTextInSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield this.FirstPlanInPlans.getText().then(function (text) {
                    if (text.includes("Aetna")) {
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
    ClearTextIntoSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.SearchPannel.isPresent()) {
                    yield this.SearchPannel.clear().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is nothing inside search Box");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyUserReomvesTheSearchBox() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var count = yield this.TableCount.count();
                console.log("count in the Plans  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    console.log("There is nothing in the Plans Page after clearing the search box");
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnRecordStatusBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Record Status ");
                var retrunresult = false;
                if (yield this.RecordStatusBtn.isPresent()) {
                    yield this.RecordStatusBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Record Status Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (PolicyTypeHeaderText) {
                        PolicyTypeHeaderText.trim();
                        if (PolicyTypeHeaderText == 'Record Status') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Record Status Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let lengthValue = yield this.recordListCheckBox.count();
            let ApplicationRecordList = new Array();
            let Recordllist = new Array("New ".trim(), "Modified ".trim(), "Completed ".trim(), "Approved ".trim(), "Published ".trim(), "Archived ".trim());
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Recordllist", Recordllist.length);
                if (yield this.Header.isPresent()) {
                    for (let i = 1; i <= lengthValue; i++) {
                        let textName = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
                        console.log(textName);
                        ApplicationRecordList[i] = textName.trim();
                    }
                    console.log("ApplicationRecordList", ApplicationRecordList.length);
                    let result = ApplicationRecordList.filter(item => Recordllist.indexOf(item) < 0);
                    if (result.length == 0) {
                        return true;
                    }
                    else {
                        retrunresult = false;
                        console.log("These Records are extra or not in application " + result.toString());
                    }
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCancelBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.CancelButton.isPresent()) {
                    yield this.CancelButton.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button in Record Status");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectNewFromRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.NewRecordStatusBtn.isPresent()) {
                    yield this.NewRecordStatusBtn.click().then(function () {
                        console.log("clicked on New of Recoprd Status ");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The New Radio button is not Working under Records");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnApplyButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.ApplyButton.isPresent()) {
                    yield this.ApplyButton.click().then(function () {
                        console.log("clicked on Apply Button ");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Apply Button inside Record Status Of ");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifySelectedRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.NewRecordStatustext.isPresent()) {
                    protractor_1.browser.sleep(6000);
                    yield this.NewRecordStatustext.getText().then(function (RecordsText) {
                        RecordsText.trim();
                        console.log("Records Text ", RecordsText.trim());
                        if (RecordsText == 'New') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Selected Record is not filtered");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnFirstLinkOfPlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.FirstPlanInPlans.isPresent()) {
                    SecondPlanName = yield this.FirstPlanInPlans.getText();
                    yield this.FirstPlanInPlans.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Data on Plans Module");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyDetailPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DetailsPageHeader.isPresent()) {
                    var DetPageHeader = yield this.DetailsPageHeader.getText();
                    console.log("DetailsPageHeader ", DetPageHeader);
                    console.log("SecondPlanName", SecondPlanName);
                    if (DetPageHeader.trim() == SecondPlanName.trim()) {
                        console.log("Page is in Details Page");
                        retrunresult = true;
                    }
                }
                else {
                    retrunresult = false;
                    console.log("The page is not in Details Page");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerfiyDetailPageWithHeaderNameforPlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("VerfiyDetailPageWithHeaderName");
                yield helper.waitForTexttoAppear(this.mainInforamtionHeader, "Main Information");
                return true;
            }
            catch (e) {
                console.log("Exception occoured while checking detail page header");
                return false;
            }
        });
    }
    ClickOnDocumentsLinkInsidePlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DocumentsLinkInPlans.isPresent()) {
                    yield this.DocumentsLinkInPlans.click().then(function () {
                        console.log("It clicked on Documents Link inside Plans");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Link Button inside Plans");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnLinksBtnInsidePlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.LinksLinkInsidePlans.isPresent()) {
                    yield this.LinksLinkInsidePlans.click().then(function () {
                        console.log("It clicked on Links Link inside Plans");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Links Link Button inside Plans");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnHistoryLinkInsidePlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.HistoryLinkInsidePlans.isPresent()) {
                    yield this.HistoryLinkInsidePlans.click().then(function () {
                        console.log("It clicked on History Link inside Plans");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no History Link Button inside Plans");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    getTheColumnNamesForHistoryInsidePlans() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                var headerNames = prop.GetPropertyValue("HISTORY_HEADER_NAMES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.TableCount.all(protractor_1.by.tagName("th"));
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
    compareHeaderNamesForHistoryInsidePlans() {
        return __awaiter(this, void 0, void 0, function* () {
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                console.log("Missing items from History Are ", missing);
                return false;
            }
        });
    }
    ClickOnPlansLinkInsideDetailsPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.PlansLinkInsideDetailsPage.isPresent()) {
                    yield this.PlansLinkInsideDetailsPage.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Plans Link inside Details Page of Plans");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
}
exports.PlansPage = PlansPage;
