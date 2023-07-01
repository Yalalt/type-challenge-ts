import { Equal, Expect } from "@type-challenges/utils";

/** Code here */
type TupleToObject<T extends readonly PropertyKey[]> = {
  [KeyValue in T[number]]: KeyValue;
};

/** type TupleToObject<T extends readonly (string | number)[]> = {
  [Key in T[number]]: Key;
}; */

type ArrayMember = (typeof tuple)[number];

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4, 5] as const;
const tupleMix = [1, "2", 3, "4", 5] as const;

// Case check [true, true, true]
type caseCheck = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<
    Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4; 5: 5 }>
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleMix>,
      { 1: 1; "2": "2"; 3: 3; "4": "4"; 5: 5 }
    >
  >
];

type result = TupleToObject<typeof tuple>;

// @ts-expect-error
type errorCheck = TupleToObject<[[1, 2], {}]>;

/** result
 * expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'} */
