import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/User'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Result } from '../entity/Result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private userUrl = 'api/users';

  constructor(
    private http:HttpClient,
    private router:Router
    ) {}

  login (user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>('api/users', user)
    
  }
  // getUser(): Observable<User[]> {s
  //   // return this.http.get<User[]>(this.userUrl).pipe();
  // }
}
