import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
   taskobj:Todo = new Todo();
taskarr:Todo[]=[];
addtaskdata:string ='';
edittaskdata:string ='';
  constructor(private api:ApiService){}

  ngOnInit(): void {
     this.taskobj = new Todo();
     this.taskarr = [];
     this.gettasks();
     this.addtaskdata = '';
     this.edittaskdata ='';
  }
  addtasks(){
    this.taskobj.task = this.addtaskdata;
    this.api.addtask(this.taskobj).subscribe(res=>{
      this.ngOnInit();
      this.gettasks();
    },
    err=>{
      alert(err);
    })
  }
  gettasks(){
    this.api.getalltask().subscribe(res=>{
      this.taskarr = res
    })
  }
  deletetasks(task:Todo){
     this.api.deletetask(task).subscribe(res=>{
      this.ngOnInit();
     },
     err=>{
      alert("not delete");
     })
  }
  edittasks(){
    this.taskobj.task = this.edittaskdata;
    this.api.edittask(this.taskobj).subscribe(res=>{
      this.ngOnInit();
      let ref = document.getElementById('close')
      ref?.click();
    },
    err=>{
      alert("not update");
    })
  }
  calledit(task:Todo){
    this.taskobj = task;
    this.edittaskdata = task.task;
  }
}
