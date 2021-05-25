// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let outputArr = [];
// const newArr = array.forEach((obj) => {
//   outputArr.push(obj.username + "!");
// });
// console.log(outputArr);

//Create an array using map that has all the usernames with a "? to each of the usernames
// const newArr = array.map((obj) => {
//   return obj.username + "?";
// });
// console.log(newArr);

//Filter the array to only include users who are on team: red
// const outputArr = array.filter((obj) => obj.team === "red");
// console.log(outputArr);

//Find out the total score of all users using reduce
// const total = array.reduce((acc, obj) => {
//   return acc + obj.score;
// }, 0);
// console.log(total);

// (1), what is the value of i?
//Answer:
//The index number of the array
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });
//Answer:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   return num * 2;
// });
// console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//MY Answer:
// const newArray = array.map((obj, i) => {
//   return obj.items[i] + "!";
// });
// console.log(newArray);
//CORRECT ANSWER:
const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);

//^^ map within map!! Pretty cool.
