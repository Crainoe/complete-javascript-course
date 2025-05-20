'use strict';
/*

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods); // Finding common foods between Italian and Mexican cuisines
console.log('Intersection:', commonFoods); // Logging the common foods to the console
console.log([...commonFoods]); // Converting the Set to an array and logging it to the console

const italianMexicanFusion = italianFoods.union(mexicanFoods); // Finding the union of Italian and Mexican cuisines
console.log('Union:', italianMexicanFusion); // Logging the union of Italian and Mexican cuisines to the console

console.log([...new Set([...italianFoods, ...mexicanFoods])]); // Converting the Set to an array and logging it to the console

const uniqueItalianFoods = italianFoods.difference(mexicanFoods); // Finding unique Italian foods
console.log('Unique Italian Foods:', uniqueItalianFoods); // Logging the unique Italian foods to the console

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods); // Finding unique Mexican foods
console.log('Unique Mexican Foods:', uniqueMexicanFoods); // Logging the unique Mexican foods to the console

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods); // Finding unique Italian and Mexican foods
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // Checking if the two sets are disjoint
*/

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  weekdays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // Returns an array with the selected starter and main course
  },

  orderDelivery({ starterIndex, mainIndex, time = '20:00', address }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    ); // Logs the order details to the console
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    ); // Logs the pasta ingredients to the console
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // Logs the main ingredient to the console
    console.log(otherIngredients); // Logs the other ingredients to the console
  },
};

/////////////////////////////////////////////////////////////////////////////////////////
/*
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// console.log(flights);

// Console logging the flights string should be the following:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+')); // Splits the flights string into an array using '+' as the separator

const getCode = str => str.slice(0, 3).toUpperCase(); // Function to get the first three characters of a string and convert them to uppercase

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';'); // Destructuring the flight string into type, from, to, and time
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50); // Formatting the output string
  console.log(output); // Logging the formatted output to the console
}
  */

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea')); // Creating a textarea element and appending it to the body
document.body.append(document.createElement('button')); // Creating a button element and appending it to the body

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value; // Getting the value of the textarea
  const rows = text.split('\n'); // Splitting the text into rows using newline character as the separator

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_'); // Destructuring the row into first and second parts
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`; // Converting the first letter of the second part to uppercase and concatenating it with the first part
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`); // Logging the output to the console
  }
}); // Adding a click event listener to the button
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Working with Strings Part 3
// Split and join
console.log('a+very+nice+string'.split('+')); // Splits the string into an array using '+' as the separator
console.log('Jonas Schmedtmann'.split(' ')); // Splits the string into an array of characters

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); // Destructuring assignment to get first and last name

const newName = ['Mr.', firstName, lastName].join(' '); // Joining the array elements into a string using ' ' as the separator
console.log(newName); // Logs the new name to the console
const capitalizedName = function (name) {
  const names = name.split(' '); // Splits the name into an array of names
  const namesUpper = []; // Array to store capitalized names
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1)); // Capitalizes the first letter of each name and adds it to the array
  }
  console.log(namesUpper.join(' ')); // Joins the capitalized names into a string and logs it to the console
};

capitalizedName('jesssica ann smith davis'); // Calling the function to capitalize the name
capitalizedName('s. j. van vuuren');

// Padding
const message = 'Go to gate 23!'; // Message string
console.log(message.padStart(25, '+')); // Pads the message to the left with '+' until it reaches a length of 25
console.log(message.padEnd(25, '+')); // Pads the message to the right with '+' until it reaches a length of 25

const maskCreditCard = function (number) {
  const str = number + ''; // Converts the number to a string
  const last = str.slice(-4); // Gets the last 4 digits of the credit card number
  return last.padStart(str.length, '*'); // Pads the string with '*' until it reaches the original length and returns the masked credit card number
};

console.log(maskCreditCard(1234567890123456)); // Calling the function with a credit card number

