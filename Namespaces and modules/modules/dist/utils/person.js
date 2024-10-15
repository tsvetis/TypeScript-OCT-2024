"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvgAge = void 0;
const getAvgAge = (persons) => {
    let sum = 0;
    persons.forEach((p) => {
        sum += p.age;
    });
    return sum / persons.length;
};
exports.getAvgAge = getAvgAge;
