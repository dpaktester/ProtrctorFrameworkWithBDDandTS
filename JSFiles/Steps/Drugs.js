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
const cucumber_1 = require("cucumber");
const chai_1 = require("chai");
const DrugsPage_1 = require("../Pages/DrugsPage");
const CoveragePoliciesPage_1 = require("../Pages/CoveragePoliciesPage");
var drugpage = new DrugsPage_1.DrugsPage();
var coveragePoliciesPage = new CoveragePoliciesPage_1.CoveragePoliciesPage();
cucumber_1.Given('user in drugs page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.verifyDrugsPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get column names from test data in drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.verifyDrugTable();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match agaist application in drugs page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.compareHeaderNamesForDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on one of the drug code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnDrugCode();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('drug details page displayed with specified header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.VerfiyDetailPageWithHeaderNameforDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks drugs link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnDrugsHeaderInsideMainInfo();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks drug type filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnDrugTypes();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user view all drug type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.comparedataOfDrugTypesOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on one of drug type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnMultiSourceDrugTypeRadioBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on apply button of drug Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnApplyBtnAfterSelectingDrugType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('drug details displayed based on drug type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.VerifyUserappliedOnMultiSourceDrugType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Header of Drug Types is {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.CheckHeaderOfDrugTypes();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on cancel button of drug Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickCancelButtonAfterUnSelectingDrugType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user Enters {string} into the searchbox of Drugs', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.EnterTextIntoSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should be able to see only otezla drug', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.verifyOtezlaDrugInGrid();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user removes {string} from the searchbox', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.RemoveTextfromSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should be able to see the all the records', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.verifyDrugTable();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on New button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnNewBtnInDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should se the Header as {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.CheckHeaderOfNewInDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should be able to see the fileds for new Record', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.getThefieldsForNewInDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on cancel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnApplyBtnAfterSelectingDrugType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user should see the screen without any changes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.verifyDrugTable();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user enters Name in New of drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.EnterDrugNameInNewOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user enters Description in New of drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.EnterDescriptionInNewOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user selects drug type in New of drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.EnyterDrugTypeInNewOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user enters Drug code in New of drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.EnterDrugCodeInNewOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on save of New creation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield drugpage.ClickOnSaveBtnInnewOfDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('clicks on Home Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyUserInHomePage();
        chai_1.assert.equal(result, true);
    });
});
