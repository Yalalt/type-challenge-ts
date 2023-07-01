// Solve
type If<TCheck extends boolean, A, B> = TCheck extends true ? A : B;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
type C = If<true, "a" | "b", "c" | "d">; // expected to be "a" | "b"
