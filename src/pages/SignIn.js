import React from 'react';
import './SignIn.css';
import SignInImage from '../assets/signin.svg';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import { useHistory } from 'react-router-dom';

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
      <form className="signin-form__container" onSubmit={handleSubmit}>
        <label className="label-image">
          <input type="file" className="inputfile inputfile-4" />

          <figure>
            <img src={SignInImage} alt="Sign-In logo"></img>
          </figure>

          <span>Lade ein Bild von Dir hoch!</span>
        </label>
        <div className="signin-form__container__input-container">
          <label className="signin-form__container__input-label">
            <Input
              className="input"
              placeholder="Nickname"
              value={nickname}
              onChange={event => {
                setNickname(event.target.value);
              }}
            />
          </label>
          <label className="signin-form__container__input-label">
            <Input
              type="number"
              className="input"
              placeholder="Wähle dein Geburtsjahr"
              value={yearOfBirth}
              onChange={event => {
                setYearOfBirth(event.target.value);
              }}
            />
          </label>
          <label className="signin-form__container__input-label">
            <Input
              className="input"
              placeholder="Wähle dein Geschlecht"
              value={sex}
              onChange={event => {
                setSex(event.target.value);
              }}
            />
          </label>
          <label className="signin-form__container__input-label">
            <Input
              className="input"
              placeholder="Wie lang ist deine Angel?"
              value={distance}
              onChange={event => {
                setDistance(event.target.value);
              }}
            />
          </label>
        </div>
        <SubmitButton className="signin-form__container__button">
          CAST THE FISHING ROD!
        </SubmitButton>
      </form>
    </>
  );
}

export default SignIn;
