type Level = "low" | "medium" | "hard";

type Task = {
  name: string;
  level: Level;
};

class Employee {
  @withTask({ name: "Basic task", level: "low" })
  tasks: Task[] = [];

  @withComplicatedTask()
  extraTasks: Task[] = [];
}

const emp = new Employee();
console.log(emp);

function withTask(inputTask: Task) {
  // Field's scope
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
  ) {
    return function (fieldValue: V) {
      fieldValue.push(inputTask);
      return fieldValue;
    };
  };
}

function withComplicatedTask() {
  return withTask({ name: "Super complex task!", level: "hard" });
}
