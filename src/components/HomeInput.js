import styled from '@emotion/styled';

const HomeInput = styled.input`
  font-size: 1rem;
  width: 200px;
  border: none;
  border-radius: 0.5em;
  padding: 15px 22px;
  margin: 10px 54px;
  box-sizing: border-box;
  background-color: rgba(255, 92, 7, 0.8);
  color: #f0f0f0;
  &:focus {
    background-color: #ff5c07;
    color: #f0f0f0;
  }
  &::placeholder {
    color: #f0f0f0;
  }
`;

export default HomeInput;
