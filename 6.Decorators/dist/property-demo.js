// type Task = {
//   name: string;
//   level: "low" | "medium" | "hard";
// };
// class Employee {
//   @withMoreTasks
//   tasks: Task[] = [];
// }
// const emp1 = new Employee();
// emp1.tasks.push({ name: "Test", level: "low" });
// console.log(emp1);
// const emp2 = new Employee();
// emp2.tasks.push({ name: "Test123", level: "hard" });
// console.log(emp2);
// function withMoreTasks<T, V extends Task[]>(
//   target: null,
//   context: ClassFieldDecoratorContext
// ) {
//   // Field scope | Property scope
//   return function (fieldValue: V) {
//     fieldValue.push({ name: "Go to the gym", level: "medium" });
//     fieldValue.push({ name: "Do your homework", level: "hard" });
//     fieldValue.push({ name: "Pet your cat", level: "low" });
//     return fieldValue;
//   };
// }
