import styled from 'styled-components';
import { useState } from 'react';

const Button = styled.button`
  display: block;
  margin: 10px auto;
  color: black;
  background-color: yellow;
  border-radius: 6px;
  padding: 5px 8px;
  width: fit-content;
  text-decoration: none;
  border: 1px solid black;
`;

const TextBoxDesc = styled.h4`
  margin: auto;
  display: block;
  width: 50%;
  text-align: center;
`;

export const OptionalButton = ({ setOptional }) => {
  const [notes, setNotes] = useState(false);

  const handleClick = e => {
    setNotes(true);
    setOptional(true);
  };

  return (
    <>
      <Button onClick={handleClick}>This task does not apply to me.</Button>
      {notes && (
        <TextBoxDesc>
          To help us better assist you in the future,
          <br />
          please briefly explain why this task does not apply to you.
        </TextBoxDesc>
      )}
    </>
  );
};
