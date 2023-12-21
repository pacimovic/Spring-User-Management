import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model';
import { ShowUsersService } from 'src/app/services/show-users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit{


  users: User[] = []
  
  router = inject(Router)

  constructor(private showUsersService: ShowUsersService) {}

  ngOnInit(): void {
    this.showUsersService.getAllUsers().subscribe({
      next: (users) => this.users = users,
      error: (error) => {
        if(error.status === 403) {
          alert('You dont have permission for this resource!')
          this.router.navigate(['login'])
        }
        if(error.status === 401) {
          alert('Token invalid, please login again!')
          this.router.navigate(['login'])
        }
      }
    })
    
  }
  
}
