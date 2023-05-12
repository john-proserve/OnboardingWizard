import styled from 'styled-components';

export const StyledCard = styled.div`
  display: block;
  text-align: center;
  margin: auto;
  border: 1px solid black;
  border-radius: 6px;
`;

export const UserCard = ({ children, title, formProps }) => (
  <StyledCard>
    <h2>{title}</h2>
    <label>Email: </label>
    <input type="email" id="email" name="email" value={formProps.username.value} onChange={formProps.username.onChange} />
    <br />
    <label>Password: </label>
    <input type="password" id="password" name="password" value={formProps.password.value} onChange={formProps.password.onChange} />
    {children}
  </StyledCard>
);
