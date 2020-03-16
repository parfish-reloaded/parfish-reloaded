import styled from '@emotion/styled';

const SubmitButton = styled.button`
  grid-column: 1 / 3;
  grid-row: 3 / 3;
  justify-self: right;
  width: 240px;
  background-color: ${props => props.bg};
  border: none;
  border-radius: 0.5rem;
  color: #f0f0f0;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  margin: 18px 28px 75px 10px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :active {
    box-shadow: none;
    outline: none;
    background-color: #ff3400;
  }
`;

export default SubmitButton;
