import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { doFetch } from '../../utils/doFetch';
import { getStepStatus } from '../../utils/getStepStatus';
import { useContext } from 'react';
import { StepsContext } from '../../pages/flow-layout';

const Button = styled.button`
  display: block;
  margin: 10px auto;
  color: black;
  background-color: lightgreen;
  border-radius: 6px;
  padding: 5px 8px;
  width: fit-content;
  text-decoration: none;
  border: 1px solid black;
`;

export const CompleteButton = ({ nextPage, step }) => {
  const { steps, setSteps } = useContext(StepsContext);
  const navigate = useNavigate();
  const handleClick = async () => {
    const [stepId, statusId] = await getStepStatus(step, 'Complete');
    const body = {
      user_id: sessionStorage.getItem('user'),
      step_id: stepId,
      status_id: statusId,
      date_completed: Date.now(),
    };
    const res = await doFetch('/stepStatus', 'POST', body);
    const resObj = await res.json();
    switch (res.status) {
      case 400:
        alert(resObj.message);
        break;
      default:
        let newSteps = steps;
        newSteps[step] = 'Complete';
        setSteps(newSteps);
        navigate(`/checklist/${nextPage}`);
        break;
    }
  };

  return <Button onClick={handleClick}>Task Finished!</Button>;
};
