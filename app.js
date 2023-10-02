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
  if (usersName === "Nimo") {
    alert("Hi Nimo");
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
    alert("thank you for anwsing the question!");
  }
}

let response = prompt('Guess my favorite workout day?');
while (response !== 'saturday'){
response = prompt('wrong! try again.')
} 


askAboutSelfLove();


function workouts(){
  let workouts = prompt("How many hours do you exercise a week? 1-10");

  for (let i = 0; i < workouts; i++) {
    document.write('<img src="fitness.jpg" alt="Gym workouts" />');
  }
}