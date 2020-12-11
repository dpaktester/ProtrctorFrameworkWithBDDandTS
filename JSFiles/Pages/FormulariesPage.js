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
exports.FormulariesPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let helper = new Helper_1.Helper();
let firstFormulariNameInGrid = "";
class FormulariesPage {
    constructor() {
        this.recordStatuFilter = protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button"));
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.FormulariesHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
        this.formularyTypeElement = protractor_1.element(protractor_1.by.xpath("//*[@id='formularyTypeFilter']/button"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
        this.applyButton = protractor_1.element(protractor_1.by.xpath("//*[@type= 'submit']"));
        this.formularyTypeOnGrid = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[4]/span"));
        this.formularyStausOnGrid = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[8]/span"));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath("//*[@class='app-button'][2]"));
        this.firstFormulariesInGridElement = protractor_1.element(protractor_1.by.xpath("//table//tr[2]/td[2]/a"));
    }
    verifyFormulariespage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield this.FormulariesHeader.getText().then(function (text) {
                    if (text.trim() == "Formularies") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
                console.log("count in the Formularies  page" + count);
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
    getTheColumnNamesForFormularies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Get number of columns ");
                let tempCount = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
                console.log("tempCount", Number(tempCount));
                var value = Number(tempCount);
                console.log(value);
                var headerNames = prop.GetPropertyValue("FORMULARIES_HEADERNAMES");
                let eachHeaderNames = headerNames.split(",");
                for (var i = 0; i < eachHeaderNames.length; i++) {
                    headerExpectedArray[i] = eachHeaderNames[i].trim();
                }
                var cells = this.TableCount.all(protractor_1.By.tagName("th"));
                for (var i = 1; i <= value; i++) {
                    let textname = yield protractor_1.element(protractor_1.By.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
                    headerActualArray[i] = textname.trim();
                }
                let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
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
    clickOnFormularyTypeFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Clicked on formulary type");
                yield this.formularyTypeElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyFormularyTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Formulary Type Count", lengthValue);
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    actuallabelArray[i] = textname;
                }
                var headerNames = prop.GetPropertyValue("FORMULARY_TYPES");
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
    selectRecordTypeAndApply() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Select one of the type");
            try {
                let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
                console.log("FORMULARY_TYPE", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    yield helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types (1)");
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
    verifyGirdForFormularyType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let formTypesname = prop.GetPropertyValue("FORMULARY_TYPE");
                console.log("orgStatusname " + formTypesname);
                yield helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types (1)");
                let result = yield this.formularyTypeOnGrid.getText().then(function (name) {
                    if (name.trim() == formTypesname.trim()) {
                        console.log("Validated type");
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
    deselectRecordTypeAndApply() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("De Select one of the type");
            try {
                console.log("Clicked on formulary type");
                protractor_1.browser.sleep(5000);
                yield this.formularyTypeElement.click();
                let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
                console.log("FORMULARY_TYPE", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element for deselected item");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    yield helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured while deslecting formulary type option", e);
                return false;
            }
        });
    }
    verifyDataInGrid() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Verify data in grid");
                let retrunresult;
                var count = yield this.TableCount.count();
                console.log("count in the Formularies  page" + count);
                if (count > 0) {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }
                return retrunresult;
            }
            catch (e) {
                console.log("Exception Accoured in verify grid", e);
                return false;
            }
        });
    }
    selectRecordTypeAndCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Select one of the type for cancel");
            try {
                yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//*[@id='formularyTypeFilter']/button/span"))).click().perform().then(function () {
                    console.log("click on the edit button");
                });
                let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
                console.log("FORMULARY_TYPE", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element for canceling item");
                    return true;
                });
                if (result) {
                    let result = yield this.cancelButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    yield helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured while canceling formulary type option", e);
                return false;
            }
        });
    }
    clickOnRecordStatusFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Click on status filter");
                yield this.recordStatuFilter.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured in Click on status filter", e);
                return false;
            }
        });
    }
    verifyReocrdStatusFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Formulary Type Count", lengthValue);
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    actuallabelArray[i] = textname;
                }
                var headerNames = prop.GetPropertyValue("FORMULARY_STATUS");
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
    verifyFormularyStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let lengthValue = yield this.recordListCheckBox.count();
                console.log("record Formulary status Count", lengthValue);
                let actuallabelArray = new Array();
                let expectedlabelArray = new Array();
                for (let i = 1; i <= lengthValue; i++) {
                    let textname = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                    actuallabelArray[i] = textname;
                }
                var headerNames = prop.GetPropertyValue("FORMULARY_STATUS");
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
    selectRecordStatusAndApply() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Select one of the type");
            try {
                let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
                console.log("FORMULARY_STATUS_TEST", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    yield helper.waitForTexttoAppear(this.recordStatuFilter, "Record Status (1)");
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
    verifyGirdForFormularyStaus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let formTypesname = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
                console.log("FORMULARY_STATUS_TEST " + formTypesname);
                let res = yield helper.waitForTexttoAppear_1(this.recordStatuFilter, "Record Status (1)");
                let result = yield this.formularyStausOnGrid.getText().then(function (name) {
                    if (name.trim() == formTypesname.trim()) {
                        console.log("Validated type");
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
    deselectRecordStatusAndApply() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("De Select one of the status");
            try {
                console.log("Clicked on formulary status");
                protractor_1.browser.sleep(5000);
                yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button"))).click().perform().then(function () {
                    console.log("click on the edit button");
                });
                let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
                console.log("FORMULARY_STATUS_TEST", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element for deselected item");
                    return true;
                });
                if (result) {
                    let result = yield this.applyButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    yield helper.waitForTexttoAppear(this.recordStatuFilter, "Record Status");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured while deslecting formulary type option", e);
                return false;
            }
        });
    }
    selectRecordStatusAndCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Select one of the type for cancel");
            try {
                yield protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.xpath("//*[@id='recordStatusFilter']/button/span"))).click().perform().then(function () {
                    console.log("click on the edit button");
                });
                let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
                console.log("FORMULARY_STATUS_TEST", formTypename);
                var test = protractor_1.element(protractor_1.by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
                let result = yield test.click().then(function () {
                    console.log("clicked on first element for canceling item");
                    return true;
                });
                if (result) {
                    let result = yield this.cancelButton.click().then(function () {
                        console.log("clicked on apply button");
                    });
                    let res = yield helper.waitForTexttoAppear_1(this.recordStatuFilter, "Record Status");
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (e) {
                console.log("Exception Accoured while canceling formulary type option", e);
                return false;
            }
        });
    }
    clickOnFirstFormularies() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Click on one of the formaires in grid");
                firstFormulariNameInGrid = yield this.firstFormulariesInGridElement.getText();
                let result = this.firstFormulariesInGridElement.click().then(function () {
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
                let detailPageFOrmulariNameName = yield protractor_1.element(protractor_1.by.xpath("//h1//..//p[2]")).getText();
                if (firstFormulariNameInGrid.trim() == detailPageFOrmulariNameName.trim()) {
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
}
exports.FormulariesPage = FormulariesPage;
