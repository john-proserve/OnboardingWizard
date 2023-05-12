import styled from 'styled-components';
import { BeginButton } from './ui/begin-button';

const Card = styled.div`
  display: block;
  height: auto;
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

export const SectionCard = ({ title, description, nextPage, active }) => (
  <Card>
    <Heading>{title}</Heading>
    <Description>{description}</Description>
    {active && <BeginButton nextPage={nextPage} />}
  </Card>
);
