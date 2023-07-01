type ExampleType = Promise<string>

// Get type from Promise object
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type Result = MyAwaited<ExampleType> // string