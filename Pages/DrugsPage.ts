import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, ElementArrayFinder, browser, By, Key } from "protractor";
import { textChangeRangeIsUnchanged } from "typescript";
import { Helper } from "../Utility/Helper";
import { threadId } from "worker_threads";

var prop = new PropertiesFileManager();
var help = new Helper();
let headerActualArray = new Array();
let headerExpectedArray = new Array();
let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
var helper = new Helper();
let NameToBeEntered = "";

export class DrugsPage {

    drugsHeaderElement: ElementFinder;
    TableCount: ElementArrayFinder;
    recordListCheckBox: ElementArrayFinder;
    DrugCode: ElementFinder;
    mainInforamtionHeader: ElementFinder;
    drugsHeaderInsideMainInfo: ElementFinder;
    DrugTypesFilterBtn: ElementFinder;
    multiSourceDrugText: ElementFinder;
    multiSourceDrugbtn: ElementFinder;
    applyBtn: ElementFinder;
    cancelBtn: ElementFinder;
    DrugTypeSelected: ElementFinder;
    SearchPannel: ElementFinder;
    Header: ElementFinder;
    DrugNameInGrid: ElementFinder;
    NewBtnInDrugs: ElementFinder;
    NameInNewOfDrugs: ElementFinder;
    DescriptionInNewOfDrugs: ElementFinder;
    DrugTypeInNewOfDrugs: ElementFinder;
    DrugCodeInNewOfDrugs: ElementFinder;
    NameInputInNewOfDrugs: ElementFinder;
    DescriptionInputInNewOfDrugs: ElementFinder;
    DrugCodeInputInNewOfDrugs: ElementFinder;
    DrugTypeInputNewofDrugs: ElementFinder;
    SelectDrugType: ElementFinder;
    SaveBtnInsideNewOfDrugs: ElementFinder;


