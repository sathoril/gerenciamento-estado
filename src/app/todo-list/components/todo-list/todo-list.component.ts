import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Task } from "../../task";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list.component.css']  
})
export class ToDoListComponent {

  @Input()
  list: Task[];

  @Output()
  toggleItem = new EventEmitter();
}