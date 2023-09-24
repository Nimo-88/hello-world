'use strict';

console.log("Iam in the HTML");
alert("welcome to my page");

const userName = prompt("what is your name")
console.log(userName);



document.write("Hi Welcome to my Self Love page!");


 
 if((10 == 10) && ( 4==2)){
   console.log("true");
 } else {
   console.log("false");
 }



 function greeting (time){
  if (time < 20){
   return "Good Morning";
  } else if (time <=30){
   return  "Good Evening"; 
  } else {
   return "Good Night"
  }
 }  

 console.log(greeting(24));