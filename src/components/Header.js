import React from 'react';
import Logo from '../assets/logo-parfish.png';
import LoginButton from './LoginButton';
import LogoImage from './LogoImage';
import styled from '@emotion/styled';

const ParfishHeader = styled.header`
  background-color: #941e00;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
`;

const ParfishHeaderNav = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
`;

function LoginButtonOrMenu() {
  const path = window.location.pathname;
  if (path === '/' || path === '/signin') {
    return <LoginButton onClick={() => console.log('test')}>Login</LoginButton>;
  } else {
    return null;
  }
}

function Header() {
  return (
    <>
      <ParfishHeader>
        <ParfishHeaderNav>
          <LogoImage src={Logo} alt="Parfish Logo" />
          <LoginButtonOrMenu />
        </ParfishHeaderNav>
      </ParfishHeader>
    </>
  );
}

export default Header;
