import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, ElementArrayFinder, browser, By, Key } from "protractor";
import { textChangeRangeIsUnchanged } from "typescript";
import { Helper } from "../Utility/Helper";
import { threadId } from "worker_threads";

var prop = new PropertiesFileManager();
var help = new Helper();
let NameToBeEntered = "";
let thirdPolicyName = ""
let parentID: any;

export class CoveragePoliciesPage {

    CoveragePoliciesHeader: ElementFinder;
    TableCount: ElementArrayFinder;
    SearchPannel: ElementFinder;
    SearhedText: ElementFinder;
    PolicyTypeBtn: ElementFinder;
    Header: ElementFinder;
    MedicalPolicyPTRadioBtn1: ElementFinder;
    PharmacyPolicyPTRadioBtn2: ElementFinder;
    OtherPolicyTypePTRadioBtn3: ElementFinder;
    CancelButtonOnPolicyType: ElementFinder;
    SecondPlanInCoveragePolicy: ElementFinder;
    ApplyButtonOnPolicyType: ElementFinder;
    PolicyTypeText: ElementFinder;
    ChannelBtn: ElementFinder;
    CommChannelRadioBtn1: ElementFinder;
    MMChannelRadioBtn1: ElementFinder;
    EGChannelRadioBtn1: ElementFinder;
    FEChannelRadioBtn1: ElementFinder;
    HEChannelRadioBtn1: ElementFinder;
    SMChannelRadioBtn1: ElementFinder;
    CHIPChannelRadioBtn1: ElementFinder;
    MedicareChannelRadioBtn1: ElementFinder;
    TricareChannelRadioBtn1: ElementFinder;
    VODChannelRadioBtn1: ElementFinder;
    recordListCheckBox: ElementArrayFinder;
    CommercialChannelRadioBtn: ElementFinder;
    CommercialChannelText: ElementFinder;
    RecordStatusBtn: ElementFinder;
    NewRecordsBtn: ElementFinder;
    NewRecordStatusText: ElementFinder;
    NewBtnOfCoveragePolicy: ElementFinder;
    NameInNewOfCP: ElementFinder;
    PolicyOwnerInNewOfCp: ElementFinder;
    PolicyTypeInNewOfCp: ElementFinder;
    DescriptionInNewOfCP: ElementFinder;
    StartDateInNewOFCP: ElementFinder;
    EndDateInNewOFCP: ElementFinder;
    //PrintedPolicyNameInNewOfCP: ElementFinder;
    PolicyNumberInNewOfCP: ElementFinder;
    CancelBtnOfNewInCP: ElementFinder;
    PolicyOwner: ElementFinder;
    SelectPolicyTypeInNew: ElementFinder;
    CreateBtnInNewOfCP: ElementFinder;
    NameInputInNew: ElementFinder;
    PolicyOwnerInputNew: ElementFinder;
    PolicyTypeInputNew: ElementFinder;
    DescriptionInputNew: ElementFinder;
    StartDateInputNew: ElementFinder;
    EndDateInputNew: ElementFinder;
    PrintedPolicyNameInputNew: ElementFinder;
    PolicyNumInput: ElementFinder;
    CoveragePolicyHeader: ElementFinder;
    CoveragePolicyDetailLink: ElementFinder;
    ThirdLinkOnCoveragePolicy: ElementFinder;
    MainInforamtionHeader: ElementFinder;
    ChangeDetectionHeader: ElementFinder;
    PolicyNameHeader: ElementFinder;
    RecordStatusHeader: ElementFinder;
    PolicyOwnerHeader: ElementFinder;
    PolicyChannelHeader: ElementFinder;
    OverviewHeader: ElementFinder;
    DrugsHeader: ElementFinder;
    DocumentsHeader: ElementFinder;
    LinksHeader: ElementFinder;
    EditPolicyMainInfo: ElementFinder;
    EditPolicyHeader: ElementFinder;
    EditPharmPolicySaveBtn: ElementFinder;
    DescriptionHeaderInEditMainInfo: ElementFinder;
    DescriptionInMainInfo: ElementFinder;
    EditInPolicyChannels: ElementFinder;
    EditChannelHeader: ElementFinder;
    SelectedChannelForPolicy: ElementFinder;
    HixRadioBtnInEditChannel: ElementFinder;
    SaveButton: ElementFinder;
    AlertAfterChannelEdit: ElementFinder;
    DrugLinkInsidePolicy: ElementFinder;
    DrugTable: ElementFinder;
    ManagedAssociatedDrugBtn: ElementFinder;
    CancelBtnInDrugs: ElementFinder;
    FirstRadioBtnDrugOnTheDrugs: ElementFinder;
    SaveButtonOnDrugs: ElementFinder;
    DocumnetsLinkInsidePolicy: ElementFinder;
    UploadNewButonInDocuments: ElementFinder;
    DocumentNameTxtNameInNewOfDocuments: ElementFinder;
    DocumentTypeTxtNameInNewOfDocuments: ElementFinder;
    ContentTypeTxtNameInNewOfDocuments: ElementFinder;
    DescriptionTxtNameInNewOfDocuments: ElementFinder;
    CancelButtonOnNewOfDocuments: ElementFinder;
    DocumentNameInDocuments: ElementFinder;
    // DocumentTypeInDocuments:ElementFinder;
    // ContentTypeInDoucuments:ElementFinder;
    DescriptionInDocuments: ElementFinder;
    DrugHeaderTxt: ElementFinder;
    FourthOptionInAnySelection: ElementFinder;
    SecondOptionInAnySelection: ElementFinder;
    CreateBtnInAddDocs: ElementFinder;
    LinksBtnInsidePolicy: ElementFinder;
    NewlBtnINLinks: ElementFinder;
    CancelBtnInsideNewLinks: ElementFinder;
    NameTxtInsideAddNewLink: ElementFinder;
    DescriptionTxtInsideAddNewLink: ElementFinder;
    URlTxtInsideAddNewLink: ElementFinder;
    LinkTypeInsideAddNewLink: ElementFinder;
    ContentTypeInsideAddNewlink: ElementFinder;
    CreateBtnInsideAddNewLinks: ElementFinder;
    LinksHeaderInsideCreatedPolicy: ElementFinder;
    UrlOfLinks: ElementFinder;
    HomePageVersion: ElementFinder;
    recordStatusModified: ElementFinder;
    completeButtonElement: ElementFinder;
    continueButtonElement: ElementFinder;
    approveButtonElement: ElementFinder;
    recordStatusApproved: ElementFinder;
    historyTabBtn: ElementFinder;
    tableOfHistoryTab: ElementArrayFinder;
    DrugIndicationBtnInsideCP: ElementFinder;
    Associate_Drug_Indication_Btn: ElementFinder;
    CancelBtnInsideDrugIndication: ElementFinder;
    FirstRadioBtnDrugOnTheDrugIndication: ElementFinder;
    SaveBtnOnDrugIndication: ElementFinder;
    StepTherapyBtnInsdieCP: ElementFinder;
    OverViewtabBtn: ElementFinder;
    CancelBtnOnEditChannels:ElementFinder;


