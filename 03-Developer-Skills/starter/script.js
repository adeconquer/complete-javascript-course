// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calTempAmplitude = function(temps) {
//     let max = -Infinity;
//     let min = Infinity;

//     for (let i = 0; i < temps.length; i++) {
//         let curVal = temps[i];
//         if (typeof curVal !== 'number') continue;

//         if (curVal > max) max = curVal;
//         if (curVal < min) min = curVal;
//     }
//     return max - min;
// }

// const amplitude = calTempAmplitude(temperatures);
// console.log(amplitude);

// const calTempAmplitudeNew = function(arr1, arr2) {
//     // const temps = [...arr1, ...arr2]
//     const temps = arr1.concat(arr2);

//     let max = -Infinity;
//     let min = Infinity;

//     for (let i = 0; i < temps.length; i++) {
//         let curVal = temps[i];
//         if (typeof curVal !== 'number') continue;

//         if (curVal > max) max = curVal;
//         if (curVal < min) min = curVal;
//     }
//     return max - min;
// }

// const amplitudeNew = calTempAmplitudeNew([-3, 5, 6], [18, 0, 2]);
// console.log(amplitudeNew);

const meaureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius'))
    }

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(meaureKelvin())