// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? Answer: difference between highest and lowest temperature
// - How to calculate max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
// max = 8
// min = 1
// amplitude = 8 - 1 = 7

// PROBLEM 2:
// Function should now receive 2 arrays of temperatures

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays? - use concat method
// - Find max value in temperature array
// - Find min value in temperature array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    // debugger;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX - change value of prompt to Number
    // value: prompt('Degrees celsius:'),
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Example: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!
*/
// 1) Understanding the problem
// - Array transformed to strings, separated by ...
// - What is the x days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data2);
// ... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days
*/
