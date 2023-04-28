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

export const getStepStatus = async (step_name, status_name) => {
  const stepRes = await doFetch(`/steps/${steps[step_name]}`, 'GET');
  const stepObj = await stepRes.json();
  const statusRes = await doFetch(`/status/${status_name}`, 'GET');
  const statusObj = await statusRes.json();

  return [stepObj.id, statusObj.id];
};
