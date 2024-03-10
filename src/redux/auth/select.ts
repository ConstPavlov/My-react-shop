import { RootState } from '../store';

export const isAuth = (state: RootState) => Boolean(state.auth.user);
