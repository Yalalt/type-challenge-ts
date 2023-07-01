interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// MyPick is test
type MyPick<T, U extends keyof T> = {
    [K in U]: T[K]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
}