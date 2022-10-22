import { AppState } from './../../state/authentication.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { RegisterInfo } from '../../models/register-info.model';
import { AuthenticationService } from '../../services/authentication.service';
import * as fromAuthenticationActions from '../../state/authentication.actions';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private store: Store<AppState>,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmitRegisterInfo() {
    const request: RegisterInfo = {
      email: this.formGroup.get('email').value,
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
    }

    this.store.dispatch(fromAuthenticationActions.doRegister(request));
    // this.authenticationService.createUser(request)
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (error) => console.error(error),
    //     complete: () => console.info('complete')
    //   });
  }

}
