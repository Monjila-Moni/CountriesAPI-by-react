import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { useParams, Link, useLocation, useOutletContext } from "react-router-dom";
import ShimmerCountryDetail from "./ShimmerCountryDetail";


function CountryDetail() {
  const state = useLocation().state
  // const {state} = useLocation()
  // console.log(location.state)


  const params = useParams();
  const [isDark] = useOutletContext()
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateData(CountryDetail) {
    setCountryData({
      name: CountryDetail.name.common,
      flag: CountryDetail.flags?.svg,
      nativeName: CountryDetail.name.nativeName
        ? Object.values(CountryDetail.name.nativeName)[0].common
        : "N/A",
      population:
        CountryDetail.population?.toLocaleString("en-IN") || "N/A",
      region: CountryDetail.region || "N/A",
      subRegion: CountryDetail.subregion || "N/A",
      capital: CountryDetail.capital
        ? CountryDetail.capital.join(", ")
        : "N/A",
      tld: CountryDetail.tld ? CountryDetail.tld.join(", ") : "N/A",
      currencies: CountryDetail.currencies
        ? Object.values(CountryDetail.currencies)
          .map((currency) => currency.name)
          .join(", ")
        : "N/A",
      languages: CountryDetail.languages
        ? Object.values(CountryDetail.languages).join(", ")
        : "N/A",
      borders: [],
    });

    if (CountryDetail.borders && CountryDetail.borders.length > 0) {
      Promise.all(
        CountryDetail.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        })
      ).then((borderNames) => {
        setCountryData((prev) => ({
          ...prev,
          borders: borderNames,
        }));
      });
    }
  }




  useEffect(() => {
    if (state) {
      updateData(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        const CountryDetail = data[0];
        console.log(CountryDetail.borders);
        updateData(CountryDetail)

        // if (CountryDetail.borders && CountryDetail.borders.length > 0) {
        //   CountryDetail.borders.forEach((border) => {
        //     fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //       .then((res) => res.json())
        //       .then(([borderCountry]) => {
        //         setCountryData((prevState) => ({
        //           ...prevState,
        //           borders: [...prevState.borders, borderCountry.name.common],
        //         }));
        //       });
        //   });
        // }



      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }


 
  return (
    <main  className={`${isDark? 'dark': ''}`}>
      <div className="country-details-container">
        {
          countryData === null ? <ShimmerCountryDetail /> : (
            <>
              <span className="back-button" onClick={() => window.history.back()}>
                <i className="fa-solid fa-arrow-left"></i> &nbsp;Back
              </span>

              <div className="country-details">
                <div className="country-img-area">
                  <img src={countryData.flag} alt={`${countryData.name} Flag`} />
                </div>
                <div className="details-text-container">
                  <h2 className="country-name">{countryData.name}</h2>
                  <div className="details-text">
                    <p><b>Native Name: </b><span>{countryData.nativeName}</span></p>
                    <p><b>Population: </b><span>{countryData.population}</span></p>
                    <p><b>Region: </b><span>{countryData.region}</span></p>
                    <p><b>Sub Region: </b><span>{countryData.subRegion}</span></p>
                    <p><b>Capital: </b><span>{countryData.capital}</span></p>
                    <p><b>Top Level Domain: </b><span>{countryData.tld}</span></p>
                    <p><b>Currencies: </b><span>{countryData.currencies}</span></p>
                    <p><b>Languages: </b><span>{countryData.languages}</span></p>
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
            </>
          )}
      </div>
    </main>
  );

}

export default CountryDetail;
