import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';
import styled from 'styled-components';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <UserNav>
      <StyledName>Hello, {name} </StyledName>
      <Button variant="contained" size="small" onClick={onLogOut} type="button">
        Log Out
      </Button>
    </UserNav>
  );
};

export const UserNav = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: #1976d2;
`;

