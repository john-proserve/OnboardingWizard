import styled from 'styled-components';
import { getStepStatus } from '../../utils/getStepStatus';
import { doFetch } from '../../utils/doFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StepsContext } from '../../pages/flow-layout';

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
  const { steps, setSteps } = useContext(StepsContext);

  const handleChange = e => {
    setNote(e.target.value);
  };

  const handleClick = async () => {
    const [stepId, statusId] = await getStepStatus(step, 'Not Applicable');
    const userId = sessionStorage.getItem('user');
    const body = {
      user_id: userId,
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
      const statusBody = {
        user_id: userId,
        step_id: stepId,
        status_id: statusId,
        date_completed: Date.now(),
      };
      doFetch('/stepStatus', 'POST', statusBody);
      let newSteps = steps;
      newSteps[step] = 'Not Applicable';
      setSteps(newSteps);
      navigate(`/checklist/${nextPage}`);
    }
  };

  useEffect(() => {
    document.getElementById('noteBox').value = note;
  }, [note]);

  return (
    <>
      <TextBox id="noteBox" rows={5} cols={50} onChange={handleChange}></TextBox>
      <Button id="noteButton" onClick={handleClick}>
        Submit Notes
      </Button>
    </>
  );
};
