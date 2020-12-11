import { Before,After, Status } from "cucumber";
import { browser } from "protractor";

// Synchronous

Before(function () {
    this.count = 0;
  });
  
  
  // Asynchronous Promise
  After(async function (scenario) {
    // Assuming this.driver is a selenium webdriver
    if(scenario.result.status==Status.FAILED){
        //code to take screen shot
     const screenshot =   await  browser.takeScreenshot();
     this.attach(screenshot,"image/png");
    }
  });