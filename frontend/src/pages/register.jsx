import styled from 'styled-components';
import { UserCard } from '../components/ui/user-card';
import { Button } from '../styles/global';

const RegisterButton = styled(Button)``;

export const Register = () => {
  const handleRegister = () => {
    
  }
  
  return (
    <UserCard title="Register">
      <RegisterButton onClick={handleRegister}>Register</RegisterButton>
    </UserCard>
  );
};
