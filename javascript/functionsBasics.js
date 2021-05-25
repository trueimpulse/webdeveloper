const first = () => {
  const greet = "Hi";
  const sound = () => {
    console.log(greet);
  };
  return sound();
};

const newFunc = first;
newFunc();

//Currying:
//It is the process of converting a function that takes in multiple arguments, into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose:
//It is the act of putting 2 functions together, to form a third function. Where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

/*
How it works:
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

^^ a = 5;
const compose = (f, g) => (a) => f(g(5));
g = sum, which is equal to num + 1, num = 5;
f(1 + 5) = f(6)
f = sum, which is equal to num + 1;
f(6) = 7
7 = answer
*/

// Avoiding side effects, functional purity.
let a = 1;
function b() {
  a = 2;
}
