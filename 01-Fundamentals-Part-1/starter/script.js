/*
const country = "Northern Ireland";
let continent = "Europe";
let population = 2;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "English";

console.log(
  "if my country was split in half the population would be " +
    population / 2 +
    " million"
);

console.log(country + "has more people than finland=" + population > 6);
console.log(
  country + "has more people than the average country= " + population > 33
);

const description1 =
  country +
  "is in" +
  continent +
  "and has a population of " +
  population +
  " million." +
  " We speak " +
  language;

console.log(description1);

let myFirstJob = "Consultant";
let myCurrentJob = "Senior SRE";

let job1 = "programmer";
let job2 = "teacher";


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 15);
console.log(typeof "Haha");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992;
//const job;

var job = "programmer";
job = "teacher";


//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 x 2 x 2

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4;
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("They are old enough to drive 😁");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤪`);
}


const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀



const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
let highestBMI;

if (BMIMark > BMIJohn) {
  highestBMI = `Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`;
} else {
  highestBMI = `John's BMI${BMIJohn} is higher than Mark's BMI ${BMIMark}`;
}
console.log(highestBMI);

//Type conversion
const inPutYear = "1991";
console.log(Number(inPutYear) + 18);

//Type coercion
//const outPutLog = `I am born in ${1991}`;
//console.log(outPutLog);
let n = "1" + 1;
n = n - 1;
console.log(n);
//Adds string to number but does not add. then n -1 is subtracting from 11.
const you = 7;
const me = 5;
let answer;
if (you > me) {
  answer = "I am bigger than you";
} else {
  answer = "You are bigger than me";
}
console.log(answer);

//falsy values are 0, "", undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Scott"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("You should save your money");
} else {
  console.log("You should get a job");
}

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
  console.log("23 is a great number");
} else if (favourite == 7) {
  console.log("7 is also a cool number");
} else {
  console.log("I don't like this number");
}

const age = Number(prompt("What age are you?"));
if (age === 18) {
  console.log("You are now old enough to drink!");
} else if (age < 18) {
  console.log("You are not old enough to drink!");
} else {
  console.log("You have been able to drink for a while!");
}

const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah can drive");
} else {
  console.log("Someone else should drive");
}

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 123) / 3;
console.log(`Dolphins average score is ${dolphinsScore}`);
console.log(`Koalas average score is ${koalasScore}`);

if (dolphinsScore && koalasScore < 100) {
  console.log("Not enough points to win the game");
} else if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("The Dolphins have won");
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log("The Koalas have won");
} else if (dolphinsScore == koalasScore) {
  console.log("The game is a draw");
}

const day = "monday";

switch (day) {
  case "monday":
    console.log("Get up early");
    console.log("Go to gym");
    break;
  case "tuesday":
    console.log("Mandarin class");
    console.log("Make sure to practice before the evening");
    break;
  case "wednesday":
  case "thursday":
    console.log("Reliability squad training");
    break;
  case "friday":
    console.log("Last day before Weekend!");
    console.log("Get everything done so you can relax");
    break;
  case "saturday":
    console.log("Go for coffee with Lisa");
    break;
  case "sunday":
    console.log("Day of rest. Get shopping done");
    break;
  default:
    console.log("Not a valid day. Please try again");
}


const day = prompt("What day is it today?");

if (day === "monday") {
  console.log("Get up early");
  console.log("Go to gym");
} else if (day === "tuesday") {
  console.log("Mandarin class");
  console.log("Make sure to practice before the evening");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Reliability squad training");
} else if (day === "friday") {
  console.log("Last day before Weekend!");
  console.log("Get everything done so you can relax");
} else if (day === "saturday") {
  console.log("Go for coffee with Lisa");
} else if (day === "sunday") {
  console.log("Day of rest. Get shopping done");
} else console.log("input is not valid. Please try again");





const age = Number(prompt("What age are you?"));
const drink = age >= 18 ? "Wine 🍷" : "Water 💦";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Water 💦"}`);

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
const bill = Number(prompt("How much is the bill?"));
console.log(`I need to tip ${bill >= 50 && bill <= 300 ? "15%" : "20%"}`);
const totalBill =
  bill >= 50 && bill <= 300
    ? `Total bill is ${bill * 1.15}`
    : `Total bill is ${bill * 1.2}`;
console.log(totalBill);
const totalTip =
  bill >= 50 && bill <= 300
    ? `Total tip is ${(bill * 15) / 100}`
    : `Total tip is ${(bill * 20) / 100}`;
console.log(totalTip);