// Repeat
const message2 = 'Bad weather... All Departures Delayed... '; // Message string
console.log(message2.repeat(5)); // Repeats the string 5 times

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`); // Logs the number of planes in line using repeat
};

planesInLine(5); // Calling the function with 5 planes in line
*/

/////////////////////////////////////////////////////////////////////////////////
/*
//Working with Strings Part 2
const airline = 'TAP Air Portugal'; // Airline name

console.log(airline.toLowerCase()); // Logs the airline name in lowercase
console.log(airline.toUpperCase()); // Logs the airline name in uppercase

// Fix capitalization in name
const passenger = 'jOnAs'; // Passenger name
const passengerLower = passenger.toLowerCase(); // Converts the passenger name to lowercase
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // Capitalizes the first letter of the passenger name
console.log(passengerCorrect); // Logs the corrected passenger name to the console

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.IO \n'; // Login email with extra spaces and newline character

// const loweremail = loginEmail.toLowerCase(); // Converts the login email to lowercase
// const trimmedEmail = loweremail.trim(); // Removes extra spaces from the login email

const normalizedEmail = loginEmail.toLowerCase().trim(); // Normalizes the login email by converting to lowercase and trimming spaces
console.log(normalizedEmail); // Logs the normalized login email to the console
console.log(email === normalizedEmail); // Compares the original email with the normalized login email

// replacing
const priceGBP = '288,97£'; // Price in GBP
const priceUSD = priceGBP.replace('£', '$').replace(',', '.'); // Replaces the currency symbol and comma with a dot
console.log(priceUSD); // Logs the price in USD to the console

const announcement =
  'All passengers come to boarding door 23! Boarding door 23!'; // Announcement string

console.log(announcement.replace('door', 'gate')); // Replaces 'door' with 'gate' in the announcement string. Replace is case sensitive
// console.log(announcement.replaceAll('door', 'gate')); // Replaces all 'door' with 'gate' in the announcement string
console.log(announcement.replace(/door/g, 'gate')); // Replaces all 'door' with 'gate' in the announcement string using regex

// Booleans
const plane = 'Airbus A320neo'; // Plane model
console.log(plane.includes('A320')); // Checks if the plane model includes 'A320'
console.log(plane.includes('Boeing')); // Checks if the plane model includes 'Boeing'
console.log(plane.startsWith('Air')); // Checks if the plane model starts with 'A'

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family'); // Logs if the plane model starts with 'Airbus' and ends with 'neo'
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // Converts the items to lowercase
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are NOT allowed on board'); // Logs if the items include 'gun' or 'knife'
  } else {
    console.log('Welcome aboard!'); // Logs if the items do not include 'gun' or 'knife'
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); // Calling the function with items
checkBaggage('Socks and camera'); // Calling the function with items
checkBaggage('Got some snacks and a gun for protection'); // Calling the function with items
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Working with Strings Part 1
const airline = 'TAP Air Portugal'; // Airline name
const plane = 'A320'; // Plane model

console.log(plane[0]); // Logs the first character of the plane model
console.log(plane[1]); // Logs the second character of the plane model
console.log(plane[2]); // Logs the third character of the plane model
console.log('B737'[0]); // Logs the first character of the string 'B737'

console.log(airline.length); // Logs the length of the airline name
console.log('B737'.length); // Logs the length of the string 'B737'

console.log(airline.indexOf('r')); // Logs the index of the first occurrence of 'r' in the airline name
console.log(airline.lastIndexOf('r')); // // Logs the index of the last occurrence of 'r' in the airline name
console.log(airline.lastIndexOf('Portugal')); // Logs the index of the last occurrence of 'Portugal' in the airline name. It is also case sensitive

console.log(airline.slice(4)); // Logs the substring starting from index 4 of the airline name
console.log(airline.slice(4, 7)); // Logs the substring from index 4 to 7 of the airline name.

console.log(airline.slice(0, airline.indexOf(' '))); // Logs the substring from the beginning of the airline name to the first space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Logs the substring from the last space to the end of the airline name. +1 to exclude the space

console.log(airline.slice(-2)); // Logs the last two characters of the airline name
console.log(airline.slice(1, -1)); // Logs the substring from index 1 to the second last character of the airline name

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1); // Gets the last character of the seat string
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat'); // Logs if the seat is a middle seat
  } else {
    console.log('You got lucky'); // Logs if the seat is not a middle seat
  }
};

checkMiddleSeat('11B'); // Calling the function with seat '11B'
checkMiddleSeat('23C'); // Calling the function with seat '23C'
checkMiddleSeat('3E'); // Calling the function with seat '3E'

console.log(new String('Jonas')); // Logs the String object created with 'Jonas'
console.log(typeof new String('Jonas')); // Logs the type of the String object created with 'Jonas'
console.log(typeof new String('Jonas').slice(1)); // Logs the substring of the String object created with 'Jonas'
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
// Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())]; // Using Set to get unique values from the Map
console.log(events); // Logging the unique events to the console

// 2.
// After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64); // Deleting the event with key 64 from the Map

//3.
// Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
); // Calculating the average time between events and logging it to the console
const time = [...gameEvents.keys()].pop(); // Getting the keys (time) from the Map
console.log(time); // Logging the time to the console
console.log(time / gameEvents.size); // Logging the average time between events to the console
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); // Calculating the average time between events and logging it to the console

//4.
// Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//      [FIRST HALF] 17: ⚽️ GOAL

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST HALF' : 'SECOND HALF'; // Checking if the event is in the first or second half
  console.log(`[${half}] ${min}: ${event}`); // Logging the event with the corresponding half to the console
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
/*
// Maps: Fundamentals
const rest = new Map(); // Creating a new Map object
rest.set('name', 'Classico Italiano'); // Setting key-value pairs in the Map
rest.set(1, 'Firenze, Italy'); // Setting key-value pairs in the Map
console.log(rest.set(2, 'Lisbon, Portugal')); // Setting key-value pairs in the Map

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23) // Setting key-value pairs in the Map
  .set(true, 'We are open')
  .set(false, 'We are closed'); // Setting key-value pairs in the Map

console.log(rest.get('name')); // Logging the value associated with the key 'name' in the Map
console.log(rest.get(true)); // Logging the value associated with the key true in the Map
console.log(rest.get(1)); // Logging the value associated with the key 1 in the Map

const time = 21; // Current time
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // Checking if the restaurant is open based on the current time

console.log(rest.has('categories')); // Checking if the key 'categories' exists in the Map
rest.delete(2); // Deleting the key-value pair with key 2 from the Map
// rest.clear(); // Clearing all key-value pairs from the Map

const arr = [1, 2]; // Array to be used as a key in the Map
rest.set(arr, 'Test'); // Setting a key-value pair with an array as the key in the Map
rest.set(document.querySelector('h1'), 'Heading'); // Setting a key-value pair with a DOM element as the key in the Map
console.log(rest); // Logging the Map after deletion
console.log(rest.size); // Logging the size of the Map

rest.set([1, 2], 'Test'); // Setting a key-value pair with an array as the key in the Map
console.log(rest); // Logging the Map with the array key
console.log(rest.size); // Logging the size of the Map

console.log(rest.get(arr)); // Logging the value associated with the array key in the Map. Returns undefined because arrays are reference types and the key is not found
*/

/////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 2

/*
1. Loop over the 'game.scored' array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
2. Use a loop to calculate the average of the game odds and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game object have the same property names.

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
    {
      Goretzka: 1,
      Hummels: 1,
     Lewandowski: 2,
      }
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Muller',
      'Coman',
      'Lewandowski',
      'Tolisso',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Can',
      'Witsel',
      'Weigl',
      'Hazard',
      'Brandt',
      'Sancho',
      'Reus',
      'Pulisic',
    ],
  ],
  score: '4:0', // Using a string to represent the score
  scored: ['Lewandowski', 'Kimmich', 'Muller', 'Davies'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// Loop over the 'game.scored' array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`); // Logs the goal number and player name to the console
} // Looping over the scored array using entries() method

