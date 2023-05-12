import { doFetch } from './doFetch';

export const getUserSteps = async () => {
  const res = await doFetch(`/stepStatus/user/${sessionStorage.getItem('user')}`, 'GET');
  const obj = await res.json();
  return obj.result;
}