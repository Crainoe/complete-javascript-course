'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

//////////////////////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////////////////////////////////////////
//Creating DOM elements

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Clear the container before displaying movements

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; // Sort the movements if sort is true

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // Determine the type of movement
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`; // Create the HTML for each movement

    containerMovements.insertAdjacentHTML('afterbegin', html); // Insert the HTML into the container
  });
};
// displayMovements(account1.movements); // Display movements for account1

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0); // Calculate the balance using reduce
  labelBalance.textContent = `${acc.balance}€`; // Display the balance in the label
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`; // Display the total income in the label

  const out = acc.movements
    .filter(mov => mov < 0) // Filter for withdrawals
    .reduce((acc, mov) => acc + mov, 0); // Calculate the total withdrawals using reduce
  labelSumOut.textContent = `${Math.abs(out)}€`; // Display the total withdrawals in the label

  const interest = acc.movements
    .filter(mov => mov > 0) // Filter for deposits
    // .map(deposit => (deposit * 1.2) / 100) // Calculate interest for each deposit
    .map((deposit, i, arr) => (deposit * acc.interestRate) / 100) // Calculate interest for each deposit using the interest rate of the account
    .filter((int, i, arr) => {
      // Filter out interest that is less than 1
      // console.log(arr); // Log the array at each iteration
      return int >= 1; // Keep interest that is greater than or equal to 1
    })
    .reduce((acc, int) => acc + int, 0); // Calculate the total interest using reduce
  labelSumInterest.textContent = `${interest}€`; // Display the total interest in the label
}; // Display the total income in the label
// calcDisplaySummary(currentAccount); // Calculate and print the total income for the current account

const createUsernames = function (user) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner // Create a username for each account owner
      .toLowerCase()
      .split(' ') // Convert the owner name to lowercase and split it into an array
      .map(name => name[0]) // Map over the array and get the first letter of each name
      .join(''); // Join the first letters to create the username
  });
};

createUsernames(accounts); // Create usernames for all accounts
// console.log(accounts); // Log the accounts to see the usernames

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////////////////////////////////////////

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log('transfer');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin // Check if the username and pin match the current account
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    ); // Find the index of the current account in the accounts array
    console.log(index);
    // .indexOf(23) // 23 is not in the array, so it returns -1

    // Delete account
    accounts.splice(index, 1); // 1 is the number of elements to delete

    // Hide UI
    containerApp.style.opacity = 0; // Hide the app container
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////////////////////////////////////////
// Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c' ]
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); // [ 'a', 'b', 'c', 'd', 'e' ]

// Splice method: removes elements from the array and returns them (mutates the original array)
// console.log(arr.splice(2)); // [ 'c', 'd', 'e' ] - removes elements from the array and returns them
// console.log(arr); // [ 'a', 'b' ] - original array is changed
arr.splice(-1); // removes the last element from the array
console.log(arr); // [ 'a', 'b', 'c', 'd' ] - original array is changed
arr.splice(1, 2); // removes 2 elements from index 1
console.log(arr); // [ 'a', 'd' ] - original array is changed

// Reverse method: reverses the order of the elements in the array (mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ] - original array is changed
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ] - original array is changed

// Concat method: used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const letters = arr.concat(arr2); // merges arr and arr2
console.log(letters); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ] - original arrays are unchanged

// Join method: creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
*/

