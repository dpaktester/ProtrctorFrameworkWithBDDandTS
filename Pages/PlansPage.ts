import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, ElementArrayFinder, browser, By, Key } from "protractor";
import { textChangeRangeIsUnchanged } from "typescript";
import { Helper } from "../Utility/Helper";
import { threadId } from "worker_threads";

var prop = new PropertiesFileManager();
var help = new Helper();
let NameToBeEntered = "";
let parentID: any;
let headerActualArray = new Array();
let headerExpectedArray = new Array();
var helper = new Helper();
let SecondPlanName="";



var prop = new PropertiesFileManager();

export  class PlansPage{
    PlansHeader:ElementFinder ;
    TableCount:ElementArrayFinder ;
    recordListCheckBox:ElementArrayFinder;
    SearchPannel:ElementFinder;
    SearchedText:ElementFinder;
    RecordStatusBtn:ElementFinder;
    Header:ElementFinder;
    CancelButton:ElementFinder;
    NewRecordStatusBtn:ElementFinder;
    ApplyButton:ElementFinder;
    NewRecordStatustext:ElementFinder;
    FirstPlanInPlans:ElementFinder;
    mainInforamtionHeader:ElementFinder;
    DocumentsLinkInPlans:ElementFinder;
    LinksLinkInsidePlans:ElementFinder;
    HistoryLinkInsidePlans:ElementFinder;
    DetailsPageHeader:ElementFinder;
    PlansLinkInsideDetailsPage:ElementFinder;

