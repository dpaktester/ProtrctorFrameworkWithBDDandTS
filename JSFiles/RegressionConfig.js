"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = __importStar(require("cucumber-html-reporter"));
const PropertiesFileManager_1 = require("./Utility/PropertiesFileManager");
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
    },
    specs: [
        '../Features/Login.feature',
        '../Features/Drugs.feature',
        '../Features/LogOut.feature'
    ],
    cucumberOpts: {
        require: [
            './Steps/*.js'
        ],
        priorities: {
            '1': ['@SPEC-LOGIN'],
            '3': ['@SPEC-LOGOUT'],
            '2': ['@SPEC-Level2']
        },
        format: "json:./PhoenixReport.json",
    },
    onPrepare: () => {
        let f = new PropertiesFileManager_1.PropertiesFileManager();
        f.LoadPropertiesFromFile();
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(10000);
        browser.waitForAngularEnabled(false);
    },
    onComplete: () => {
        var options = {
            name: "Level1 and Level2 Test Results of Phoenix",
            theme: 'hierarchy',
            jsonFile: './PhoenixReport.json',
            output: './Report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.0.1",
                "Test Environment": "https://phoenix-test.businessonetech.net/",
                "Browser": "Chrome  Version 84.0.4147.125 (Official Build) (64-bit)",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    directConnect: true
};
