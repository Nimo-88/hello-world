'use strict';
console.log("I am in the HTML");
alert("Welcome to my page");

const theirName = getName();
console.log(theirName);

function getName() {
  const usersName = prompt("What is your name?");
  return usersName;
}

function specialMessage(usersName) {
  if (usersName === "Kassie") {
    alert("Hi Kassie");
  } else {
    alert("Good to have you here");
  }
}

function greetUser(usersName) {
  document.write("Hi " + usersName + " welcome to my self-love page!");
}

const usersName = theirName;
greetUser(usersName);

function askAboutSelfLove() {
  const question = prompt("What's one thing you love about yourself?");
  if (question === "") {
    alert("Take your time to think about it");
  }
}

askAboutSelfLove();
