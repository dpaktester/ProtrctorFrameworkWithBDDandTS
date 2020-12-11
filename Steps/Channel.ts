
import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { expect, assert } from "chai";
import { ChannelPage } from "../Pages/ChannelPage";
let channelPage = new ChannelPage();
Given('user is in channel page', async function () {
    let result = await channelPage.verifyChannelHeader();

    assert.equal(result, true);
});




When('user get all column names and compare with testdata', async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await channelPage.getTheColumnNames();
    assert.equal(result, true);
});


Then('column name should match', async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await channelPage.compareHeaderNames();
    assert.equal(result, true);
});


When('enters text in search textbox', async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await channelPage.enetrTextInSearchBox();
    assert.equal(result, true);
});


Then('channel page displays based on text', async function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await channelPage.verifySearchText();
    assert.equal(result, true);
});


  When('user click on channel', async function () {
    // Write code here that turns the phrase above into concrete actions
   let result = await channelPage.clickOnChannel();
   assert.equal(result,true);
  });


  Then('detail view of channel is displayed',async  function () {
    // Write code here that turns the phrase above into concrete actions
    let result = await channelPage.verifyDetailPage();
   assert.equal(result,true);
  });
