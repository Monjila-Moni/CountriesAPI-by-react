import { useState,useContext } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";

import CountriesList from "./CountriesList";
import "../App.css";
import { ThemeContext } from '../contexts/ThemeContext';



function Home() {
  const [isDark,setIsDark] = useContext(ThemeContext);
 
    const [query, setQuery] = useState('');
   
  return (
    <>
      <main className={`${isDark? 'dark':''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQuery={setQuery} />
        </div>
        {query==='unmount'?'':<CountriesList query={query}/>}
        
        {/* <CountriesList query={query}/> */}
      </main>
    </>
  )
}

export default Home
