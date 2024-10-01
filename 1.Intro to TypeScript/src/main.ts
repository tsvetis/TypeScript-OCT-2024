// String
let str: string = "hello";
str = "Zdrasti";
str = `Hi ${123 * 213}!`;

// Number
let num: number = 123;
num = 123.123;
num = 10001101;
num = 7e3;

// Boolean
let isBool: boolean = true;
isBool = false;
isBool = 1000 > 0;
const nums: number[] = [1, 2, 3, 4];

// Symbol
// const symb1: Symbol = Symbol("123");
// console.log(symb1);

// Null
let obj: number | null = null;
obj = 123;

// Undefined
let variable: undefined;

// Arrays
const arr: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [1, 2, 3, 4];
const arr3: string[] = ["a", "b", "c"];
const arr4: boolean[] = [true, false, true];

// Tuple Object.entries
let tuple: [string, number] = ["age", 23];
// tuple = [123, 'age']

// Enum
enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
}

function tellMeIfIsMonday(day: number) {
  return DaysOfWeek.Monday === day;
}

// Any
let x: any = 5;
x = [1, 2, 3];
x = true;
x = { name: "Peshi" };

// Unknown
let y: unknown = 5;
y = [3, 4, 5];
y = false;

// Void
function printMe(msg: string): void {
  console.log(msg);
}

// printMe("Zdraveite kolegi!");

// Return Type
function getFullName(fN: string, lN?: string): string {
  if (lN) {
    return `${fN} ${lN}`;
  }
  return fN;
}

const fName = getFullName("Ivan", "Peshov");

// Return Types 2
const sum = (a: number, b = 5000): number => a + b;
// console.log(sum(123));

// DEMO
const intCollect: number[] = [1, 2, 3, 4, 5, 6, 7];
intCollect.forEach((int) => {
  console.log(int);
});
