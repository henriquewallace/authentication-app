import { Action, createReducer } from '@ngrx/store';
import { RegisterInfo } from './../models/register-info.model';


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
);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appStateReducer(state, action);
}
