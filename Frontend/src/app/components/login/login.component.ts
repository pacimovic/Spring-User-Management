import { Component } from '@angular/core';
import { LoginRequest } from 'src/app/model';
import { AppService } from 'src/app/services/app.service';
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

  constructor(private loginService: LoginService, private appService: AppService){}

  login(): void {
    console.log('Email: ' + this.loginRequest.email + ' ,Password: ' + this.loginRequest.password)
    this.loginService.login(this.loginRequest).subscribe(loginResponse => {
      console.log(loginResponse)

      //cuvanje jwt-a u local storage
      localStorage.removeItem('jwt')
      localStorage.setItem('jwt', loginResponse.jwt)

      //cuvanje permisija za ulogovanog user-a u local storage
      localStorage.removeItem('permission')
      localStorage.setItem('permission', JSON.stringify(loginResponse.permission))

      //prikaz ili sakrivanje linka za kreiranje korisnika od zavisnosti od permisije
      if(loginResponse.permission.can_create_users) this.appService.permission.can_create_users = true
      else this.appService.permission.can_create_users = false

      alert('Login successful')
    })

    this.loginRequest.email = ''
    this.loginRequest.password = ''
  }
}
