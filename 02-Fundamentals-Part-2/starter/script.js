"use strict";

// const howManyBurps = prompt("How many burps have you done?");

// function burp() {
//   console.log(`I have done ${howManyBurps} burps today`);
// }

// burp();

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

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(`I can retire in ${yearsUntilRetirement(1991)} years`);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Scott"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(foodProcessor(4, 2));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1970, "Scott"));

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins have won. ${scoreDolphins} vs ${scoreKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas have won. ${scoreKoalas} vs ${scoreDolphins}`);
  } else {
    console.log(
      `No one has won. Dolphins - ${scoreDolphins} and Koalas - ${scoreKoalas}`
    );
  }
};

checkWinner(scoreDolphins, scoreKoalas);
// */
// const friends = ["Michael", "Peter", "John"];
// console.log(friends);

// const years = new Array(1991, 1998, 2002, 2022);
// console.log(friends[friends.length - 3]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// const bastards = new Array("Jimmy", "Michael", "Gerry");

// console.log(bastards);

// console.log(bastards.length);

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [25, 40, 35, 60, 37];

// console.log(calcAge(years[2]));

// const bastards = new Array("Jimmy", "Michael", "Gerry");
// bastards.push("Ham");
// bastards.unshift("Bazz");
// bastards.pop();
// console.log(bastards.indexOf("Bazz"));

// const scott = {
//   firstName: "Scott",
//   lastName: "Alexander",
//   job: "cuckold",
//   birthYear: 1991,
//   hasDriversLicence: true,
//   age: function () {
//     return this.age - this.birthYear;
//   },

//   getSummary: function () {
//     return `I am ${this.firstName} ${this.lastName}. I am a ${
//       this.job
//     } and I am ${this.age}. I have ${
//       this.hasDriversLicence ? "a" : "no"
//     } drivers licence`;
//   },
// };

// console.log(scott.getSummary());

// const numbers = [15, 25, 45];

// for (let i = 0; i <= numbers.length; i++) {
//   console.log(`I am ${numbers.i}`) < numbers;
// }

let dice = Math.floor(Math.random() * 6);
console.log(dice);
