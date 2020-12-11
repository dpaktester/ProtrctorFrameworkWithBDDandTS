"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesFileManager = exports.propertyMap = void 0;
class PropertiesFileManager {
    LoadPropertiesFromFile() {
        let fs = require("fs");
        let rawContent = fs.readFileSync("./Utility/Phoenix.properties");
        exports.propertyMap = new Map();
        let fullContent = rawContent.toString();
        let allPairs = fullContent.split("\n");
        for (var i = 0; i < allPairs.length; i++) {
            var keyValue = allPairs[i].split("=");
            exports.propertyMap.set(keyValue[0], keyValue[1]);
        }
        console.log("****Full content  : ");
    }
    GetPropertyValue(text) {
        return exports.propertyMap.get(text);
    }
}
exports.PropertiesFileManager = PropertiesFileManager;
