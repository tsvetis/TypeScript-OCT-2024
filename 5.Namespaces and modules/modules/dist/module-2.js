"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name;
        this.age = age;
    }
    getDetails() {
        return this.name + " <> " + this.age;
    }
}
exports.default = Person;
