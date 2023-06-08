import { useState } from 'react';
import styled from 'styled-components';


const MemoWrapper = styled.form`
   display: flex;
   background: gray;
`;

const MemoInput = styled.input`
   background: none;
   outline: none;
   border: none;
   padding: 0.5rem;
   font-size: 1.125rem;
   line-height: 1.5;
   color: white;

   &::placeholder{
      color: white;
   }
`;



function MemoInput() {
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
      <MemoWrapper onSubmit={handleSubmit}>  
         <MemoInput
            type='text' 
            placeholder='메모를 입력하세요' 
            value={value} 
            onChange={handleChange}
         />

      </MemoWrapper>
   );
}
export default MemoInput;