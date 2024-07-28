import { Status } from '../cards/types';

export interface IAuth {
  user: any | null;
  userInfo: any | null;
  status: Status;
}

export interface IFormInputs {
  email: any;
  password: any;
}
