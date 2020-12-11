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
const LinksPage_1 = require("../Pages/LinksPage");
let linkPage = new LinksPage_1.LinksPage();
cucumber_1.Given('user is on links page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("User in the link Page");
        let result = yield linkPage.verifyOnLinkPage();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get column names from test data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.getTheColumnNames();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column names should match', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.compareHeaderNames();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Given('user is on links Page', function () {
    chai_1.assert.equal(true, true);
});
cucumber_1.When('user clicks on Record Type and select one option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickAndSelectRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with selected Reord Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyDisplayBasedRecordType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Record Type and deselect selected option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.deselectSelectedOptionClickApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with all Reord Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyForAllData();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Record Type and select  option click cancel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.selectRecordTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user click on RecordType', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickOnRecordTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Any Record type option should not be selected', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyRecordTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Content Type and select one option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickAndSelectContactType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with selected Content Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyDisplayBasedContentType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Content Type and deselect selected option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.deselectSelectedContentOptionClickApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with all selected Content Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyForAllData();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Content Type and select  option click cancel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.selectContentTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user click on Content', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickOnContentTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Any Content type option should not be selected', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyRecordTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Status Type and select one option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickAndSelectStatusType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with selected Status Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyDisplayBasedStatusType();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on status Type and deselect selected option click apply', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.deselectSelectedStatusOptionClickApply();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('link page is refershed with all selected Status Type data', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyForAllData();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on Status Type and select  option click cancel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.selectStatusTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user click on Status', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickOnStatusTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('Any Status type option should not be selected', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyRecordTypeForCancel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user clicks on menu clicks on home', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.clickOnHome();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('user is in home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield linkPage.verifyUserInHomePage();
        chai_1.assert.equal(result, true);
    });
});
