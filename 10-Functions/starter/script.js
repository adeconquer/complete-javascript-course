'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

//ES5
// numPassengers ||= 1;
// price ||= 199 

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 5); // skipping an argument

// const flight = 'LH234';
// const olu = {
//     name: 'Olu Adebola',
//     passport: 436743587
// }

// const checkin = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 436743587) {
//         alert('checked in')
//     } else {
//         alert('Wrong passport!')
//     }
// }

// checkin(flight, olu);
// console.log(flight); // pass by value
// console.log(olu); // Pass by refernce 

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 10000000000)
// }

// newPassport(olu);

// checkin(flight, olu)

/*
First class vs. higher-order functions
*/

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const greet = greeting => name => console.log(`${greeting} ${name}`)



// const greeterHey = greet('Hey')
// greeterHey('Olu');
// greeterHey('Steven');

// greet('Hello')('Olu')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LM',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline}
//             flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//     }
// };

// lufthansa.book('239', 'Olu');
// lufthansa.book('635', 'Jon Smith');

// const euroWings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };

// const book = lufthansa.book

//Does not work
// book(23, 'Sarah William');

//Need to do as follows
// book.call(euroWings, 23, 'Sarah Williams');
// console.log(euroWings);

// book.call(lufthansa, 239, 'Tayo Omopupo');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 583, 'Amy Gbademo');
// console.log(swiss);

// Apply Method takes an array
// const flightData = [583, 'Mosope Oluwatobi'];
// book.apply(swiss, flightData)
// console.log(swiss);

// Bind method returns another function
// book.call(euroWings, 23, 'Sarah Williams');
// console.log(euroWings);


// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams')

// Partial Application: already set some args
// const bookEW23 = book.bind(euroWings, 23);
// bookEW23('Olu Adebola');
// bookEW23('John Fademi');

// With eventListener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this)
//     this.planes++;
//     console.log(this.planes)
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application: already set some args
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// console.log(addVat(100));

// const addTax2 = rate => value => console.log(value + value * rate);
// addTax2(0.1)(220)


// const poll = {
//     question: "What is your favourite programming language?",
//     options: [
//         "0: JavaScript",
//         "1: Python",
//         "2: Rust",
//         "3: C++"
//     ],
//     // This generates [0, 0, 0, 0]. More in the next section! 
//     answers: new Array(4).fill(0),
// };

// poll.registerNewAnswer = function () {
//     // console.log(this);
//     const inputNumber = prompt(`
//     ${this.question}
//     ${this.options[0]}
//     ${this.options[1]}
//     ${this.options[2]}
//     ${this.options[3]}
//     (Write option number)
//     `)

// console.log(Number(inputNumber));
// My solution
//     switch (inputNumber) {
//         case '0':
//             this.answers[0]++;
//             break;
//         case '1':
//             this.answers[1]++;
//             break;
//         case '2':
//             this.answers[2]++;
//             break;
//         case '3':
//             this.answers[3]++;
//             break;
//         default:
//             console.log('No number selected');
//             break;
//     }


//     this.displayResults();
//     this.displayResults('string');
// };

// poll.displayResults = function (type = 'array') {
//     if (type === 'array') {
//         console.log(this.answers);
//     } else if (type === 'string') {
//         // Poll results are 13, 2, 4, 1
//         console.log(`Poll results are ${this.answers.join(', ')}`)
//     }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1,5,3,9,6,1]

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string')


//IIFE
// (function () {
//     console.log(`This will never run again`)
// })();

//Closures
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`)
//     };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker)

//more examples

//Example1
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2)
//     }
// }
// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2)
//     }
// }

// g();
// f();
// console.dir(f);

// Re-assigning f function
// h();
// f();

// console.dir(f);

// Example2
// const boardPassengers = function (n, wait) {
//     const perGroup = n / 3;

//     setTimeout(function () {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`)
//     }, wait * 1000)
//     console.log(`will start boarding in ${wait} seconds`)
// }

// const perGroup = 1000
// boardPassengers(180, 3);

//Coding Challenge
/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
 

GOOD LUCK 😀
*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    });
})()

