// Importing Module

// named import
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
// addToCart('bread', 5);
// console.log(price, tq)
console.log('Importing Module')


// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice)

import add from './shoppingCart.js'
add('pizza', 2)

import cloneDeep from 'lodash-es'

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept()
}

class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name
        console.log(`${this.#greeting}, ${this.name}`)
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable'
// import 'core-js/stable/array/find'

// polyfilling async functions
import 'regenerator-runtime/runtime'