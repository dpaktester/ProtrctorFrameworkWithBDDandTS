import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";
import { Helper } from "../Utility/Helper";

var helper = new Helper();

var prop = new PropertiesFileManager();

export  class AdministrationPage{
    administartionHeader:ElementFinder ;
    agentLink:ElementFinder;
    channelsLink:ElementFinder;
    documentsLink:ElementFinder;
    LinksLink:ElementFinder;
    drugsLink:ElementFinder;
    appVersionLink:ElementFinder;
    applicationVersion:ElementFinder;
    environment:ElementFinder;
    allAdministationHeader:ElementFinder;
    TableCount:ElementArrayFinder;
    constructor(){
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.environment = element(by.css("//div[@class='detail-grid-item'][1]/p[2]"));
       this.applicationVersion = element(by.xpath("//div[@class='detail-grid-item'][1]/p[2]"));
        this.administartionHeader =  element(by.xpath("//h1[@class ='admin ali-title']"));
        this.allAdministationHeader =  element(by.xpath("//h1[@class ='grid-header']"));
       // this.agentLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][1]//div[@class='mat-list-text']/a//span"));
       this.agentLink =  element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][1]//a[@class='mat-line menu-link nav-link']"));
        this.channelsLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][2]//a[@class='mat-line menu-link nav-link']"));
        //this.channelsLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][2]//div[@class='mat-list-text']/a//span"));
      //  this.documentsLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][3]//div[@class='mat-list-text']/a//span"));
      this.documentsLink =  element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][3]//a[@class='mat-line menu-link nav-link']"));
       // this.LinksLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][4]//div[@class='mat-list-text']/a//span"));
       this.LinksLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][4]//a[@class='mat-line menu-link nav-link']"));
       // this.drugsLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][5]//div[@class='mat-list-text']/a//span"));
       this.drugsLink =  element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][5]//a[@class='mat-line menu-link nav-link']"));
        //this.appVersionLink = element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][6]//div[@class='mat-list-text']/a//span"));
        this.appVersionLink =  element(by.xpath("//*[name()='app-admin-nav']//*[name()='mat-nav-list']/*[name()='mat-list-item'][6]//a[@class='mat-line menu-link nav-link']"));
    }
   

    public async verifyAppVersionpage(){
        try{
            var retrunresult = false;
            console.log("In the App version Page");
            await this.applicationVersion.getText().then(function(text){
                console.log("applicationVersion"+text);
                if(text.trim() == prop.GetPropertyValue("APPVERSION").trim()){
                    retrunresult = true;
                }
                else{
                    retrunresult= false;
                }
    
            });
         return retrunresult;
        }
        catch(e){
            return false;
        }
    }
    public async clickOnAppVersion(){
        try{
        await this.appVersionLink.click().then(function(){
        
            browser.sleep(5000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }

    public async clickOnDrugs(){
        try{
        await this.drugsLink.click().then(function(){
            browser.sleep(5000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }

    public async clickOnLinks(){
        try{
        await this.LinksLink.click().then(function(){
            browser.sleep(10000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }
    public async clickOnDocumnets(){
        try{
        await this.documentsLink.click().then(function(){
            browser.sleep(5000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }

   

    public async clickOnChannels(){
        try{
        await this.channelsLink.click().then(function(){
            browser.sleep(5000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }

   
    public async clickOnAgents(){
        try{
        await this.agentLink.click().then(function(){
            browser.sleep(5000);
         });
        }
        catch(e){
            return false;
        }
        return true;
    }
  public async verifyAdministationpage(){
    try{
        var retrunresult = false;
        browser.sleep(5000);
        await this.administartionHeader.getText().then(function(text){
            if(text == "Administration"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
   
     return retrunresult;
    }
    catch(e){
        return false;
    }
   

  }


  public async verifyAgentpage(){
    try{
        var retrunresult = false;
        console.log("verifyAgentpage");
        browser.sleep(5000);
        await this.allAdministationHeader.getText().then(function(text){
            browser.sleep(5000);
            console.log("administartionHeader"+text);
            if(text == "Agents"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Agents  page"+count);
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

  public async verifyChannelspage(){
    try{
        var retrunresult = false;
        browser.sleep(5000);
        console.log("verifyChannelspage");
        await this.allAdministationHeader.getText().then(function(text){
            browser.sleep(5000);
            console.log("administartionHeader"+text);
            if(text == "Channels"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Channels  page"+count);
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

  public async verifyDocumentspage(){
    try{
        var retrunresult = false;
        browser.sleep(5000);
        console.log("verifyDocumentspage");
        await this.allAdministationHeader.getText().then(function(text){
            browser.sleep(5000);
            console.log("administartionHeader"+text);
            if(text == "Documents"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Documents  page"+count);
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

  public async verifyLinkspage(){
    try{
        var retrunresult = false;
       // browser.sleep(5000);
        console.log("verifyLinkspage");
        await this.allAdministationHeader.getText().then(function(text){
            browser.sleep(5000);
            console.log("administartionHeader"+text);
            if(text == "Links"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Links  page"+count);
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

  
  public async verifyDrugspage(){
    try{
        var retrunresult = false;
        
        console.log("verifyDrugspage");
        await this.allAdministationHeader.getText().then(function(text){
            browser.sleep(5000);
            console.log("DeugsPage"+text);
            if(text == "Drugs"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }

        });
        var count = await this.TableCount.count();
        console.log("count in the Drugs  page"+count);
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
}