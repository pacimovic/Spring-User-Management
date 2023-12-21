import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  private readonly apiUrl = environment.usersApi

  router = inject(Router)

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`, this.httpOptions)
  }

  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}`
    })
  }


  
}
