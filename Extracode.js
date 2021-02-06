fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => displayCountries(data));


const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries");
    // console.log(countries);
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class = "country-name">${country.name}</h3>
            <p class = "country-capital">${country.capital}</p>

            `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     // console.log(country.name);
    //     // console.log(country.topLevelDomain);
    //     const countryDiv = document.createElement("div");

    //     // const h3 = document.createElement("h3");
    //     // h3.innerText = country.name;
    //     // countryDiv.appendChild(h3);

    //     // const p = document.createElement("p");
    //     // p.innerText = country.capital;
    //     // countryDiv.appendChild(p);

    //     countryDiv.className = "country";
    //     const countryInfo = `
    //     <h3 class = "country-name">${country.name}</h3>
    //     <p class = "country-capital">${country.capital}</p>

    //     `
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }
}