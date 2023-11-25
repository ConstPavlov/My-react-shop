import React from 'react';
import classes from './MyMiniButton.module.scss';

interface MiniButtonType {
  children: React.ReactNode;
  onClick: any;
}
const MyMiniButton: React.FC<MiniButtonType> = ({ children, ...rest }: MiniButtonType) => {
  return (
    <button className={classes.buttonMy} {...rest}>
      {children}
    </button>
  );
};

export default MyMiniButton;
