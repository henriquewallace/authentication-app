import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegisterInfo } from '../../models/register-info.model';
import { AuthenticationService } from '../../services/authentication.service';

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

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmitRegisterInfo() {
    const request: RegisterInfo = {
      email: this.formGroup.get('email').value,
      username: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
    }
    console.log(request)

    this.authenticationService.createUser(request)
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      });
  }

}
