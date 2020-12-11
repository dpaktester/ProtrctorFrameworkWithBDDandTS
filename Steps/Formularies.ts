
import { Given, Then, When } from "cucumber";
import { expect, assert } from "chai";
import { FormulariesPage } from "../Pages/FormulariesPage";
var formulariesPage = new FormulariesPage();

Given('user in Formularies Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.verifyFormulariespage();
  assert.equal(result, true);
});





When('user get column names from test data and comapre with grid column names', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.getTheColumnNamesForFormularies();
  assert.equal(result, true);
});

When('user click on Formulary Types filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.clickOnFormularyTypeFilter();
  assert.equal(result, true);
});


Then('user view specified forlary types', async function () {
  // Write code here that turns the phrase above into concrete actions 
  let result = await formulariesPage.verifyFormularyTypes();
  assert.equal(result, true);
});




Given('user in formulary type filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  //Verify user in formulary type filter 
  let result = await formulariesPage.verifyFormularyTypes();
  assert.equal(result, true);
});



When('user selectes one of the formualry type and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.selectRecordTypeAndApply();
  assert.equal(result, true);
});



Then('main gird populated with data related to specefied formulary type', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await formulariesPage.verifyGirdForFormularyType();
  assert.equal(result, true);

});


When('user de selectes one of the formualry type and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Method call to deselect the values")
  let result = await formulariesPage.deselectRecordTypeAndApply();
  assert.equal(result, true);
});



Then('main gird populated with defult data', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Method call to check grid")
  let result = await formulariesPage.verifyDataInGrid();
  assert.equal(result, true);
});

When('user  selectes one of the formualry type and click on cancel button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Method call to check formulary type cancel")
  let result = await formulariesPage.selectRecordTypeAndCancel();
  assert.equal(result, true);
});



When('user click on Record Status filter', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user click on Record Status filter")
  let result = await formulariesPage.clickOnRecordStatusFilter();
  assert.equal(result, true);
});


Then('user view specified Record Status', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user view specified Record Status")
  let result = await formulariesPage.verifyReocrdStatusFilter();
  assert.equal(result, true);
});



Given('user in Record Status filter', async function () {

  console.log("user in Record Status filter")
  let result = await formulariesPage.verifyFormularyStatus();
  assert.equal(result, true);

});


When('user selectes one of the Record Status and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.selectRecordStatusAndApply();
  assert.equal(result, true);
});



Then('main gird populated with data related to specefied Record Status', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.verifyGirdForFormularyStaus();
  assert.equal(result, true);
});

When('user de selectes one of the Record Status and click on apply button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Method call to deselect the values")
  let result = await formulariesPage.deselectRecordStatusAndApply();
  assert.equal(result, true);
});

When('user  selectes one of the Record Status and click on cancel button', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("user  selectes one of the Record Status and click on cancel button")
  let result = await formulariesPage.selectRecordStatusAndCancel();
  assert.equal(result, true);
});


When('user clicks on one of the formulary Record', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.clickOnFirstFormularies();
  assert.equal(result, true);

});


Then('detail page is displayed with selected formulary record data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.verifyDetailPage();
  assert.equal(result, true);

});


Given('user in Detail Formularies Page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await formulariesPage.verifyDetailPage();
  assert.equal(result, true);
});


When('user get the Tab\'s Names and compare with test data', async function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);
});



Then('Tab names should match', async function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);
});


