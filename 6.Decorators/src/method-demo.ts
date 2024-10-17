const multiplyBy10 = (num: number) => num * 10;

class Programmer {
  budget: number = 900;

  @withBudget(multiplyBy10(5))
  writeTest() {
    console.log(`MSG: Writing tests is important job!`);
  }

  @withBudget(multiplyBy10(50))
  fixBugInProduction() {
    console.log("Fixing bugs in production is expensive!");
  }
}

const p = new Programmer();
p.writeTest();
p.fixBugInProduction();
console.log(p.budget);

// Decorator
function withBudget<T extends { budget: number }>(budgetAmount: number) {
  // Connection between class and function
  return function (target: Function, context: ClassMethodDecoratorContext) {
    // Function scope
    return function (...args: any) {
      const instance = this as T; //  T -> our class

      if (instance.budget > budgetAmount) {
        instance.budget -= budgetAmount;
        // How to invoke method from here?
        target.apply(instance, args); // !Important: calls our method!
      } else {
        console.log(
          `Insufficient funds for ${context.name.toString()} operation. Required addition ${
            budgetAmount - instance.budget
          }!`
        );
      }
    };
  };
}
