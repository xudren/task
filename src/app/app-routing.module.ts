import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskComponent } from './task-home/task/task.component';
// import { TaskManagementComponent } from './task-home/tasks/task-list/task-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'//默认路径
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'task-home',
    component: TaskHomeComponent,
    children: [//子路由
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'user-management',
        component: UserManagementComponent
      },
    ]
  }
]


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
   ],//配置在哪一层哪一层就生效
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
