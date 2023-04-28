import styled from 'styled-components';

const TextBox = styled.textarea`
  display: block;
  margin: 10px auto;
`;

const Button = styled.button`
  margin: 10px auto;
  display: block;
  border-radius: 6px;
  border: 1px solid black;
`;

export const NoteField = () => (
  <>
    <TextBox rows={5} cols={50}></TextBox>
    <Button>Submit Notes</Button>
  </>
);
