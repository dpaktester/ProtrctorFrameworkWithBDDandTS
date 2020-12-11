"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
const LoginPage_1 = require("../Pages/LoginPage");
const HomePage_1 = require("../Pages/HomePage");
const PlansPage_1 = require("../Pages/PlansPage");
const ProductsPage_1 = require("../Pages/ProductsPage");
const FormulariesPage_1 = require("../Pages/FormulariesPage");
const CoveragePoliciesPage_1 = require("../Pages/CoveragePoliciesPage");
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const AdministrationPage_1 = require("../Pages/AdministrationPage");
var loginPage = new LoginPage_1.LoginPage();
var homePage = new HomePage_1.HomePage();
var plansPage = new PlansPage_1.PlansPage();
var productsPage = new ProductsPage_1.ProductsPage();
var formulariesPage = new FormulariesPage_1.FormulariesPage();
var coveragePoliciesPage = new CoveragePoliciesPage_1.CoveragePoliciesPage();
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var administrationPage = new AdministrationPage_1.AdministrationPage();
cucumber_1.Given('user launches the browser and enters Phoenix Test URL', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize().then(function () {
            protractor_1.browser.get(prop.GetPropertyValue("URL"))
                .then(() => (console.log('Test')));
        });
        let result = yield loginPage.clickOnLoginButton();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user enters valid user credentials and clicks on Login', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield loginPage.entercredentials();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is on home page with the logged in ID', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield loginPage.verifyUserName();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user is on Home Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.verifyTitleHomePage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Organizations module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnOragnasization();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Organization Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
});
cucumber_1.Given('user clicks on Menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnMenu();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Plans module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("sssssss");
        let result = yield homePage.ClickOnPlan();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Plans Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield plansPage.verifyPlanspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Products module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnProducts();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Products Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield productsPage.verifyProductspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Formualaries module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnFormularies();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Formularies Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyFormulariespage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Coverage Policies module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnCoveragePolicies();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Coverage policies Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield coveragePoliciesPage.verifyCoveragePoliciespage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on the Administration module in left hand side Pane', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield homePage.ClickOnAdminstration();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Administration Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyAdministationpage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on Agents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnAgents();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is on Agents Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyAgentpage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on Channels', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnChannels();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Channels Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyChannelspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnDocumnets();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Documents Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyDocumentspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on Links', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnLinks();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Links Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyLinkspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User clicks on Drugs', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnDrugs();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in Drugs Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyDrugspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on App Version', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.clickOnAppVersion();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('User is in App version Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield administrationPage.verifyAppVersionpage();
        chai_1.assert.equal(result, true);
    });
});
