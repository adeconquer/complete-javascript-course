/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. CreateanarraywithbothJulia's(corrected)andKate'sdata
3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
4. Runthefunctionforbothtestdatasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀
*/

const checkDogs = function (arr1, arr2) {
    const copyArr1 = arr1.slice();
    copyArr1.splice(0, 1);
    copyArr1.splice(-2);
    const combinedArr = [...copyArr1, ...arr2];
    console.log(combinedArr);
    combinedArr.forEach(function (dogAge, i) {
        dogAge > 3 ? console.log(`Dog ${i + 1} is an adult, and is ${dogAge} years old`) : console.log(`Dog ${i + 1} is still a puppy`);
    })
}

arr1 = [3, 5, 2, 12, 7];
arr2 = [4, 1, 15, 8, 3];
// checkDogs(arr1, arr2)

/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
4. Runthefunctionforbothtestdatasets
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀
*/

/*
Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages => {
//     const dogAvgHumanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//         .filter(age => age > 18)
//         .reduce((acc, cur, i, arr) => {
//             return acc += cur / arr.length
//         }, 0)

//     return dogAvgHumanAge;
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/*
Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
Your tasks:
1. Loopoverthe'dogs'arraycontainingdogobjects,andforeachdog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. FindSarah'sdogandlogtotheconsolewhetherit'seatingtoomuchortoo little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Createanarraycontainingallownersofdogswhoeattoomuch ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Logastringtotheconsoleforeacharraycreatedin3.,likethis:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Logtotheconsolewhetherthereisanydogeatingexactlytheamountoffood that is recommended (just true or false)
6. Logtotheconsolewhetherthereisanydogeatinganokayamountoffood (just true or false)
7. Createanarraycontainingthedogsthatareeatinganokayamountoffood(try to reuse the condition used in 6.)
8. Createashallowcopyofthe'dogs'arrayandsortitbyrecommendedfood portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
    The Complete JavaScript Course 25
Hints:
§ Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
Test data:
 

GOOD LUCK 😀
*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));

console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(sarahDog);
const eatingAmount = sarahDog.curFood <= 1.1 * sarahDog.recommendedFood && sarahDog.curFood >= 0.9 * sarahDog.recommendedFood ? 'Eating Well' : `Eating ${sarahDog.curFood > 1.1 * sarahDog.recommendedFood && !sarahDog.curFood < 0.9 * sarahDog.recommendedFood ? 'too much' : 'too little'}`;
console.log(eatingAmount);

const ownersEatTooMuch = dogs.filter((obj, i, arr) => {
    if (obj.curFood > 1.1 * obj.recommendedFood) {
        return obj;
    }

})
console.log(ownersEatTooMuch);
const [a, b, c] = ownersEatTooMuch.flatMap(owner => owner.owners)
console.log(`${a}, ${b}, and ${c}'s dogs eats too much`)

const ownersEatTooLittle = dogs.filter((obj, i, arr) => {
    if (obj.curFood < 0.9 * obj.recommendedFood) {
        return obj;
    }

})
console.log(ownersEatTooLittle);
const [d] = ownersEatTooLittle.flatMap(owner => owner.owners)
console.log(`${d}'s dog eats too little`)


const ownersEatRightAmount = dogs.some((obj, i, arr) => {
    if (obj.curFood <= 1.1 * obj.recommendedFood && obj.curFood >= 0.9 * obj.recommendedFood) {
        return obj;
    }

})
console.log(ownersEatRightAmount);


