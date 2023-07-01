import { Equal, Expect, NotAny } from "@type-challenges/utils";

// solution
type HelloWorld = string;

// Test = [true, true]
type test = [
    Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>
];
