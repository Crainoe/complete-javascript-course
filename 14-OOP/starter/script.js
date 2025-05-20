'use strict';
/*
// Constructor function and the new operator
// Constructor functions are used to create objects with the same structure and behavior
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
}; // Constructor function, arrow functions cannot be used as constructors

const jonas = new Person('Jonas', 1991); // Creating a new instance of Person
console.log(jonas); // { firstName: 'Jonas', birthYear: 1991 }
// 1. New {} is created ({} = empty object)
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017); // Creating another instance of Person
const jack = new Person('Jack', 1975); // Creating another instance of Person
console.log(matilda, jack); // { firstName: 'Matilda', birthYear: 2017 }, { firstName: 'Jack', birthYear: 1975 }

const jay = 'Jay'; // Creating a string

console.log(jonas instanceof Person); // true, jonas is an instance of Person
// console.log(jay instanceof Person); // false, jay is not an instance of Person

// Prototypes

// Prototypes are objects that are linked to other objects
// Prototypes are used to share methods and properties between objects

console.log(Person.prototype); // { constructor: f }

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}; // Adding a method to the prototype of Person
// This method can be used by all instances of Person

jonas.calcAge(); // 46
matilda.calcAge(); // 20

console.log(jonas.__proto__); // { constructor: f, calcAge: f }
console.log(jonas.__proto__ === Person.prototype); // true, jonas's prototype is Person's prototype

console.log(Person.prototype.isPrototypeOf(jonas)); // true, Person's prototype is in the prototype chain of jonas
console.log(Person.prototype.isPrototypeOf(matilda)); // true, Person's prototype is in the prototype chain of matilda
console.log(Person.prototype.isPrototypeOf(Person)); // false, Person's prototype is not in the prototype chain of Person

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

// Prototypal Inheritance
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__); // {}
console.log(jonas.__proto__.__proto__.__proto__); // {}

console.dir(Person.prototype.constructor); // Person
const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // {}

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.dir(x => x + 1);
*/
///////////////////////////////////////////////////////////////////////////////////////
//ES6 Classes
/*
// class expression
// const PersonCL = class {}

// class declaration
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to the .prototype property
  // Instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', 1996);
console.log(jessica);
jessica.calcAge(); // 41

console.log(jessica.__proto__ === PersonCL.prototype); // true, jessica's prototype is PersonCL's prototype

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet(); // Hey Jessica

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
*/
///////////////////////////////////////////////////////////////////////////////////////
// Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Creating a new object with PersonProto as its prototype
steven.firstName = 'Steven'; // Adding a property to the object
steven.birthYear = 1995; // Adding a property to the object
console.log(steven); // { firstName: 'Steven', birthYear: 1995 }
steven.calcAge(); // 42

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto); // Creating another object with PersonProto as its prototype
sarah.init('Sarah', 1979); // Initializing the object with the init method
console.log(sarah); // { firstName: 'Sarah', birthYear: 1979 }
sarah.calcAge(); // 58
*/
///////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // Call the Person constructor with the current context
  // this = {} is created in the background
  this.course = course;
};

// Inherit from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); // 17

console.log(mike.__proto__); // { constructor: f, introduce: f }
console.log(mike.__proto__.__proto__); // { constructor: f, calcAge: f }

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

console.dir(Student.prototype.constructor); // Student
*/
///////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCL {
  constructor(firstName, birthYear) {
    this.fullName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to the .prototype property
  // Instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!');
  }
}
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Always needs to happen first
    // Call the Person constructor with the current context
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const Martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
Martha.introduce(); // My name is Martha Jones and I study Computer Science
Martha.calcAge(); // I'm 25 years old, but I feel more like 35
*/

///////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Creating a new object with PersonProto as its prototype

const StudentProto = Object.create(PersonProto); // Creating another object with PersonProto as its prototype
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear); // Call the Person constructor with the current context
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); // Creating another object with StudentProto as its prototype
jay.init('Jay', 2010, 'Computer Science'); // Initializing the object with the init method
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge(); // 27
console.log(jay); // { firstName: 'Jay', birthYear: 2010, course: 'Computer Science' }
