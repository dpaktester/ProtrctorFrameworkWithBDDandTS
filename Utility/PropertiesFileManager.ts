import { setWorldConstructor } from "cucumber";
import{Map, isConstructorDeclaration}from "typescript";
import { V4MAPPED } from "dns";
import { browser } from "protractor";
export let propertyMap : any;

export class PropertiesFileManager{
 
   
    public  LoadPropertiesFromFile(){
       
        let fs = require("fs")
		let rawContent = fs.readFileSync("./Utility/Phoenix.properties");
        propertyMap = new Map();
		let fullContent = rawContent.toString();
		let allPairs = fullContent.split("\n");
		for(var i = 0; i<allPairs.length; i++){
			var keyValue = allPairs[i].split("=")
			propertyMap.set(keyValue[0],keyValue[1]);
		}
		console.log("****Full content  : ")
	
		
	}
	
	public GetPropertyValue(text:String){
		return propertyMap.get(text);
	}
}