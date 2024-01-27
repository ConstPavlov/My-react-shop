import { Paper, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyMiniButton from '../../components/UI/buttons/mini-buttons/MyMiniButton';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {};

  useEffect(() => {}, []);
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__inner">
          <form className="login__SignUpBlock">
            <Typography variant="h4" component="h3">
              Вход в аккаунт
            </Typography>
            <div className="login__inputs">
              <TextField
                className="login__field"
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <TextField
                className="login__field"
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="login__button">
              <MyMiniButton type="submit" onClick={onSubmit}>
                Войти
              </MyMiniButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
