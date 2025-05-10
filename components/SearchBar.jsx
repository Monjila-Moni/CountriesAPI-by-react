import React, { useState } from "react";

function SearchBar({ setQuery }) {
  

  return (
    <div className="search-container">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
