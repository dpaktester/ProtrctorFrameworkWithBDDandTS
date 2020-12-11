import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { expect,assert } from "chai";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
//import { OrganizationPage } from "../Pages/OrganizationsPage";
import { PlansPage } from "../Pages/PlansPage";
import { ProductsPage } from "../Pages/ProductsPage";
import { FormulariesPage } from "../Pages/FormulariesPage";
import { CoveragePoliciesPage } from "../Pages/CoveragePoliciesPage";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { AdministrationPage } from "../Pages/AdministrationPage";
var loginPage = new LoginPage();
var homePage = new HomePage();
//var organizationPage = new OrganizationPage();
var plansPage = new PlansPage();
var productsPage = new ProductsPage();
var formulariesPage = new FormulariesPage();
var coveragePoliciesPage = new CoveragePoliciesPage();
var prop = new PropertiesFileManager();
var administrationPage = new AdministrationPage();
      Given('user launches the browser and enters Phoenix Test URL', async function () {
        // Write code here that turns the phrase above into concrete actions
        await browser.manage().window().maximize().then(function() {
            browser.get(prop.GetPropertyValue("URL"))
              .then(() => (console.log('Test')));
        });
        let result =  await loginPage.clickOnLoginButton();
        assert.equal(result,true);
      });


      When('user enters valid user credentials and clicks on Login',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result =  await loginPage.entercredentials();
        assert.equal(result,true);
      });




      Then('user is on home page with the logged in ID', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await loginPage.verifyUserName();
          assert.equal(result,true);
      });

      Given('user is on Home Page', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.verifyTitleHomePage();
        assert.equal(result,true);
      
      });

      When('user clicks on the Organizations module in left hand side Pane', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result =  await homePage.ClickOnOragnasization();
        assert.equal(result, true);
      });

      Then('user is in Organization Page', async function () {
        // Write code here that turns the phrase above into concrete actions
       // let result = await organizationPage.verifyHeaderNames();
        //assert.equal(result, true);
      });

      Given('user clicks on Menu button', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.ClickOnMenu();
        assert.equal(result, true);
      });
      
      When('user clicks on the Plans module in left hand side Pane',async function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("sssssss");
        let result = await homePage.ClickOnPlan();
        assert.equal(result, true);
      });

      
      Then('user is in Plans Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await plansPage.verifyPlanspage();
        assert.equal(result, true);
      });

      When('user clicks on the Products module in left hand side Pane',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.ClickOnProducts();
        assert.equal(result, true);
      });

      Then('user is in Products Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await productsPage.verifyProductspage();
        assert.equal(result, true);
        
     
      });

      When('user clicks on the Formualaries module in left hand side Pane',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.ClickOnFormularies();
        assert.equal(result, true);
      });

      Then('user is in Formularies Page', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await formulariesPage.verifyFormulariespage();
        assert.equal(result, true);
      });

     

      When('user clicks on the Coverage Policies module in left hand side Pane',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.ClickOnCoveragePolicies();
        assert.equal(result, true);
      });



      Then('user is in Coverage policies Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await coveragePoliciesPage.verifyCoveragePoliciespage();
        assert.equal(result, true);
      });


      When('user clicks on the Administration module in left hand side Pane',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await homePage.ClickOnAdminstration();
        assert.equal(result, true);
      });

      Then('user is in Administration Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyAdministationpage();
        assert.equal(result, true);
      });

      Then('user clicks on Agents', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnAgents();
        assert.equal(result, true);
      });

      
      Then('user is on Agents Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyAgentpage();
        assert.equal(result, true);
      });

      Then('user clicks on Channels',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnChannels();
        assert.equal(result, true);
      });
      Then('user is in Channels Page', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyChannelspage();
        assert.equal(result, true);
      });


      Then('user clicks on Documents', async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnDocumnets();
        assert.equal(result, true);
      });
      Then('user is in Documents Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyDocumentspage();
        assert.equal(result, true);
      });

      Then('user clicks on Links',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnLinks();
        assert.equal(result, true);
      });

      
      Then('user is in Links Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyLinkspage();
        assert.equal(result, true);
      });

      Then('User clicks on Drugs',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnDrugs();
        assert.equal(result, true);
      });

      Then('user is in Drugs Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyDrugspage();
        assert.equal(result, true);
      });

      Then('user clicks on App Version',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.clickOnAppVersion();
        assert.equal(result, true);
      });

      Then('User is in App version Page',async function () {
        // Write code here that turns the phrase above into concrete actions
        let result = await administrationPage.verifyAppVersionpage();
        assert.equal(result, true);
      });


  