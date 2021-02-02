import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  toggle = new EventEmitter<any>();

  toggleItem(acao: string, identificador: number) {
    const task = this.list[identificador];

    switch (acao) {
      case 'iniciar':
        task.finalizado = false;
        task.iniciado = true;
        break;
      case 'finalizar':
        task.finalizado = true;
        task.iniciado = false;
        break;
      case 'cancelar':
        task.finalizado = false;
        task.iniciado = false;
        break;
      case 'retomar':
        task.finalizado = false;
        task.iniciado = true;
        break;
    }

    this.toggle.emit({
      task: { ...task }
    });
  }
}