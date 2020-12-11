import { Given, When, Then } from "cucumber";
import { HomePage } from "../Pages/HomePage";
import { CoveragePoliciesPage } from "../Pages/CoveragePoliciesPage";
import { expect, assert } from "chai";
import { AssertionError, equal } from "assert";
import { Helper } from "../Utility/Helper";



var homePage = new HomePage();
var coveragePoliciesPage = new CoveragePoliciesPage();
var help = new Helper();



Given('User clicks on Menu button', async function () {
        let result = await homePage.ClickOnMenu();
        assert.equal(result, true);

});
When('User clicks on the Coverage Policies module in left hand side Pane', async function () {
        let result = await homePage.ClickOnCoveragePolicies();
        assert.equal(result, true);


});

Then('The Header is Coverage Policies there', async function () {

        let result = await coveragePoliciesPage.verifyCoveragePoliciespage();
        assert.equal(result, true);
});

Given('User is on Search Text Box', async function () {
        let result = await coveragePoliciesPage.VerifyExistenceOfSearchPannel();
        assert.equal(result, true);

});

When('User enters {string}', async function (planname) {
        let result = await coveragePoliciesPage.EnterTextIntoSearchPanel();
        assert.equal(result, true);

});

Then('User is able to see the policies  per entered data', async function () {
        let result = await coveragePoliciesPage.VerifyTextInSearchPanel();
        assert.equal(result, true);
});

Given('User Clicks on Policy Type', async function () {
        let result = await coveragePoliciesPage.ClickOnPolicyTypeBtn();
        assert.equal(result, true);
});

When('The header is {string} In Policy Type', async function (PolicyTypeHeader) {
        let result = await coveragePoliciesPage.CheckHeaderOfOnPolicyType();
        assert.equal(result, true);
});

Then('Check the Data Aganist The Requirement for Policy Type', async function () {
        let result = await coveragePoliciesPage.CheckDataOfOnPolicyType();
        assert.equal(result, true);
});

When('User clicks on Cancel button', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        assert.equal(result, true);
});

Then('User should be able too see the data with only selected policy Type One', async function () {
        let result = await coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        assert.equal(result, true);

});
/*When('The header is {string} In Policy Type2', function (string) {


});*/

When('User Select Pharmacy policy and click on Apply button', async function () {
        let result = await coveragePoliciesPage.SelectPhrmacyPolicyFromPolicyType();
        assert.equal(result, true);
});
Then('User should be able too see the data with only selected policy Type Two', async function () {
        let result = await coveragePoliciesPage.VerifySelectedPolicyTypeISApplied();
        assert.equal(result, true);


});

When('User Unselected the selected Pharmacy policy and clicks on Apply button', async function () {
        let result = await coveragePoliciesPage.ClickOnPolicyTypeBtn();
        let result1 = await coveragePoliciesPage.SelectPhrmacyPolicyFromPolicyType();
        assert.equal(result, true);
        assert.equal(result1, true);
});

Then('User should be able too see the data with only selected policy Type There', async function () {
        let result = await coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        assert.equal(result, true);

});
Given('User Clicks on Channel', async function () {
        let result = await coveragePoliciesPage.ClickOnChannelBtn();
        assert.equal(result, true);
});


When('The header of channels  is {string}', async function (text) {
        let result = await coveragePoliciesPage.CheckHeaderOfOnChannels();
        assert.equal(result, true);
});


Then('Check the Data Aganist The Requirement for channels', async function () {
        let result = await coveragePoliciesPage.CheckDataOfChannels();
        assert.equal(result, true);

});

When('User Clicks on Cancel on Edit Of Channels', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelBtnofEditChannel();
        assert.equal(result, true);

});

When('User Should be able to see the data with selected Channel after clicking cancel', async function () {
        let result = await coveragePoliciesPage.VerifyUserClicksOnCancelOnChannel();
        assert.equal(result, true);

});

When('User Selected Commercial Channel and clicks on Apply button', async function () {
        let result = await coveragePoliciesPage.SelectChannelAndClickOnApply();
        assert.equal(result, true);

});

Then('User Should be able to see the data with selected Channel after Selecting Channel', async function () {
        let result = await coveragePoliciesPage.VerifySelectedChannel();
        assert.equal(result, true);

});



