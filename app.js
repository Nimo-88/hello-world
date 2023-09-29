'use strict';

console.log("I am in the HTML");
alert("Welcome to my page");
const theirName = getName();
myAudience(theirName);

function getName() {
  const userName = prompt("What is your name?");
  return userName;
}

function myAudience(userName) {
  document.write("Hi " + userName + ", welcome to my Self Love page!");
  return;
}

function specialMessage(userName) {
  if (userName === "") {
    userName = prompt("Come on, please tell me your name!");
  }
}

if ((10 === 10) && (4 === 2)) {
  console.log("true");
} else {
  console.log("false");
}

function greeting(time) {
  if (time < 20) {
    return "Good Morning";
  } else if (time <= 30) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

console.log(greeting(24));
