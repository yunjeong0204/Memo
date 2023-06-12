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

function MemoTemPlate(props) { 
  const {children} = props;

  return (
    <MemoWrapper>
      {/* theme */}
      {/* <ThemeContext.Provider >
        <ThemeChange />
      </ThemeContext.Provider> */}
      
      {/* <div className='btn'> 이전 </div> */}
      <div className='title'>memo</div>
      <div className='content'>{children}</div>
    </MemoWrapper>



  
  );
}

export default MemoTemPlate;