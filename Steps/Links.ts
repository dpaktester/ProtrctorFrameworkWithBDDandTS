
import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { expect, assert } from "chai";
import { LinksPage } from "../Pages/LinksPage";
import { link } from "fs";
let linkPage = new LinksPage();

Given('user is on links page', async function () {
  // Checks the user in links page
  console.log("User in the link Page");
  let result = await linkPage.verifyOnLinkPage();
  assert.equal(result, true);
});



When('user get column names from test data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.getTheColumnNames();
  assert.equal(result, true);
});




Then('column names should match', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.compareHeaderNames();
  assert.equal(result, true);

});

Given('user is on links Page', function () {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(true, true);

});


When('user clicks on Record Type and select one option click apply', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.clickAndSelectRecordType();
  assert.equal(result, true);

});


Then('link page is refershed with selected Reord Type data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyDisplayBasedRecordType();
  assert.equal(result, true);
});



When('user clicks on Record Type and deselect selected option click apply', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.deselectSelectedOptionClickApply();
  assert.equal(result, true);
});



Then('link page is refershed with all Reord Type data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyForAllData();
  assert.equal(result, true);
});



When('user clicks on Record Type and select  option click cancel', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.selectRecordTypeForCancel();
  assert.equal(result, true);
});



Then('user click on RecordType', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.clickOnRecordTypeForCancel();
  assert.equal(result, true);
});



Then('Any Record type option should not be selected', async function () {
  // Write code here that turns the phrase above into concrete actions

  let result = await linkPage.verifyRecordTypeForCancel();
  assert.equal(result, true);
});


When('user clicks on Content Type and select one option click apply', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.clickAndSelectContactType();
  assert.equal(result, true);
});



Then('link page is refershed with selected Content Type data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyDisplayBasedContentType();
  assert.equal(result, true);
});


When('user clicks on Content Type and deselect selected option click apply', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.deselectSelectedContentOptionClickApply();
  assert.equal(result, true);
});


Then('link page is refershed with all selected Content Type data', async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyForAllData();
  assert.equal(result, true);
});




When('user clicks on Content Type and select  option click cancel',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.selectContentTypeForCancel();
  assert.equal(result,true);
});



Then('user click on Content',async function () {
  // Write code here that turns the phrase above into concrete actions
let result = await  linkPage.clickOnContentTypeForCancel();
assert.equal(result,true);
});


Then('Any Content type option should not be selected',async function () {
  // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyRecordTypeForCancel();
  assert.equal(result, true);
});



  When('user clicks on Status Type and select one option click apply',async  function () {
    // Write code here that turns the phrase above into concrete actions
   let result = await linkPage.clickAndSelectStatusType();
   assert.equal(result, true);
  });



  Then('link page is refershed with selected Status Type data',async function () {
    // Write code here that turns the phrase above into concrete actions
  let result = await linkPage.verifyDisplayBasedStatusType();
  assert.equal(result,true);
  });


    When('user clicks on status Type and deselect selected option click apply',async function () {
      // Write code here that turns the phrase above into concrete actions
    let result = await linkPage.deselectSelectedStatusOptionClickApply();
    assert.equal(result, true);
    });


    

    Then('link page is refershed with all selected Status Type data',async function () {
      // Write code here that turns the phrase above into concrete actions
      let result = await linkPage.verifyForAllData();
      assert.equal(result, true);
    });



      When('user clicks on Status Type and select  option click cancel',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await linkPage.selectStatusTypeForCancel();
        assert.equal(result,true);
      });



      Then('user click on Status', async function () {
        // Write code here that turns the phrase above into concrete actions
       let result = await linkPage.clickOnStatusTypeForCancel();
       assert.equal(result,true);
      });



      Then('Any Status type option should not be selected',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await linkPage.verifyRecordTypeForCancel();
        assert.equal(result, true);
      });



        When('user clicks on menu clicks on home', async function () {
          // Write code here that turns the phrase above into concrete actions
          let result = await linkPage.clickOnHome();
          assert.equal(result, true);
        });

  
        Then('user is in home page',async function () {
          // Write code here that turns the phrase above into concrete actions
          let result = await linkPage.verifyUserInHomePage();
          assert.equal(result, true);
        });



