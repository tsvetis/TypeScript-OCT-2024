"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarGroup = void 0;
const library_1 = require("./library");
var CarGroup;
(function (CarGroup) {
    class Car {
        make;
        year;
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
    }
    CarGroup.Car = Car;
    let Engline;
    (function (Engline) {
        let OilService;
        (function (OilService) {
            OilService.check = true;
        })(OilService = Engline.OilService || (Engline.OilService = {}));
    })(Engline = CarGroup.Engline || (CarGroup.Engline = {}));
})(CarGroup || (exports.CarGroup = CarGroup = {}));
var check = CarGroup.Engline.OilService.check;
console.log(check);
/// <reference path="library.ts"/>
const animal1 = new library_1.AnimalGroup.Animal("xxxx");
const bmw = new CarGroup.Car("BMW", "1999");
