import React from 'react';
import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const MemoListWrapper = styled.div`
  min-height: 320px;
  max-width: 513px;
  overflow-y: auto;
`;

function MemoList(props) {
  const {memos, onRemove, onToggle} = props;
  return (
    <MemoListWrapper>
      {memos.map((memo) => {
        return(
          <MemoListItem key={memo.id} memo={memo} onRemove={onRemove}
          onToggle={onToggle}/>
        );
      })}
    </MemoListWrapper>
  );
}

export default MemoList;