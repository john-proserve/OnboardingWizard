import styled from 'styled-components';
import { UserCard } from '../components/ui/user-card';
import { Button, ButtonLink } from '../styles/global';
import { useFormInput } from '../hooks/use-form-input';

const SubmitButton = styled(Button)``;

const RegisterButton = styled(ButtonLink)``;

export const Login = () => {
  const formProps = { username: useFormInput(null), password: useFormInput(null) };

  const handleLogin = async (username, password) => {
    if (!username || !password) {
      alert('Please enter an email and password.');
      return;
    }
    const res = await fetch(`http://localhost:2023/users/${username}`, {
      method: 'GET',
      mode: 'cors',
    });
    console.log(res);
    const resObject = await res.json();
    if (res.status === 400) {
      alert(`There was an error: ${resObject.message}`);
    }
    if (resObject.message.includes(username)) {
      window.location.href = 'http://localhost:3000/checklist';
    }
    console.log(resObject);
  };

  return (
    <UserCard title="Login" formProps={{ ...formProps }}>
      <SubmitButton onClick={() => handleLogin(formProps.username.value, formProps.username.value)}>Login</SubmitButton>
      <RegisterButton to="register">Create a new account</RegisterButton>
    </UserCard>
  );
};
