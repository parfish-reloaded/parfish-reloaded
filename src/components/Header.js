import React from 'react';
import './Header.css';
import Logo from '../assets/logo-parfish.png';
import LoginButton from './LoginButton';

console.log(window.location.pathname);

function LoginButtonOrMenu() {
  const path = window.location.pathname;
  if (path === '/' || path === '/signin') {
    return <LoginButton className="header__nav__button" />;
  } else {
    return null;
  }
}

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <img className="header__nav__logo" src={Logo} alt="Parfish Logo" />
          <LoginButtonOrMenu />
        </nav>
      </header>
    </>
  );
}

export default Header;
