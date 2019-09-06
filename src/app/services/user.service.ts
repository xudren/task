import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../entity/User';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>('api/users')
    .pipe(
      tap(
        _ => this.success('success')
      )
    )
  }
  getUser(id:number):Observable<User>{
    const url=`${'api/users'}/${id}`
    return this.http.get<User>(url).pipe(
      tap(_=>this.success('success'))
    )
  }

  private success(message: string) {
    console.log('success')
  }
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${'api/users'}/${id}`;

    return this.http.delete<User>(url).pipe(
      tap(_ => this.success(`deleted hero id=${id}`)),
     
    );
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>('api/users',user)
  }
  updateUser(userForEdit:User):Observable<any>{
    return this.http.put('api/users',userForEdit)
  }
  deletes(selectuser:any):Observable<User>{
    const url=`${'api/users'}/${selectuser.id}`;
    return this.http.delete<User>(url)
    
  }

}
