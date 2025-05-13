import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, population, region, capital, flag,data }) {
  return (
    <>
      <Link className="country-card" to={`/${name}`} state={data}>
        <div className="country-img">
          <img src={flag} />
        </div>
        <div className="country-content">
          <h2 className="country-name">{name}</h2>
          <p>
            <b>Population: </b>
            <span>{population}</span>
          </p>
          <p>
            <b>Region: </b>
            <span>{region}</span>
          </p>
          <p>
            <b>Capital: </b>
            <span>{capital}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default CountryCard;
