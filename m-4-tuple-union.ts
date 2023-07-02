// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

type Arr = ["1", "2", "3"];

//solve
type TupleToUnion<T> = T extends Array<infer InnerElem> ? InnerElem : never;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

let MyTestArr: Test = "1";
// @ts-expect-error
let MyTestError: Test = "4";
