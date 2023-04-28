import * as constants from '../constants';

const host = `${constants.BACKEND_DOMAIN}${constants.BACKEND_PORT}`;

export const doFetch = async (path, method, body) => {
  let headers;
  if (body) {
    headers = { 'Content-Type': 'application/json' };
  }
  return await fetch(`${host}${path}`, {
    method: method,
    mode: 'cors',
    headers: headers,
    body: JSON.stringify(body),
  });
};
