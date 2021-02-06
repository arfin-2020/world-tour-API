fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p class = "country-capital">${country.capital}</p>
                <button onclick = "displayCountryDetails('${country.name}')">Details</button>
            `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}
const displayCountryDetails = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`
        // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
    const countryDiv = document.getElementById("countryDiv");
    // console.log(country);
    countryDiv.innerHTML = `
    <h1> Name: ${country.name}</h1>
    <p> Area: ${country.area}</p>
    <p> Population: ${country.population}</p>
    <img src = "${country.flag}">
    `
}