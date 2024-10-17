import { AnimalGroup } from "./library";

export namespace CarGroup {
  export interface CarType {
    make: string;
    year?: string;
  }

  export class Car implements CarType {
    make: string;
    year?: string;

    constructor(make: string, year?: string) {
      this.make = make;
      this.year = year;
    }
  }

  export namespace Engline {
    export namespace OilService {
      export const check = true;
    }
  }
}

/// <reference path="library.ts"/>
const animal1 = new AnimalGroup.Animal("xxxx");
const bmw = new CarGroup.Car("BMW", "1999");
