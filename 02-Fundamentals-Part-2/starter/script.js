"use strict";
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :-)");

const interface = "Audio";
const private = 534;

const day = "tuesday";

switch (day) {
  case "monday":
    console.log("it's monday");
    break;
  default:
    console.log("it's not Monday");
}

const yourName = prompt("What is my name?");
function logger() {
  console.log(`My name is ${yourName}`);
}

// calling, running, or evoking a function

logger();
logger();
logger();


function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

console.log(foodProcessor(5, 0));

const appleOrangeJuice = foodProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge(1991);
console.log(age1);
//const age2 = calcAge(Number(prompt("what year were you born?")));
//console.log(age2);



const age3 = calcAge2(2022);
console.log(age1, age3);


// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//function arrow
*/
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearsUntilRetirement(1991));
