'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
//Event Delegation: Implementing Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default anchor click behavior
//     const id = this.getAttribute('href'); // Get the href attribute of the clicked link

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default anchor click behavior

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // Get the href attribute of the clicked link
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
});

///////////////////////////////////////
// Building a tabbed component

const tabs = document.querySelectorAll('.operations__tab'); // selects all tabs
const tabContainer = document.querySelector('.operations__tab-container'); // selects the tab container
const tabsContent = document.querySelectorAll('.operations__content'); // selects the tab content

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // gets the closest tab element that was clicked
  console.log(clicked); // logs the clicked tab element
  // Guard clause
  if (!clicked) return; // if no tab was clicked, exit the function

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active')); // removes the active class from all tabs
  tabsContent.forEach(c => c.classList.remove('operations__content--active')); // removes the active class from all tab content

  // Activate tab
  // Add active class to the clicked tab
  clicked.classList.add('operations__tab--active');

  console.log(clicked.dataset.tab); // logs the data-tab attribute of the clicked tab
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); // adds the active class to the content of the clicked tab
});

/////////////////////////////////////////////////
// Selecting, creating and deleting elements
/*
// Selecting elements
console.log(document.documentElement); // selects the entire HTML document
console.log(document.head); // selects the head element
console.log(document.body); // selects the body element

const header = document.querySelector('.header'); // selects the first element with the class 'header'
const allSelections = document.querySelectorAll('.section'); // selects all elements with the class 'section'
console.log(allSelections); // logs a NodeList of all selected elements

const section1 = document.getElementById('section--1'); // selects the element with the id 'section--1'
const allButtons = document.getElementsByTagName('button'); // selects all button elements
console.log(allButtons); // logs an HTMLCollection of all selected buttons

const allButtons2 = document.getElementsByClassName('btn'); // selects all elements with the class 'btn'

// Creating and inserting elements
// .insertAdjacentHTML() method
const message = document.createElement('div'); // creates a new div element
message.classList.add('cookie-message'); // adds a class to the new div
message.textContent =
  'We use cookies for improved functionality and analytics.'; // sets the text content of the new div
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // sets the inner HTML of the new div

// header.prepend(message); // inserts the new div as the first child of the header
header.append(message); // inserts the new div as the last child of the header
// header.append(message.cloneNode(true)); // inserts a clone of the new div as the last child of the header

// header.before(message.cloneNode(true)); // inserts a clone of the new div before the header
// header.after(message.cloneNode(true)); // inserts a clone of the new div after the header

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // removes the message div from the DOM
    // OR
    // message.parentElement.removeChild(message); // removes the message div from the DOM using parentElement
  });
*/
///////////////////////////////////////////
// Styles, attributes and classes
/*
//Styles
message.style.backgroundColor = '#37383d'; // sets the background color of the message div
message.style.width = '120%'; // sets the width of the message div

console.log(message.style.height); // logs the height of the message div
console.log(message.style.backgroundColor); // logs the background color of the message div

console.log(getComputedStyle(message).color); // logs the computed color of the message div
console.log(getComputedStyle(message).height); // logs the computed height of the message div
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // sets the height of the message div

document.documentElement.style.setProperty('--color-primary', 'orangered'); // sets a CSS variable for the primary color

// Attributes
const logo = document.querySelector('.nav__logo'); // selects the logo element
console.log(logo.alt); // logs the alt attribute of the logo
console.log(logo.src); // logs the src attribute of the logo
console.log(logo.className); // logs the class name of the logo

logo.alt = 'Beautiful minimalist logo'; // sets the alt attribute of the logo
console.log(logo.alt); // logs the updated alt attribute of the logo

// Non-standard
console.log(logo.designer); // logs the designer attribute of the logo (undefined since it doesn't exist)
console.log(logo.getAttribute('designer')); // logs the designer attribute of the logo (should return 'Jonas')
logo.setAttribute('company', 'Bankist'); // sets a custom attribute 'company' to the logo

console.log(logo.src); // logs the src attribute of the logo
console.log(logo.getAttribute('src')); // logs the src attribute of the logo

const link = document.querySelector('.nav__link--btn'); // selects the button link
console.log(link.href); // logs the href attribute of the button link
console.log(link.getAttribute('href')); // logs the href attribute of the button link

// Data attributes
console.log(logo.dataset.versionNumber); // logs the data-version-number attribute of the logo

// Classes
logo.classList.add('c'); // adds the class 'c' to the logo
logo.classList.remove('c'); // removes the class 'c' from the logo
logo.classList.toggle('c'); // toggles the class 'c' on the logo
logo.classList.contains('c'); // checks if the logo contains the class 'c' (returns true or false)

// Don't use this
// logo.className = 'jonas'; // sets the class name of the logo to 'jonas' (overwrites all existing classes)
// logo.classList = 'jonas'; // sets the class list of the logo to 'jonas' (overwrites all existing classes)
// logo.classList = 'c'; // sets the class list of the logo to 'c' (overwrites all existing classes)
*/
///////////////////////////////////////////////////////
// Event Propagation in practice
/*
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min; // generates a random integer between min and max
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`; // generates a random RGB color

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // changes the background color of the clicked link
  console.log('LINK', e.target, e.currentTarget); // logs the target and current target of the event
  console.log(e.currentTarget === this); // checks if the current target is the same as the clicked link
  // Stop propagation
  // e.stopPropagation(); // stops the event from bubbling up to parent elements
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // changes the background color of the clicked link
  console.log('CONTAINER', e.target, e.currentTarget); // logs the target and current target of the event
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor(); // changes the background color of the clicked link
    console.log('NAV', e.target, e.currentTarget); // logs the target and current target of the event
  }
  // true// sets the third parameter to true to enable capturing phase
  // The event will be captured in the capturing phase and then bubble up to the target element
);
*/
//////////////////////////////////////////////////////////
// DOM Traversing
/*
const h1 = document.querySelector('h1'); // selects the first h1 element

// Going downwards: children
console.log(h1.querySelectorAll('.highlight')); // selects all elements with the class 'highlight' inside the h1
console.log(h1.childNodes); // logs all child nodes of the h1 element (including text nodes)
console.log(h1.children); // logs all children of the h1 element
h1.firstElementChild.style.color = 'white'; // changes the color of the first child element of the h1 to white
h1.lastElementChild.style.color = 'red'; // changes the color of the last child element of the h1 to red

// Going upwards: parents
console.log(h1.parentNode); // logs the parent node of the h1 element
console.log(h1.parentElement); // logs the parent element of the h1 element

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // changes the background of the closest ancestor with the class 'header' to the secondary gradient

h1.closest('h1').style.background = 'var(--gradient-primary)'; // changes the background of the closest ancestor h1 element to the primary gradient

// Going sideways: siblings
console.log(h1.previousElementSibling); // logs the previous sibling element of the h1
console.log(h1.nextElementSibling); // logs the next sibling element of the h1

console.log(h1.previousSibling); // logs the previous sibling node of the h1 (including text nodes)
console.log(h1.nextSibling); // logs the next sibling node of the h1 (including text nodes)

console.log(h1.parentElement.children); // logs all sibling elements of the h1 element
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)'; // scales down all sibling elements of the h1 element
});
*/
///////////////////////////////////////////////////////////
