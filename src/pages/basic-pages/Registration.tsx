import React, { useEffect } from 'react';
import { Paper, TextField, Typography } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import MyMiniButton from '../../components/UI/buttons/mini-buttons/MyMiniButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { fetchAuthLogin } from '../../redux/auth/asyncAction';
import { IFormInputs } from '../../redux/auth/types';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AppDispatch, useAppDispatch } from '../../redux/store';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';

const Registraton: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      fullName: '',
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

        window.localStorage.setItem('token', data.payload);
      }
    } catch (error) {
      console.warn(error, 'Не удалось сделать запрос');
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__inner">
          <form className="login__SignUpBlock">
            <Typography variant="h4" component="h3">
              Регистрация аккаунта
            </Typography>
            <div className="login__inputs">
              <TextField
                className="login__field"
                type="name"
                id="outlined-basic-name"
                label="Name"
                variant="outlined"
                fullWidth
                error={Boolean(errors.fullName?.message)}
                helperText={errors.fullName?.message}
                {...register('fullName', { required: 'Введите пожалуйта имя' })}
              />
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
              Есть аккаунт?{' '}
              <Link className="login__blueLink" to={LOGIN_ROUTE}>
                Войти!
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registraton;
