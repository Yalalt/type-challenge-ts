interface ToDo {
    title: string;
    description: string;
}

// Test: type of solve
type MyReadonly<T> = {
    readonly [Field in keyof T]: T[Field]
}

const todo: MyReadonly<ToDo> = {
    title: "Hey Hello!",
    description: "Description footnote"
}
// Testing
// todo.title = "Hello hello"; // Error: readonly
// todo.description = "barFoo"; // Error: readonly
