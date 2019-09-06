import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from '../entity/User';
import { UserService } from '../services/user.service'
import { InMemoryDataService } from '../in-memory-data.service';
import * as _ from 'lodash'
declare const $: (selector: string) => any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  user = new User();
  userForEdit = new User(); //编辑用的新对象
  selectuser = new User();
  userlist: User[] = [];
  selectsAll: Boolean;
  userList: any;
  userlist3: any;



  public pageParams = {
    totalNum: null,
    pageSize: null,
    pageData: null,
    totalPage: null,
    curPage: null,
    numlist: null
  }
  constructor(
    private userService: UserService,
    private memory: InMemoryDataService,

  ) { }

  ngOnInit() {   //初始化
    this.getUsers();
    this.initPage();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {    //返回数组
        //this.users = users
        function sliceArray(users, size) {//进行切割 //size是一页展示数目
          var result = [];
          for (var x = 0; x < Math.ceil(users.length / size); x++) {
            var start = x * size;
            var end = start + size;
            result.push(users.slice(start, end));
          }
          return result;
        }
        var array = sliceArray(users, this.pageParams.pageSize) //把切割好的数据库的数组，赋值给新数组
        console.log("asdfasdf", array)
        this.userlist3 = array;//赋值给全局变量的数组，可以让方法调用它
        this.users = array[0]//ngFor遍历的users是从切割的数组的第一个开始
      })
  }
  updateUser(userForEdit: User): void {
    this.userService.updateUser(userForEdit)
      .subscribe(userForEdit => {
        this.userForEdit = userForEdit;
        $('#aaa').click() //将返回的更新的值赋给userForEdit对象
        alert("编辑成功")
        this.getUsers(); //浏览器重新get一遍数据
      })

  }
  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();//筛选？
  }
  add(): void {
    this.userService.addUser(this.user)
      .subscribe(user => {
        this.users.push(user);
        $('#addUserDialogCloseButton').click()
        console.log("user", user)  //往数组里push数据
      });

  }
  getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(aa => this.userForEdit = aa) //将通过id返回的数据，赋值给这个对象
  }
  ggg(i: number, user: User) { // 从下往上看的checkbox
    this.userlist.push(user)//往里push数据
    // console.log('!!', (document.getElementsByClassName('user')[i] as any).checked);
    if ((document.getElementsByClassName('user')[i] as any).checked === true) { //如果其中一个选中，开始遍历数组
      // let count = 0;
      for (var i = 0; i < this.users.length; i++) {
        if ((document.getElementsByClassName('user')[i] as any).checked !== true) {//如果其他的复选框，其中一个没有被选上，那么总的复选框状态就是false
          // count += 1;
          this.selectsAll = false;
          return;
        }
      }
      this.selectsAll = true; //如果下面的复选框都选上了，上面的复选框就是true
      // if(count === this.users.length) {
      //   this.selectsAll = true;
      //   (document.getElementById('selectedAll') as any).checked = true;
      //   console.log('select all');
      // }
    }
    else {
      this.selectsAll = false //如果有一个没选那就是没选，不用遍历数组
    }

  }
  deletemore() {
    for (var i = 0; i < this.userlist.length; i++) {
      this.userService.deletes(this.userlist[i]).subscribe()//删除数组i个对象，然后在get一遍数据
      this.getUsers();
    }
    alert("删除成功")
  }
  selectAll() {

    if ((document.getElementById('selectedAll') as any).checked) {

      for (var i = 0; i < this.users.length; i++) {
        this.users[i].selected = true
        this.userlist.push(this.users[i])
        console.log("userlist", this.userlist)
      }
    }
    else {
      for (var i = 0; i < this.users.length; i++) {
        this.users[i].selected = false
        this.userlist.splice(0)
        console.log("userlist", this.userlist)

      }
    }
  }


  public initPage() {
    this.userList = this.memory.createDb();//从假的数据库中获取数组
    console.log(this.userList)
    this.pageParams.totalNum = this.userList.users.length;
    this.pageParams.pageData = this.pageParams.pageSize;
    this.pageParams.pageSize = 2;//一页几条数据

    this.pageParams.totalPage = Math.floor((this.pageParams.totalNum - 1) / this.pageParams.pageSize) + 1;//多少页
    this.pageParams.curPage = 1;

  }

  // getPageData(pageNo) {
  //   this.pageParams.curPage = pageNo;
  //   this.pageParams.pageSize = this.pageParams.pageData * pageNo;
  // }


  getPageList() {//获取页码数 1，2，3，4，5，6，与HHTML中的ngFor循环的页码数进行交互，

    let pageList = []    
    for (var i = 0; i < this.pageParams.totalPage; i++) {  //遍历总页码数
      pageList.push({
        pageNo: i + 1
      })
    }

    return pageList;//返回的是页码数的数组 类型是number
  }

  changeCurrentPage(pageNo): void {
    this.pageParams.curPage = pageNo
    this.users = this.userlist3[pageNo - 1];
  }

  setPage() {
    this.getUsers()
    this.pageParams.totalPage = Math.floor((this.pageParams.totalNum - 1) / this.pageParams.pageSize) + 1;//分页

  }
  previousPage() :void{
    console.log(this.pageParams.curPage)
    this.pageParams.curPage = this.pageParams.curPage - 1;//当前数组-1
    this.users = this.userlist3[this.pageParams.curPage - 1];
  }
  nextPage(){
    console.log(this.pageParams.curPage)
    this.pageParams.curPage=this.pageParams.curPage+1;//当前数组+1
    this.users=this.userlist3[this.pageParams.curPage-1]
  }





}


