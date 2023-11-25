import React from 'react';
import classes from './CustonModal.module.scss';

const CustonModal: React.FC<any> = ({ children, modal, setModal, ...props }) => {
  return (
    <div className={`${classes.modalWindow} ${modal ? classes.active : ''}`} {...props}>
      <div className={classes.modalWindowContent} {...props}>
        {children}
      </div>
    </div>
  );
};

export default CustonModal;
