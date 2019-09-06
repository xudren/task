import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../entity/Task';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  getTasks (): Observable<Task[]> {
    return this.http.get<Task[]>('api/tasks')//get是从服务器得到数组
    .pipe(
      tap(
        _ => this.success('success')
      )
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>('api/tasks', task)//从api请求数据，post方法
    .pipe(
      tap((newTask: Task) => {
        if (true) {
          `added task w/ id=${newTask.id}`
        } else {
          console.log("添加失败")
        }
      })
    )
  }

  getTask(id: number): Observable<Task> {  //用对象的id-唯一标识的，去数据库拿数据
    const url = `${'api/tasks'}/${id}`
    return this.http.get<Task>(url).pipe(
      tap( _ => this.success('success'))
    );
  }

  updateTask(taskForEdit: Task): Observable<any> {
    console.log(taskForEdit)
    return this.http.put('api/tasks', taskForEdit, httpOptions)//put更新用，往数组里put更新后的对象
    .pipe(
      tap((task: Task) => {
        if (true) {
          console.log('success')
        } else {
          console.log("添加失败")
        }
      })
    )
  }
  updateTasks(list:Task[]):Observable<any>{
    return this.http.put('api/tasks',list) //与单个更新或者编辑的道理一样，不过往里put一个更新后的数组，而不是一个对象
  }

// delete(task:Task|number):Observable<Task>{
//   const id=typeof task==='number'?task:task.id;
//   const url=`${'api/tasks'}/${id}`;
//   return this.http.delete<Task>(url)
// }

  private success(message: string) {
    console.log('success')
  }

}
