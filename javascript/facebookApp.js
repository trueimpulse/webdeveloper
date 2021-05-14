//Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const database = [
  {
    username: "Sally",
    password: "123",
  },
  {
    username: "Brandon",
    password: "test",
  },
  {
    username: "Brad",
    password: "test123",
  },
];

const newsfeed = [
  { username: "First Username", timeline: "Getting started" },
  { username: "Second Username", timeline: "Almost there" },
  { username: "Third Username", timeline: "Finishline" },
];

function isUserValid(userName, passWord) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === userName &&
      database[i].password === passWord
    ) {
      return true;
    }
  }
  // if (user === person.username && pass === person.password) {
  //   console.log(newsfeed);
  // } else {
  //   alert("Sorry, wrong login");
  // }
  return false;
}

function signIn(userName, passWord) {
  if (isUserValid(userName, passWord)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password");
  }
}

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);
