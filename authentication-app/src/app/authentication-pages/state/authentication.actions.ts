import { createAction, props } from "@ngrx/store";

import { RegisterInfo } from './../models/register-info.model';

export const doRegister = createAction(
  '[RegisterInfo Component] Do Register',
  props<RegisterInfo>()
)
