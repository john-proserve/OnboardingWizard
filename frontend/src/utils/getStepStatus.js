import { doFetch } from './doFetch';

const steps = {
  1: 'General',
  2: 'Billing',
  3: 'Integration',
  4: 'CarrierAccount',
  5: 'Warehouse',
  6: 'ShippingZones',
  7: 'Rules',
  8: 'LandedCostSettings',
  9: 'TaxIds',
  10: 'Buffers',
  11: 'Team',
  12: 'EnableApp',
  13: 'ScheduleCall',
};

export const getStepStatus = async (step_name = null, status_name = null) => {
  let stepRes, stepObj, statusRes, statusObj;
  let result = [];
  if (step_name) {
    stepRes = await doFetch(`/steps/${steps[step_name]}`, 'GET');
    stepObj = await stepRes.json();
    result.push(stepObj.id);
  }

  if (status_name) {
    statusRes = await doFetch(`/status/${status_name}`, 'GET');
    statusObj = await statusRes.json();
    result.push(statusObj.id);
  }

  return result;
};
