import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: auto;
  width: 60%;
`;

export const Layout = () => (
  <>
    <Navbar />
    <Wrapper>
      <Outlet />
    </Wrapper>
  </>
);
