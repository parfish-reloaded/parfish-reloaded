import React from 'react';
import './SignIn.css';
import SignInImage from '../assets/signin.svg';
import Input from '../components/Input';

function SignIn() {
  const [nickname, setNickname] = React.useState('');
  const [yearOfBirth, setYearOfBirth] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [distance, setDistance] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(nickname);
    console.log(yearOfBirth);
    console.log(sex);
    console.log(distance);
  }

  return (
    <>
      <h1 className="main__h1">Sign In</h1>
      <form className="signin-form__container" onSubmit={handleSubmit}>
        <input type="file" className="inputfile inputfile-4" />
        <label>
          <figure>
            <img src={SignInImage} alt="Sign-In logo"></img>
          </figure>

          <span>Lade ein Bild von Dir hoch!</span>
        </label>
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
        <div>inputs</div>
        <button></button>
      </form>
    </>
  );
}

export default SignIn;
