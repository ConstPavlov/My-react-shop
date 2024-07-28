import { ClassNames } from '@emotion/react';
import React from 'react';
import classes from './GoBackBtn.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoBackBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <span className={classes.goBackButton} onClick={() => navigate(-1)}>
        Назад
      </span>
    </>
  );
};

export default GoBackBtn;
