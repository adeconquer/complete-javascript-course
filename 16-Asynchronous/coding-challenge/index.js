// ////////////////
// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
// Your tasks:
// PART 1
// 1. Createafunction'whereAmI'whichtakesasinputsalatitudevalue('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
// 2. Do“reversegeocoding”oftheprovidedcoordinates.Reversegeocodingmeans to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉

// 3. Onceyouhavethedata,takealookatitintheconsoletoseealltheattributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”


// 4. Chaina.catchmethodtotheendofthepromisechainandlogerrorstothe console
// 5. ThisAPIallowsyoutomakeonly3requestspersecond.Ifyoureloadfast,you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
// PART 2
// 6. Nowit'stimetousethereceiveddatatorenderacountry.Sotaketherelevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Renderthecountryandcatchanyerrors,justlikewehavedoneinthelast lecture (you can even copy this code, no need to type the same code)
//       The Complete JavaScript Course 30
// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude) § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
// GOOD LUCK 😀
// ////////////

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

const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            // console.log(response)
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            return response.json()
        })
        .then(data => data.country)
        .then(country => getCountryData(country))
        .catch(err => console.log(err.message));

}




btn.addEventListener('click', function () {
    whereAmI(52.508, 13.381)





})
