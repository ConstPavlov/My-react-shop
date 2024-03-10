import React from 'react';
import classes from './MyMiniButton.module.scss';

interface MiniButtonType {
  children: React.ReactNode;
  onClick: any;
  type?: any;
}
const MyMiniButton: React.FC<MiniButtonType> = ({ type, children, ...rest }: MiniButtonType) => {
  return (
    <button type={type} className={classes.buttonMy} {...rest}>
      {children}
    </button>
  );
};

export default MyMiniButton;
