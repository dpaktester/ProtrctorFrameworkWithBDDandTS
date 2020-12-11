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
exports.DocumentsPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var helper = new Helper_1.Helper();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
class DocumentsPage {
    constructor() {
        this.documentHeaderElement = protractor_1.element(protractor_1.By.xpath("//*[@id='documentGridViewHeader']//div//h1"));
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.DocumentCode = protractor_1.element(protractor_1.By.xpath("//table//tr[1]//td[2]"));
        this.mainInforamtionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.detailCount = protractor_1.element.all(protractor_1.by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
        this.documentHeaderInsideMainInfo = protractor_1.element(protractor_1.by.xpath("//*[@class='policy-heading']/span/a"));
        this.ContentTypesFilterBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='contentTypes']/button"));
        this.pdfContentTyperadiobtn = protractor_1.element(protractor_1.by.xpath("//*[@class='checkboxes']//li[7]/label/input"));
        this.pdfContentTyperadiobtnText = protractor_1.element(protractor_1.by.xpath("//*[@class='checkboxes']//li[7]/label//span"));
        this.applyBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[1]"));
        this.cancelBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[2]"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
        this.recordStatusBtnOnDocuments = protractor_1.element(protractor_1.by.xpath("//*[@id= 'recordStatus']/button"));
        this.Header = protractor_1.element(protractor_1.by.className("cdk-drag-handle dialog-heading"));
        this.NewRecordsBtn = protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.newSelectedRecordStatus = protractor_1.element(protractor_1.by.xpath("//table//tr[2]//td[6]"));
        this.htmlConetntTypeSelected = protractor_1.element(protractor_1.by.xpath("//table//tr[2]//td[5]"));
    }
    VerifyDocumentPageHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.documentHeaderElement.getText();
            if (result == "Documents") {
                return true;
            }
            else {
                return false;
            }
        });
    }
    verifyDocumentspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                var count = yield this.TableCount.count();
                console.log("count in the Docuemnts  page" + count);
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
    getTheColumnNamesForDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                var headerNames = prop.GetPropertyValue("DOCUMENTS_HEADER_NAMES");
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
    ClickOnDocumentCode() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.DocumentCode.isPresent()) {
                    yield this.DocumentCode.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Code in Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    compareHeaderNamesForDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                console.log('object1: %O', headerExpectedArray);
                console.log('object1: %O', headerActualArray);
                return false;
            }
        });
    }
    VerfiyDetailPageWithHeaderName() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(50000);
                console.log("VerfiyDetailPageWithHeaderName");
                let waitForelemnet = yield helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
                console.log("Cam Came Came Came");
                if (waitForelemnet) {
                    console.log("Found Main Information");
                    return true;
                }
                else {
                    console.log("Not Found Main Information");
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
    ClickOnDocumentHeaderInsideMainInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.documentHeaderInsideMainInfo.isPresent()) {
                    yield this.documentHeaderInsideMainInfo.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Documents Link inside Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnContentTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                if (yield this.ContentTypesFilterBtn.isPresent()) {
                    yield this.ContentTypesFilterBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Content Type Link inside Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifydataOfContentTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var value = yield this.TableCount.all(protractor_1.By.tagName("th")).count();
                console.log(value);
                var headerNames = prop.GetPropertyValue("CONTENTTYPES_IN_DOCUMENTS");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.TableCount.all(protractor_1.By.tagName("th"));
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
    comparedataOfConetntTypeOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            this.VerifydataOfContentTypes();
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log("missing Content Types are", missing.length);
            if (missing.length == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    ClickOnhtmlConetntTypeRadioBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield helper.waitForTexttoAppear_1(this.pdfContentTyperadiobtnText, "Adobe Portable Document File (*.pdf) (PDF)");
                console.log("Printed printed printed");
                if (this.pdfContentTyperadiobtn.isPresent()) {
                    console.log("pdf Radio Button Element is Present inside Documents");
                    yield this.pdfContentTyperadiobtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no pdf Content Type in Documents under Content types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnApplyButtonafterSelectingContentType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (this.applyBtn.isPresent()) {
                    yield this.applyBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Apply Button in Documents under Content types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyUserappliedOnhtmlConetntType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (this.htmlConetntTypeSelected.isPresent()) {
                    protractor_1.browser.sleep(4000);
                    yield this.htmlConetntTypeSelected.getText().then(function (RecordsText) {
                        RecordsText.trim();
                        console.log("Records Text ", RecordsText.trim());
                        if (RecordsText == 'Adobe Portable Document File (*.pdf)') {
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
    ClickCancelButtonAfterUnSelectingContentType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                if (this.cancelBtn.isPresent()) {
                    yield this.cancelBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button in Documents under Content types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnRecordStatusOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (this.recordStatusBtnOnDocuments.isPresent()) {
                    yield this.recordStatusBtnOnDocuments.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Record Status in Documents");
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
                var retrunresult = false;
                if (this.Header.isPresent()) {
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
            let lengthValue = yield this.recordListCheckBox.count();
            let ApplicationRecordList = new Array();
            let Recordllist = new Array("New ".trim(), "Modified ".trim(), "Completed ".trim(), "Approved ".trim(), "Published ".trim(), "Archived ".trim());
            try {
                var retrunresult = false;
                console.log("Recordllist", Recordllist.length);
                if (this.Header.isPresent()) {
                    for (let i = 1; i < lengthValue; i++) {
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
                        console.log("These Records are extra or not in application for Documents " + result.toString());
                    }
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
                var retrunresult = false;
                if (this.NewRecordsBtn.isPresent()) {
                    yield this.NewRecordsBtn.click().then(function () {
                        console.log("clicked on New of Recoprd Status ");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The New Radio Button Radio button is not Working under Record status for Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnApplyBtnOnRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (this.applyBtn.isPresent()) {
                    yield this.applyBtn.click().then(function () {
                        console.log("clicked on Apply Button ");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Apply Button Radio button is not Working under Record status for Documents");
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
                if (this.newSelectedRecordStatus.isPresent()) {
                    protractor_1.browser.sleep(6000);
                    yield this.newSelectedRecordStatus.getText().then(function (RecordsText) {
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
}
exports.DocumentsPage = DocumentsPage;
