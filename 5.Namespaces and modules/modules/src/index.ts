// import { x123, Pokemon as Zzzz } from "./module-1";
// console.log(x123);
// console.log(Zzzz());

import Person from "./person";
import { getAvgAge } from "./utils/person";

const ivan = new Person("Ivan", 44);
const mira = new Person("Mira", 11);
const yoni = new Person("Yoni", 2);
const yogi = new Person("Yogi", 77);
const kiro = new Person("Kiro", 40);

const avgAge = getAvgAge([ivan, mira, yoni, yogi, kiro]);
console.log("avg age of people is: " + avgAge);
