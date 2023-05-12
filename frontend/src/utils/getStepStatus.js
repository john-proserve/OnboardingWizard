import { doFetch } from './doFetch';

export const getStepStatus = async (step_name = null, status_name = null) => {
  let stepRes, stepObj, statusRes, statusObj;
  let result = [];
  if (step_name) {
    stepRes = await doFetch(`/steps/${step_name}`, 'GET');
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
