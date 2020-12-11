import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, ElementArrayFinder, By, browser } from "protractor";
import { Helper } from "../Utility/Helper";



var prop = new PropertiesFileManager();

let headerActualArray = new Array();
let headerExpectedArray = new Array();

let helper = new Helper();
let firstFormulariNameInGrid = "";
export  class FormulariesPage{
    FormulariesHeader:ElementFinder ;
    TableCount:ElementArrayFinder;
    formularyTypeElement:ElementFinder;
    recordListCheckBox:ElementArrayFinder;
    applyButton: ElementFinder;
    formularyTypeOnGrid:ElementFinder;
    cancelButton:ElementFinder;
    recordStatuFilter:ElementFinder;
    firstFormulariesInGridElement: ElementFinder;
    formularyStausOnGrid:ElementFinder;
    constructor(){
        
        this.recordStatuFilter = element(by.xpath("//*[@id='recordStatusFilter']/button"));
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.FormulariesHeader =  element(by.xpath("//h1[@class ='grid-header']"));
        this.formularyTypeElement = element(by.xpath("//*[@id='formularyTypeFilter']/button"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.applyButton = element(by.xpath("//*[@type= 'submit']"));
        this.formularyTypeOnGrid = element(by.xpath("//table//tr[2]/td[4]/span"));
        this.formularyStausOnGrid = element(by.xpath("//table//tr[2]/td[8]/span"));
        this.cancelButton=element(by.xpath("//*[@class='app-button'][2]"))
        this.firstFormulariesInGridElement =  element(by.xpath("//table//tr[2]/td[2]/a"));
    }

  public async verifyFormulariespage(){
    try{
        var retrunresult = false;
        await this.FormulariesHeader.getText().then(function(text){
            if(text.trim() == "Formularies"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Formularies  page"+count);
        if (count > 0){
            retrunresult = true;
        }
        else{
            retrunresult = false;
        }
     return retrunresult;
    }
    catch(e){
        return false;
    }
   

  }


  public async getTheColumnNamesForFormularies() {
    try {
        console.log("Get number of columns ");
        let tempCount =await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
        console.log("tempCount",Number(tempCount));
        //var value = await this.tableCount.all(By.tagName("th")).count();
        //console.log(value);
        var value = Number(tempCount);

        console.log(value);


        var headerNames = prop.GetPropertyValue("FORMULARIES_HEADERNAMES");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            headerExpectedArray[i] = eachHeaderNames[i].trim();

        }

        var cells = this.TableCount.all(By.tagName("th"));
        for (var i = 1; i <= value; i++) {
            let textname = await element(By.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
            headerActualArray[i] = textname.trim();
        }


        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }


        return true;
    }
    catch (e) {
        return false;
    }
}

public async clickOnFormularyTypeFilter(){
    try{
        console.log("Clicked on formulary type");
        await this.formularyTypeElement.click();
        return true;

    }
    catch(e){
        console.log("Exception accoured",e);
        return false;
    }
}
public async verifyFormularyTypes(){
    try{
        let lengthValue = await this.recordListCheckBox.count();
        console.log("record Formulary Type Count", lengthValue);
        let actuallabelArray = new Array();
        let expectedlabelArray = new Array();
        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
            actuallabelArray[i]=textname;
           
        }

        var headerNames = prop.GetPropertyValue("FORMULARY_TYPES");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            expectedlabelArray[i] = eachHeaderNames[i].trim();

        }

        let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {

            //this.cancelButton.click();
            return true;
        }
        else {
          //  this.cancelButton.click();
            return false;
        }
    }
    catch(e){
        console.log("Exception accoured",e);
        return false;
    }
}

public async selectRecordTypeAndApply(){
    console.log("Select one of the type");
    try{

        let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
        console.log("FORMULARY_TYPE", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.applyButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            await helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types (1)")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured",e)
        return false;
    }
}

public async verifyGirdForFormularyType() {
    try {
        let formTypesname = prop.GetPropertyValue("FORMULARY_TYPE");
        console.log("orgStatusname " + formTypesname);

        await helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types (1)")
        let result = await this.formularyTypeOnGrid.getText().then(function (name) {
            if (name.trim() == formTypesname.trim()) {
                console.log("Validated type");
                return true;
            }
            else {
                return false;
            }
        });
        
        return result;
    }
    catch (e) {
        console.log("Exception accoured" + e);
        return false;
    }
}

public async deselectRecordTypeAndApply(){
    console.log("De Select one of the type");
    try{
         console.log("Clicked on formulary type");
         browser.sleep(5000)
        await this.formularyTypeElement.click();
       
        let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
        console.log("FORMULARY_TYPE", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element for deselected item");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.applyButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            await helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured while deslecting formulary type option",e)
        return false;
    }
}
public async verifyDataInGrid(){
    try{
    console.log("Verify data in grid");
    let retrunresult ;
    var count = await this.TableCount.count();
    console.log("count in the Formularies  page"+count);
    if (count > 0){
        retrunresult = true;
    }
    else{
        retrunresult = false;
    }
 return retrunresult;
}
catch(e){
    console.log("Exception Accoured in verify grid",e)
    return false;
}
}

public async selectRecordTypeAndCancel(){
    console.log("Select one of the type for cancel");
    try{

         await browser.actions().mouseMove(element(by.xpath("//*[@id='formularyTypeFilter']/button/span"))).click().perform().then(function () {
            console.log("click on the edit button");
          
        });
        let formTypename = prop.GetPropertyValue("FORMULARY_TYPE");
        console.log("FORMULARY_TYPE", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element for canceling item");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.cancelButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            await helper.waitForTexttoAppear(this.formularyTypeElement, "Formulary Types")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured while canceling formulary type option",e)
        return false;
    }
}
public async clickOnRecordStatusFilter(){
    try{
     console.log("Click on status filter");
     await this.recordStatuFilter.click();
     return true;
    }
    catch(e){
        console.log("Exception accoured in Click on status filter",e);
        return false;
    }
}
public async verifyReocrdStatusFilter(){
    try{
        let lengthValue = await this.recordListCheckBox.count();
        console.log("record Formulary Type Count", lengthValue);
        let actuallabelArray = new Array();
        let expectedlabelArray = new Array();
        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
            actuallabelArray[i]=textname;
           
        }

        var headerNames = prop.GetPropertyValue("FORMULARY_STATUS");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            expectedlabelArray[i] = eachHeaderNames[i].trim();

        }

        let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {

            //this.cancelButton.click();
            return true;
        }
        else {
          //  this.cancelButton.click();
            return false;
        }
    }
    catch(e){
        console.log("Exception accoured",e);
        return false;
    }
}



public async verifyFormularyStatus(){
    try{
        let lengthValue = await this.recordListCheckBox.count();
        console.log("record Formulary status Count", lengthValue);
        let actuallabelArray = new Array();
        let expectedlabelArray = new Array();
        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
            actuallabelArray[i]=textname;
           
        }

        var headerNames = prop.GetPropertyValue("FORMULARY_STATUS");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            expectedlabelArray[i] = eachHeaderNames[i].trim();

        }

