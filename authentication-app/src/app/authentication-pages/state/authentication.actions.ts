import { createAction, props } from "@ngrx/store";

import { RegisterInfo } from './../models/register-info.model';

export const doRegister = createAction(
  '[API] Do Register',
);

export const doRegisterSuccess = createAction(
  '[API] Do Register Success',
  props<{ registerInfo: RegisterInfo }>()
);

export const doRegisterFailure = createAction(
  '[API] Do Register Failure',
);
