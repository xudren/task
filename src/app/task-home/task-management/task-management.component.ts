import { Component, OnInit ,DoCheck} from '@angular/core';
import { Task } from '../../entity/Task';
import { TaskService } from '../../services/task.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { invalid } from '@angular/compiler/src/render3/view/util';

declare const $: (selector: string) => any;
@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit
{
  taskList: any;
  tasks: Task[];
  task= new Task();
  taskForEdit = new Task();
  isAddTaskVisible = false;
  list:Task[]=[];
  lists =new Task()
  select=false;
  
  

  
  constructor(
    private taskService: TaskService,
    private location: Location// Angular的服务，用来与浏览器打交道
   
    ) { }

  ngOnInit() {
    this.getTasks();//返回数组
   
    
  }

  getTasks(): void {
    
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
    console.log("ghj"+this.tasks)
  }//返回数组，显示数组

  submitted = false;

  onSubmit() { this.submitted = true; }

  add(): void {
    console.log(this.task)
  
    this.taskService.addTask(this.task)
      .subscribe(task => {
        this.tasks.push(task);
     $('#addTaskDialogCloseButton').click()//model框的自动关闭，调用的是 model框（关闭）方法的功能
      alert("提交成功！")
      });
    
  }//添加

  getTask(id: number) {

     this.taskService.getTask(id)
     .subscribe(taskForEdit => this.taskForEdit = taskForEdit);
  }//返回对象

 
  updateTask(taskForEdit: Task): void {
    console.log(taskForEdit)
    this.taskService.updateTask(taskForEdit)
      .subscribe(taskForEdit => {
        this.taskForEdit = taskForEdit;
        console.log('-------'+taskForEdit);
        $('#updateTaskDialogCloseButton').click()
        this.getTasks(); //updateTaskDialogCloseButton
       
      alert("提交成功！");

      });//taskforedit是新建的对象，双向绑定
  }//更新

updateTasks(lists:Task):void{
  
  for(var  i=0;i<this.list.length;i++ ){
console.log('-------'+lists);
this.list[i].question=lists.question;

this.list[i].taskDescription=lists.taskDescription
  }
  this.taskService.updateTasks(this.list)
  .subscribe(aa=>{
   
    this.list=aa;
    this.list=[]
  })
  alert('修改成功')
}//批量更新 对数组进行遍历，数组第i个对象的数据，

choose(task){
  this.list.push(task)
}//选中是push数据 ，但没有delete数据
  



}
