import { ElementFinder, element, By, ElementArrayFinder, by, browser } from "protractor";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { Helper } from "../Utility/Helper";
import { EnumMember } from "typescript";
var prop = new PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let agentName;
let helper = new Helper();

let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();

export class AgentsPage {

    agentHeaderElement: ElementFinder;
    tableCount: ElementArrayFinder;
    firstAgentNameElement: ElementFinder;
    detailPageFirstElement: ElementFinder;
    mainInforamtionHeader: ElementFinder;
    deatilOverviewTAB: ElementFinder;
    detailCount: ElementArrayFinder;
    linkTABElelemnt: ElementFinder;
    linkTabFirstHeader: ElementFinder;
    OverviewTABElelemnt: ElementFinder;
    editAgentElement: ElementFinder;
    editAgentHeader: ElementFinder;
    agentNameLabelElement: ElementFinder;
    agentDescriptionLabelElelemnt: ElementFinder;
    agenetAgentTypeLabelElelemnt: ElementFinder;
    agenetURLRootLabelElelemnt: ElementFinder;
    agentSaveButton: ElementFinder;
    completeStatuElement: ElementFinder;
    inputDecriptionElelemt: ElementFinder;
    continueButtonElement: ElementFinder;
    approveButtonElement: ElementFinder;
    rejectButtonElement: ElementFinder;
    recordStatus: ElementFinder;
    recordStatusModified: ElementFinder;
    historyTABElelemnt: ElementFinder;
    firstRowOfHistoryTAB: ElementFinder;
    fromDetailToMainGrigAgentLnk: ElementFinder;
    newButton: ElementFinder;
    newPageHeaderElement: ElementFinder;
    inputAgentName: ElementFinder;
    inputAgentTypeElement: ElementFinder;
    inputURLRootName: ElementFinder;
    newagentDescriptionLabelElelemnt: ElementFinder;
    newagenetAgentTypeLabelElelemnt: ElementFinder;
    newagenetURLRootLabelElelemnt: ElementFinder;
    inputAgentType: ElementFinder;
    addagentName: ElementFinder;
    recordStatusNew: ElementFinder;
    agentTypeFilterElement:ElementFinder;
    agentTypeFilterHeaderElement:ElementFinder;
    recordListCheckBox: ElementArrayFinder;
    cancelButton:ElementFinder;
    applyButton: ElementFinder;
    agentTypeListTable: ElementArrayFinder;

    recordStatusElement:ElementFinder;

