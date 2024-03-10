import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import classes from './Skeleton.module.scss';
import { margin } from '@mui/system';

const HeaderSkeleton = () => {
  return (
    <div className={classes.skeleton}>
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="circular" width={30} height={30} />
    </div>
  );
};

export default HeaderSkeleton;