    constructor() {
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.drugsHeaderElement = element(by.xpath("//h1[@class ='grid-header']"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.DrugCode = element(By.xpath("//table//tr[1]//td[2]/a"));
        this.mainInforamtionHeader = element(by.xpath("//*[@class='detail-grid-item']/h1"));
        this.drugsHeaderInsideMainInfo = element(by.xpath("//*[@class='detail-link']"));
        this.DrugTypesFilterBtn = element(by.xpath("//*[@class='contentTypes']/button"));
        this.multiSourceDrugText = element(by.xpath("//*[@class='checkboxes']//li[2]/label//span"));
        this.multiSourceDrugbtn = element(by.xpath("//*[@class='checkboxes']//li[2]/label/input"));
        this.applyBtn = element(by.xpath("//*[@class='buttons-row']/button[1]"));
        this.cancelBtn = element(by.xpath("//*[@class='buttons-row']/button[2]"));
        this.DrugTypeSelected = element(by.xpath("//table//tr[3]//td[4]"));
        this.Header = element(by.className("cdk-drag-handle dialog-heading"));
        this.SearchPannel = element(by.className("search form-control"));
        this.DrugNameInGrid = element(by.xpath("//table//tr//td[3]"));
        this.NewBtnInDrugs = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-drugs/div/div[1]/div[2]/app-user-action-controls/div/div[3]/div/button"));
        this.NameInNewOfDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.DescriptionInNewOfDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.DrugTypeInNewOfDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.DrugCodeInNewOfDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/mat-form-field[3]/div/div[1]/div/input"));
        this.NameInputInNewOfDrugs = element(by.xpath("//*[@class='modal-form']/form/mat-form-field[1]/div/div/div/input"));
        this.DescriptionInputInNewOfDrugs = element(by.xpath("//*[@class='modal-form']/form/mat-form-field[2]/div/div/div/input"));
        this.DrugCodeInputInNewOfDrugs = element(by.xpath("//*[@class='modal-form']/form/mat-form-field[3]/div/div/div/input"));
        this.DrugTypeInputNewofDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-drug/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.SelectDrugType = element(by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[1]"));
        this.SaveBtnInsideNewOfDrugs = element(by.xpath("//*[@class='buttons-row']/app-form-submit-button/button"));

    }

    public async verifyDrugsPage() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            await this.drugsHeaderElement.getText().then(function (text) {
                if (text.trim() == "Drugs") {
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
    public async verifyDrugTable() {
        var count = await this.TableCount.count();
        var retrunresult = false;
        console.log("count in the drugs page" + count);
        if (count > 0) {
            retrunresult = true;
        }
        else {
            retrunresult = false;
        }
        return retrunresult;
    }

    public async getTheColumnNamesForDrugs() {
        try {

            let lengthValue = await this.recordListCheckBox.count();

            var headerNames = prop.GetPropertyValue("DRUGS_HEADER_NAMES");
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


    public async compareHeaderNamesForDrugs() {

        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    public async ClickOnDrugCode() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.DrugCode.isPresent()) {
                console.log("Drug code is there");
                await this.DrugCode.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug Code in Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerfiyDetailPageWithHeaderNameforDrugs() {
        try {

            console.log("VerfiyDetailPageWithHeaderName");
            let waitForelemnet = helper.waitForTexttoAppear_1(this.mainInforamtionHeader, "Main Information");
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
    public async ClickOnDrugsHeaderInsideMainInfo() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.drugsHeaderInsideMainInfo.isPresent()) {
                await this.drugsHeaderInsideMainInfo.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drugs Link inside Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async ClickOnDrugTypes() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.DrugTypesFilterBtn.isPresent()) {
                await this.DrugTypesFilterBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug Type Link inside Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async VerifydataOfDrugTypes() {
        try {
            var value = await this.TableCount.all(By.tagName("th")).count();
            console.log(value);


            var headerNames = prop.GetPropertyValue("DRUGTYPES_IN_DRUGS");
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
    public async comparedataOfDrugTypesOfDrugs() {
        this.VerifydataOfDrugTypes();
        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing Drug Types are", missing.length, "/n", missing.toString());
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    public async ClickOnMultiSourceDrugTypeRadioBtn() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            helper.waitForTexttoAppear(this.multiSourceDrugText, "Multi Source Drug (MULTISOURCE)");
            if (await this.multiSourceDrugbtn.isPresent()) {
                console.log("Multi Source Drug Type is Present inside Drugs")
                await this.multiSourceDrugbtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Multi Source Drug Type in Drugs under Drug types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnApplyBtnAfterSelectingDrugType() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.applyBtn.isPresent()) {
                await this.applyBtn.click().then(function () {
                    console.log("Clicked on Apply of Drug Types");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Apply Button in Drugs under Drug types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifyUserappliedOnMultiSourceDrugType() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.DrugTypeSelected.isPresent()) {
                browser.sleep(4000);
                await this.DrugTypeSelected.getText().then(function (TypeText) {
                    TypeText.trim();
                    console.log("Drug Type Text ", TypeText.trim());
                    if (TypeText == 'Multi Source Drug') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Selected Drug Type is not filtered")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async CheckHeaderOfDrugTypes() {
        try {
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (DrugypesHeaderText) {
                    DrugypesHeaderText.trim();
                    if (DrugypesHeaderText == 'Drug Types') {
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


    public async ClickCancelButtonAfterUnSelectingDrugType() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.cancelBtn.isPresent()) {
                await this.cancelBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Drugs under Drug types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterTextIntoSearchPanel() {
        try {
            var retrunresult = false;
            if (await this.SearchPannel.isPresent()) {
                await this.SearchPannel.sendKeys("Otezla").then(function (text) {
                    retrunresult = true;

                });

            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async verifyOtezlaDrugInGrid() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            var retrunresult = false;
            if (await this.DrugNameInGrid.isPresent()) {
                await this.DrugNameInGrid.getText().then(function (DrugName) {
                    DrugName.trim();
                    if (DrugName == 'Otezla') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Otezla Drug In Grid of Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async RemoveTextfromSearchPanel() {
        try {
            var retrunresult = false;
            if (await this.SearchPannel.isPresent()) {
                await this.SearchPannel.clear().then(function () {
                    retrunresult = true;

                });

            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnNewBtnInDrugs() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked New Button of Drugs");
            var retrunresult = false;
            if (await this.NewBtnInDrugs.isPresent()) {
                await this.NewBtnInDrugs.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no New Button in Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async CheckHeaderOfNewInDrugs() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (PolicyTypeHeaderText) {
                    PolicyTypeHeaderText.trim();
                    if (PolicyTypeHeaderText == 'Edit Drug') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Header is not matching against Requirement for New of Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async getThefieldsForNewInDrugs() {
        try {

            var headerNames = prop.GetPropertyValue("NEW_FIELDS_IN_DRUGS");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                headerExpectedArray[i] = eachHeaderNames[i].trim();

            }

            console.log("Expeted Fileds in New Of Drugs ",headerExpectedArray)
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let NamePlaceholder = await this.NameInNewOfDrugs.getAttribute("placeholder");
            console.log("NamePlaceholder ", NamePlaceholder);
            let DescriptionPlaceHolder = await this.DescriptionInNewOfDrugs.getAttribute("placeholder");
            console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder)
            let DrugTypePlaceHolder = await this.DrugTypeInNewOfDrugs.getAttribute("aria-label");
            console.log("DrugTypePlaceHolder ", DrugTypePlaceHolder);
            let DrugCodePlaceHolder = await this.DrugCodeInNewOfDrugs.getAttribute("placeholder");
            console.log("DrugCodePlaceHolder ", DrugCodePlaceHolder);

            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            headerActualArray.push(NamePlaceholder.trim(), DescriptionPlaceHolder.trim(), DrugTypePlaceHolder.trim(),
                DrugCodePlaceHolder.trim());

            console.log("ApplicationNewItemList", headerActualArray.length);
            let result = headerExpectedArray.filter(item => headerActualArray.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Items for New are extra or not in application in Drugs " + result.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDrugNameInNewOfDrugs() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.NameInputInNewOfDrugs.isPresent()) {
                console.log("Came to Name Field")
                let Number = help.RandomNumber();
                let StringNumber = (await Number).toString();
                NameToBeEntered = "Test Drug Inputfrom Mozenda Team " + StringNumber;
                //await this.NameInputInNew.click();
                await this.NameInputInNewOfDrugs.sendKeys(NameToBeEntered).then(function () {
                    console.log("Entered Data");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Name inside New inside Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDescriptionInNewOfDrugs() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DescriptionInputInNewOfDrugs.isPresent()) {
                //await this.DescriptionTxtNameInNewOfDocuments.clear();
                await this.DescriptionInputInNewOfDrugs.sendKeys("For Testing New Field inside Drugs").then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Description inside New of Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async EnyterDrugTypeInNewOfDrugs() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DrugTypeInputNewofDrugs.isPresent()) {
                await this.DrugTypeInputNewofDrugs.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SelectDrugType.isPresent()) {
                    await this.SelectDrugType.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Single Source Drug Type in Drug Types inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async EnterDrugCodeInNewOfDrugs() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DrugCodeInputInNewOfDrugs.isPresent()) {
                console.log("Came to Name Field")
                let Number = help.RandomNumber();
                let StringNumber = (await Number).toString();
                NameToBeEntered = StringNumber;
                //await this.NameInputInNew.click();
                await this.DrugCodeInputInNewOfDrugs.sendKeys(NameToBeEntered).then(function () {
                    console.log("Entered Data");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no DrugCode inside New inside Drugs")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


    public async ClickOnSaveBtnInnewOfDrugs() {
        try {
            var retrunresult = false;
            //browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            if (await this.SaveBtnInsideNewOfDrugs.isPresent()) {
                await this.SaveBtnInsideNewOfDrugs.click().then(function () {
                    console.log("Clicked on Save in New of Drugs");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Save Button in Drugs under New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


}