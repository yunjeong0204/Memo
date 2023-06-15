import React, { useState } from 'react';
import styled from 'styled-components';

const MemoInputWrapper = styled.form`
   display: flex;
   background: #e7ebdf;
`;

const StyledInput = styled.input`
   background: none;
   outline: none;
   border: none;
   padding: 0.5rem;
   font-size: 1.125rem;
   line-height: 1.5;
   color: black;
   flex: 1;

   &::placeholder{
      color: black;
   }
`;

// 버튼
const StyledButton = styled.button`
   background: lightblue;
   border: none;
   color: white;
   padding: 0 1rem;
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
      if (!value) {
         e.preventDefault();
      } else {
         onInsert(value);
         setValue(''); 
      }
   };


   return(
      <MemoInputWrapper onSubmit={handleSubmit} >  
         <StyledInput
            type='text' 
            placeholder='메모 입력' 
            value={value} 
            onChange={handleChange}
            />
         <StyledButton type='submit'>등록</StyledButton>

      </MemoInputWrapper>
   );
}
export default MemoInput;