import { Given, When, Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { expect, assert } from "chai";
import { DrugsPage } from "../Pages/DrugsPage";
import { AssertionError, equal } from "assert";
import { Helper } from "../Utility/Helper";
import { CoveragePoliciesPage } from "../Pages/CoveragePoliciesPage";

var drugpage = new DrugsPage();
var coveragePoliciesPage= new CoveragePoliciesPage();
Given('user in drugs page', async function () {
    let result = await drugpage.verifyDrugsPage();
    assert.equal(result, true);
});

When('user get column names from test data in drugs', async function () {
    let result = await drugpage.verifyDrugTable();
    assert.equal(result, true);
});
Then('column names should match agaist application in drugs page', async function () {
    let result = await drugpage.compareHeaderNamesForDrugs();
    assert.equal(result, true);
});
When('user clicks on one of the drug code', async function () {
    let result = await drugpage.ClickOnDrugCode();
    assert.equal(result, true);
});

Then('drug details page displayed with specified header', async function () {
    let result = await drugpage.VerfiyDetailPageWithHeaderNameforDrugs();
    assert.equal(result, true);
});

When('user clicks drugs link', async function () {
    let result = await drugpage.ClickOnDrugsHeaderInsideMainInfo();
    assert.equal(result, true);
});

When('user clicks drug type filter', async function () {
    let result = await drugpage.ClickOnDrugTypes();
    assert.equal(result, true);
});

Then('user view all drug type', async function () {
    let result = await drugpage.comparedataOfDrugTypesOfDrugs();
    assert.equal(result, true);
});

When('user clicks on one of drug type', async function () {
    let result = await drugpage.ClickOnMultiSourceDrugTypeRadioBtn();
    assert.equal(result, true);
});

When('user clicks on apply button of drug Type', async function () {
    let result = await drugpage.ClickOnApplyBtnAfterSelectingDrugType();
    assert.equal(result, true);
});
Then('drug details displayed based on drug type', async function () {
    let result = await drugpage.VerifyUserappliedOnMultiSourceDrugType();
    assert.equal(result, true);
});
Then('Header of Drug Types is {string}', async function (text) {
    let result = await drugpage.CheckHeaderOfDrugTypes();
    assert.equal(result, true);
});

When('user clicks on cancel button of drug Type', async function () {
    let result = await drugpage.ClickCancelButtonAfterUnSelectingDrugType();
    assert.equal(result, true);
});

When('user Enters {string} into the searchbox of Drugs', async function (text) {
    let result = await drugpage.EnterTextIntoSearchPanel();
    assert.equal(result, true);
});
Then('user should be able to see only otezla drug', async function () {
    let result = await drugpage.verifyOtezlaDrugInGrid();
    assert.equal(result, true);
});

When('user removes {string} from the searchbox', async function (text) {
    let result = await drugpage.RemoveTextfromSearchPanel();
    assert.equal(result, true);
});

Then('user should be able to see the all the records', async function () {
    let result = await drugpage.verifyDrugTable();
    assert.equal(result, true);
});

When('user clicks on New button', async function () {
    let result = await drugpage.ClickOnNewBtnInDrugs();
    assert.equal(result, true);
});

Then('user should se the Header as {string}', async function (text) {
    let result = await drugpage.CheckHeaderOfNewInDrugs();
    assert.equal(result, true);
});

Then('user should be able to see the fileds for new Record', async function () {
    let result = await drugpage.getThefieldsForNewInDrugs();
    assert.equal(result, true);
});
When('user clicks on cancel', async function () {
    let result = await drugpage.ClickOnApplyBtnAfterSelectingDrugType();
    assert.equal(result, true);
});

Then('user should see the screen without any changes', async function () {
    let result = await drugpage.verifyDrugTable();
    assert.equal(result, true);
});

When('user enters Name in New of drugs', async function () {
    let result = await drugpage.EnterDrugNameInNewOfDrugs();
    assert.equal(result, true);
});
When('user enters Description in New of drugs', async function () {
    let result = await drugpage.EnterDescriptionInNewOfDrugs();
    assert.equal(result, true);
});
When('user selects drug type in New of drugs', async function () {
    let result = await drugpage.EnyterDrugTypeInNewOfDrugs();
    assert.equal(result, true);
});
When('user enters Drug code in New of drugs', async function () {
    let result = await drugpage.EnterDrugCodeInNewOfDrugs();
    assert.equal(result, true);
});

Then('user clicks on save of New creation', async function () {
    let result = await drugpage.ClickOnSaveBtnInnewOfDrugs();
    assert.equal(result, true);
});

Then('clicks on Home Button', async function () {
    let result = await coveragePoliciesPage.verifyUserInHomePage();
    assert.equal(result, true);

});

