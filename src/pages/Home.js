import React from 'react';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';
import Headline from '../components/Headline';
import HomeInput from '../components/HomeInput';
import styled from '@emotion/styled';
import { getUsers } from '../api/users';

const StartForm = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto auto;
  margin-top: 40px;
  padding-top: 0;
`;

const EmailInput = styled(HomeInput)`
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  justify-self: left;
`;
const PasswordInput = styled(HomeInput)`
  grid-column: 1 / 3;
  grid-row: 2 / 2;
  justify-self: right;
  padding-right: 50px;
  margin-bottom: 150px;
`;

const HomeSection = styled.section`
  margin: 100px auto;
  max-width: 450px;
`;

function Home(props) {
  const [email, setEmail] = React.useState('');
  const [emailCheck, setEmailCheck] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [disabledButton, setDisabledButton] = React.useState(true);

  const checkEmail = event => {
    setEmail(event.target.value);
    setEmailCheck(event.target.validity.typeMismatch);
    changeButtonStyle(
      event.target.value,
      event.target.validity.typeMismatch,
      password
    );
  };

  const checkPassword = event => {
    setPassword(event.target.value);
    changeButtonStyle(email, emailCheck, event.target.value);
  };

  function changeButtonStyle(userEmail, emailCheck, userPassword) {
    if (
      userEmail.trim() === '' ||
      emailCheck ||
      userPassword.trim().length < 4
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    if (props.showLogin) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      history.push('/signin');
    } else {
      setDisabledButton(true);
      const users = await getUsers();
      const loginUser = await users.filter(
        user => user.email === email && user.password === password
      );
      if (await loginUser) {
        setDisabledButton(true);
        const userId = await loginUser[0].id;
        sessionStorage.setItem('loginUserId', await userId);
        history.push(`/profile/${await userId}`);
      }
    }
  }

  return (
    <>
      <HomeSection>
        <Headline>Jeder Fisch braucht seinen Schwarm</Headline>
        <StartForm onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            required
            value={email}
            placeholder="Email"
            onChange={event => {
              checkEmail(event);
            }}
          />
          <PasswordInput
            type="password"
            required
            value={password}
            placeholder="Passwort"
            onChange={event => {
              checkPassword(event);
            }}
          />
          <SubmitButton isDisabled={disabledButton}>
            {props.showLogin ? `Let's Go Fishing!` : `Login`}
          </SubmitButton>
        </StartForm>
      </HomeSection>
    </>
  );
}
export default Home;
