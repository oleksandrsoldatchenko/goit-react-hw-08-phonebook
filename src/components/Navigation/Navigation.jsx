import { NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <NavContainer>
      <NavStyled to="/home">Нome</NavStyled>
      {isLogin && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </NavContainer>
  );
};