'use strict';

// 135 Default Parameters
/*
const bookings = []; // const flight = 'LH234';

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 default values
  // numPassengers = numPassengers || 1;
  // price = price || 199 * numPassengers;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
// createBooking('LH123', , 1000); // This will not work, as the second parameter is missing

createBooking('LH123', undefined, 1000);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 136 How Passing Arguments Works: Value vs Reference
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, jonas); // This will not work as expected, because the flightNum is passed by value and the passenger object is passed by reference
// console.log(flight); // LH234 was not changed
// console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 123456789 }

// is the same as doing this:
// const flightNum = flight; // This creates a new variable flightNum and assigns it the value of flight, which is 'LH234'
// const passenger = jonas; // This creates a new variable passenger and assigns it the reference to the jonas object

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas); // This will change the passport number of the jonas object, because the person variable is a reference to the jonas object
checkIn(flight, jonas); // This will not work as expected, because the passport number was changed
console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 123456789 } // This will not work as expected, because the passport number was changed
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 138 Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // This will work as expected, because the upperFirstWord function is passed as a callback function
transformer('JavaScript is the best!', oneWord); // This will work as expected, because the oneWord function is passed as a callback function

// JS uses callback functions all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5); // This will work as expected, because the high5 function is passed as a callback function
['Jonas', 'Martha', 'Adam'].forEach(high5); // This will work as expected, because the high5 function is passed as a callback function
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 139 Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey'); // This will work as expected, because the greet function returns a function that takes a name parameter
greeterHey('Jonas'); // This will work as expected, because the greeterHey function is called with the name parameter
greeterHey('Steven'); // This will work as expected, because the greeterHey function is called with the name parameter

greet('Hello')('Jonas'); // This will work as expected, because the greet function is called with the greeting parameter and the returned function is called with the name parameter

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`); // This will work as expected, because the greetArr function returns a function that takes a name parameter
greetArr('Hi')('Jonas'); // This will work as expected, because the greetArr function is called with the greeting parameter and the returned function is called with the name parameter
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 140 The Call and Apply Methods
/*
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // This will work as expected, because the call method is used to call the book function with the swiss object as the this value and the flightData array as the arguments
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 141 The bind Method
// Bind Method: The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It allows you to create a new function with a specific this context and pre-defined arguments.
// book.call(eurowings, 23, 'Sarah Williams'); // This will work as expected, because the call method is used to call the book function with the eurowings object as the this value and the flight number and name as the arguments
/*
const bookEW = book.bind(eurowings); // This will work as expected, because the bind method is used to create a new function that has the this value set to the eurowings object
const bookLH = book.bind(lufthansa); // This will work as expected, because the bind method is used to create a new function that has the this value set to the lufthansa object
const bookLX = book.bind(swiss); // This will work as expected, because the bind method is used to create a new function that has the this value set to the swiss object

bookEW(23, 'Steven Williams'); // This will work as expected, because the bookEW function is called with the flight number and name as the arguments

const bookEW23 = book.bind(eurowings, 23); // This will work as expected, because the bind method is used to create a new function that has the this value set to the eurowings object and the flight number set to 23
bookEW23('Jonas Schmedtmann'); // This will work as expected, because the bookEW23 function is called with the name as the argument
bookEW23('Martha Cooper'); // This will work as expected, because the bookEW23 function is called with the name as the argument

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // This will work as expected, because the buyPlane function is called with the lufthansa object as the this value
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane(); // This will work as expected, because the buyPlane function is called with the lufthansa object as the this value

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // This will work as expected, because the bind method is used to create a new function that has the this value set to the lufthansa object

// Partial Application
const addTax = (rate, value) => value + value * rate; // This will work as expected, because the addTax function is called with the rate and value as the arguments
console.log(addTax(0.1, 200)); // This will work as expected, because the addTax function is called with the rate and value as the arguments

const addVAT = addTax.bind(null, 0.23); // This will work as expected, because the bind method is used to create a new function that has the rate set to 0.23 and the value as the argument
// addVat = value => value + value * 0.23; // This will work as expected, because the addVat function is called with the value as the argument

console.log(addVAT(100)); // This will work as expected, because the addVAT function is called with the value as the argument
console.log(addVAT(23)); // This will work as expected, because the addVAT function is called with the value as the argument

//Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23); // This will work as expected, because the addTaxRate function is called with the rate as the argument and the returned function is called with the value as the argument
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 142 Challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    // Register answer
    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    } else {
      console.log('Invalid input!');
    }

    // Display results
    this.displayResults();
    this.displayResults('string'); // This will work as expected, because the displayResults function is called with the type as the argument
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); // This will work as expected, because the registerNewAnswer function is called with the poll object as the this value
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // This will work as expected, because the displayResults function is called with the object that has the answers property and the type as the argument
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 143 Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 144 Closures
/*
const secureBooking = function () {
  let passengerCount = 0; // This is a private variable that is not accessible from the outside

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // This will work as expected, because the secureBooking function returns a function that has access to the passengerCount variable
booker(); // This will work as expected, because the booker function is called and the passengerCount variable is incremented by 1
booker(); // This will work as expected, because the booker function is called and the passengerCount variable is incremented by 1
booker(); // This will work as expected, because the booker function is called and the passengerCount variable is incremented by 1

console.dir(booker); // This will work as expected, because the booker function is logged to the console and the closure is displayed
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 145 More Closures
/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // This will work as expected, because the g function is called and the f variable is assigned a function that has access to the a variable
f(); // This will work as expected, because the f function is called and the a variable is logged to the console
console.dir(f); // This will work as expected, because the f function is logged to the console and the closure is displayed

// Re-assigning f function
h(); // This will work as expected, because the h function is called and the f variable is assigned a function that has access to the b variable
f(); // This will work as expected, because the f function is called and the b variable is logged to the console
console.dir(f); // This will work as expected, because the f function is logged to the console and the closure is displayed

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(
      `We are now boarding all ${n} passengers. Each group of ${perGroup} will board in ${wait} seconds!`
    );
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // This will work as expected, because the perGroup variable is declared in the global scope and is accessible from the boardPassengers function
boardPassengers(180, 3); // This will work as expected, because the boardPassengers function is called with the n and wait parameters
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 146 Challenge 2
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'; // This will work as expected, because the header variable is declared in the IIFE and is accessible from the event listener function
  });
})(); // This will work as expected, because the IIFE is called and the header variable is assigned the h1 element
*/
