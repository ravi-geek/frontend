import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export type User = {
  name: string;
};

export interface AuthState {
  user: User | null;
}

export const initialState: AuthState = {
  user: null
};


export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state, { user }) => ({ user })),
  on(authActions.logout, () => ({ user: null }))
);
