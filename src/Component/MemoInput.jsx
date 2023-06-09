import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd as AddIcon } from "react-icons/md";

const MemoInputWrapper = styled.form`
   display: flex;
   background: gray;
`;

const StyledInput = styled.input`
   background: none;
   outline: none;
   border: none;
   padding: 0.5rem;
   font-size: 1.125rem;
   line-height: 1.5;
   color: white;
   flex: 1;

   &::placeholder{
      color: white;
   }
`;

// 버튼
const StyledButton = styled.button`
   background: lightblue;
   border: none;
   color: white;
   padding: 0 1rem;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   cursor: pointer;
   `;

function MemoInput({onInsert}) {
   const [value, setValue] = useState('');

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   const handleSubmit = (e) => {
      onInsert(value);
      setValue(''); 

      e.preventDefault();
   };


   return(
      <MemoInputWrapper onSubmit={handleSubmit}>  
         <StyledInput
            type='text' 
            placeholder='메모 입력' 
            value={value} 
            onChange={handleChange}
            />
         <StyledButton type='submit'>
            <AddIcon />
         </StyledButton>

      </MemoInputWrapper>
   );
}
export default MemoInput;