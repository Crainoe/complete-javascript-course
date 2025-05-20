'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); // Will be available in the global scope

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var is function-scoped, so it's available in the entire function
      // Creat NEW variable with the same name as outer scope's variable

      const firstName = 'Steven'; // const is block-scoped, so it's only available in this block

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'; // Will throw an error because output is a const variable

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); // Will be available in the global scope

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // true, because var is function-scoped
    // console.log(str); // ReferenceError: str is not defined, because const is block-scoped

    // add(2, 3); // 5, because add is hoisted to the top of the function scope
    // console.log(add(2, 3)); // 5, because add is hoisted to the top of the function scope
  }
  printAge(); // Call the inner function to execute it

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // ReferenceError: age is not defined
console.log(firstName); // Jonas, because firstName is in the global scope
*/

// Hoisting
// Variables are hoisted to the top of their scope, but not initialized
// Functions are hoisted to the top of their scope, and initialized

/*
// Hoisting with var
console.log(me); // ReferenceError: Cannot access 'me' before initialization
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas'; // Hoisted to the top of the global scope
let job = 'teacher'; // Hoisted to the top of the global scope
const year = 1991; // Hoisted to the top of the global scope

// Functions
console.log(addDecl(2, 3)); // 5, because addDecl is hoisted to the top of the global scope
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow);
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
} // Hoisted to the top of the global scope
const addExpr = function (a, b) {
  return a + b;
}; // Not hoisted, because it's a function expression

var addArrow = (a, b) => a + b; // Not hoisted, because it's a function expression

//Example
console.log(undefined); // undefined, because var is hoisted to the top of the global scope
if (!numProdcuts) deleteShoppingCart(); // Will be hoisted to the top of the global scope

var numProdcuts = 10; // Hoisted to the top of the global scope

function deleteShoppingCart() {
  console.log('All items deleted!');
  var shoppingCart = 0; // Hoisted to the top of the global scope
}

var x = 1;
let y = 2;
const z = 3; // Hoisted to the top of the global scope

console.log(x === window.x); // true, because x is a global variable
console.log(y === window.y); // false, because y is a block-scoped variable
console.log(z === window.z); // false, because z is a block-scoped variable
*/

/*
// This keyword
console.log(this); // Window object in the global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear); // 46
  console.log(this); // undefined, because it's a regular function call
};
calcAge(1991); // 46

const calcAgeArrow = birthYear => {
  // Arrow function does not have its own this keyword, it inherits from the parent scope{
  console.log(2037 - birthYear); // 46
  console.log(this); // Window object, because it's an arrow function
};
calcAgeArrow(1980); // 57

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object, because it's a method call
    console.log(2037 - this.year); // 46
  },
};
jonas.calcAge(); // 46

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // Copying the method to another object
matilda.calcAge(); // 20, because this refers to the matilda object

const f = jonas.calcAge; // Copying the method to a variable
// f(); // undefined, because this refers to the global object
*/

/*
var firstName = 'Matilda'; // Global variable
console.log(firstName); // Matilda, because it's a global variable

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this); // jonas object, because it's a method call
    console.log(2037 - this.year); // 46

    //solution 1
    // const self = this; // self is a reference to the jonas object
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996); // true, because self is a reference to the jonas object
    // };

    //solution 2
    const isMillenial = () => {
      console.log(self); // undefined, because it's a regular function call
      console.log(self.year >= 1981 && self.year <= 1996); // undefined, because it's a regular function call
    };

    isMillenial(); // undefined, because it's a regular function call
  },
  greet: () => {
    console.log(this); // Window object, because it's an arrow function
    console.log(`Hey ${this.firstName}`); // Hey undefined, because this refers to the global object
  },
  greet2: function () {
    console.log(this); // jonas object, because it's a method call
    console.log(`Hey ${this.firstName}`); // Hey Jonas, because this refers to the jonas object
  },
};
jonas.greet(); // Hey undefined, because this refers to the global object
jonas.greet2(); // Hey Jonas, because this refers to the jonas object
jonas.calcAge(); // 46, because this refers to the jonas object

const addExpr = function (a, b) {
  console.log(arguments); // Arguments object is available in regular functions
  return a + b;
}; // Not hoisted, because it's a function expression
addExpr(2, 5); // 7, because it's a regular function call
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => a + b; // Not hoisted, because it's a function expression

addArrow(2, 5, 8); // undefined, because it's an arrow function and does not have its own arguments object
// addArrow(2, 5, 8, 12); // undefined, because it's an arrow function and does not have its own arguments object

*/

// Object Reference vs. Primitive Types (Shallow Copy vs. Deep Copy)
// Primitive types are copied by value, while objects are copied by reference

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName; // Modifying the object through the marryPerson variable
  return originalPerson; // Returning the new object
}

const marriedJessica = marryPerson(jessica1, 'Davis'); // Passing the jessica1 object to the function

// const marriedJessica = jessica1; // Shallow copy, both variables point to the same object in memory
// marriedJessica1.lastName = 'Davis'; // Modifying the object through the marriedJessica1 variable

console.log('Before:', jessica1); // { firstName: 'Jessica', lastName: 'Davis', age: 27, family: [ 'Alice', 'Bob' ] }
console.log('After:', marriedJessica); // { firstName: '1', lastName: 'Davis', age: 27, family: [ 'Alice', 'Bob' ] }

// jessica1 = { x: 23 }; // TypeError: Assignment to constant variable, because jessica1 is a const variable
// jessica1.age = { x: 23 }; // Modifying the object through the 1 variable

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy
const jessicaCopy = { ...jessica }; // Shallow copy, both variables point to the same object in memory
jessicaCopy.lastName = 'Davis'; // Modifying the object through the jessicaCopy variable
// console.log(jessica, jessicaCopy); // { firstName: 'Jessica', lastName: 'Williams', age: 27, family: [ 'Alice', 'Bob' ] } { firstName: 'Jessica', lastName: 'Davis', age: 27, family: [ 'Alice', 'Bob' ] }
// jessicaCopy.family.push('Mary'); // Modifying the object through the jessicaCopy variable
// jessicaCopy.family.push('John'); // Modifying the object through the jessicaCopy variable

// console.log('Before:', jessica); // { firstName: 'Jessica', lastName: 'Williams', age: 27, family: [ 'Alice', 'Bob', 'Mary', 'John' ] }
// console.log('After:', jessicaCopy); // { firstName: 'Jessica', lastName: 'Davis', age: 27, family: [ 'Alice', 'Bob', 'Mary', 'John' ] }

// Deep Copy/Clone
const jessicaClone = structuredClone(jessica); // Deep copy, both variables point to different objects in memory
jessicaClone.family.push('Mary'); // Modifying the object through the jessicaClone variable
jessicaClone.family.push('John'); // Modifying the object through the jessicaClone variable

console.log('Before Clone:', jessica); // { firstName: 'Jessica', lastName: 'Williams', age: 27, family: [ 'Alice', 'Bob' ] }
console.log('After Clone:', jessicaClone); // { firstName: 'Jessica', lastName: 'Davis', age: 27, family: [ 'Alice', 'Bob', 'Mary', 'John' ] }
