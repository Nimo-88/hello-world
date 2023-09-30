'use strict';
console.log("I am in the HTML");
alert("Welcome to my page");

const theirName = getName();
console.log (theirName);

function getName(){
const usersName = prompt("What is your name?");
return usersName;
}

function specialMessage(usersName){
if (usersName === "Kassie"){
    alert("Hi Kassie");
} else {
    alert("Good to have you here");
}
}

function greetUser(){
document.write("Hi " + usersName + " welcome to my self love my page!");
} 

function askAboutSelfLove(usersName){
const question = prompt("What's one thing you love about yourself?");
if (question==""){
  alert("take your time to thing about it");

}
}

