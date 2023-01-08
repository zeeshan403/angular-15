import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl ="http://localhost:3000/task"
  constructor(private http:HttpClient) { }

addtask(todo:Todo):Observable<Todo>{
  return this.http.post<Todo>(this.baseurl,todo);
}
getalltask():Observable<Todo[]>{
  return this.http.get<Todo[]>(this.baseurl);
}
deletetask(todo:Todo):Observable<Todo>{
  return this.http.delete<Todo>(this.baseurl+'/'+todo.id);
}
edittask(todo:Todo):Observable<Todo>{
  return this.http.put<Todo>(this.baseurl+'/'+todo.id,todo);
}
}
