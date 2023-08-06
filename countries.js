const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
const displayCountry = countries =>{
    const countriesContainer = document.getElementById('countries-container')
    for(const country of countries){
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `

        <h3>Name:${country.name.common}</h3>
        <h4>Capital:${country.capital}</h4>
        <button onclick = "loadCountriesDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv)
    }

    
   
}

const loadCountriesDetails = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country =>{
    // console.log(country)
   const countryDetail = document.getElementById('details-container');
    countryDetail.innerHTML = `
        <h2>Detail: '${country.name.common}'</h2>
        <img src="${country.flags.png}">
    
    `;
}


loadCountries()