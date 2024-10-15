import { PersonDetials } from "../types/person";

export const getAvgAge = (persons: PersonDetials[]): number => {
  let sum = 0;
  persons.forEach((p) => {
    sum += p.age;
  });

  return sum / persons.length;
};
