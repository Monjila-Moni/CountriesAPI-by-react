import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import ShimmerCountryList from "./ShimmerCountryList";

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
  }, []);

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="countries-container">
      {loading
        ? Array(16)
            .fill(0)
            .map((_, index) => <ShimmerCountryList key={index} />)
        : filteredCountries.map((country) => (
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
