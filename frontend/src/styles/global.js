import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  margin: auto;
  width: 60%;
`;

export const Button = styled.button`
  display: block;
  margin: 10px auto;
  color: black;
  border-radius: 6px;
  padding: 5px 8px;
  width: fit-content;
  text-decoration: none;
  border: 1px solid black;
`;

export const ButtonLink = styled(Link)`
  display: block;
  margin: 10px auto;
  color: black;
  border-radius: 6px;
  padding: 5px 8px;
  width: fit-content;
  text-decoration: none;
  border: 1px solid black;
`;

export const Information = styled.div`
  text-align: center;
`;