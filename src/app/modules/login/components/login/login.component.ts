import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  sessionId = localStorage.getItem('status')

  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
    this.authService.getToken().subscribe(value => {
      this.authService.setToken(value)
    })
  }

  _createForm(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null),
    })
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(value => {
      this.authService.setSessionId(value['success'])
      this.router.navigate(['logout'])
    });

  }


}
