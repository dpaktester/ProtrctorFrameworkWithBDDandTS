import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";
import { Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { Helper } from "../Utility/Helper";
var prop = new PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
var helper = new Helper();
let linkCode = " ";
export class LinksPage {

    tableCount: ElementArrayFinder;
    recordTypeBtn: ElementFinder;
    recordListCheckBox: ElementArrayFinder;
    applyButton: ElementFinder;
    cancelButton: ElementFinder;
    recordListTable: ElementArrayFinder;
    contentListTable: ElementArrayFinder;
    recordTypeDDeselectBtn: ElementFinder;
    contentTypeBtn: ElementFinder
    contentTypeDDeselectBtn: ElementFinder;
    statusTypeBtn: ElementFinder;
    statusTypeDDeselectBtn: ElementFinder;
    menuButton: ElementFinder;
    homeButton: ElementFinder;
    homePageVersion: ElementFinder;
    detailLinkCode: ElementFinder;
    editButton: ElementFinder;
    editPageTitle: ElementFinder;
    inputLinkName: ElementFinder;
    agentSaveButton: ElementFinder;
    completeStatuElement: ElementFinder;
    recordStatusModified: ElementFinder;


    constructor() {
        this.recordStatusModified = element(by.xpath("//p[contains(text(),'Modified')]"));
        this.completeStatuElement = element(by.xpath("//*[@id='completeDataChanges']"));
        this.agentSaveButton = element(by.xpath("//*[@type='submit']/span"));
        this.inputLinkName = element(by.xpath("//*[@placeholder='Name']"));
        this.editPageTitle = element(by.xpath("//*[@class='cdk-drag-handle dialog-heading ng-star-inserted']/span"));
        this.editButton = element(by.xpath("//*[@class='detail-grid-item']/h1/img"));
        this.detailLinkCode = element(by.xpath("//*[@class='detail-grid-item']//p[2]"));
        this.homeButton = element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][1]//div[2]/a/span"));
        this.menuButton = element(by.xpath("//*[name()='mat-toolbar-row']//div/button/i"));
        this.tableCount = element.all(by.xpath("//table//tr"))

        this.recordTypeBtn = element(by.xpath("//*[@id ='recordTypes']/button/span"));
        this.recordTypeDDeselectBtn = element(by.xpath("//*[@id= 'recordTypes']/button"));

        //  this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.recordListCheckBox = element.all(by.xpath("//ul[@class = 'checkboxes']//li"));
        this.applyButton = element(by.xpath("//*[@type= 'submit']"));
        // this.cancelButton = element(by.xpath("//*[@class='app-button'][2]"));
        this.cancelButton = element(by.xpath("//button[contains(text(),'Cancel')]"));

        this.recordListTable = element.all(by.xpath("//table//tr//td[4]"));
        this.contentListTable = element.all(by.xpath("//table//tr//td[6]"));


        this.homePageVersion = element(by.xpath("//*[name()='app-version-label']//*[@class='version-info']"));

        this.contentTypeBtn = element(by.xpath("//*[@id ='contentTypes']/button/span"));

        this.contentTypeDDeselectBtn = element(by.xpath("//*[@id= 'contentTypes']/button"));



        this.statusTypeBtn = element(by.xpath("//*[@id ='recordStatus']/button/span"));

        this.statusTypeDDeselectBtn = element(by.xpath("//*[@id= 'recordStatus']/button"));

    }


    public async verifyOnLinkPage() {
        return true;
    }

    public async compareHeaderNames() {
        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            console.log('object1: %O', missing);
            return false;
        }
    }

    public async getTheColumnNames() {
        try {
         
            let tempCount = await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
            console.log("tempCount", Number(tempCount));
          
            var value = Number(tempCount);

            var headerNames = prop.GetPropertyValue("LINKS_HEADER_NAMES");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                headerExpectedArray[i] = eachHeaderNames[i].trim();

            }

            var cells = this.tableCount.all(by.tagName("th"));
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

    public async clickAndSelectRecordType() {
        console.log("Click on status Type and sleect Status");
        try {
            await this.recordTypeBtn.click().then(function () {
                console.log(" Record status List");
            });
           
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            await this.applyButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }


    public async verifyDisplayBasedRecordType() {


        console.log("Checking display Based on reocrd type");
        let checkCount = 0;

        helper.waitForTexttoAppear(this.recordTypeDDeselectBtn, " Record Types (1)");


        let lengthValue = await this.recordListTable.count();
        console.log("record Type Table  Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//table//tr[" + i + "]//td[4]")).getText();
            if (textname.trim() == prop.GetPropertyValue("LINKS_RECORD_TYPE").trim()) {
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

    public async deselectSelectedOptionClickApply() {
        try {
            console.log("deslect the Reocord Type seleted options");


            await this.recordTypeDDeselectBtn.click().then(function () {
                console.log(" des select status status List");
            });

            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Type Count", lengthValue);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

          await this.applyButton.click().then(function () {


            });
            helper.waitForTexttoAppear(this.recordTypeBtn, "Record Types");
            return true;

        }
        catch (Exception) {
            return false;
        }
    }

    public async verifyForAllData() {
        console.log("Checking display All reord Type");
        let checkCount = 0;

        //browser.sleep(5000);
        let lengthValue = await this.recordListTable.count();
        console.log("record Type Table  Count-------", lengthValue);
        console.log("record Type Table  Count", typeof lengthValue);
        if (Number(lengthValue) > 0) {
            console.log("its true");
            return true;
        }
        else {
            console.log("its false");
            return false;
        }

    }

    public async selectRecordTypeForCancel() {
        console.log("Click on Reocrd Type and sleect Reocrd for cancel");
        try {
            await this.recordTypeBtn.click().then(function () {
                console.log("Record TYpe Button List");
            });
         
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_RECORD_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

          await this.cancelButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }

    public async clickOnRecordTypeForCancel() {
        try {
            browser.sleep(2000);
            console.log("verify ReordType For Cancel");


            await this.recordTypeDDeselectBtn.click().then(function () {
                console.log(" des ReordType For Cancel ");
            });
            return true;
        }
        catch (Exception) {
            return false;
        }
    }

    public async verifyRecordTypeForCancel() {
        let selectedCount = 0;
        //let lengthValue = await this.recordListCheckBox.count();
        console.log("sssss");
        let lengthValue = 0;

        lengthValue = await this.recordListCheckBox.count();
        console.log("record Type Count for cancel ", lengthValue);
     
        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]//label/input")).isSelected();

            if (textname == true) {

                selectedCount = selectedCount + 1;
            }
        }
        await this.cancelButton.click().then(function () {

        });

        if (selectedCount == 0) {
            return true;
        }
        else {
            return false;
        }
    }


    public async clickAndSelectContactType() {
        console.log("Click on Contact Type and sleect Status");
        try {
            await this.contentTypeBtn.click().then(function () {
                console.log(" Contact status List");
            });
           var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });


          await this.applyButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }

    public async verifyDisplayBasedContentType() {


        console.log("Checking display Based on content type");
        helper.waitForTexttoAppear(this.contentTypeDDeselectBtn, " Content Types (1)");
        let checkCount = 0;
        let lengthValue = await this.contentListTable.count();
        console.log("content Type Table  Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//table//tr[" + i + "]//td[6]")).getText();
            if (textname.trim() == prop.GetPropertyValue("LINKS_DISPLAY_TYPE").trim()) {
                checkCount = checkCount + 1;
            }
        }
        console.log("content Type Table  Count,checkCount ", checkCount);
        if (checkCount == lengthValue) {
            return true;
        }
        else {
            return false;
        }


    }



    public async deselectSelectedContentOptionClickApply() {
        try {
            console.log("deslect the seleted options for content");


            await this.contentTypeDDeselectBtn.click().then(function () {
                console.log(" des select status status List");
            });
            //await this.recordListCheckBox.clear();
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Type Count", lengthValue);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });


 
            await this.applyButton.click().then(function () {



            });
            helper.waitForTexttoAppear(this.contentTypeBtn, " Content Types");
            return true;

        }
        catch (Exception) {
            return false;
        }
    }


    public async selectContentTypeForCancel() {
        console.log("Click on content Type and sleect Reocrd for cancel");
        try {
            await this.contentTypeBtn.click().then(function () {
                console.log(" Conetnt status List");
            });
            let lengthValue = await this.recordListCheckBox.count();
            console.log("record Type Count", lengthValue);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_CONTACT_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            await this.cancelButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }

    public async clickOnContentTypeForCancel() {
        try {
            browser.sleep(2000);
            console.log("verify Content For Cancel");

            await this.contentTypeDDeselectBtn.click().then(function () {
                console.log(" des ReordType For Cancel ");
            });
            return true;
        }
        catch (Exception) {
            return false;
        }
    }



    public async clickAndSelectStatusType() {
        console.log("Click on Status Type and sleect Status");
        try {
            await this.statusTypeBtn.click().then(function () {
                console.log(" status Type status List");
            });
 
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            await this.applyButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }


    public async verifyDisplayBasedStatusType() {

        console.log("Checking display Based on status type");
        helper.waitForTexttoAppear(this.statusTypeDDeselectBtn, " Record Status (1)");
        let checkCount = 0;
        let lengthValue = await this.contentListTable.count();
        console.log("status Type Table  Count", lengthValue);

        for (let i = 1; i <= lengthValue; i++) {
            let textname = await element(by.xpath("//table//tr[" + i + "]//td[7]")).getText();
            if (textname.trim() == prop.GetPropertyValue("LINKS_STATUS_TYPE").trim()) {
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


    public async deselectSelectedStatusOptionClickApply() {
        try {
            console.log("deslect the seleted status options");

            await this.statusTypeDDeselectBtn.click().then(function () {
                console.log(" des select status status List");
            });

    
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

             await this.applyButton.click().then(function () {

            });
            helper.waitForTexttoAppear(this.statusTypeBtn, "Record Status");
            return true;

        }
        catch (Exception) {
            return false;
        }
    }


    public async selectStatusTypeForCancel() {
        console.log("Click on content Type and sleect Reocrd for cancel");
        try {
            await this.statusTypeBtn.click().then(function () {
                console.log("status List");
            });
         var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + prop.GetPropertyValue("LINKS_STATUS_TYPE").trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            await this.cancelButton.click().then(function () {

            })
        }
        catch (Exception) {
            console.log("Exception accoured");
            return false;
        }
        return true;
    }

    public async clickOnStatusTypeForCancel() {
        try {
            browser.sleep(2000);
            console.log("verify Content For Cancel");

            await this.statusTypeDDeselectBtn.click().then(function () {
                console.log(" des ReordType For Cancel ");
            });
            return true;
        }
        catch (Exception) {
            return false;
        }
    }


    public async clickOnHome() {
        try {
            let returnResult = await this.menuButton.click().then(function () {


                console.log("click on menu button  from Link Page1234")

                return true;

            });
            console.log("returnResult", returnResult);
            if (returnResult == true) {
                //helper.waitForTexttoAppear(this.homeButton,"Home")
                console.log("returnResult12342", returnResult);
                this.homeButton.click().then(function () {
                    console.log("click on Home button ")

                });
            }

            return returnResult;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    public async verifyUserInHomePage() {
        try {
            let result = false;
            helper.waitForTexttoAppear(this.homeButton, "Home")

            await this.homePageVersion.getText().then(function (text) {
                console.log("text", text);
                if ((text.trim()).includes(prop.GetPropertyValue("VERSION_INFO").trim())) {
                    console.log("version matches")
                    result = true;
                }
                else {
                    result = false;
                }
            });
            return result;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    public async clickOnOneOfTheLinks() {
        try {
            let tempCount = await element(by.xpath("//table[@id = 'grid']//tr[1]/td[3]")).click().then(async function () {
                linkCode = await element(by.xpath("//table[@id = 'grid']//tr[1]/td[3]")).getText();
                console.log("Clicked on one of the Link");
                return true;
            });
            if (tempCount) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured when its click on First Link");
            return false;
        }
    }

    public async verifyLinkDetailPageWithCode() {
        try {
            console.log("linkCode", linkCode);
            let detailsPage = await this.detailLinkCode.getText();
            console.log("detailsPage", detailsPage);
            if (detailsPage.trim() == linkCode.trim()) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured");
            return false;
        }

    }

    public async verifyUserIndetailspage() {
        try {
            let result = await this.editButton.isPresent();
            if (result) {
                await this.editButton.click();
            }
            return result;
        }
        catch (e) {
            return false;
        }
    }

    public async verifyClickOnEditButton() {
        let result = await this.editButton.click().then(function () {
            return true;
        })
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    public async verifyEditPageIsDisplayed() {
        let title = await this.editPageTitle.getText();
        if (title.trim() == "Edit Link") {
            return true;
        }
        else {
            return false;
        }
    }

    public async updateLinkname() {
        try {
            await this.inputLinkName.clear();
            console.log("Enter the inputLinkName");
            await this.inputLinkName.sendKeys("TestEdit");
            console.log("Enter the Description2");
            return true;

        }
        catch (e) {
            return false;
        }
    }

    public async userClickOnSaveButton() {
        try {
            await this.agentSaveButton.click();
            console.log("Enter the Description3");


            let result = await helper.waitForTexttoAppear_1(this.completeStatuElement, "Complete");
            if (result) {
                console.log("Record status is mordified");
                return true;
            }
            else {
                return false;
            }

        }
        catch (e) {
            console.log("Exception accoured");
            return false;
        }
    }

    public async verifyLinkIsModified() {
        let reuslt = await helper.waitForTexttoAppear_1(this.recordStatusModified, "Modified");
        if (reuslt) {
            return true;
        }
        else {
            return false;
        }
    }


    //commented now 

}