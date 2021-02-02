import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { Store } from './todo.store';
import { tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  constructor(
    private http: HttpClient,
    private store: Store) { }

  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(
      tap(next => this.store.set('todolist', next)));


  toggle(event: any) {
    this.http
      .put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
      .subscribe(() => { 
        const value = this.store.value.todolist;
        const todolistAtualizada = value.map((task: Task) => {
          if (task.id === event.task.id) {
            return { ...task }
          } else {
            return task;
          }
        });

        this.store.set('todolist', todolistAtualizada);
      })      
  }

  criar(novaTarefa: Task) {
    this.http
      .post('http://localhost:3000/todolist', novaTarefa)
      .subscribe((novaTarefa) => {
        debugger;
        this.store.value.todolist.push(novaTarefa as Task);
        const todolistAtualizada = this.store.value.todolist
        
        this.store.set('todolist', todolistAtualizada);
      })
  }

}