When('User Unselected The selected Channel and clicks on Apply button', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        assert.equal(result, true);
        let result1 = await coveragePoliciesPage.ClickOnChannelBtn();
        assert.equal(result1, true);
        let result2 = await coveragePoliciesPage.SelectChannelAndClickOnApply();
        assert.equal(result2, true);
});

Given('User Clicks on Record Status', async function () {
        let result = await coveragePoliciesPage.ClickOnRecordStatusBtn();
        assert.equal(result, true);

});

When('The header of Record status is {string}', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderOfRecordStatus();
        assert.equal(result, true);

});

Then('Check the Data Aganist The Requirement of Record Status', async function () {
        let result = await coveragePoliciesPage.CheckDataOfRecordStatus();
        assert.equal(result, true);
});


When('User Clicks on Cancel of Record Status', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfPolicyTypeBtn();
        assert.equal(result, true);
});
Then('User should see the data with all possible Record Status', async function () {
        let result = await coveragePoliciesPage.VerifyUserClicksOnCancelOnChannel();
        assert.equal(result, true);

});

When('User Selects New from the Record Types and clicks on Apply Button', async function () {
        let result = await coveragePoliciesPage.SelectNewFromRecordType();
        assert.equal(result, true);
});

Then('User should see the data with New Status only', async function () {
        let result = await coveragePoliciesPage.VerifySelectedRecordType();
        assert.equal(result, true);

});

When('User UnSelects New from the Record Types and clicks on Apply button', async function () {
        let result = await coveragePoliciesPage.SelectNewFromRecordType();
        assert.equal(result, true);
});

Given('User Clicks on New in Coverage Policies', async function () {
        let result = await coveragePoliciesPage.ClickOnNewBtnOfCoveragePolicy();
        assert.equal(result, true);

});
When('The header of New is {string}', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderOfNewInCoveragePolicy();
        assert.equal(result, true);

});

Then('Check the fields Aganist The Requirement for Creating New Policy', async function () {
        let result = await coveragePoliciesPage.VerifyFieldsInNewFieldOfCoveragePolicy();
        assert.equal(result, true);

});

When('User clicks on Cancel Button of New Policy', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelBtnInCreatingANewCP();
        assert.equal(result, true);

});

Then('User should be landed to the CoveragePolicyPage', async function () {
        let result = await coveragePoliciesPage.VerifyUserClicksOnCancelOnPolicyType();
        assert.equal(result, true)
                ;
});

When('User Enters Policy Name {string}', async function (name) {
        let result = await coveragePoliciesPage.EnterPolicyName();
        assert.equal(result, true);
});

When('User Enters {string} and selects the first option in Policy Owner', async function (string) {
        let result = await coveragePoliciesPage.EnterPolicyOwner();
        assert.equal(result, true);

});

When('User Selects {string} from the Policy Type', async function (string) {
        let result = await coveragePoliciesPage.EnyterPolicyType();
        assert.equal(result, true);

});

When('User Enters description  {string}', async function (string) {
        let result = await coveragePoliciesPage.EnterDescription();
        assert.equal(result, true);
});

When('User Enters Start Date and End Date', async function () {
        let result = await coveragePoliciesPage.EnterStartDateandEndDate();
        assert.equal(result, true);

});

/*When('User Enters Printed Policy Name  {string}', async function (string) {
        let result = await coveragePoliciesPage.EnterPrintedPolicyName();
        assert.equal(result, true);
});*/

When('User clicks on Create of New', async function () {
        let result = await coveragePoliciesPage.ClicksOnCreateOfNew();
        assert.equal(result, true);
});


Then('header Should have {string}', async function (Header) {
        let result = await coveragePoliciesPage.CheckTheHeaderOfTobeEdittedPolicy();
        assert.equal(result, true);

});

Given('User clicks on Coverage Policy', async function () {
        let result = await coveragePoliciesPage.ClickOnCoveragePolicyDetailLink();
        assert.equal(result, true);
});
/*When('The Header is Coverage Policies', async function () {


});*/

When('User Clicks policy Name on second plociy from policies', async function () {
        let result = await coveragePoliciesPage.ClickOnSecondLinkOfCoveragePolicy();
        assert.equal(result, true);

});

Then('Check the Fileds against the Requirement for the policy', async function () {
        let result = await coveragePoliciesPage.CheckDataOfSelectedPolicy();
        assert.equal(result, true);
});

