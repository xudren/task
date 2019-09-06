import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Task } from './entity/Task'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const tasks = [
      {
        id: 1,
        taskName: 'task1',
        taskState: 'new',
        taskStaff: 'a',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '有问题',
        edit: '',
        select:''
      },
      {
        id: 2,
        taskName: 'task2',
        taskState: 'new',
        taskStaff: 'b',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '没问题',
        edit: '',
        select:''
      },
      {
        id: 3,
        taskName: 'task3',
        taskState: 'completed',
        taskStaff: 'c',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '有没有问题',
        edit: '',
        select:''
      },
      {
        id: 4,
        taskName: 'task4',
        taskState: 'new',
        taskStaff: 'd',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '不',
        edit: '',
        select:''
      },
      {
        id: 5,
        taskName: 'task5',
        taskState: 'new',
        taskStaff: 'e',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '好',
        edit: '',
        select:''
      },
      {
        id: 6,
        taskName: 'task6',
        taskState: 'new',
        taskStaff: 'f',
        taskDescription: '',
        operation: '',
        time: new Date(),
        question: '不好',
        edit: '',
        select:''
      }
    ];
    const users = [
      {
        id: 1,
        username: 'username',
        password: 'password',
        name: 'username',
        role: '管理员',
        email: '123456789@qq.com'
      },
      {
        id: 2,
        username: 'username1',
        password: 'password1',
        name: 'username1',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 3,
        username: 'username2',
        password: 'password2',
        name: 'username1',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 4,
        username: 'username3',
        password: 'password3',
        name: 'username3',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 5,
        username: 'username4',
        password: 'password4',
        name: 'username4',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 6,
        username: 'username5',
        password: 'password5',
        name: 'username5',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 7,
        username: 'username6',
        password: 'password6',
        name: 'username6',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 8,
        username: 'username7',
        password: 'password7',
        name: 'username7',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 9,
        username: 'username8',
        password: 'password8',
        name: 'username8',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 10,
        username: 'username9',
        password: 'password9',
        name: 'username9',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 11,
        username: 'username10',
        password: 'password10',
        name: 'username10',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 12,
        username: 'username11',
        password: 'password11',
        name: 'username11',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 13,
        username: 'username12',
        password: 'password12',
        name: 'username12',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 14,
        username: 'username13',
        password: 'password13',
        name: 'username13',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 15,
        username: 'username14',
        password: 'password14',
        name: 'username14',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 16,
        username: 'username15',
        password: 'password15',
        name: 'username15',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 17,
        username: 'username16',
        password: 'password16',
        name: 'username16',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 18,
        username: 'username17',
        password: 'password17',
        name: 'username17',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 19,
        username: 'username18',
        password: 'password18',
        name: 'username18',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 20,
        username: 'username19',
        password: 'password19',
        name: 'username19',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 21,
        username: 'username20',
        password: 'password20',
        name: 'username20',
        role: '操作员',
        email: '213456789@qq.com'
      },
      {
        id: 22,
        username: 'username21',
        password: 'password21',
        name: 'username21',
        role: '操作员',
        email: '213456789@qq.com'
      }
    ];
    return { tasks,users };
    
  }


  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
