import React from 'react';
import SignInImage from '../assets/signin.svg';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import Form from '../components/Form';
import FileInput from '../components/FileInput';
import FileFigure from '../components/FileFigure';
import FileLabel from '../components/FileLabel';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  max-width: 400px;
  & label:nth-child(2n + 1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
`;

function SignIn() {
  const [nickname, setNickname] = React.useState('');
  const [yearOfBirth, setYearOfBirth] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [distance, setDistance] = React.useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const users = {
      password: sessionStorage.getItem('password'),
      email: sessionStorage.getItem('email'),
      nickname: nickname,
      yearOfBirth: yearOfBirth,
      sex: sex,
      distance: distance
    };

    const response = await fetch(
      process.env.REACT_APP_USERS_API ||
        'https://my-json-server.typicode.com/parfish-reloaded/parfish-reloaded/users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      }
    );
    const createdUser = await response.json();
    history.push('/profile/' + createdUser.id);
  }

  return (
    <>
      <h1 className="main__h1">Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <FileLabel>
          <FileInput type="file" />
          <FileFigure>
            <img src={SignInImage} alt="Sign-In logo" />
          </FileFigure>
          <span>Lade ein Bild von Dir hoch!</span>
        </FileLabel>
        <InputContainer>
          <Input
            placeholder="Nickname"
            value={nickname}
            onChange={event => {
              setNickname(event.target.value);
            }}
          />

          <Input
            type="number"
            placeholder="Wähle dein Geburtsjahr"
            value={yearOfBirth}
            onChange={event => {
              setYearOfBirth(event.target.value);
            }}
          />

          <Input
            placeholder="Wähle dein Geschlecht"
            value={sex}
            onChange={event => {
              setSex(event.target.value);
            }}
          />

          <Input
            placeholder="Wie lang ist deine Angel?"
            value={distance}
            onChange={event => {
              setDistance(event.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton>CAST THE FISHING ROD!</SubmitButton>
      </Form>
    </>
  );
}

export default SignIn;