/////////////////////////////////////////////////////////////////////////////////////
// The New at Method
/*
const arr = [23, 11, 64];
console.log(arr[0]); // 23 - returns the first element of the array
console.log(arr.at(0)); // 23 - returns the first element of the array

console.log(arr[arr.length - 1]); // 64 - returns the last element of the array
console.log(arr.slice(-1)[0]); // 64 - returns the last element of the array
console.log(arr.at(-1)); // 64 - returns the last element of the array

console.log('jonas'.at(0)); // j - returns the first character of the string
console.log('jonas'.at(-1)); // s - returns the last character of the string
*/
///////////////////////////////////////////////////////////////////////////////////////
// Looping Arrays: forEach
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--- forEach ---');
movements.forEach(function (mov, i, arr) {
  // movement: current element, index: current index, array: the whole array. Always in this order
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/
///////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); // Create a shallow copy of Julia's array
  dogsJuliaCorrected.splice(0, 1); // Remove the first element (cat age)
  dogsJuliaCorrected.splice(-2); // Remove the last two elements (cat ages)

  const dogs = [...dogsJuliaCorrected, ...dogsKate]; // Merge both arrays

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); // Test data 1
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); // Test data 2
*/
///////////////////////////////////////////////////////////////////////////////////////

// The Map Method
/*
const eurToUSD = 1.1; // 1 EUR = 1.1 USD
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD; // Convert each movement to USD
});
console.log(movements); // Original movements array
console.log(movementsUSD); // Converted movements array

const movementsUSDfor = []; // Create an empty array for converted movements using for-of loop
for (const mov of movements) movementsUSDfor.push(mov * eurToUSD); // Convert each movement to USD using for-of loop
console.log(movementsUSDfor); // Converted movements array using for-of loop

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}` // Create a description for each movement
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescriptions); // Array of movement descriptions
*/

///////////////////////////////////////////////////////////////////////////////////////
// Filter Method
/*
const deposits = movements.filter(function (mov) {
  return mov > 0; // Filter out positive movements (deposits)
}); // returns an array of positive movements
console.log(movements); // Original movements array
console.log(deposits); // Array of deposits

const depositsFor = []; // Create an empty array for deposits using for-of loop
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov); // Push positive movements to deposits array
  }
}
console.log(depositsFor); // Array of deposits using for-of loop
const withdrawals = movements.filter(mov => mov < 0); // Filter out negative movements (withdrawals)
console.log(withdrawals); // Array of withdrawals
*/

///////////////////////////////////////////////////////////////////////////////////////
// Reduce Method
/*
console.log(movements); // Original movements array

// Accumulator: Snowball
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`); // Log the accumulator at each iteration
//   return acc + cur; // Add the current movement to the accumulator
// }, 0); // Initial value of accumulator is 0
const balance = movements.reduce((acc, cur) => acc + cur, 0); // Using arrow function to calculate balance
console.log(balance); // Final balance after all movements

let balance2 = 0; // Create a variable for balance using for-of loop
for (const mov of movements) {
  balance2 += mov; // Add each movement to the balance
}
console.log(balance2); // Final balance using for-of loop

// Maximum value in the movements array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc; // If accumulator is greater than current movement, return accumulator
  } else {
    return mov; // Otherwise, return current movement
  }
}, movements[0]); // Initial value of accumulator is the first movement
console.log(max); // Maximum value in the movements array
*/
///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age; // Calculate human age for dogs <= 2 years old
    } else {
      return 16 + age * 4; // Calculate human age for dogs > 2 years old
    }
  });
  console.log(humanAges); // Log the human ages

  const adults = humanAges.filter(function (age) {
    return age >= 18; // Filter out dogs that are less than 18 human years old
  });
  console.log(adults); // Log the adult dogs

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length; // Calculate the average human age of adult dogs
  console.log(average); // Log the average human age
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // Test data 1
console.log(avg1); // Log the average human age for test data 1
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // Test data 2
console.log(avg2); // Log the average human age for test data 2
*/

