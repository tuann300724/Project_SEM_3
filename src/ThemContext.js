import React, { createContext, useState } from 'react';
 const ThemeContext = createContext();
 function ThemeProvider({children}){
   const [theme, setTheme] = useState(null);
   const TongleThem = ()=>{
    setTheme(JSON.parse(localStorage.getItem("DataLogin")))
   }
   const value ={
    theme,
    TongleThem
   }
  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
 }
export { ThemeContext,ThemeProvider}