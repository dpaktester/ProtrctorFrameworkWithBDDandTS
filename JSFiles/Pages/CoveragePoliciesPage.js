"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoveragePoliciesPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
const Helper_1 = require("../Utility/Helper");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
var help = new Helper_1.Helper();
let NameToBeEntered = "";
let thirdPolicyName = "";
let parentID;
class CoveragePoliciesPage {
    constructor() {
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.CoveragePoliciesHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
        this.SearchPannel = protractor_1.element(protractor_1.by.className("search form-control"));
        this.SearhedText = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[2]/div/app-policy-mat-table/app-dynamic-mat-table/div[1]/table/tbody/tr[1]/td[2]/a"));
        this.PolicyTypeBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='policyTypeFilter']/button"));
        this.Header = protractor_1.element(protractor_1.by.className("cdk-drag-handle dialog-heading"));
        this.MedicalPolicyPTRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[1]"));
        this.PharmacyPolicyPTRadioBtn2 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[2]"));
        this.OtherPolicyTypePTRadioBtn3 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[3]"));
        this.CancelButtonOnPolicyType = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[2]"));
        this.SecondPlanInCoveragePolicy = protractor_1.element(protractor_1.by.xpath("//table//tr[1]/td[2]/a"));
        this.ApplyButtonOnPolicyType = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button[1]"));
        this.PolicyTypeText = protractor_1.element(protractor_1.by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[5]/a"));
        this.ChannelBtn = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[2]/app-filter-button[2]/button"));
        this.CommChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[1]"));
        this.MMChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[2]"));
        this.EGChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[3]"));
        this.FEChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[4]"));
        this.HEChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[5]"));
        this.SMChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[6]"));
        this.MedicareChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[7]"));
        this.CHIPChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[8]"));
        this.TricareChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[9]"));
        this.VODChannelRadioBtn1 = protractor_1.element(protractor_1.by.xpath("//*[@class ='checkboxes']/li[10]"));
        this.recordListCheckBox = protractor_1.element.all(protractor_1.by.xpath("//*[@class = 'checkboxes']//li"));
        this.CommercialChannelRadioBtn = protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.CommercialChannelText = protractor_1.element(protractor_1.by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[4]/span"));
        this.RecordStatusBtn = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[2]/app-filter-button[1]/button"));
        this.NewRecordsBtn = protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[1]"));
        this.NewRecordStatusText = protractor_1.element(protractor_1.by.xpath("//*[@class='col table-wrapper table-responsive fixed-container']//tr[1]/td[8]/span"));
        this.NewBtnOfCoveragePolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-table/div/div[1]/div/app-user-action-controls/div/div[3]/div/button"));
        this.NameInNewOfCP = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.PolicyOwnerInNewOfCp = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/app-organization-picker/mat-form-field/div/div[1]/div/input"));
        this.PolicyTypeInNewOfCp = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/app-single-select/mat-form-field/div/div[1]/div/mat-select"));
        this.DescriptionInNewOfCP = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.StartDateInNewOFCP = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[3]/div/div[1]/div[1]/input"));
        this.EndDateInNewOFCP = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[4]/div/div[1]/div[1]/input"));
        this.PolicyNumberInNewOfCP = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[5]/div/div[1]/div/input"));
        this.CancelBtnOfNewInCP = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/div/button"));
        this.PolicyOwner = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[3]/div/div/mat-option[1]"));
        this.SelectPolicyTypeInNew = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.CreateBtnInNewOfCP = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/div/app-form-submit-button/button"));
        this.NameInputInNew = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[1]/div/div/div/input"));
        this.PolicyOwnerInputNew = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-form-field-infix ng-tns-c117-72']/input"));
        this.PolicyTypeInputNew = protractor_1.element(protractor_1.by.xpath("//*[@id='mat-select-7']"));
        this.DescriptionInputNew = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[2]/div/div/div/input"));
        this.StartDateInputNew = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[3]/div/div/div/input"));
        this.EndDateInputNew = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[4]/div/div/div/input"));
        this.PrintedPolicyNameInputNew = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/mat-form-field[5]/div/div/div/input"));
        this.PolicyNumInput = protractor_1.element(protractor_1.by.xpath("//html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/div/form/mat-form-field[5]/div/div[1]/div/input"));
        this.CoveragePolicyHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='policy-heading']/span"));
        this.CoveragePolicyDetailLink = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-link']"));
        this.ThirdLinkOnCoveragePolicy = protractor_1.element(protractor_1.by.xpath("//table//tr[3]/td[2]/a"));
        this.OverviewHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[1]"));
        this.MainInforamtionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/h1"));
        this.PolicyChannelHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][2]/h1"));
        this.ChangeDetectionHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][3]/h1"));
        this.PolicyNameHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/p[1]"));
        this.RecordStatusHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/p[3]"));
        this.PolicyOwnerHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/p[5]"));
        this.DrugsHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[2]"));
        this.DocumentsHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[3]"));
        this.LinksHeader = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-tab-links']/a[4]"));
        this.EditPolicyMainInfo = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[1]/h1/img"));
        this.EditPolicyHeader = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-policy/div/h1/span"));
        this.EditPharmPolicySaveBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='addPolicyForm']/form/div/app-form-submit-button/button"));
        this.DescriptionHeaderInEditMainInfo = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/p[3]"));
        this.DescriptionInMainInfo = protractor_1.element(protractor_1.by.xpath("//*[@class='detail-grid-item'][1]/p[4]"));
        this.EditInPolicyChannels = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[2]/h1/img"));
        this.EditChannelHeader = protractor_1.element(protractor_1.by.xpath("/html/body/div/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/h1"));
        this.SelectedChannelForPolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/app-coverage-policy-detail-overview/div/div[2]/app-bullet-list/div/ul/li"));
        this.HixRadioBtnInEditChannel = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/app-flat-checkbox-list/ul/li[5]/label/input"));
        this.SaveButton = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-edit-policy-channels/div/div/button[1]"));
        this.AlertAfterChannelEdit = protractor_1.element(protractor_1.by.xpath("//*[@id='toast-container']/div/div"));
        this.DrugLinkInsidePolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[2]"));
        this.DrugTable = protractor_1.element(protractor_1.by.xpath("//table//tr"));
        this.ManagedAssociatedDrugBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='tabActionButton']"));
        this.CancelBtnInDrugs = protractor_1.element(protractor_1.by.xpath("//*[@id='drugPicker']/div/div[3]/button[1]"));
        this.FirstRadioBtnDrugOnTheDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/div/div[2]/app-drugs-mat-table/app-dynamic-mat-table/div[1]/table/tbody/tr[2]/td[1]/a/mat-checkbox/label/div"));
        this.SaveButtonOnDrugs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/div/div[3]/button[2]"));
        this.DocumnetsLinkInsidePolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[5]"));
        this.UploadNewButonInDocuments = protractor_1.element(protractor_1.by.xpath("//*[@class='record-actions']//button"));
        this.DocumentNameTxtNameInNewOfDocuments = protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Document Name']"));
        this.DocumentTypeTxtNameInNewOfDocuments = protractor_1.element(protractor_1.by.xpath("//*[@placeholderlabel='Document Type']"));
        this.ContentTypeTxtNameInNewOfDocuments = protractor_1.element(protractor_1.by.xpath("//*[@placeholderlabel='Content Type']"));
        this.DescriptionTxtNameInNewOfDocuments = protractor_1.element(protractor_1.by.xpath("//*[@placeholder=' Description']"));
        this.CancelButtonOnNewOfDocuments = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/button"));
        this.DocumentNameInDocuments = protractor_1.element(protractor_1.by.xpath("//*[@class='modal-form']/form/mat-form-field[1]/div/div/div/input"));
        this.DrugHeaderTxt = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-drug-picker/div/h1"));
        this.FourthOptionInAnySelection = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[4]/span"));
        this.SecondOptionInAnySelection = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[4]/div/div/div/mat-option[2]/span"));
        this.DescriptionInDocuments = protractor_1.element(protractor_1.by.xpath("//*[@class='modal-form']/form/mat-form-field[2]/div/div/div/input"));
        this.CreateBtnInAddDocs = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-update-add-doc/div/div/form/div/app-form-submit-button/button"));
        this.LinksBtnInsidePolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-coverage-policy-detail/app-persistent-mat-tab/nav/div[2]/div/div/a[6]"));
        this.NewlBtnINLinks = protractor_1.element(protractor_1.by.xpath("//*[@class='record-actions']//button"));
        this.CancelBtnInsideNewLinks = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/div[2]/button"));
        this.NameTxtInsideAddNewLink = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/mat-form-field[1]/div/div[1]/div/input"));
        this.DescriptionTxtInsideAddNewLink = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/mat-form-field[2]/div/div[1]/div/input"));
        this.URlTxtInsideAddNewLink = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-url-input/mat-form-field/div/div[1]/div/input"));
        this.LinkTypeInsideAddNewLink = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-single-select[1]/mat-form-field/div/div[1]/div/mat-select"));
        this.ContentTypeInsideAddNewlink = protractor_1.element(protractor_1.by.xpath("/html/body/div[2]/div[2]/div/mat-dialog-container/app-add-update-link/div/div/form/app-single-select[2]/mat-form-field/div/div[1]/div/mat-select"));
        this.CreateBtnInsideAddNewLinks = protractor_1.element(protractor_1.by.xpath("//*[@class='buttons-row']/app-form-submit-button/button"));
        this.LinksHeaderInsideCreatedPolicy = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-links-detail/app-persistent-mat-tab/app-overview-links/div/div[2]/h1"));
        this.UrlOfLinks = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-full-web-layout/mat-sidenav-container/mat-sidenav-content/app-links-detail/app-persistent-mat-tab/app-overview-links/div/div[2]/app-external-link/a"));
        this.HomePageVersion = protractor_1.element(protractor_1.by.xpath("//*[name()='app-version-label']//*[@class='version-info']"));
        this.recordStatusModified = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Modified')]"));
        this.completeButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='completeDataChanges']"));
        this.continueButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='confirmDialogForm']/div[2]/button[1]"));
        this.approveButtonElement = protractor_1.element(protractor_1.by.xpath("//*[@id='approveDataChanges']"));
        this.recordStatusApproved = protractor_1.element(protractor_1.by.xpath("//p[contains(text(),'Approved')]"));
        this.historyTabBtn = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[8]"));
        this.tableOfHistoryTab = protractor_1.element.all(protractor_1.by.xpath("//table[@id='grid']//tbody//tr"));
        this.DrugIndicationBtnInsideCP = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[3]"));
        this.Associate_Drug_Indication_Btn = protractor_1.element(protractor_1.by.xpath("//*[@class='record-actions']//button"));
        this.CancelBtnInsideDrugIndication = protractor_1.element(protractor_1.by.xpath("//*[@class='drug-picker-buttons buttons-row']/button[2]"));
        this.FirstRadioBtnDrugOnTheDrugIndication = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-table cdk-table mat-sort table table-borderless table-sm recent-orders-table']//tr[1]/td[1]//mat-checkbox"));
        this.SaveBtnOnDrugIndication = protractor_1.element(protractor_1.by.xpath("//*[@class='drug-picker-buttons buttons-row']/button[1]"));
        this.StepTherapyBtnInsdieCP = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[4]"));
        this.OverViewtabBtn = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-links']/a[1]"));
        this.CancelBtnOnEditChannels = protractor_1.element(protractor_1.by.xpath("//div[@class='buttons-row-ali']/button[2]"));
    }
    verifyCoveragePoliciespage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                yield this.CoveragePoliciesHeader.getText().then(function (text) {
                    if (text.trim() == "Coverage Policies") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
                var count = yield this.TableCount.count();
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
        });
    }
    VerifyExistenceOfSearchPannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield this.SearchPannel.getAttribute("placeholder").then(function (searhpannelPlaceholder) {
                    if (searhpannelPlaceholder == "Search") {
                        console.log("verified");
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
        });
    }
    EnterTextIntoSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield this.SearchPannel.sendKeys("Aetna").then(function (text) {
                    retrunresult = true;
                });
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyTextInSearchPanel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                yield this.SearhedText.getText().then(function (text) {
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
        });
    }
    ClickOnPolicyTypeBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Policy Type");
                var retrunresult = false;
                if (yield this.PolicyTypeBtn.isPresent()) {
                    yield this.PolicyTypeBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Policy Type Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfOnPolicyType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (PolicyTypeHeaderText) {
                        if (PolicyTypeHeaderText == 'Policy Types') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Policy Type Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfOnPolicyType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.MedicalPolicyPTRadioBtn1.getText().then(function (PolicyTypeRadioBtn1Text) {
                        if (PolicyTypeRadioBtn1Text == "Medical Policy") {
                            retrunresult = true;
                        }
                    });
                    yield this.PharmacyPolicyPTRadioBtn2.getText().then(function (PolicyTypeRadioBtn2Text) {
                        if (PolicyTypeRadioBtn2Text == "Pharmacy Policy ") {
                            retrunresult = true;
                        }
                    });
                    yield this.OtherPolicyTypePTRadioBtn3.getText().then(function (PolicyTypeRadioBtn3Text) {
                        if (PolicyTypeRadioBtn3Text == "Other Policy Type ") {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is different Policy Types");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCancelOfPolicyTypeBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.CancelButtonOnPolicyType.isPresent()) {
                    yield this.CancelButtonOnPolicyType.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button in Policy Type");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyUserClicksOnCancelOnPolicyType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                yield protractor_1.browser.getCurrentUrl().then(function (URL) {
                    console.log("URL", URL);
                    if (URL == "https://phoenix-test.businessonetech.net/records/coverage-policies") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Cancel Button is not Working");
                    }
                });
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectPhrmacyPolicyFromPolicyType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.PharmacyPolicyPTRadioBtn2.isPresent()) {
                    yield this.PharmacyPolicyPTRadioBtn2.click().then(function () {
                        console.log("clicked on Pharmacy Policy ");
                        retrunresult = true;
                    });
                    if (yield this.ApplyButtonOnPolicyType.isPresent()) {
                        yield this.ApplyButtonOnPolicyType.click().then(function () {
                            console.log("clicked on Apply Button ");
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("The Radio button is not Working");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifySelectedPolicyTypeISApplied() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                yield protractor_1.browser.getCurrentUrl().then(function (URL) {
                    console.log("URL", URL);
                    if (URL == "https://phoenix-test.businessonetech.net/records/coverage-policies?policyTypeIds=2") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                        console.log("The Cancel Button is not Working");
                    }
                });
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnChannelBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                if (yield this.ChannelBtn.isPresent()) {
                    yield this.ChannelBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Channel Button in Coverage Policy");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfOnChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (ChannelHeaderText) {
                        if (ChannelHeaderText == 'Channels') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Channels Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            let lengthValue = yield this.recordListCheckBox.count();
            let ApplicationChannel = new Array();
            let channellist = new Array("Commercial (COMMERCIAL) ".trim(), "Managed Medicaid (MMC) ".trim(), "Employer Groups (EMPGROUP) ".trim(), "Federal Employees Health Benefits (FEHB) ".trim(), "Health Insurance Exchange (HIX) ".trim(), "State Medicaid (MEDICAID) ".trim(), "Children's Health Insurance Program (CHIP) ".trim(), "Medicare (MEDICARE) ".trim(), "TRICARE (TRICARE) ".trim(), "VADOD (VADOD) ".trim(), "Pharmacy Benefit Manager (PBM)".trim());
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("channellist", channellist.length);
                if (yield this.Header.isPresent()) {
                    for (let i = 1; i <= lengthValue; i++) {
                        let textName = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
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
        });
    }
    ClickOnCancelBtnofEditChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                if (yield this.CancelBtnOnEditChannels.isPresent()) {
                    yield this.CancelBtnOnEditChannels.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button In Edit Channels ");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyUserClicksOnCancelOnChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var count = yield this.TableCount.count();
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
        });
    }
    SelectChannelAndClickOnApply() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.ChannelBtn.isPresent()) {
                    yield this.CommChannelRadioBtn1.click().then(function () {
                        console.log("clicked on commercial Channel");
                        retrunresult = true;
                    });
                    if (yield this.ApplyButtonOnPolicyType.isPresent()) {
                        yield this.ApplyButtonOnPolicyType.click().then(function () {
                            console.log("clicked on Apply Button ");
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("The Radio button of channel is not Working");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifySelectedChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.CommercialChannelText.isPresent()) {
                    protractor_1.browser.sleep(6000);
                    yield this.CommercialChannelText.getText().then(function (ChannelText) {
                        ChannelText.trim();
                        console.log("Channel Text ", ChannelText.trim());
                        if (ChannelText == 'COMMERCIAL') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Selected Channel is not filtered");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnRecordStatusBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Record Status ");
                var retrunresult = false;
                if (yield this.RecordStatusBtn.isPresent()) {
                    yield this.RecordStatusBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Record Status Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (PolicyTypeHeaderText) {
                        PolicyTypeHeaderText.trim();
                        if (PolicyTypeHeaderText == 'Record Status'.trim()) {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Record Status Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfRecordStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let lengthValue = yield this.recordListCheckBox.count();
            let ApplicationRecordList = new Array();
            let Recordllist = new Array("New ".trim(), "Modified ".trim(), "Completed ".trim(), "Approved ".trim(), "Published ".trim(), "Archived ".trim());
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Recordllist", Recordllist.length);
                if (yield this.Header.isPresent()) {
                    for (let i = 1; i <= lengthValue; i++) {
                        let textName = yield protractor_1.element(protractor_1.by.xpath("//*[@class = 'checkboxes']//li[" + i + "]")).getText();
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
        });
    }
    SelectNewFromRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.NewRecordsBtn.isPresent()) {
                    yield this.NewRecordsBtn.click().then(function () {
                        console.log("clicked on New of Recoprd Status ");
                        retrunresult = true;
                    });
                    if (yield this.ApplyButtonOnPolicyType.isPresent()) {
                        yield this.ApplyButtonOnPolicyType.click().then(function () {
                            console.log("clicked on Apply Button ");
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("The New Radio button is not Working under Records");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifySelectedRecordType() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.NewRecordStatusText.isPresent()) {
                    protractor_1.browser.sleep(6000);
                    yield this.NewRecordStatusText.getText().then(function (RecordsText) {
                        RecordsText.trim();
                        console.log("Records Text ", RecordsText.trim());
                        if (RecordsText == 'New') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Selected Record is not filtered");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnNewBtnOfCoveragePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked New Button of Coverage Policy");
                var retrunresult = false;
                if (yield this.NewBtnOfCoveragePolicy.isPresent()) {
                    yield this.NewBtnOfCoveragePolicy.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no New Button Of Coverage Policy");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfNewInCoveragePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (PolicyTypeHeaderText) {
                        PolicyTypeHeaderText.trim();
                        if (PolicyTypeHeaderText == 'Create a new Policy '.trim()) {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Header is not matching against Requirement");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyFieldsInNewFieldOfCoveragePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationNewItemList = new Array();
            let NewItemllist = new Array("Policy Name", "Policy Owner", "Policy Type", "Description", "Effective Date", "End Date", "Policy Number");
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("NewItemllist", NewItemllist.length);
                let NamePlaceholder = yield this.NameInNewOfCP.getAttribute("placeholder");
                console.log("NamePlaceholder ", NamePlaceholder);
                let PolicyOwnerPlaceHolder = yield this.PolicyOwnerInNewOfCp.getAttribute("placeholder");
                console.log("PolicyOwnerPlaceHolder ", PolicyOwnerPlaceHolder);
                let PolicyTypePlaceHolder = yield this.PolicyTypeInNewOfCp.getAttribute("aria-label");
                console.log("PolicyTypePlaceHolder ", PolicyTypePlaceHolder);
                let DescriptionPlaceHolder = yield this.DescriptionInNewOfCP.getAttribute("placeholder");
                console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
                let StartDatePlaceHolder = yield this.StartDateInNewOFCP.getAttribute("placeholder");
                console.log("StartDatePlaceHolder ", StartDatePlaceHolder);
                let EndDatePlaceHolder = yield this.EndDateInNewOFCP.getAttribute("placeholder");
                console.log("EndDatePlaceHolder ", EndDatePlaceHolder);
                let PolicyNumPlaceHolder = yield this.PolicyNumberInNewOfCP.getAttribute("placeholder");
                console.log("PolicyNumPlaceHolder ", PolicyNumPlaceHolder);
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                ApplicationNewItemList.push(NamePlaceholder.trim(), PolicyOwnerPlaceHolder.trim(), PolicyTypePlaceHolder.trim(), DescriptionPlaceHolder.trim(), StartDatePlaceHolder.trim(), EndDatePlaceHolder.trim(), PolicyNumPlaceHolder.trim());
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
        });
    }
    ClickOnCancelBtnInCreatingANewCP() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CancelBtnOfNewInCP.isPresent()) {
                    yield this.CancelBtnOfNewInCP.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterPolicyName() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.NameInputInNew.isPresent()) {
                    console.log("Came to Name Field");
                    let Number = help.RandomNumber();
                    let StringNumber = (yield Number).toString();
                    NameToBeEntered = "Test from Mozenda Team " + StringNumber;
                    yield this.NameInputInNew.sendKeys(NameToBeEntered).then(function () {
                        console.log("Entered Data");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Name inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterPolicyOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.PolicyOwnerInNewOfCp.isPresent()) {
                    yield this.PolicyOwnerInNewOfCp.sendKeys("Aetna").then(function () {
                        retrunresult = true;
                    });
                    if (yield this.PolicyOwner.isPresent()) {
                        yield this.PolicyOwner.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Policy Owner inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnyterPolicyType() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.PolicyTypeInNewOfCp.isPresent()) {
                    yield this.PolicyTypeInNewOfCp.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SelectPolicyTypeInNew.isPresent()) {
                        yield this.SelectPolicyTypeInNew.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Policy Type inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DescriptionInNewOfCP.isPresent()) {
                    yield this.DescriptionInNewOfCP.clear();
                    yield this.DescriptionInNewOfCP.sendKeys("Testing New Functionality").then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Description inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterStartDateandEndDate() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.StartDateInNewOFCP.isPresent()) {
                    yield this.StartDateInNewOFCP.sendKeys("5/28/2020").then(function () {
                        retrunresult = true;
                    });
                    if (yield this.EndDateInNewOFCP.isPresent()) {
                        yield this.EndDateInNewOFCP.sendKeys("5/30/2020").then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Start Date and End Date inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClicksOnCreateOfNew() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CreateBtnInNewOfCP.isPresent()) {
                    yield this.CreateBtnInNewOfCP.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Create Button inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckTheHeaderOfCreatedPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CoveragePolicyHeader.isPresent()) {
                    yield this.CoveragePolicyHeader.getText().then(function (Header) {
                        if (Header.trim() == NameToBeEntered) {
                            console.log("The Header is ", Header);
                            retrunresult = true;
                        }
                        else {
                            retrunresult = false;
                            console.log("The Policy Header is missing");
                        }
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckTheHeaderOfTobeEdittedPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CoveragePolicyHeader.isPresent()) {
                    yield this.CoveragePolicyHeader.getText().then(function (Header) {
                        if (Header.trim() == thirdPolicyName.trim()) {
                            console.log("The Header is ", Header);
                            retrunresult = true;
                        }
                        else {
                            retrunresult = false;
                            console.log("The Policy Header is missing");
                        }
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCoveragePolicyDetailLink() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (this.CoveragePolicyDetailLink.isPresent()) {
                    yield this.CoveragePolicyDetailLink.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Detail Link Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnSecondLinkOfCoveragePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.ThirdLinkOnCoveragePolicy.isPresent()) {
                    thirdPolicyName = yield this.ThirdLinkOnCoveragePolicy.getText();
                    yield this.ThirdLinkOnCoveragePolicy.click().then(function () {
                        console.log("Clicked on the third policy");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Data on Coverage Policy");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfSelectedPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationSecondPolicyItemList = new Array();
            let SecondPolicyItemsList = new Array("Overview", "Main Information", "Policy Channels", "Change Detection");
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("SecondPolicyItemsList ", SecondPolicyItemsList.length);
                let OverviewTextName = yield this.OverviewHeader.getText();
                console.log("OverviewTextName ", OverviewTextName);
                let MainInformationTextName = yield this.MainInforamtionHeader.getText();
                console.log("MainInformationTextName ", MainInformationTextName);
                let PolicyChannelTextName = yield this.PolicyChannelHeader.getText();
                console.log("PolicyChannelTextName ", PolicyChannelTextName);
                let ChnageDetectionTextName = yield this.ChangeDetectionHeader.getText();
                console.log("ChnageDetectionTextName ", ChnageDetectionTextName);
                ApplicationSecondPolicyItemList.push(OverviewTextName.trim(), MainInformationTextName.trim(), PolicyChannelTextName.trim(), ChnageDetectionTextName.trim());
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
        });
    }
    ClickOnEditButtonOnSecondPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.EditPolicyMainInfo.isPresent()) {
                    yield this.EditPolicyMainInfo.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Edit Button on Main Information");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfOnEditOfSecondPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                if (yield this.EditPolicyHeader.isPresent()) {
                    yield this.EditPolicyHeader.getText().then(function (EdPolicyHeaderText) {
                        if (EdPolicyHeaderText == 'Edit Policy') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Header for Editing a Policy Type or it's not matching with Requirement");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnEditPolicySaveBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Policy Type");
                var retrunresult = false;
                if (yield this.EditPharmPolicySaveBtn.isPresent()) {
                    yield this.EditPharmPolicySaveBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Save Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyRecordStatusForModified() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield help.waitForTexttoAppear(this.recordStatusModified, "Modified");
                let text = yield this.recordStatusModified.getText();
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
        });
    }
    clickOnCompleteButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Complete button");
                yield help.waitForTexttoAppear(this.completeButtonElement, "Complete");
                protractor_1.browser.sleep(7000);
                yield this.completeButtonElement.click();
                console.log("clicked on Complete Button");
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("verifyContinueButton  button");
                let result = yield help.waitForTexttoAppear_1(this.continueButtonElement, "Continue");
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
        });
    }
    clickOnContinueButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.continueButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield help.waitForTexttoAppear_1(this.approveButtonElement, "Approve");
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
        });
    }
    clickOnApproveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.approveButtonElement.click();
                yield this.continueButtonElement.click();
                return true;
            }
            catch (e) {
                console.log("Exception accoured", e);
                return false;
            }
        });
    }
    verifyRecordStatusAfterApprove() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield help.waitForTexttoAppear(this.recordStatusApproved, "Approved");
                let text = yield this.recordStatusApproved.getText();
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
        });
    }
    clicksOnHistoryTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.actions().mouseMove(this.historyTabBtn).click().perform();
                return true;
            }
            catch (e) {
                console.log("Excpetion accoured", e);
                return false;
            }
        });
    }
    verifyOnHistoryTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let count = yield this.tableOfHistoryTab.count();
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
        });
    }
    clicksOnOverViewTAB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.actions().mouseMove(this.OverViewtabBtn).click().perform();
                return true;
            }
            catch (e) {
                console.log("Excpetion accoured", e);
                return false;
            }
        });
    }
    CheckTheGridForDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationDecriptionList = new Array();
            let DecriptionList = new Array("Description", "Testing New Functionality");
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("DecriptionList ", DecriptionList.length);
                let DescriptionHeader = yield this.DescriptionHeaderInEditMainInfo.getText();
                console.log("DescriptionHeader ", DescriptionHeader);
                let DescriptionDetailsHeader = yield this.DescriptionInMainInfo.getText();
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
        });
    }
    ClickOneditPolicyChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.EditInPolicyChannels.isPresent()) {
                    yield this.EditInPolicyChannels.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Edit Button in Edit Channels");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnEditBtnofEditChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Policy Type");
                var retrunresult = false;
                if (yield this.PolicyTypeBtn.isPresent()) {
                    yield this.PolicyTypeBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Policy Type Button");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfEditChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.EditChannelHeader.isPresent()) {
                    yield this.EditChannelHeader.getText().then(function (EditChannelHeaderText) {
                        EditChannelHeaderText.trim();
                        console.log("EditChannelHeaderText ", EditChannelHeaderText);
                        if (EditChannelHeaderText == 'Edit Channels') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Header for Edit Channels or The Header is not matching");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckTheDataAfterCancelOnEditChannels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.SelectedChannelForPolicy.isPresent()) {
                    yield this.SelectedChannelForPolicy.getText().then(function (SelectedChannelText) {
                        if (SelectedChannelText == 'Commercial') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("The Channel is not matching after clicking on Cancel");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectHixChannelandClickOnSaveInEditChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.HixRadioBtnInEditChannel.isPresent()) {
                    yield this.HixRadioBtnInEditChannel.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SaveButton.isPresent()) {
                        yield this.SaveButton.click().then(function () {
                            retrunresult = true;
                        });
                    }
                    else {
                        retrunresult = false;
                        console.log("There is no Save Button");
                    }
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckAlertAfterSelectingChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.AlertAfterChannelEdit.isPresent()) {
                    yield this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                        if (ChannelAlertText == '1 channel has been added.') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Alert after adding one Channel");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Click On Drugs TAB");
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DrugLinkInsidePolicy.isPresent()) {
                    protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                    yield this.DrugLinkInsidePolicy.click().then(function () {
                        retrunresult = true;
                        protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug Button inside Policy or Drug xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Click On Drugs TAB");
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationDrugDataList = new Array();
            let DrugDataList = new Array("ID", "Code", "Name", "Type", "Record Status", "Modified");
            let result;
            try {
                let lengthValue = yield this.DrugTable.all(protractor_1.By.tagName("th")).count();
                console.log("Click On Drugs TAB lengthValue", lengthValue);
                var retrunresult = false;
                console.log("Click On Drugs TAB1");
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("DrugDataList ", DrugDataList.length);
                console.log("Click On Drugs TAB3");
                for (let i = 1; i <= lengthValue; i++) {
                    let DrugColoumnName = yield protractor_1.element(protractor_1.by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
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
        });
    }
    ClickOnManagedAssociatedDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.ManagedAssociatedDrugBtn.isPresent()) {
                    yield this.ManagedAssociatedDrugBtn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Managed Associated Drug Button inside Policy or Drug xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfManagedAssociatedDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                if (yield this.DrugHeaderTxt.isPresent()) {
                    yield this.DrugHeaderTxt.getText().then(function (DrugHeaderText) {
                        DrugHeaderText.trim();
                        console.log("DrugHeaderText " + DrugHeaderText);
                        if (DrugHeaderText == 'Drugs') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drugs Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCancelOfDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                console.log("Click On Cancel Drugs");
                if (yield this.CancelBtnInDrugs.isPresent()) {
                    yield this.CancelBtnInDrugs.click().then(function () {
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
        });
    }
    SelectDrugIndicationInDruIn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.FirstRadioBtnDrugOnTheDrugIndication.isPresent()) {
                    yield this.FirstRadioBtnDrugOnTheDrugIndication.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug-Indications Button in Drugs");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckAlertAfterUnSelectingDrugIndiation() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.AlertAfterChannelEdit.isPresent()) {
                    yield this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                        ChannelAlertText.trim();
                        if (ChannelAlertText == '1 drug-indication has been deleted.') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Alert after adding one Channel");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectDrugandClickOnSaveInDrugIndication() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.SaveBtnOnDrugIndication.isPresent()) {
                    yield this.SaveBtnOnDrugIndication.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Save Button in Drug Indication");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckAlertAfterSelectingDrugIndication() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.AlertAfterChannelEdit.isPresent()) {
                    yield this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                        ChannelAlertText.trim();
                        if (ChannelAlertText == '1 drug-indication has been added.') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Alert after adding one Drug-Indication");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckAlertAfterSelectingDrug() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.AlertAfterChannelEdit.isPresent()) {
                    yield this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                        if (ChannelAlertText == '1 drug has been added.') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Alert after adding one Channel");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    verifyPageAfterDrugAddition() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                var count = yield this.TableCount.count();
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
        });
    }
    ClickOnStepTherapyInsideCP() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.StepTherapyBtnInsdieCP.isPresent()) {
                    yield this.StepTherapyBtnInsdieCP.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Step Therapy Button or xpath is changed for Step Therapy");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfStepTherapy() {
        return __awaiter(this, void 0, void 0, function* () {
            let ApplicationStepTherapyDataList = new Array();
            let StepTherapyList = new Array("Scenario ID", "Drug-Indications", "Step Therapy Category", "Step Criteria", "Record Status", "Modified");
            let result;
            try {
                let lengthValue = yield this.DrugTable.all(protractor_1.By.tagName("th")).count();
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Drug Indication TAB lengthValue", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let StepTherpayColumnNames = yield protractor_1.element(protractor_1.by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
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
        });
    }
    CheckAlertAfterUnSelectingDrug() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.AlertAfterChannelEdit.isPresent()) {
                    yield this.AlertAfterChannelEdit.getText().then(function (ChannelAlertText) {
                        if (ChannelAlertText == '1 drug has been deleted.') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Alert after adding one Channel");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnDrugIndication() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DrugIndicationBtnInsideCP.isPresent()) {
                    yield this.DrugIndicationBtnInsideCP.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug Indication Button inside Policy or Drug Indication Button xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfDrugIndication() {
        return __awaiter(this, void 0, void 0, function* () {
            let ApplicationDrugIndicationDataList = new Array();
            let DrugIndicationDataList = new Array("ID", "Drug-Indication", "Record Status", "Modified");
            let result;
            try {
                let lengthValue = yield this.DrugTable.all(protractor_1.By.tagName("th")).count();
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Drug Indication TAB lengthValue", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let DrugIndicationColoumnName = yield protractor_1.element(protractor_1.by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
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
        });
    }
    ClickOnAssociateDrugIndicationBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.Associate_Drug_Indication_Btn.isPresent()) {
                    yield this.Associate_Drug_Indication_Btn.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Associate Drug ndication Button inside Policy or Associate Drug Indication Button xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckHeaderOfManagedAssociatedDrugIndication() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                if (yield this.DrugHeaderTxt.isPresent()) {
                    yield this.DrugHeaderTxt.getText().then(function (DrugHeaderText) {
                        DrugHeaderText.trim();
                        console.log("Drug Indication Header Text " + DrugHeaderText);
                        if (DrugHeaderText == 'Drug-Indications') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Drug-Indication Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCancelOfDrigIndicationInsidePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.CancelBtnInsideDrugIndication.isPresent()) {
                    yield this.CancelBtnInsideDrugIndication.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Cancel Button inside Drug-Indication inside CP");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectDrugandClickOnSaveInDrugs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.FirstRadioBtnDrugOnTheDrugs.isPresent()) {
                    yield this.FirstRadioBtnDrugOnTheDrugs.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SaveButtonOnDrugs.isPresent()) {
                        yield this.SaveButtonOnDrugs.click().then(function () {
                            retrunresult = true;
                        });
                    }
                    else {
                        retrunresult = false;
                        console.log("There is no Save Button in Drugs");
                    }
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.DocumnetsLinkInsidePolicy.isPresent()) {
                    yield this.DocumnetsLinkInsidePolicy.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Button inside Policy or Document xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfDocumnets() {
        return __awaiter(this, void 0, void 0, function* () {
            let ApplicationDocumentsDataList = new Array();
            let DocumentsDataList = new Array("ID", "Code", "Document Name", "Type", "Content Type", "Record Status", "Modified", "Change Detected");
            let result;
            try {
                let lengthValue = yield this.DrugTable.all(protractor_1.By.tagName("th")).count();
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Click On Drugs TAB lengthValue", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let DocumentColoumnName = yield protractor_1.element(protractor_1.by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
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
        });
    }
    ClickOnNewBtnOfDocments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.UploadNewButonInDocuments.isPresent()) {
                    yield this.UploadNewButonInDocuments.click().then(function () {
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
        });
    }
    CheckHeaderONNewOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (AddingDocumentHeaderText) {
                        AddingDocumentHeaderText.trim();
                        if (AddingDocumentHeaderText == 'Upload a Document') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    VerifyFieldsInNewFieldOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationNewItemListOfDocuments = new Array();
            let NewItemllistOfDocuments = new Array("Document Name", "Document Type", "Content Type", "Description");
            let result;
            try {
                var retrunresult = false;
                console.log("NewItemllistOfDocuments", NewItemllistOfDocuments.length);
                let DocumentNamePlaceholder = yield this.DocumentNameTxtNameInNewOfDocuments.getAttribute("placeholder");
                console.log("DocumentNamePlaceholder ", DocumentNamePlaceholder);
                let DocumentTypePlaceHolder = yield this.DocumentTypeTxtNameInNewOfDocuments.getAttribute("placeholderlabel");
                console.log("DocumentTypePlaceHolder ", DocumentTypePlaceHolder);
                let ContentTypeTypePlaceHolder = yield this.ContentTypeTxtNameInNewOfDocuments.getAttribute("placeholderlabel");
                console.log("ContentTypeTypePlaceHolder ", ContentTypeTypePlaceHolder);
                let DescriptionPlaceHolder = yield this.DescriptionTxtNameInNewOfDocuments.getAttribute("placeholder");
                console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
                ApplicationNewItemListOfDocuments.push(DocumentNamePlaceholder.trim(), DocumentTypePlaceHolder.trim(), ContentTypeTypePlaceHolder.trim(), DescriptionPlaceHolder.trim());
                let missing = ApplicationNewItemListOfDocuments.filter(item => NewItemllistOfDocuments.indexOf(item) < 0);
                console.log("New Of Document Table Missing Data Are ", missing.length);
                console.log("ApplicationNewItemListOfDocuments", ApplicationNewItemListOfDocuments.length);
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
        });
    }
    ClickOnCancelOfnewOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Coming for cancel");
                var retrunresult = false;
                if (yield this.CancelButtonOnNewOfDocuments.isPresent()) {
                    console.log("Coming for cancel is present");
                    yield this.CancelButtonOnNewOfDocuments.click().then(function () {
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
        });
    }
    EnterDocumentName() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DocumentNameTxtNameInNewOfDocuments.isPresent()) {
                    console.log("Came to Name Field");
                    let Number = help.RandomNumber();
                    let StringNumber = (yield Number).toString();
                    NameToBeEntered = "Testing QA Team " + StringNumber;
                    yield this.DocumentNameTxtNameInNewOfDocuments.sendKeys(NameToBeEntered).then(function () {
                        console.log("Entered Document Name");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Name inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectDocumentType() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DocumentTypeTxtNameInNewOfDocuments.isPresent()) {
                    yield this.DocumentTypeTxtNameInNewOfDocuments.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SelectPolicyTypeInNew.isPresent()) {
                        yield this.SelectPolicyTypeInNew.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Document Type inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectContentType() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.ContentTypeTxtNameInNewOfDocuments.isPresent()) {
                    yield this.ContentTypeTxtNameInNewOfDocuments.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.FourthOptionInAnySelection.isPresent()) {
                        yield this.FourthOptionInAnySelection.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Content Type inside Add Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDescriptionOfAddDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DescriptionTxtNameInNewOfDocuments.isPresent()) {
                    yield this.DescriptionTxtNameInNewOfDocuments.clear();
                    yield this.DescriptionTxtNameInNewOfDocuments.sendKeys("For Testing New Field").then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Description inside Add Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClicksOnCreateOfDocuments() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CreateBtnInAddDocs.isPresent()) {
                    yield this.CreateBtnInAddDocs.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Create Button inside Add Policy");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckTheHeaderOfCreatedDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CoveragePolicyHeader.isPresent()) {
                    yield this.CoveragePolicyHeader.getText().then(function (Header) {
                        if (Header.trim() == NameToBeEntered) {
                            retrunresult = true;
                        }
                        else {
                            retrunresult = false;
                            console.log("The Document Header is missing");
                        }
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnLinksInsideCoveragePolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Click On Links TAB");
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.LinksBtnInsidePolicy.isPresent()) {
                    protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                    yield this.LinksBtnInsidePolicy.click().then(function () {
                        retrunresult = true;
                        protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Link Button inside Policy or Drug xpath is changed");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            let ApplicationLinksDataList = new Array();
            let LinksDataList = new Array("ID", "Name", "Code", "Type", "URL", "Content Type", "Record Status", "Modified");
            let result;
            try {
                let lengthValue = yield this.DrugTable.all(protractor_1.By.tagName("th")).count();
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("Click On Links TAB lengthValue", lengthValue);
                for (let i = 1; i <= lengthValue; i++) {
                    let LinkColoumnName = yield protractor_1.element(protractor_1.by.xpath("//table//tr/th[" + i + "]/div/button/a")).getText();
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
        });
    }
    ClickOnNewBtnOfLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                var retrunresult = false;
                if (yield this.NewlBtnINLinks.isPresent()) {
                    yield this.NewlBtnINLinks.click().then(function () {
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
        });
    }
    CheckHeaderONNewOfLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                if (yield this.Header.isPresent()) {
                    yield this.Header.getText().then(function (AddingLinkHeaderText) {
                        AddingLinkHeaderText.trim();
                        if (AddingLinkHeaderText == 'Add New Link') {
                            retrunresult = true;
                        }
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Link Header");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClickOnCancelOfnewOfLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Coming for cancel Inside Links");
                var retrunresult = false;
                if (yield this.CancelButtonOnNewOfDocuments.isPresent()) {
                    console.log("Coming for cancel in Links is present");
                    protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                    yield this.CancelButtonOnNewOfDocuments.click().then(function () {
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
        });
    }
    VerifyFieldsInNewFieldOfLink() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationNewItemListOfLinks = new Array();
            let NewItemllistOfLinks = new Array("Name", "Description", "URL", "Link Type", "Content Type", "Document Type");
            let result;
            try {
                var retrunresult = false;
                console.log("NewItemllistOfLinks", NewItemllistOfLinks.length);
                let NamePlaceholder = yield this.NameTxtInsideAddNewLink.getAttribute("placeholder");
                console.log("NamePlaceholder ", NamePlaceholder);
                let DescriptionPlaceHolder = yield this.DescriptionTxtInsideAddNewLink.getAttribute("placeholder");
                console.log("DescriptionPlaceHolder ", DescriptionPlaceHolder);
                let URLPlaceHolder = yield this.URlTxtInsideAddNewLink.getAttribute("placeholder");
                console.log("URLPlaceHolder ", URLPlaceHolder);
                let LinkTypePlaceHolder = yield this.LinkTypeInsideAddNewLink.getAttribute("aria-label");
                console.log("LinkTypePlaceHolder ", LinkTypePlaceHolder);
                let ContentTypePlaceHolder = yield this.ContentTypeInsideAddNewlink.getAttribute("aria-label");
                console.log("ContentTypePlaceHolder ", ContentTypePlaceHolder);
                ApplicationNewItemListOfLinks.push(NamePlaceholder.trim(), DescriptionPlaceHolder.trim(), URLPlaceHolder.trim(), LinkTypePlaceHolder.trim(), ContentTypePlaceHolder.trim());
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
        });
    }
    EnterLinkName() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.NameTxtInsideAddNewLink.isPresent()) {
                    console.log("Came to Name Field");
                    let Number = help.RandomNumber();
                    let StringNumber = (yield Number).toString();
                    NameToBeEntered = "Testing Link QA Team " + StringNumber;
                    yield this.NameTxtInsideAddNewLink.sendKeys(NameToBeEntered).then(function () {
                        console.log("Entered Link Name");
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Link Name inside New");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterDescriptionOfAddNewLink() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.DescriptionTxtInsideAddNewLink.isPresent()) {
                    yield this.DescriptionTxtInsideAddNewLink.clear();
                    yield this.DescriptionTxtInsideAddNewLink.sendKeys("Testing Creation of New Link").then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Description inside Add Links");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    EnterURLOfAddNewLink() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.URlTxtInsideAddNewLink.isPresent()) {
                    yield this.URlTxtInsideAddNewLink.sendKeys("https://www.google.com/").then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no URL inside Add Links");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectLinkType() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.LinkTypeInsideAddNewLink.isPresent()) {
                    yield this.LinkTypeInsideAddNewLink.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.SecondOptionInAnySelection.isPresent()) {
                        yield this.SecondOptionInAnySelection.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Link Type inside Add Documents");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    SelectContentTypeInLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.ContentTypeInsideAddNewlink.isPresent()) {
                    yield this.ContentTypeInsideAddNewlink.click().then(function () {
                        retrunresult = true;
                    });
                    if (yield this.FourthOptionInAnySelection.isPresent()) {
                        yield this.FourthOptionInAnySelection.click().then(function () {
                            retrunresult = true;
                        });
                    }
                }
                else {
                    retrunresult = false;
                    console.log("There is no Content Type inside Add Links");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    ClicksOnCreateOfLinks() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CreateBtnInsideAddNewLinks.isPresent()) {
                    yield this.CreateBtnInsideAddNewLinks.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Create Button inside Adding Links");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckTheHeaderOfCreatedLink() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            try {
                var retrunresult = false;
                if (yield this.CoveragePolicyHeader.isPresent()) {
                    yield this.CoveragePolicyHeader.getText().then(function (Header) {
                        if (Header.length > 10) {
                            retrunresult = true;
                        }
                        else {
                            retrunresult = false;
                            console.log("The Link Header is missing");
                        }
                    });
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CheckDataOfCreatedLink() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
            let ApplicationCreatedLinksDataList = new Array();
            let CreatedLinksDataList = new Array("Main Information", "Link URL");
            let result;
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("CreatedLinksDataList ", CreatedLinksDataList.length);
                let MainInformationTextName = yield this.MainInforamtionHeader.getText();
                console.log("MainInformationTextName ", MainInformationTextName);
                let LinksHeaderTextName = yield this.LinksHeaderInsideCreatedPolicy.getText();
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
        });
    }
    ClickOnURLWhichWasCreated() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("MEDIUM_DELAY")));
                console.log("It clicked Link Type Under Links");
                var retrunresult = false;
                parentID = protractor_1.browser.getWindowHandle();
                if (yield this.UrlOfLinks.isPresent()) {
                    yield this.UrlOfLinks.click().then(function () {
                        retrunresult = true;
                    });
                }
                else {
                    retrunresult = false;
                    console.log("There is no Link Type ");
                }
                return retrunresult;
            }
            catch (e) {
                return false;
            }
        });
    }
    CloseTheNewWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            let windowHandles = protractor_1.browser.getAllWindowHandles();
            let ParentHandle, ChildHandle;
            yield windowHandles.then(function (handles) {
                ParentHandle = handles[0];
                ChildHandle = handles[1];
                console.log("Total Handles is ", handles.length);
                protractor_1.browser.switchTo().window(ChildHandle).then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        console.log("The Browser is in Child Window");
                        yield protractor_1.browser.close();
                        yield protractor_1.browser.driver.switchTo().window(parentID);
                    });
                });
            });
            return true;
        });
    }
    verifyUserInHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = false;
                protractor_1.browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")));
                yield this.HomePageVersion.getText().then(function (version) {
                    console.log("text", version);
                    if ((version.trim()).includes(prop.GetPropertyValue("VERSION_INFO").trim())) {
                        console.log("Application version matches");
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
        });
    }
}
exports.CoveragePoliciesPage = CoveragePoliciesPage;
