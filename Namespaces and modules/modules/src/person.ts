import { PersonDetials } from "./types/person";

export default class Person implements PersonDetials {
  name: string;
  age: number;
  favouriteTvShow: string;
  constructor(name: string, age: number) {
    this.name;
    this.age = age;
    this.favouriteTvShow = "Simpsons";
  }

  getDetails() {
    return this.name + " <> " + this.age;
  }
}
