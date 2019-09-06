import { BrowserModule } from '@angular/platform-browser';//浏览器解析的模块
import { NgModule } from '@angular/core';//核心模块
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';//根组件
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task-home/task/task.component';
import { LoginService } from './services/login.service';
import { InMemoryDataService }  from './in-memory-data.service';
import { TaskManagementComponent } from './task-home/task-management/task-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { TaskHomeComponent } from './task-home/task-home.component';


@NgModule({
  declarations: [//项目运行的组件
    AppComponent,
    LoginComponent,
    TaskComponent,
    TaskManagementComponent,
    UserManagementComponent,
    TaskHomeComponent,
   
  ],
  imports: [//当前模块依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }//模拟拦截请求 与返回数据
    ),
  ],
  providers: [LoginService],//所需要的服务
  bootstrap: [AppComponent]//应用的主视图
})
export class AppModule { }
