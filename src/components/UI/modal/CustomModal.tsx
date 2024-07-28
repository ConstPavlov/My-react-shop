import React from 'react';
import { useOutside } from '../../../hooks/useOutside';
import classes from './CustonModal.module.scss';

const CustomModal: React.FC<any> = ({
  children,
  modal,
  setModal,
  ref2El,
  ...props
}) => {
  // const { ref } = useOutside(false);
  return (
    <>
      {modal && (
        <div
          className={`${classes.modalWindow} ${modal ? classes.active : ''}`}
          {...props}
        >
          <div ref={ref2El} className={classes.modalWindowContent} {...props}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
