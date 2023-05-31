/*Values and Variables*/

let country = 'Ireland';
let continent = 'Europe';
let population = 5;
// console.log(country);
// console.log(continent);
// console.log(population);


/*Data Types*/
const isIsland = true;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/*let, const and var*/
language = 'english';
// isIsland = false;

/*Basic Operators*/
population /= 2;
// console.log(population);
population += 1;
// console.log(population);
const finland = 6;
// console.log(population > finland);
const avgPop = 33;
// console.log(population > avgPop);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
    // console.log(description)

/*
If / else
*/

// console.log(`${country}'s population is ${avgPop - population} million below average`)

/*
Type Conversion and Coercion
*/


/*
Equality Operators: == vs. ===
*/

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No border`)
// }

/*
Boolean logic
*/

// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} ;)`)
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

/*
The switch statement
*/

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log(`Most number of native speakers!`);
//         break;
//     case 'spanish':
//         console.log(`2nd place in number of native speakers`);
//         break;
//     case 'english':
//         console.log(`3rd place`);
//         break;
//     case 'hindi':
//         console.log(`4th place`);
//         break;
//     case 'arabic':
//         console.log(`5th most spoken language`);
//         break;
//     default:
//         console.log(`Great languages too :D`);
//         break;

// }

// language = 'spanish';

// const popAverage = population > 33 ? 'above' : 'below';

// console.log(`${country}'s population is ${popAverage} average`);