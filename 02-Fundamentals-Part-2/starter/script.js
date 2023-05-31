'use strict';

/*
Functions
*/
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log(`My name is Olu`)
// }

// Calling , running, or invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/*
Function declaration vs expressions
*/

// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

/*
Arrow Functions
*/

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Olu'));

/*
Functions calling other functions
*/

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// review
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }

//     // return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Olu'));
// console.log(yearsUntilRetirement(1970, 'Bob'))

/*
Introduction to Arrays
*/

//Declaring individually
// const friend1 = 'Michael';
// const friend2 = 'Luka';
// const friend3 = 'John';

// declare as arrayy
// const friends = ['Michael', 'Steve', 'John'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020)

// element in array
// console.log(friends[0]);

// Length of array
// console.log(friends.length);

//last element
// console.log(friends[friends.length - 1]);

// replace elements
// friends[2] = 'Drake';
// console.log(friends);

/*
Basic Array Operations
*/

// const friends = ['Michael', 'Steve', 'John'];

// Add element to end of array, push return the length
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// Add element to the beginning of array
// friends.unshift('John');
// console.log(friends);

// Remove element from end
// const removedElem = friends.pop();
// console.log(friends);
// console.log(removedElem);

// Remove from beginning of array
// friends.shift();
// console.log(friends);

// Index of element
// console.log(friends.indexOf('Steve'));

// -1 for element not in array
// console.log(friends.indexOf('Olu'));

//check if array has element, returns t/f
// console.log(friends.includes('Michael'));
// console.log(friends.includes('Olu'));

/*
Introduction to Objects
*/

// const olu = {
//     firstName: 'Olu',
//     lastName: 'Adebola',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Ulrick', 'Phumza']
// };

// Logging the object
// console.log(olu);

// log the lastname of the object using dot or brackets
// console.log(olu.lastName);
// console.log(olu['lastName']);

// const nameKey = 'Name';
// console.log(olu['first' + nameKey]);
// console.log(olu['last' + nameKey]);

// console.log(`${olu.firstName} has ${olu.friends.length} friends, and his best friend is called ${olu.friends[0]}`);

/*
Dots vs. Bracket
*/

/*
Object Methods
*/

// const olu = {
//     firstName: 'Olu',
//     lastName: 'Adebola',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Ulrick', 'Phumza'],
//     hasDriversLicense: false,
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(olu.calcAge());
// console.log(olu['calcAge']());
// console.log(olu.age);

// console.log(olu.getSummary());

/*
Iteration: the for loop
*/

// Imagine

// console.log('Lifting weight repitition 1');
// console.log('Lifting weight repitition 2');
// console.log('Lifting weight repitition 3');
// console.log('Lifting weight repitition 4');
// console.log('Lifting weight repitition 5');
// console.log('Lifting weight repitition 6');
// console.log('Lifting weight repitition 7');
// console.log('Lifting weight repitition 8');
// console.log('Lifting weight repitition 9');
// console.log('Lifting weight repitition 10');

// using loop

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repitition ${rep}`);
// }

// const olu = [
//     'Olu',
//     'Adebola',
//     2037 - 1991,
//     'teacher', ['Ulrick', 'Phumza', 'Steven']
// ];

// const types = [];

// for (let i = 0; i < olu.length; i++) {
//     // reading from array
//     console.log(olu[i], typeof olu[i]);

//     // filling the array
//     // types[i] = typeof olu[i];
//     types.push(typeof olu[i]);

// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// Continue(skip current iteration) and break(exit the loop)

// for (let i = 0; i < olu.length; i++) {
//     if (typeof olu[i] !== 'string') continue;

//     console.log(olu[i], typeof olu[i]);

// }

// break
// for (let i = 0; i < olu.length; i++) {
//     if (typeof olu[i] === 'number') break;

//     console.log(olu[i], typeof olu[i]);

// }

/*
Looping backwards and loops in loops
*/

// const olu = [
//     'Olu',
//     'Adebola',
//     2037 - 1991,
//     'teacher', ['Ulrick', 'Phumza', 'Steven']
// ];


// for (let i = olu.length - 1; i >= 0; i--) {
//     console.log(i, olu[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

/*
While
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repitition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repitition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end...`)
// }