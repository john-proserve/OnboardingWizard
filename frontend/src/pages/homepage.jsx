import { SectionCard } from '../components/section-card';
import { useEffect, useState } from 'react';
import { getCompletedSteps } from '../utils/getCompletedSteps';
import { Button } from '../styles/global';
import styled from 'styled-components';
import * as constants from '../constants';
import { useContext } from 'react';
import { StepsContext } from './flow-layout';

const accountInfo = {
  title: 'Account Info',
  description: 'General - Billing - Integration',
  nextPage: 'general',
};

const shipping = {
  title: 'Shipping Info',
  description: 'Carrier Account - Warehouse - Shipping Zones - Rules/Flat Rates',
  nextPage: 'carrier-account',
};

const landedCost = {
  title: 'Landed Cost Info',
  description: 'Landed Cost Settings - Tax IDs - Buffers - Team',
  nextPage: 'landed-cost-settings',
};

const shopify = {
  title: 'Shopify Connection',
  description: '',
  nextPage: 'app-enable',
};

const FinalButton = styled(Button)`
  height: 100px;
  width: 100%;
  background-color: mediumpurple;
  font-size: 42px;
`;

export const HomePage = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const { steps } = useContext(StepsContext);

  useEffect(() => {
    getCompletedSteps().then(stepStatuses => {
      setCompletedSteps(stepStatuses);
    });
  }, []);

  const handleClick = () => {
    sessionStorage.removeItem('user');
    window.location.href = `${constants.LOCAL_DOMAIN}${constants.LOCAL_PORT}`;
  };

  return (
    <>
      <Button onClick={handleClick}>Logout</Button>
      <SectionCard title={accountInfo.title} description={accountInfo.description} nextPage={accountInfo.nextPage} active />
      <SectionCard title={shipping.title} description={shipping.description} nextPage={shipping.nextPage} active={completedSteps.includes('Integration')} />
      <SectionCard title={landedCost.title} description={landedCost.description} nextPage={landedCost.nextPage} active={completedSteps.includes('Rules')} />
      <SectionCard title={shopify.title} description={shopify.description} nextPage={shopify.nextPage} active={completedSteps.includes('Team')} />
      {Object.values(steps).every(i => i === 'Complete' || i === 'Not Applicable') && <FinalButton>Congratulations! Schedule a call to finish!</FinalButton>}
    </>
  );
};
