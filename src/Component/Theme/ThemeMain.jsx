import React, { useContext } from 'react';import ThemeContext from './ThemeContext';
import { MdModeNight as AddIcon } from "react-icons/md";

function ThemeMain(props) {
  const {theme, themeList ,toggleTheme} = useContext(ThemeContext);
    
  return (
    <AddIcon onClick={toggleTheme}
      style={{
        width: '100%',
        fontSize: '1.5rem',
      
        backgroundColor: themeList[theme].background,
        color: themeList[theme].foreground
      }}>
    </AddIcon>   
  );
}
export default ThemeMain;