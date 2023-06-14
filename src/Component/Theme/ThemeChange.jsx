import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemeMain from './ThemeMain';

// const themeList = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee'
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222'
//   }
// }

function ThemeChange(props) {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else if (theme === 'dark') {
  //     setTheme('light');
  //   }
  // }


  return (
    <>
    </>
    // <ThemeContext.Provider value={{theme, themeList, toggleTheme}}>
    //   <ThemeMain />
    // </ThemeContext.Provider>
  );
}

export default ThemeChange;