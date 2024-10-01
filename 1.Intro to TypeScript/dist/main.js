// String
let str = "hello";
str = "Zdrasti";
str = `Hi ${123 * 213}!`;
// Number
let num = 123;
num = 123.123;
num = 10001101;
num = 7e3;
// Boolean
let isBool = true;
isBool = false;
isBool = 1000 > 0;
const nums = [1, 2, 3, 4];
// Symbol
// const symb1: Symbol = Symbol("123");
// console.log(symb1);
// Null
let obj = null;
obj = 123;
// Undefined
let variable;
// Arrays
const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = ["a", "b", "c"];
const arr4 = [true, false, true];
// Tuple Object.entries
let tuple = ["age", 23];
// tuple = [123, 'age']
// Enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
})(DaysOfWeek || (DaysOfWeek = {}));
function tellMeIfIsMonday(day) {
    return DaysOfWeek.Monday === day;
}
// Any
let x = 5;
x = [1, 2, 3];
x = true;
x = { name: "Peshi" };
// Unknown
let y = 5;
y = [3, 4, 5];
y = false;
// Void
function printMe(msg) {
    console.log(msg);
}
// printMe("Zdraveite kolegi!");
// Return Type
function getFullName(fN, lN) {
    if (lN) {
        return `${fN} ${lN}`;
    }
    return fN;
}
const fName = getFullName("Ivan", "Peshov");
// Return Types 2
const sum = (a, b = 5000) => a + b;
// console.log(sum(123));
// DEMO
const intCollect = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach((int) => {
    debugger;
    console.log(int);
});
//# sourceMappingURL=main.js.map