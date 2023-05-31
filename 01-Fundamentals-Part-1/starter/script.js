/*
 Values and Variables
 */
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

/*
 DataTypes
*/
// Number, String, Boolean, undefined, null, symbol, BigInt


// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthyear = 1990

// const job;

// var job = 'programmer';
// job = 'teacher';

/*
Basic Operator
*/
// const now = 2037;
// const ageOlu = now - 1991;
// const ageQueen = now - 1996;

// console.log(ageOlu, ageQueen);

// console.log(ageOlu * 2, ageOlu / 10, 2 ** 3);

// const firstName = 'Olu';
// const lastName = 'Adebola';
// console.log(firstName + ' ' + lastName);

// Assignment Operator
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

/*
Strings and Template Literals
*/
// const year = 2037;

// const olu = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(olu);

// const oluNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`
// console.log(oluNew);

/*
If / else
*/

// const age = 15;


// if (age >= 18) {
//     console.log(' Sarah can start driving license🏎')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`)
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21

// }
// console.log(century);

/*
Type Conversion and Coercion
*/

const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Olu'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');



// 5 falsy value: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Olu'));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log(`Don't spen it all`);
// } else {
//     console.log(`You should get a job`);
// }

// let height;
// if (height) {
//     console.log(`YAY! Height is defined`);
// } else {
//     console.log(`Height is Undefined`);
// }

/*
Equality Operators: == vs. ===
*/

// const age = '18';
// if (age === 18) console.log(`You just became an adult`);

// if (age == 18) console.log(`You just became an adult (loose)`);

// const favorite = Number(prompt("What's your favorite number"))
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log(`7 is also a cool number`);
// } else if (favorite === 9) {
//     console.log(`9 is also a cool number`);
// } else {
//     console.log(`Number is not 23 or 7 or 9`);
// }

// if (favorite !== 23) console.log(`Why not 23?`)

/*
Logical Operators
*/

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive...`)
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive...`)
// }

/*
The switch statement
*/

// const day = 'monday';

// switch (day) {
//     case 'monday': // strict comparison day === 'monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code videos`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend :D`);
//         break;
//     default:
//         console.log(`Not a valid day!`);
//         break;
// }

// Writing the above as if else
// if (day === 'monday') {
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
// } else if (day === 'tuesday') {
//     console.log(`Prepare theory videos`);
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code videos`);
// } else if (day === 'friday') {
//     console.log(`Record videos`);
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend :D`);
// } else {
//     console.log(`Not a valid day!`);
// }

/*
The conditional(Ternary) Operator
*/

// const age = 23;
// age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

// const drink = age >= 18 ? `wine 🍷` : `water 💧`;
// console.log(drink);

// or could be written as 
// let drink2;
// if (age >= 18) {
//     drink2 = `wine 🍷`
// } else {
//     drink2 = `water 💧`;
// }
// console.log(drink2)