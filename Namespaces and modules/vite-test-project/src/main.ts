import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
     <h1> Hello Vite </h1>
  </div>
`;

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Mitko");
console.log(p.name);

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
