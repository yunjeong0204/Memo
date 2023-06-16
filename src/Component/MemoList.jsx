import React, { useState } from 'react';
import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const MemoListWrapper = styled.div`
  min-height: 520px;
  max-width: 513px;
  overflow-y: auto;
`;

const Memotitle= styled.div`
  padding: 10px;
  border-bottom: 1px solid #fffaf2;
  font-weight: bold;
`;

function MemoList(props) {
  const {memos, onRemove, onToggle} = props;

  return (
    <MemoListWrapper>
      <Memotitle>
        할 것
      </Memotitle>
      {memos.filter(memo => memo.checked === false).map((memo) => {
        return(
          <MemoListItem key={memo.id} memo={memo} onRemove={onRemove}
          onToggle={onToggle}/>
        );
      })}

      <Memotitle>
        완료
      </Memotitle>
      {memos.filter(memo => memo.checked === true).map((memo) => {
        return(
          <MemoListItem key={memo.id} memo={memo} onRemove={onRemove}
          onToggle={onToggle}/>
        );
      })}
    </MemoListWrapper>
  );
}
export default MemoList;