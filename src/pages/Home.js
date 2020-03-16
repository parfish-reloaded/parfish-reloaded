import React from 'react';
import './Home.css';
import Input from '../components/Input';
import Button from '../components/Button';

function Home({ showLogin }) {
  const [email, setEmail] = React.useState('');
  const [emailCheck, setEmailCheck] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [buttonClassName, setButtonClassName] = React.useState(
    'register-form__button'
  );
  const [disabledButton, setDisabledButton] = React.useState(true);

  const checkEmail = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    setEmailCheck(event.target.validity.typeMismatch);
    changeButtonStyle(newEmail, event.target.validity.typeMismatch, password);
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
      setButtonClassName('register-form__button');
      setDisabledButton(true);
    } else {
      setButtonClassName('register-form__button-active');
      setDisabledButton(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
  }
  return (
    <>
      <h1 className="main__h1 main__h1__b">
        Jeder Fisch braucht seinen Schwarm
      </h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <Input
          className="register-form__email"
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={event => {
            checkEmail(event);
          }}
        />
        <Input
          className="register-form__password"
          type="password"
          required
          value={password}
          placeholder="Passwort"
          onChange={event => {
            checkPassword(event);
          }}
        />
        <Button className={buttonClassName} disabled={disabledButton}>
          {showLogin ? 'Login' : "Let's Go Fishing!"}
        </Button>
      </form>
    </>
  );
}
export default Home;
