import { useNavigate } from 'react-router-dom';
import { logOut } from '../redux/auth/slice';
import { useAppDispatch } from '../redux/store';
import { HOME_ROUTE } from './consts';

export const handlerLogOut = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(logOut());
  window.localStorage.removeItem('token');
  navigate(`${HOME_ROUTE}`);
};
