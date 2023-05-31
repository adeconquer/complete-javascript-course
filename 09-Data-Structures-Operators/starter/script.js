'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// Opening Hours
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 eng=hance object literal
    openingHours,
    order(starterIndex, menuIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]]
    },
    orderDelivery({
        starterIndex,
        mainIndex,
        time,
        address
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    },


};

// Obtaing array values without destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destructuring

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables with des..
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse)

// const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// Individual elements
// const [i, , [j, k]] = nested;

// Default values
// const [p = 1, q = 1, r = 1] = [8, 9]

// console.log(p, q, r);

// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories)

// giving new variable names
// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

// Giving default values
// const { menu = [], starterMenu: startes = [] } = restaurant;

// Mutatingh variables objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// It was already assigned so wrapping in () to create scope
// ({ a, b } = obj);
// console.log(a, b)

//Nested Objects

// const { fri: { open: o, close: c } } = openingHours
// console.log(o, c)

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'lorem so del',
//     mainIndex: 2,
//     starterIndex: 2
// })

// const ingredients = [
//     prompt(`let's make pasta! Ingredient 1 ?`),
//     prompt(`let's make pasta! Ingredient 2 ?`),
//     prompt(`let's make pasta! Ingredient 3 ?`)
// ]

// restaurant.orderPasta(...ingredients);

//Objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Rest, because on left side of =
// const arr = [1, 2, ...[3, 4]]; // spread
// const arr1 = [3, 4];
// const arr2 = [1, 2, ...arr1] // same as above;

//rest(left side) with destructing
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others)

// I want pizza and risotto from mainmenu
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFood);

// rest in objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays);


//functions

// const add = function(...numbers) {
//     console.log(numbers);
//     let sum;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// Nullish: null and undefined
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect)

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10


//OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// && assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';


// console.log(rest1);
// console.log(rest2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log([...menu.entries()]);

/*
Enhanced Object literals
*/

// console.log(restaurant)

/*
Optional chaining (?.)
*/

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// with optional chaining
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Array
// const users = [
//     {
//         name: 'Olu',
//         email: 'hello@olu.io'
//     }
// ]

// console.log(users[0]?.name ?? 'user array empty')

/*
looping over objects
*/

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `
// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr)

// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/*
Sets
*/


// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta', 'Pizza']);

// console.log(orderSet);

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));

// orderSet.add('garlic bread');
// orderSet.delete('Risotto');

// for (const order of orderSet) console.log(order);

/*
Maps
*/

// const rest = new Map();
//fill it up
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon,'));
// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed : (')

// console.log(rest.get('name'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// const arr = [1, 2]
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.get(arr))

/*
Maps: Iteration
*/

// const question = new Map([
//     ['question', 'what is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct 🎉'],
//     [false, 'Try again']
// ]);

// console.log(question);

// Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz App
// console.log(question.get('question'))
// for (const [key, value] of question) {
//     if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
// }

// const answer = Number(prompt('Your answer'));
// console.log(question.get(answer === question.get('correct')));

// Convert map to array
// console.log([...question])

/*
Working with strings
*/

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// slice
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' '))); // First word
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Last word

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('You got the middle seat')
//     } else console.log('You got lucky')
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n'

// const loginEmailNormalize = loginEmail.toLowerCase().trim();



// console.log(email === loginEmailNormalize);

// replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS)

// const announcement = `All passengers come to boarding door 23, Boarding door 23`

// replace only replaces once, need a regex to target all instances
// console.log(announcement.replace('door', 'gate'))
// solution regex with global flag
// console.log(announcement.replace(/door/g, 'gate'))

// Includes
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('boeing'));
// console.log(plane.startsWith('Air'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the New AirBus family')
// }

// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knike') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board')
//     } else {
//         console.log('Welcome aboard');
//     }
// }

// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// console.log('a+very+nice+string'.split('+'));
// console.log('Olu Adebola'.split(' '));

// const [firstName, lastName] = 'Olu Adebola'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpper = []

//     for (const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//     }
//     console.log(namesUpper.join(' '));

// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'))

// const maskCreditCard = function (number) {
//     const str = number + '';
//     const lastFourDigits = str.slice(-4);
//     console.log(lastFourDigits.padStart(str.length, '*'));

// }

// maskCreditCard(3468742357896789)

// Repeat
// const message2 = 'Bad Weather... All Departure Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//     console.log(`There are ${n} planes in line ${'🛩 '.repeat(n)}`)
// }

// planesInLine(5)

//.🔴.Delayed.Departure.from.FAO.to.TXL.(11h25)
//..............Arrival.from.BRU.to.FAO.(11h45)
//...🔴.Delayed.Arrival.from.HEL.to.FAO.(12h05)
//............Departure.from.FAO.to.LIS.(12h30)

// console.log(flights.split('+'))

const getCode = str => str.slice(0, 3).toUpperCase()

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36)
    console.log(output);

}