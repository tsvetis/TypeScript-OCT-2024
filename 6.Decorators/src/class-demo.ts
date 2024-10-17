@withEmployementDatePrototype
@withEmployementDate
@printData
class Manager {
  task: string = "Simple Task";
  project: string = "Simple Project";

  constructor(name: string) {
    // console.log("Manager[constructor] was invoked!");
  }
}

const manager = new Manager("Pesho");
console.log(manager);
console.log(manager.constructor.prototype);

// Decorator 3 -> adds properties to prototype
function withEmployementDatePrototype(
  value: Function,
  context: ClassDecoratorContext
) {
  //   console.log("[withEmployementDatePrototype] was invoked!");
  value.prototype.employmentDate = new Date();
}

// Decorator 2 -> Extends and changes the base class
type Args = { new (...arg: any[]): {} };

function withEmployementDate<T extends Args>(
  baseClass: T,
  context: ClassDecoratorContext
) {
  console.log("[withEmployementDate] was invoked!");
  return class extends baseClass {
    employmentDate = new Date().toISOString();

    constructor(...args: any[]) {
      super(...args);

      console.log(
        `Added employement date property to ${baseClass.name} class! These are the args: ${args}`
      );
    }
  };
}

// Decorator 1 -> prints meta data
function printData(value: Function, context: ClassDecoratorContext) {
  //   console.log("[printData] was invoked!");
  context.addInitializer(() => {
    console.log(`Class with a name ${context.name} has been initalized!`);
  });
}
