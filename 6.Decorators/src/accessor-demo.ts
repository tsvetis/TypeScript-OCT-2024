class Person {
  @watchChanges
  // this is auto-accessor -> auto-generates getter and setter for our class's property
  accessor project: string = "Simple Project";
}

const person = new Person();
console.log(person.project);
person.project = "Important project!";
console.log(person.project);

type Accessor<T, V> = {
  get: (this: T) => V;
  set: (this: T, value: V) => void;
};

function watchChanges<T, V>(
  accessor: Accessor<T, V>,
  context: ClassAccessorDecoratorContext
) {
  return {
    get: function (this: T) {
      console.log("Getter invoked!");
      return accessor.get.call(this);
    },
    set: function (this: T, value: V) {
      console.log("Setter invoked!");
      accessor.set.call(this, value);
    },
  };
}
