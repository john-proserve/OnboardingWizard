import styled from 'styled-components';
import { CompleteButton } from './ui/complete-button';
import { IncompleteButton } from './ui/incomplete-button';
import { OptionalButton } from './ui/optional-button';
import { NoteField } from './ui/note-field';
import { useState } from 'react';

const Card = styled.div`
  display: block;
  height: auto;
  width: 90%;
  border: 1px solid black;
  border-radius: 6px;
  margin: 5px auto;
  padding: 10px;
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

export const LargeCard = ({ title, description, nextPage, optional, step }) => {
  const [optionalClicked, setOptionalClicked] = useState(false);
  return (
    <Card id="card">
      <Heading>{title}</Heading>
      <Description>{description}</Description>
      <CompleteButton nextPage={nextPage} step={step} />
      <IncompleteButton nextPage={nextPage} step={step} />
      {optional && <OptionalButton step={step} setOptional={setOptionalClicked} />}
      <NoteField step={step} nextPage={nextPage} optionalClicked={optionalClicked} />
    </Card>
  );
};
