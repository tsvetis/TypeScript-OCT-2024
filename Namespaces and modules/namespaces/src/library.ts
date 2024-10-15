import { CarGroup } from "./main";

export namespace AnimalGroup {
  export const x = 123;
  export function z() {}
  export interface AnimalType {
    name: string;
  }

  export class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}

export namespace StudentsGroup {
  export class Student {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}

// const animalGosho = new AnimalGroup.Animal("Gosho");
// console.log(animalGosho);

// import check = CarGroup.Engline.OilService.check;
