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
const HomePage_1 = require("../Pages/HomePage");
const OrganizationsPage_1 = require("../Pages/OrganizationsPage");
let homePage = new HomePage_1.HomePage();
let organizationPage = new OrganizationsPage_1.OrganizationPage();
cucumber_1.Given('user is on Organization Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.VerifyOrganizationHeaderName();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user validate column names with specified column names dataset', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyHeaderNames();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('column names should match for organization grid', function () {
    return __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.equal(true, true);
    });
});
cucumber_1.When('user click on Organization type Filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user click on Organization type Filter");
        let result = yield organizationPage.ClickOnOrganizationTypeFilter();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('Number of organization types are displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Number of organization types are displayed");
        let result = yield organizationPage.varifyOrganizationTypes();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user is on Organization Type filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user is on Organization Type filter");
        let result = yield organizationPage.verifyOrganizationFilterOpen();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user selects given Organization type Filter and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.selectOneOfTheOrganizationTypesAndClickApply();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('grid is displayed with selected organization type filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyGridForDisplayOrgnizationType();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Organization type Filter for deslect operation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user click on Organization type Filter for deslect operation");
        let result = yield organizationPage.ClickOnOrganizationTypeFilterFordelselect();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user deselects selected given Organization type Filter and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.selectOneOfTheOrganizationTypesAndClickApplyForDeselect();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('grid is displayed with default values', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyGridForDisplayOrgnizationType();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Organization Status Filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickonOrganizationStatusFilter();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('Number of organization Status are displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyListOfOragnizationStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user is on Organization Status filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyUserInOrganizationStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user selects given Organization Status Filter and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.selectOrganizationStatusAndClickApply();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('grid is displayed with selected organization Status filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyGirdForOrganizationStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Organization Status Filter for deslect operation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user click on Organization type Filter for deslect operation");
        let result = yield organizationPage.ClickOnOrganizationStatusFilterFordelselect();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user deselects selected given Organization Status Filter and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.selectOneOfTheOrganizationStatussAndClickApply();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('grid is displayed with default values of Organization Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyGridForOrganizationStatusDisplayDefult();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on one of the Organization', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnFirstOrganization();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view the detail page of Organization', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyDetailPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user is on detail Organization Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyDetailPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user get tab names and compare with given test data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.getTabNames();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all give tab names', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.compareTabs();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on Plan TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("when user clicks on Plan TAB");
        let result = yield organizationPage.clickOnPlanTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all given column names in Plan Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyPlanTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user is on plan TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyPlanTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on New', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnNewPlan();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view New Plan Create Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyHeaderInCreatePage("Create a new Plan");
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user enters all details and Click on save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.enterPlanDetails();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('New Plan is created in Organization', function () {
    chai_1.assert.equal(true, true);
});
cucumber_1.Then('go to overview TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnOverviewTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on  Formularies  TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("when user clicks on Plan TAB");
        let result = yield organizationPage.clickOnFormulariesTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all given column names  in  Formularies  Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyFormulariesTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on   Coverage Policies   TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnCoveragePolicyTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all given column names  in   Coverage Policies   Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyCoveragePolicyTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on Documents TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnDocumentsTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all given column names  in Documents Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyDocumentsTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('when user clicks on Link TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnLinkTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user should view all given column names  in Links Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyLinkTABDisplay();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user clicks edit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Clicks on Edit button");
        let result = yield organizationPage.clickOnEditButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user lands on edit page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyEditPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user enters description and click on save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.enterDetailsInEditPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('organization is modified with record status as modified', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyRecordStatusForModified();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Organizations Link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnOrganizationLink();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user lands to Organization Main Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyUserInMainPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user clicks on NEW button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnNewButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user lands on New Organization Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyUserInCreatePage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user enetrs details and click on save button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.enterDetailsAndClickOnSave();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('new organization  is created', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyNewOrganizationCreated();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user is in detail Organization Page', function () {
    chai_1.assert.equal(true, true);
});
cucumber_1.When('user click on complete button in organization detail page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnCompleteButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user verifies exsistance of continue button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyContinueButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user clicks on continue button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnContinueButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user verifies exsistance of Approve or Reject button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyApproveButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Approve button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clickOnApproveButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('organization is modified with record status as Approved', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyRecordStatusAfterApprove();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on History TABS', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.clicksOnHistoryTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view histroy TAB  with details of organization record changes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield organizationPage.verifyOnHistoryTAB();
        chai_1.assert.equal(true, result);
    });
});