// 2.
// Use a loop to calculate the average of the game odds and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
const odds = Object.values(game.odds); // Getting the values of the odds object
let average = 0; // Initializing average variable to 0
for (const odd of odds) {
  average += odd; // Adding each odd to the average
} // Looping over the odds array
average /= odds.length; // Calculating the average by dividing the sum by the number of odds
console.log(`The average of the game odds is: ${average}`);

// 3.
// Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game object have the same property names.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; // Checking if the team is 'x' and assigning the appropriate string
  console.log(`Odd of ${teamStr}: ${odd}`); // Logging the formatted string to the console
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////
/*
// Looping over iterable objects (arrays, strings, maps, sets)
// Property NAMES
const properties = Object.keys(restaurant.openingHours); // Getting the keys of the openingHours object
console.log(properties); // Logs the keys of the openingHours object

let openStr = `We are open on ${properties.length} days: `; // Initializing a string with the number of open days
for (const day of properties) {
  openStr += `${day}, `; // Concatenating the days to the string
} // Looping over the keys of the openingHours object

console.log(openStr); // Logs the string with the number of open days and the days

// Property VALUES
const values = Object.values(restaurant.openingHours); // Getting the values of the openingHours object
console.log(values); // Logs the values of the openingHours object

// Property ENTRIES
const entries = Object.entries(restaurant.openingHours); // Getting the entries (key-value pairs) of the openingHours object
console.log(entries); // Logs the entries of the openingHours object
// [Array(2), Array(2), Array(2)]

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`); // Logs the opening and closing hours for each day
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // undefined. Accessing a property that does not exist in the object

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // undefined. Accessing a property that does not exist in the object using optional chaining
console.log(restaurant.openingHours?.mon?.open); // undefined. Accessing a property that does not exist in the object using optional chaining

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; // Array of days

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // Using optional chaining to check if the property exists
  console.log(`On ${day}, we open at ${open}`); // Logs the opening hours for each day
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // Calling the order method with arguments 0 and 1 using optional chaining
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Calling a method that does not exist using optional chaining

// Arrays
const user = [{ name: 'Jonas', email: 'hello@jona.io' }];
// const user = []; // Empty array

console.log(user[0]?.name ?? 'User array empty'); // Accessing the name property of the first element in the user array using optional chaining

if (user.length > 0) console.log(user[0].name);
// Checking if the user array is not empty before accessing the name property
else console.log('User array empty'); // Logging a message if the user array is empty
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0, // Setting numGuests property to 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());
*/

