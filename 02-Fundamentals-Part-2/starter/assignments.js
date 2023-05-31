'use strict';

/*
Functions
*/
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;

// }

// const ireland = describeCountry('Ireland', 5, 'Dublin');
// const nigeria = describeCountry('Nigeria', 200, 'Abuja');
// const usa = describeCountry('USA', 350, 'Washington DC');

// console.log(ireland);
// console.log(nigeria);
// console.log(usa);

/*
Function declaration vs expressions
*/

// function percentageOfWorld1(population) {
//     const worldPop = 7900;
//     return population / worldPop * 100;

// }

// const china = percentageOfWorld1(1441);
// const nigeria = percentageOfWorld1(200);
// const ireland = percentageOfWorld1(5);
// console.log(china);
// console.log(nigeria);
// console.log(ireland);

// const percentageOfWorld2 = function(population) {
//     const worldPop = 7900;
//     return population / worldPop * 100;
// }

// const china2 = percentageOfWorld2(1441);
// const nigeria2 = percentageOfWorld2(200);
// const ireland2 = percentageOfWorld2(5);
// console.log(china2);
// console.log(nigeria2);
// console.log(ireland2);

/*
Arrow Functions
*/

// const percentageOfWorld3 = (population) => {
//     const worldPop = 7900;
//     return population / worldPop * 100;
// }

// const china3 = percentageOfWorld3(1441);
// const nigeria3 = percentageOfWorld3(200);
// const ireland3 = percentageOfWorld3(5);
// console.log(china3);
// console.log(nigeria3);
// console.log(ireland3);

/*
Functions calling other functions
*/

// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
// }

// console.log(describePopulation('Ireland', 5));
// console.log(describePopulation('Nigeria', 200));
// console.log(describePopulation('USA', 350));

/*
Introduction to Arrays
*/

// const populations = [5, 200, 350, 15];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages)

/*
Basic Array Operations
*/

// const neighbours = ['Chad', 'Benin', 'Cameroon']
// neighbours.push('Utopia');
// neighbours.pop();
// console.log(neighbours.includes('Germany'));

// const indexBenin = neighbours.indexOf('Benin');
// neighbours[indexBenin] = 'Republic of Benin';

// console.log(neighbours);

/*
Introduction to Objects
*/

// const myCountry = {
//     country: 'Ireland',
//     capital: 'Dublin',
//     language: 'English',
//     population: 5,
//     neighbours: ['Northern Ireland', 'Wales', 'Scotland', 'England']
// };

/*
Dots vs. Bracket
*/

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

// myCountry.population += 2;
// console.log(myCountry);
// myCountry['population'] -= 2;
// console.log(myCountry);

/*
Object Methods
*/
// myCountry.describe = function() {
//     console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)
// }

// myCountry.describe();

/*
Iteration: the for loop
*/
// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

/*
Looping Arrays, Breaking and Continuing
*/

// const populations = [5, 200, 350, 15];
// const percentageOfWorld3 = (population) => {
//     const worldPop = 7900;
//     return population / worldPop * 100;
// }
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld3(populations[i]));
// }

// console.log(percentages2);

/*
Looping Backwards and loops in loops
*/

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let neighbours = 0; neighbours < listOfNeighbours.length; neighbours++) {
//     // console.log(listOfNeighbours[neighbours]);
//     for (let country = 0; country < listOfNeighbours[neighbours].length; country++) {
//         console.log(`Neighbour: ${listOfNeighbours[neighbours][country]}`);
//     }
// }