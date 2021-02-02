import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { Task } from './task';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  
  constructor(private tasksService: TasksService, private formBuilder: FormBuilder) { }

  novaTarefa: Task = new Task();
  formulario: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      tarefa: this.formBuilder.control('')
    })
  }
  
  cadastrarNovaTarefa() {
    if (this.formulario.valid) {
      this.novaTarefa.iniciado = false;
      this.novaTarefa.finalizado = false;      
      this.novaTarefa.nome = this.formulario.get('tarefa').value;

      this.tasksService.criar(this.novaTarefa);
    }
    
  }
}