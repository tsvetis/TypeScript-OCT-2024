"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    favouriteTvShow;
    constructor(name, age) {
        this.name;
        this.age = age;
        this.favouriteTvShow = "Simpsons";
    }
    getDetails() {
        return this.name + " <> " + this.age;
    }
}
exports.default = Person;