    constructor(){
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.PlansHeader = element(by.xpath("//h1[@class ='grid-header']"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.SearchPannel = element(by.className("search form-control"));
        this.SearchedText=element(by.xpath("//input[@placeholder='Search']"));
        this.RecordStatusBtn=element(by.xpath("//*[@id='recordStatusFilter']/button"));
        this.Header = element(by.className("cdk-drag-handle dialog-heading"));
        this.CancelButton = element(by.xpath("//*[@class='buttons-row']/button[2]"));
        this.NewRecordStatusBtn=element(by.xpath("//*[@class='ng-star-inserted']/label/input[contains(@value, '1')]"));
        //this.NewRecordStatusBtn=element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/shared-filter-picker/div/div[1]/app-flat-checkbox-list/ul/li[1]/label/input"));
        this.ApplyButton = element(by.xpath("//*[@class='buttons-row']/button[1]"));
        this.NewRecordStatustext=element(by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[6]/span"));
        this.FirstPlanInPlans=element(by.xpath("//table//tr[1]/td[2]/a"));
        this.mainInforamtionHeader = element(by.xpath("//*[@class='detail-grid-item']/h1[contains(text(),'Main Information')]"));
        this.DocumentsLinkInPlans=element(by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.LinksLinkInsidePlans=element(by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.HistoryLinkInsidePlans=element(by.xpath("//*[@class='mat-tab-links']/a[4]"));
        this.DetailsPageHeader=element(by.xpath("//*[@class='breadPoint']"));
        this.PlansLinkInsideDetailsPage=element(by.xpath("//*[@class='policy-heading']//a"));
    }

  public async verifyPlanspage(){
    try{
        var retrunresult = false;
        console.log("Inside Plan Page")
        await this.PlansHeader.getText().then(function(text){
            console.log("Header Name in Page"+text);
            if(text.trim() == "Plans"){
               
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the plans page"+count);
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
  public async getTheColumnNamesForPlans() {
    try {

        let lengthValue = await this.recordListCheckBox.count();
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var headerNames = prop.GetPropertyValue("PLANS_HEADER_NAMES");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            headerExpectedArray[i] = eachHeaderNames[i].trim();

        }

        var cells = this.TableCount.all(By.tagName("th"));
        for (var i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
            headerActualArray[i] = textname.trim();
        }

        return true;
    }
    catch (e) {
        return false;
    }
}

public async EnterTextIntoSearchPanel() {
    try {
        var retrunresult = false;
        if (await this.SearchPannel.isPresent()){
        await this.SearchPannel.sendKeys("Aetna").then(function (text) {
            retrunresult = true;

        });
    }
    else {
        retrunresult = false;
        console.log("There is no search Box")
    }
    return retrunresult;
        
    }
    
    catch (e) {
        return false;
    }
}
public async VerifyTextInSearchPanel() {
    try {
        var retrunresult = false;
        await this.FirstPlanInPlans.getText().then(function (text) {
            if (text.includes("Aetna")) {
                retrunresult = true;
            }
            else {
                retrunresult = false;

            }
        });
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async ClearTextIntoSearchPanel() {
    try {
        var retrunresult = false;
        if (await this.SearchPannel.isPresent()){
        await this.SearchPannel.clear().then(function () {
            retrunresult = true;

        });
    }
    else {
        retrunresult = false;
        console.log("There is nothing inside search Box")
    }
    return retrunresult;
        
    }
    
    catch (e) {
        return false;
    }
}
public async VerifyUserReomvesTheSearchBox() {
    try {
        var retrunresult = false;
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var count = await this.TableCount.count();
        console.log("count in the Plans  page" + count);
        if (count > 0) {
            retrunresult = true;
        }
        else {
            console.log("There is nothing in the Plans Page after clearing the search box");
            retrunresult = false;
        }

        return retrunresult;
    }
    catch (e) {
        return false;
    }
}

public async ClickOnRecordStatusBtn() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        console.log("It clicked Record Status ");
        var retrunresult = false;
        if (await this.RecordStatusBtn.isPresent()) {
            await this.RecordStatusBtn.click().then(function () {
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Record Status Button")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}
public async CheckHeaderOfRecordStatus() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.Header.isPresent()) {
            await this.Header.getText().then(function (PolicyTypeHeaderText) {
                PolicyTypeHeaderText.trim();
                if (PolicyTypeHeaderText == 'Record Status') {
                    retrunresult = true;
                }
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Record Status Header")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}
public async CheckDataOfRecordStatus() {
    browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
    let lengthValue = await this.recordListCheckBox.count();
    let ApplicationRecordList = new Array();
    let Recordllist = new Array("New ".trim(), "Modified ".trim(),
        "Completed ".trim(), "Approved ".trim(),
        "Published ".trim(), "Archived ".trim());
        
    let result;
    try {
        var retrunresult = false;
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        console.log("Recordllist", Recordllist.length);
        if (await this.Header.isPresent()) {
            for (let i = 1; i <= lengthValue; i++) {
                let textName = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
                console.log(textName);
                ApplicationRecordList[i] = textName.trim();
            }

            console.log("ApplicationRecordList", ApplicationRecordList.length);
            let result = ApplicationRecordList.filter(item => Recordllist.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Records are extra or not in application " + result.toString());
            }
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}
public async ClickOnCancelBtn() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.CancelButton.isPresent()) {
            await this.CancelButton.click().then(function () {
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Cancel Button in Record Status")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async SelectNewFromRecordType() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.NewRecordStatusBtn.isPresent()) {
            await this.NewRecordStatusBtn.click().then(function () {
                console.log("clicked on New of Recoprd Status ");
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("The New Radio button is not Working under Records")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}

public async ClickOnApplyButton() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;

            if (await this.ApplyButton.isPresent()) {
                await this.ApplyButton.click().then(function () {
                    console.log("clicked on Apply Button ");
                    retrunresult = true;
                });
            }
        else {
            retrunresult = false;
            console.log("There is no Apply Button inside Record Status Of ")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async VerifySelectedRecordType() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.NewRecordStatustext.isPresent()) {
            browser.sleep(6000);
            await this.NewRecordStatustext.getText().then(function (RecordsText) {
                RecordsText.trim();
                console.log("Records Text ", RecordsText.trim());
                if (RecordsText == 'New') {
                    retrunresult = true;
                }
            });
        }
        else {
            retrunresult = false;
            console.log("The Selected Record is not filtered")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async ClickOnFirstLinkOfPlans() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.FirstPlanInPlans.isPresent()) {
            SecondPlanName=await this.FirstPlanInPlans.getText();
            await this.FirstPlanInPlans.click().then(function () {
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Data on Plans Module")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async VerifyDetailPage() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.DetailsPageHeader.isPresent()) {
            var DetPageHeader=await this.DetailsPageHeader.getText();
        
            console.log("DetailsPageHeader " ,DetPageHeader)
            console.log("SecondPlanName",SecondPlanName)
            if (DetPageHeader.trim()==SecondPlanName.trim()){
                console.log("Page is in Details Page")
                retrunresult=true;
            }
        }
        else {
            retrunresult = false;
            console.log("The page is not in Details Page")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}
public async VerfiyDetailPageWithHeaderNameforPlans() {
    try {

        console.log("VerfiyDetailPageWithHeaderName");
        await helper.waitForTexttoAppear(this.mainInforamtionHeader, "Main Information");
        /*if (waitForelemnet) {
            console.log("Found Main Information")
            return true;
        }
        else {
            console.log("Not Found Main Information")
            return false;
        }*/
        return true;
    }
    catch (e) {
        console.log("Exception occoured while checking detail page header");
        return false;
    }
}
public async ClickOnDocumentsLinkInsidePlans() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));

        var retrunresult = false;
        if (await this.DocumentsLinkInPlans.isPresent()) {
            await this.DocumentsLinkInPlans.click().then(function () {
                console.log("It clicked on Documents Link inside Plans");
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Document Link Button inside Plans")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}
public async ClickOnLinksBtnInsidePlans() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));

        var retrunresult = false;
        if (await this.LinksLinkInsidePlans.isPresent()) {
            await this.LinksLinkInsidePlans.click().then(function () {
                console.log("It clicked on Links Link inside Plans");
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Links Link Button inside Plans")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}

public async ClickOnHistoryLinkInsidePlans() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));

        var retrunresult = false;
        if (await this.HistoryLinkInsidePlans.isPresent()) {
            await this.HistoryLinkInsidePlans.click().then(function () {
                console.log("It clicked on History Link inside Plans");
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no History Link Button inside Plans")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }

}
public async getTheColumnNamesForHistoryInsidePlans() {
    try {
     
        let tempCount = await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
        console.log("tempCount", Number(tempCount));
      
        var value = Number(tempCount);

        var headerNames = prop.GetPropertyValue("HISTORY_HEADER_NAMES");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            headerExpectedArray[i] = eachHeaderNames[i].trim();

        }

        var cells = this.TableCount.all(by.tagName("th"));
        for (var i = 1; i <= value; i++) {
            let textname = await element(by.xpath("//table//tr//th[" + i + "]" + "//div/button/a[1]")).getText();
            headerActualArray[i] = textname.trim();
        }

        return true;
    }
    catch (e) {
        return false;
    }
}
public async compareHeaderNamesForHistoryInsidePlans() {

    let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
    console.log("missing len", missing.length);
    if (missing.length == 0) {
        return true;
    }
    else {
        console.log("Missing items from History Are ",missing)
        return false;
    }
}

public async ClickOnPlansLinkInsideDetailsPage() {
    try {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        var retrunresult = false;
        if (await this.PlansLinkInsideDetailsPage.isPresent()) {
            await this.PlansLinkInsideDetailsPage.click().then(function () {
                retrunresult = true;
            });
        }
        else {
            retrunresult = false;
            console.log("There is no Plans Link inside Details Page of Plans")
        }
        return retrunresult;
    }
    catch (e) {
        return false;
    }
}

}