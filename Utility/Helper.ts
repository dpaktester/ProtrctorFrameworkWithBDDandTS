import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";

export class Helper{
 
    static Log(): any {
        var log4js = require('log4js');
        log4js.configure('./log4js.json');
        //var logger = log4js.getLogger(); //for both console and file
        let log = log4js.getLogger("default");
        return log;
    }
     public async RandomNumber(){
        var newData = [];
        var size =100;
        var baseSize = 0;
    let Number=Math.floor( Math.random()*100000).toString().substring(0,5);
    console.log("RandomNumber ", Number);
    return Number;         
     }

     public async PressBackButton(){
         await browser.navigate().back();
         return true;
     }

     public  waitForTexttoAppear(ele :any,textString:any )
     {
         
         var EC = protractor.ExpectedConditions;
         console.log("Text To Be Searched",textString)
         console.log("Text To Be Searched wait",textString)
        browser.wait(function() {
            
             return ele.getText().then(function(text:any) {
               return text.trim() === textString.trim();
             });
           }, 30000); 

         
     }
     public  waitForTexttoAppear_1(ele :any,textString:any )
     {
         
         var EC = protractor.ExpectedConditions;
         console.log("Text To Be Searched",textString)
         console.log("Text To Be Searched wait",textString)
         let result =browser.wait(function() {
            
             return ele.getText().then(function(text:any) {
               return text.trim() === textString.trim();
             });
           }, 40000); 

         return result;
     }
}