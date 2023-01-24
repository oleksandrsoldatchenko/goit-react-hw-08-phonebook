import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return children;
};
