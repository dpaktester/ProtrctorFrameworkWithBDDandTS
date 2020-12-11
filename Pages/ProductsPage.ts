import { PropertiesFileManager } from "../Utility/PropertiesFileManager";
import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";



var prop = new PropertiesFileManager();

export  class ProductsPage{
    ProductsHeader:ElementFinder ;
    TableCount:ElementArrayFinder;
    constructor(){
        this.TableCount = element.all(by.xpath("//table//tr"));
        this.ProductsHeader =  element(by.xpath("//h1[@class ='grid-header']"));
    }

  public async verifyProductspage(){
    try{
        var retrunresult = false;
        browser.sleep(5000);
        console.log("I n the product page")
        await this.ProductsHeader.getText().then(function(text){
            console.log("I n the product page"+text)
            if(text == "Products"){
                retrunresult = true;
            }
            else{
                retrunresult= false;
            }
   
        });
        var count = await this.TableCount.count();
        console.log("count in the Products  page"+count);
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