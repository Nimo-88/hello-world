'use strict';

console.log("I am in the HTML");
alert("Welcome to my page");


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

