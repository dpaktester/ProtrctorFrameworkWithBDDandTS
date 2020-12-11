import { Given,Then,When } from "cucumber";
import { browser } from "protractor";
import { expect,assert } from "chai";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { Helper } from '../Utility/Helper';
let loginPage = new LoginPage();



    Given('user is logged in to the Application', function () {
           // Write code here that turns the phrase above into concrete actions
          assert.equal(true,true);
         });

    When('user clicks on the Account Name Dropdown and clicks Logout', async function () {
           // Write code here that turns the phrase above into concrete actions
           let result =  await loginPage.clickOnAcctMenu();
           assert.equal(result,true);
         });

    Then('user should be able to log out from the Phoenix Application.',async function () {
           // Write code here that turns the phrase above into concrete actions
           let result =  await loginPage.verifyLogout();
           assert.equal(result,true);
         });