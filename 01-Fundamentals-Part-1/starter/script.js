/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

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
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
*/
/*
// Math Operators
const now = 2037;
const ageJonas = now - 1991; // 1991 is the year Jonas was born = 46
const ageSarah = now - 2018; // 2018 is the year Sarah was born = 19
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schemdtmann';
console.log(firstName + ' ' + lastName);
// ' ' is a space

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x - 1 = 100
x--;// x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18; // true

console.log(now - 1991 > now - 2018);// 46 > 19;
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)
*/

/*
const age = 19;
const isOldEnough = age >= 18;

// if/else = control structure
if (isOldEnough) {
    console.log('Sarah can start driving license 🚗'); 
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); // 20
*/

/*
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 '1991' / blue is a number, white is a string
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // NaN = Not a Number
console.log(typeof NaN); // number

console.log(String(23), 23);// white space is a string / purple is a number

// Type coercion
console.log('I am ' + 23 + ' years old'); // I am 23 years old
console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // 23103 / concatenation
console.log('23' * '2'); // 46

let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n); // 10
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if (money) { // value in brackets is converted to a boolean
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
} // You should get a job! / 0 is a falsy value

let height; // undefined
if (height) { // undefined is a falsy value
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} // Height is UNDEFINED
*/

/*
// Equality operators: == vs. ===
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)'); // strict equality operator

if (age == 18) console.log('You just became an adult :D (loose)'); // loose equality operator

const favourite = Number(prompt('What is your favorite number?')); // prompt is a function that shows a dialog box to the user
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 is a number
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?'); // !== not equal to / strict inequality operator
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision; // true

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired); // false
console.log(hasDriversLicense || hasGoodVision || isTired); // true

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
} // Sarah is able to drive!
*/

/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // without break, the code will continue to run
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
*/

/*
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') :
    console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20; // 20% tip if bill is between 50 and 300, otherwise 15%
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);