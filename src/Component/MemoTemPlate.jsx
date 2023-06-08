import React from 'react';
import styled from 'styled-components';

const MemoTemPlate = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;
  border-radius: 4px;

  .title{
    background: black;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content{
    background: white;
  }
`;

function MemoTemPlate(props) {
  return (
    <MemoTemPlate>
      <div className='title'>memo</div>
      <div className='content'>memo</div>
    </MemoTemPlate>
  );
}

export default MemoTemPlate;