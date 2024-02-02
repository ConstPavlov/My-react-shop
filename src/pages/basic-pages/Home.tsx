import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAuthCheck } from '../../redux/auth/asyncAction';
import { RootState, useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const { userInfo, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [info, setInfo] = React.useState<any>(null);

  React.useEffect(() => {
    if (user) {
      const decode = jwtDecode(user);
      setInfo(decode);
    } else {
      setInfo(null);
    }
    console.log(user);
  }, [user]);
  console.log(info);
  return (
    <div className="container">
      <div className="home">
        <h1>Home Page</h1>
        <p>В будущем тут будут слайдеры и баннеры</p>
        <ul className="myInfo">{info ? <li>Мой email: {info.email}</li> : 'тут пока пусто'}</ul>
      </div>
    </div>
  );
};

export default Home;