Given('User click on Edit icon under Main Information', async function () {
        let result = await coveragePoliciesPage.ClickOnEditButtonOnSecondPolicy();
        assert.equal(result, true);

});

When('The Header is {string} of Editing a policy', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderOfOnEditOfSecondPolicy();
        assert.equal(result, true);

});

Then('User Clicks on Cancel of Edit a Policy', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelBtnInCreatingANewCP();
        assert.equal(result, true);

});

When('User Enters the Description of Edit Policy', async function () {
        let result = await coveragePoliciesPage.EnterDescription();
        let result1 = await coveragePoliciesPage.EnyterPolicyType();
        assert.equal(result, true);
        assert.equal(result1, true);

});

When('User clicks on Save Button', async function () {
        let result = await coveragePoliciesPage.ClickOnEditPolicySaveBtn();
        assert.equal(result, true);

});

Then('The Descritption in the grid should be updated per the user entered', async function () {
        let result = await coveragePoliciesPage.CheckTheGridForDescription();
        assert.equal(result, true);

});

Then('Policy is modified with record status as modified', async function () {
        let result = await coveragePoliciesPage.verifyRecordStatusForModified();
        assert.equal(result, true);
});

When('user click on complete button in Coverage Policy detail page', async function () {
        let result1 = await coveragePoliciesPage.clickOnCompleteButton();
        assert.equal(result1, true);
});

Then('user verifies exsistance of continue button on CP', async function () {
        let result1 = await coveragePoliciesPage.verifyContinueButton();
        assert.equal(result1, true);
});

When('user clicks on continue button on CP', async function () {
        let result1 = await coveragePoliciesPage.clickOnContinueButton();
        assert.equal(result1, true);
});

Then('user verifies exsistance of Approve or Reject button on CP', async function () {
        let result1 = await coveragePoliciesPage.verifyApproveButton();
        assert.equal(result1, true);
});

When('user click on Approve button on CP', async function () {
        let result1 = await coveragePoliciesPage.clickOnApproveButton();
        assert.equal(result1, true);
});

Then('Policy is modified with record status as Approved on CP', async function () {
        let result1 = await coveragePoliciesPage.verifyRecordStatusAfterApprove();
        assert.equal(true, result1);
});

Given('user is in detail CoveragePolicy Page', async function () {
        // Write code here that turns the phrase above into concrete actions
        assert.equal(true, true);
});

When('user click on History Tab on CP', async function () {
        let result1 = await coveragePoliciesPage.clicksOnHistoryTAB();
        assert.equal(true, result1);
});

Then('user view histroy Tab  with details of Policy record changes', async function () {
        let result1 = await coveragePoliciesPage.verifyOnHistoryTAB();
        assert.equal(true, result1);
});

/*Given('User Clicks on Overview inside CP', async function () {
        let result = await coveragePoliciesPage.clicksOnOverViewTAB();
        assert.equal(true, result);
});*/
Given('User Clicks under Edit icon under Policy Channels', async function () {
        let result1 = await coveragePoliciesPage.ClickOneditPolicyChannels();
        assert.equal(result1, true);

});
When('The Header should be {string} of Editing Channel', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderOfEditChannels();
        assert.equal(result, true);

});

Then('The Channel should not change', async function () {
        let result = await coveragePoliciesPage.CheckTheDataAfterCancelOnEditChannels();
        assert.equal(result, true);

});

Then('User selects Channel {string} and clicks on Save Button', async function (string) {
        let result = await coveragePoliciesPage.SelectHixChannelandClickOnSaveInEditChannel();
        assert.equal(result, true);


});

Then('User should receive an alert saying {string} Channel is updated', async function (string) {
        let result = await coveragePoliciesPage.CheckAlertAfterSelectingChannel();
        assert.equal(result, true);

});

Then('User Unselects Channel  {string}  and clicks on Save Button', async function (string) {
        let result = await coveragePoliciesPage.SelectHixChannelandClickOnSaveInEditChannel();
        assert.equal(result, true);

});