    constructor() {
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.CoveragePoliciesHeader = element(by.xpath("//h1[@class ='grid-header']"));
        this.SearchPannel = element(by.className("search form-control"));
        this.SearhedText = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[2]/div/app-policy-mat-table/app-dynamic-mat-table/div[1]/table/tbody/tr[1]/td[2]/a"));
        this.PolicyTypeBtn = element(by.xpath("//*[@id='policyTypeFilter']/button"));
        this.Header = element(by.className("cdk-drag-handle dialog-heading"));
        this.MedicalPolicyPTRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[1]"));
        this.PharmacyPolicyPTRadioBtn2 = element(by.xpath("//*[@class ='checkboxes']/li[2]"));
        this.OtherPolicyTypePTRadioBtn3 = element(by.xpath("//*[@class ='checkboxes']/li[3]"));
        this.CancelButtonOnPolicyType = element(by.xpath("//*[@class='buttons-row']/button[2]"));
        this.SecondPlanInCoveragePolicy = element(by.xpath("//table//tr[1]/td[2]/a"));
        this.ApplyButtonOnPolicyType = element(by.xpath("//*[@class='buttons-row']/button[1]"));
        this.PolicyTypeText = element(by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[5]/a"));
        this.ChannelBtn = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[2]/app-filter-button[2]/button"));
        this.CommChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[1]"));
        this.MMChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[2]"));
        this.EGChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[3]"));
        this.FEChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[4]"));
        this.HEChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[5]"));
        this.SMChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[6]"));
        this.MedicareChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[7]"));
        this.CHIPChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[8]"));
        this.TricareChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[9]"));
        this.VODChannelRadioBtn1 = element(by.xpath("//*[@class ='checkboxes']/li[10]"));
        this.recordListCheckBox = element.all(by.xpath("//*[@class = 'checkboxes']//li"));
        this.CommercialChannelRadioBtn = element(by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.CommercialChannelText = element(by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[4]/span"));
        this.RecordStatusBtn = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[2]/app-filter-button[1]/button"));
        this.NewRecordsBtn = element(by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.NewRecordStatusText = element(by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[8]/span"));
        this.NewBtnOfCoveragePolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[3]/div/button"));
        this.NameInNewOfCP = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.PolicyOwnerInNewOfCp = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/app-organization-picker/mat-form-field/div/div[1]/div/input"));
        this.PolicyTypeInNewOfCp = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.DescriptionInNewOfCP = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.StartDateInNewOFCP = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[3]/div/div[1]/div[1]/input"));
        this.EndDateInNewOFCP = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[4]/div/div[1]/div[1]/input"));
        //this.PrintedPolicyNameInNewOfCP = element(by.xpath("//*[@id='mat-input-4']"));
        this.PolicyNumberInNewOfCP = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[5]/div/div[1]/div/input"));
        this.CancelBtnOfNewInCP = element(by.xpath("//*[@id='addPolicyForm']/form/div/button"));
        this.PolicyOwner = element(by.xpath("/html/body/div[2]/div[3]/div/div/mat-option[1]"));
        this.SelectPolicyTypeInNew = element(by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.CreateBtnInNewOfCP = element(by.xpath("//*[@id='addPolicyForm']/form/div/app-form-submit-button/button"));
        this.NameInputInNew = element(by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[1]/div/div/div/input"));
        this.PolicyOwnerInputNew = element(by.xpath("//*[@class='mat-form-field-infix ng-tns-c117-72']/input"));
        this.PolicyTypeInputNew = element(by.xpath("//*[@id='mat-select-7']"));
        this.DescriptionInputNew = element(by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[2]/div/div/div/input"));
        this.StartDateInputNew = element(by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[3]/div/div/div/input"));
        this.EndDateInputNew = element(by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[4]/div/div/div/input"));
        this.PrintedPolicyNameInputNew = element(by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[5]/div/div/div/input"));
        this.PolicyNumInput = element(by.xpath("//html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[5]/div/div[1]/div/input"));
        this.CoveragePolicyHeader = element(by.xpath("//*[@class='policy-heading']/span"));
        this.CoveragePolicyDetailLink = element(by.xpath("//*[@class='detail-link']"));
        this.ThirdLinkOnCoveragePolicy = element(by.xpath("//table//tr[3]/td[2]/a"));
        this.OverviewHeader = element(by.xpath("//*[@class='mat-tab-links']/a[1]"));
        this.MainInforamtionHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.PolicyChannelHeader = element(by.xpath("//*[@class='detail-grid-item'][2]/h1"));
        this.ChangeDetectionHeader = element(by.xpath("//*[@class='detail-grid-item'][3]/h1"));
        this.PolicyNameHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/p[1]"));
        this.RecordStatusHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/p[3]"));
        this.PolicyOwnerHeader = element(by.xpath("//*[@class='detail-grid-item'][1]/p[5]"));
        this.DrugsHeader = element(by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.DocumentsHeader = element(by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.LinksHeader = element(by.xpath("//*[@class='mat-tab-links']/a[4]"));
        this.EditPolicyMainInfo = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[1]/h1/img"));
        this.EditPolicyHeader = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/h1/span"));
        this.EditPharmPolicySaveBtn = element(by.xpath("//*[@id='addPolicyForm']/form/div/app-form-submit-button/button"));
        this.DescriptionHeaderInEditMainInfo = element(by.xpath("//*[@class='detail-grid-item'][1]/p[3]"));
        this.DescriptionInMainInfo = element(by.xpath("//*[@class='detail-grid-item'][1]/p[4]"));
        this.EditInPolicyChannels = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[2]/h1/img"));
        this.EditChannelHeader = element(by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/h1"));
        this.SelectedChannelForPolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[2]/app-bullet-list/div/ul/li"));
        this.HixRadioBtnInEditChannel = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/app-flat-checkbox-list/ul/li[5]/label/input"));
        this.SaveButton = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/div/button[1]"));
        this.AlertAfterChannelEdit = element(by.xpath("//*[@id='toast-container']/div/div"));
        this.DrugLinkInsidePolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[2]"));
        this.DrugTable = element(by.xpath("//table//tr"));
        this.ManagedAssociatedDrugBtn = element(by.xpath("//*[@id='tabActionButton']"));
        this.CancelBtnInDrugs = element(by.xpath("//*[@id='drugPicker']/div/div[3]/button[1]"));
        this.FirstRadioBtnDrugOnTheDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/div/div[2]/app-drugs-mat-table/app-dynamic-mat-table/div[1]/table/tbody/tr[2]/td[1]/a/mat-checkbox/label/div"));
        this.SaveButtonOnDrugs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/div/div[3]/button[2]"));
        this.DocumnetsLinkInsidePolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[5]"));
        this.UploadNewButonInDocuments = element(by.xpath("//*[@class='record-actions']//button"));
        this.DocumentNameTxtNameInNewOfDocuments = element(by.xpath("//*[@placeholder='Document Name']"));
        this.DocumentTypeTxtNameInNewOfDocuments = element(by.xpath("//*[@placeholderlabel='Document Type']"));
        this.ContentTypeTxtNameInNewOfDocuments = element(by.xpath("//*[@placeholderlabel='Content Type']"));
        this.DescriptionTxtNameInNewOfDocuments = element(by.xpath("//*[@placeholder=' Description']"));
        this.CancelButtonOnNewOfDocuments = element(by.xpath("//*[@class='buttons-row']/button"));
        this.DocumentNameInDocuments = element(by.xpath("//*[@class='modal-form']/form/mat-form-field[1]/div/div/div/input"));
        this.DrugHeaderTxt = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/h1"));
        this.FourthOptionInAnySelection = element(by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[4]/span"));
        this.SecondOptionInAnySelection = element(by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.DescriptionInDocuments = element(by.xpath("//*[@class='modal-form']/form/mat-form-field[2]/div/div/div/input"));
        this.CreateBtnInAddDocs = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-update-add-doc/div/div/form/div/app-form-submit-button/button"));
        this.LinksBtnInsidePolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[6]"));
        this.NewlBtnINLinks = element(by.xpath("//*[@class='record-actions']//button"));
        this.CancelBtnInsideNewLinks = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/div[2]/button"));
        this.NameTxtInsideAddNewLink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.DescriptionTxtInsideAddNewLink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.URlTxtInsideAddNewLink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-url-input/mat-form-field/div/div[1]/div/input"));
        this.LinkTypeInsideAddNewLink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-single-select[1]/mat-form-field/div/div[1]/div/mat-select"));
        this.ContentTypeInsideAddNewlink = element(by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-single-select[2]/mat-form-field/div/div[1]/div/mat-select"));
        this.CreateBtnInsideAddNewLinks = element(by.xpath("//*[@class='buttons-row']/app-form-submit-button/button"));
        this.LinksHeaderInsideCreatedPolicy = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-links-detail/app-persistent-mat-tab/app-overview-links/div/div[2]/h1"));
        this.UrlOfLinks = element(by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-links-detail/app-persistent-mat-tab/app-overview-links/div/div[2]/app-external-link/a"));
        this.HomePageVersion = element(by.xpath("//*[name()='app-version-label']//*[@class='version-info']"));
        this.recordStatusModified = element(by.xpath("//p[contains(text(),'Modified')]"));
        this.completeButtonElement = element(by.xpath("//*[@id='completeDataChanges']"));
        this.continueButtonElement = element(by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.approveButtonElement = element(by.xpath("//*[@id='approveDataChanges']"));
        this.recordStatusApproved = element(by.xpath("//p[contains(text(),'Approved')]"));
        this.historyTabBtn = element(by.xpath("//div[@class='mat-tab-links']/a[8]"));
        this.tableOfHistoryTab = element.all(by.xpath("//table[@id='grid']//tbody//tr"));
        this.DrugIndicationBtnInsideCP = element(by.xpath("//div[@class='mat-tab-links']/a[3]"));
        this.Associate_Drug_Indication_Btn = element(by.xpath("//*[@class='record-actions']//button"));
        this.CancelBtnInsideDrugIndication = element(by.xpath("//*[@class='drug-picker-buttons buttons-row']/button[2]"));
        this.FirstRadioBtnDrugOnTheDrugIndication = element(by.xpath("//*[@class='mat-table cdk-table mat-sort table table-borderless table-sm recent-orders-table']//tr[1]/td[1]//mat-checkbox"));
        this.SaveBtnOnDrugIndication = element(by.xpath("//*[@class='drug-picker-buttons buttons-row']/button[1]"));
        this.StepTherapyBtnInsdieCP = element(by.xpath("//div[@class='mat-tab-links']/a[4]"));
        this.OverViewtabBtn = element(by.xpath("//div[@class='mat-tab-links']/a[1]"));
        this.CancelBtnOnEditChannels=element(by.xpath("//div[@class='buttons-row-ali']/button[2]"));

    }

    public async verifyCoveragePoliciespage() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            await this.CoveragePoliciesHeader.getText().then(function (text) {
                if (text.trim() == "Coverage Policies") {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                }

            });
            var count = await this.TableCount.count();
            console.log("count in the Coverage Policy page" + count);
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
    public async VerifyExistenceOfSearchPannel() {
        try {
            var retrunresult = false;
            await this.SearchPannel.getAttribute("placeholder").then(function (searhpannelPlaceholder) {
                if (searhpannelPlaceholder == "Search") {
                    console.log("verified")
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

    public async EnterTextIntoSearchPanel() {
        try {
            var retrunresult = false;
            await this.SearchPannel.sendKeys("Aetna").then(function (text) {
                retrunresult = true;

            });
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async VerifyTextInSearchPanel() {
        try {
            var retrunresult = false;
            await this.SearhedText.getText().then(function (text) {
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

    public async ClickOnPolicyTypeBtn() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked Policy Type");
            var retrunresult = false;
            if (await this.PolicyTypeBtn.isPresent()) {
                await this.PolicyTypeBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Policy Type Button")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckHeaderOfOnPolicyType() {
        try {
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (PolicyTypeHeaderText) {
                    if (PolicyTypeHeaderText == 'Policy Types') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Policy Type Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfOnPolicyType() {
        try {
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.MedicalPolicyPTRadioBtn1.getText().then(function (PolicyTypeRadioBtn1Text) {
                    if (PolicyTypeRadioBtn1Text == "Medical Policy") {
                        retrunresult = true;
                    }
                });
                await this.PharmacyPolicyPTRadioBtn2.getText().then(function (PolicyTypeRadioBtn2Text) {
                    if (PolicyTypeRadioBtn2Text == "Pharmacy Policy ") {
                        retrunresult = true;
                    }
                });
                await this.OtherPolicyTypePTRadioBtn3.getText().then(function (PolicyTypeRadioBtn3Text) {
                    if (PolicyTypeRadioBtn3Text == "Other Policy Type ") {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is different Policy Types")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }


    public async ClickOnCancelOfPolicyTypeBtn() {
        try {
            var retrunresult = false;
            if (await this.CancelButtonOnPolicyType.isPresent()) {
                await this.CancelButtonOnPolicyType.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Policy Type")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifyUserClicksOnCancelOnPolicyType() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            await browser.getCurrentUrl().then(function (URL) {
                console.log("URL", URL);
                if (URL == "https://phoenix-test.businessonetech.net/records/coverage-policies") {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                    console.log("The Cancel Button is not Working")
                }
            });
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectPhrmacyPolicyFromPolicyType() {
        try {
            var retrunresult = false;
            if (await this.PharmacyPolicyPTRadioBtn2.isPresent()) {
                await this.PharmacyPolicyPTRadioBtn2.click().then(function () {
                    console.log("clicked on Pharmacy Policy ");
                    retrunresult = true;
                });


                if (await this.ApplyButtonOnPolicyType.isPresent()) {
                    await this.ApplyButtonOnPolicyType.click().then(function () {
                        console.log("clicked on Apply Button ");
                        retrunresult = true;
                    });
                }

            }
            else {
                retrunresult = false;
                console.log("The Radio button is not Working")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifySelectedPolicyTypeISApplied() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            await browser.getCurrentUrl().then(function (URL) {
                console.log("URL", URL);
                if (URL == "https://phoenix-test.businessonetech.net/records/coverage-policies?policyTypeIds=2") {
                    retrunresult = true;
                }
                else {
                    retrunresult = false;
                    console.log("The Cancel Button is not Working")
                }
            });
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


    /*public async VerifySelectedPolicyType() {
        try {
            var retrunresult = false;
            if (await this.PolicyTypeText.isPresent()) {
                browser.sleep(6000);
                await this.PolicyTypeText.getText().then(function (PolicyTypeText) {
                    console.log("PolicyTypeText ",PolicyTypeText);
                    if (PolicyTypeText == 'Pharmacy Policy') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Selected Policy type is not filtered")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }*/

    public async ClickOnChannelBtn() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.ChannelBtn.isPresent()) {
                await this.ChannelBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Channel Button in Coverage Policy")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckHeaderOfOnChannels() {
        try {
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (ChannelHeaderText) {
                    if (ChannelHeaderText == 'Channels') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Channels Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfChannels() {

        let lengthValue = await this.recordListCheckBox.count();

        let ApplicationChannel = new Array();
        let channellist = new Array("Commercial (COMMERCIAL) ".trim(), "Managed Medicaid (MMC) ".trim(),
            "Employer Groups (EMPGROUP) ".trim(), "Federal Employees Health Benefits (FEHB) ".trim(),
            "Health Insurance Exchange (HIX) ".trim(), "State Medicaid (MEDICAID) ".trim(),
            "Children's Health Insurance Program (CHIP) ".trim(), "Medicare (MEDICARE) ".trim(),
            "TRICARE (TRICARE) ".trim(), "VADOD (VADOD) ".trim(), "Pharmacy Benefit Manager (PBM)".trim());
        let result;
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("channellist", channellist.length);
            if (await this.Header.isPresent()) {
                for (let i = 1; i <= lengthValue; i++) {
                    let textName = await element(by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
                    console.log(textName);
                    ApplicationChannel[i] = textName.trim();

                }
                let missing = ApplicationChannel.filter(item => channellist.indexOf(item) < 0);
                console.log("Channels missing are ", missing.length);
                console.log("ApplicationChannel", ApplicationChannel.length);
                let result = ApplicationChannel.filter(item => channellist.indexOf(item) < 0);

                if (result.length == 0) {
                    return true;
                }

                else {
                    retrunresult = false;
                    console.log("These channel types are extra or not in application " + result.toString());
                }
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async ClickOnCancelBtnofEditChannel() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.CancelBtnOnEditChannels.isPresent()) {
                await this.CancelBtnOnEditChannels.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button In Edit Channels ")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


    public async VerifyUserClicksOnCancelOnChannel() {
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var count = await this.TableCount.count();
            console.log("count in the Products  page" + count);
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


    public async SelectChannelAndClickOnApply() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.ChannelBtn.isPresent()) {
                await this.CommChannelRadioBtn1.click().then(function () {
                    console.log("clicked on commercial Channel");
                    retrunresult = true;
                });


                if (await this.ApplyButtonOnPolicyType.isPresent()) {
                    await this.ApplyButtonOnPolicyType.click().then(function () {
                        console.log("clicked on Apply Button ");
                        retrunresult = true;
                    });
                }

            }
            else {
                retrunresult = false;
                console.log("The Radio button of channel is not Working")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifySelectedChannel() {
        try {
            var retrunresult = false;
            if (await this.CommercialChannelText.isPresent()) {
                browser.sleep(6000);
                await this.CommercialChannelText.getText().then(function (ChannelText) {
                    ChannelText.trim();
                    console.log("Channel Text ", ChannelText.trim());
                    if (ChannelText == 'COMMERCIAL') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Selected Channel is not filtered")
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
                    if (PolicyTypeHeaderText == 'Record Status'.trim()) {
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

    public async SelectNewFromRecordType() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.NewRecordsBtn.isPresent()) {
                await this.NewRecordsBtn.click().then(function () {
                    console.log("clicked on New of Recoprd Status ");
                    retrunresult = true;
                });


                if (await this.ApplyButtonOnPolicyType.isPresent()) {
                    await this.ApplyButtonOnPolicyType.click().then(function () {
                        console.log("clicked on Apply Button ");
                        retrunresult = true;
                    });
                }

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

    public async VerifySelectedRecordType() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.NewRecordStatusText.isPresent()) {
                browser.sleep(6000);
                await this.NewRecordStatusText.getText().then(function (RecordsText) {
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

    public async ClickOnNewBtnOfCoveragePolicy() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked New Button of Coverage Policy");
            var retrunresult = false;
            if (await this.NewBtnOfCoveragePolicy.isPresent()) {
                await this.NewBtnOfCoveragePolicy.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no New Button Of Coverage Policy")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckHeaderOfNewInCoveragePolicy() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (PolicyTypeHeaderText) {
                    PolicyTypeHeaderText.trim();
                    if (PolicyTypeHeaderText == 'Create a new Policy '.trim()) {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Header is not matching against Requirement")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async VerifyFieldsInNewFieldOfCoveragePolicy() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationNewItemList = new Array();
        let NewItemllist = new Array("Policy Name", "Policy Owner", "Policy Type", "Description",
            "Effective Date", "End Date", "Policy Number");
        let result;
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("NewItemllist", NewItemllist.length);
            let NamePlaceholder = await this.NameInNewOfCP.getAttribute("placeholder");
            console.log("NamePlaceholder ", NamePlaceholder);
            let PolicyOwnerPlaceHolder = await this.PolicyOwnerInNewOfCp.getAttribute("placeholder");
            console.log("PolicyOwnerPlaceHolder ", PolicyOwnerPlaceHolder)
            let PolicyTypePlaceHolder = await this.PolicyTypeInNewOfCp.getAttribute("aria-label");
            console.log("PolicyTypePlaceHolder ", PolicyTypePlaceHolder);
            let DescriptionPlaceHolder = await this.DescriptionInNewOfCP.getAttribute("placeholder");
            console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
            let StartDatePlaceHolder = await this.StartDateInNewOFCP.getAttribute("placeholder");
            console.log("StartDatePlaceHolder ", StartDatePlaceHolder);
            let EndDatePlaceHolder = await this.EndDateInNewOFCP.getAttribute("placeholder");
            console.log("EndDatePlaceHolder ", EndDatePlaceHolder)
            //let PPNPolicyHolder=await this.PrintedPolicyNameInNewOfCP.getAttribute("placeholder");
            //console.log("PPNPolicyHolder ",PPNPolicyHolder)
            let PolicyNumPlaceHolder = await this.PolicyNumberInNewOfCP.getAttribute("placeholder");
            console.log("PolicyNumPlaceHolder ", PolicyNumPlaceHolder);
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            ApplicationNewItemList.push(NamePlaceholder.trim(), PolicyOwnerPlaceHolder.trim(), PolicyTypePlaceHolder.trim(),
                DescriptionPlaceHolder.trim(), StartDatePlaceHolder.trim(), EndDatePlaceHolder.trim(),
                /*PPNPolicyHolder.trim(),*/PolicyNumPlaceHolder.trim());

            console.log("ApplicationNewItemList", ApplicationNewItemList.length);
            let result = NewItemllist.filter(item => ApplicationNewItemList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Items for New are extra or not in application " + result.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }



    public async ClickOnCancelBtnInCreatingANewCP() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CancelBtnOfNewInCP.isPresent()) {
                await this.CancelBtnOfNewInCP.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterPolicyName() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.NameInputInNew.isPresent()) {
                console.log("Came to Name Field")
                let Number = help.RandomNumber();
                let StringNumber = (await Number).toString();
                NameToBeEntered = "Test from Mozenda Team " + StringNumber;
                //await this.NameInputInNew.click();
                await this.NameInputInNew.sendKeys(NameToBeEntered).then(function () {
                    console.log("Entered Data");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Name inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterPolicyOwner() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.PolicyOwnerInNewOfCp.isPresent()) {
                await this.PolicyOwnerInNewOfCp.sendKeys("Aetna").then(function () {
                    retrunresult = true;
                });

                if (await this.PolicyOwner.isPresent()) {
                    await this.PolicyOwner.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Policy Owner inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnyterPolicyType() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.PolicyTypeInNewOfCp.isPresent()) {
                await this.PolicyTypeInNewOfCp.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SelectPolicyTypeInNew.isPresent()) {
                    await this.SelectPolicyTypeInNew.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Policy Type inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDescription() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DescriptionInNewOfCP.isPresent()) {
                await this.DescriptionInNewOfCP.clear();
                await this.DescriptionInNewOfCP.sendKeys("Testing New Functionality").then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Description inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async EnterStartDateandEndDate() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.StartDateInNewOFCP.isPresent()) {
                await this.StartDateInNewOFCP.sendKeys("5/28/2020").then(function () {
                    retrunresult = true;
                });


                if (await this.EndDateInNewOFCP.isPresent()) {
                    await this.EndDateInNewOFCP.sendKeys("5/30/2020").then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Start Date and End Date inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


    /*public async EnterPrintedPolicyName() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.PrintedPolicyNameInNewOfCP.isPresent()) {
                await this.PrintedPolicyNameInNewOfCP.sendKeys("Testing QA Team").then(function () {
                    retrunresult = true;
                });
        }
            else {
                retrunresult = false;
                console.log("There is no Printed Policy Name inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    } */

    public async ClicksOnCreateOfNew() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CreateBtnInNewOfCP.isPresent()) {
                await this.CreateBtnInNewOfCP.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Create Button inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckTheHeaderOfCreatedPolicy() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CoveragePolicyHeader.isPresent()) {
                await this.CoveragePolicyHeader.getText().then(function (Header) {
                    if (Header.trim() == NameToBeEntered) {
                        console.log("The Header is ", Header)
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Policy Header is missing")
                    }
                });
            }

            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckTheHeaderOfTobeEdittedPolicy() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CoveragePolicyHeader.isPresent()) {
                await this.CoveragePolicyHeader.getText().then(function (Header) {
                    if (Header.trim() == thirdPolicyName.trim()) {
                        console.log("The Header is ", Header)
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Policy Header is missing")
                    }
                });
            }

            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnCoveragePolicyDetailLink() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (this.CoveragePolicyDetailLink.isPresent()) {
                await this.CoveragePolicyDetailLink.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Detail Link Button")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }



    public async ClickOnSecondLinkOfCoveragePolicy() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.ThirdLinkOnCoveragePolicy.isPresent()) {

                thirdPolicyName = await this.ThirdLinkOnCoveragePolicy.getText();
                await this.ThirdLinkOnCoveragePolicy.click().then(function () {
                    console.log("Clicked on the third policy")
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Data on Coverage Policy")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckDataOfSelectedPolicy() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationSecondPolicyItemList = new Array();
        let SecondPolicyItemsList = new Array("Overview", "Main Information",
            "Policy Channels", "Change Detection");
        let result;
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("SecondPolicyItemsList ", SecondPolicyItemsList.length);
            let OverviewTextName = await this.OverviewHeader.getText();
            console.log("OverviewTextName ", OverviewTextName);

            let MainInformationTextName = await this.MainInforamtionHeader.getText();
            console.log("MainInformationTextName ", MainInformationTextName);
            let PolicyChannelTextName = await this.PolicyChannelHeader.getText();
            console.log("PolicyChannelTextName ", PolicyChannelTextName)
            let ChnageDetectionTextName = await this.ChangeDetectionHeader.getText();
            console.log("ChnageDetectionTextName ", ChnageDetectionTextName);

            ApplicationSecondPolicyItemList.push(OverviewTextName.trim(),
                MainInformationTextName.trim(), PolicyChannelTextName.trim(),
                ChnageDetectionTextName.trim());

            console.log("ApplicationSecondPolicyItemList", ApplicationSecondPolicyItemList.length);
            let result = SecondPolicyItemsList.filter(item => ApplicationSecondPolicyItemList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Items for Selected Policy are extra or not in application " + result.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnEditButtonOnSecondPolicy() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.EditPolicyMainInfo.isPresent()) {
                await this.EditPolicyMainInfo.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Edit Button on Main Information")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async CheckHeaderOfOnEditOfSecondPolicy() {

        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.EditPolicyHeader.isPresent()) {
                await this.EditPolicyHeader.getText().then(function (EdPolicyHeaderText) {
                    if (EdPolicyHeaderText == 'Edit Policy') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Header for Editing a Policy Type or it's not matching with Requirement")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async ClickOnEditPolicySaveBtn() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked Policy Type");
            var retrunresult = false;
            if (await this.EditPharmPolicySaveBtn.isPresent()) {
                await this.EditPharmPolicySaveBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Save Button")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async verifyRecordStatusForModified() {
        try {
            await help.waitForTexttoAppear(this.recordStatusModified, "Modified");
            let text = await this.recordStatusModified.getText();
            if (text == "Modified") {
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

    public async clickOnCompleteButton() {
        try {
            console.log("Complete button");
            await help.waitForTexttoAppear(this.completeButtonElement, "Complete");
            //await browser.actions().mouseMove(this.completeButtonElement).click().perform();
            browser.sleep(7000);
            await this.completeButtonElement.click();
            console.log("clicked on Complete Button");
            return true;

        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async verifyContinueButton() {
        try {
            console.log("verifyContinueButton  button");
            let result = await help.waitForTexttoAppear_1(this.continueButtonElement, "Continue");
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

    public async clickOnContinueButton() {
        try {
            await this.continueButtonElement.click();
            return true;
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async verifyApproveButton() {
        try {
            let result = await help.waitForTexttoAppear_1(this.approveButtonElement, "Approve");
            if (result) {
                return true;
            }
            else {
                return false;
            }
            return true;

        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async clickOnApproveButton() {
        try {
            await this.approveButtonElement.click();
            await this.continueButtonElement.click();
            return true;
        }
        catch (e) {
            console.log("Exception accoured", e);
            return false;
        }
    }
    public async verifyRecordStatusAfterApprove() {
        try {
            await help.waitForTexttoAppear(this.recordStatusApproved, "Approved");
            let text = await this.recordStatusApproved.getText();
            if (text == "Approved") {
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

    public async clicksOnHistoryTAB() {
        try {

            await browser.actions().mouseMove(this.historyTabBtn).click().perform();
            return true;
        }
        catch (e) {
            console.log("Excpetion accoured", e);
            return false;
        }
    }

    public async verifyOnHistoryTAB() {
        try {
            let count = await this.tableOfHistoryTab.count();
            console.log("count of reords are ", count);
            if (Number(count) > 1) {
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

    public async clicksOnOverViewTAB() {
        try {

            await browser.actions().mouseMove(this.OverViewtabBtn).click().perform();
            return true;
        }
        catch (e) {
            console.log("Excpetion accoured", e);
            return false;
        }
    }


    public async CheckTheGridForDescription() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationDecriptionList = new Array();
        let DecriptionList = new Array("Description", "Testing New Functionality");
        let result;
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("DecriptionList ", DecriptionList.length);
            let DescriptionHeader = await this.DescriptionHeaderInEditMainInfo.getText();
            console.log("DescriptionHeader ", DescriptionHeader);
            let DescriptionDetailsHeader = await this.DescriptionInMainInfo.getText();
            console.log("DescriptionDetailsHeader ", DescriptionDetailsHeader);

            ApplicationDecriptionList.push(DescriptionHeader.trim(), DescriptionDetailsHeader.trim());

            console.log("ApplicationDecriptionList", ApplicationDecriptionList.length);
            let result = DecriptionList.filter(item => ApplicationDecriptionList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Description is not There after Editing a Policy " + result.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOneditPolicyChannels() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.EditInPolicyChannels.isPresent()) {
                await this.EditInPolicyChannels.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Edit Button in Edit Channels")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnEditBtnofEditChannel() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked Policy Type");
            var retrunresult = false;
            if (await this.PolicyTypeBtn.isPresent()) {
                await this.PolicyTypeBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Policy Type Button")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async CheckHeaderOfEditChannels() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.EditChannelHeader.isPresent()) {
                await this.EditChannelHeader.getText().then(function (EditChannelHeaderText) {
                    EditChannelHeaderText.trim();
                    console.log("EditChannelHeaderText ", EditChannelHeaderText)
                    if (EditChannelHeaderText == 'Edit Channels') {

                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Header for Edit Channels or The Header is not matching")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }



    }

    public async CheckTheDataAfterCancelOnEditChannels() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.SelectedChannelForPolicy.isPresent()) {
                await this.SelectedChannelForPolicy.getText().then(function (SelectedChannelText) {
                    if (SelectedChannelText == 'Commercial') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("The Channel is not matching after clicking on Cancel")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async SelectHixChannelandClickOnSaveInEditChannel() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.HixRadioBtnInEditChannel.isPresent()) {
                await this.HixRadioBtnInEditChannel.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SaveButton.isPresent()) {
                    await this.SaveButton.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Save Button")
                }

            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }


    public async CheckAlertAfterSelectingChannel() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.AlertAfterChannelEdit.isPresent()) {
                await this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                    if (ChannelAlertText == '1 channel has been added.') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Alert after adding one Channel")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnDrugs() {
        try {
            console.log("Click On Drugs TAB");
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));

            var retrunresult = false;
            if (await this.DrugLinkInsidePolicy.isPresent()) {
                browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                await this.DrugLinkInsidePolicy.click().then(function () {
                    retrunresult = true;
                    browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug Button inside Policy or Drug xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfDrugs() {
        console.log("Click On Drugs TAB");
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationDrugDataList = new Array();
        let DrugDataList = new Array("ID", "Code", "Name", "Type", "Record Status", "Modified");
        let result;
        try {
            let lengthValue = await this.DrugTable.all(By.tagName("th")).count();
            console.log("Click On Drugs TAB lengthValue", lengthValue);
            var retrunresult = false;
            console.log("Click On Drugs TAB1");
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("DrugDataList ", DrugDataList.length);

            console.log("Click On Drugs TAB3");
            for (let i = 1; i <= lengthValue; i++) {
                let DrugColoumnName = await element(by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
                console.log("DrugColoumnName ", DrugColoumnName);
                ApplicationDrugDataList[i] = DrugColoumnName.trim();

            }
            let missing = ApplicationDrugDataList.filter(item => DrugDataList.indexOf(item) < 0);
            console.log("Drugs missing are ", missing.length);
            console.log("ApplicationDrugs", ApplicationDrugDataList.length);
            let result = ApplicationDrugDataList.filter(item => DrugDataList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Drug Columns types are extra or not in application " + result.toString());
            }

            return retrunresult;
        }
        catch (e) {
            console.log("It Exception accoured" + e);
            return false;
        }

    }

    public async ClickOnManagedAssociatedDrugs() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.ManagedAssociatedDrugBtn.isPresent()) {
                await this.ManagedAssociatedDrugBtn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Managed Associated Drug Button inside Policy or Drug xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckHeaderOfManagedAssociatedDrugs() {
        try {

            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.DrugHeaderTxt.isPresent()) {
                await this.DrugHeaderTxt.getText().then(function (DrugHeaderText) {
                    DrugHeaderText.trim();
                    console.log("DrugHeaderText " + DrugHeaderText);
                    if (DrugHeaderText == 'Drugs') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drugs Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }



    public async ClickOnCancelOfDrugs() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            console.log("Click On Cancel Drugs");
            if (await this.CancelBtnInDrugs.isPresent()) {
                await this.CancelBtnInDrugs.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Drugs or Xpath is changed for Cancel of Drugs");
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectDrugIndicationInDruIn() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.FirstRadioBtnDrugOnTheDrugIndication.isPresent()) {
                await this.FirstRadioBtnDrugOnTheDrugIndication.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug-Indications Button in Drugs")
            }


            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckAlertAfterUnSelectingDrugIndiation() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.AlertAfterChannelEdit.isPresent()) {
                await this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                    ChannelAlertText.trim();
                    if (ChannelAlertText == '1 drug-indication has been deleted.') {
                        retrunresult = true;

                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Alert after adding one Channel")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectDrugandClickOnSaveInDrugIndication() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;

            if (await this.SaveBtnOnDrugIndication.isPresent()) {
                await this.SaveBtnOnDrugIndication.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Save Button in Drug Indication")
            }


            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckAlertAfterSelectingDrugIndication() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.AlertAfterChannelEdit.isPresent()) {
                await this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                    ChannelAlertText.trim();
                    if (ChannelAlertText == '1 drug-indication has been added.') {
                        retrunresult = true;

                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Alert after adding one Drug-Indication")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }


    public async CheckAlertAfterSelectingDrug() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.AlertAfterChannelEdit.isPresent()) {
                await this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                    if (ChannelAlertText == '1 drug has been added.') {
                        retrunresult = true;

                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Alert after adding one Channel")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async verifyPageAfterDrugAddition() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            var count = await this.TableCount.count();
            console.log("count in the Drugs  page" + count);
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

    public async ClickOnStepTherapyInsideCP() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.StepTherapyBtnInsdieCP.isPresent()) {
                await this.StepTherapyBtnInsdieCP.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Step Therapy Button or xpath is changed for Step Therapy")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfStepTherapy() {

        //let lengthValue = await this.DrugTable.count();

        let ApplicationStepTherapyDataList = new Array();
        let StepTherapyList = new Array("Scenario ID", "Drug-Indications", "Step Therapy Category", "Step Criteria", "Record Status", "Modified");
        let result;
        try {
            let lengthValue = await this.DrugTable.all(By.tagName("th")).count();
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("Drug Indication TAB lengthValue", lengthValue);

            for (let i = 1; i <= lengthValue; i++) {
                let StepTherpayColumnNames = await element(by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
                console.log("Drug Indication ColoumnName ", StepTherpayColumnNames);

                ApplicationStepTherapyDataList[i] = StepTherpayColumnNames.trim();

            }
            let missing = ApplicationStepTherapyDataList.filter(item => StepTherapyList.indexOf(item) < 0);
            console.log("Items Missing In Step Therapy Are ", missing.length);
            console.log("ApplicationStepTherapyDataList ", ApplicationStepTherapyDataList.length);
            let result = ApplicationStepTherapyDataList.filter(item => StepTherapyList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Columns are extra or not in application for Step Therapy " + result.toString());
            }

            return retrunresult;
        }
        catch (e) {
            console.log("It Exception accoured" + e);
            return false;
        }


    }


    public async CheckAlertAfterUnSelectingDrug() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.AlertAfterChannelEdit.isPresent()) {
                await this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                    if (ChannelAlertText == '1 drug has been deleted.') {
                        retrunresult = true;

                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Alert after adding one Channel")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnDrugIndication() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.DrugIndicationBtnInsideCP.isPresent()) {
                await this.DrugIndicationBtnInsideCP.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug Indication Button inside Policy or Drug Indication Button xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfDrugIndication() {

        //let lengthValue = await this.DrugTable.count();

        let ApplicationDrugIndicationDataList = new Array();
        let DrugIndicationDataList = new Array("ID", "Drug-Indication", "Record Status", "Modified");
        let result;
        try {
            let lengthValue = await this.DrugTable.all(By.tagName("th")).count();
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("Drug Indication TAB lengthValue", lengthValue);

            for (let i = 1; i <= lengthValue; i++) {
                let DrugIndicationColoumnName = await element(by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
                console.log("Drug Indication ColoumnName ", DrugIndicationColoumnName);
                ApplicationDrugIndicationDataList[i] = DrugIndicationColoumnName.trim();

            }
            let missing = ApplicationDrugIndicationDataList.filter(item => DrugIndicationDataList.indexOf(item) < 0);
            console.log("Items Missing In Drug Indication Are ", missing.length);
            console.log("ApplicationDrugIndicationDataList", ApplicationDrugIndicationDataList.length);
            let result = ApplicationDrugIndicationDataList.filter(item => DrugIndicationDataList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Drug Indication Columns are extra or not in application " + result.toString());
            }

            return retrunresult;
        }
        catch (e) {
            console.log("It Exception accoured" + e);
            return false;
        }


    }

    public async ClickOnAssociateDrugIndicationBtn() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.Associate_Drug_Indication_Btn.isPresent()) {
                await this.Associate_Drug_Indication_Btn.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Associate Drug ndication Button inside Policy or Associate Drug Indication Button xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckHeaderOfManagedAssociatedDrugIndication() {
        try {

            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.DrugHeaderTxt.isPresent()) {
                await this.DrugHeaderTxt.getText().then(function (DrugHeaderText) {
                    DrugHeaderText.trim();
                    console.log("Drug Indication Header Text " + DrugHeaderText);
                    if (DrugHeaderText == 'Drug-Indications') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Drug-Indication Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async ClickOnCancelOfDrigIndicationInsidePolicy() {
        try {
            var retrunresult = false;
            if (await this.CancelBtnInsideDrugIndication.isPresent()) {
                await this.CancelBtnInsideDrugIndication.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button inside Drug-Indication inside CP")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectDrugandClickOnSaveInDrugs() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.FirstRadioBtnDrugOnTheDrugs.isPresent()) {
                await this.FirstRadioBtnDrugOnTheDrugs.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SaveButtonOnDrugs.isPresent()) {
                    await this.SaveButtonOnDrugs.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Save Button in Drugs")
                }

            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }
    public async ClickOnDocuments() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.DocumnetsLinkInsidePolicy.isPresent()) {
                await this.DocumnetsLinkInsidePolicy.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Document Button inside Policy or Document xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfDocumnets() {

        //let lengthValue = await this.DrugTable.count();

        let ApplicationDocumentsDataList = new Array();
        let DocumentsDataList = new Array("ID", "Code", "Document Name", "Type", "Content Type", "Record Status", "Modified", "Change Detected");
        let result;
        try {
            let lengthValue = await this.DrugTable.all(By.tagName("th")).count();
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("Click On Drugs TAB lengthValue", lengthValue);

            for (let i = 1; i <= lengthValue; i++) {
                let DocumentColoumnName = await element(by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
                console.log("DocumentColoumnName ", DocumentColoumnName);
                ApplicationDocumentsDataList[i] = DocumentColoumnName.trim();

            }
            let missing = ApplicationDocumentsDataList.filter(item => DocumentsDataList.indexOf(item) < 0);
            console.log("Items Missing in Documenst Are ", missing.length);
            console.log("ApplicationDocumentsDataList", ApplicationDocumentsDataList.length);
            let result = ApplicationDocumentsDataList.filter(item => DocumentsDataList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Document Columns are extra or not in application " + result.toString());
            }

            return retrunresult;
        }
        catch (e) {
            console.log("It Exception accoured" + e);
            return false;
        }


    }

    public async ClickOnNewBtnOfDocments() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.UploadNewButonInDocuments.isPresent()) {
                await this.UploadNewButonInDocuments.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Upload Button Of Drugs");
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckHeaderONNewOfDocuments() {
        try {
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (AddingDocumentHeaderText) {
                    AddingDocumentHeaderText.trim();
                    if (AddingDocumentHeaderText == 'Upload a Document') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Document Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async VerifyFieldsInNewFieldOfDocuments() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationNewItemListOfDocuments = new Array();
        let NewItemllistOfDocuments = new Array("Document Name", "Document Type", "Content Type", "Description");
        let result;
        try {
            var retrunresult = false;
            console.log("NewItemllistOfDocuments", NewItemllistOfDocuments.length);
            let DocumentNamePlaceholder = await this.DocumentNameTxtNameInNewOfDocuments.getAttribute("placeholder");
            console.log("DocumentNamePlaceholder ", DocumentNamePlaceholder);
            let DocumentTypePlaceHolder = await this.DocumentTypeTxtNameInNewOfDocuments.getAttribute("placeholderlabel");
            console.log("DocumentTypePlaceHolder ", DocumentTypePlaceHolder)
            let ContentTypeTypePlaceHolder = await this.ContentTypeTxtNameInNewOfDocuments.getAttribute("placeholderlabel");
            console.log("ContentTypeTypePlaceHolder ", ContentTypeTypePlaceHolder);
            let DescriptionPlaceHolder = await this.DescriptionTxtNameInNewOfDocuments.getAttribute("placeholder");
            console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
            ApplicationNewItemListOfDocuments.push(DocumentNamePlaceholder.trim(), DocumentTypePlaceHolder.trim(), ContentTypeTypePlaceHolder.trim(),
                DescriptionPlaceHolder.trim());


            let missing = ApplicationNewItemListOfDocuments.filter(item => NewItemllistOfDocuments.indexOf(item) < 0);
            console.log("New Of Document Table Missing Data Are ", missing.length);
            console.log("ApplicationNewItemListOfDocuments", ApplicationNewItemListOfDocuments.length);
            // let result = NewItemllistOfDocuments.filter(item => ApplicationNewItemListOfDocuments.indexOf(item) < 0);

            if (missing.length == 0) {
                retrunresult = true;
            }

            else {
                retrunresult = false;
                console.log("These Items for New are extra or not in application on Documents Inside a Poloicy " + missing.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnCancelOfnewOfDocuments() {
        try {
            console.log("Coming for cancel");
            var retrunresult = false;
            if (await this.CancelButtonOnNewOfDocuments.isPresent()) {
                console.log("Coming for cancel is present");
                await this.CancelButtonOnNewOfDocuments.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Documents or Xpath is changed for Cancel of Drugs");
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDocumentName() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DocumentNameTxtNameInNewOfDocuments.isPresent()) {
                console.log("Came to Name Field")
                let Number = help.RandomNumber();
                let StringNumber = (await Number).toString();
                NameToBeEntered = "Testing QA Team " + StringNumber;
                await this.DocumentNameTxtNameInNewOfDocuments.sendKeys(NameToBeEntered).then(function () {
                    console.log("Entered Document Name");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Document Name inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectDocumentType() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DocumentTypeTxtNameInNewOfDocuments.isPresent()) {
                await this.DocumentTypeTxtNameInNewOfDocuments.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SelectPolicyTypeInNew.isPresent()) {
                    await this.SelectPolicyTypeInNew.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Document Type inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectContentType() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.ContentTypeTxtNameInNewOfDocuments.isPresent()) {
                await this.ContentTypeTxtNameInNewOfDocuments.click().then(function () {
                    retrunresult = true;
                });

                if (await this.FourthOptionInAnySelection.isPresent()) {
                    await this.FourthOptionInAnySelection.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Content Type inside Add Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDescriptionOfAddDocuments() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DescriptionTxtNameInNewOfDocuments.isPresent()) {
                await this.DescriptionTxtNameInNewOfDocuments.clear();
                await this.DescriptionTxtNameInNewOfDocuments.sendKeys("For Testing New Field").then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Description inside Add Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async ClicksOnCreateOfDocuments() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CreateBtnInAddDocs.isPresent()) {
                await this.CreateBtnInAddDocs.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Create Button inside Add Policy")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckTheHeaderOfCreatedDocument() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CoveragePolicyHeader.isPresent()) {
                await this.CoveragePolicyHeader.getText().then(function (Header) {
                    if (Header.trim() == NameToBeEntered) {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Document Header is missing")
                    }
                });
            }

            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClickOnLinksInsideCoveragePolicy() {
        try {
            console.log("Click On Links TAB");
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));

            var retrunresult = false;
            if (await this.LinksBtnInsidePolicy.isPresent()) {
                browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                await this.LinksBtnInsidePolicy.click().then(function () {
                    retrunresult = true;
                    browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Link Button inside Policy or Drug xpath is changed")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CheckDataOfLinks() {

        //let lengthValue = await this.DrugTable.count();

        let ApplicationLinksDataList = new Array();
        let LinksDataList = new Array("ID","Name", "Code", "Type", "URL",
            "Content Type", "Record Status", "Modified");
        let result;
        try {
            let lengthValue = await this.DrugTable.all(By.tagName("th")).count();
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("Click On Links TAB lengthValue", lengthValue);

            for (let i = 1; i <= lengthValue; i++) {
                let LinkColoumnName = await element(by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
                console.log("LinkColoumnName ", LinkColoumnName);
                ApplicationLinksDataList[i] = LinkColoumnName.trim();

            }
            let missing = ApplicationLinksDataList.filter(item => LinksDataList.indexOf(item) < 0);
            console.log("Items Missing in Documenst Are ", missing.length);
            console.log("ApplicationLinksDataList", ApplicationLinksDataList.length);
            let result = ApplicationLinksDataList.filter(item => LinksDataList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Links Columns are extra or not in application " + result.toString());
            }

            return retrunresult;
        }
        catch (e) {
            console.log("It Exception accoured" + e);
            return false;
        }


    }

    public async ClickOnNewBtnOfLinks() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            var retrunresult = false;
            if (await this.NewlBtnINLinks.isPresent()) {
                await this.NewlBtnINLinks.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no New Button Of Links");
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckHeaderONNewOfLinks() {
        try {
            var retrunresult = false;
            if (await this.Header.isPresent()) {
                await this.Header.getText().then(function (AddingLinkHeaderText) {
                    AddingLinkHeaderText.trim();
                    if (AddingLinkHeaderText == 'Add New Link') {
                        retrunresult = true;
                    }
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Link Header")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }


    public async ClickOnCancelOfnewOfLinks() {
        try {
            console.log("Coming for cancel Inside Links");
            var retrunresult = false;
           // browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            if (await this.CancelButtonOnNewOfDocuments.isPresent()) {
                console.log("Coming for cancel in Links is present");
                browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                await this.CancelButtonOnNewOfDocuments.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Cancel Button in Links or Xpath is changed for Cancel of Links");
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async VerifyFieldsInNewFieldOfLink() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationNewItemListOfLinks = new Array();
        let NewItemllistOfLinks = new Array("Name", "Description", "URL", "Link Type", "Content Type","Document Type");
        let result;
        try {
            var retrunresult = false;
            console.log("NewItemllistOfLinks", NewItemllistOfLinks.length);
            let NamePlaceholder = await this.NameTxtInsideAddNewLink.getAttribute("placeholder");
            console.log("NamePlaceholder ", NamePlaceholder);
            let DescriptionPlaceHolder = await this.DescriptionTxtInsideAddNewLink.getAttribute("placeholder");
            console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder)
            let URLPlaceHolder = await this.URlTxtInsideAddNewLink.getAttribute("placeholder");
            console.log("URLPlaceHolder ", URLPlaceHolder);
            let LinkTypePlaceHolder = await this.LinkTypeInsideAddNewLink.getAttribute("aria-label");
            console.log("LinkTypePlaceHolder ", LinkTypePlaceHolder);
            let ContentTypePlaceHolder = await this.ContentTypeInsideAddNewlink.getAttribute("aria-label");
            console.log("ContentTypePlaceHolder ", ContentTypePlaceHolder);
            ApplicationNewItemListOfLinks.push(NamePlaceholder.trim(), DescriptionPlaceHolder.trim(), URLPlaceHolder.trim(),
                LinkTypePlaceHolder.trim(), ContentTypePlaceHolder.trim());

            let missing = ApplicationNewItemListOfLinks.filter(item => NewItemllistOfLinks.indexOf(item) < 0);
            console.log("New Of Links Table Missing Data Are ", missing.length);
            console.log("ApplicationNewItemListOfLinks", ApplicationNewItemListOfLinks.length);
            if (missing.length == 0) {
                retrunresult = true;
            }

            else {
                retrunresult = false;
                console.log("These Items for New are extra or not in application on Links Inside a Poloicy " + missing.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterLinkName() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.NameTxtInsideAddNewLink.isPresent()) {
                console.log("Came to Name Field")
                let Number = help.RandomNumber();
                let StringNumber = (await Number).toString();
                NameToBeEntered = "Testing Link QA Team " + StringNumber;
                await this.NameTxtInsideAddNewLink.sendKeys(NameToBeEntered).then(function () {
                    console.log("Entered Link Name");
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Link Name inside New")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterDescriptionOfAddNewLink() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.DescriptionTxtInsideAddNewLink.isPresent()) {
                await this.DescriptionTxtInsideAddNewLink.clear();
                await this.DescriptionTxtInsideAddNewLink.sendKeys("Testing Creation of New Link").then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Description inside Add Links")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async EnterURLOfAddNewLink() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.URlTxtInsideAddNewLink.isPresent()) {
                //await this.URlTxtInsideAddNewLink.clear();
                await this.URlTxtInsideAddNewLink.sendKeys("https://www.google.com/").then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no URL inside Add Links")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectLinkType() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.LinkTypeInsideAddNewLink.isPresent()) {
                await this.LinkTypeInsideAddNewLink.click().then(function () {
                    retrunresult = true;
                });

                if (await this.SecondOptionInAnySelection.isPresent()) {
                    await this.SecondOptionInAnySelection.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Link Type inside Add Documents")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async SelectContentTypeInLinks() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.ContentTypeInsideAddNewlink.isPresent()) {
                await this.ContentTypeInsideAddNewlink.click().then(function () {
                    retrunresult = true;
                });

                if (await this.FourthOptionInAnySelection.isPresent()) {
                    await this.FourthOptionInAnySelection.click().then(function () {
                        retrunresult = true;
                    });
                }
            }
            else {
                retrunresult = false;
                console.log("There is no Content Type inside Add Links")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async ClicksOnCreateOfLinks() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CreateBtnInsideAddNewLinks.isPresent()) {
                await this.CreateBtnInsideAddNewLinks.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Create Button inside Adding Links")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckTheHeaderOfCreatedLink() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        try {
            var retrunresult = false;
            if (await this.CoveragePolicyHeader.isPresent()) {
                await this.CoveragePolicyHeader.getText().then(function (Header) {
                    if (Header.length > 10) {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Link Header is missing")
                    }
                });
            }

            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }

    public async CheckDataOfCreatedLink() {
        browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
        let ApplicationCreatedLinksDataList = new Array();
        let CreatedLinksDataList = new Array("Main Information", "Link URL");
        let result;
        try {
            var retrunresult = false;
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("CreatedLinksDataList ", CreatedLinksDataList.length);

            let MainInformationTextName = await this.MainInforamtionHeader.getText();
            console.log("MainInformationTextName ", MainInformationTextName);
            let LinksHeaderTextName = await this.LinksHeaderInsideCreatedPolicy.getText();
            console.log("OverviewTextName ", LinksHeaderTextName);
            ApplicationCreatedLinksDataList.push(LinksHeaderTextName.trim(), MainInformationTextName.trim());

            console.log("ApplicationCreatedLinksDataList", ApplicationCreatedLinksDataList.length);
            let result = CreatedLinksDataList.filter(item => ApplicationCreatedLinksDataList.indexOf(item) < 0);

            if (result.length == 0) {
                return true;
            }

            else {
                retrunresult = false;
                console.log("These Items for the Created Links are extra or not in application " + result.toString());
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }
    }
    public async ClickOnURLWhichWasCreated() {
        try {
            browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            console.log("It clicked Link Type Under Links");
            var retrunresult = false;
            parentID = browser.getWindowHandle();

            if (await this.UrlOfLinks.isPresent()) {
                await this.UrlOfLinks.click().then(function () {
                    retrunresult = true;
                });
            }
            else {
                retrunresult = false;
                console.log("There is no Link Type ")
            }
            return retrunresult;
        }
        catch (e) {
            return false;
        }

    }

    public async CloseTheNewWindow() {
        //await element(by.css("body")).sendKeys(Key.CONTROL+"W");

        let windowHandles = browser.getAllWindowHandles();
        let ParentHandle, ChildHandle;
        await windowHandles.then(function (handles) {
            ParentHandle = handles[0];
            ChildHandle = handles[1];
            console.log("Total Handles is ", handles.length);

            browser.switchTo().window(ChildHandle).then(async function () {
                console.log("The Browser is in Child Window");
                await browser.close();
                await browser.driver.switchTo().window(parentID);

            });
        })
        return true;
    }

    public async verifyUserInHomePage() {
        try {
            let result = false;
            browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
            await this.HomePageVersion.getText().then(function (version) {
                console.log("text", version);
                if ((version.trim()).includes(prop.GetPropertyValue("VERSION_INFO").trim())) {
                    console.log("Application version matches")
                    result = true;
                }
                else {
                    result = false;
                }
            });
            return result;
        }
        catch (e) {
            console.log("Got Exception", e);
            return false;
        }
    }



}