    constructor() {
        this.recordStatusElement= element(by.xpath("//*[@id='recordStatusFilter']//button"));
        this.agentTypeListTable = element.all(by.xpath("//table//tr//td[4]"));
        this.applyButton = element(by.xpath("//*[@type= 'submit']"));
        this.cancelButton = element(by.xpath("//*[@class='app-button'][2]"));
        this.newPageHeaderElement = element(by.xpath("//h1[@class='cdk-drag-handle dialog-heading']"));
        this.newButton = element(by.xpath("//*[@class='app-add-button']"));
        this.fromDetailToMainGrigAgentLnk = element(by.xpath("//a[@href='/administration/agents']"));
        this.firstRowOfHistoryTAB = element(by.xpath("//table[@id = 'grid']//tbody//tr[1]/td[1]/span"));
        this.agentHeaderElement = element(By.xpath("//*[name()='app-agents']/div/div[1]/div[1]/app-global-grid-header/div/h1"))
        this.tableCount = element.all(By.xpath("//table[@id = 'grid']//tr"))
        this.firstAgentNameElement = element(By.xpath("//table//tr[1]//td[2]"))
        this.detailPageFirstElement = element(By.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted'][1]"))
        this.mainInforamtionHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.deatilOverviewTAB = element(by.xpath("//*[@class='mat-tab-list']//*[@class='mat-tab-links']/a[1]"));
        this.detailCount = element.all(by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
        this.linkTABElelemnt = element(by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.historyTABElelemnt= element(by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.OverviewTABElelemnt = element(by.xpath("//*[@class='mat-tab-links']/a[1]"));
        this.linkTabFirstHeader = element(by.xpath("//table[@id = 'grid']//tr/th[1]/div/button/a"));
        this.editAgentElement = element(by.xpath("//*[@class='detail-grid-item'][1]/h1/img"));
        this.editAgentHeader = element(by.xpath("//*[@class='cdk-drag agent modal-container ng-star-inserted']/h1/span"));

        this.agentNameLabelElement = element(by.xpath("//*[@id='name']//../span/label/span[1]"));
        //this.agentNameLabelElement = element(by.xpath("//label[@for='name']/span[1]"));

        this.agentDescriptionLabelElelemnt = element(by.xpath("//*[@id='mat-input-1']//../span/label/span"))
        this.newagentDescriptionLabelElelemnt = element(by.xpath("//*[@placeholder='Description']//../span/label/span"));
        this.agenetAgentTypeLabelElelemnt = element(by.xpath("//*[@id='mat-form-field-label-7']/span[1]"))
        this.newagenetAgentTypeLabelElelemnt = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select/div/div[1]/span"));
        this.agenetURLRootLabelElelemnt = element(by.xpath("//*[@id='mat-input-2']//../span/label/span[1]"))
        this.newagenetURLRootLabelElelemnt = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-url-input/mat-form-field/div/div[1]/div/span/label/span[1]"));
        this.agentSaveButton = element(by.xpath("//*[@type='submit']/span"));
        this.completeStatuElement = element(by.xpath("//*[@id='completeDataChanges']"));
        this.inputDecriptionElelemt = element(by.xpath("//*[@placeholder='Description']"))
        
       // this.continueButtonElement = element(by.xpath("//*[@id='addOrgForm']/div[2]/button[2]"));
        this.continueButtonElement = element(by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.approveButtonElement=element(by.xpath("//*[@id='approveDataChanges']"));
        this.rejectButtonElement=element(by.xpath("//*[@id='rejectDataChanges']"));
        this.recordStatus = element(by.xpath("//p[contains(text(),'Approved')]"));
        this.recordStatusModified = element(by.xpath("//p[contains(text(),'Modified')]"));
        this.recordStatusNew = element(by.xpath("//p[contains(text(),'New')]"));
   
        //new agent add
        this.inputAgentName = element(by.xpath("//*[@placeholder='Agent Name']"));
this.inputAgentType = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select")); 
        this.inputAgentTypeElement = element(by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.inputURLRootName = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-agents-crud/div/div/form/app-url-input/mat-form-field/div/div[1]/div/input"));
        this.addagentName = element(by.xpath("//*[@id='addAgentForm']/form/div/app-form-submit-button/button"));

        //Filter Elelemnts
        this.agentTypeFilterElement=element(by.xpath("//*[@id='agentTypeFilter']/button"));
        //div[@class='cdk-drag']//h1
       this.agentTypeFilterHeaderElement=element(by.xpath("//*[@class='cdk-drag-handle dialog-heading headerLabel']"));
      // this.agentTypeFilterHeaderElement=element(by.xpath("//div[@class='cdk-drag']//h1"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
    }
    public async VerifyUserInAgentPage() {

        let result = await this.agentHeaderElement.getText().then(function (text) {
            if (text === "Agents") {
                return true;
            }
            else {
                return false;
            }
        });
        return result;
    }

    public async getTheColumnNamesForAgnets() {
        try {
            console.log("Get number of columns ");
            let tempCount =await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
            console.log("tempCount",Number(tempCount));
            //var value = await this.tableCount.all(By.tagName("th")).count();
            //console.log(value);
            var value = Number(tempCount);

            console.log(value);


            var headerNames = prop.GetPropertyValue("AGENT_HEADERNAMES");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                headerExpectedArray[i] = eachHeaderNames[i].trim();

            }

            var cells = this.tableCount.all(By.tagName("th"));
            for (var i = 1; i <= value; i++) {
                let textname = await element(By.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
                headerActualArray[i] = textname.trim();
            }



            return true;
        }
        catch (e) {
            return false;
        }
    }

    public async compareHeaderNamesForAgents() {
        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    public async clickOnOneOfAgent() {
        try {
            let present = await this.firstAgentNameElement.isPresent();
            if (present) {
                agentName = await this.firstAgentNameElement.getText();
                console.log("First Element is clicked agentName" + agentName);

                await this.firstAgentNameElement.click().then(function () {
                    console.log("First Element is clicked");

                });
                return true;
            }
            else {
                console.log("First element is not present")
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured" + e);
            return false;
        }
    }

    public async VerfiyDetailPageWithHeaderName() {
        try {

            console.log("VerfiyDetailPageWithHeaderName");
            let waitForelemnet = helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
            if (waitForelemnet) {
                console.log("Found Mian Information")
                return true;
            }
            else {
                console.log("Not Found Mian Information")
                return false;
            }
            return true;
        }
        catch (e) {
            console.log("Exception occoured while checking detail page header");
            return false;
        }
    }

    public async verifyDetailPageHeaderCount() {
        try {

            var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                detailheaderExpectedArray[i] = eachHeaderNames[i].trim();

            }

            let size = await this.detailCount.count();
            console.log("size of headers in details view", size);
            for (let i = 1; i <= size; i++) {
                let headerName = await element(by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted'][" + i + "]")).getText();
                detailheaderActualArray[i] = headerName.trim();
            }


            let missing = detailheaderActualArray.filter(item => detailheaderExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {


                return true;
            }
            else {

                return false;
            }
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    public async ClickOnLinkTAB() {
        if (this.linkTABElelemnt.isPresent()) {
            await this.linkTABElelemnt.click();
            return true;
        }
        else {
            return false;
        }
    }

    public async verifyLinkdetailsTAB() {
        try {
            helper.waitForTexttoAppear(this.linkTabFirstHeader, "ID");
            let tempCount =await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
            console.log("tempCount",Number(tempCount));
            var value = Number(tempCount);
             console.log("value", value);
            if (Number(value) > 0) {
                return true;
            }
            else {
                return false;
            }


        }
        catch (e) {
            return false;
        }


    }
    public async clickOnOverviewTAB() {
        if (this.OverviewTABElelemnt.isPresent()) {
            await this.OverviewTABElelemnt.click();
            return true;
        }
        else {
            return false;
        }
    }

    public async ClickOnEditButton() {
        console.log("Clicking on edit button for agent");
        let result = await this.editAgentElement.click();
        let waitForElement = helper.waitForTexttoAppear_1(this.editAgentHeader, "Edit Agent");
        if (waitForElement) {
            console.log("Edit Agent title found");
            return true;
        }
        else {
            console.log("Edit Agent title not found");
            return false;
        }

    }
    public async checkDataHeadingInEditAgentPage() {
        try {
            console.log("Now checking heading in the Edit agent page");
            let actuallabelArray = new Array();
            let expectedlabelArray = new Array();
            console.log("Now checking heading in the Edit agent page 123");
           //cnsole.log(await this.agentNameLabelElement.isPresent())
            //let waitForElement = helper.waitForTexttoAppear_1(this.agentNameLabelElement, "Agent Name");
            let txtagentNameLabelElement = await this.agentNameLabelElement.getText();
            
            
            console.log("frist header name",txtagentNameLabelElement);
            console.log("Now checking heading in the Edit agent page 1234");
            let txtagentDescriptionLabelElelemnt = await this.agentDescriptionLabelElelemnt.getText();
            console.log(txtagentDescriptionLabelElelemnt);
            console.log("Now checking heading in the Edit agent page 12345");
            let txtagenetAgentTypeLabelElelemnt = await this.agenetAgentTypeLabelElelemnt.getText();
            console.log(txtagenetAgentTypeLabelElelemnt);
            let  txtagenetURLRootLabelElelemnt =   await this.agenetURLRootLabelElelemnt.getText(); 
            
          
           
            console.log(txtagenetURLRootLabelElelemnt);

            actuallabelArray.push(txtagentNameLabelElement);
            
            actuallabelArray.push(txtagentDescriptionLabelElelemnt);
            actuallabelArray.push(txtagenetAgentTypeLabelElelemnt);
            actuallabelArray.push(txtagenetURLRootLabelElelemnt);

            var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                expectedlabelArray[i] = eachHeaderNames[i].trim();

            }

            let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
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
    public async editDecritptionInAgent(){
        try{
            browser.sleep(5000);
        console.log("Enter the Description");
        await this.inputDecriptionElelemt.clear(); 
        console.log("Enter the Description1");
        await this.inputDecriptionElelemt.sendKeys("TestEdit");
        console.log("Enter the Description2");
        await this.agentSaveButton.click();
        console.log("Enter the Description3");
        
        return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }

    public async  verifyCompleteButton(){
        let result = helper.waitForTexttoAppear_1(this.completeStatuElement,"Complete");
        if(result){
            console.log("Record status is mordified");
            return true;
        }
        else{
            return false;
        }
    }
    public async clickOnCompleteButton(){
        console.log("Click On complete button")
      let resultContinueButton = await this.completeStatuElement.click().then(function(){
        console.log("Click On complete button clicked")
         return true;
      });
      console.log("Click On Continue button")
      if(resultContinueButton){
        console.log("Going Click On Continue button")
        let result = this.continueButtonElement.click().then(function(){
            console.log("Click On Continue button clicked")
            return true;
          });
        return result;
      }
      else{
          return resultContinueButton;
      }
        

        
    }

    public async verifyApproveButton(){
       
        let reuslt = helper.waitForTexttoAppear_1(this.approveButtonElement,"Approve");
        if(reuslt){
           return true;
        }
        else{
            return false;
        }
    }


    public async clickOnApproveButton(){
       let clickresult =  this.approveButtonElement.click().then(function(){
             return true;
       });
       console.log("Click On Continue button")
       if(clickresult){
         console.log("Going Click On Continue button")
         let result = this.continueButtonElement.click().then(function(){
             console.log("Click On Continue button clicked")
             return true;
           });
         return result;
       }
       else{
           return clickresult;
       }
    }

    public async verifyRecordStatus(){
    
       
        let reuslt = helper.waitForTexttoAppear_1(this.recordStatus,"Approved");
        if(reuslt){
           return true;
        }
        else{
            return false;
        }
    }

    public async clickOnRejectButton(){
        let clickresult =  this.rejectButtonElement.click().then(function(){
            return true;
      });
      console.log("Click On Reject button")
      if(clickresult){
        console.log("Going Click On  button")
        let result = this.continueButtonElement.click().then(function(){
            console.log("Click On Continue button clicked")
            return true;
          });
        return result;
      }
      else{
          return clickresult;
      }
    }

    public async verifyRecordStatusForModified(){
    
       
        let reuslt = helper.waitForTexttoAppear_1(this.recordStatusModified,"Modified");
        if(reuslt){
           return true;
        }
        else{
            return false;
        }
    }

    public async clickOnHistoryTAB(){
        let result = this.historyTABElelemnt.click().then(function(){
              console.log("Clicked On hIstory TAB");
              return true;
        });
        return result;
    }
    
    public async verifyHistoryTABDetails(){
      let result = this.firstRowOfHistoryTAB.getText().then(function(txt){
        console.log("txt",txt);
        if(txt.includes("Approved")){

       return false;
        } 
        else{
            return true;
        }
      });
      return true;
    }

    public async moveToAgentMainGrid(){
       let result = this.fromDetailToMainGrigAgentLnk.click().then(function(){
        console.log("Clicked to move the agent main grid")
             return true;
       });
       if(result){
        let reuslt1 = helper.waitForTexttoAppear_1(this.agentHeaderElement,"Agents");
           console.log("Lohin to main grid")
        let result = await this.agentHeaderElement.getText().then(function (text) {
            if (text.trim() === "Agents".trim()) {
                console.log("Lohin to main grid")
                return true;
            }
            else {
                console.log("Failed Lohin to main grid Failed")
                return false;
            }
        });
       }
       else{
           return false;
       }
       return true;
    }
    public async clickOnNewButton(){
        let result =await this.newButton.click();
        //verify  the header element
        let newAgentHeader =this.newPageHeaderElement.getText().then(function(txt){
            if(txt.trim()==" New Agent ".trim()){
                return true;
            }
            else{
                return false;
            }
        })
        return newAgentHeader;

    }

    public async verifyNewAgentPage(){
        try {
            console.log("Now checking heading in the Edit agent page");
            let actuallabelArray = new Array();
            let expectedlabelArray = new Array();
            console.log("Now checking heading in the Edit agent page 123");
            let txtagentNameLabelElement =   await  this.agentNameLabelElement.getText();
            console.log(txtagentNameLabelElement);
            let txtagentDescriptionLabelElelemnt =    await this.agentDescriptionLabelElelemnt.getText(); 
            console.log(txtagentDescriptionLabelElelemnt);
            let txtagenetAgentTypeLabelElelemnt =   await this.agenetAgentTypeLabelElelemnt.getText(); 
            console.log(txtagenetAgentTypeLabelElelemnt);
            let  txtagenetURLRootLabelElelemnt =   await this.agenetURLRootLabelElelemnt.getText(); 
            
          
           
            console.log(txtagenetURLRootLabelElelemnt);

            actuallabelArray.push(txtagentNameLabelElement);
            
            actuallabelArray.push(txtagentDescriptionLabelElelemnt);
            actuallabelArray.push(txtagenetAgentTypeLabelElelemnt);
            actuallabelArray.push(txtagenetURLRootLabelElelemnt);

            var headerNames = prop.GetPropertyValue("AGENT_HEADER_NAMES_IN_DETAIL");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                expectedlabelArray[i] = eachHeaderNames[i].trim();

            }

            let missing = actuallabelArray.filter(item => expectedlabelArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {


                return true;
            }
            else {

                return false;
            }
        }
        catch (e) {
            console.log("exception", e);
            return false;
        }

    }

    public async enetrsAgentDetails() {
        try {
            let Number = helper.RandomNumber();
            let StringNumber = (await Number).toString();
            let temp1 = await this.inputAgentName.sendKeys("TestAgent" + StringNumber);
            console.log("enetr the agent Name");
            let temp0 = await this.inputAgentType.click();
            console.log("enetr the agent Name");
            let temp2 = await this.inputAgentTypeElement.click();
            console.log("enetr the inputAgentTypeElement Name");
            let temp3 = await this.inputURLRootName.sendKeys("URL.com");
            console.log("enetr the inputURLRootName Name");
            let temp4 = await this.addagentName.click();
            return true;
        }
        catch (e) {
            console.log(e);
            return false;

        }
    }

    public async VerifyAgentIsSaved(){
        try{
            let reuslt = helper.waitForTexttoAppear_1(this.recordStatusNew, "New");
            if (reuslt) {
              //  let result = this.moveToAgentMainGrid();
                return true;
            }
            else {
                return false;
            }
        }
        catch(e){
            console.log("Excaption accoured",e);
            return false;
        }
    }
    public async clickOnAgentType(){
        try{
          
          let isClicked= await this.agentTypeFilterElement.click().then(function(){
              console.log("Agnet type filter is clicked");
              console.log("Agnet type filter is clicked12345");
             // helper.waitForTexttoAppear(element(by.xpath("//*[@class='cdk-drag-handle dialog-heading headerLabel']")),"Agent Types");
              return true;
           });
          
          /* if(isClicked){
             let headerPresent = await this.agentTypeFilterHeaderElement.getText().then(function(txt){
                     if(txt.trim()=="Agent Types".trim()){
                         return true;
                     }
                     else{
                         return false;
                     }
             });*/
             return isClicked;
           }
          // return false;
        
        catch(e){
            console.log(e);
            return false;
        }
    }

    public async verifyAgentTypes(){
        try{
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Agent Type Count", lengthValue);
            let actuallabelArray = new Array();
            let expectedlabelArray = new Array();
            for (let i = 1; i <= lengthValue; i++) {
                let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                actuallabelArray[i]=textname;
               
            }

            var headerNames = prop.GetPropertyValue("AGENT_TYPES");
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
        }
    }

    public async verifyAgentTypeFilter(){
        try{
            console.log("Agnet the header verified");
            console.log("Verify header of the record status");
            helper.waitForTexttoAppear(this.agentTypeFilterHeaderElement,"Agent Types")
            let headerText = await this.agentTypeFilterHeaderElement.getText();
            if(headerText.trim() =="Agent Types" ){
                return true;
            }
            else{
                return false;
            }
         
        return true;
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async selectOnOfAgentTypeOption(){
        try{
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Agent Type Count---", lengthValue);
         
            for (let i = 1; i <= lengthValue; i++) {
                let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                if(textname.trim()==prop.GetPropertyValue("AGENT_TYPE_FILTER_OPTION").trim()){
                    let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).click(); 
                }
               
            }
            return true;
        }
        catch(e){
            console.log("Exception accoured in the agent type filter");
            return false;
        }
    }

    public async clickOnApplyButton(){
      let result = this.applyButton.click().then(function(){
            return true;
      });
      return result;
    }

    public async verifyGridWithSelectedAgentType(){
        console.log("Checking display Based on reocrd type");
        let checkCount = 0;

        helper.waitForTexttoAppear(this.agentTypeFilterElement, " Agent Types (1)");


        let lengthValue = await this.agentTypeListTable.count();
        console.log("Agent Type Table  Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//table//tr[" + i + "]//td[4]")).getText();
            if (textname.trim() == prop.GetPropertyValue("AGENT_TYPE_FILTER_OPTION").trim()) {
                checkCount = checkCount + 1;
            }
        }

        if (checkCount == lengthValue) {
            return true;
        }
        else {
            return false;
        }

    }

    public async deselectTheSelectedAgentTypeOption(){
        console.log("De select the selected option")

        let lengthValue = await this.recordListCheckBox.count();
        console.log("record Type Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).isSelected();

            if (textname == true) {

                await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]" + "//label/input")).click();
            }
        }
        await this.applyButton.click().then(function () {


        });
        helper.waitForTexttoAppear(this.agentTypeFilterElement, "Agent Types");
        return true;
    }

    public async verifyForAllData() {
        console.log("Checking display All reord Type");
        let checkCount = 0;


        let lengthValue = await this.agentTypeListTable.count();
        console.log("agent Type Table  Count-------", lengthValue);
        console.log("agent Type Table  Count", typeof lengthValue);
        if (Number(lengthValue) > 0) {
            console.log("its true");
            return true;
        }
        else {
            console.log("its false");
            return false;
        }

    }

    public async selectOneAgentTypeAndClickCancel(){
        let isClicked= await element(by.xpath("//*[@id='agentTypeFilter']/button/span")).click().then(function(){
            console.log("Agnet type filter is clicked");
            console.log("Agnet type filter is clicked12345");
           // helper.waitForTexttoAppear(element(by.xpath("//*[@class='cdk-drag-handle dialog-heading headerLabel']")),"Agent Types");
            return true;
         });
        await this.cancelButton.click();

        return true;
    }

    public async clickOnRecordStatusFilter(){
        try{
            let clicked = this.recordStatusElement.click().then(function(){
                console.log("reocrd status clicked");
                return true;
            })
         
            return true;
        }
        catch(e){
            return false;
        }
    }

    public async verifyAllStatus(){
        try{
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Agent Status Count", lengthValue);
            let actuallabelArray = new Array();
            let expectedlabelArray = new Array();
            for (let i = 1; i <= lengthValue; i++) {
                let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                actuallabelArray[i]=textname.trim();
               
            }

            var headerNames = prop.GetPropertyValue("AGENT_RECORD_STATUS");
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

    public async verifyAgentStatusFilterHeader(){
        try{
           console.log("Verify header of the record status");
           helper.waitForTexttoAppear(this.agentTypeFilterHeaderElement,"Record Status")
           let headerText = await this.agentTypeFilterHeaderElement.getText();
           if(headerText.trim() =="Record Status" ){
               return true;
           }
           else{
               return false;
           }
            return true;
        }
        catch(e){
            console.log("Exception accoured in Header",e);
        }
    }


    public async selectAgentStatus(){
        try{
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Agent status Count---", lengthValue);
         
            for (let i = 1; i <= lengthValue; i++) {
                let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label")).getText();
                if(textname.trim()==prop.GetPropertyValue("AGENT_STAUS_FILTER_OPTION").trim()){
                    let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).click(); 
                }
               
            }
            return true;
        }
        catch(e){
            console.log("Exception accoured in the agent type filter");
            return false;
        }
    }

    public async verifyAgentStatusOnGrid(){
        console.log("Checking display Based on reocrd status");
        let checkCount = 0;

        helper.waitForTexttoAppear(this.recordStatusElement, "Record Status (1)");

   
        let lengthValue = await this.agentTypeListTable.count();
        console.log("Agent Status Table  Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//table//tr[" + i + "]//td[6]")).getText();
            if (textname.trim() == prop.GetPropertyValue("AGENT_STAUS_FILTER_OPTION").trim()) {
                checkCount = checkCount + 1;
            }
        }

        if (checkCount == lengthValue) {
            return true;
        }
        else {
            return false;
        }
    }
}
