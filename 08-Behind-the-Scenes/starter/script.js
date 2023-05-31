'use strict';

/*
Scopes
*/
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Olu'
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }

//             output = 'New Output'

//         }
//         // console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);

//     }
//     printAge()
//     return age;
// }

// const firstName = 'Olu';
// calcAge(1991);


/*
Hoisting
*/


// Variable hoisting
// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Olu';
// let job = 'Teacher';
// const year = 1991;

// Function hoisting
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b
// }

// const addArrow = (a, b) => a + b

/*
This
*/

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this)
// };

// calcAge(1991);


// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this)
// };

// calcAgeArrow(1991);

// const olu = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };

// olu.calcAge();

// 

// const olu = {
//     firstName: 'Olu',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//         const self = this;

//         // Soluition 1
//         // const isMillenial = function() {
//         //     console.log(self.year >= 1981 && self.year <= 1996)
//         // }
//         // isMillenial();

//         // Solution 2
//         const isMillenial = () => {
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial();
//     },
//     greet: () => console.log(`Hey ${this.firstName}`)
// };

// olu.greet();
// olu.calcAge();

/*
Primitives vs reference
*/

// copying objects

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

//creating a shallow copy
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';

console.log('Before Marriage', jessica);
console.log('After Marriage', jessicaCopy);

//creating a deep clone copy