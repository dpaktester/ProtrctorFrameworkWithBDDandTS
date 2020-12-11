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
const HomePage_1 = require("../Pages/HomePage");
const PlansPage_1 = require("../Pages/PlansPage");
const chai_1 = require("chai");
const Helper_1 = require("../Utility/Helper");
const DocumentsPage_1 = require("../Pages/DocumentsPage");
const LinksPage_1 = require("../Pages/LinksPage");
const protractor_1 = require("protractor");
var homePage = new HomePage_1.HomePage();
var plans = new PlansPage_1.PlansPage();
var docs = new DocumentsPage_1.DocumentsPage();
var help = new Helper_1.Helper();
var link = new LinksPage_1.LinksPage();
cucumber_1.Given('user landed in plans page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.verifyPlanspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match against requirement in plans page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.getTheColumnNamesForPlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user enters {string} in search box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.EnterTextIntoSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Plan name should only show the plans as per searched criteria', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.VerifyTextInSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clears the Search Field in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClearTextIntoSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('the page should display the data as per the selection', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.VerifyUserReomvesTheSearchBox();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Record Status Filter in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnRecordStatusBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('the header of Record Status should be {string} inside plans', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.CheckHeaderOfRecordStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('data in Record status should match against the requirement in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.CheckDataOfRecordStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on cancel on Record Status of plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnCancelBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on New Status of Record status in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.SelectNewFromRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user click on apply of Record status in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnApplyButton();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('the plans page should show the data only with New status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.VerifySelectedRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on one of the Plan Name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnFirstLinkOfPlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Plan details page displayed with specified header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.VerfiyDetailPageWithHeaderNameforPlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user is in details page of plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.VerifyDetailPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Documents link in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnDocumentsLinkInsidePlans();
        protractor_1.browser.sleep(10000);
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match agaisnt requirement for Documents for Drugs inside plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield docs.getTheColumnNamesForDocuments();
        let result = yield docs.compareHeaderNamesForDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Links link in plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(10000);
        let result = yield plans.ClickOnLinksBtnInsidePlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match agaisnt requirement for Documents for Links inside plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(10000);
        let result1 = yield link.getTheColumnNames();
        let result = yield link.compareHeaderNames();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on History link inside plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(10000);
        let result = yield plans.ClickOnHistoryLinkInsidePlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match agaisnt requirement for Documents for History inside plans', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(10000);
        let result1 = yield plans.getTheColumnNamesForHistoryInsidePlans();
        let result = yield plans.compareHeaderNamesForHistoryInsidePlans();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks plans link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plans.ClickOnPlansLinkInsideDetailsPage();
        chai_1.assert.equal(result, true);
    });
});
