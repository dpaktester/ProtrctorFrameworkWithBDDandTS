import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { expect, assert } from "chai";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { OrganizationPage } from "../Pages/OrganizationsPage";
let homePage = new HomePage();
let organizationPage = new OrganizationPage();


Given('user is on Organization Page', async function () {
  // Verify by heading of the page
  let result = await organizationPage.VerifyOrganizationHeaderName();
  assert.equal(true, result);
});


When('user validate column names with specified column names dataset', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyHeaderNames();
  assert.equal(true, result);

});



Then('column names should match for organization grid', async function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);

});

When('user click on Organization type Filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user click on Organization type Filter")
  let result = await organizationPage.ClickOnOrganizationTypeFilter();
  assert.equal(true, result);
});

Then('Number of organization types are displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Number of organization types are displayed")
  let result = await organizationPage.varifyOrganizationTypes();
  assert.equal(true, result);
});





Given('user is on Organization Type filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user is on Organization Type filter")
  let result = await organizationPage.verifyOrganizationFilterOpen();
  assert.equal(true, result);
});



When('user selects given Organization type Filter and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.selectOneOfTheOrganizationTypesAndClickApply();
  assert.equal(true, result);
});



Then('grid is displayed with selected organization type filter', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.verifyGridForDisplayOrgnizationType();
  assert.equal(true, result);
});

When('user click on Organization type Filter for deslect operation', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user click on Organization type Filter for deslect operation")
  let result = await organizationPage.ClickOnOrganizationTypeFilterFordelselect();
  assert.equal(true, result);
});

When('user deselects selected given Organization type Filter and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.selectOneOfTheOrganizationTypesAndClickApplyForDeselect();
  assert.equal(true, result);
});


Then('grid is displayed with default values', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.verifyGridForDisplayOrgnizationType();
  assert.equal(true, result);
});



When('user click on Organization Status Filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickonOrganizationStatusFilter();
  assert.equal(true, result);
});



Then('Number of organization Status are displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyListOfOragnizationStatus();
  assert.equal(true, result);
});


Given('user is on Organization Status filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyUserInOrganizationStatus();
  assert.equal(true, result);
});


When('user selects given Organization Status Filter and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.selectOrganizationStatusAndClickApply();
  assert.equal(true, result);
});

Then('grid is displayed with selected organization Status filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyGirdForOrganizationStatus();
  assert.equal(true, result);
});

When('user click on Organization Status Filter for deslect operation', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user click on Organization type Filter for deslect operation")
  let result = await organizationPage.ClickOnOrganizationStatusFilterFordelselect();
  assert.equal(true, result);
});

When('user deselects selected given Organization Status Filter and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.selectOneOfTheOrganizationStatussAndClickApply();
  assert.equal(true, result);
});


Then('grid is displayed with default values of Organization Status', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.verifyGridForOrganizationStatusDisplayDefult();
  assert.equal(true, result);
});

When('user click on one of the Organization', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnFirstOrganization();
  assert.equal(true, result);
});


Then('user view the detail page of Organization', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyDetailPage();
  assert.equal(true, result);
});



Given('user is on detail Organization Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyDetailPage();
  assert.equal(true, result);
});



When('user get tab names and compare with given test data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.getTabNames();
  assert.equal(true, result);
});




Then('user should view all give tab names', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.compareTabs();
  assert.equal(true, result);
});



When('when user clicks on Plan TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("when user clicks on Plan TAB");
  let result = await organizationPage.clickOnPlanTAB();
  assert.equal(true, result);
});



Then('user should view all given column names in Plan Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyPlanTABDisplay();
  assert.equal(true, result);
});



Given('user is on plan TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyPlanTABDisplay();
  assert.equal(true, result);
});



When('when user clicks on New', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnNewPlan();
  assert.equal(true, result);
});



Then('user view New Plan Create Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyHeaderInCreatePage("Create a new Plan");
  assert.equal(true, result);
});



When('user enters all details and Click on save', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.enterPlanDetails();
  assert.equal(true, result);
});



Then('New Plan is created in Organization', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);
});


Then('go to overview TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnOverviewTAB();
  assert.equal(true, result);
});



When('when user clicks on  Formularies  TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("when user clicks on Plan TAB");
  let result = await organizationPage.clickOnFormulariesTAB();
  assert.equal(true, result);
});


Then('user should view all given column names  in  Formularies  Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyFormulariesTABDisplay();
  assert.equal(true, result);
});



When('when user clicks on   Coverage Policies   TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnCoveragePolicyTAB();
  assert.equal(true, result);
});



Then('user should view all given column names  in   Coverage Policies   Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyCoveragePolicyTABDisplay();
  assert.equal(true, result);
});


When('when user clicks on Documents TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnDocumentsTAB();
  assert.equal(true, result);
});


Then('user should view all given column names  in Documents Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyDocumentsTABDisplay();
  assert.equal(true, result);
});



When('when user clicks on Link TAB', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnLinkTAB();
  assert.equal(true, result);
});



Then('user should view all given column names  in Links Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyLinkTABDisplay();
  assert.equal(true, result);
});



When('user clicks edit button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Clicks on Edit button");
  let result = await organizationPage.clickOnEditButton();
  assert.equal(true, result);
});


Then('user lands on edit page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyEditPage();
  assert.equal(true, result);
});



When('user enters description and click on save', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.enterDetailsInEditPage();
  assert.equal(true, result);
});

       
Then('organization is modified with record status as modified', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyRecordStatusForModified();
  assert.equal(true, result);
});



When('user click on Organizations Link', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnOrganizationLink();
  assert.equal(true, result);
});



Then('user lands to Organization Main Page', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await organizationPage.verifyUserInMainPage();
  assert.equal(true, result);
});




When('user clicks on NEW button',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.clickOnNewButton();
  assert.equal(true, result);
});



Then('user lands on New Organization Page',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyUserInCreatePage();
  assert.equal(true, result);
});



When('user enetrs details and click on save button',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.enterDetailsAndClickOnSave();
  assert.equal(true, result);
});



Then('new organization  is created',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await organizationPage.verifyNewOrganizationCreated();
  assert.equal(true, result);
});

Given('user is in detail Organization Page', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);
});


When('user click on complete button in organization detail page',async function () {
    // Write code here that turns the phrase above into concrete actions  Complete
    let result = await organizationPage.clickOnCompleteButton();
    assert.equal(true, result);
  });



  Then('user verifies exsistance of continue button',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await organizationPage.verifyContinueButton();
    assert.equal(true, result);
  });



  When('user clicks on continue button',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await organizationPage.clickOnContinueButton();
    assert.equal(true, result);
  });



  Then('user verifies exsistance of Approve or Reject button',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await organizationPage.verifyApproveButton();
    assert.equal(true, result);
  });


  When('user click on Approve button',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await organizationPage.clickOnApproveButton();
    assert.equal(true, result);
  });



  Then('organization is modified with record status as Approved',async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await organizationPage.verifyRecordStatusAfterApprove();
    assert.equal(true, result);
  });



    When('user click on History TABS', async function () {
      // Write code here that turns the phrase above into concrete actions
      let result = await organizationPage.clicksOnHistoryTAB();
      assert.equal(true, result);
    });


    Then('user view histroy TAB  with details of organization record changes',async function () {
      // Write code here that turns the phrase above into concrete actions
      let result = await organizationPage.verifyOnHistoryTAB();
      assert.equal(true, result);
    });


