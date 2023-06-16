import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ThemeContext from './Theme/ThemeContext';

const MeMoBack = styled.div`
  width: 100%;
  height: 100vh;
  /* 배경 테마 바꾸기 */
  background: ${({theme, themeList}) => themeList[theme].background};
`;

const MemoWrapper = styled.div`
  position: relative;
  width: 512px;
  margin: 0 auto;
  padding: 6rem;
  border-radius: 4px;
  overflow: hidden;

  // memo
  .title{ 
    background: #f2db83;
  
    color: black;
    font-weight: bold;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 입력 후 내용
  .content{
    background: #f6eda8;
  }
`;

function MemoTemPlate(props) { 
  const {children} = props;

  // 테마적용
  const {theme, themeList} = useContext(ThemeContext);
  
  return (
    <MeMoBack theme={theme} themeList={themeList}>
      <MemoWrapper>
        <div className='title'>TO DO LIST</div>
        <div className='content'>{children}</div>
      </MemoWrapper>        
    </MeMoBack>
  );
}
export default MemoTemPlate;