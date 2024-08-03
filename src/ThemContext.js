import React, { createContext, useState } from 'react';
 const ThemeContext = createContext();
 function ThemeProvider({children}){
   const [theme, setTheme] = useState(null);
   const [checkFavoritesStatus, setFavoritesStatus] = useState(false);
   const TongleThem = ()=>{
    setTheme(JSON.parse(localStorage.getItem("DataLogin")))
   }
   const toggleFavoritesStatus = () => {
    setFavoritesStatus(prevStatus => !prevStatus);
  };
   const value ={
    theme,
    TongleThem,
    checkFavoritesStatus,
    toggleFavoritesStatus
   }
  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
 }
export { ThemeContext,ThemeProvider}