import React, { useState } from 'react';
import styled from 'styled-components';
import MemoListItem from './MemoListItem';

const MemoListWrapper = styled.div`
  min-height: 520px;
  max-width: 513px;
  overflow-y: auto;

  .task {
    padding: 10px;
    border-bottom: 1px solid lightgray;
    font-weight: bold;
  }
`;

const MemoFinish = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgray;
  font-weight: bold;
`;


function MemoList(props) {
  const {memos, onRemove, onToggle} = props;

  // 
  const [todolist, setTodolist] = useState([]);

  return (
    <MemoListWrapper>
      <div className='task'
        todolist={todolist}
        setTodolist={setTodolist}
        checkList={false}>
        할 일
      </div>

      {memos.map((memo) => {
        return(
          <MemoListItem key={memo.id} memo={memo} onRemove={onRemove}
          onToggle={onToggle}/>
        );
      })}

      <MemoFinish>

        {/* {todolist && todolist.map((todolist) => {
          if (checkList !== setTodolist.checked) {
            return null;
          }
        })} */}
      </MemoFinish>

    </MemoListWrapper>
    
  );
}

export default MemoList;