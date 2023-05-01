import styled from 'styled-components';
import { getStepStatus } from '../../utils/getStepStatus';
import { doFetch } from '../../utils/doFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export const NoteField = ({ nextPage, step, optionalClicked }) => {
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setNote(e.target.value);
  };

  const handleClick = async () => {
    const [stepId] = await getStepStatus(step);
    console.log(sessionStorage.getItem('user'), stepId, note);
    const body = {
      user_id: sessionStorage.getItem('user'),
      step_id: stepId,
      note: note,
    };
    const res = await doFetch('/notes', 'POST', body);
    const resObj = await res.json();
    if (res.status === 400) {
      alert(resObj.message);
    }
    setNote('');

    if (optionalClicked) {
      navigate(`/checklist/${nextPage}`);
    }
  };

  useEffect(() => {
    document.getElementById('noteBox').value = note;
  }, [note]);

  return (
    <>
      <TextBox id="noteBox" rows={5} cols={50} onChange={handleChange}></TextBox>
      <Button id="noteButton" onClick={handleClick}>Submit Notes</Button>
    </>
  );
};
