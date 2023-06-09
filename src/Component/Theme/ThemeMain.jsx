import React, { useContext } from 'react';import ThemeContext from './ThemeContext';


function ThemeMain(props) {
  const {theme, themeList ,toggleTheme} = useContext(ThemeContext);

  
  return (
    <div
      style={{
        width: '512px',

        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}>

      <button onClick={toggleTheme}>테마변경</button>
      
    </div>
  );
}

export default ThemeMain;