import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit{


  users: User[] = []
  
  router = inject(Router)

  constructor(private userService: UserService) {}

    


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => this.users = users,
      error: (error) => {
        if(error.status === 403) {
          alert('You dont have permission for this resource!')
          this.router.navigate(['login'])
        }
      }
    })
    
  }
  
}
