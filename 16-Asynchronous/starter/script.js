'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const url = 'https://restcountries.com/v2/'

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);

}

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);

}

// const getCountryData = function (country) {
//     const btn = document.querySelector('.btn-country');
//     const countriesContainer = document.querySelector('.countries');
//     const url = 'https://restcountries.com/v2/'
//     ///////////////////////////////////////


//     const request = new XMLHttpRequest();

//     request.open('GET', `${url}name/${country}`);

//     request.send();

//     request.addEventListener('load', function () {

//         const [data] = JSON.parse(this.responseText)
//         console.log(data)
//         const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1
//     })
// };

// getCountryData('portugal');
// getCountryData('usa')





// const getCountryAndNeighboutData = function (country) {

//     ///////////////////////////////////////

//     // AJAX call country 1
//     const request = new XMLHttpRequest();

//     request.open('GET', `${url}name/${country}`);

//     request.send();

//     request.addEventListener('load', function () {

//         const [data] = JSON.parse(this.responseText)
//         console.log(data)

//         // Render country 1
//         renderCountry(data);

//         // Get neiughbour country
//         const [neighbour] = data.borders;

//         if (!neighbour) return

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();

//         request2.open('GET', `${url}alpha/${neighbour}`);

//         request2.send();

//         request2.addEventListener('load', function () {

//             const data2 = JSON.parse(this.responseText)
//             console.log(data2)

//             // Render country 2
//             renderCountry(data2, 'neighbour');

//         })


//     })

//     // getCountryAndNeighboutData()
// };

// // getCountryAndNeighboutData('portugal');
// getCountryAndNeighboutData('usa');



// Newer way of AJAX calls - Promises

const getCountryData = function (country) {
    fetch(`${url}name/${country}`)
        .then(response => {
            console.log(response)
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            return response.json()
        })
        .then(data => {
            console.log(data);

            const [res] = data

            console.log(res)
            renderCountry(res);
            return res

        })
        .then(res =>
            // prettier ignore
            res.borders?.forEach(neighbour => {
                fetch(`${url}alpha/${neighbour}`)
                    .then(response => {
                        if (!response.ok) throw new Error(`Country not found (${response.status})`);
                        return response.json()
                    })
                    .then(data => {
                        renderCountry(data, 'neighbour')
                    })
            }))
        .catch(err => {
            renderError(`Something went wrong ${err.message}`)
            console.error(err)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })

}




btn.addEventListener('click', function () {
    getCountryData('ghana')

})




// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
//         navigator.geolocation.getCurrentPosition(resolve, reject)


//     })
// }

// getPosition().then(pos => console.log(pos))

const whereAmI = async function (country) {
    const res = await fetch(`${url}name/${country}`)
    const data = await res.json()
    renderCountry(data[0])
}

whereAmI('Ireland');
console.log('First')