import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StepsContext } from '../pages/flow-layout';

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
  background-color: ${props => {
    switch (props.status) {
      case 'Complete':
        return 'lightgreen';
      case 'On Hold':
        return 'pink';
      case 'Not Applicable':
        return 'yellow';
      default:
        return 'white';
    }
  }};
  width: 100%;
`;

const HomeLink = styled(NavLink)`
  height: 50px;
`;

export const Navbar = () => {
  const { steps } = useContext(StepsContext);
  console.log(steps);

  return (
    <>
      <HomeLink to="/checklist">Home</HomeLink>
      <NavList>
        <NavLink to="/checklist/general" status={steps['General']}>
          General
        </NavLink>

        <NavLink to="/checklist/billing" status={steps['Billing']}>
          Billing
        </NavLink>

        <NavLink to="/checklist/integration" status={steps['Integration']}>
          Integration
        </NavLink>

        <NavLink to="/checklist/carrier-account" status={steps['CarrierAccount']}>
          Carrier Account
        </NavLink>

        <NavLink to="/checklist/warehouse" status={steps['Warehouse']}>
          Warehouse
        </NavLink>

        <NavLink to="/checklist/shipping-zones" status={steps['ShippingZones']}>
          Shipping Zones
        </NavLink>

        <NavLink to="/checklist/rules-flat-rates" status={steps['Rules']}>
          Rules
        </NavLink>

        <NavLink to="/checklist/landed-cost-settings" status={steps['LandedCostSettings']}>
          Landed Cost Settings
        </NavLink>

        <NavLink to="/checklist/tax-ids" status={steps['TaxIds']}>
          Tax IDs
        </NavLink>

        <NavLink to="/checklist/buffers" status={steps['Buffers']}>
          Buffers
        </NavLink>

        <NavLink to="/checklist/team" status={steps['Team']}>
          Team
        </NavLink>

        <NavLink to="/checklist/app-enable" status={steps['EnableApp']}>
          Enable App
        </NavLink>
      </NavList>
    </>
  );
};
