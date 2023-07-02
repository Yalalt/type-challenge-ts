// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

//Solve
// Umit = "description" | "title"
// for i=t|d|c in T as 
//  if args[i] == Umit then never else args[i]=K
type MyOmit<T, Umit extends keyof T> = {
  [K in keyof T as K extends Umit ? never : K]: T[K];
};

type TodoPreview1 = MyOmit<Todo, "description" | "title">;

const todo1: TodoPreview1 = {
  completed: false,
};
