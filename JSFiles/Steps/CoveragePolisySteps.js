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
const CoveragePoliciesPage_1 = require("../Pages/CoveragePoliciesPage");
const chai_1 = require("chai");
const Helper_1 = require("../Utility/Helper");
var homePage = new HomePage_1.HomePage();
var coveragePoliciesPage = new CoveragePoliciesPage_1.CoveragePoliciesPage();
var help = new Helper_1.Helper();
cucumber_1.Given('User clicks on Menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnMenu();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on the Coverage Policies module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnCoveragePolicies();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Header is Coverage Policies there', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyCoveragePoliciespage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User is on Search Text Box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyExistenceOfSearchPannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User enters {string}', function (planname) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterTextIntoSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User is able to see the policies  per entered data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyTextInSearchPanel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User Clicks on Policy Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnPolicyTypeBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The header is {string} In Policy Type', function (PolicyTypeHeader) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfOnPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Check the Data Aganist The Requirement for Policy Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfOnPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on Cancel button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should be able too see the data with only selected policy Type One', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Select Pharmacy policy and click on Apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectPhrmacyPolicyFromPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should be able too see the data with only selected policy Type Two', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifySelectedPolicyTypeISApplied();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Unselected the selected Pharmacy policy and clicks on Apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnPolicyTypeBtn();
        let result1 = yield coveragePoliciesPage.SelectPhrmacyPolicyFromPolicyType();
        chai_1.assert.equal(result, true);
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.Then('User should be able too see the data with only selected policy Type There', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User Clicks on Channel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnChannelBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The header of channels  is {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfOnChannels();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Check the Data Aganist The Requirement for channels', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfChannels();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Clicks on Cancel on Edit Of Channels', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelBtnofEditChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Should be able to see the data with selected Channel after clicking cancel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyUserClicksOnCancelOnChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Selected Commercial Channel and clicks on Apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectChannelAndClickOnApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Should be able to see the data with selected Channel after Selecting Channel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifySelectedChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Unselected The selected Channel and clicks on Apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        chai_1.assert.equal(result, true);
        let result1 = yield coveragePoliciesPage.ClickOnChannelBtn();
        chai_1.assert.equal(result1, true);
        let result2 = yield coveragePoliciesPage.SelectChannelAndClickOnApply();
        chai_1.assert.equal(result2, true);
    });
});
cucumber_1.Given('User Clicks on Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnRecordStatusBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The header of Record status is {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfRecordStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Check the Data Aganist The Requirement of Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfRecordStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Clicks on Cancel of Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should see the data with all possible Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyUserClicksOnCancelOnChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Selects New from the Record Types and clicks on Apply Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectNewFromRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should see the data with New Status only', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifySelectedRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User UnSelects New from the Record Types and clicks on Apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectNewFromRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User Clicks on New in Coverage Policies', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnNewBtnOfCoveragePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The header of New is {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfNewInCoveragePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Check the fields Aganist The Requirement for Creating New Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyFieldsInNewFieldOfCoveragePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on Cancel Button of New Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelBtnInCreatingANewCP();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should be landed to the CoveragePolicyPage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters Policy Name {string}', function (name) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterPolicyName();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters {string} and selects the first option in Policy Owner', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterPolicyOwner();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Selects {string} from the Policy Type', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnyterPolicyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters description  {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterDescription();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters Start Date and End Date', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterStartDateandEndDate();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on Create of New', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClicksOnCreateOfNew();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('header Should have {string}', function (Header) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckTheHeaderOfTobeEdittedPolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks on Coverage Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCoveragePolicyDetailLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Clicks policy Name on second plociy from policies', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnSecondLinkOfCoveragePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Check the Fileds against the Requirement for the policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfSelectedPolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User click on Edit icon under Main Information', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnEditButtonOnSecondPolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The Header is {string} of Editing a policy', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfOnEditOfSecondPolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Clicks on Cancel of Edit a Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelBtnInCreatingANewCP();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters the Description of Edit Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterDescription();
        let result1 = yield coveragePoliciesPage.EnyterPolicyType();
        chai_1.assert.equal(result, true);
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.When('User clicks on Save Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnEditPolicySaveBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Descritption in the grid should be updated per the user entered', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckTheGridForDescription();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Policy is modified with record status as modified', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyRecordStatusForModified();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user click on complete button in Coverage Policy detail page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.clickOnCompleteButton();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.Then('user verifies exsistance of continue button on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.verifyContinueButton();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.When('user clicks on continue button on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.clickOnContinueButton();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.Then('user verifies exsistance of Approve or Reject button on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.verifyApproveButton();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.When('user click on Approve button on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.clickOnApproveButton();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.Then('Policy is modified with record status as Approved on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.verifyRecordStatusAfterApprove();
        chai_1.assert.equal(true, result1);
    });
});
cucumber_1.Given('user is in detail CoveragePolicy Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.equal(true, true);
    });
});
cucumber_1.When('user click on History Tab on CP', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.clicksOnHistoryTAB();
        chai_1.assert.equal(true, result1);
    });
});
cucumber_1.Then('user view histroy Tab  with details of Policy record changes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.verifyOnHistoryTAB();
        chai_1.assert.equal(true, result1);
    });
});
cucumber_1.Given('User Clicks under Edit icon under Policy Channels', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield coveragePoliciesPage.ClickOneditPolicyChannels();
        chai_1.assert.equal(result1, true);
    });
});
cucumber_1.When('The Header should be {string} of Editing Channel', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfEditChannels();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Channel should not change', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckTheDataAfterCancelOnEditChannels();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User selects Channel {string} and clicks on Save Button', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectHixChannelandClickOnSaveInEditChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should receive an alert saying {string} Channel is updated', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckAlertAfterSelectingChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Unselects Channel  {string}  and clicks on Save Button', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectHixChannelandClickOnSaveInEditChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks on Drug Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnDrugIndication();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The user should be able to see the Headers in the grid for Drug Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfDrugIndication();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on Asociated Drug-Indication Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnAssociateDrugIndicationBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Header Should Be Drug-Indications of Drug Indications', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderOfManagedAssociatedDrugIndication();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Un-selects one drug-Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectDrugIndicationInDruIn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The User Should get an alert saying 1 drug-indication has been deleted', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckAlertAfterUnSelectingDrugIndiation();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User clicks on Cancel Button of Drug-Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfDrigIndicationInsidePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User selects one drug-Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectDrugIndicationInDruIn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Click on Save in drug-Indication', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectDrugandClickOnSaveInDrugIndication();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The User Should get an alert saying 1 drug-indication has been added', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckAlertAfterSelectingDrugIndication();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Field should update with current drug-indication selection', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyPageAfterDrugAddition();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks on Step Tharpy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnStepTherapyInsideCP();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The user should be able to see the Headers in the grid for Step Therapy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfStepTherapy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks on Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Grid Column should match with the Requirement', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfDocumnets();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User Clicks on The New Button On The Right Hand Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnNewBtnOfDocments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Header should be {string} On Documents', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderONNewOfDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Verifies all the fields in the grid', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyFieldsInNewFieldOfDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('clicks on Cancel In Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfnewOfDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User enters Document name {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterDocumentName();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('Selects Document Type {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectDocumentType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('Selects Content Type {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectContentType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('Enters Description {string} for Add Document', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterDescriptionOfAddDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks Links inside Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnLinksInsideCoveragePolicy();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The Grid Column for Links is matching with the Requirement', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('User clicks on New in Links inside Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnNewBtnOfLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('The Header is {string} inside Links', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckHeaderONNewOfLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Clicks on Cancel inside New Of Links', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnCancelOfnewOfLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User Verifis the fileds in Links', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.VerifyFieldsInNewFieldOfLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters Name  {string} Inside Name Of Links', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterLinkName();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters Description  {string} Inside Links', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterDescriptionOfAddNewLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Enters URL {string} In Links', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.EnterURLOfAddNewLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Selects Link Type {string} In Adding Links', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectLinkType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Select Content Type {string} In Link', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.SelectContentTypeInLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User clicks on Create Button under Addnew link of Links', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClicksOnCreateOfLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('The Link should be created', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckTheHeaderOfCreatedLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User should Verify the Grid of The Created Policy', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CheckDataOfCreatedLink();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User Clicks on URL', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.ClickOnURLWhichWasCreated();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('User closes the New Window', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.CloseTheNewWindow();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('clicks on Home Button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyUserInHomePage();
        chai_1.assert.equal(result, true);
    });
});
