const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any) => any> = T extends (...any: infer S) => void ? S : any;

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type gff = typeof foo;