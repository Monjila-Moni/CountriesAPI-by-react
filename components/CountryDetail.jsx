import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import { useParams, Link } from "react-router-dom";

function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        const CountryDetail = data[0];
        console.log(CountryDetail.borders);
        setCountryData({
          name: CountryDetail.name.common,
          flag: CountryDetail.flags.svg,
          nativeName: Object.values(CountryDetail.name.nativeName)[0].common,
          population: CountryDetail.population.toLocaleString("en-IN"),
          region: CountryDetail.region,
          subRegion: CountryDetail.subregion,
          capital: CountryDetail.capital.join(", "),
          tld: CountryDetail.tld,
          currencies: Object.values(CountryDetail.currencies)
            .map((currency) => {
              return currency.name;
            })
            .join(", "),
          languages: Object.values(CountryDetail.languages).join(", "),
          borders: [],
        });

        if (CountryDetail.borders && CountryDetail.borders.length > 0) {
          CountryDetail.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => {
                setCountryData((prevState) => ({
                  ...prevState,
                  borders: [...prevState.borders, borderCountry.name.common],
                }));
              });
          });
        }
      });
  }, [countryName]);

  return countryData === null ? (
    "Loading.........."
  ) : (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
        </span>

        <div className="country-details">
          <div className="country-img-area">
            <img src={countryData.flag} />
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
              {countryData.borders.length > 0 ? (
                countryData.borders.map((borderCountryName, index) => (
                  <Link key={index} to={`/${borderCountryName}`}>
                    {borderCountryName}
                  </Link>
                ))
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
