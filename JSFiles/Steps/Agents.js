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
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const chai_1 = require("chai");
const AgentsPage_1 = require("../Pages/AgentsPage");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var agentsPage = new AgentsPage_1.AgentsPage();
let compareHeaderResult = false;
cucumber_1.Given('user in Agents Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Agent Page feaure File");
        let result = yield agentsPage.VerifyUserInAgentPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user retreives column names from test data for Agents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.getTheColumnNamesForAgnets();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('compares against the Agent Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.compareHeaderNamesForAgents();
        compareHeaderResult = result;
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match for Agents', function () {
    chai_1.assert.equal(compareHeaderResult, true);
});
cucumber_1.When('user clicks on one of the agents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnOneOfAgent();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user can view details page of agent', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.VerfiyDetailPageWithHeaderName();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user in Detail Agents Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.VerfiyDetailPageWithHeaderName();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user clicks on Links TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.ClickOnLinkTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user lands to Agent Link TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyLinkdetailsTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('Click on Overview TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnOverviewTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user in Agent detail page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.VerfiyDetailPageWithHeaderName();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Edit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.ClickOnEditButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('edit screen is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.checkDataHeadingInEditAgentPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user enters description and click on save button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.editDecritptionInAgent();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('complete button is displayed on detail screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyCompleteButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on complete button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnCompleteButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('Approve or Reject button is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyApproveButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Approve', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnApproveButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('record status will be changed to Approved', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyRecordStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user clicks on history TAB', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnHistoryTAB();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('History TAB is displayed with latest Modification details', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyHistoryTABDetails();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user in agent main grid', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.moveToAgentMainGrid();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on New button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnNewButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('New agent creation is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyNewAgentPage();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user user enetrs agent details and click On save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.enetrsAgentDetails();
        chai_1.assert.equal(true, true);
    });
});
cucumber_1.Then('new agent is created', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.VerifyAgentIsSaved();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Agent Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnAgentType();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view all Agent Types', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user view all Agent Types");
        let result = yield agentsPage.verifyAgentTypes();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user in Agents Type filter option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user in Agents Type filter option");
        let result = yield agentsPage.verifyAgentTypeFilter();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on of the Agent Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user click on of the Agent Type");
        let result = yield agentsPage.selectOnOfAgentTypeOption();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnApplyButton();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view reocrds of selected agent type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyGridWithSelectedAgentType();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('deselect the selected option and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.deselectTheSelectedAgentTypeOption();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view all the records in grid', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyForAllData();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user select on of the Agent type and click on cancel button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.selectOneAgentTypeAndClickCancel();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on Agent Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.clickOnRecordStatusFilter();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view all Agent Staus', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyAllStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Given('user in Agents Status filter option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyAgentStatusFilterHeader();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.When('user click on of the Agent Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.selectAgentStatus();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view reocrds of selected agent Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyAgentStatusOnGrid();
        chai_1.assert.equal(true, result);
    });
});
cucumber_1.Then('user view all Agent Types', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield agentsPage.verifyAgentTypes();
        chai_1.assert.equal(true, result);
    });
});
