import React from 'react';
import styled from 'styled-components';

const MemoWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .title{ 
    background: black;
    color: white;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content{
    background: gray;
  }
  `;


function MemoTemPlate(props) {
  const {children} = props;
  return (
    <MemoWrapper>
      <div className='title'>memo</div>
      <div className='content'>{children}</div>
    </MemoWrapper>
  );
}

export default MemoTemPlate;