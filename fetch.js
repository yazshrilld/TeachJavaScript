'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function showCountry(data, neighbour='') {
    const html = `
    <article class="country ${neighbour}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
  </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1

}

function getCountriesAndNeighbour(country) {
   fetch(`https://restcountries.com/v3.1/name/${country}`)
   .then(response => response.json())
   .then(data => {
    let neighbour = data[0].borders[0]
    showCountry(data[0])
    return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
}).then(response => response.json())
   .then(data => showCountry(data[0], 'neighbour'))
}

getCountriesAndNeighbour('portugal')