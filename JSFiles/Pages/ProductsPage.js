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
exports.ProductsPage = void 0;
const PropertiesFileManager_1 = require("../Utility/PropertiesFileManager");
const protractor_1 = require("protractor");
var prop = new PropertiesFileManager_1.PropertiesFileManager();
class ProductsPage {
    constructor() {
        this.TableCount = protractor_1.element.all(protractor_1.by.xpath("//table//tr"));
        this.ProductsHeader = protractor_1.element(protractor_1.by.xpath("//h1[@class ='grid-header']"));
    }
    verifyProductspage() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var retrunresult = false;
                protractor_1.browser.sleep(5000);
                console.log("I n the product page");
                yield this.ProductsHeader.getText().then(function (text) {
                    console.log("I n the product page" + text);
                    if (text == "Products") {
                        retrunresult = true;
                    }
                    else {
                        retrunresult = false;
                    }
                });
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
}
exports.ProductsPage = ProductsPage;
