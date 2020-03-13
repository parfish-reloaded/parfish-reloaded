import React from 'react';
import './SignIn.css';
import SignInImage from '../assets/signin.svg';

function SignIn() {
  return (
    <>
      <h1 className="main__h1">Sign In</h1>
      <form className="signin-form__container">
        <input
          type="file"
          name="file-5"
          id="file-5"
          class="inputfile inputfile-4"
        />
        <label for="file-5">
          <figure>
            <img src={SignInImage} alt="Sign-In logo"></img>
          </figure>

          <span>Lade ein Bild von Dir hoch!</span>
        </label>

        <div>inputs</div>
        <button></button>
      </form>
    </>
  );
}

export default SignIn;
