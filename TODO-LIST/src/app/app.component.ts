import { Component } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'TODO-LIST';
  public todos: Todo[] = [
    {
      id: 1,
      description: 'tarea 1',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 2,
      description: 'tarea 2',
      createdAt: new Date(),
      status: 'empty',
    },
    {
      id: 3,
      description: 'tarea 3',
      createdAt: new Date(),
      status: 'empty',
    }
  ]
}
