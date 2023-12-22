import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  private readonly apiUrl = environment.usersApi


  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      })
    }
    return this.httpClient.get<User[]>(`${this.apiUrl}/all`, httpOptions)
  }




  
}
