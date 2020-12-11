import { Given, When, Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { expect, assert } from "chai";
import { AgentsPage } from "../Pages/AgentsPage";

var prop = new PropertiesFileManager();
var agentsPage = new AgentsPage();
let compareHeaderResult = false;


Given('user in Agents Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Agent Page feaure File");
  let result = await agentsPage.VerifyUserInAgentPage();
  assert.equal(result, true);
});



When('user retreives column names from test data for Agents', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.getTheColumnNamesForAgnets();
  assert.equal(result, true);
});


When('compares against the Agent Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.compareHeaderNamesForAgents();
  compareHeaderResult = result;
  assert.equal(result, true);
});


Then('column names should match for Agents', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(compareHeaderResult, true);
});



When('user clicks on one of the agents', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnOneOfAgent();
  assert.equal(true, result);
});



Then('user can view details page of agent', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.VerfiyDetailPageWithHeaderName();
  assert.equal(true, result);
});



Given('user in Detail Agents Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.VerfiyDetailPageWithHeaderName();
  assert.equal(true, result);
});


When('user clicks on Links TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.ClickOnLinkTAB();
  assert.equal(true, result);
});


Then('user lands to Agent Link TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyLinkdetailsTAB();
  assert.equal(true, result);
});

Then('Click on Overview TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnOverviewTAB();
  assert.equal(true, result);
});




Then('user in Agent detail page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.VerfiyDetailPageWithHeaderName();
  assert.equal(true, result);
});


//Complete and Aprrove and Reject feature


When('user click on Edit button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.ClickOnEditButton();
  assert.equal(true, result);
});



Then('edit screen is displayed', async function () {
  // Check the edit screen with display of labels of inform ation
  let result = await agentsPage.checkDataHeadingInEditAgentPage();
  assert.equal(true, result);
});



When('user enters description and click on save button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.editDecritptionInAgent();
  assert.equal(true, result);
});



Then('complete button is displayed on detail screen', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyCompleteButton();
  assert.equal(true, result);
});



When('user click on complete button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnCompleteButton();
  assert.equal(true, result);
});


Then('Approve or Reject button is displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyApproveButton();
  assert.equal(true, result);
});


When('user click on Approve', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnApproveButton();
  assert.equal(true, result);
});



Then('record status will be changed to Approved', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyRecordStatus();
  assert.equal(true, result);
});




When('user clicks on history TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnHistoryTAB();
  assert.equal(true, result);
});



Then('History TAB is displayed with latest Modification details', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyHistoryTABDetails();
  assert.equal(true, result);

});



Given('user in agent main grid', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.moveToAgentMainGrid();
  assert.equal(true, result);
});


When('user click on New button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnNewButton();
  assert.equal(true, result);
});
//todo @ 

Then('New agent creation is displayed', async function () {
  //Verify the header names in New Agent Page
  let result = await agentsPage.verifyNewAgentPage();
  assert.equal(true, result);
});


When('user user enetrs agent details and click On save', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.enetrsAgentDetails();
  assert.equal(true, true);
});



Then('new agent is created', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.VerifyAgentIsSaved();
  assert.equal(true, result);
});



When('user click on Agent Type', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnAgentType();
  assert.equal(true, result);
});



Then('user view all Agent Types', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user view all Agent Types");
  let result = await agentsPage.verifyAgentTypes();
  assert.equal(true, result);
});



Given('user in Agents Type filter option', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user in Agents Type filter option");
  let result = await agentsPage.verifyAgentTypeFilter();
  assert.equal(true, result);
});



When('user click on of the Agent Type', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user click on of the Agent Type");
  let result = await agentsPage.selectOnOfAgentTypeOption();
  assert.equal(true, result);
});


When('click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnApplyButton();
  assert.equal(true, result);
});
   


Then('user view reocrds of selected agent type', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyGridWithSelectedAgentType();
  assert.equal(true, result);
});



When('deselect the selected option and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.deselectTheSelectedAgentTypeOption();
  assert.equal(true, result);
});



Then('user view all the records in grid', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyForAllData();
  assert.equal(true, result);
});


When('user select on of the Agent type and click on cancel button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.selectOneAgentTypeAndClickCancel();
  assert.equal(true, result);
});


When('user click on Agent Status', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.clickOnRecordStatusFilter();
  assert.equal(true, result);
});



Then('user view all Agent Staus', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyAllStatus();
  assert.equal(true, result);
});



Given('user in Agents Status filter option',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await agentsPage.verifyAgentStatusFilterHeader();
  assert.equal(true, result);
});



  When('user click on of the Agent Status',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await agentsPage.selectAgentStatus();
    assert.equal(true, result);
  
  });

  Then('user view reocrds of selected agent Status',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await agentsPage.verifyAgentStatusOnGrid();
    assert.equal(true, result);
  });


  

  Then('user view all Agent Types',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await agentsPage.verifyAgentTypes();
    assert.equal(true,result);
  });
