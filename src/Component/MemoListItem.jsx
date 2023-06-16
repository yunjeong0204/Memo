import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

const MemoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg{ 
    font-size: 1.5rem;
    color: ${props => props.checked && 'blue'};
  }
  `;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 

  ${props => props.checked && 
    css`
      color: #adb5bd;
      text-decoration: line-through;
      `
  } 
`;

// 날짜
const Datetext = styled.div`
  right: 0;
`;

//수정
const Edit = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 삭제
const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
`;

function MemoListItem(props) {
  const { memo : { id, text, checked, data}, onRemove, onToggle} = props;
  // console.log(id);

  return (
    <MemoListItemWrapper>
      <Checkbox checked={checked}
      onClick={() => {onToggle(id);}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>

      <Text checked={checked}>{text}</Text>

      {/* 날짜 */}
      <Datetext>{data}</Datetext> 

      {/* 수정 */}
      <Edit>
        수정
      </Edit>

      {/* 삭제 */}
      <Remove onClick={() => {onRemove(id);}}>
        <MdRemoveCircleOutline />
      </Remove>
      
    </MemoListItemWrapper>
  );
}

export default React.memo(MemoListItem);