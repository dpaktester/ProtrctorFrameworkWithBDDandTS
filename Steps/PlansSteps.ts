import { Given, When, Then } from "cucumber";
import { HomePage } from "../Pages/HomePage";
import { PlansPage } from "../Pages/PlansPage";
import { expect, assert } from "chai";
import { AssertionError, equal } from "assert";
import { Helper } from "../Utility/Helper";
import { DocumentsPage } from "../Pages/DocumentsPage";
import { LinksPage } from "../Pages/LinksPage";
import { browser } from "protractor";

var homePage = new HomePage();
var plans = new PlansPage();
var docs= new DocumentsPage();
var help = new Helper();
var link = new LinksPage();

Given ('user landed in plans page',async function(){
    let result = await plans.verifyPlanspage();
    assert.equal(result, true);
})

Then ('column names should match against requirement in plans page',async function(){
    let result = await plans.getTheColumnNamesForPlans();
    assert.equal(result, true);
});
When ('user enters {string} in search box',async function(text){
    let result = await plans.EnterTextIntoSearchPanel();
    assert.equal(result,true);
});
Then ('Plan name should only show the plans as per searched criteria',async function(){
    let result = await plans.VerifyTextInSearchPanel();
    assert.equal(result,true);
});
When ('user clears the Search Field in plans',async function(){
    let result = await plans.ClearTextIntoSearchPanel();
    assert.equal(result,true);
});
Then ('the page should display the data as per the selection',async function(){
    let result = await plans.VerifyUserReomvesTheSearchBox();
    assert.equal(result,true);
});
When ('user clicks on Record Status Filter in plans',async function(){
    let result = await plans.ClickOnRecordStatusBtn();
    assert.equal(result,true);
});

When ('the header of Record Status should be {string} inside plans',async function(text){
    let result = await plans.CheckHeaderOfRecordStatus();
    assert.equal(result,true);
});
Then ('data in Record status should match against the requirement in plans',async function(){
    let result = await plans.CheckDataOfRecordStatus();
    assert.equal(result,true);
});
When ('user clicks on cancel on Record Status of plans',async function(){
    let result = await plans.ClickOnCancelBtn();
    assert.equal(result,true);
});
When ('user clicks on New Status of Record status in plans',async function(){
    let result = await plans.SelectNewFromRecordType();
    assert.equal(result,true);
});
When ('user click on apply of Record status in plans',async function(){
    let result = await plans.ClickOnApplyButton();
    assert.equal(result,true);
});
Then ('the plans page should show the data only with New status',async function(){
    let result = await plans.VerifySelectedRecordType();
    assert.equal(result,true);
});
When ('user clicks on one of the Plan Name',async function(){
    let result = await plans.ClickOnFirstLinkOfPlans();
    assert.equal(result,true);
});
Then ('Plan details page displayed with specified header',async function(){
    let result = await plans.VerfiyDetailPageWithHeaderNameforPlans();
    assert.equal(result,true);
});
Given ('user is in details page of plans',async function(){
    let result = await plans.VerifyDetailPage();
    assert.equal(result,true);
});
When ('user clicks on Documents link in plans',async function(){
    let result = await plans.ClickOnDocumentsLinkInsidePlans();
    browser.sleep(10000);
    assert.equal(result,true);
});
Then ('column names should match agaisnt requirement for Documents for Drugs inside plans',async function(){
    let result1=await docs.getTheColumnNamesForDocuments();
    let result = await docs.compareHeaderNamesForDocuments();
    assert.equal(result,true);
});

When('user clicks on Links link in plans',async function(){
    browser.sleep(10000)
    let result = await plans.ClickOnLinksBtnInsidePlans();
    assert.equal(result,true);
});

Then ('column names should match agaisnt requirement for Documents for Links inside plans',async function(){
    browser.sleep(10000)
    let result1 = await link.getTheColumnNames();
    let result = await link.compareHeaderNames();
    assert.equal(result,true);
});
When ('user clicks on History link inside plans',async function(){
    browser.sleep(10000)
    let result = await plans.ClickOnHistoryLinkInsidePlans();
    assert.equal(result,true);
});
Then ('column names should match agaisnt requirement for Documents for History inside plans',async function(){
    browser.sleep(10000)
    let result1 = await plans.getTheColumnNamesForHistoryInsidePlans();
    let result = await plans.compareHeaderNamesForHistoryInsidePlans();
    assert.equal(result,true);
    
});

Then ('user clicks plans link',async function(){
    let result = await plans.ClickOnPlansLinkInsideDetailsPage();
    assert.equal(result,true);
    
});

