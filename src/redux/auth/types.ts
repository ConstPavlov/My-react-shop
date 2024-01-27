import { Status } from '../cards/types';

export interface IAuth {
  user: any| null;
  status: Status;
}

export interface Iregister {
  email: string;
  password: string | number;
}
