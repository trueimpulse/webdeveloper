//Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const person = {
  username: "Brand New User",
  password: "test123",
};

const database = [person];

const newsfeed = [
  { username: "First Username", timeline: "Getting started" },
  { username: "Second Username", timeline: "Almost there" },
  { username: "Third Username", timeline: "Finishline" },
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === person.username && pass === person.password) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong login");
  }
}

signIn(userNamePrompt, passwordPrompt);
