class Animal {
  @validateParams
  eat(arg1: string, arg2?: number) {
    console.log(`Received params: ${arg1}, ${arg2}`);
  }
}

function validateParams(
  target: Function,
  context: ClassMethodDecoratorContext
) {
  // Function's scope
  return function (...args: any) {
    args.forEach((arg, index) => {
      if (arg === undefined || arg === null) {
        const msg = `Parameter at position ${
          index + 1
        } is invalid! Parameter's value is: ${arg}`;
        throw new Error(msg);
      }
    });

    if (args.length < 2) {
      const msg = "Parameters must be 2!";
      throw new Error(msg);
    }

    target.apply(this, args);
  };
}

const animal = new Animal();
animal.eat("meat", 123);
