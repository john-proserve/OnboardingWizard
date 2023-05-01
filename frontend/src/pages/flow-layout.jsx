import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Wrapper } from '../styles/global';
import * as constants from '../constants';
import { useState } from 'react';

export const FlowLayout = () => {
  if (!sessionStorage.getItem('user')) {
    window.location.href = `${constants.LOCAL_DOMAIN}${constants.LOCAL_PORT}`;
  }

  const [isHome, setIsHome] = useState(window.location.pathname === '/checklist');

  return (
    <>
      {!isHome && <Navbar />}
      <Wrapper>
        <Outlet context={[isHome, setIsHome]} />
      </Wrapper>
    </>
  );
};
