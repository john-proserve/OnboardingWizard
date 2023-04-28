import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavList = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-size: 18px;
  text-decoration: none;
  color: black;
  background-color: white;
  width: 100%;
`;

const HomeLink = styled(NavLink)`
  height: 50px;
`;

export const Navbar = () => (
  <>
    <HomeLink to="/">Home</HomeLink>
    <NavList>
      <NavLink to="/general">General</NavLink>

      <NavLink to="/billing">Billing</NavLink>

      <NavLink to="/integration">Integration</NavLink>

      <NavLink to="/carrier-account">Carrier Account</NavLink>

      <NavLink to="/warehouse">Warehouse</NavLink>

      <NavLink to="/shipping-zones">Shipping Zones</NavLink>

      <NavLink to="/rules-flat-rates">Rules</NavLink>

      <NavLink to="/landed-cost-settings">Landed Cost Settings</NavLink>

      <NavLink to="/tax-ids">Tax IDs</NavLink>

      <NavLink to="/buffers">Buffers</NavLink>

      <NavLink to="/team">Team</NavLink>

      <NavLink to="/app-enable">Enable App</NavLink>
    </NavList>
  </>
);
