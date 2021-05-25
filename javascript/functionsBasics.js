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
//It is the process of converting a function that takes in multiple arguments into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose:
//It is the act of putting 2 functions together, to form a third function. Where the output of one function is the input of the other
