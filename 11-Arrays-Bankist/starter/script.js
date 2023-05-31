'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc += mov
  }, 0)

  labelBalance.textContent = `${acc.balance}€ `
}



const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => { return int >= 1 })
    .reduce((acc, int) => acc + int, 0)

  labelSumInterest.textContent = `${interest}€`;
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })

}

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
}

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Login');
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    // Clear input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }

})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  // implement check to see if user has enough money
  // and reciver account is valid
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount)
  }

  // Update UI
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount?.username &&
    Number(inputClosePin.value) === currentAccount?.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

// Slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// Shallow copy
// console.log(arr.slice());
// Just like
// console.log([...arr]);

//Splice - cuts
// console.log(arr.splice(2));
// console.log(arr) // splice mutates the original array
// console.log(arr.splice(-1));
// console.log(arr)
// console.log(arr.splice(1, 2))
// console.log(arr)

// Reverse - mutates array
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// console.log(arr2)

// Concat
// const letters = arr.concat(arr2);
// console.log(letters)
// console.log([...arr, ...arr2])

//Join
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]) // last element
// console.log(arr.slice(-1)[0]) // another way to capture last element
// console.log(arr.at(-1))


// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:  You withdraw ${Math.abs(movement)}`)
//   }
// }


// Cannot break or continue with forEach loop
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`)
//   }
// })

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`)
// })

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'Eur', 'Eur'])
// console.log(currenciesUnique)

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`)
// });

// Map

// const eurToUsd = 1.1;

// const movementUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements)
// console.log(movementUSD)

// const movementsUSDFor = []
// for (const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd)
// }
// console.log(movementsUSDFor)

// const movementsDescriptions = movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrawal'} ${Math.abs(mov)}`

// );
// console.log(movementsDescriptions)

//Filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawals);

//Reduce
// const balance = movements.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i + 1}: ${acc}`)
// return acc + cur
// }, 0);
// console.log(balance)

//Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov
//   }
// }, movements[0]);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr)
//     return mov * eurToUsd
//   })
//   .reduce((acc, mov) => acc + mov, 0)

// console.log(totalDepositsUSD);

//Find - return the first instance
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account)

// for (const person of accounts) {
//   if (person.owner === 'Jessica Davis') {
//     console.log(person);
//   }
// }

// Some & every

// Checks equality
// console.log(movements)
// console.log(movements.includes(-130));

// condition
// const anyDeposits = movements.some(mov => mov > 0)
// console.log(anyDeposits)

//Every - return true if evey elment passes test
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Flat & flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat())

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arr.flat(2))



// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);


// console.log(overallBalance);

// flat then map is common, so there's flatMap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);

// Flat map only goes one level deep
// console.log(overallBalance2);

// Sorting
// const owners = ['Jonas', 'Zack', 'Martha', 'Adam']
// console.log(owners.sort());
// console.log(owners)

// console.log(movements);
// return < 0 A,B
// return
// Ascending
// console.log(movements.sort((a, b) => a - b));

// descending
// console.log(movements.sort((a, b) => b - a));

// Creating arrays
// const x = new Array(7);
// console.log(x);

// x.fill(1);
// console.log(x);

//specify beginning  and end fill
// x.fill(1, 3, 5);
// console.log(x);

//
// x.fill(23, 2, 6);
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y)

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z)


// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// })

// Array Methods practice
//1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0)


// console.log(bankDepositSum)

//2.
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000)
// .length

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0)

// console.log(numDeposits1000)

//3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sums, cur) => {
//     // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
//     sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
//     return sums
//   },
//     {
//       deposits: 0,
//       withdrawals: 0
//     })

// console.log(deposits);
// console.log(withdrawals);

//4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word :
      word[0].toUpperCase() + word.slice(1)
    )
    .join(' ')
  return capitalize(titleCase);
}

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE`));