//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = (x) => (y) => x + y;
var addToTen = addTo(10);
addToTen(3);
//Answer:
//13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);
//Answer:
//31

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12);
//Answer:
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
//f(g(10))
//f(add5)
//f(15)
//16

const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);
//Answer:
//16

//What are the two elements of a pure function?
//Answer:
//No side-effects, output is always predictable.
// Andrei's detailed response:
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
