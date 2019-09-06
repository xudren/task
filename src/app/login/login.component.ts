import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../entity/User';
import {Router} from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User ();
  users:User[];
 
  constructor(
    private loginService:LoginService,
    private router:Router
    )
    {}

  ngOnInit() {
    // this.loginService.getUser().subscribe((users) => {
    //   this.users = users;
    //   console.log(this.users)
    // });
  }
  login(user): void{
    
    this.loginService.login(this.user)
    .subscribe(user =>this.user=user)
    {

      if(this.user.username==='username'&&this.user.password==='password'){
        this.router.navigate(['/task-home'])
      
    }
    
    }
    if(this.user.username==='username1'&&this.user.password==='password1'){
      this.router.navigate(['/task-home'])
    
  }
  
  


    // const userList = [
    //   {
    //     id: 1,
    //     username: 'uesrname',
    //     password: 'password',
    //     name: 'username',
    //     role: '管理员',
    //     email: '123456789@qq.com'
    //   },
    //   {
    //     id: 2,
    //     username: 'uesrname1',
    //     password: 'password1',
    //     name: 'username1',
    //     role: '操作员',
    //     email: '213456789@qq.com'
    //   }
    // ];

    // const a= _.find(userList ,{'username':this.user.username});
    // if(a.password===this.user.password){
    
  // }else{
  //   alert('登录失败')
  // }
  }
  
}
