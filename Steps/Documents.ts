
import { Given, When, Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { expect, assert } from "chai";
import { DocumentsPage } from "../Pages/DocumentsPage";

var prop = new PropertiesFileManager();
var documentPage = new DocumentsPage();
let compareHeaderResult = false;


Given('user in Document page', async function () {
  // Verify docuemnt page header....
  let result = await documentPage.VerifyDocumentPageHeader();
  assert.equal(result, true);
});

When('user get column names from test data in Documents', async function () {

  let result = await documentPage.verifyDocumentspage();
  assert.equal(result, true);
});

Then('column names should match agaist application in documents page', async function () {
  let result1 = await documentPage.getTheColumnNamesForDocuments();
  let result = await documentPage.compareHeaderNamesForDocuments();
  assert.equal(result, true);

});

When('user clicks on one of the documnet code', async function () {
  let result = await documentPage.ClickOnDocumentCode();
  assert.equal(result, true);
});

Then('document details page displayed with specified header', async function () {
  let result = await documentPage.VerfiyDetailPageWithHeaderName();
  assert.equal(result, true);
});

When('user clicks document link', async function () {
  let result = await documentPage.ClickOnDocumentHeaderInsideMainInfo();
  assert.equal(result, true);
});

When('user clicks Content type filter', async function () {
  let result = await documentPage.ClickOnContentTypes();
  assert.equal(result, true);

});

Then('user view all Content type', async function () {
  let result = await documentPage.comparedataOfConetntTypeOfDocuments();
  assert.equal(result, true);
});

Then('user clicks on one of Content type', async function () {
  let result = await documentPage.ClickOnhtmlConetntTypeRadioBtn();
  assert.equal(result, true);
});

Then('user clicks on apply button of content Type', async function () {
  let result = await documentPage.ClickOnApplyButtonafterSelectingContentType();
  assert.equal(result, true);
});

Then('document details displayed based on Content type', async function () {
  let result = await documentPage.VerifyUserappliedOnhtmlConetntType();
  assert.equal(result, true);
});


Then('user deselect on selected Content type', async function () {
  let result = await documentPage.ClickOnhtmlConetntTypeRadioBtn();
  assert.equal(result, true);
});


Then('document details displayed for all Content type', async function () {
  let result = await documentPage.verifyDocumentspage();
  assert.equal(result, true);
});

Then('user clicks on cancel button of content Type', async function () {
  let result = await documentPage.ClickCancelButtonAfterUnSelectingContentType();
  assert.equal(result, true);
});

When('user clicks Record Status filter', async function () {
  let result = await documentPage.ClickOnRecordStatusOfDocuments();
  assert.equal(result, true);
});
Then('user view all Record Status', async function () {
  let result1 = await documentPage.CheckHeaderOfRecordStatus();
  let result = await documentPage.CheckDataOfRecordStatus();
  assert.equal(result1, true);
  assert.equal(result, true);

});

Then('user clicks on one of Record Status in Documents', async function () {
  let result = await documentPage.SelectNewFromRecordType();
  assert.equal(result, true);
});
Then('user clicks on apply button of Record Status', async function () {
  let result = await documentPage.ClickOnApplyBtnOnRecordStatus();
  assert.equal(result, true);

})

Then('document details displayed based on Record Status', async function () {
  let result = await documentPage.VerifySelectedRecordType();
  assert.equal(result, true);
});

Then('user deselect on selected Record Status in Documents', async function () {
  let result = await documentPage.SelectNewFromRecordType();
  assert.equal(result, true);
});

Then('document details displayed for all Record Status after cancellation', async function () {
  let result = await documentPage.verifyDocumentspage();
  assert.equal(result, true);
});

Then('user clicks on cancel button of Record Status', async function () {
  let result = await documentPage.ClickCancelButtonAfterUnSelectingContentType();
});


Then('document details displayed for all Record Status', async function () {
  let result = await documentPage.verifyDocumentspage();
  assert.equal(result, true);
});


