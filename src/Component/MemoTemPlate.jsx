import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeContext from './Theme/ThemeContext';
import ThemeChange from './Theme/ThemeChange';
import ThemeMain from './Theme/ThemeMain';

const MemoWrapper = styled.div`
  position: relative;
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  // memo
  .title{ 
    background: #ffedad;
    color: black;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 입력 후 내용
  .content{
    background: #fafac0;
  }

/* 이전 시 필요한 버튼  */
  /* .btn{
    width: 50px;
    height: 30px;
  } */
`;


const themeList = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
}


function MemoTemPlate(props) { 
  const {children} = props;

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  }


  return (
    <ThemeContext.Provider value={{theme, themeList, toggleTheme}}>

      <MemoWrapper>
        <ThemeMain />
        
        {/* <div className='btn'> 이전 </div> */}
        <div className='title'>memo</div>
        <div className='content'>{children}</div>
      </MemoWrapper>


    </ThemeContext.Provider> 



  
  );
}

export default MemoTemPlate;