///////////////////////////////////////////////////////////////////////////////////////
// The Magic of Chaining Methods
// Don't overuse chaining methods, it can make the code less readable. Use it when it makes sense and improves readability.
/*
const eurToUSD = 1.1; // 1 EUR = 1.1 USD
console.log(movements); // Original movements array

// Pipeline: filter -> map -> reduce
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr); // Log the array at each iteration
    return mov * eurToUSD;
  })
  // .map(mov => mov * eurToUSD)
  .reduce((acc, mov) => acc + mov, 0); // Chaining filter, map, and reduce methods
// The above code filters the movements for deposits, converts them to USD, and calculates the total balance in USD
console.log(totalDepositsInUSD);
*/
///////////////////////////////////////////////////////////////////////////////////////
// Codeg Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // Calculate human age for each dog
    .filter(age => age >= 18) // Filter out dogs that are less than 18 human years old
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // Calculate the average human age of adult dogs

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // Test data 1
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // Test data 2
console.log(avg1, avg2); // Log the average human age for test data 1 and 2
*/
///////////////////////////////////////////////////////////////////////////////////////
// The Find Method
/*
const firstWithdrawal = movements.find(mov => mov < 0); // Find the first withdrawal in the movements array
console.log(movements); // Original movements array
console.log(firstWithdrawal); // Log the first withdrawal

console.log(accounts); // Log the accounts array
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // Find the account of Jessica Davis
console.log(account); // Log the account of Jessica Davis

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc); // Log the account of Jessica Davis
  }
} // Using for-of loop to find the account of Jessica Davis
// The for-of loop is less efficient than the find method, but it is more readable in some cases.
*/
///////////////////////////////////////////////////////////////////////////////////////

// The New findLast and findLastIndex Methods

/*
console.log(movements); // Original movements array
const lastWithdrawal = movements.findLast(mov => mov < 0); // Find the last withdrawal in the movements array
console.log(lastWithdrawal); // Log the last withdrawal
const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0); // Find the index of the last withdrawal in the movements array
console.log(lastWithdrawalIndex); // Log the index of the last withdrawal

//'Your lastest large movement waas X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) >= 1000
); // Find the index of the last large movement in the movements array
const latestLargeMovement = movements[latestLargeMovementIndex];
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);
*/

///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4
/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

//1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight; // Find the weight of the Husky breed
console.log(huskyWeight); // Log the weight of the Husky breed

//2.
const dogBothActivities = breeds.find(breed => {
  // Find the breed that likes both running and fetch
  return (
    breed.activities.includes('running') && breed.activities.includes('fetch')
  );
}).breed; // Get the name of the breed
console.log(dogBothActivities); // Log the name of the breed that likes both running and fetch

//3.
const allActivities = breeds.flatMap(dog => dog.activities); // Create an array of all activities of all dog breeds
console.log(allActivities); // Log the array of all activities of all dog breeds

//4.
const uniqueActivities = [
  ...new Set(breeds.flatMap(breed => breed.activities)),
];
console.log(uniqueActivities);

//5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming')) // Filter out breeds that like swimming
      .flatMap(breed => breed.activities) // Create an array of all activities of the filtered breeds
      .filter(activity => activity !== 'swimming') // Filter out swimming from the array of activities
  ),
]; // Close the Set and array brackets
console.log(swimmingAdjacent); // Log the array of activities of breeds that like swimming

//6.
const allBreedsWeight = breeds.every(breed => breed.averageWeight >= 10); // Check if all breeds have an average weight of 10kg or more
console.log(allBreedsWeight); // Log the result

//7.
const activeBreeds = breeds.some(breed => breed.activities.length >= 3); // Check if any breed has 3 or more activities
console.log(activeBreeds); // Log the result

// Bonus
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch')) // Filter out breeds that like fetch
  .map(breed => breed.averageWeight); // Create an array of the average weights of the filtered breeds
