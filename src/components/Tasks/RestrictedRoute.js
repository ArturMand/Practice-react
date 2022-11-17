import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { tokenSelector } from './components/Redux/selector/Selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isToken = useSelector(tokenSelector);
  return isToken ? <Navigate to={redirectTo} /> : Component;
};
