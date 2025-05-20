// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
const country = 'South-Africa';
const continent = 'Africa';
let population = 60;

console.log(country);
console.log(continent);
console.log(population);

// 2. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value
let isIsland = false; // South-Africa is not an island so the value is false
var language
isIsland = "South-Africa" === "South-Africa"; // South-Africa is not an island so the value is false

// 3. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// 4. Set 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'Afrikaans';
otherCountry = "America"; // This will give an error because we cannot reassign a value to a const variable

// 5. Create an if statement which will log to the console whether your country's population is above average, below average or equal to the average
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is below average`);
}   // South-Africa's population is above average
let halfPopulation = population / 2; // 30
halfPopulation++; // 31
console.log(halfPopulation); // 31
const finlandPopulation = 6;
console.log(halfPopulation > finlandPopulation); // true
const averagePopulation = 33;
console.log(halfPopulation < averagePopulation); // true
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description); // South-Africa is in Africa, and its 60 million people speak Afrikaans