        let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {

            //this.cancelButton.click();
            return true;
        }
        else {
          //  this.cancelButton.click();
            return false;
        }
    }
    catch(e){
        console.log("Exception accoured",e);
        return false;
    }
}
public async selectRecordStatusAndApply(){
    console.log("Select one of the type");
    try{

        let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
        console.log("FORMULARY_STATUS_TEST", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.applyButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            await helper.waitForTexttoAppear(this.recordStatuFilter, "Record Status (1)")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured",e)
        return false;
    }
}

public async verifyGirdForFormularyStaus() {
    try {
        let formTypesname = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
        console.log("FORMULARY_STATUS_TEST " + formTypesname);

        let res = await helper.waitForTexttoAppear_1(this.recordStatuFilter, "Record Status (1)")
        let result = await this.formularyStausOnGrid.getText().then(function (name) {
            if (name.trim() == formTypesname.trim()) {
                console.log("Validated type");
                return true;
            }
            else {
                return false;
            }
        });
        
        return result;
    }
    catch (e) {
        console.log("Exception accoured" + e);
        return false;
    }
}


public async deselectRecordStatusAndApply(){
    console.log("De Select one of the status");
    try{
         console.log("Clicked on formulary status");
         browser.sleep(5000)
        
        await browser.actions().mouseMove(element(by.xpath("//*[@id='recordStatusFilter']/button"))).click().perform().then(function () {
            console.log("click on the edit button");
          
        });
       
        let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
        console.log("FORMULARY_STATUS_TEST", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element for deselected item");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.applyButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            await helper.waitForTexttoAppear(this.recordStatuFilter, "Record Status")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured while deslecting formulary type option",e)
        return false;
    }
}

public async selectRecordStatusAndCancel(){
    console.log("Select one of the type for cancel");
    try{

         await browser.actions().mouseMove(element(by.xpath("//*[@id='recordStatusFilter']/button/span"))).click().perform().then(function () {
            console.log("click on the edit button");
          
        });
        let formTypename = prop.GetPropertyValue("FORMULARY_STATUS_TEST");
        console.log("FORMULARY_STATUS_TEST", formTypename);
        var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + formTypename.trim() + "\')]//../input"));
        let result = await test.click().then(function () {
            console.log("clicked on first element for canceling item");
            return true;
        });

        if (result) {
            //click on apply button
            let result = await this.cancelButton.click().then(function () {
                console.log("clicked on apply button");
                
                //return true;
            });

            let res = await helper.waitForTexttoAppear_1(this.recordStatuFilter, "Record Status")
            return true;
        }
        else {
            return false;
        }
    }
    catch(e){
        console.log("Exception Accoured while canceling formulary type option",e)
        return false;
    }
}

public async clickOnFirstFormularies() {
    try {
          console.log("Click on one of the formaires in grid")
          firstFormulariNameInGrid = await this.firstFormulariesInGridElement.getText();
        let result = this.firstFormulariesInGridElement .click().then(function () {
            return true;
        });

        return result;
    }
    catch (e) {
        console.log("Exception accoured", e);
        return false;
    }
}

public async verifyDetailPage() {
    try {
        let detailPageFOrmulariNameName = await element(by.xpath("//h1//..//p[2]")).getText();

        if (firstFormulariNameInGrid.trim() == detailPageFOrmulariNameName.trim()) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        console.log("Detail Page Excaption accoured--" + e);
        return false;
    }
}
}




