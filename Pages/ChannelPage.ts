import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
var prop = new PropertiesFileManager();
let headerActualArray = new Array();
let headerExpectedArray = new Array();

let detailheaderActualArray = new Array();
let detailheaderExpectedArray = new Array();


export class ChannelPage {
    channelHeaderElement: ElementFinder;
    tableCount: ElementArrayFinder;
    placeHolderElement: ElementFinder;
    recordListTable: ElementArrayFinder;
    detailCount: ElementArrayFinder;
    channelLink :ElementFinder;
    constructor() {
        this.channelLink = element(by.xpath("//a[@href='/administration/channels']"));
        this.channelHeaderElement = element(by.xpath("//div[@id = 'channelGridViewContainer']//h1[@class='grid-header']"));
        this.tableCount = element.all(by.xpath("//table[@id = 'grid']//tr"));
        this.placeHolderElement = element(by.xpath("//input[@placeholder='Search']"));
        this.recordListTable = element.all(by.xpath("//table[@id = 'grid']//tr//td[2]"));
        this.detailCount = element.all(by.xpath("//*[@class='detail-grid-item']/p[@class='label ng-star-inserted']"));
    }


    public async verifyChannelHeader() {
        try {
            let result = false;
            let isPresent = await this.channelHeaderElement.isPresent();
            if (isPresent) {
                let txtHeader = await this.channelHeaderElement.getText();
                if (txtHeader.trim() == 'Channels') {
                    result = true;
                }
            }

            return result;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }


    public async compareHeaderNames() {
        let missing = headerActualArray.filter(item => headerExpectedArray.indexOf(item) < 0);
        console.log("missing len", missing.length);
        if (missing.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    public async getTheColumnNames() {
        try {
            var value = await this.tableCount.all(by.tagName("th")).count();
            console.log(value);


            var headerNames = prop.GetPropertyValue("CHANNEL_HEADER_NAMES");
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

    public async enetrTextInSearchBox() {
        let result = false;
        console.log("in search Box");
        let isPresent = await this.placeHolderElement.isPresent();
        console.log("in search Box1", isPresent);
        if (isPresent) {
            await this.placeHolderElement.sendKeys(prop.GetPropertyValue("SEARCH_IN_CHANNEL"));
            result = true;
        }


        return result;
    }

    public async verifySearchText() {

        let textname = await element(by.xpath("//table//tr[1]//td[2]")).getText();
        console.log("textname", textname);
        if (textname.trim().toLocaleLowerCase() == prop.GetPropertyValue("SEARCH_IN_CHANNEL").trim().toLocaleLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    public async clickOnChannel() {
        try {
            await element(by.xpath("//table//tr[1]//td[2]//a")).click().then(function () {
                console.log("Click On channel");
                browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")))
            });
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    public async verifyDetailPage() {
        try {

            var headerNames = prop.GetPropertyValue("CHANNEL_HEADER_NAMES_IN_DETAIL");
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
                await this.channelLink.click().then(function(){
                   browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")))
                });

                return true;
            }
            else {
                await this.channelLink.click().then(function(){
                   browser.sleep(Number(prop.GetPropertyValue("SMALL_DELAY")))
                });
                return false;
            }
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}