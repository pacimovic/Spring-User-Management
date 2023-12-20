import { Component } from '@angular/core';
import { LoginRequest } from 'src/app/model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest: LoginRequest = {
    email: '',
    password: ''
  }



  constructor(private loginService: LoginService){}

  login(): void {
    console.log('Email: ' + this.loginRequest.email + ' ,Password' + this.loginRequest.password)
    this.loginService.login(this.loginRequest).subscribe(loginResponse => {
      console.log(loginResponse)
      alert('Login successful')
    })

    this.loginRequest.email = ''
    this.loginRequest.password = ''
  }
}
