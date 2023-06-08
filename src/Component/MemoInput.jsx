import React from 'react';
import styled from 'styled-components';


const Memoinput = styled.form`
  display: flex;
  background: gray;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;

  &::placeholder{
    color: yellow;
  }

`;

const Button = styled.button`
  background: red;
  border: none;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

`;


function MemoInput(props) {
  return (
    <Memoinput>
      <Input />
      <Button />
    </Memoinput>
  );
}

export default MemoInput;