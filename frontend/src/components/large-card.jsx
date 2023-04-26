import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: block;
  height: auto;
  width: 60%;
  border: 1px solid black;
  border-radius: 6px;
  margin: 5px 0;
`;

const Heading = styled.h2`
  display: block;
  width: 50%;
  margin: 10px auto;
  text-align: center;
`;

const Description = styled.p`
  display: block;
  width: 50%;
  margin: 10px auto;
  text-align: center;
`;

const Button = styled.button`
  display: block;
  width: 10%;
  margin: 10px auto;
`;

export const LargeCard = ({ title, description, nextPage }) => (
  <Card>
    <Heading>{title}</Heading>
    <Description>{description}</Description>
    <Button>
      <Link to={`/${nextPage}`}>Next Step!</Link>
    </Button>
  </Card>
);
