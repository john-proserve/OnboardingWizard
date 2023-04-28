import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: block;
  width: fit-content;
  margin: 10px auto;
  color: black;
  background-color: #ee95a4;
  border-radius: 6px;
  padding: 5px 8px;
  text-decoration: none;
  border: 1px solid black;
`;

export const IncompleteButton = ({ nextPage }) => <Button to={`${nextPage}`}>I'm stuck...</Button>;
