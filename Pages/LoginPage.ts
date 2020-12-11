
import { ElementFinder,element,by, browser, ElementArrayFinder } from "protractor";
import { Then } from "cucumber";
import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
var prop = new PropertiesFileManager();

export  class LoginPage{
    loginButton:ElementFinder ;
    userNameTxtBox:ElementFinder ;
    passwordTxtBoc:ElementFinder ;
    login:ElementFinder ;
    userName:ElementFinder;    
    acctmenu:ElementFinder;
    logout:ElementFinder;
    logoutTitle:ElementFinder;
    changeLogoutTitle:ElementFinder;

   
    constructor(){
        this.changeLogoutTitle=element(by.xpath("//div[@class='col-6']//h1//small"));
        this.logoutTitle = element(by.xpath("//div[@class='connect-page-header']/h1"));
        this.logout = element(by.xpath("//div[@class='dropdown-menu-right dropdown-menu show']/button"))
        this.acctmenu = element(by.xpath("//button[@id='accountMenu']"));
        this.loginButton=element(by.xpath("//button[@class='app-button']"))
        this.userNameTxtBox=element(by.xpath("//input[@id='Username']"))
        this.passwordTxtBoc=element(by.xpath("//input[@id='Password']"))
        this.login=element(by.xpath("//button[@value='login']"))
        //update Login deta

        this.userName=element(by.css("div[class='user-name']"))
        }


        public async verifyLogout(){
            try{
                var result= false;
               /* await this.logoutTitle.getText().then(function(text){
                    if(text.trim() == "BusinessOne Logout".trim()){
                        result = true;
                    }
                    else{
                        result= false;
                    }
        
                });*/
                await this.changeLogoutTitle.getText().then(function(text){
                    if(text.trim() == "You are now logged out.".trim()){
                        result = true;
                    }
                    else{
                        result= false;
                    }
        
                });
                return result;
            }
            catch(e){
                return false;
            }
        }

        public async clickOnAcctMenu(){
            try{
            await this.acctmenu.click().then(function(){
                console.log("ICliked on account menu ")
               browser.sleep(5000);

            });
            await this.logout.click().then(function(){
               console.log("clicked loggout");
               browser.sleep(5000);
             });
          
            return true;
        }
        catch(e){
            return false;
        }
        }
        public async verifyUserName(){
         try{
             browser.sleep(10000);
             var verified = false;
             await this.userName.getText().then(function(text){
              
                var userdisplayname = prop.GetPropertyValue("USER_DISPLAYNAME");
             
                if(text.trim()== userdisplayname.trim()){
                  verified = true;
                }
                else{
                    verified = false;
                }
               
               });



        return verified;
           
        }
        
        catch(e){
           console.log("exception accoured");
           return false;
        }
        }

        public async  clickOnLoginButton(){

            //click on the Login Button
            await this.loginButton.click().then(function(){
                
                console.log("click on Login button ")
             
                return true;
              });
              return true;
        }

        public async entercredentials(){

            console.log("enter the credentials");
           // await browser.waitForAngularEnabled(false);
           
            const Cryptr = require('cryptr');
            const cryptr = new Cryptr('myTotalySecretKey');
            
            
            const decryptedString =await  cryptr.decrypt(prop.GetPropertyValue("PASSWORD"));
            console.log("after decrypt");          
           // browser.sleep(10000);
            
            await this.userNameTxtBox.sendKeys(prop.GetPropertyValue("USERNAME")).then(function(){
              //browser.sleep(5000);
            });

          //  await this.passwordTxtBoc.sendKeys(decryptedString).then(function(){
           //  browser.sleep(5000);
          //  });
          
        
            await this.login.click().then(function(){
                browser.sleep(5000);
                //return true;
            });
         
             await this.passwordTxtBoc.sendKeys(decryptedString).then(function(){
               browser.sleep(5000);
             });

             await this.login.click().then(function(){
                //return true;
            });
            return true;
        }
    }