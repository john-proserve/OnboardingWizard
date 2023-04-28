import styled from 'styled-components';
import { UserCard } from '../components/ui/user-card';
import { Button } from '../styles/global';
import { useFormInput } from '../hooks/use-form-input';
import { doFetch } from '../utils/doFetch';
import { useNavigate } from 'react-router-dom';

const RegisterButton = styled(Button)``;

export const Register = () => {
  const formProps = { username: useFormInput(''), password: useFormInput('') };
  const navigate = useNavigate();
  const handleRegister = async (username, password) => {
    const res = await doFetch('/users', 'POST', { username: username, password: password });
    const resObject = await res.json();

    switch (res.status) {
      case 400:
        alert(resObject.message);
        break;
      case 409:
        alert(resObject.message);
        break;
      case 201:
        navigate('/checklist', { state: {username: username} });
        break;
      default:
        alert('Something went wrong. Please try again.');
    }
  };

  return (
    <UserCard title="Register" formProps={{ ...formProps }}>
      <RegisterButton onClick={() => handleRegister(formProps.username.value, formProps.password.value)}>Register</RegisterButton>
    </UserCard>
  );
};
