'use strict';

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs): underscoreCase ✅
firstName ✅
someVariable ✅
calculateAge ✅
delayedDeparture ✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data! GOOD LUCK 😀
 ✅
  ✅
✅
✅
   ✅
✅
✅
    ✅
✅
✅
*/
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

const textArea = document.createElement('textarea');
const button = document.createElement('button')

document.body.append(textArea);
document.body.append(button);

button.innerText = 'Convert'

const modWord = function (word) {
    // console.log(word);
    const wordArr = word.split('_');
    // console.log(wordArr);
    const secondWord = wordArr[1];
    // console.log(secondWord)
    const secondWordFirstUpper = secondWord[0].toUpperCase() + secondWord.slice(1);
    const modWord = wordArr[0] + secondWordFirstUpper
    return modWord;
}

const converter = function () {
    const initialStrArr = textArea.value.split('\n');
    const modStrArr = []
    for (let [i, v] of initialStrArr.entries()) {
        v = v.toLowerCase().trim();
        const padSpace = modWord(v).padEnd(20, ' ');
        const padTick = padSpace.padEnd(20 + i + 1, '✅')
        modStrArr.push(padTick)
    }
    console.log(modStrArr.join('\n'));
}


button.addEventListener('click', converter);

