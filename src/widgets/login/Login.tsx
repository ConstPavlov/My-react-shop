import React, { useEffect } from 'react';
import { Paper, TextField, Typography } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import MyMiniButton from '../../components/UI/buttons/mini-buttons/MyMiniButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchAuthLogin } from '../../redux/auth/asyncAction';
import { IFormInputs } from '../../redux/auth/types';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { isAuth } from '../../redux/auth/select';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { setUserInfo } from '../../redux/auth/slice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSignUp = useSelector(isAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (values: IFormInputs) => {
    try {
      if (values) {
        console.log(values);
        const data = await dispatch(fetchAuthLogin(values));
        console.log(data);
        if (!data.payload) {
          return alert('Не удалось войти');
        }

        const token = data.payload;

        window.localStorage.setItem('token', token);

        const user = jwtDecode(token);
        dispatch(setUserInfo(user));
        console.log(user);
        navigate('/');
      }
    } catch (error) {
      console.warn(error, 'Не удалось сделать запрос');
    }
  };

  useEffect(() => {}, []);
  return (
    <form className="login__SignUpBlock">
      <Typography variant="h4" component="h3">
        Вход в аккаунт
      </Typography>
      <div className="login__inputs">
        <TextField
          className="login__field"
          type="email"
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          fullWidth
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Введите пожалуйта email' })}
        />
        <TextField
          className="login__field"
          type="password"
          id="outlined-basic-password"
          label="Password"
          variant="outlined"
          fullWidth
          error={Boolean(errors.password?.message)}
          helperText={errors ? errors.password?.message : ''}
          {...register('password', { required: 'Введите пожалуйта password' })}
        />
      </div>
      <div className="login__button">
        <MyMiniButton type="submit" onClick={handleSubmit(onSubmit)}>
          Войти
        </MyMiniButton>
      </div>
      <Typography className="login__footer" variant="body1" component="span">
        У вас ещё нет аккаунта?{' '}
        <Link className="login__blueLink" to={REGISTRATION_ROUTE}>
          Зарегистрируйтесь
        </Link>
      </Typography>
    </form>
  );
};

export default Login;
