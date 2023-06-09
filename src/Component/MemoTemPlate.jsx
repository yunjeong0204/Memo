import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeContext from './Theme/ThemeContext';
import ThemeChange from './Theme/ThemeChange';

const MemoWrapper = styled.div`
  position: relative;
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  // memo
  .title{ 
    background: black;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 입력 후 내용
  .content{
    background: lightgray;
  }
`;

const ThemeButton = styled.button`
  position: absolute;

  top: 22px;
  right: 5px;
`;

function MemoTemPlate(props) {  

  const {children} = props;
  return (
    <MemoWrapper>
      {/* theme */}
      {/* <ThemeContext.Provider >
        <ThemeChange />
      </ThemeContext.Provider> */}
      
      <ThemeButton>Dark버전</ThemeButton>

      <div className='title'>memo</div>
      <div className='content'>{children}</div>
    </MemoWrapper>
  );
}

export default MemoTemPlate;