////////////////////////////////////////////////////////////////////////////////
/*
//Code Challenge 1
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are the tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
// 3. Create an array 'allPlayers' containing all players of both teams (22 players).
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2').
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals scored in total (number of player names passed in).
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Muller',
      'Coman',
      'Lewandowski',
      'Tolisso',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Can',
      'Witsel',
      'Weigl',
      'Hazard',
      'Brandt',
      'Sancho',
      'Reus',
      'Pulisic',
    ],
  ],
  score: '4:0', // Using a string to represent the score
  scored: ['Lewandowski', 'Kimmich', 'Muller', 'Davies'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players; // Destructuring assignment of players array
console.log(players1, players2); // Logs the players arrays for both teams

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
const [gk, ...fieldPlayers] = players1; // Destructuring assignment of players array to get goalkeeper and field players
const fieldPlayers1 = players1.slice(1); // Creating an array of field players by slicing the players1 array
console.log(gk, fieldPlayers); // Logs the goalkeeper and field players arrays

// 3. Create an array 'allPlayers' containing all players of both teams (22 players).
const allPlayers = [...players1, ...players2]; // Using the spread operator to create an array of all players
console.log(allPlayers); // Logs the allPlayers array

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // Creating a new array with the original team1 players and substitutes

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; // Using logical OR operator to assign a value to numGuests property
// rest2.numGuests = rest2.numGuests || 10; // Using logical OR operator to assign a value to numGuests property
// rest1.numGuests ||= 10; // Using logical OR operator to assign a value to numGuests property
// rest2.numGuests ||= 10; // Using logical OR operator to assign a value to numGuests property

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; // Using logical OR operator to assign a value to numGuests property
rest2.numGuests ??= 10; // Using logical OR operator to assign a value to numGuests property

// AND assignment operator
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // Using logical AND operator to assign a value to owner property
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // Using logical AND operator to assign a value to owner property
rest1.owner &&= '<ANONYMOUS>'; // Using logical AND operator to assign a value to rest1 object
rest2.owner &&= '<ANONYMOUS>'; // Using logical AND operator to assign a value to rest2 object

console.log(rest1); // Logs the rest1 object to the console
console.log(rest2); // Logs the rest2 object to the console
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
restaurant.numGuests = 0; // Setting numGuests property to 0
const guests = restaurant.numGuests || 10; // Using logical OR operator to assign a value to guests
console.log(guests); // 10. If restaurant.numGuests is falsy, assign 10 to guests

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10; // Using nullish coalescing operator to assign a value to guestCorrect
console.log(guestCorrect); // 0. If restaurant.numGuests is null or undefined, assign 10 to guestCorrect
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // 3. Logical OR operator returns the first truthy value
console.log('' || 'Jonas'); // Jonas. Logical OR operator returns the first truthy value
console.log(true || 0); // true. Logical OR operator returns the first truthy value
console.log(undefined || null); // null. Logical OR operator returns the first truthy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello. Logical OR operator returns the first truthy value

restaurant.numGuests = 23; // Setting numGuests property to 23
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // Ternary operator to assign a value to guest1
console.log(guest1); // 10. If restaurant.numGuests is falsy, assign 10 to guest1

const guest2 = restaurant.numGuests || 10; // Logical OR operator to assign a value to guest2
console.log(guest2); // 10. If restaurant.numGuests is falsy, assign 10 to guest2

console.log('--- AND ---'); // Separator for console output
console.log(0 && 'Jonas'); // 0. Logical AND operator returns the first falsy value
console.log(7 && 'Jonas'); // Jonas. Logical AND operator returns the first truthy value

console.log('Hello' && 23 && null && 'Jonas'); // null. Logical AND operator returns the first falsy value

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach'); // Calling the orderPizza method with ingredients
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach'); // Using short-circuiting to call the orderPizza method if it exists
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 1) Destructuring

// SPREAD, beacause on RIGHT side of =
const arr = [1, 2, ...[3, 4]]; // Using the spread operator to create a new array with elements from arr and another array

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; // Destructuring assignment of array with rest operator
console.log(a, b, others); // 1 2 [3, 4, 5]. Destructuring assignment of array with rest operator

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; // Destructuring assignment of array with rest operator
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours; // Destructuring assignment of object with rest operator
console.log(weekdays); // {thu: {…}, fri: {…}}. Destructuring assignment of object with rest operator

// 2) Functions
const add = function (...numbers) {
  let sum = 0; // Initializing sum variable to 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Adding each number to sum
  }
  console.log(sum); // Logging the sum to the console
  return sum; // Returning the sum
};

add(2, 3); // Calling the add function with arguments 2 and 3
add(5, 3, 7, 2); // Calling the add function with arguments 5, 3, 7, and 2
add(8, 9, 4, 2, 5, 6); // Calling the add function with arguments 8, 9, 4, 2, 5, and 6

const x = [23, 5, 7]; // Array with numbers
add(...x); // Using the spread operator to pass the elements of x as arguments to the add function
// console.log(add(...x)); // Calling the add function with the elements of x as arguments and logging the result to the console

restaurant.orderPizza('Mushrooms', 'Spinach', 'Olives', 'Garlic'); // Calling the orderPizza method with the main ingredient and other ingredients
restaurant.orderPizza('Mushrooms'); // Calling the orderPizza method with the main ingredient only
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const arr = [7, 8, 9]; // Array with numbers
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // Creating a new array with elements from arr
// console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr]; // Using the spread operator to create a new array with elements from arr
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9. Using the spread operator to log the elements of newArr
console.log(1, 2, 7, 8, 9); // 1 2 7 8 9. Logging the elements of newArr without using the spread operator

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // Creating a new array with elements from restaurant.mainMenu and adding 'Gnocchi'
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']. New array with elements from restaurant.mainMenu and 'Gnocchi'

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // Creating a copy of restaurant.mainMenu using the spread operator
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']. Copy of restaurant.mainMenu

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // Creating a new array by joining restaurant.starterMenu and restaurant.mainMenu
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']. New array with elements from restaurant.starterMenu and restaurant.mainMenu

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Jonas'; // String
const letters = [...str, '', 'S.']; // Using the spread operator to create an array of letters from the string str
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S.']. Array of letters from the string str
console.log(...letters); // J o n a s   S. Logging the elements of letters array
// console.log(`${...letters}`); // J o n a s   S. Logging the elements of letters array as a string. Does not work because the spread operator cannot be used in template literals

// Real world example
// const ingredients = [
//   prompt("Lets's make pasta! Ingredient 1?"), // Prompting user for ingredients
//   prompt('Ingredient 2?'), // Prompting user for ingredients
//   prompt('Ingredient 3?'), // Prompting user for ingredients
// // ]; // Array of ingredients
// console.log(ingredients); // Logging the ingredients array

// restaurant.orderPasta(...ingredients); // Calling the orderPasta method with the ingredients array using the spread operator
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Calling the orderPasta method with the ingredients array
// console.log(restaurant.orderPasta(...ingredients)); // Calling the orderPasta method with the ingredients array using the spread operator

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; // Creating a new object by copying properties from restaurant and adding a new property foundedIn
console.log(newRestaurant); // Logging the new object newRestaurant
// {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

const restaurantCopy = { ...restaurant }; // Creating a shallow copy of restaurant object
restaurantCopy.name = 'Ristorante Roma'; // Changing the name property of the copied object restaurantCopy
console.log(restaurantCopy.name); // Logging the name property of restaurantCopy object
console.log(restaurant.name); // Logging the name property of restaurant object
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Calling the orderDelivery method with an object as an argument

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21', // Address for delivery
//   starterIndex: 1, // Index of the starter menu
//   mainIndex: 2, // Index of the main menu
// }); // Calling the orderDelivery method with an object as an argument

const { name, openingHours, categories } = restaurant; // Destructuring assignment of object properties
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // Destructuring assignment with renaming
console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant; // Destructuring assignment with default values
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999; // Initializing variables a and b
const obj = { a: 23, b: 7, c: 14 }; // Object with properties a, b, and c

({ a, b } = obj); // Destructuring assignment of object properties into variables a and b
console.log(a, b); // 23 7

// Nested objects
const { fri } = restaurant.openingHours; // Destructuring assignment of nested object propertys
console.log(fri); // {open: 11, close: 23}
console.log(fri.open, fri.close); // 11 23
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Destructuring assignment of objects
const arr = [2, 3, 4];
const a = arr[0]; // 2
const b = arr[1]; // 3
const c = arr[2]; // 4

const [x, y, z] = arr; // 2, 3, 4. Destructuring assignment of array
console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4]

let [main, , secondary] = restaurant.categories; // Destructuring assignment of array
console.log(main, secondary); // Italian Pizzeria

// const temp = main;
// main = secondary;
// secondary = temp; // Swapping variables using a temporary variable
// secondary = main; // Swapping variables using a temporary variable
// console.log(main, secondary); // secondary main

[main, secondary] = [secondary, main]; // Swapping variables using destructuring assignment
console.log(main, secondary); // Italian Pizzeria

// Receive 2 return values from a function
restaurant.order(2, 0); // Calling the order method with arguments 2 and 0
const [starter, mainCourse] = restaurant.order(2, 0); // Destructuring assignment of array returned by the order method
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]]; // Nested array
// const [i, , j] = nested; // Destructuring assignment of nested array
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested; // Destructuring assignment of nested array
console.log(i, j, k); // 2 5 6

// Default values
const [p, q, r] = [8, 9]; // Destructuring assignment of array with default values
console.log(p, q, r); // 8 9 undefined
*/