console.log(fetchWeights); // Log the array of average weights of breeds that like fetch
const heaviestFetchBreed = Math.max(...fetchWeights); // Get the maximum weight from the array of average weights
console.log(heaviestFetchBreed);
*/
///////////////////////////////////////////////////////////////////////////////////////
// Array Grouping
/*
console.log(movements); // Original movements array

const groupedMovements = Object.groupBy(movements, mov => {
  // Group movements by their sign (positive or negative)
  return mov > 0 ? 'Deposits' : 'Withdrawals'; // Return 'Deposits' for positive movements and 'Withdrawals' for negative movements
}); // Group the movements using Object.groupBy method
// The Object.groupBy method is not a standard method in JavaScript, but it is a proposed method for future versions of JavaScript. It is used to group the elements of an array based on a specified criterion.
console.log(groupedMovements); // Log the grouped movements

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length; // Get the number of movements for each account
  if (movementCount >= 8) return 'Very Active'; // Group accounts with 8 or more movements as 'Very Active'
  if (movementCount >= 4) return 'Active'; // Group accounts with 4 or more movements as 'Active'
  if (movementCount >= 1) return 'Moderate'; // Group accounts with 1 or more movements as 'Moderate'
  return 'Inactive'; // Group accounts with no movements as 'Inactive'
});
console.log(groupedByActivity); // Log the grouped accounts by activity level

// const groupedAccounts = Object.groupBy(accounts, account => account.type); // Group accounts by their type (premium, standard, basic)
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type); // Group accounts by their type using destructuring assignment
console.log(groupedAccounts); // Log the grouped accounts by type
*/
///////////////////////////////////////////////////////////////////////////////////////
// More ways of creating and filling arrays
/*
const arr = [1, 2, 3, 4, 5, 6, 7]; // Log an array of numbers
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // Log an array of numbers using the Array constructor

// Empty arrays + fill method
const x = new Array(7); // Create an array of length 7
console.log(x); // Log the array
// console.log(x.map(() => 5)); // Log the result of mapping over the array (undefined values) - returns an array of undefined values
// x.fill(1, 3); // Fill the array with 1s starting from index 3
x.fill(1, 3, 5); // Fill the array with 1s starting from index 3 to index 5 (not included) - returns an array of 1s and undefined values
x.fill(1); // Fill the array with 1s
console.log(x); // Log the filled array

arr.fill(23, 4, 6); // Fill the array with 23 starting from index 4 to index 6 (not included) - returns an array of 1s and undefined values
console.log(arr); // Log the filled array

//Array.from method
const y = Array.from({ length: 7 }, () => 1); // Create an array of length 7 filled with 1s - returns an array of 1s
console.log(y); // Log the filled array created using Array.from

const z = Array.from({ length: 7 }, (_, i) => i + 1); // Create an array of length 7 filled with numbers from 1 to 7 - returns an array of numbers
console.log(z); // Log the filled array created using Array.from

// const randomDiceRolls = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// ); // Create an array of length 100 filled with random numbers from 1 to 6 - returns an array of random numbers
// console.log(randomDiceRolls); // Log the filled array created using Array.from

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), // Select all elements with class 'movements__value'
    el => Number(el.textContent.replace('€', '')) // Convert the text content to a number
  ); // Create an array of numbers from the selected elements
  console.log(movementsUI);
}); // Add event listener to the labelBalance element
*/
///////////////////////////////////////////////////////////////////////////////////////
// More ways of creating and filling arrays

//Non-destructive Alternatives: toReversed (reverse), toSorted (sorted), toSpliced (spliced), with
console.log(movements); // Original movements array
const reversedMov = movements.toReversed(); // Create a reversed copy of the movements array
console.log(reversedMov); // Log the reversed movements array

// toSorted (sorted), toSpliced (spliced)
const newMovements = movements.with(1, 2000); // Create a new movements array with 2000 at index 1
console.log(newMovements); // Log the new movements array (with method)
console.log(movements); // Log the original movements array (unchanged)
// const sortedMov = movements.toSorted();
// console.log(sortedMov); // Log the sorted movements array (sorted in ascending order)
// console.log(movements); // Log the original movements array (unchanged)
// const splicedMov = movements.toSpliced(2, 3);
// console.log(splicedMov); // Log the spliced movements array (removed 3 elements starting from index 2)
// console.log(movements); // Log the original movements array (unchanged)
