
import { Outlet } from "react-router-dom";
import Header from './components/Header'
import { useState } from "react";

function App() {
  const [isDark,setIsDark] = useState(()=>{
    const saved = localStorage.getItem('isDarkMode');
    return saved ? JSON.parse(saved) : false
  })
  return (
    <>
    <Header theme={[isDark,setIsDark]}/>
    <Outlet context={[isDark,setIsDark]}/>
      
    </>
  );
}

export default App;
