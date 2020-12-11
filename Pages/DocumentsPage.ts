import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, ElementArrayFinder, browser, By, Key } from "protractor";
import { textChangeRangeIsUnchanged } from "typescript";
import { Helper } from "../Utility/Helper";
import { threadId } from "worker_threads";


var prop = new PropertiesFileManager();
var helper = new Helper();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();

export class DocumentsPage {
    documentHeaderElement: ElementFinder;
    TableCount: ElementArrayFinder;
    DocumentCode: ElementFinder;
    mainInforamtionHeader: ElementFinder;
    detailCount: ElementArrayFinder;
    documentHeaderInsideMainInfo: ElementFinder;
    ContentTypesFilterBtn: ElementFinder;
    pdfContentTyperadiobtn: ElementFinder;
    applyBtn: ElementFinder;
    cancelBtn: ElementFinder;
    recordListCheckBox: ElementArrayFinder;
    recordStatusBtnOnDocuments: ElementFinder;
    Header: ElementFinder;
    NewRecordsBtn: ElementFinder;
    newSelectedRecordStatus: ElementFinder;
    htmlConetntTypeSelected: ElementFinder;
    pdfContentTyperadiobtnText:ElementFinder;


    constructor() {
        this.documentHeaderElement = element(By.xpath("//*[@id='documentGridViewHeader']//div//h1"));
        this.TableCount = element.all(by.xpath("//table//tr"));
        //this.GridHeader=element(by.className('grid-header'));
        this.DocumentCode = element(By.xpath("//table//tr[1]//td[2]"));
        this.mainInforamtionHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.detailCount = element.all(by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
        this.documentHeaderInsideMainInfo = element(by.xpath("//*[@class='policy-heading']/span/a"));
        this.ContentTypesFilterBtn = element(by.xpath("//*[@id='contentTypes']/button"));
        this.pdfContentTyperadiobtn = element(by.xpath("//*[@class='checkboxes']//li[7]/label/input"));
        this.pdfContentTyperadiobtnText = element(by.xpath("//*[@class='checkboxes']//li[7]/label//span"));
        this.applyBtn = element(by.xpath("//*[@class='buttons-row']/button[1]"));
        this.cancelBtn = element(by.xpath("//*[@class='buttons-row']/button[2]"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.recordStatusBtnOnDocuments = element(by.xpath("//*[@id= 'recordStatus']/button"));
        this.Header = element(by.className("cdk-drag-handle dialog-heading"));
        this.NewRecordsBtn = element(by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.newSelectedRecordStatus = element(by.xpath("//table//tr[2]//td[6]"));
        this.htmlConetntTypeSelected = element(by.xpath("//table//tr[2]//td[5]"));


    }

    public async VerifyDocumentPageHeader() {
        let result = await this.documentHeaderElement.getText();
        if (result == "Documents") {
            return true;
        }
        else {
            return false;
        }
    }

    public async verifyDocumentspage() {
        try {
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;
            var count = await this.TableCount.count();
            console.log("count in the Docuemnts  page" + count);
            if (count > 0) {
                retrunresult = true;
            }
            else {
                retrunresult = false;
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async getTheColumnNamesForDocuments() {
        try {
         
            let tempCount = await element.all(by.xpath("//table[@id = 'grid']//tr[1]/th")).count();
            console.log("tempCount", Number(tempCount));
          
            var value = Number(tempCount);
            
            var headerNames = prop.GetPropertyValue("DOCUMENTS_HEADER_NAMES");
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

    public async ClickOnDocumentCode() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.DocumentCode.isPresent()) {
                await this.DocumentCode.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Document Code in Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
       
    }

    public async compareHeaderNamesForDocuments() {

        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        //console.log('object1: %O', headerExpectedArray);
        //console.log('object1: %O', headerActualArray);
        if (missing.length == 0) {
            return true;
        }
        else {
            console.log('object1: %O', headerExpectedArray);
            console.log('object1: %O', headerActualArray);
            return false;
        }
    }

    public async VerfiyDetailPageWithHeaderName() {
        try {

            browser.sleep(50000);
            console.log("VerfiyDetailPageWithHeaderName");
            let waitForelemnet = await helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
            console.log("Cam Came Came Came")
            if (waitForelemnet) {
                console.log("Found Main Information")
                return true;
            }
            else {
                console.log("Not Found Main Information")
                return false;
            }
            return true;
        }
        catch (e) {
            console.log("Exception occoured while checking detail page header");
            return false;
        }
    }

    public async ClickOnDocumentHeaderInsideMainInfo() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.documentHeaderInsideMainInfo.isPresent()) {
                await this.documentHeaderInsideMainInfo.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Documents Link inside Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnContentTypes() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.ContentTypesFilterBtn.isPresent()) {
                await this.ContentTypesFilterBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Content Type Link inside Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifydataOfContentTypes() {
        try {
            var value = await this.TableCount.all(By.tagName("th")).count();
            console.log(value);


            var headerNames = prop.GetPropertyValue("CONTENTTYPES_IN_DOCUMENTS");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                headerExpectedArray[i] = eachHeaderNames[i].trim();

            }

            var cells = this.TableCount.all(By.tagName("th"));
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
    public async comparedataOfConetntTypeOfDocuments() {
        this.VerifydataOfContentTypes();
        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing Content Types are", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    public async ClickOnhtmlConetntTypeRadioBtn() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            await helper.waitForTexttoAppear_1(this.pdfContentTyperadiobtnText,"Adobe Portable Document File (*.pdf) (PDF)");
            console.log("Printed printed printed")
            if (this.pdfContentTyperadiobtn.isPresent()) {
                console.log("pdf Radio Button Element is Present inside Documents")
                await this.pdfContentTyperadiobtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no pdf Content Type in Documents under Content types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnApplyButtonafterSelectingContentType() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (this.applyBtn.isPresent()) {
                await this.applyBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Apply Button in Documents under Content types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async VerifyUserappliedOnhtmlConetntType() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (this.htmlConetntTypeSelected.isPresent()) {
                browser.sleep(4000);
                await this.htmlConetntTypeSelected.getText().then(function (RecordsText) {
                    RecordsText.trim();
                    console.log("Records Text ", RecordsText.trim());
                    if (RecordsText == 'Adobe Portable Document File (*.pdf)') {
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
    public async ClickCancelButtonAfterUnSelectingContentType() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (this.cancelBtn.isPresent()) {
                await this.cancelBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Documents under Content types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnRecordStatusOfDocuments() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (this.recordStatusBtnOnDocuments.isPresent()) {
                await this.recordStatusBtnOnDocuments.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Record Status in Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckHeaderOfRecordStatus() {
        try {
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;
            if (this.Header.isPresent()) {
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
        //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
        let lengthValue = await this.recordListCheckBox.count();
        let ApplicationRecordList = new Array();
        let Recordllist = new Array("New ".trim(), "Modified ".trim(),
            "Completed ".trim(), "Approved ".trim(),
            "Published ".trim(), "Archived ".trim());
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            console.log("Recordllist", Recordllist.length);
            if (this.Header.isPresent()) {
                for (let i = 1; i < lengthValue; i++) {
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
                    console.log("These Records are extra or not in application for Documents " + result.toString());
                }
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async SelectNewFromRecordType() {
        try {
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;
            if (this.NewRecordsBtn.isPresent()) {
                await this.NewRecordsBtn.click().then(function () {
                    console.log("clicked on New of Recoprd Status ");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("The New Radio Button Radio button is not Working under Record status for Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnApplyBtnOnRecordStatus() {
        try {
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;

            if (this.applyBtn.isPresent()) {
                await this.applyBtn.click().then(function () {
                    console.log("clicked on Apply Button ");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("The Apply Button Radio button is not Working under Record status for Documents")
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
            if (this.newSelectedRecordStatus.isPresent()) {
                browser.sleep(6000);
                await this.newSelectedRecordStatus.getText().then(function (RecordsText) {
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
}