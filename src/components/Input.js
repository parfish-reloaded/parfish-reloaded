import React from 'react';
import styled from '@emotion/styled';

const SignInInput = styled.input`
  width: 250px;
  border: none;
  border-radius: 0.5em;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  background-color: #941e00;
  color: #f0f0f0;
  &:focus {
    background-color: #941e00;
    color: #f0f0f0;
  }
  &::placeholder {
    color: #f0f0f0;
  }
`;

const SignInInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
`;

function Input(props) {
  return (
    <SignInInputLabel>
      <SignInInput {...props} />
    </SignInInputLabel>
  );
}

export default Input;
