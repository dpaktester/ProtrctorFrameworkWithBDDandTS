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
const ChannelPage_1 = require("../Pages/ChannelPage");
let channelPage = new ChannelPage_1.ChannelPage();
cucumber_1.Given('user is in channel page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.verifyChannelHeader();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user get all column names and compare with testdata', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.getTheColumnNames();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('column name should match', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.compareHeaderNames();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('enters text in search textbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.enetrTextInSearchBox();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('channel page displays based on text', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.verifySearchText();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.When('user click on channel', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.clickOnChannel();
        chai_1.assert.equal(result, true);
    });
});
cucumber_1.Then('detail view of channel is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield channelPage.verifyDetailPage();
        chai_1.assert.equal(result, true);
    });
});
