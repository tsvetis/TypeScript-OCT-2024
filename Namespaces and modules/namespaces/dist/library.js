"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsGroup = exports.AnimalGroup = void 0;
var AnimalGroup;
(function (AnimalGroup) {
    AnimalGroup.x = 123;
    function z() { }
    AnimalGroup.z = z;
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    AnimalGroup.Animal = Animal;
})(AnimalGroup || (exports.AnimalGroup = AnimalGroup = {}));
var StudentsGroup;
(function (StudentsGroup) {
    class Student {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    StudentsGroup.Student = Student;
})(StudentsGroup || (exports.StudentsGroup = StudentsGroup = {}));
// const animalGosho = new AnimalGroup.Animal("Gosho");
// console.log(animalGosho);
