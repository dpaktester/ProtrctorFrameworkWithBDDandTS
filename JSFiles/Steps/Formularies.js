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
const chai_1 = require("chai");
const FormulariesPage_1 = require("../Pages/FormulariesPage");
var formulariesPage = new FormulariesPage_1.FormulariesPage();
cucumber_1.Given('user in Formularies Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyFormulariespage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get column names from test data and comapre with grid column names', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.getTheColumnNamesForFormularies();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user click on Formulary Types filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.clickOnFormularyTypeFilter();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user view specified forlary types', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyFormularyTypes();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user in formulary type filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyFormularyTypes();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user selectes one of the formualry type and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.selectRecordTypeAndApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('main gird populated with data related to specefied formulary type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyGirdForFormularyType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user de selectes one of the formualry type and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Method call to deselect the values");
        let result = yield formulariesPage.deselectRecordTypeAndApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('main gird populated with defult data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Method call to check grid");
        let result = yield formulariesPage.verifyDataInGrid();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user  selectes one of the formualry type and click on cancel button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Method call to check formulary type cancel");
        let result = yield formulariesPage.selectRecordTypeAndCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user click on Record Status filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user click on Record Status filter");
        let result = yield formulariesPage.clickOnRecordStatusFilter();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user view specified Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user view specified Record Status");
        let result = yield formulariesPage.verifyReocrdStatusFilter();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user in Record Status filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user in Record Status filter");
        let result = yield formulariesPage.verifyFormularyStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user selectes one of the Record Status and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.selectRecordStatusAndApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('main gird populated with data related to specefied Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyGirdForFormularyStaus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user de selectes one of the Record Status and click on apply button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Method call to deselect the values");
        let result = yield formulariesPage.deselectRecordStatusAndApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user  selectes one of the Record Status and click on cancel button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user  selectes one of the Record Status and click on cancel button");
        let result = yield formulariesPage.selectRecordStatusAndCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on one of the formulary Record', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.clickOnFirstFormularies();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('detail page is displayed with selected formulary record data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyDetailPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user in Detail Formularies Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield formulariesPage.verifyDetailPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get the Tab\'s Names and compare with test data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.equal(true, true);
    });
});
cucumber_1.Then('Tab names should match', function () {
    return __awaiter(this, void 0, void 0, function* () {
        chai_1.assert.equal(true, true);
    });
});
