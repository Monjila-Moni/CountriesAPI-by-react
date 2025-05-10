import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";


import CountriesList from "./CountriesList";
import "../App.css";

function Home() {
    const [query, setQuery] = useState('');
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu />
        </div>
        {query==='unmount'?'':<CountriesList query={query}/>}
        
        {/* <CountriesList query={query}/> */}
      </main>
    </>
  )
}

export default Home