/* Given('User Clicks on Drugs', async function () {
        let result = await coveragePoliciesPage.ClickOnDrugs();
        assert.equal(result, true);

});

Then('The user should be able to see the Headers in the grid', async function () {
        let result = await coveragePoliciesPage.CheckDataOfDrugs();
        assert.equal(result, true);
});

When('User clicks on Managed Asociated Drugs Button', async function () {
        let result = await coveragePoliciesPage.ClickOnManagedAssociatedDrugs();
        assert.equal(result, true);

});

Then('The Header Should Be Drugs of Drugs', async function () {

        let result = await coveragePoliciesPage.CheckHeaderOfManagedAssociatedDrugs();
        assert.equal(result, true);
});

Then('User clicks on Cancel Button of Drugs', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfDrugs();
        assert.equal(result, true);
});

When('User selects one drug and Click on Save', async function () {
        let result1 = await coveragePoliciesPage.ClickOnManagedAssociatedDrugs();
        let result = await coveragePoliciesPage.SelectDrugandClickOnSaveInDrugs();
        assert.equal(result, true);

});

Then('The User Should get an alert saying 1 Drug has been added', async function () {
        let result = await coveragePoliciesPage.CheckAlertAfterSelectingDrug();
        assert.equal(result, true);

});

Then('The Field should update with current drug selection', async function () {
        let result = await coveragePoliciesPage.verifyPageAfterDrugAddition();
        assert.equal(result, true);

});

When('The User unselects the selected Drugs and clicks on Save', async function () {
        let result = await coveragePoliciesPage.SelectDrugandClickOnSaveInDrugs();
        assert.equal(result, true);

});

Then('User should get an alert saying 1 Drug has been deleted', async function () {
        let result = await coveragePoliciesPage.CheckAlertAfterUnSelectingDrug();
        assert.equal(result, true);

});
 */
Given('User clicks on Drug Indication', async function () {
        let result = await coveragePoliciesPage.ClickOnDrugIndication()
        assert.equal(result, true);

});

Then('The user should be able to see the Headers in the grid for Drug Indication', async function () {
        let result = await coveragePoliciesPage.CheckDataOfDrugIndication()
        assert.equal(result, true);

});

When('User clicks on Asociated Drug-Indication Button', async function () {
        let result = await coveragePoliciesPage.ClickOnAssociateDrugIndicationBtn();
        assert.equal(result, true);
});

Then('The Header Should Be Drug-Indications of Drug Indications', async function () {
        let result = await coveragePoliciesPage.CheckHeaderOfManagedAssociatedDrugIndication();
        assert.equal(result, true);
});

Then('User Un-selects one drug-Indication', async function () {
        let result = await coveragePoliciesPage.SelectDrugIndicationInDruIn();
        assert.equal(result, true);
});

Then ('The User Should get an alert saying 1 drug-indication has been deleted',async function () {
        let result = await coveragePoliciesPage.CheckAlertAfterUnSelectingDrugIndiation();
        assert.equal(result, true);
});

Then('User clicks on Cancel Button of Drug-Indication', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfDrigIndicationInsidePolicy();
        assert.equal(result, true);
});

When('User selects one drug-Indication', async function () {
        let result = await coveragePoliciesPage.SelectDrugIndicationInDruIn();
        assert.equal(result, true);
});
When('User Click on Save in drug-Indication', async function () {
        let result = await coveragePoliciesPage.SelectDrugandClickOnSaveInDrugIndication();
        assert.equal(result, true);
});

Then('The User Should get an alert saying 1 drug-indication has been added', async function () {
        let result = await coveragePoliciesPage.CheckAlertAfterSelectingDrugIndication();
        assert.equal(result, true);
});

Then('The Field should update with current drug-indication selection', async function () {
        let result = await coveragePoliciesPage.verifyPageAfterDrugAddition();
        assert.equal(result, true);
});

Given('User clicks on Step Tharpy', async function () {
        let result = await coveragePoliciesPage.ClickOnStepTherapyInsideCP();
        assert.equal(result, true);
});

Then('The user should be able to see the Headers in the grid for Step Therapy', async function () {
        let result = await coveragePoliciesPage.CheckDataOfStepTherapy();
        assert.equal(result, true);
});

Given('User clicks on Documents', async function () {
        let result = await coveragePoliciesPage.ClickOnDocuments();
        assert.equal(result, true);

});

Then('The Grid Column should match with the Requirement', async function () {
        let result = await coveragePoliciesPage.CheckDataOfDocumnets();
        assert.equal(result, true);

});

Given('User Clicks on The New Button On The Right Hand Pane', async function () {
        let result = await coveragePoliciesPage.ClickOnNewBtnOfDocments();
        assert.equal(result, true);

});
Then('The Header should be {string} On Documents', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderONNewOfDocuments();
        assert.equal(result, true);
});

