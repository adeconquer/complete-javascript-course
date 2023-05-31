var $3nmn2$lodashes = require("lodash-es");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Importing Module
// named import
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'
// addToCart('bread', 5);
// console.log(price, tq)
// Exporting Module
console.log("Exporting Module");
const $ff00bcf124faf90c$var$shippingCost = 10;
const $ff00bcf124faf90c$var$cart = [];
const $ff00bcf124faf90c$export$576b6dd9d68b37bc = function(product, quantity) {
    $ff00bcf124faf90c$var$cart.push({
        product: product,
        quantity: quantity
    });
    console.log(`${quantity} ${product} added to cart`);
};
const $ff00bcf124faf90c$export$da0715255d0ed324 = 237;
const $ff00bcf124faf90c$export$5b07eba68643ad41 = 23;
function $ff00bcf124faf90c$export$2e2bcd8739ae039(product, quantity) {
    $ff00bcf124faf90c$var$cart.push({
        product: product,
        quantity: quantity
    });
    console.log(`${quantity} ${product} added to cart`);
}



console.log("Importing Module");
(0, $ff00bcf124faf90c$export$2e2bcd8739ae039)("pizza", 2);
const $650934f729b0bf11$var$state = {
    cart: [
        {
            product: "bread",
            quantity: 5
        },
        {
            product: "pizza",
            quantity: 5
        }
    ],
    user: {
        loggedIn: true
    }
};
const $650934f729b0bf11$var$stateClone = Object.assign({}, $650934f729b0bf11$var$state);
const $650934f729b0bf11$var$stateDeepClone = (0, ($parcel$interopDefault($3nmn2$lodashes)))($650934f729b0bf11$var$state);
$650934f729b0bf11$var$state.user.loggedIn = false;
console.log($650934f729b0bf11$var$stateClone);
console.log($650934f729b0bf11$var$stateDeepClone);
if (null) null.accept();


//# sourceMappingURL=index.js.map
