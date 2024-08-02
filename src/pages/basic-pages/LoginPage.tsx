import React, { useEffect } from 'react';
import Login from '../../widgets/login/Login';

const LoginPage: React.FC = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__inner">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
