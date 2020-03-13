import React from 'react';
import './Footer.css';
import FooterOne from '../assets/footer_1.svg';
import FooterTwo from '../assets/footer_2.svg';
import FooterThree from '../assets/footer_3.svg';
import FooterFour from '../assets/footer_4.png';

function Footer() {
  return (
    <>
      <footer>
        <nav className="footer__nav">
          <button className="footer__nav__button">
            <img
              className="footer__nav__button__img"
              src={FooterOne}
              alt="Home"
            />
          </button>
          <button className="footer__nav__button">
            <img
              className="footer__nav__button__img"
              src={FooterTwo}
              alt="SignIn"
            />
          </button>
          <button className="footer__nav__button">
            <img
              className="footer__nav__button__img"
              src={FooterThree}
              alt="Profile"
            />
          </button>
          <button className="footer__nav__button">
            <img
              className="footer__nav__button__img"
              src={FooterFour}
              alt="Partners"
            />
          </button>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
