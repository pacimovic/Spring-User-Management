import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model';
import { CreateUserService } from 'src/app/services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  router = inject(Router)

  constructor(private createUserService: CreateUserService) {}


  user: User = {
    userId: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    permission: {
        can_create_users: false,
        can_read_users: false,
        can_update_users: false,
        can_delete_users: false
    }
  }


  createUser(): void {
    this.createUserService.createUser(this.user).subscribe(user => {
      console.log(user)
      alert('User Created!')
      this.router.navigate(['showUsers'])
    })
  }
  

}
