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
exports.DrugsPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var help = new Helper_1.Helper();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
var helper = new Helper_1.Helper();
let NameToBeEntered = "";
class DrugsPage {
    constructor() {
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.drugsHeaderElement = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
        this.DrugCode = protractor_1.element(protractor_1.By.xpath("//table//tr[1]//td[2]/a"));
        this.mainInforamtionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item']/h1"));
        this.drugsHeaderInsideMainInfo = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-link']"));
        this.DrugTypesFilterBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='contentTypes']/button"));
        this.multiSourceDrugText = protractor_1.element(protractor_1.by.xpath("//*[@class='checkboxes']//li[2]/label//span"));
        this.multiSourceDrugbtn = protractor_1.element(protractor_1.by.xpath("//*[@class='checkboxes']//li[2]/label/input"));
        this.applyBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[1]"));
        this.cancelBtn = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[2]"));
        this.DrugTypeSelected = protractor_1.element(protractor_1.by.xpath("//table//tr[3]//td[4]"));
        this.Header = protractor_1.element(protractor_1.by.className("cdk-drag-handle dialog-heading"));
        this.SearchPannel = protractor_1.element(protractor_1.by.className("search form-control"));
        this.DrugNameInGrid = protractor_1.element(protractor_1.by.xpath("//table//tr//td[3]"));
        this.NewBtnInDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-drugs/div/div[1]/div[2]/app-user-action-controls/div/div[3]/div/button"));
        this.NameInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.DescriptionInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.DrugTypeInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.DrugCodeInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[3]/div/div[1]/div/input"));
        this.NameInputInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("//*[@class='modal-form']/form/mat-form-field[1]/div/div/div/input"));
        this.DescriptionInputInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("//*[@class='modal-form']/form/mat-form-field[2]/div/div/div/input"));
        this.DrugCodeInputInNewOfDrugs = protractor_1.element(protractor_1.by.xpath("//*[@class='modal-form']/form/mat-form-field[3]/div/div/div/input"));
        this.DrugTypeInputNewofDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.SelectDrugType = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[1]"));
        this.SaveBtnInsideNewOfDrugs = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/app-form-submit-button/button"));
    }
    verifyDrugsPage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                yield this.drugsHeaderElement.getText().then(function (text) {
                    if (text.trim() == "Drugs") {
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
    verifyDrugTable() {
        return __awaiter(this, void 0, void 0, function* () {
            var count = yield this.TableCount.count();
            var retrunresult = false;
            console.log("count in the drugs page" + count);
            if (count > 0) {
                retrunresult = true;
            }
            else {
                retrunresult = false;
            }
            return retrunresult;
        });
    }
    getTheColumnNamesForDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                var headerNames = prop.GetPropertyValue("DRUGS_HEADER_NAMES");
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
    compareHeaderNamesForDrugs() {
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
    ClickOnDrugCode() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                if (yield this.DrugCode.isPresent()) {
                    console.log("Drug code is there");
                    yield this.DrugCode.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug Code in Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerfiyDetailPageWithHeaderNameforDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("VerfiyDetailPageWithHeaderName");
                let waitForelemnet = helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
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
    ClickOnDrugsHeaderInsideMainInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.drugsHeaderInsideMainInfo.isPresent()) {
                    yield this.drugsHeaderInsideMainInfo.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drugs Link inside Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnDrugTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                if (yield this.DrugTypesFilterBtn.isPresent()) {
                    yield this.DrugTypesFilterBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug Type Link inside Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifydataOfDrugTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var value = yield this.TableCount.all(protractor_1.By.tagName("th")).count();
                console.log(value);
                var headerNames = prop.GetPropertyValue("DRUGTYPES_IN_DRUGS");
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
    comparedataOfDrugTypesOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            this.VerifydataOfDrugTypes();
            let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
            console.log("missing Drug Types are", missing.length, "/n", missing.toString());
            if (missing.length == 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    ClickOnMultiSourceDrugTypeRadioBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                helper.waitForTexttoAppear(this.multiSourceDrugText, "Multi Source Drug (MULTISOURCE)");
                if (yield this.multiSourceDrugbtn.isPresent()) {
                    console.log("Multi Source Drug Type is Present inside Drugs");
                    yield this.multiSourceDrugbtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Multi Source Drug Type in Drugs under Drug types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnApplyBtnAfterSelectingDrugType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.applyBtn.isPresent()) {
                    yield this.applyBtn.click().then(function () {
                        console.log("Clicked on Apply of Drug Types");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Apply Button in Drugs under Drug types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyUserappliedOnMultiSourceDrugType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DrugTypeSelected.isPresent()) {
                    protractor_1.browser.sleep(4000);
                    yield this.DrugTypeSelected.getText().then(function (TypeText) {
                        TypeText.trim();
                        console.log("Drug Type Text ", TypeText.trim());
                        if (TypeText == 'Multi Source Drug') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Selected Drug Type is not filtered");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfDrugTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (DrugypesHeaderText) {
                        DrugypesHeaderText.trim();
                        if (DrugypesHeaderText == 'Drug Types') {
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
    ClickCancelButtonAfterUnSelectingDrugType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                if (yield this.cancelBtn.isPresent()) {
                    yield this.cancelBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button in Drugs under Drug types");
                }
                return retrunresult;
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
                    yield this.SearchPannel.sendKeys("Otezla").then(function (text) {
                        retrunresult = true;
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyOtezlaDrugInGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                var retrunresult = false;
                if (yield this.DrugNameInGrid.isPresent()) {
                    yield this.DrugNameInGrid.getText().then(function (DrugName) {
                        DrugName.trim();
                        if (DrugName == 'Otezla') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Otezla Drug In Grid of Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    RemoveTextfromSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.SearchPannel.isPresent()) {
                    yield this.SearchPannel.clear().then(function () {
                        retrunresult = true;
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnNewBtnInDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked New Button of Drugs");
                var retrunresult = false;
                if (yield this.NewBtnInDrugs.isPresent()) {
                    yield this.NewBtnInDrugs.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no New Button in Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfNewInDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (PolicyTypeHeaderText) {
                        PolicyTypeHeaderText.trim();
                        if (PolicyTypeHeaderText == 'Edit Drug') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Header is not matching against Requirement for New of Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    getThefieldsForNewInDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var headerNames = prop.GetPropertyValue("NEW_FIELDS_IN_DRUGS");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                console.log("Expeted Fileds in New Of Drugs ", headerExpectedArray);
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                let NamePlaceholder = yield this.NameInNewOfDrugs.getAttribute("placeholder");
                console.log("NamePlaceholder ", NamePlaceholder);
                let DescriptionPlaceHolder = yield this.DescriptionInNewOfDrugs.getAttribute("placeholder");
                console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
                let DrugTypePlaceHolder = yield this.DrugTypeInNewOfDrugs.getAttribute("aria-label");
                console.log("DrugTypePlaceHolder ", DrugTypePlaceHolder);
                let DrugCodePlaceHolder = yield this.DrugCodeInNewOfDrugs.getAttribute("placeholder");
                console.log("DrugCodePlaceHolder ", DrugCodePlaceHolder);
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                headerActualArray.push(NamePlaceholder.trim(), DescriptionPlaceHolder.trim(), DrugTypePlaceHolder.trim(), DrugCodePlaceHolder.trim());
                console.log("ApplicationNewItemList", headerActualArray.length);
                let result = headerExpectedArray.filter(item => headerActualArray.indexOf(item) < 0);
                if (result.length == 0) {
                    return true;
                }
                else {
                    retrunresult = false;
                    console.log("These Items for New are extra or not in application in Drugs " + result.toString());
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDrugNameInNewOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.NameInputInNewOfDrugs.isPresent()) {
                    console.log("Came to Name Field");
                    let Number = help.RandomNumber();
                    let StringNumber = (yield Number).toString();
                    NameToBeEntered = "Test Drug Inputfrom Mozenda Team " + StringNumber;
                    yield this.NameInputInNewOfDrugs.sendKeys(NameToBeEntered).then(function () {
                        console.log("Entered Data");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Name inside New inside Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDescriptionInNewOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DescriptionInputInNewOfDrugs.isPresent()) {
                    yield this.DescriptionInputInNewOfDrugs.sendKeys("For Testing New Field inside Drugs").then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Description inside New of Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnyterDrugTypeInNewOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DrugTypeInputNewofDrugs.isPresent()) {
                    yield this.DrugTypeInputNewofDrugs.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SelectDrugType.isPresent()) {
                        yield this.SelectDrugType.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Single Source Drug Type in Drug Types inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDrugCodeInNewOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DrugCodeInputInNewOfDrugs.isPresent()) {
                    console.log("Came to Name Field");
                    let Number = help.RandomNumber();
                    let StringNumber = (yield Number).toString();
                    NameToBeEntered = StringNumber;
                    yield this.DrugCodeInputInNewOfDrugs.sendKeys(NameToBeEntered).then(function () {
                        console.log("Entered Data");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no DrugCode inside New inside Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnSaveBtnInnewOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.SaveBtnInsideNewOfDrugs.isPresent()) {
                    yield this.SaveBtnInsideNewOfDrugs.click().then(function () {
                        console.log("Clicked on Save in New of Drugs");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Save Button in Drugs under New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
}
exports.DrugsPage = DrugsPage;
