import { ElementFinder,element,by, browser, ElementArrayFinder } from "protractor";
import { Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";


var prop = new PropertiesFileManager();

export  class HomePage{
    homePageTitle:ElementFinder ;
    menuButton:ElementFinder;
    listOfMenuElement:ElementArrayFinder;
    OrganizationLink:ElementFinder;
    PlanLink:ElementFinder;
    ProductsLink:ElementFinder;
    FormulariesLink:ElementFinder;
    CoveragePoliciesLink:ElementFinder;
    AdminstationLink:ElementFinder;
       
    constructor(){
        this.homePageTitle=element(by.xpath("//*[name()='mat-toolbar-row']/span"))
        this.menuButton=element(by.xpath("//*[name()='mat-toolbar-row']//div/button/i"));//contains(@class, 'atag')
        this.listOfMenuElement = element.all(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item']"))
        this.OrganizationLink=element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][2]//div[2]/a/span"));
        this.PlanLink = element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][3]//div[2]/a/span"));
        this.ProductsLink = element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][4]//div[2]/a/span"));
        this.FormulariesLink = element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][4]//div[2]/a/span"));
        this.CoveragePoliciesLink = element(by.xpath("//div[contains(@class,'mat-drawer-inner-container')]//*[name()='mat-nav-list' ]//*[name()='mat-list-item'][5]//div[2]/a/span"));
        this.AdminstationLink = element(by.xpath("//*[@id='appLeftNavigation']/mat-nav-list/mat-list-item[6]/div/div[2]/a/span"));
    }

   public async  verifyTitleHomePage(){
      
      
       var homePageTitleName  = await this.homePageTitle.getText();
       //console.log("getting from properties file"+prop.GetPropertyValue("ENV"))
        if(homePageTitleName == "Phoenix Data Manager"){
            console.log("Title of Home Page is found"+homePageTitleName)
         
            return true;
        }
        else{
            console.log("Title of home page is not found")
            return false;
        }
    }
    public async launchApplication(){
       // browser.waitForAngularEnabled(false);
      // browser.manage().window().maximize(); //Maximize window command
      await browser.manage().window().maximize().then(function() {
          browser.get('https://phoenix-test.businessonetech.net/')
             .then(() => (console.log('Test')));
       });
      //  await  browser.get('');
      //  browser.manage().window().maximize();
       // console.log("URL is launched is opened")
    }

    public async checkAvailabiltyOfMenuItems(){
      
       await this.listOfMenuElement.getWebElements().then(function(webElements) {
       
            if (webElements.length == 7) {
            
                console.log("Number of meny items is "+webElements.length.toString)
                return true;
            }
          else{
              return false;
          }

        });
        return true;
    }

    public async ClickOnOragnasization(){
     try{ 
       var Menu = this.ClickOnMenu();
       await this.OrganizationLink.getText().then(function(text){
       console.log("Menu Name is "+text)
     
        if(text == "Organizations"){
         console.log("found name== "+text)
          }
       
       });

      await this.OrganizationLink.click().then(function(){
        console.log("clicked on oraganization ")
        browser.sleep(10000); 
      });
      return true;
    }
    catch(e){
      return false;
    }
    }

    public async ClickOnMenu(){
      console.log("click on menu button methos")
      
      browser.sleep(5000); 
      await this.menuButton.click().then(function(){
     
        console.log("after click on menu button ")
        browser.sleep(5000);  
        return true;
      });
      return true;
    }



    public async ClickOnPlan(){
      console.log("ClickOnPlan")
       browser.sleep(10000);
       await this.PlanLink.getText().then(function(text){
        console.log("Menu Name is "+text)
     
        if(text == "Plans"){
         console.log("found name== "+text)
      
        }
       });

      await this.PlanLink.click().then(function(){
        console.log("cleckiked on PlanLink ")
        browser.sleep(10000);
      });
      return true;
    }

    public async ClickOnProducts(){
     try{
       console.log("ClickOnProducts");
      browser.sleep(10000);
        await this.ProductsLink.getText().then(function(text){
         console.log("Menu Name is "+text)
      
         if(text == "Products"){
          console.log("found name== "+text)
          browser.sleep(10000);
         
         }
        });
 
       await this.ProductsLink.click().then(function(){
         console.log("cleckiked on ProductsLink ")
       });
       return true;
     }
     catch(e){
      console.log("Exception"+e);
      return false;
     }
    }

     
    public async ClickOnFormularies(){
        
        browser.sleep(5000);
        await this.FormulariesLink.getText().then(function(text){
         console.log("Menu Name is "+text)
      
         if(text == "Formularies"){
          console.log("found name== "+text)
        
         }
        });
 
       await this.FormulariesLink.click().then(function(){
         console.log("cleckiked on ForulariesLink ")
         browser.sleep(10000);
       });
       return true;
     }

     public async ClickOnCoveragePolicies(){
     
        browser.sleep(5000);
        await this.CoveragePoliciesLink.getText().then(function(text){
         console.log("Menu Name is "+text)
      
         if(text == "Coverage Policies"){
          console.log("found name== "+text)
         
         
         }
        });
 
       await this.CoveragePoliciesLink.click().then(function(){
         console.log("cleckiked on CoveragePoliciesLink ")
         browser.sleep(10000);
        
       });
       return true;
     }

     public async ClickOnAdminstration(){
     
        await this.AdminstationLink.getText().then(function(text){
         console.log("Menu Name is "+text)
      
         if(text == "Administration"){
          console.log("found name== "+text)
       
             return true;
         }
        });
 
       await this.AdminstationLink.click().then(function(){
         console.log("cleckiked on Administration ")
         browser.sleep(10000);
       });
       return true;
     }

}