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
    <HomeLink to="/checklist">Home</HomeLink>
    <NavList>
      <NavLink to="/checklist/general">General</NavLink>

      <NavLink to="/checklist/billing">Billing</NavLink>

      <NavLink to="/checklist/integration">Integration</NavLink>

      <NavLink to="/checklist/carrier-account">Carrier Account</NavLink>

      <NavLink to="/checklist/warehouse">Warehouse</NavLink>

      <NavLink to="/checklist/shipping-zones">Shipping Zones</NavLink>

      <NavLink to="/checklist/rules-flat-rates">Rules</NavLink>

      <NavLink to="/checklist/landed-cost-settings">Landed Cost Settings</NavLink>

      <NavLink to="/checklist/tax-ids">Tax IDs</NavLink>

      <NavLink to="/checklist/buffers">Buffers</NavLink>

      <NavLink to="/checklist/team">Team</NavLink>

      <NavLink to="/checklist/app-enable">Enable App</NavLink>
    </NavList>
  </>
);
