import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  display: block;
  margin: 10px auto;
  color: black;
  background-color: lightblue;
  border-radius: 6px;
  padding: 5px 8px;
  width: fit-content;
  text-decoration: none;
  border: 1px solid black;
`;

export const BeginButton = ({ nextPage }) => <Button to={`${nextPage}`}>Begin this section</Button>;
