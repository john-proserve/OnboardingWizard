import { Outlet } from 'react-router-dom';
import { Wrapper } from '../styles/global';
import * as constants from '../constants';
import { useEffect, useState, createContext } from 'react';
import { getUserSteps } from '../utils/getUserSteps';

export const StepsContext = createContext();

export const FlowLayout = () => {
  if (!sessionStorage.getItem('user')) {
    window.location.href = `${constants.LOCAL_DOMAIN}${constants.LOCAL_PORT}`;
  }
  const initialState = {
    General: null,
    Billing: null,
    Integration: null,
    CarrierAccount: null,
    ShippingZones: null,
    Warehouse: null,
    Rules: null,
    LandedCostSettings: null,
    Buffers: null,
    TaxIds: null,
    Team: null,
    EnableApp: null,
  };
  const [steps, setSteps] = useState(initialState);

  useEffect(() => {
    const userSteps = async () => await getUserSteps();
    userSteps().then(response => {
      console.log(response);
      if (response) {
        let stepObj = steps;
        try {
          for (let step of response) {
            stepObj[step.step] = step.status;
          }
          setSteps(stepObj);
        } catch {
          console.log('nothing started');
        }
      }
    });
  }, []);

  return (
    <>
      <Wrapper>
        <StepsContext.Provider value={{ steps: steps, setSteps: setSteps }}>
          <Outlet />
        </StepsContext.Provider>
      </Wrapper>
    </>
  );
};
