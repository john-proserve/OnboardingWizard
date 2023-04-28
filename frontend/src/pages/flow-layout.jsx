import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Wrapper } from '../styles/global';



export const FlowLayout = () => (
  <>
    <Navbar />
    <Wrapper>
      <Outlet />
    </Wrapper>
  </>
);
