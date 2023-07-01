type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = [3];

// Test solve 1
type First<T extends any[]> = T extends (string | number)[] ? T[0] : never;

// Test solve 2
type First2<T extends (string | number)[]> = T extends [infer P, ...(string | number)[]] ? P : never;

// test solve 3
type First3<T extends any[]> = T['length'] extends 0 ? never : T[0]

type head1 = First<arr1> // expected to be "a"
type head2 = First<arr2> // expected to be 3

type head3 = First2<arr1> // expected to be "a"
type head4 = First2<arr2> // expected to be 3

type head5 = First3<arr1> // expected to be "a"
type head6 = First3<arr3> // expected to be 3