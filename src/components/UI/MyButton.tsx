import React, { ReactNode } from 'react';

type IMyButton = {
  children: string;
  className?: string;
  props: any;
};
const MyButton: React.FC<IMyButton> = ({ children, ...props }) => {
  return <button>{children}</button>;
};

export default MyButton;
