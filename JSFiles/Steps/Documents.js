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
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const chai_1 = require("chai");
const DocumentsPage_1 = require("../Pages/DocumentsPage");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var documentPage = new DocumentsPage_1.DocumentsPage();
let compareHeaderResult = false;
cucumber_1.Given('user in Document page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.VerifyDocumentPageHeader();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get column names from test data in Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.verifyDocumentspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match agaist application in documents page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield documentPage.getTheColumnNamesForDocuments();
        let result = yield documentPage.compareHeaderNamesForDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on one of the documnet code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnDocumentCode();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('document details page displayed with specified header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.VerfiyDetailPageWithHeaderName();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks document link', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnDocumentHeaderInsideMainInfo();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks Content type filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnContentTypes();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user view all Content type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.comparedataOfConetntTypeOfDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on one of Content type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnhtmlConetntTypeRadioBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on apply button of content Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnApplyButtonafterSelectingContentType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('document details displayed based on Content type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.VerifyUserappliedOnhtmlConetntType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user deselect on selected Content type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnhtmlConetntTypeRadioBtn();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('document details displayed for all Content type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.verifyDocumentspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on cancel button of content Type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickCancelButtonAfterUnSelectingContentType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks Record Status filter', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnRecordStatusOfDocuments();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user view all Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result1 = yield documentPage.CheckHeaderOfRecordStatus();
        let result = yield documentPage.CheckDataOfRecordStatus();
        chai_1.assert.equal(result1, true);
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on one of Record Status in Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.SelectNewFromRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on apply button of Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickOnApplyBtnOnRecordStatus();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('document details displayed based on Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.VerifySelectedRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user deselect on selected Record Status in Documents', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.SelectNewFromRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('document details displayed for all Record Status after cancellation', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.verifyDocumentspage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user clicks on cancel button of Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.ClickCancelButtonAfterUnSelectingContentType();
    });
});
cucumber_1.Then('document details displayed for all Record Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield documentPage.verifyDocumentspage();
        chai_1.assert.equal(result, true);
    });
});
