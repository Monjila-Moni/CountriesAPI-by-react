import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch countries.");
        return res.json();
      })
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => console.log("Cleaning up...");
  }, []);

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    !filteredCountries ? <Shimmer width="200px" height="20px" /> :
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          population={country.population.toLocaleString("en-IN")}
          region={country.region}
          capital={country.capital?.[0] ?? "N/A"}
          flag={country.flags?.svg ?? ""}
        />
      ))}
    </div>
  );
}

export default CountriesList;

//using implicit data
// function CountriesList({ query }) {
//   const filteredCountries = countries_data.filter((country) => {
//     return country.name.common.toLowerCase().includes(query.toLowerCase());
//   });

//   //'Monjila'.includes('') -> its return true. initially query is empty so filteredCountries will all the country value
//   const array = filteredCountries.map((country, i) => {
//     // console.log(country.region);
//     return (
//       <CountryCard
//         key={i}
//         name={country.name.common}
//         population={country.population.toLocaleString("en-IN")}
//         region={country.region}
//         capital={country.capital?.[0]}
//         flag={country.flags.svg}
//       />
//     );
//   });
//   return <div className="countries-container">{array}</div>;
// }

//how to return array
// function CountriesList() {

//   const array = [
//     <CountryCard />,
//     <CountryCard/>,
//     <CountryCard/>,
//     <CountryCard/>,
//     <CountryCard/>
// ]
//   return (
//     <div className="countries-container">{array}</div>
//   )
// }

// function CountriesList() {
//   return (
//     <div className="countries-container">
//         {
//             [
//                 <CountryCard />,
//                 <CountryCard/>,
//                 <CountryCard/>,
//                 <CountryCard/>,
//                 <CountryCard/>
//             ]
//         }

//     </div>
//   )
// }


