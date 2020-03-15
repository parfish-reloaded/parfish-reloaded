import React from 'react';
import './Home.css';
import Input from '../components/Input';
import Button from '../components/Button';

function Home(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    console.log(
      'Email: ' + sessionStorage.email,
      'Passwort: ' + sessionStorage.password
    );
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
            setEmail(event.target.value);
          }}
        />
        <Input
          className="register-form__password"
          type="password"
          required
          value={password}
          placeholder="Passwort"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <Button className="register-form__button">Let's Go Fishing!</Button>
      </form>
    </>
  );
}
export default Home;
