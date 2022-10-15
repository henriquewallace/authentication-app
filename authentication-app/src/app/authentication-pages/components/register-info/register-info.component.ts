import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegisterInfo } from '../../models/register-info.model';

@Component({
  selector: 'app-register-info',
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmitRegisterInfo() {
    const request: RegisterInfo = {
      user: this.formGroup.get('username').value,
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
    }
  }

}
