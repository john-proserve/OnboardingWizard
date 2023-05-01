import styled from 'styled-components';
import { UserCard } from '../components/ui/user-card';
import { Button, ButtonLink } from '../styles/global';
import { useFormInput } from '../hooks/use-form-input';
import { doFetch } from '../utils/doFetch';
import { useNavigate } from 'react-router-dom';

const SubmitButton = styled(Button)``;

const RegisterButton = styled(ButtonLink)``;

export const Login = () => {
  const navigate = useNavigate();
  const formProps = { username: useFormInput(''), password: useFormInput('') };

  const handleLogin = async (username, password) => {
    if (!username || !password) {
      alert('Please enter an email and password.');
      return;
    }

    const path = `/users/${username}`;

    const res = await doFetch(path);
    const resObject = await res.json();

    if (res.status === 400 && resObject.message === 'User not found') {
      alert('Please register as a new user');
      return;
    } else if (res.status === 400) {
      alert(`There was an error: ${resObject.message}`);
      return;
    }

    if (resObject.message.includes(username)) {
      sessionStorage.setItem('user', resObject.id);
      navigate('/checklist');
    }
  };

  return (
    <UserCard title="Login" formProps={{ ...formProps }}>
      <SubmitButton onClick={() => handleLogin(formProps.username.value, formProps.username.value)}>Login</SubmitButton>
      <RegisterButton to="register">Create a new account</RegisterButton>
    </UserCard>
  );
};
