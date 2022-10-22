import { Action, createReducer, on } from '@ngrx/store';

import { RegisterInfo } from './../models/register-info.model';
import * as fromAuthenticationActions from '../state/authentication.actions';


export interface AppState {
  registerInfo: RegisterInfo,
}

export const initialState: AppState = {
  registerInfo: {
    email: '',
    username: '',
    password: '',
  },
}

const appStateReducer = createReducer(
  initialState,
  on(fromAuthenticationActions.doRegister, (state) => ({
    ...state,
  })),
  on(fromAuthenticationActions.doRegisterSuccess, (state, { registerInfo }) => ({
    ...state,
    registerInfo: registerInfo,
  })),
  on(fromAuthenticationActions.doRegisterFailure, (state) => ({
    ...state,
  })),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appStateReducer(state, action);
}
