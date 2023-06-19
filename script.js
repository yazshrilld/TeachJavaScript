
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
// Call back hell using XMLHttpRequest
function getCountriesAndNeighbour(country) {
    
const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
request.send()
request.addEventListener('load', function(){
    let [data] = JSON.parse(this.responseText)
    showCountry(data)

    let neighbour = data.borders[0]
    if (!neighbour) return
    const request2 = new XMLHttpRequest()
    request2.open('Get', `https://restcountries.com/v3.1/alpha/${neighbour}`)
    request2.send()

    request2.addEventListener('load', function() {
        let [data2] = JSON.parse(this.responseText)
        showCountry(data2, 'neighbour')
    })

   })
}

getCountriesAndNeighbour('nigeria')


