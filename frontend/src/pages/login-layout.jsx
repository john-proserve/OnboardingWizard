import { Outlet } from 'react-router-dom';
import { Wrapper } from '../styles/global';


export const LoginLayout = () => (
  <>
    <Wrapper>
      <Outlet />
    </Wrapper>
  </>
);
