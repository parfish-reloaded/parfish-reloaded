import React from 'react';
import './Footer.css';
import FooterOne from '../assets/footer_1.svg';
import FooterTwo from '../assets/footer_2.svg';
import FooterThree from '../assets/footer_3.svg';
import FooterFour from '../assets/footer_4.png';
import { Link } from 'react-router-dom';

function Footer() {
  const [loginUserId, setLoginUserId] = React.useState(null);
  React.useEffect(() => {
    setLoginUserId(sessionStorage.getItem('loginUserId'));
    console.log(loginUserId);
  }, [loginUserId]);

  return (
    <>
      <footer>
        <nav className="footer__nav">
          <Link to="/">
            <button className="footer__nav__button">
              <img
                className="footer__nav__button__img"
                src={FooterOne}
                alt="Home"
              />
            </button>
          </Link>
          <Link to="/signin">
            <button className="footer__nav__button">
              <img
                className="footer__nav__button__img"
                src={FooterTwo}
                alt="SignIn"
              />
            </button>
          </Link>
          <Link to={`/profile/${loginUserId}`}>
            <button className="footer__nav__button">
              <img
                className="footer__nav__button__img"
                src={FooterThree}
                alt="Profile"
              />
            </button>
          </Link>
          <Link to="/swarm">
            <button className="footer__nav__button" href="/swarm">
              <img
                className="footer__nav__button__img"
                src={FooterFour}
                alt="Partners"
              />
            </button>
          </Link>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