Then('User Verifies all the fields in the grid', async function () {
        let result = await coveragePoliciesPage.VerifyFieldsInNewFieldOfDocuments();
        assert.equal(result, true);

});

Then('clicks on Cancel In Documents', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfnewOfDocuments();
        assert.equal(result, true);
});

When('User enters Document name {string}', async function (string) {
        let result = await coveragePoliciesPage.EnterDocumentName();
        assert.equal(result, true);

});

When('Selects Document Type {string}', async function (string) {
        let result = await coveragePoliciesPage.SelectDocumentType();
        assert.equal(result, true);

});

When('Selects Content Type {string}', async function (string) {
        let result = await coveragePoliciesPage.SelectContentType();
        assert.equal(result, true);

});

When('Enters Description {string} for Add Document', async function (string) {
        let result = await coveragePoliciesPage.EnterDescriptionOfAddDocuments();
        assert.equal(result, true);

});


/* When('User clicks on Create', async function () {
        let result = await coveragePoliciesPage.ClicksOnCreateOfDocuments();
        assert.equal(result, true);
});

Then('The Header should have the Document Name after Creating Documents', async function () {
        let result = await coveragePoliciesPage.CheckTheHeaderOfCreatedDocument();
        assert.equal(result, true);

});

Then('User Clicks on back Button', async function () {
        let result = await help.PressBackButton();
        assert.equal(result, true);

}); */

Given('User clicks Links inside Policy', async function () {
        let result = await coveragePoliciesPage.ClickOnLinksInsideCoveragePolicy();
        assert.equal(result, true);

});

When('The Grid Column for Links is matching with the Requirement', async function () {
        let result = await coveragePoliciesPage.CheckDataOfLinks();
        assert.equal(result, true);

});

Given('User clicks on New in Links inside Policy', async function () {
        let result = await coveragePoliciesPage.ClickOnNewBtnOfLinks();
        assert.equal(result, true);
});

When('The Header is {string} inside Links', async function (string) {
        let result = await coveragePoliciesPage.CheckHeaderONNewOfLinks();
        assert.equal(result, true);

});

Then('User Clicks on Cancel inside New Of Links', async function () {
        let result = await coveragePoliciesPage.ClickOnCancelOfnewOfLinks();
        assert.equal(result, true);

});

Then('User Verifis the fileds in Links', async function () {
        let result = await coveragePoliciesPage.VerifyFieldsInNewFieldOfLink();
        assert.equal(result, true);

});

When('User Enters Name  {string} Inside Name Of Links', async function (string) {
        let result = await coveragePoliciesPage.EnterLinkName();
        assert.equal(result, true);

});

When('User Enters Description  {string} Inside Links', async function (string) {
        let result = await coveragePoliciesPage.EnterDescriptionOfAddNewLink();
        assert.equal(result, true);

});

When('User Enters URL {string} In Links', async function (string) {
        let result = await coveragePoliciesPage.EnterURLOfAddNewLink();
        assert.equal(result, true);

});


When('User Selects Link Type {string} In Adding Links', async function (string) {
        let result = await coveragePoliciesPage.SelectLinkType();
        assert.equal(result, true);

});

When('User Select Content Type {string} In Link', async function (string) {
        let result = await coveragePoliciesPage.SelectContentTypeInLinks();
        assert.equal(result, true);

});


When('User clicks on Create Button under Addnew link of Links', async function () {
        let result = await coveragePoliciesPage.ClicksOnCreateOfLinks();
        assert.equal(result, true);

});

Then('The Link should be created', async function () {
        let result = await coveragePoliciesPage.CheckTheHeaderOfCreatedLink();
        assert.equal(result, true);

});


Then('User should Verify the Grid of The Created Policy', async function () {
        let result = await coveragePoliciesPage.CheckDataOfCreatedLink();
        assert.equal(result, true);

});

When('User Clicks on URL', async function () {
        let result = await coveragePoliciesPage.ClickOnURLWhichWasCreated();
        assert.equal(result, true);

});

When('User closes the New Window', async function () {
        let result = await coveragePoliciesPage.CloseTheNewWindow();
        assert.equal(result, true);

});
Then('clicks on Home Button', async function () {
        let result = await coveragePoliciesPage.verifyUserInHomePage();
        assert.equal(result, true);

});
