/** Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false. */
// Solve
// Recursive call Includes<Bal, Case> R - arr balance
type Includes<T extends readonly any[], Case> = T extends [infer L, ...infer R] ? [Case, L] extends [L, Case] ? true : Includes<R, Case> : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Duo', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`