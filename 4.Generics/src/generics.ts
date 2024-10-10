const getParamNumber = (param: number): string => {
  return `Your parameter is of type ${typeof param}!`;
};

const getParamString = (param: string): string => {
  return `Your parameter is of type ${typeof param}!`;
};

const getParamObj = (param: object): string => {
  return `Your parameter is of type ${typeof param}!`;
};

// const getParamInfo = (param: number | string | object): string => {
//   return `Your parameter is of type ${typeof param}!`;
// };

// EXPRESSION
// const paramInfo = <T>(param: T): string => {
//   return `Your parameter is of type ${typeof param}!`;
// };

// DECLARATION
// function paramInfo<T>(param: T): string {
//   return `Your parameter is of type ${typeof param}!`;
// }

// console.log(paramInfo(10));
// console.log(paramInfo("Hello"));
// console.log(paramInfo({ name: "Pesho" }));

// const addId = <T extends object>(obj: T) => {
//   return {
//     ...obj,
//     id: Math.round(Math.random() * 100),
//   };
// };

// const person = { name: "Mitko", age: 23 };
// const personWithId = addId(person);
// const personWithId2 = addId("Hello");

// TODO:  type ProcessedValue<T> = T extends string ? string : number;

// const takeLast = <T>(array: T[]): T => {
//   return array.pop();
// };

// const lastNum = takeLast([1, 2, 3, 4]);
// const lastStr = takeLast(["a", "b", "c"]);
// const lastBool = takeLast([true, false, true]);

// const makeTuple = <T, V>(a: T, b: V): (T | V)[] => {
//   return [a, b];
// };
// const tuple1 = makeTuple("zdr", 123);
// const tuple2 = makeTuple(true, "123");

// interface GenericConstructor<T, V, Z> {
//   (arg: T, param: V, param2: Z): [T, V, Z];
// }

// type GenericConstructor<T, V, Z> = (arg: T, param: V, param2: Z) => [T, V, Z];

// const generatedFn: GenericConstructor<string, number, boolean> = <T, V, Z>(
//   arg: T,
//   param: V,
//   param2: Z
// ) => {
//   return [arg, param, param2];
// };

// console.log(generatedFn("Hello", 123, false));

// interface Resource<T> {
//   id: number;
//   name: string;
//   data: T;
// }

// const documentTree: Resource<object> = {
//   id: 1,
//   name: "Document Tree",
//   data: { name: "something" },
// };

// const x: Resource<number> = {
//   id: 1,
//   name: "Document Tree",
//   data: 123,
// };

// const x2: Resource<boolean> = {
//   id: 1,
//   name: "Document Tree",
//   data: true,
// };

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// const x3: Resource<Person[]> = {
//   id: 1,
//   name: "Document Tree",
//   data: [
//     {
//       name: "Mitko",
//       age: 21,
//       address: "BG",
//     },
//     {
//       name: "Mitko2",
//       age: 41,
//       address: "US",
//     },
//   ],
// };

// class Collection<T> {
//   data: T[];

//   constructor(inputData: T[]) {
//     this.data = inputData;
//   }

//   addElement(elem: T) {
//     this.data.push(elem);
//   }

//   removeElement(elem: T) {
//     const index = this.data.indexOf(elem);

//     if (index > -1) {
//       this.data.splice(index, 1);
//     }
//   }
// }

// const arrOfNumbers = new Collection([1, 2, 3, 4]);
// arrOfNumbers.addElement(55);
// arrOfNumbers.addElement(-83);
// arrOfNumbers.removeElement(4);
// console.log(arrOfNumbers.data);

// const arrOfStr = new Collection(["a", "b", "c", "d"]);
// arrOfStr.addElement("Z");
// arrOfStr.addElement("X");
// arrOfStr.removeElement("X");
// console.log(arrOfStr.data);

type FullName = { fName: string; lName: string };

function getFullNameFromAnyObject<T extends FullName>(obj: T): string {
  return `${obj.fName} ${obj.lName}`;
}

const fullName = getFullNameFromAnyObject({
  a21321: 213,
  asdsad: "asdsad",
  fName: "Pesho",
  lName: "Stoyanov",
});
console.log(fullName);
