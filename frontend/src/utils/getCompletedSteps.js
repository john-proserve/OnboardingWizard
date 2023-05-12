import { doFetch } from './doFetch';

export const getCompletedSteps = async () => {
  const res = await doFetch(`/stepStatus/user/${sessionStorage.getItem('user')}`, 'GET');
  const obj = await res.json();
  return obj.result
    .filter(step => {
      switch (step.status) {
        case 'Complete':
        case 'On Hold':
        case 'Not Applicable':
          return step;
        default:
          return null;
      }
    })
    .map(step => step.step);
};
