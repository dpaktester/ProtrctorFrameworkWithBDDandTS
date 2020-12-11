import { ElementFinder, element, by, browser, ElementArrayFinder, } from "protractor";
import { Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { Helper } from "../Utility/Helper";
var prop = new PropertiesFileManager();
let helper = new Helper();


let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();
let firstOrganizationNameInGrid = "";

let detailTABActualArray = new Array();
let detailTABExpectedArray = new Array();


export class OrganizationPage {
    tableCount: ElementArrayFinder;
    tableHeaderCount: ElementArrayFinder;
    organizationHeaderElement: ElementFinder;
    organizationtypeFilter: ElementFinder;
    listOfOrganizationFilter: ElementArrayFinder;
    organizationTypeHeader: ElementFinder;
    firstElementOragnizationType: ElementFinder;
    applyButton: ElementFinder;
    cancelButton: ElementFinder;
    organizatioTypeOnGrid: ElementFinder;
    organizationtypeFiltername: ElementFinder;

    //Organization status Filter start
    organizationstatusFilter: ElementFinder;
    organizationstatusFilter_1: ElementFinder;
    listOfOrganizationStatusFilter: ElementArrayFinder;
    organizationstatuseHeader: ElementFinder;
    organizationStatusFiltername: ElementFinder;
    organizationStatusOnGrid: ElementFinder;
    //Organization status filter end

    //TAB Elements
    arrayOfTabs: ElementArrayFinder;

    firstOrganizationInGridElement: ElementFinder;

    //Plan TAB Start
    planTABElement: ElementFinder;
    overviewTABElement: ElementFinder;
    formulariesTABElement: ElementFinder;
    coveragePolicyTABElement: ElementFinder;
    documentTABElement: ElementFinder;
    linkTABElement: ElementFinder;
    //Plan TAB End

    newTABElement: ElementFinder;
    newCreatePageHeader: ElementFinder;

    inputPlanName: ElementFinder;
    inputPlanURL: ElementFinder;

    createButton: ElementFinder;

    //Edit Operation elements start
    editButton: ElementFinder;
    editDecriptionElement: ElementFinder;
    editSaveButton: ElementFinder;
    editHeader: ElementFinder;
    //h1[contains(text(),'Main Information')]/img

    //edit operation elements ends
    continueButtonElement : ElementFinder;
    approveButtonElement:ElementFinder;
    rejectButtonElement:ElementFinder;
    recordStatus : ElementFinder;
    recordStatusModified : ElementFinder;
    recordStatusNew : ElementFinder;

    organizationLinkElement:ElementFinder;

    newButtonElement:ElementFinder;
    newCreatePageheaderElement:ElementFinder;

    newOrganizationNameElement:ElementFinder;
    newCreateButtonElement:ElementFinder;
    completeButtonElement:ElementFinder;
    recordStatusApproved:ElementFinder;

    constructor() {
   
        this.newCreateButtonElement = element(by.xpath("//button[contains(text(),'Create')]"));
        this.newOrganizationNameElement = element(by.xpath("//*[@placeholder='Organization Name']"));
        this.newCreatePageheaderElement=element(by.xpath("//h1[contains(text(),' Create a New Organization ')]"));
        this.newButtonElement=element(by.xpath("//button[contains(text(),'New')]"));
 
        this.organizationLinkElement=element(by.xpath("//a[contains(text(),'Organizations')]"))
        this.continueButtonElement = element(by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.completeButtonElement = element(by.xpath("//*[@id='completeDataChanges']"));
        this.approveButtonElement=element(by.xpath("//*[@id='approveDataChanges']"));
        this.rejectButtonElement=element(by.xpath("//*[@id='rejectDataChanges']"));
        this.recordStatus = element(by.xpath("//p[contains(text(),'Approved')]"));
        this.recordStatusModified = element(by.xpath("//p[contains(text(),'Modified')]"));
        this.recordStatusNew = element(by.xpath("//p[contains(text(),'New')]"));
        this.recordStatusApproved= element(by.xpath("//p[contains(text(),'Approved')]"));
   

  



        //edit starts
        this.editHeader = element(by.xpath("//h1//span[contains(text(),'Edit')='submit']"));
        this.editButton = element(by.xpath("//h1[contains(text(),'Main Information')]/img"));
        this.editDecriptionElement = element(by.xpath("//*[@placeholder='Description']"));
        this.editSaveButton = element(by.xpath("//button[@type='submit']//span"));
        //edit ends




        this.overviewTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[1]"));
        this.createButton = element(by.xpath("//button[contains(text(),'Create')]"));
        this.inputPlanName = element(by.xpath("//*[@placeholder='Plan Name']"));
        this.inputPlanURL = element(by.xpath("//*[@placeholder='Plan URL']"));
        this.newCreatePageHeader = element(by.xpath("//h1[@class='cdk-drag-handle dialog-heading']"));
        this.newTABElement = element(by.xpath("//*[@id='tabActionButton']"));
        this.arrayOfTabs = element.all(by.xpath("//div[@class='mat-tab-links']/a"));
        this.firstOrganizationInGridElement = element(by.xpath("//table//tr[2]/td[2]/a"));
        this.planTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[2]"));
        this.formulariesTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[3]"));
        this.coveragePolicyTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[4]"));
        this.documentTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[5]"));
        this.linkTABElement = element(by.xpath("//div[@class='mat-tab-links']/a[6]"));



        //Organization status Filter start
        this.organizationstatuseHeader = element(by.xpath("//*[@class='cdk-drag']//h1"));
        this.listOfOrganizationStatusFilter = element.all(by.xpath("//ul[@class='checkboxes']/li"));
        this.organizationstatusFilter = element(by.xpath("//*[@id='recordStatusFilter']/button/span"));
        this.organizationstatusFilter_1 = element(by.xpath("//*[@id='recordStatusFilter']/button"));
        this.organizationStatusFiltername = element(by.xpath("//*[@id='recordStatusFilter']/button/span"));
        this.organizationStatusOnGrid = element(by.xpath("//table//tr[2]/td[6]/span"));
        //Organization status filter end

        this.organizatioTypeOnGrid = element(by.xpath("//table//tr[2]/td[4]/span"));
        this.applyButton = element(by.xpath("//*[@type= 'submit']"));
        this.cancelButton = element(by.xpath("//*[@class='app-button'][1]"));
        this.firstElementOragnizationType = element(by.xpath("//ul[@class='checkboxes']/li[1]/label/input"));
        this.organizationTypeHeader = element(by.xpath("//*[@class='cdk-drag']//h1"));
        this.listOfOrganizationFilter = element.all(by.xpath("//ul[@class='checkboxes']/li"));
        this.organizationtypeFilter = element(by.xpath("//*[@id='organizationTypesFilter']/button"));
        this.organizationtypeFiltername = element(by.xpath("//*[@id='organizationTypesFilter']/button/span"));
        this.tableCount = element.all(by.xpath("//table//tr"));
        this.tableHeaderCount = element.all(by.xpath("//table//tr[1]/th"));
        this.organizationHeaderElement = element(by.xpath("//div[@id = 'organizationGridViewContainer']//h1"));
    }
    public async verifyGridForDisplayDefult() {
        helper.waitForTexttoAppear(this.organizationtypeFiltername, "Organization Types");
        let count = await this.tableCount.count();
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }
        return true;
    }

    public async verifyGridForDisplayOrgnizationType() {

        //helper.waitForTexttoAppear(this.organizatioTypeOnGrid, "MCO");
        let result = await this.organizatioTypeOnGrid.getText().then(function (name) {
            if (name.trim() == "MCO".trim()) {
                console.log("Validated");
                return true;
            }
            else {
                return false;
            }
        });
        return result;
    }

    public async selectOneOfTheOrganizationTypesAndClickApply() {
        try {
            //first select first element
            let orgTypename = prop.GetPropertyValue("ORGANIZATION_TYPE_NAME");
            console.log("orgTypename", orgTypename);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
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

                helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types (1)")
                return true;
            }
            else {
                return false;
            }

        }
        catch (e) {
            console.log("Exception accoured while clicking " + e);
            return false;
        }
    }

    public async verifyOrganizationFilterOpen() {
        try {
            let headerText = await this.organizationTypeHeader.getText();
            if (headerText.trim() == "Organization Types".trim()) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured in verifyOrganizationFilterOpen " + e);
            return false;
        }

    }


    public async ClickOnOrganizationTypeFilterFordelselect() {

        console.log("click  for the list  organization type");
        helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types (1)")
        let result = await this.organizationtypeFilter.click().then(function () {
            console.log("clicked on organization filter");
            return true;
        });


        return result;
    }


    public async ClickOnOrganizationTypeFilter() {

        console.log("click  for the list  organization type");

        let result = await this.organizationtypeFilter.click().then(function () {
            console.log("clicked on organization filter");
            return true;
        });


        return result;
    }


    public async varifyOrganizationTypes() {
        let count = await this.listOfOrganizationFilter.count();
        console.log("count", count);
        for (var i = 1; i <= count; i++) {

            let eachOrganizationTypeText = await element(by.xpath("//ul[@class='checkboxes']/li[" + i + "]/label/span")).getText();
            console.log(eachOrganizationTypeText);

        }
        return true;
    }


    public async VerifyOrganizationHeaderName() {
        let headerText = await this.organizationHeaderElement.getText();
        if (headerText == "Organizations") {
            return true;

        }
        else {
            return false;
        }
    }
    public async verifyHeaderNames() {
        var headerExpectedArray = new Array();
        var headerActualArray = new Array();
        //browser.sleep(10000);

        var headerNames = prop.GetPropertyValue("ORAGNIZATION_HEADER_NAMES");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            headerExpectedArray[i] = eachHeaderNames[i];

        }
        console.log("Inside header names");
        var value = await this.tableHeaderCount.count();
        console.log(value);

        for (var i = 1; i <= value; i++) {
            let textname = await element(by.xpath("//table//tr[1]//th[" + i + "]" + "//div/button/a[1]")).getText();
            headerActualArray[i] = textname;
        }

        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log(missing.length);

        if (missing.length == 0) {
            return true;
        }
        else {

            return false;
        }


    }


    //Organization status Fiter steps start
    public async clickonOrganizationStatusFilter() {
        try {
            //helper.waitForTexttoAppear(this.organizationstatusFilter,"Record Status")
            browser.sleep(5000)
            let result = this.organizationstatusFilter.click().then(function () {
                console.log("Clicked on status filter");
                return true;

            });
            return result;

        }
        catch (e) {
            console.log("Exception accoured--" + e)
            return false;
        }
    }


    public async verifyListOfOragnizationStatus() {


        var headerNames = prop.GetPropertyValue("LIST_ORGANIZATION_STATUS_NAME");
        let eachHeaderNames = headerNames.split(",");
        for (var i = 0; i < eachHeaderNames.length; i++) {
            detailheaderExpectedArray[i] = eachHeaderNames[i].trim();

        }

        let count = await this.listOfOrganizationStatusFilter.count();
        console.log("count", count);
        for (let i = 1; i <= count; i++) {
            let eachOrganizationStatusText = await element(by.xpath("//ul[@class='checkboxes']/li[" + i + "]/label/span")).getText();
            detailheaderActualArray[i] = eachOrganizationStatusText.trim();
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

    public async verifyUserInOrganizationStatus() {
        try {
            console.log("Oragnization hStatus Header check");
            let headerText = await this.organizationstatuseHeader.getText();
            if (headerText.trim() == "Record Status".trim()) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured" + e)
            return false;
        }
    }

    public async selectOrganizationStatusAndClickApply() {
        try {
            let orgTypename = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
            console.log("orgTypename", orgTypename);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            if (result) {
                //click on apply button
                let result = await this.applyButton.click().then(function () {
                    console.log("clicked on apply button");
                    return true;
                });

                return result;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured" + e);
            return false;
        }
    }

    public async verifyGirdForOrganizationStatus() {
        try {
            let orgStatusname = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
            console.log("orgStatusname " + orgStatusname);

            helper.waitForTexttoAppear(this.organizationstatusFilter_1, "Record Status (1)".trim());
            let result = await this.organizationStatusOnGrid.getText().then(function (name) {
                if (name.trim() == orgStatusname.trim()) {
                    console.log("Validated status");
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

    public async ClickOnOrganizationStatusFilterFordelselect() {

        console.log("click  for the list  organization status");
        helper.waitForTexttoAppear(this.organizationstatusFilter_1, "Record Status (1)")
        let result = await this.organizationstatusFilter_1.click().then(function () {
            console.log("clicked on organization filter");
            return true;
        });


        return result;
    }


    public async selectOneOfTheOrganizationStatussAndClickApply() {
        try {
            //first select first element
            let orgTypename = prop.GetPropertyValue("ORGANIZATION_STATUS_NAME");
            console.log("orgTypename", orgTypename);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
            let result = await test.click().then(function () {
                console.log("clicked on first element");
                return true;
            });

            if (result) {
                //click on apply button
                let result = await this.applyButton.click().then(function () {
                    console.log("clicked on apply button");
                    return true;
                });
                // helper.waitForTexttoAppear(this.organizationstatusFilter,"Record Status")
                return result;
            }
            else {
                return false;
            }

        }
        catch (e) {
            console.log("Exception accoured while clicking " + e);
            return false;
        }
    }

    public async verifyGridForOrganizationStatusDisplayDefult() {
        helper.waitForTexttoAppear(this.organizationstatusFilter, "Record Status");
        let count = await this.tableCount.count();
        if (count > 0) {
            return true;
        }
        else {
            return false;
        }
        return true;
    }
    //Organization status Fiter steps end


    //Organization detail Page screnarioes scripts start

    public async clickOnFirstOrganization() {
        try {

            firstOrganizationNameInGrid = await this.firstOrganizationInGridElement.getText();
            let result = this.firstOrganizationInGridElement.click().then(function () {
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
            let detailPageOrganizationName = await element(by.xpath("//h1//..//p[2]")).getText();

            if (detailPageOrganizationName.trim() == firstOrganizationNameInGrid.trim()) {
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

    public async getTabNames() {
        try {
            //get tab name
            var headerNames = prop.GetPropertyValue("LIST_ORGANIZATION_TAB_NAME");
            let eachHeaderNames = headerNames.split(",");
            for (var i = 0; i < eachHeaderNames.length; i++) {
                detailTABExpectedArray[i] = eachHeaderNames[i].trim();

            }

            console.log('object1: %O', detailTABExpectedArray);

            let count = await this.arrayOfTabs.count();
            console.log("count", count);
            for (let i = 0; i < count; i++) {
                let eachOrganizationtabText = await this.arrayOfTabs.get(i).getText();
                console.log(eachOrganizationtabText);
                // let eachOrganizationtabText = await element(by.xpath("//ul[@class='checkboxes']/li[" + i + "]/label/span")).getText();
                detailTABActualArray[i] = eachOrganizationtabText.trim();
            }

            console.log('object: %O', detailTABActualArray);
            return true;
        }
        catch (e) {
            console.log("Exception accoured During geting tabName", e)
            return false;
        }
    }

    public async compareTabs() {
        try {
            //compare tab name
            let missing = detailTABActualArray.filter(item => detailTABExpectedArray.indexOf(item) < 0);
            console.log("missing len", missing.length);
            if (missing.length == 0) {


                return true;
            }
            else {

                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured in comparing TABs" + e);
            return false;
        }
    }


    public async selectOneOfTheOrganizationTypesAndClickApplyForDeselect() {
        try {
            //first select first element
            let orgTypename = prop.GetPropertyValue("ORGANIZATION_TYPE_NAME");
            console.log("orgTypename", orgTypename);
            var test = element(by.xpath("//ul[@class='checkboxes']//span[contains(text(),\'" + orgTypename.trim() + "\')]//../input"));
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

                helper.waitForTexttoAppear(this.organizationtypeFilter, "Organization Types")
                return true;
            }
            else {
                return false;
            }

        }
        catch (e) {
            console.log("Exception accoured while clicking " + e);
            return false;
        }
    }


    //Plan TAB STart

    public async clickOnPlanTAB() {
        try {
            // browser.sleep(5000)
            console.log("clickOnPlanTAB");
            let result = await this.planTABElement.click().then(function () {
                console.log("click on the the Plan TAB");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
        }

    }

    public async verifyPlanTABDisplay() {
        try {
            console.log("verify Plan Page Display");
            helper.waitForTexttoAppear_1(this.newTABElement, "New Plan");
            if (true) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured", e);
            return false;
        }
    }

    public async clickOnNewPlan() {
        try {
            let result = await this.newTABElement.click().then(function () {
                console.log("click on new plan");
                return true;

            });
            if (result) {
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


    public async verifyHeaderInCreatePage(text: string) {
        try {
            let headerText = await this.newCreatePageHeader.getText();
            if (headerText.trim() == text.trim()) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }

    public async enterPlanDetails() {
        try {
            console.log("Enter the inputPlanName");
            await this.inputPlanName.clear();
            console.log("Enter the inputPlanName");
            let Number = helper.RandomNumber();
            let StringNumber = (await Number).toString();
            await this.inputPlanName.sendKeys("TestPlan" + "" + StringNumber);

            await this.inputPlanURL.clear();
            console.log("Enter the inputPlanURL");

            await this.inputPlanURL.sendKeys("TestPlan.com");
            console.log("Enter the DescripinputPlanURLtion2");
            await this.createButton.click();
            return true;
        }
        catch (e) {
            console.log("Exception details", e);
            return false;
        }
    }
    //Plan Start ENd

    public async clickOnOverviewTAB() {
        try {
            let result = await this.overviewTABElement.click().then(function () {
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async clickOnFormulariesTAB() {
        try {
            // browser.sleep(5000)
            console.log("formulariesTABElement");
            let result = await this.formulariesTABElement.click().then(function () {
                console.log("click on the the formulariesTABElement TAB");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
        }

    }

    public async verifyFormulariesTABDisplay() {
        try {
            console.log("verify Plan Page Display");
            await helper.waitForTexttoAppear_1(this.newTABElement, "New Formulary");
            if (true) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured", e);
            return false;
        }
    }


    public async clickOnCoveragePolicyTAB() {
        try {
            // browser.sleep(5000)
            console.log("CoveragePolicy ");
            let result = await this.coveragePolicyTABElement.click().then(function () {
                console.log("click on the the CoveragePolicy TAB");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
        }

    }

    public async verifyCoveragePolicyTABDisplay() {
        try {
            console.log("verify CoveragePolicy  Display");
            await helper.waitForTexttoAppear_1(this.newTABElement, "New Coverage Policy");
            if (true) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured", e);
            return false;
        }
    }

    public async clickOnDocumentsTAB() {
        try {
            // browser.sleep(5000)
            console.log("CoveragePolicy ");
            let result = await this.documentTABElement.click().then(function () {
                console.log("click on the the CoveragePolicy TAB");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
        }

    }

    public async verifyDocumentsTABDisplay() {
        try {
            console.log("verify CoveragePolicy  Display");
            await helper.waitForTexttoAppear_1(this.newTABElement, "New Document");
            if (true) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured", e);
            return false;
        }
    }

    public async clickOnLinkTAB() {
        try {
            // browser.sleep(5000)
            console.log("Link ");
            let result = await this.linkTABElement.click().then(function () {
                console.log("click on the the linkTABElement TAB");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
        }

    }

    public async verifyLinkTABDisplay() {
        try {
            console.log("verify CoveragePolicy  Display");
            await helper.waitForTexttoAppear_1(this.newTABElement, "New Link");
            if (true) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception Accoured", e);
            return false;
        }
    }

    public async clickOnEditButton() {
        try {
            console.log("Clicked on Edit button");
            let result = await browser.actions().mouseMove(this.editButton).click().perform().then(function () {
                console.log("click on the edit button");
                return true;
            });
            if (result) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async verifyEditPage() {
        try {
            console.log("verify header of the edit page");
            let headerText = await this.editHeader.getText();
            if (headerText.trim() == "Edit an Organization".trim()) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }

    }

    public async enterDetailsInEditPage(){
        try{

            console.log("Eneter tehe dcescription11");
            let Number = await helper.RandomNumber();
            let StringNumber = (await Number).toString();
            console.log("Eneter tehe dcescription1111");
            browser.sleep(10000);
            //await browser.actions().mouseMove(this.editDecriptionElement).sendKeys("TestEdit"+""+StringNumber);
            //await this.editDecriptionElement.clear();
            await this.editDecriptionElement.sendKeys("TestEdit"+""+StringNumber);
            console.log("Eneter tehe dcescriptionedit1");
            await this.editSaveButton.click();
           // await browser.actions().mouseMove(this.editSaveButton).click().perform();
           console.log("After click of save button");
            return true; 
            
        }
        catch(e){
            console.log("Excption accoured",e);
            return false;
        }
    }

    public async verifyRecordStatusForModified(){
        try{
        await  helper.waitForTexttoAppear(this.recordStatusModified,"Modified");
        let text =await this.recordStatusModified.getText();
        if(text=="Modified"){
            return true;
        }
        else{
            return false;
        }
       }
       catch(e){
           console.log("Exception accoured",e);
           return false;
       }
       
      
    }

    public async clickOnOrganizationLink(){
        try{
          let result= await this.organizationLinkElement.click().then(function(){
             console.log("click on Link");
             return true;
          });

          if(result){
              console.log("click sucsess fully");
              return true;
          }
          else{
            console.log("click is failed");
              return false;
          }
        }
        catch(e){
           console.log("Exception accoured",e);
           return false;
        }
    }

    public async verifyUserInMainPage(){
        try{
          await helper.waitForTexttoAppear(this.organizationHeaderElement,"Organizations")  
          let headerText = await this.organizationHeaderElement.getText();
          if(headerText.trim() == "Organizations".trim()){
              return true;
          }
          else{
              return false;
          }
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }


    public async clickOnNewButton(){
        try{
          await this.newButtonElement.click();
          return true;
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async verifyUserInCreatePage(){
        try{

          let headerText = await this.newCreatePageheaderElement.getText();
          if(headerText.trim()=="Create a New Organization".trim()){
              return true;
          }
          else{
              return false;
          }
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async enterDetailsAndClickOnSave(){
        try{
            console.log("Eneter the deatls");
            let Number = helper.RandomNumber();
            let StringNumber = (await Number).toString();
           await this.newOrganizationNameElement.sendKeys("TestOrganization"+StringNumber);

//*[@placeholder='Organization Type(s)']
            await element(by.xpath("//*[text()='Organization Type(s)']")).click().then(async() => {
               browser.sleep(2000);
              await element(by.xpath("//*[contains(text(),'Managed Care Organization')]")).click().then(async() => {
              //  await .click();
                //await browser.actions().mouseMove(element(by.xpath("//*[@placeholder='Organization Type(s)']"))).click().perform();
                });
              });
            
           // await this.newCreatePageheaderElement.click();
           await browser.actions().mouseMove(this.newOrganizationNameElement).click().perform();
           await browser.actions().mouseMove(this.newCreateButtonElement).click().perform();
            console.log("clicked on description element");
            //await this.newCreateButtonElement.click();  
              return true;


        }
        catch(e){
            console.log("Excpetion accoured",e);
            return false;
        }
    }

    public async verifyNewOrganizationCreated(){
        try{
         await  helper.waitForTexttoAppear(this.recordStatusNew,"New");
         let text =await this.recordStatusNew.getText();
         if(text=="New"){
             return true;
         }
         else{
             return false;
         }
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async clickOnCompleteButton(){
        try{
            console.log("Complete button");
            await helper.waitForTexttoAppear(this.completeButtonElement,"Complete");
            await this.completeButtonElement.click();
            return true;

        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async verifyContinueButton(){
        try{
            console.log("verifyContinueButton  button");
            let result =await helper.waitForTexttoAppear_1(this.continueButtonElement,"Continue");
            if(result){
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


    public async clickOnContinueButton(){
        try{
            await this.continueButtonElement.click();
            return true;
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async verifyApproveButton(){
        try{
            let result =await helper.waitForTexttoAppear_1(this.approveButtonElement,"Approve");
            if(result){
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

    public async clickOnApproveButton(){
        try{
            await this.approveButtonElement.click();
            await this.continueButtonElement.click();
            return true;
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }

    public async verifyRecordStatusAfterApprove(){
        try{
            await  helper.waitForTexttoAppear(this.recordStatusApproved,"Approved");
            let text =await this.recordStatusApproved.getText();
            if(text=="Approved"){
                return true;
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log("Exception accoured",e);
            return  false;
        }
    }

    public async clicksOnHistoryTAB(){
        try{
            
            await browser.actions().mouseMove(element(by.xpath("//div[@class='mat-tab-links']/a[7]"))).click().perform();
            return true;
        }
        catch(e){
            console.log("Excpetion accoured",e);
            return false;
        }
    }

    public async verifyOnHistoryTAB(){
        try{
            let count = await element.all(by.xpath("//table[@id='grid']//tbody//tr")).count();
            console.log("count of reords are ",count);
            if(Number(count) > 1){
                 return true;
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log("Exception accoured",e);
            return false;
        }
    }
}