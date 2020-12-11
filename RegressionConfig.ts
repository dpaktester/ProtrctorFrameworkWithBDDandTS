import {Config, browser} from "protractor";

import * as reporter from "cucumber-html-reporter";
import { PropertiesFileManager } from "./Utility/PropertiesFileManager";

export let config: Config = {
   
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',

    },

    // require feature files
  specs: [
    '../Features/Login.feature',
    '../Features/Drugs.feature',
    '../Features/LogOut.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './Steps/*.js' // accepts a glob
    ],
    priorities: {
      '1': ['@SPEC-LOGIN'],
      '3': ['@SPEC-LOGOUT'], 
     '2': ['@SPEC-Level2']
    
    
 },
    format:"json:./PhoenixReport.json",

    
},
onPrepare: () => {
  let  f = new PropertiesFileManager();
  f.LoadPropertiesFromFile();
  let globals = require('protractor');
  let browser = globals.browser; browser.manage().window().maximize();
  browser.manage().timeouts().implicitlyWait(10000); 
  browser.waitForAngularEnabled(false);
  
},
onComplete: () => { 
  var options = {
    name:"Level1 and Level2 Test Results of Phoenix",
  theme: 'hierarchy',
  jsonFile: './PhoenixReport.json',
  output: './Report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
      "App Version":"0.0.1",
      "Test Environment": "https://phoenix-test.businessonetech.net/",
      "Browser": "Chrome  Version 84.0.4147.125 (Official Build) (64-bit)",
      "Platform": "Windows 10",
      "Parallel": "Scenarios",
      "Executed": "Remote"
  }
 };

reporter.generate(options);
},
directConnect:true
  


};