import React, { useEffect, useState } from "react";
import "./CountryDetail.css";

function CountryDetail() {
  const countryName = new URLSearchParams(window.location.search).get("name")
  const [countryData, setCountryData] = useState(null)

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json()) 
      .then((data) => {
        const country = data[0]
        console.log();
        setCountryData({
          name: country.name.common,
          flag: country.flags.svg,
          nativeName: Object.values(country.name.nativeName)[0].common,
          population: country.population.toLocaleString('en-IN'),
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital.join(', '),
          tld: country.tld,
          currencies: Object.values(country.currencies).map((currency)=>{
            return currency.name
          }).join(', '),
          languages: Object.values(country.languages).join(', ') 
          
        });
      })
      
  }, []);
  
  return countryData === null?('Loading..........'):(
    
      <main>
        <div className="country-details-container">
          <span className="back-button" onClick={() => window.history.back()}
          >
            <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
          </span>

          <div className="country-details">
            <div className="country-img-area">
              <img src={countryData.flag}  />
            </div>
            <div className="details-text-container">
              <h2 className="country-name">{countryData.name}</h2>
              <div className="details-text">
                <p>
                  <b>Native Name: </b>
                  <span>{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span>{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span>{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span>{countryData.subRegion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span>{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span>{countryData.tld}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span>{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span>{countryData.languages}</span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}

export default CountryDetail;
