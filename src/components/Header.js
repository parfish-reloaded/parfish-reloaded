import React from 'react';
import './Header.css';
import Logo from '../assets/logo-parfish.png';

function Header(props) {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <img className="header__nav__logo" src={Logo} alt="Parfish Logo" />
          <div></div>
        </nav>
      </header>
    </>
  );
}

export default Header;
