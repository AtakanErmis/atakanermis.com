import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const timeHour = (new Date()).getHours();
  const timeBasedTheme = timeHour <= 20 && timeHour >= 8 ? "light" : "dark" ;
  const [theme, setTheme] = useState(timeBasedTheme);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      { props.children }
    </ThemeContext.Provider>
  )
}