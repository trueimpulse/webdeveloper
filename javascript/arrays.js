// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

//Solution:
//1.
// array.shift();
// console.log(array);

//2.
//console.log(array.sort());

//3.
// array.push("Kiwi");
// console.log(array);

//4.
// array.splice(1, 1);
// console.log(array);

//5.
//console.log(array.reverse());

console.log(array2[1][1]);
