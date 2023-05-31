/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const calcMarkBMI = markMass / markHeight ** 2;
const calcJohnBMI = johnMass / johnHeight ** 2
    // console.log(calcMarkBMI, calcJohnBMI);

const markHigherBMI = calcMarkBMI > calcJohnBMI
    // console.log(calcMarkBMI, calcJohnBMI, markHigherBMI);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀
*/

if (calcMarkBMI > calcJohnBMI) {
    console.log(`Mark's BMI ${calcMarkBMI} is higher the John's ${calcJohnBMI}`);
} else {
    console.log(`John's BMI ${calcJohnBMI} is higher the Mark's ${calcMarkBMI}`);
}