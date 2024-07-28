import React from 'react';
import { getUserInfo } from '../../../utils/getUserInfo';
const Profile = () => {
  const userInfo = getUserInfo();
  return (
    <div className="profile">
      Profile
      <ul className="myInfo">
        <li>Мой email: {userInfo.email}</li>
        <li>Моё имя: {userInfo.fullName}</li>
        <li>Моя роль:{userInfo.role}</li>
        <li>Дата моей регистрации:{userInfo.iat}</li>
      </ul>
    </div>
  );
};

export default Profile;
